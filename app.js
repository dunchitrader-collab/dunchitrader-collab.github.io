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
  var FEED = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1qHOmFEOYqsSZcy0Y90LBUXbiTBGTJCqy2U-W3VE_zXdWWB6a59QclDbbO9tXoriWZda76rDWkn/pub?gid=1583719737&single=true&output=csv";

  /* The columns the Published tab is expected to carry. Solution design
     section 6.1.1 rule 1: columns are matched by NAME, never by position, so
     re-ordering them in the sheet is safe. */
  var REQUIRED = ["id","first_name","last_name","business","phone","trade","extra_trade","status"];

  var main   = document.getElementById("main");
  var search = document.getElementById("search");

  var PEOPLE = [];         // one entry per tradesperson
  var state = "loading";   // loading | ready | empty | unreachable | badfeed
  var trade = null;
  var committed = false;   // true once a suggestion is chosen or Enter pressed

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

      people.push({
        id: cell("id"),
        name: name,
        biz: cell("business"),
        phone: phone,
        trades: trades
      });
    });

    return people;
  }

  /* One entry per person per trade, so a two-trade person appears under both
     headings. The person themselves is still counted once. */
  function listings(){
    var out = [];
    PEOPLE.forEach(function(p){
      p.trades.forEach(function(t){
        out.push({trade:t, id:p.id, name:p.name, biz:p.biz, phone:p.phone, trades:p.trades});
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

    return c;
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
    var counts = {};
    all.forEach(function(l){ counts[l.trade] = (counts[l.trade] || 0) + 1; });
    Object.keys(counts).sort().forEach(function(t){
      if (t.toLowerCase().indexOf(q) > -1){
        items.push({text:t, kind:counts[t] + (counts[t] === 1 ? " trader" : " traders"), go:{trade:t}});
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
      all.filter(function(l){ return l.trade === trade; })
         .forEach(function(l){ list.appendChild(card(l)); });
      main.appendChild(list);
      return;
    }

    main.appendChild(el("h2", null, "What do you need?"));

    /* Trades with nobody in them do not appear at all — solution design 9.11.
       The grid is built from who is actually on the list, so an empty trade
       has no button to begin with. */
    var counts = {};
    all.forEach(function(l){ counts[l.trade] = (counts[l.trade] || 0) + 1; });

    var grid = el("div","trades");
    Object.keys(counts).sort().forEach(function(t){
      var b = el("button","trade");
      b.type = "button";
      b.appendChild(el("strong", null, t));
      b.appendChild(el("em", null, String(counts[t])));
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
