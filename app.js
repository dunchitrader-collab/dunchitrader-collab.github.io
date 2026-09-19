/* Dunchideock Village Suppliers.

   Ported from design/wireframe-dunchi-trader.html, which is the layout
   authority, with the wireframe's inline sample data replaced by the live
   Google Sheet feed. The rules in docs/SOLUTION-DESIGN-dunchi-trader.md are
   the logic authority.

   There is no build step. This file is served exactly as it is committed, so
   it must stay plain JavaScript that a browser runs directly. No bundler, no
   transpiler, no framework. */

(function(){
  "use strict";

  /* The published CSV of the Published tab. Read-only and public: the page
     holds no credential for the sheet and has no way to write to it. */
  var FEED = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1qHOmFEOYqsSZcy0Y90LBUXbiTBGTJCqy2U-W3VE_zXdWWB6a59QclDbbO9tXoriWZda76rDWkn/pub?gid=1915382769&single=true&output=csv";

  /* The columns the Published tab is expected to carry. Solution design
     section 6.1.1 rule 1: columns are matched by NAME, never by position, so
     re-ordering them in the sheet is safe. */
  var REQUIRED = ["id","first_name","last_name","business","phone","trade","extra_trade","status"];

  /* Carried by the Published tab from 2026-09-18 onward: the villagers' own
     words and the names of the villagers who gave them. Optional on purpose —
     the site must keep working against a sheet that has not got them yet. */
  var OPTIONAL = ["recommendations","recommended_by"];

  var main   = document.getElementById("main");
  var search = document.getElementById("search");

  /* The deployed Apps Script web app. It is bound to the sheet and can ONLY
     append a row to the Votes tab — it cannot read, edit or delete anything,
     and it cannot touch Published (apps-script/Code.gs).

     Set in THIS repository and pushed to both remotes, never hand-edited in
     the live repo, so the two repositories stay byte-identical. If it is ever
     redeployed, the Apps Script deployment id changes and this value must be
     updated here — see apps-script/DEPLOY.md. */
  var VOTES_ENDPOINT = "https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec";

  /* "What did they do for you?" is required, minimum 7 CHARACTERS (the name
     says WORDS but it has always been a character count) — solution design
     §7.4, and the same seven the sheet's CHECK THIS trigger uses.

     Seven, not fifteen: the owner ruled on 2026-09-18 that "Fixed gate" is
     about as short as a real answer gets, and fifteen turned away the villager
     describing a small job honestly. Seven still catches a stray "ok". */
  var MIN_WORDS = 7;

  var PEOPLE = [];         // one entry per tradesperson
  var state = "loading";   // loading | ready | empty | unreachable | badfeed
  var trade = null;
  var committed = false;   // true once a suggestion is chosen or Enter pressed
  var VOTES = {};          // recommendations added this visit, keyed by trader id
  var DONE  = {};          // traders this visitor has already recommended

  /* ---- text size ----
     Solution design section 9.9. The three sizes and the remembered setting.
     The buttons themselves are sized in fixed px in style.css, so they do not
     grow as they are pressed. */
  var SIZES = ["20px","24px","29px"];
  function setSize(i){
    document.documentElement.style.setProperty("--fs", SIZES[i]);
    for (var n=0;n<3;n++){
      document.getElementById("s"+(n+1)).setAttribute("aria-pressed", String(n===i));
    }
    try { localStorage.setItem("dvs-size", String(i)); } catch(e){}
  }
  for (var i=0;i<3;i++){
    (function(n){
      document.getElementById("s"+(n+1)).addEventListener("click", function(){ setSize(n); });
    })(i);
  }
  try {
    var saved = localStorage.getItem("dvs-size");
    if (saved !== null) setSize(Math.min(2, Math.max(0, parseInt(saved,10)||0)));
  } catch(e){}

  /* ---- helpers ---- */
  function tel(s){ return "tel:" + s.replace(/[^\d+]/g,""); }

  function el(tag, cls, text){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---- CSV parsing ----
     Solution design section 6.1.1 rule 2. The experience text is free prose
     typed by a villager, so a comma inside a quoted field is the normal case,
     not the edge case. Splitting on commas alone would shift every field
     after it. Handles embedded commas, embedded newlines and doubled quotes. */
  function parseCSV(text){
    var rows = [], row = [], field = "", inQuotes = false, i = 0;

    text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    while (i < text.length){
      var c = text.charAt(i);

      if (inQuotes){
        if (c === '"'){
          if (text.charAt(i+1) === '"'){ field += '"'; i += 2; continue; }
          inQuotes = false; i++; continue;
        }
        field += c; i++; continue;
      }

      if (c === '"'){ inQuotes = true; i++; continue; }
      if (c === ','){ row.push(field); field = ""; i++; continue; }
      if (c === '\n'){ row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
      field += c; i++;
    }

    row.push(field);
    rows.push(row);

    // Drop wholly blank trailing rows, which a spreadsheet export often adds.
    return rows.filter(function(r){
      return r.some(function(cell){ return cell.trim() !== ""; });
    });
  }

  function normaliseHeader(h){
    return h.trim().toLowerCase().replace(/\s+/g, "_");
  }

  /* ---- turning the sheet into people ----
     One row is one tradesperson. A person carrying both trade and extra_trade
     belongs under both headings but is still one person. */
  function build(rows){
    var header = rows[0].map(normaliseHeader);

    var index = {};
    REQUIRED.forEach(function(name){ index[name] = header.indexOf(name); });

    var missing = REQUIRED.filter(function(name){ return index[name] < 0; });
    if (missing.length) return null;   // solution design 6.1.1 rule 3

    /* OPTIONAL columns. Looked up the same way but deliberately NOT in
       REQUIRED: a sheet that predates them still renders, it simply shows no
       recommendations. Missing means index -1, which cell() reads as "". */
    OPTIONAL.forEach(function(name){ index[name] = header.indexOf(name); });

    var people = [];
    rows.slice(1).forEach(function(r){
      function cell(name){ return (r[index[name]] || "").trim(); }

      if (cell("status").toLowerCase() !== "active") return;

      var name = [cell("first_name"), cell("last_name")]
                   .filter(Boolean).join(" ").trim();
      var phone = cell("phone");
      if (!name || !phone) return;

      var trades = [cell("trade"), cell("extra_trade")].filter(Boolean);
      if (!trades.length) return;

      /* The villagers' own words, and who gave them. These two columns are
         OPTIONAL — they are not in REQUIRED, so a sheet without them still
         renders exactly as before rather than failing. Several contributions
         share one cell, separated by a blank line, and the nth name in
         `recommended_by` belongs to the nth block in `recommendations`. */
      var said  = splitRecs(cell("recommendations"));
      var byWho = splitRecs(cell("recommended_by"));
      var recs  = said.map(function(why, n){
        return { why: why, by: byWho[n] || "a villager" };
      });

      people.push({
        id: cell("id"),
        name: name,
        biz: cell("business"),
        phone: phone,
        trades: trades,
        recs: recs
      });
    });

    return people;
  }

  /* One entry per person per trade, so a two-trade person appears under both
     headings. The person themselves is still counted once. */
  /* Several recommendations live in one spreadsheet cell, separated by a
     blank line. Split them back out, dropping anything empty so a trailing
     blank line cannot produce a phantom recommendation. */
  function splitRecs(v){
    if (!v) return [];
    return String(v).split(/\n\s*\n/).map(function(s){ return s.trim(); })
                    .filter(function(s){ return s.length; });
  }

  /* Trades are grouped IGNORING CAPITALS, showing the first spelling met.

     Measured 2026-09-18: without this, a row typed `plumber` made a second
     tile beside `Plumber` with one person under it, invisible to anyone who
     tapped the first. Whitespace already merged, because every cell is
     trimmed on the way in; capitals did not. The owner retypes the trade when
     he tidies the sheet, so one slipped shift key hid half a trade from the
     village. Build plan row 3.4.

     The DISPLAY name is whichever spelling appeared first, so the village sees
     ordinary words rather than a lower-cased key. */
  function tradeKey(t){ return String(t || "").toLowerCase(); }

  /* {key: {label, count}} over every listing, in first-seen order. */
  function tradeGroups(all){
    var groups = {}, order = [];
    all.forEach(function(l){
      var k = tradeKey(l.trade);
      if (!k) return;
      if (!groups[k]){ groups[k] = {label: l.trade, count: 0}; order.push(k); }
      groups[k].count++;
    });
    groups._order = order;
    return groups;
  }

  function listings(){
    var out = [];
    PEOPLE.forEach(function(p){
      p.trades.forEach(function(t){
        out.push({trade:t, id:p.id, name:p.name, biz:p.biz, phone:p.phone, trades:p.trades, recs:p.recs});
      });
    });
    return out;
  }

  /* ---- a tradesperson's card ---- */
  function card(l){
    var c = el("article","card");
    c.appendChild(el("h3", null, l.name));
    if (l.biz) c.appendChild(el("p","biz", l.biz));
    c.appendChild(el("p","does", l.trades.join("  ·  ")));

    var a = el("a","call");
    a.href = tel(l.phone);
    a.setAttribute("aria-label", "Call " + l.name + " on " + l.phone);
    a.appendChild(el("span","word","CALL"));
    a.appendChild(el("span","num", l.phone));
    c.appendChild(a);

    /* The villagers' own words. Those from the sheet come first — everyone
       sees those — followed by anything this visitor has added in this visit,
       which only they can see until it reaches the sheet. */
    var recs = (l.recs || []).concat(VOTES[l.id] || []);

    if (recs.length){
      c.appendChild(el("p","tally", recs.length === 1
        ? "1 villager recommends this tradesperson"
        : recs.length + " villagers recommend this tradesperson"));

      /* A popular tradesperson must not become a wall of text. At the largest
         size a single recommendation already fills much of a 320px screen, so
         only the two most recent are shown, and the rest sit behind one large
         button. Nothing is hidden from anybody — it is one tap, and the tap
         target is a full-width button rather than a link. */
      var SHOWN = 2;
      var box = el("div","recs");

      function addRec(r){
        var d = el("div","rec");
        d.appendChild(el("p", null, "“" + r.why + "”"));
        d.appendChild(el("span","by", "Recommended by " + r.by));
        box.appendChild(d);
      }

      recs.slice(0, SHOWN).forEach(addRec);
      c.appendChild(box);

      if (recs.length > SHOWN){
        var rest = recs.length - SHOWN;
        var more = el("button","more", rest === 1
          ? "Read 1 more recommendation"
          : "Read " + rest + " more recommendations");
        more.type = "button";
        more.addEventListener("click", function(){
          more.remove();
          recs.slice(SHOWN).forEach(addRec);
        });
        c.appendChild(more);
      }
    }

    if (DONE[l.id]){
      /* WHAT THIS MAY AND MAY NOT CLAIM, and the line between them is measured.

         Under the owner's ruling D1b-6G7f-19092026 the recommendation is now
         SENT to the village list — the endpoint appends it to that person's row
         on the Published tab, which is the one feed the site reads. So the old
         second line, "It will not be sent to the village list until the site is
         finished", became false and is gone.

         But the page still cannot say it ARRIVED. The reply is opaque by
         measurement (solution design §6.2): type "opaque", status 0, zero
         readable headers, and the promise RESOLVES whether the write succeeded
         or not. The page is told nothing, so it must not claim anything.

         Hence: "has been sent" — which is true of the request and is all the
         page knows — and the five-minute republish lag named plainly, because a
         villager who reloads and sees nothing must not think it was lost. That
         lag is Google's and is normal (handover Layer 1). */
      c.appendChild(el("p","thanks","Thank you — your recommendation has been sent to the village list."));
      c.appendChild(el("p","todo","It takes about five minutes to appear on this page. Nothing has been lost."));
      return c;
    }

    var v = el("button","vote","I recommend them too");
    v.type = "button";
    c.appendChild(v);

    v.addEventListener("click", function(){
      v.remove();
      c.appendChild(panel(l));
    });

    return c;
  }

  /* The whole recommendation is two boxes, in place on the card. Nothing the
     villager already knows is re-typed, and they never leave the page.
     Solution design §7.4 and §7.5. */
  function panel(l){
    var p = el("div","panel");
    p.appendChild(el("h4","", "You are recommending " + l.name));

    var key = (l.id || l.name).replace(/\W+/g,"");
    var idN = "n-" + key;
    var idW = "w-" + key;

    /* THE GOOGLE FORM'S OWN WORDS, SPLIT ACROSS A LABEL AND A NOTE — and the
       split is a measurement, not a preference.

       WHY THE WORDS CHANGED AT ALL. Owner's ruling D1b-6G7f-19092026: this
       panel now feeds the PUBLISHED tab, so what a villager types here reaches
       column L and is RENDERED ON THE CARD for the whole village to read
       (row 3.5). The old label said only "Your name", which was honest while
       the words went to a tab nobody read and is not honest now — it asks for a
       name without saying where it goes. The form already tells them, in a
       sentence they have seen before, so both routes must say the same thing:

         "Finally please give your name (if you want to share it on the
          website) so a fellow villager might reach out to you if they have
          any questions."

       WHY IT IS ONE LABEL AND NOT A LABEL PLUS A NOTE — this was measured both
       ways before it was decided, because the sentence is long and the audience
       zooms. Chrome 148, 320px, the largest A pressed, distance from the top of
       "Add my recommendation" to the bottom of the screen:

         the shipped panel before this change (label "Your name")   299 px below
         this change, the form's sentence as ONE label              289 px below
         a short label plus the rest as a note under the field      542 px below

       Two things follow, and the second is the surprise. First, the send button
       was ALREADY below the fold at the largest text size — that is shipped
       behaviour from rows 4.1 and 4.5, not something the longer wording caused,
       and this change does not make it worse. Second, splitting the sentence in
       two is the WORST of the three: the note needs its own margins above and
       below, and that costs more height than the wrapping it saves. So the
       form's sentence stays in one label, which is both the shortest panel and
       the plainest reading of the owner's "really simple, really quick".
       "Finally" is dropped because there are no questions before it here.

       Nothing overflows its box at any of the three text sizes or at 200% zoom
       on a 320px screen — measured, and that is the owner's absolute rule.

       IT STAYS OPTIONAL, which is what the form's own "(if you want to)" means.
       A blank becomes "a villager" on the card, exactly as the publisher stores
       it. Making it required would ask more of a villager on the site than the
       form asks, and would turn away somebody who wants to recommend a
       neighbour without putting their own name on a public page. */
    var ln = el("label", null,
      "Your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions");
    ln.setAttribute("for", idN);
    var inp = document.createElement("input");
    inp.id = idN; inp.type = "text"; inp.autocomplete = "name";

    var lw = el("label", null, "What did they do for you?");
    lw.setAttribute("for", idW);
    var ta = document.createElement("textarea");
    ta.id = idW; ta.rows = 3;
    ta.setAttribute("aria-describedby", idW + "-err");

    /* The error sits UNDER the box as plain text. Colour never carries the
       meaning on its own, and the message never clears what was typed. */
    var err = el("p","fielderr","");
    err.id = idW + "-err";
    err.setAttribute("role","alert");
    err.hidden = true;

    var send = el("button","send","Add my recommendation");
    send.type = "button";
    var cancel = el("button","cancel","Cancel");
    cancel.type = "button";

    p.appendChild(ln); p.appendChild(inp);
    p.appendChild(lw); p.appendChild(ta); p.appendChild(err);
    p.appendChild(send); p.appendChild(cancel);

    send.addEventListener("click", function(){
      var by  = inp.value.trim() || "a villager";   // blank becomes "a villager"
      var why = ta.value.trim();

      if (why.length < MIN_WORDS){
        err.textContent = "Please add a word or two more — even “Fixed gate” is enough.";
        err.hidden = false;
        ta.setAttribute("aria-invalid","true");
        ta.focus();
        return;                                     // what they typed is untouched
      }

      err.hidden = true;
      ta.removeAttribute("aria-invalid");

      (VOTES[l.id] = VOTES[l.id] || []).push({why:why, by:by});
      DONE[l.id] = true;

      sendRecommendation(l.id, by, why);
      render();
    });

    cancel.addEventListener("click", function(){ render(); });

    setTimeout(function(){ inp.focus(); }, 0);
    return p;
  }

  /* THE ONLY NETWORK SEND FOR A RECOMMENDATION. It posts the trader ID, never
     the name, because names change and ids do not (solution design §4.1, §7.5).

     WHERE IT LANDS, from 2026-09-19: the endpoint appends the words to column K
     and the villager's name to column L of that id's row on the PUBLISHED tab,
     through the same function the automatic publisher uses for a duplicate form
     submission. Owner's ruling D1b-6G7f-19092026. It used to append a row to a
     Votes tab that nothing read. The body this function sends is unchanged —
     {id, name, text} — because the endpoint parses exactly that shape.

     THE RETURN VALUE IS NOT A SUCCESS SIGNAL, and nothing may treat it as one.
     `true` means only "the request was handed to the browser". Whether the row
     reached the Votes tab is unknowable from this page — see below. */
  function sendRecommendation(traderId, name, text){
    if (!VOTES_ENDPOINT) return false;   // no endpoint configured: send nothing

    /* MEASURED 2026-09-18T17:02:32Z from the live Pages origin in a real
       browser — solution design §6.2 records the full measurement.

       The reply is OPAQUE and carries no information: type "opaque",
       status 0, ok false, url "", and zero readable headers. Those are the
       values WHETHER OR NOT the append succeeded.

       The promise RESOLVES — it does not reject — so the catch below cannot
       fire on a network or server failure; it only guards a synchronous throw.
       DO NOT add error handling that branches on `ok`, on `status`, or on a
       .catch(): it would report success on a total failure. The thank-you is
       optimistic by design and by measurement.

       WHERE THE PROOF IS, corrected 2026-09-19 under D1b-6G7f-19092026: the
       PUBLISHED tab, columns K and L of that trader's row — no longer the Votes
       tab, which this endpoint stopped writing to. The words also reach the
       page itself within Google's five-minute republish lag, so the card is a
       second place to see it. Neither is visible to this function.

       At the network layer the POST returns 302 (with
       access-control-allow-origin: *), the browser follows it to a 200, then
       aborts the body because of mode:"no-cors". That abort is the normal,
       successful ending — not an error. */
    try {
      fetch(VOTES_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "text/plain;charset=utf-8"},
        body: JSON.stringify({id: traderId, name: name, text: text})
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---- the three message states ----
     Solution design 6.1.1 rule 3 and 7.4. Each says something a villager can
     act on, in the page's own voice. Never a blank page, and never a bare
     error string. */
  function notice(heading, lines){
    var n = el("div","notice");
    n.appendChild(el("h2", null, heading));
    lines.forEach(function(t, i){
      n.appendChild(el("p", i === lines.length - 1 ? "quiet" : null, t));
    });
    return n;
  }

  function message(){
    if (state === "loading"){
      return el("p","loading","Loading the list…");
    }
    if (state === "empty"){
      return notice("Nobody on the list just yet", [
        "The list is being put together. Please look again in a day or two.",
        "If you know a good tradesperson, you can add them using the button at the bottom of this page."
      ]);
    }
    if (state === "unreachable"){
      return notice("The list will not load at the moment", [
        "This is usually the internet connection rather than anything wrong with the list.",
        "Please check you are online and try again in a few minutes.",
        "Nothing has been lost — the list is safe and will come back."
      ]);
    }
    // badfeed
    return notice("The list is being updated", [
      "The list is not available to show at the moment. Please try again a little later.",
      "Nothing is lost and nothing is wrong with your phone or computer.",
      "If it is still like this tomorrow, please mention it on the village chat."
    ]);
  }

  /* ---- autocomplete ----
     Solution design 9.11. Trades first, then people and businesses. Every
     suggestion is a full-width button, so it is a real tap target and sits in
     the keyboard tab order. Matching letters are UNDERLINED, never coloured,
     so colour never carries meaning on its own. */
  var sugg      = document.getElementById("sugg");
  var suggCount = document.getElementById("sugg-count");

  function mark(text, q){
    var frag = document.createDocumentFragment();
    var i = text.toLowerCase().indexOf(q);
    if (i < 0 || !q){ frag.appendChild(document.createTextNode(text)); return frag; }
    frag.appendChild(document.createTextNode(text.slice(0, i)));
    var m = document.createElement("mark");
    m.textContent = text.slice(i, i + q.length);
    frag.appendChild(m);
    frag.appendChild(document.createTextNode(text.slice(i + q.length)));
    return frag;
  }

  function suggest(q, all){
    sugg.innerHTML = "";
    search.setAttribute("aria-expanded","false");
    suggCount.textContent = "";
    if (!q || committed) return;

    var items = [], seen = {};

    // trades
    var groups = tradeGroups(all);
    groups._order.slice().sort(function(a,b){
      return groups[a].label.localeCompare(groups[b].label);
    }).forEach(function(k){
      var t = groups[k].label, n = groups[k].count;
      if (t.toLowerCase().indexOf(q) > -1){
        items.push({text:t, kind:n + (n === 1 ? " trader" : " traders"), go:{trade:t}});
      }
    });

    // people and businesses
    all.forEach(function(l){
      [l.name, l.biz].forEach(function(txt){
        if (!txt || seen[txt]) return;
        if (txt.toLowerCase().indexOf(q) > -1){
          seen[txt] = 1;
          items.push({text:txt, kind:l.trades.join(", "), go:{q:l.name}});
        }
      });
    });

    if (!items.length) return;
    items = items.slice(0, 6);

    items.forEach(function(it){
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role","option");
      b.setAttribute("aria-selected","false");
      var label = document.createElement("span");
      label.appendChild(mark(it.text, q));
      b.appendChild(label);
      b.appendChild(el("span","kind", it.kind));
      b.addEventListener("click", function(){
        if (it.go.trade){ search.value = ""; trade = it.go.trade; committed = false; }
        else { search.value = it.go.q; trade = null; committed = true; }
        render();
        window.scrollTo(0,0);
      });
      sugg.appendChild(b);
    });

    search.setAttribute("aria-expanded","true");
    suggCount.textContent = items.length + " suggestions";
  }

  function render(){
    main.innerHTML = "";

    if (state !== "ready"){
      sugg.innerHTML = "";
      search.setAttribute("aria-expanded","false");
      main.appendChild(message());
      return;
    }

    var all = listings();
    var q = search.value.trim().toLowerCase();

    suggest(q, all);

    if (q && committed){
      var hits = all.filter(function(l){
        return (l.name + " " + l.biz + " " + l.trades.join(" ")).toLowerCase().indexOf(q) > -1;
      });
      main.appendChild(el("h2", null,
        hits.length + (hits.length === 1 ? " match" : " matches") + " for “" + search.value.trim() + "”"));
      if (!hits.length){
        main.appendChild(el("p","none","Nothing found. Try a trade, such as plumber or roofer."));
        return;
      }
      var cs = el("div","cards");
      hits.forEach(function(l){ cs.appendChild(card(l)); });
      main.appendChild(cs);
      return;
    }

    if (trade && !q){
      var back = el("button","back","←  All trades");
      back.type = "button";
      back.addEventListener("click", function(){
        search.value = "";        // Back always clears the search
        committed = false;
        trade = null;
        render();
        window.scrollTo(0,0);
      });
      main.appendChild(back);
      main.appendChild(el("h2", null, trade));
      var list = el("div","cards");
      all.filter(function(l){ return tradeKey(l.trade) === tradeKey(trade); })
         .forEach(function(l){ list.appendChild(card(l)); });
      main.appendChild(list);
      return;
    }

    main.appendChild(el("h2", null, "What do you need?"));

    /* Trades with nobody in them do not appear at all — solution design 9.11.
       The grid is built from who is actually on the list, so an empty trade
       has no button to begin with. */
    var groups = tradeGroups(all);

    var grid = el("div","trades");
    groups._order.slice().sort(function(a,b){
      return groups[a].label.localeCompare(groups[b].label);
    }).forEach(function(k){
      var t = groups[k].label;
      var b = el("button","trade");
      b.type = "button";
      b.appendChild(el("strong", null, t));
      b.appendChild(el("em", null, String(groups[k].count)));
      b.addEventListener("click", function(){
        search.value = "";        // picking a trade always clears the search
        committed = false;
        trade = t;
        render();
        window.scrollTo(0,0);
      });
      grid.appendChild(b);
    });
    main.appendChild(grid);
  }

  search.addEventListener("input", function(){
    trade = null;
    committed = false;
    render();
  });
  search.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
      e.preventDefault();
      committed = true;
      render();
    } else if (e.key === "Escape"){
      search.value = "";
      committed = false;
      render();
    }
  });

  /* ---- load ----
     A feed that cannot be mapped to the expected columns NEVER renders. The
     responses tab holds villagers' email addresses and unreviewed entries, so
     a page that rendered whatever it received would publish them. */
  function load(){
    var timer = setTimeout(function(){ fail("unreachable"); }, 15000);
    var settled = false;

    function fail(why){
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      state = why;
      render();
    }

    fetch(FEED, {cache:"no-store"})
      .then(function(r){
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function(text){
        if (settled) return;
        settled = true;
        clearTimeout(timer);

        var rows = parseCSV(text);
        if (!rows.length){ state = "badfeed"; render(); return; }

        var people = build(rows);
        if (people === null){ state = "badfeed"; render(); return; }

        PEOPLE = people;
        state = people.length ? "ready" : "empty";
        render();
      })
      .catch(function(){ fail("unreachable"); });
  }

  render();
  load();
})();
