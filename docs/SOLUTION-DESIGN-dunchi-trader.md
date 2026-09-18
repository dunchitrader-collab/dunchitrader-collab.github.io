# SOLUTION DESIGN — dunchi-trader

**Project:** Dunchideock village trades directory
**Last updated: 2026-09-18T13:42:54Z**

This document stands alone. It assumes no access to any system, repository, standard or
person other than the two accounts named in the Inheritance section. Anyone holding those
two logins can read this document and understand the whole system.

---

## 1. PROBLEM STATEMENT

Dunchideock is a village in Devon. When a resident needs a plumber, an electrician or
someone to cut a hedge, the knowledge of who is good already exists — it sits in the heads
of neighbours and scrolls past in a WhatsApp group, where it is lost within a day. There is
no durable, searchable place to put it.

The audience is largely elderly. They will use a phone. They will zoom in heavily. A design
that works for a 35-year-old developer on a laptop will fail this audience completely, and a
first design attempt was rejected on exactly those grounds.

The requirement as stated by the project owner, quoted verbatim and not paraphrased:

> "The key to this is really easy navigation. People will be using websites and they will be
> using their phone. Given it's the older generation, I expect that they will be zooming in
> quite a lot. So this needs to be a really simple, really quick and extremely easy to use
> web app."

> "Github pages is fine as long as the site easy VERY easy to search by work type."

> "The site needs to be dynamic. Most will use on their phone. However it must work on a
> computer too."

> "In all zoom functions make sure the text never rolls outside the box."

> "I want to be able to hand over the operating site to anyone else who inherits that google
> email account"

The problem is therefore not "build a directory". It is: **capture what neighbours already
know, and put it in front of an elderly villager on a phone in two taps, with no login, no
cost, and no ongoing administration.**

### 1.1 What success looks like

The entire villager journey is three actions:

1. Open the link from the village WhatsApp group.
2. Tap a trade.
3. Tap the big green Call button.

That is the whole product. Anything that adds a fourth step is a design failure.

### 1.2 What this is not

This is a **recommendations list**, deliberately not a review site. The distinction is
load-bearing and drives several decisions below. A recommendation is a neighbour saying "they
were good, here is what they did for me". A review implies scoring, comparison and the right
of reply, none of which this project provides or wants.

### 1.3 Wording rule

Always **"tradesperson"**, never "tradesman". "Trader" is acceptable and is the project
owner's own word. This applies to all user-facing copy, all documentation, and all code
comments and identifiers.

---

## 2. PROPOSED SOLUTION

A single static web page, hosted free on GitHub Pages, which reads its content at page load
from a published Google Sheet CSV.

There is no server, no database, no hosting bill and no software to patch. The moving parts
are a Google Form, a Google Sheet, one static page and one small Google Apps Script.

Content enters through a Google Form. The project owner reviews each submission and copies
approved rows onto a separate curated tab. Only that curated tab is published, and only that
tab is ever read by the site. Editing the live directory therefore means editing a
spreadsheet — something the owner can do from his phone.

Villagers can add a second, third or fourth recommendation to a tradesperson already on the
list, directly on the page, without leaving it and without re-typing anything already known.

### 2.1 Why this shape

| Property | How this design delivers it |
|---|---|
| Zero running cost | GitHub Pages and Google Sheets are both free at this scale |
| Zero maintenance | No server, no dependencies, no security patching |
| Owner can edit from a phone | The content lives in a spreadsheet, not a database |
| Cannot be defaced by a villager | The site can only *read* the published tab (§8) |
| Survives the owner leaving | Two account logins reconstitute the whole system (§10) |
| Works at 200% zoom on a phone | Accessibility rules in §9 are binding constraints |

---

## 3. TECHNICAL ARCHITECTURE

### 3.1 Component diagram

```
  VILLAGER (recommending someone new)
        |
        |  fills in
        v
  +---------------------+
  |   Google Form       |
  +---------------------+
        |  appends a row
        v
  +---------------------------------------------+
  |  Google Sheet                               |
  |                                             |
  |  [ Form responses ]  raw, messy, private    |
  |         |                                   |
  |         |  OWNER reviews and copies across  |
  |         v          (manual gate)            |
  |  [ Published ]      curated, public         |
  |         |                                   |
  |  [ Votes ]          append-only             |
  +---------------------------------------------+
            |                    ^
            | published as       | appends one row
            | CSV (~5 min lag)   |
            v                    |
  +---------------------+   +---------------------+
  |  Published CSV URL  |   |  Apps Script        |
  |  (read-only, public)|   |  web app endpoint   |
  +---------------------+   +---------------------+
            |                    ^
            |  fetch() on load   |  POST on vote
            v                    |
  +---------------------------------------------+
  |  Static page — GitHub Pages                 |
  |  index.html + style.css + app.js            |
  |  no build step, served exactly as committed |
  +---------------------------------------------+
            |
            v
  VILLAGER (looking for a tradesperson)
  tap trade -> tap CALL
```

### 3.2 The two directions of travel

Data moves in two directions and they have deliberately different trust levels.

**Inbound to the site (read).** Sheet → published CSV → page. Strictly one-way. The page
holds no credential for the sheet and has no write path to it. See §8.1.

**Outbound from the site (write).** Page → Apps Script → Votes tab. Narrow, append-only, and
cannot reach the Published tab. See §8.2, which states the trade-off plainly rather than
glossing it.

### 3.3 Visibility rules

These two paths differ, and the difference is intentional:

| Event | Where it lands | When it becomes visible |
|---|---|---|
| A **new tradesperson** is submitted via the form | Form responses tab | Only after the owner moves the row to Published |
| A **vote** on an existing tradesperson | Votes tab | Immediately |

A vote appears immediately because it attaches to somebody the owner has *already* approved.
A new tradesperson never appears without a human decision.

---

## 4. KEY COMPONENTS

| Component | Responsibility |
|---|---|
| **Google Form** | The only entry route for a new tradesperson. Carries the validation described in §7.1. |
| **Form responses tab** | Raw landing area. Messy by nature. Nobody but the owner ever sees it. |
| **Helper columns** on that tab | `phone_key`, `name_key`, `verdict` — the sheet flags its own duplicates (§7.2). |
| **Published tab** | The curated list. **The only thing the site reads.** |
| **Votes tab** | Append-only record of extra recommendations posted from the page. |
| **Published CSV URL** | The read interface. Public, read-only, auto-republishing. |
| **index.html / style.css / app.js** | The whole front end. Plain files, no build step. |
| **Apps Script web app** | The single write endpoint. Appends one row to Votes. Source committed to the repo. |
| **README.md** | Written for a non-technical inheritor. |
| **docs/RESTORE-dunchi-trader.md** | Full rebuild-from-zero runbook. |

### 4.1 Published tab schema

```
id, first_name, last_name, business, phone, trade, extra_trade, status
```

- `id` — `T001`, `T002`, … Assigned once and **never changed**. Votes reference this id.
- `extra_trade` — a second trade, so one person appears under both without a duplicate row.
- `status` — controls whether the row renders.

`id` is immutable because it is the join key for votes. Renaming a person is safe; changing
their id silently orphans every recommendation attached to them.

### 4.2 Identity and de-duplication key

**The phone number is the identity, not the name.** Names are misspelt constantly —
"Tredinnick", "Tredinick", "Treddinick" are three rows for one person. Numbers almost never
are. All duplicate detection keys off a normalised phone number (§7.2).

---

## 5. TECHNOLOGY STACK

| Layer | Choice | Why |
|---|---|---|
| Hosting | GitHub Pages | Free, permanent, HTTPS included, no payment card |
| Markup | Plain HTML5 | No build step (§10) |
| Styling | Plain CSS, custom properties | No preprocessor, editable in a browser |
| Behaviour | Plain ES2015+ JavaScript, no framework | Runs exactly as committed |
| Typeface | Atkinson Hyperlegible, Verdana/Arial fallback | §9.4 |
| Data store | Google Sheets | The owner can edit it from a phone |
| Data transport | Published CSV over HTTPS | No API key, no auth, no SDK |
| Write endpoint | Google Apps Script web app | Free, bound to the sheet, no server |
| Persistence (client) | `localStorage` | Remembers the chosen text size only |

**There is no package manager, no lockfile and no `node_modules`.** This is a constraint, not
an omission — see §10.

---

## 6. INTEGRATION POINTS

| # | Integration | Direction | Auth | Failure mode |
|---|---|---|---|---|
| 1 | Google Form → Sheet | Inbound | Google-internal | Form unavailable; site unaffected |
| 2 | Published CSV → page | Inbound, read-only | None (public URL) | Handled explicitly (§7.4) |
| 3 | Page → Apps Script → Votes | Outbound, append-only | None by design (§8.2) | Optimistic UI (§6.2) |
| 4 | Google Fonts / self-hosted font | Inbound | None | Falls back to Verdana/Arial |

### 6.1 The published CSV

Published via **File → Share → Publish to web**, Published tab, CSV format, automatic
republishing on.

Three properties of this mechanism must be understood by anyone maintaining the site:

1. **There is a republish lag of roughly five minutes.** An edit to the sheet does not appear
   on the next page refresh. This is normal and is not a bug. The README must say so, or an
   inheritor will conclude the site is broken.
2. **Never click "Stop publishing".** That takes the site offline instantly.
3. **The published URL is tied to the tab's internal id.** Deleting and recreating the tab —
   even with the same name — breaks the URL. **Renaming the tab is safe.**

### 6.1.1 Reading the CSV — three binding rules

The feed is a spreadsheet maintained by hand from a phone. It will be edited by somebody who
is not thinking about the parser. These three rules exist so that ordinary, reasonable
spreadsheet edits cannot break the site.

1. **Columns are matched by HEADER NAME, never by position.** A villager's recommendation
   text routinely contains a comma, and the owner may one day drag a column somewhere more
   convenient. Position-based mapping would silently shift every field by one and render a
   phone number into the trade slot — a wrong answer that still looks like a working page.
   Header-name mapping means re-ordering the columns in the sheet is a safe thing to do.

2. **The parser must handle quoted fields properly** — embedded commas, embedded newlines and
   escaped quotes. This is not a theoretical nicety: the experience text is free prose typed
   by a villager, so a comma in it is the normal case, not the edge case. Splitting on commas
   alone would break the row and shift every field after it.

3. **An unexpected or malformed header degrades to the failure state** described in §7.4, and
   never renders. If the feed does not carry the expected columns, the correct behaviour is
   an honest message, because garbage rendered confidently is worse than an error: it would
   publish unreviewed data while appearing to work. This rule is what stops the 2026-09-18
   wrong-tab condition from reaching a villager if it ever recurs.

### 6.2 The Apps Script response, and a known gotcha

**MEASURED 2026-09-18T17:02:32Z against the deployed endpoint, build plan row 4.3.** What
follows is what was observed, not what was expected. The previous text of this section was an
inference and is preserved at the end so the correction is visible.

Posting to the Apps Script web app from the GitHub Pages origin is a cross-origin request, and
the shipped call uses `mode: 'no-cors'` with `Content-Type: text/plain;charset=utf-8`.

**Method.** A real Chromium browser (HeadlessChrome 148, 320px mobile viewport) was pointed at
the live site `https://dunchitrader-collab.github.io`, a trade was tapped, and one
recommendation was submitted through the card's own panel — the shipped path, not a synthetic
fetch. `window.fetch` was wrapped only to observe what the shipped call returned; the call
itself was unaltered. Observations were taken at two levels: what the page's JavaScript can
see, and what the browser's network layer records.

**What the page can see — an opaque response, as predicted, but the promise RESOLVES:**

| Property | Observed value |
|---|---|
| Promise outcome | `resolved` — it does **not** throw or reject |
| `Response.type` | `opaque` |
| `Response.status` | `0` |
| `Response.ok` | `false` |
| `Response.redirected` | `false` |
| `Response.url` | `""` (empty) |
| Readable headers | none — zero entries enumerable |
| Round trip | **2779.9 ms** |

The design's conclusion therefore **stands, and is now measured rather than assumed**: the page
cannot tell whether the write succeeded, so the thank-you is shown **optimistically**, on the
basis of having sent the request rather than on a reply.

Two details matter for anyone maintaining this, and both correct the old wording:

1. **The promise resolves; it does not reject.** A `catch` around the `fetch` will therefore
   not fire on a failed write, and `try/catch` cannot be used to detect one. `ok` is `false`
   and `status` is `0` for an opaque response *regardless of whether the append succeeded* —
   these values carry no information and must never be branched on.
2. **The stated reason in the old text was wrong.** Apps Script *does* return
   `access-control-allow-origin: *` here. The reply is unreadable because `mode: 'no-cors'`
   makes the browser discard it, not because the header is missing.

**What the network layer records** (observable to the browser, never to the page):

- `POST` to `…/exec` with `referer: https://dunchitrader-collab.github.io/` → **HTTP 302**,
  carrying `access-control-allow-origin: *`, `content-length: 0`, and a `location` pointing at
  `https://script.googleusercontent.com/macros/echo?user_content_key=…`.
- **The redirect IS followed** by the browser, as a `GET`, which returns **HTTP 200**.
- That final response is then `net::ERR_ABORTED` — the no-cors mode discards the body. This
  abort is the normal, expected end of a successful opaque post and is **not** an error
  condition.

**The limit of this measurement, stated plainly.** Because the response is opaque, the browser
proves the request was sent and that the script responded 302→200; it does **not** prove that
`appendRow` ran and that a row reached the Votes tab. Confirming the row itself requires
opening the sheet, which is the owner's step and is what build plan row 4.2 closes on. This
measurement closes row 4.3 — the cross-origin *behaviour* — and does not close 4.2.

> **Superseded text, preserved.** *"Apps Script does not reliably return CORS headers, so the
> request will in practice need `mode: 'no-cors'` with `Content-Type: text/plain`. … This is
> recorded as a likely gotcha, inferred from how Apps Script and browser CORS normally behave.
> It has not been measured on this project."* — inference, SUPERSEDED 2026-09-18 by the
> measurement above. The `no-cors` conclusion held; the reason given for it did not.

---

## 7. DATA FLOW

### 7.0 End-to-end

```
Villager submits form
      -> row appended to [Form responses]
      -> helper columns compute phone_key, name_key, verdict
      -> OWNER reads verdict, picks one of three actions:
             Publish       -> new row on [Published], next free id
             Add to T0xx   -> attach their words to an existing tradesperson
             Reject        -> nothing happens
      -> [Published] auto-republishes as CSV (~5 min)
      -> page fetches CSV on next load
      -> tradesperson visible to the village
```

### 7.1 Validation layer 1 — the form

Google Forms' default error text is *"Please enter a valid response"*, which tells a
78-year-old nothing at all. Both rules therefore use **custom error text**.

| Field | Rule | Custom error text |
|---|---|---|
| Telephone | Regular expression `^[\d\s\+\(\)\-]{10,20}$` | "Please use numbers only, like 07825 736940 or 01392 833471." |
| Experience text | Minimum 15 characters | "Please write a few more words — what did they do for you?" |

Two name fields — first and last, **both required** — rather than one field with a regex.
Google Forms' own "This is a required question" is clearer than any custom message. Help text
on surname: *"If you don't know it then write 'Not Known'."*

### 7.2 Validation layer 2 — the sheet flags its own duplicates

Three helper columns on the Form responses tab:

| Column | Behaviour |
|---|---|
| `phone_key` | Strips every non-digit, converts a leading `44` back to `0`. `+44 7825 736940` and `07825 736940` both normalise to `07825736940`. |
| `name_key` | Lower case, punctuation and spaces removed. |
| `verdict` | Looks `phone_key` up against the Published tab and returns one of four plain-English results. |

The four verdicts are written in plain English, for a human reading a phone screen:

| Verdict | Meaning | Owner's action |
|---|---|---|
| `NEW` | Number not seen before | Publish as a new tradesperson |
| `ALREADY ON SITE — row 12` | Same number, same person | Their words become another recommendation |
| `SAME NAME, DIFFERENT NUMBER` | Probably a changed mobile | Needs a look |
| `CHECK THIS` | Surname **or business** reads "Not Known", or the experience text is very short | Needs a look |

### 7.3 Validation layer 3 — the owner is the gate

One dropdown per row: **Publish** / **Add to T0xx** / **Reject**. Nothing reaches the site
until the owner picks one. This is the entire moderation system, and it is deliberately a
spreadsheet dropdown rather than a queue or an admin interface (§11).

### 7.4 Validation layer 4 — the vote box on the page

- Error messages appear as **plain text under the box**, never colour alone.
- An error **never clears what the villager typed**.
- "Your name" is optional; blank becomes **"a villager"**.
- "What did they do for you?" is required, minimum 15 characters.

### 7.5 The vote mechanism

Every tradesperson card carries an **"I recommend them too"** button. Tapping it opens two
fields **in place on the card**, headed *"You are recommending {name}"*. Tapping **Add**
increments the tally and shows their words. **Cancel** is available throughout.

Nothing is re-typed, and the villager never leaves the page. The card also shows
*"N villagers recommend this tradesperson"*.

The page posts three values — **trader id, villager name, their text**. It posts the **id,
never the name**: names change, ids do not (§4.1).

**A pre-filled Google Form link was considered and rejected.** It does pre-fill trade, name
and phone, but it lands the villager on a six-question form where they must scroll past four
already-filled boxes to reach the two they care about. Rejected as not user friendly. It is
recorded here specifically so that it is not proposed again.

---

## 8. SECURITY CONSIDERATIONS

### 8.1 The read path cannot be attacked, because it is one-way

The site holds **no credential of any kind** for the Google Sheet. It reads a public,
read-only CSV URL over HTTPS. There is no token to steal from the JavaScript, because there
is no token.

**Nothing a villager does in the browser can change a listing.** The worst a hostile visitor
can achieve against the read path is to alter what *their own browser* displays, which
affects nobody else. To change what the village sees, you must be able to edit the Google
Sheet, which requires the owner's Google login.

This is the single most important security property of the design, and it is a consequence of
the architecture rather than of any control that could be misconfigured.

### 8.2 The write path is an open endpoint — stated plainly

The Apps Script endpoint is **necessarily open**, because villagers do not log in, and
requiring them to would defeat the entire product.

Stating the exposure without softening it: **anybody who finds that URL can append rows to
the Votes tab.** They do not need an account, an invitation or a password. They could append
one row or a great many.

What bounds the damage:

- The script is **append-only to the Votes tab**. It is written to do one thing.
- It **cannot read** any tab.
- It **cannot edit or delete** anything.
- It **cannot touch the Published tab**, so it cannot alter, remove or invent a tradesperson.
- It holds no personal data beyond what a villager chose to type.

**Worst case is junk rows in a tab that only the owner looks at.** The directory itself — the
names, the phone numbers, the trades — is untouchable from the internet.

This trade-off has been **explicitly accepted by the project owner**. It is written here in
full, rather than glossed, so that a future maintainer evaluating the endpoint understands it
was a considered decision and not an oversight.

**Recovery, if it is ever abused:** the Apps Script deployment can be deleted or redeployed
at a new URL from the Google account in under a minute, and the junk rows deleted from the
Votes tab. The site continues to function throughout — only the vote button stops working.

### 8.3 Personal data

The site publishes tradespeople's names and phone numbers, and the first names of the
neighbours recommending them. This is the entire point of the list, and the form question is
worded to tell recommenders their name will be shown publicly.

Two consequences:

- **Removal must be immediate and easy.** If a tradesperson asks to be taken off, the owner
  deletes or de-activates their row on the Published tab. They disappear within the republish
  lag. No code change, no deployment.
- **Email addresses are not collected** (decision 15). See §11.

### 8.4 Defamation and social risk

This is a named-individual directory published for a small village, and that carries a real
risk that a purely technical review would miss.

- **No star ratings.** With two or three recommendations each, an average is statistically
  meaningless, and one grumpy neighbour costs a real person real work.
- **No public negative reviews.** A named local tradesperson publicly criticised on a site the
  owner publishes is a defamation risk the owner would personally have to defend, and a
  social problem in a village this size.
- **Problems are handled by one line of text**: *"Had a problem with someone on this list?
  Please mention it on the village chat."* The signal still reaches the owner, because he is
  in that group, and it creates **zero administration** — no inbox, no form, no queue.

### 8.5 The small print

The site must carry, visibly:

> "These are recommendations from neighbours — not checks or endorsements by anyone. Please
> satisfy yourself before hiring."

This is not decorative. It is the line that distinguishes a neighbourly list from an implied
endorsement by the publisher.

### 8.6 No credential belongs in the repository

The repository is public — GitHub Pages will not serve from a private repository on a free
account, so public is a requirement rather than a choice. **No token, key, password or
personal account credential may ever be committed.** The design needs none: the read path is
a public URL and the write path is an open endpoint.

---

## 9. ACCESSIBILITY — BINDING DESIGN CONSTRAINTS

These rules were derived from published low-vision guidance after a first design attempt was
rejected. **They are binding constraints, not preferences.** Where any layout, wireframe or
later idea conflicts with this section, **this section wins and the layout is corrected.**

### 9.1 Contrast

Target **7:1**, not the 4.5:1 minimum, because the audience is older. Every text pair in the
agreed design measures between **7.9:1 and 18.6:1**.
*Source: W3C WAI, Developing for older users.*

### 9.2 Ground colour

**Avoid stark white.** Use a light pastel ground with white cards, which reduces glare for
readers with light sensitivity and gives the cards a visible edge.
*Source: W3C WAI, Developing for older users.*

### 9.3 Emphasis

**No italics. No ALL CAPS for emphasis. No light or thin strokes.** Bold at weight **700**
is the only emphasis mechanism.
*Source: CNIB Clear Print.*

### 9.4 Typeface

**Atkinson Hyperlegible** throughout, with **Verdana** and **Arial** fallbacks. Built by the
Braille Institute, it visibly separates `1` / `l` / `I` and `0` / `O` — which matters a great
deal when the content is largely **phone numbers**.
*Sources: CNIB, RNIB.*

### 9.5 Line spacing

At least **25–30% of the type size** — implemented as `line-height: 1.55`.
*Source: CNIB Clear Print.*

### 9.6 Target size

Minimum **24 × 24 CSS px**; **44 × 44** for the enhanced level. In this design **nothing
tappable is under 48px**, and **Call buttons are about 76px**.
*Source: WCAG 2.2 Target Size.*

### 9.7 Labels

**Visible text labels, never a placeholder alone.** The search box has a real `<label>` above
it. A placeholder vanishes the moment typing starts, which is precisely when a confused user
needs it.
*Source: W3C WAI.*

### 9.8 Resize

Text must survive **200% resize with no loss of content or function**. Everything is in
**relative units**.
*Source: WCAG 1.4.4.*

### 9.9 Text size control — and two bugs that must never come back

Three buttons — **A / A / A** — at the very top of the page, switching the root font size
between **20px / 24px / 29px**, remembered in `localStorage`.

It exists because villagers will zoom heavily, and pinch-zoom on a phone causes **sideways
scrolling**, which is what actually defeats people. The control gives them bigger text
without that side effect.

Two bugs were found and fixed during design. Both must be treated as permanent constraints:

> **BUG 1 — the header must NOT be sticky.**
> The header was `position: sticky` and scaled with the text, so at the largest size it
> filled the entire phone screen and left no room for content.

> **BUG 2 — the size-button strip must be sized in FIXED PIXELS.**
> The buttons were themselves sized in `rem`, so they grew as they were pressed — the control
> ran away from the user's finger.

### 9.10 Overflow rules — largest text size, narrow phone

Derived directly from the stated requirement *"In all zoom functions make sure the text never
rolls outside the box."*

- The trade grid uses `minmax(min(100%, 15rem), 1fr)`. **Without the `min()` the column is
  wider than the screen** and the entire page scrolls sideways.
- The **Call button is two stacked lines** — "CALL" above the number — so a long number can
  never break mid-digit.
- `overflow-wrap: break-word` on `body`.
- `min-width: 0` on flex children.

### 9.11 Search and navigation behaviour

- **Tapping any trade button clears the search box.** So does the Back button.
- Autocomplete under the search box uses **full-width buttons, not a native dropdown** —
  native dropdowns are small, inconsistent across phones, and hard to hit.
- Suggestions offer **trades first**, then people and businesses.
- **Matching letters are UNDERLINED, not coloured**, so colour never carries meaning alone.
- **Enter** searches everything; **Escape** clears.
- **The trade list stays visible while suggestions show**, so the page never goes blank.
- **Trades with nobody in them do not appear at all.**

### 9.12 Sources

- https://www.w3.org/WAI/older-users/developing/
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://cnib.ca/sites/default/files/2018-07/CNIB%20Clear%20Print%20Guide.pdf
- https://media.rnib.org.uk/documents/Colour_and_contrast_for_people_with_sight_loss_2020.pdf
- https://www.nngroup.com/articles/usability-for-senior-citizens/

---

## 10. INHERITANCE

**This section exists to stop someone adding a build step in six months.**

### 10.1 The requirement

Stated by the project owner, verbatim:

> "I want to be able to hand over the operating site to anyone else who inherits that google
> email account"

> "Nothing on this site must touch deverse. Everything must be registered to the dunchitrader
> email"

### 10.2 The two accounts, and what they must be sufficient for

| Account | Holds |
|---|---|
| **dunchitrader@gmail.com** (Google) | The Form, the Sheet, the published CSV, the Apps Script deployment |
| **dunchitrader-collab** (GitHub) | The live repository `dunchitrader-collab/dunchitrader-collab.github.io`, serving via GitHub Pages |

**Together these two logins must be a complete and self-sufficient system.** Somebody handed
those two passwords — with **no access to the original owner, and no access to any other
repository or organisation** — must be able to run, change and redeploy this site.

That is the acceptance test for this entire section, and Build Plan step 6 verifies it by
walking the restore document end to end rather than asserting it.

### 10.3 NO BUILD STEP, EVER

**Plain HTML, CSS and JavaScript, served exactly as committed.**

Forbidden, permanently and without exception:

- No bundler — no Webpack, Vite, Rollup, Parcel, esbuild.
- No transpiler — no Babel, no TypeScript compilation step.
- No `npm install`, no `package.json` as a build dependency, no lockfile, no `node_modules`.
- No CSS preprocessor — no Sass, Less, PostCSS, Tailwind build.
- No framework requiring compilation — no React build, no Vue SFCs, no Svelte, no Next.js.
- No CI pipeline that generates the deployed files.
- No template engine. **Jekyll processing must be disabled** with a `.nojekyll` file at the
  repository root, so GitHub Pages serves the committed files untouched.

**The test that decides whether any proposed change is allowed:**

> Can a non-technical inheritor open the file in the GitHub web editor, change a word, click
> Commit, and see that change live on the site a moment later?

If the answer is no, the change is forbidden, regardless of how much nicer the code would be.

### 10.4 The live repository holds SOURCE, not build output

`dunchitrader-collab/dunchitrader-collab.github.io` contains the **full, editable source**.
It is **never** a build artefact and **never** a partial copy.

Both repositories hold the full source. If the two ever diverge, **the dunchitrader-collab
repository is correct**, because it is the one that is inherited and the one that is served.

### 10.5 No personal credential in the running system

**No personal credential, token or account of the original owner may exist anywhere in the
running system.** Any deploy key or token he uses to push from his own machine is **his own
convenience only**, and the site must never depend on it. Revoking every one of his
credentials must leave the site running and fully editable by the inheritor.

### 10.6 The Apps Script source is committed

The Google Apps Script is **committed to the repository** as well as deployed. An inheritor
who loses the deployment — or who needs to understand what the endpoint does — can read the
source and redeploy from scratch, following the restore runbook.

Code that exists only inside a Google Apps Script editor is code that dies with the account
it was written in.

### 10.7 The documents an inheritor gets

| File | Audience |
|---|---|
| `README.md` at the repository root | A **non-technical** inheritor. Plain English. |
| `docs/RESTORE-dunchi-trader.md` | The **full rebuild-from-zero runbook.** |
| `docs/SOLUTION-DESIGN-dunchi-trader.md` | This document — why it is built this way. |
| `docs/HANDOVER-dunchi-trader.md` | The permanent record of every decision. |

The README must state the **five-minute republish lag** explicitly, or an inheritor editing
the sheet and refreshing the page will conclude the site is broken.

### 10.8 This document stands alone

This design cites **no external organisation's internal standards**, depends on **no external
service, server or account** beyond the two above, and can be read in full by somebody with
no access to anything other than this repository.

---

## 11. WHAT THIS PROJECT WILL NOT DO

Each of these is a decision, not an omission. Each has a reason. **Do not propose them
again without reading the reason first.**

| Not doing | Why |
|---|---|
| **No login** | The audience is elderly. A login is where they stop. It would defeat the product. |
| **No star ratings** | With two or three recommendations each, an average is meaningless, and one grumpy neighbour costs a real person real work. |
| **No public negative reviews** | A defamation risk the owner would personally have to defend, and a social problem in a village this size. |
| **No private problem-report form or inbox** | It creates administration. One line pointing at the village chat achieves the same thing with none. |
| **No paid domain** | The link is shared in the village WhatsApp group, so the address is never typed or spoken. |
| **No QR code** | Rejected as too advanced for the audience. |
| **No server** | Nothing to pay for, nothing to patch, nothing to go down. |
| **No database** | A spreadsheet the owner can edit from his phone is the correct store at this scale. |
| **No moderation queue** | The moderation system is one dropdown per row in a spreadsheet. |
| **No build step** | §10.3. This is the load-bearing inheritance constraint. |
| **No pre-filled Google Form vote link** | Lands the villager on a six-question form and makes them scroll past four filled boxes. Rejected as not user friendly. |
| **No email collection on the form** | The owner chose not to collect it, and it may force a Google sign-in that stops elderly villagers at the door. |
| **No ongoing administration of any kind** | Every feature that would create a recurring task for the owner has been rejected on that basis alone. |

---

## 12. SCALABILITY APPROACH

The honest position: **this system does not need to scale, and designing it as though it did
would make it worse.**

### 12.1 Expected size

Dunchideock is a village. The realistic ceiling is **tens of tradespeople**, not thousands.
Launch target is **12–15 tradespeople across at least 6 trades** (§13.4).

### 12.2 Why the current design is comfortable at that size

- The published CSV at expected size is a few kilobytes. Fetching and parsing it on every page
  load is trivial — faster than any pagination scheme would be.
- All search, filtering and autocomplete happen **in the browser, against an array already in
  memory**. There is no query, no round trip, and therefore no latency.
- GitHub Pages serves static files from a CDN and will not notice this traffic.
- Google Sheets' own limits are orders of magnitude above anything this will reach.

### 12.3 Where it would break, and what to do then

Recorded for completeness, not as anticipated work:

| Threshold | Symptom | Response |
|---|---|---|
| ~500+ tradespeople | CSV parse becomes perceptible on an old phone | Keep the architecture; render the list lazily |
| ~5,000+ | CSV too large to fetch on every load | Replace the CSV read with a real API — a re-architecture, not a tweak |
| Votes tab abuse at volume | Junk rows accumulate | Redeploy the Apps Script at a new URL (§8.2) |

**None of these are expected.** Pre-building for them would add exactly the complexity that
§10.3 forbids.

### 12.4 The real scaling constraint is human

The genuine limit on this system is **how many rows the owner is willing to review by hand**.
At village scale that is a handful a month. This is a feature: the manual gate is what keeps
the list trustworthy, and automating it away would remove the thing that makes the
recommendations worth reading.

---

## 13. IMPLEMENTATION RISKS

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | **Published CSV currently points at the wrong tab.** Measured 2026-09-18: the published CSV returns the raw Form responses header, not the agreed Published schema. | **Confirmed — it is live now** | **High** — the site would read raw form data | Republish from the Published tab. Recorded as an operator action in the handover. Step 2 must not be built against the current URL without re-checking it. |
| 2 | **"Stop publishing" clicked by accident** | Low | High — site goes blank | README warns explicitly; fetch-failure state (risk 4) prevents a blank page |
| 3 | **Published tab deleted and recreated**, breaking the URL | Low | High | The URL is tied to the tab's internal id. Renaming is safe; deleting is not. Documented in README and RESTORE. |
| 4 | **CSV fetch fails** (offline, Google outage, URL broken) | Medium | High if unhandled | **A failed fetch must never produce a blank page.** Build Plan 2 requires an explicit fetch-failed state with a human-readable message. |
| 5 | **Sheet is empty** at launch or after an edit | Medium | Medium | **An empty sheet must never produce a blank page.** Explicit empty state required. |
| 6 | **Five-minute lag mistaken for a broken site** | High | Low | Stated in the README, in RESTORE, and in §6.1 |
| 7 | ~~**Apps Script CORS behaves unexpectedly** (§6.2) | Medium | Medium | Optimistic UI; confirm real behaviour during Step 4 and correct §6.2~~ **CLOSED 2026-09-18 — measured, §6.2 corrected.** The response is opaque exactly as designed for; the optimistic UI is correct. One correction to the plan's assumption: the fetch promise **resolves** rather than rejecting, so failures cannot be caught. Risk retired. |
| 8 | **Votes endpoint abused** | Low | Low | Bounded by design (§8.2); redeploy to recover |
| 9 | **Someone adds a build step later** | Medium over years | **Severe — breaks inheritance** | §10.3 states the prohibition and the one-sentence test that decides it |
| 10 | **Two repositories drift** | Medium | Medium | dunchitrader-collab is authoritative (§10.4) |
| 11 | **Form still collects email / still has a star-rating question** — both measured present 2026-09-18 | **Confirmed** | Medium — contradicts decisions 3 and 15 | Operator actions in the handover; both are Google-side settings only the owner can change |
| 12 | **Form trade list missing everyday village trades** | **Confirmed** | Medium — villagers pick "Other" or give up | Operator action listing the missing trades |
| 13 | **Form question 1 is a dropdown with "Other" typed as an ordinary option** | **Confirmed** | Medium — selecting it gives no text box | Must become Multiple Choice with the real Add "Other" control |
| 14 | **Text grows out of its box at largest size** | Medium | High — defeats the audience | §9.10 overflow rules; the two §9.9 bugs are permanent constraints |
| 15 | **A tradesperson asks to be removed** | Medium | Low | Owner edits one spreadsheet row; live within the republish lag (§8.3) |
| 16 | **Directory launched too thin** — four entries gets opened once and never again | Medium | High — one-shot reputational risk | Do not share the link until 12–15 tradespeople across 6+ trades (§13.4) |

### 13.4 Launch readiness

**A directory with four people in it gets opened once and never again.** The launch target is
therefore **12–15 tradespeople across at least 6 trades** before the link goes into the
village WhatsApp group.

There is exactly one chance to make a first impression on this audience. A villager who opens
a near-empty list will not open it a second time, and no later improvement recovers them.

---

*End of solution design.*
