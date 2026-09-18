# BUILD PLAN — dunchi-trader

**Plan ID:** PLAN-DUNCHI-TRADER-V1

| Field | Value |
|---|---|
| **Plan ID** | `PLAN-DUNCHI-TRADER-V1` |
| **Primary repo** | `dunchi-trader` |
| **Live repo** | `dunchitrader-collab/dunchitrader-collab.github.io` |
| **Created** | `2026-09-18` |
| **Summary** | Build a village trades directory for Dunchideock as a plain static page that reads a published Google Sheet and needs no build step. The site must be operable and redeployable by anyone inheriting two account logins. |

---

## REQUIREMENT AS STATED

The following is the project owner's own wording, carried verbatim. It is not paraphrased at
any layer of this plan, and any sub-task that conflicts with it is wrong.

> "The key to this is really easy navigation. People will be using websites and they will be
> using their phone. Given it's the older generation, I expect that they will be zooming in
> quite a lot. So this needs to be a really simple, really quick and extremely easy to use
> web app."

> "Github pages is fine as long as the site easy VERY easy to search by work type."

> "The site needs to be dynamic. Most will use on their phone. However it must work on a
> computer too."

> "In all zoom functions make sure the text never rolls outside the box."

> "Nothing on this site must touch deverse. Everything must be registered to the dunchitrader
> email"

> "I want to be able to hand over the operating site to anyone else who inherits that google
> email account"

---

## HOW TO READ THIS PLAN

- Sub-tasks are numbered `{step}.{n}`. **Numbering is append-only — never renumber.** A
  sub-task that is abandoned is marked `descoped`, not deleted, because its number may already
  be cited elsewhere.
- **Status** is one of `new`, `to-do`, `in progress`, `done`, `blocked`, `parked`, `descoped`.
- **Effort** is an integer 1–10, where 10 is the most work.
- Every sub-task carries a **done-when** that can actually be checked by somebody other than
  its author. "Looks right" is not a done-when; "loads at the URL and shows six trades" is.

### Authority precedence

Where two sources disagree about the front end:

1. **`docs/SOLUTION-DESIGN-dunchi-trader.md` §9 is the LOGIC authority.** The accessibility
   rules win.
2. **`design/wireframe-dunchi-trader.html` is the LAYOUT authority.** It decides where things
   sit.

**Where the two disagree, the logic authority wins and the wireframe is corrected to match.**

### Operator actions are not in this plan

Five actions sit inside Google and can only be done by the account owner. They are **not**
sub-tasks here, by instruction. They are recorded in `docs/HANDOVER-dunchi-trader.md`
Layer 1 and Layer 4.

---

## Step 1 — Repo, remotes and hosting

Scaffold the repository, configure both remotes, establish the deploy path to the live site,
and confirm a placeholder page is actually being served.

**This step also satisfies the browser-reachability dependency for every later step.** The
project owner tests rendered work in a live browser. A change is only built when it is
**visible at the URL he opens** — not when it is committed, and not when it works locally.
Every later step's done-when is therefore checked against the live site, which means Step 1
must complete before any of them can be verified.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 1.1 | new | Create the repository skeleton: `index.html`, `style.css`, `app.js`, `.nojekyll` at the repo root. Done when all four files exist and are committed. | 2 |
| 1.2 | new | Add `.nojekyll` and confirm GitHub Pages stops applying Jekyll processing. The live site currently serves a default Jekyll page, so this is a real change, not a precaution. Done when the served HTML is byte-identical to the committed `index.html`. | 2 |
| 1.3 | new | Configure the `collab` git remote pointing at `dunchitrader-collab/dunchitrader-collab.github.io`, alongside the existing `origin`. Done when `git remote -v` lists both and a push to each succeeds. | 2 |
| 1.4 | new | Write a placeholder `index.html` carrying the site title and the small print line. Done when it renders. | 1 |
| 1.5 | new | Push to the live repo and confirm the placeholder is served at `https://dunchitrader-collab.github.io`. Done when `curl` returns HTTP 200 and the response body contains the placeholder text, not the Jekyll default. | 2 |
| 1.6 | new | Document the two-remote push procedure in the repo README stub, so an inheritor never has to reverse-engineer it. Done when the procedure is written and a person who has not seen this session can follow it. | 2 |
| 1.7 | new | Confirm no credential, token or personal account of the original owner is committed anywhere. Done when a search of the working tree for token-shaped strings returns nothing. | 1 |
| 1.8 | new | Verify the browser-reachability dependency is genuinely satisfied: open the live URL in a real browser on a phone and on a computer. Done when the placeholder renders on both. | 2 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 1.1 | When the site needs a home, it needs its files. | Create index.html, style.css, app.js, .nojekyll | Four source files exist in the repo | Plain static scaffold, no generator | new | | | build | none |
| 1.2 | When Pages applies Jekyll, committed files stop being what is served. | Add .nojekyll and verify served bytes | Served HTML matches committed HTML | Root .nojekyll file | new | | | build | 1.1 |
| 1.3 | When two repos must stay identical, both need remotes. | Configure collab remote beside origin | Both remotes push successfully | Second named git remote | new | | | build | 1.1 |
| 1.4 | When testing hosting, a real page beats an empty one. | Write placeholder index.html with small print | Placeholder page renders | Minimal hand-written HTML | new | | | build | 1.1 |
| 1.5 | When hosting is unproven, later steps cannot be checked. | Push to live repo and confirm HTTP 200 | Placeholder served at the live URL | curl status and body check | new | | | build | 1.3, 1.4 |
| 1.6 | When someone inherits this, pushing must be obvious. | Document the two-remote push procedure | An inheritor can push to both repos | Written procedure in README stub | new | | | docs | 1.3 |
| 1.7 | When a repo is public, a leaked token is permanent. | Search working tree for token-shaped strings | No credential is committed | Pattern search over the tree | new | | | build | 1.1 |
| 1.8 | When the owner reviews work, he opens a browser. | Open the live URL on phone and computer | Placeholder renders on both devices | Manual check on two devices | new | | | build | 1.5 |

---

## Step 2 — Live data

Fetch and parse the published CSV at page load, map it to the Published tab columns, and
render the trades and the tradesperson cards.

**Precondition, measured 2026-09-18 and currently failing.** The published CSV URL recorded
for this project returns the **raw Form responses header**, not the agreed Published schema.
Sub-task 2.1 exists to re-check this before any parsing is written, because building a parser
against the wrong tab would produce code that appears to work and shows the wrong data.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 2.1 | blocked | Re-check the published CSV URL and confirm it serves the **Published** tab, whose header is `id, first_name, last_name, business, phone, trade, extra_trade, status`. Blocked on the operator republishing from the correct tab. Done when the first line of the fetched CSV is that header. | 2 |
| 2.2 | new | Write a CSV parser that correctly handles quoted fields, embedded commas and embedded newlines. Done when a field containing a comma inside quotes parses as one value. | 4 |
| 2.3 | new | Fetch the CSV on page load and map rows to the eight Published columns by header name, not by column position, so re-ordering a column in the sheet cannot break the site. Done when a deliberately re-ordered test CSV still renders correctly. | 3 |
| 2.4 | new | Honour the `status` column: rows that are not active do not render. Done when flipping one row's status removes exactly that card. | 2 |
| 2.5 | new | Build the trade index from `trade` and `extra_trade`, so one person appears under both without a duplicate row. Done when a two-trade person appears under both trades and the total person count is unchanged. | 3 |
| 2.6 | new | Render the trade grid. **Trades with nobody in them do not appear at all.** Done when an empty trade is absent from the grid, not shown greyed out. | 3 |
| 2.7 | new | Render a tradesperson card: name, business, trade, recommendation count and the Call button. Done when a card shows every field present in the row and omits empty optional ones cleanly. | 4 |
| 2.8 | new | **Empty-sheet state.** A sheet with a header and no data rows must produce a readable message, never a blank page. Done when a zero-row CSV renders an explanatory message. | 3 |
| 2.9 | new | **Fetch-failed state.** A failed, blocked or timed-out fetch must produce a readable message, never a blank page or a silent console error. Done when the page is loaded with the network blocked and shows a human-readable message. | 3 |
| 2.10 | new | Handle a malformed or unexpected CSV header without crashing — degrade to the fetch-failed message rather than rendering garbage. Done when a CSV with the wrong header shows the failure state. | 2 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 2.1 | When the feed points at the wrong tab, everything downstream is wrong. | Confirm CSV serves the Published tab header | Feed serves the agreed eight columns | Fetch and inspect the header line | blocked | | | operator | none |
| 2.2 | When a villager writes a comma, the row must not break. | Parse quoted CSV fields correctly | Quoted commas and newlines parse | Hand-written CSV parser | new | | | build | 2.1 |
| 2.3 | When the sheet changes shape, the site should survive. | Map rows by header name not position | Re-ordered columns still render | Header-name lookup | new | | | build | 2.2 |
| 2.4 | When a listing is withdrawn, it must disappear. | Filter rows on the status column | Inactive rows do not render | Status check before render | new | | | build | 2.3 |
| 2.5 | When someone does two trades, they belong under both. | Index trade and extra_trade | Person appears under both trades | Build index across both columns | new | | | build | 2.3 |
| 2.6 | When a trade has nobody, showing it wastes a tap. | Render only non-empty trades | Empty trades absent from grid | Filter before rendering grid | new | | | build | 2.5 |
| 2.7 | When a villager finds someone, they need the number. | Render the tradesperson card | Card shows all present fields | Card template from row data | new | | | build | 2.3 |
| 2.8 | When the sheet is empty, the page must still speak. | Render an explanatory empty state | Zero rows shows a message | Explicit empty-state branch | new | | | build | 2.7 |
| 2.9 | When the feed is down, a blank page looks broken. | Render a readable fetch-failed state | Failed fetch shows a message | Catch and render failure branch | new | | | build | 2.7 |
| 2.10 | When the header is wrong, garbage is worse than an error. | Degrade a bad header to the failure state | Wrong header shows failure message | Validate header before render | new | | | build | 2.9 |

---

## Step 3 — Front end

Port the agreed design from `design/wireframe-dunchi-trader.html`, which is the **layout
authority**. The accessibility rules in `docs/SOLUTION-DESIGN-dunchi-trader.md` §9 are the
**logic authority**. Where the two disagree, the logic authority wins and the wireframe is
corrected to match.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 3.1 | new | Port the wireframe layout and colour scheme into `style.css`. Done when the live page matches the wireframe structurally on a phone and a computer. | 5 |
| 3.2 | new | Apply the Atkinson Hyperlegible typeface with Verdana and Arial fallbacks, and confirm it degrades cleanly if the font fails to load. Done when the fallback renders legibly with the font blocked. | 3 |
| 3.3 | new | Verify contrast on every text pair meets the 7:1 target, not the 4.5:1 minimum. Done when every pair is measured and recorded, with no pair below 7:1. | 3 |
| 3.4 | new | Apply the emphasis rules: no italics, no ALL CAPS for emphasis, no light or thin strokes, bold at 700 only. Done when a search of the stylesheet finds no italic and no font weight below 400. | 2 |
| 3.5 | new | Set `line-height: 1.55` throughout and use a light pastel ground with white cards, never stark white. Done when both are true in the stylesheet and visible on the page. | 2 |
| 3.6 | new | Ensure nothing tappable is under 48px, and Call buttons are about 76px. Done when every interactive element is measured at or above 48px in the browser inspector. | 3 |
| 3.7 | new | **Text-size control.** Three A / A / A buttons at the very top, switching the root font size between 20px, 24px and 29px, remembered in `localStorage`. Done when the choice survives a page reload. | 4 |
| 3.8 | new | **BUG 1 guard — the header must NOT be sticky.** Done when the stylesheet contains no `position: sticky` on the header and the header scrolls away at the largest text size. | 1 |
| 3.9 | new | **BUG 2 guard — the size-button strip must be sized in FIXED PIXELS**, never `rem`. Done when pressing the largest A does not change the size of the buttons themselves. | 1 |
| 3.10 | new | **Overflow rules.** Trade grid uses `minmax(min(100%, 15rem), 1fr)`; `overflow-wrap: break-word` on `body`; `min-width: 0` on flex children. Done when all three are present in the stylesheet. | 3 |
| 3.11 | new | **Call button is two stacked lines** — "CALL" above the number — so a long number never breaks mid-digit. Done when an 11-digit mobile renders on one unbroken line at the largest text size. | 2 |
| 3.12 | new | **No sideways scrolling at the largest text size on a narrow phone.** This is the direct test of "In all zoom functions make sure the text never rolls outside the box." Done when the page is set to 29px at 320px viewport width and the document does not scroll horizontally. | 3 |
| 3.13 | new | Confirm text survives 200% browser resize with no loss of content or function, with everything in relative units. Done when the page is usable at 200% zoom. | 3 |
| 3.14 | new | **Search box with a real visible label above it**, never a placeholder alone. Done when the label element is present and remains visible while typing. | 2 |
| 3.15 | new | **Autocomplete** under the search box as full-width buttons, not a native dropdown. Suggests trades first, then people and businesses. Done when typing shows trades ahead of people. | 5 |
| 3.16 | new | **Matching letters are UNDERLINED, not coloured**, so colour never carries meaning alone. Done when a match renders underlined and removing all colour from the page leaves the match still identifiable. | 2 |
| 3.17 | new | **The trade list stays visible while suggestions show**, so the page never goes blank. Done when suggestions appear and the trade grid is still on screen. | 2 |
| 3.18 | new | **Enter searches everything; Escape clears.** Done when both keys behave as described. | 2 |
| 3.19 | new | **Tapping any trade button clears the search box. So does the Back button.** Done when both actions leave the search box empty. | 2 |
| 3.20 | new | Display the small print: "These are recommendations from neighbours — not checks or endorsements by anyone. Please satisfy yourself before hiring." Done when it is visible without scrolling past the whole list. | 1 |
| 3.21 | new | Display the problem line: "Had a problem with someone on this list? Please mention it on the village chat." Done when it is visible on the page. | 1 |
| 3.22 | new | Confirm every user-facing string says "tradesperson" and never "tradesman". Done when a case-insensitive search for "tradesman" across the repo returns nothing. | 1 |
| 3.23 | new | Test the whole front end on a real phone and a real computer. Done when both work, per "Most will use on their phone. However it must work on a computer too." | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 3.1 | When the design is agreed, the page should look like it. | Port wireframe layout into style.css | Live page matches the wireframe | CSS port from wireframe | new | | | build | 2.7 |
| 3.2 | When content is phone numbers, letter shapes matter. | Apply Atkinson Hyperlegible with fallbacks | Typeface renders, fallback degrades | Font stack with Verdana and Arial | new | | | build | 3.1 |
| 3.3 | When readers are older, minimum contrast is not enough. | Measure every text pair against 7:1 | No pair measures below 7:1 | Contrast measurement of each pair | new | | | build | 3.1 |
| 3.4 | When emphasis uses italics, older readers lose it. | Remove italics, caps and thin strokes | Only bold 700 is used for emphasis | Stylesheet search and correction | new | | | build | 3.1 |
| 3.5 | When the ground is stark white, glare hurts. | Set line-height 1.55 and pastel ground | Spacing and ground colour correct | CSS values from the design rules | new | | | build | 3.1 |
| 3.6 | When fingers are unsteady, small targets fail. | Ensure tap targets at least 48px | All targets measure 48px or more | Inspector measurement of elements | new | | | build | 3.1 |
| 3.7 | When villagers zoom, a size control beats pinching. | Build three-button root font size control | Size choice persists across reloads | Buttons writing to localStorage | new | | | build | 3.1 |
| 3.8 | When the header sticks, big text eats the screen. | Confirm no sticky positioning on header | Header scrolls away at largest size | Stylesheet check and manual test | new | | | build | 3.7 |
| 3.9 | When the buttons grow, they escape the finger. | Size the button strip in fixed pixels | Buttons stay one size when pressed | Fixed px sizing on the strip | new | | | build | 3.7 |
| 3.10 | When text overflows, the page scrolls sideways. | Apply the three overflow CSS rules | All three rules present and working | minmax, break-word, min-width zero | new | | | build | 3.1 |
| 3.11 | When a number breaks mid-digit, it is unusable. | Stack CALL above the number | Long numbers never break mid-digit | Two-line button layout | new | | | build | 3.1 |
| 3.12 | When the page scrolls sideways, people give up. | Test 29px text at 320px width | No horizontal scroll at largest size | Narrow viewport manual test | new | | | build | 3.10 |
| 3.13 | When text is resized, nothing may be lost. | Test the page at 200% browser zoom | Page usable with no loss at 200% | Relative units plus zoom test | new | | | build | 3.10 |
| 3.14 | When a placeholder vanishes, the confused lose their cue. | Add a real visible label to search | Label stays visible while typing | Label element above the input | new | | | build | 3.1 |
| 3.15 | When searching by trade must be very easy, suggest trades first. | Build full-width button autocomplete | Trades suggested ahead of people | In-memory match over loaded rows | new | | | build | 3.14 |
| 3.16 | When colour carries meaning, some readers lose it. | Underline matching letters not colour | Matches identifiable without colour | Underline styling on matched text | new | | | build | 3.15 |
| 3.17 | When the page goes blank, people think it broke. | Keep the trade list visible under suggestions | Trade grid stays on screen | Render suggestions without replacing | new | | | build | 3.15 |
| 3.18 | When a keyboard user hits Enter, it should search. | Wire Enter to search and Escape to clear | Both keys behave as described | Key handlers on the search input | new | | | build | 3.15 |
| 3.19 | When a trade is tapped, a stale search confuses. | Clear search on trade tap and Back | Search box empty after both actions | Clear input in both handlers | new | | | build | 3.15 |
| 3.20 | When a list looks official, it must say it is not. | Display the small print line | Small print visible on the page | Static text in the page | new | | | build | 3.1 |
| 3.21 | When someone has a problem, point them at the chat. | Display the village chat line | Problem line visible on the page | Static text in the page | new | | | build | 3.1 |
| 3.22 | When wording matters to the owner, get it right. | Search the repo for the wrong word | No occurrence of the wrong word | Case-insensitive repo search | new | | | build | 3.1 |
| 3.23 | When most use a phone, both devices must work. | Test the front end on phone and computer | Front end works on both devices | Manual test on two devices | new | | | build | 3.12 |

---

## Step 4 — Votes

Build the Apps Script web app, the Votes tab, the in-page two-field panel and the posting.
**The script source is committed to the repository**, so an inheritor can redeploy from
scratch.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 4.1 | new | Create the Votes tab on the sheet with its column headings. Done when the tab exists and its headings are recorded in the handover. | 2 |
| 4.2 | new | Write the Apps Script: accept trader id, villager name and text, append **one** row to Votes. It must not read, edit or delete anything, and must not touch the Published tab. Done when the source is written and reviewed against those four prohibitions. | 4 |
| 4.3 | new | **Commit the Apps Script source to the repository** per the inheritance constraint. Done when the file is committed and the README explains where it is deployed. | 2 |
| 4.4 | new | Deploy the script as a web app from the project's own Google account, and record the deployment URL in the handover. Done when the URL responds. | 2 |
| 4.5 | new | Build the in-place vote panel on the card, headed "You are recommending {name}", with "Your name" (optional) and "What did they do for you?" (required, 15 character minimum), plus Add and Cancel. Done when it opens on the card without leaving the page. | 5 |
| 4.6 | new | Blank name becomes "a villager". Done when submitting with an empty name records and displays "a villager". | 1 |
| 4.7 | new | Enforce the 15-character minimum client-side. The error appears as **plain text under the box, not colour alone**, and **never clears what they typed**. Done when a short entry shows the message and the typed text is still present. | 3 |
| 4.8 | new | Post trader **id**, name and text to the endpoint — the id, never the name. Done when the posted payload contains the id and a row lands in Votes. | 3 |
| 4.9 | new | Confirm the actual CORS behaviour: whether `mode: 'no-cors'` with `Content-Type: text/plain` is required from the GitHub Pages origin. **Record what was measured, and correct solution design §6.2 to match.** Done when the observed behaviour is written down. | 3 |
| 4.10 | new | Show the thank-you optimistically, since the response cannot be read under `no-cors`. Done when the confirmation appears after posting without depending on a readable response. | 2 |
| 4.11 | new | Increment the displayed tally and show the villager's words on the card. Done when both update after a successful add. | 3 |
| 4.12 | new | Render "N villagers recommend this tradesperson" on each card. Done when the count matches the Votes rows for that id. | 3 |
| 4.13 | new | Confirm the endpoint cannot alter the Published tab, by attempting a write against it and confirming it fails. Done when the attempt is made and fails as designed. | 2 |
| 4.14 | new | Test the whole vote journey end to end on a real phone. Done when a vote placed on a phone appears on the card and in the Votes tab. | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 4.1 | When votes arrive, they need somewhere to land. | Create the Votes tab with headings | Votes tab exists with headings | New sheet tab | new | | | operator | none |
| 4.2 | When an endpoint is open, it must do one thing. | Write an append-only Apps Script | Script appends one row and no more | Minimal bound Apps Script | new | | | build | 4.1 |
| 4.3 | When code lives only in Google, it dies there. | Commit the Apps Script source | Source is in the repository | File committed beside the site | new | | | build | 4.2 |
| 4.4 | When the page posts, something must receive it. | Deploy the script as a web app | Deployment URL responds | Apps Script web app deployment | new | | | operator | 4.2 |
| 4.5 | When re-typing is needed, villagers stop. | Build the in-place two-field panel | Panel opens on the card | In-card form, no navigation | new | | | build | 3.23 |
| 4.6 | When a name is left blank, still credit them. | Default a blank name to a villager | Blank name records as a villager | Default value on submit | new | | | build | 4.5 |
| 4.7 | When an error clears the box, people give up. | Validate 15 characters, preserve input | Error shows and text is preserved | Plain text error under the field | new | | | build | 4.5 |
| 4.8 | When a name changes, the vote must still attach. | Post the trader id not the name | Payload carries the id | Post id with name and text | new | | | build | 4.4, 4.5 |
| 4.9 | When CORS is assumed, the write can fail silently. | Measure actual cross-origin behaviour | Observed behaviour is recorded | Live test from the Pages origin | new | | | build | 4.8 |
| 4.10 | When the reply cannot be read, still reassure. | Show the thank-you optimistically | Confirmation appears after posting | Optimistic UI after send | new | | | build | 4.9 |
| 4.11 | When someone adds words, show them. | Update tally and display the words | Card updates after an add | Re-render card after submit | new | | | build | 4.10 |
| 4.12 | When several neighbours agree, say how many. | Render the recommendation count | Count matches the Votes rows | Count votes per id | new | | | build | 4.11 |
| 4.13 | When an endpoint is open, prove its limits. | Attempt a write to the Published tab | The attempt fails as designed | Adversarial test of the endpoint | new | | | build | 4.4 |
| 4.14 | When most use a phone, test on a phone. | Run the vote journey on a real phone | Vote appears on card and in sheet | End-to-end manual test | new | | | build | 4.12 |

---

## Step 5 — Sheet clean-up

Build the helper columns and the verdict formula, so the sheet flags its own duplicates and
the owner's review is a glance rather than an investigation.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 5.1 | new | Confirm the Published tab carries the header `id, first_name, last_name, business, phone, trade, extra_trade, status`, and correct it if not. Done when the header matches exactly. | 2 |
| 5.2 | new | Add the `phone_key` helper column: strip every non-digit, convert a leading `44` back to `0`. Done when `+44 7825 736940` and `07825 736940` both produce `07825736940`. | 3 |
| 5.3 | new | Add the `name_key` helper column: lower case, punctuation and spaces removed. Done when two spellings differing only in case and spacing produce the same key. | 2 |
| 5.4 | new | Add the `verdict` column, looking `phone_key` up against the Published tab. Done when it returns exactly one of the four agreed values. | 5 |
| 5.5 | new | Verdict `NEW` — number not seen before. Done when an unseen number returns `NEW`. | 1 |
| 5.6 | new | Verdict `ALREADY ON SITE — row {n}` — same number, same person, so their words become another recommendation. Done when a known number returns the verdict naming the correct row. | 3 |
| 5.7 | new | Verdict `SAME NAME, DIFFERENT NUMBER` — probably a changed mobile, needs a look. Done when that case returns that verdict. | 3 |
| 5.8 | new | Verdict `CHECK THIS` — surname is "Not Known", or the experience text is very short. Done when both triggers return `CHECK THIS`. | 3 |
| 5.9 | new | Add the owner's action dropdown per row: **Publish / Add to T0xx / Reject**. Done when the dropdown exists on every response row. | 3 |
| 5.10 | new | Document the `id` allocation rule — `T001`, `T002`, assigned once and **never changed**, because votes reference it. Done when the rule is written in the README and the handover. | 2 |
| 5.11 | new | Test the whole review path with sample rows covering all four verdicts. Done when each sample returns its expected verdict. | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 5.1 | When the header is wrong, the site reads nothing. | Confirm the Published tab header | Header matches the agreed schema | Inspect and correct the header row | new | | | operator | none |
| 5.2 | When numbers are written differently, duplicates hide. | Add a normalising phone_key column | Both formats produce one key | Spreadsheet formula on the tab | new | | | build | 5.1 |
| 5.3 | When names are typed loosely, matching fails. | Add a normalising name_key column | Spelling variants produce one key | Spreadsheet formula on the tab | new | | | build | 5.1 |
| 5.4 | When the owner reviews on a phone, plain words help. | Add the verdict lookup column | Verdict returns one of four values | Lookup against the Published tab | new | | | build | 5.2, 5.3 |
| 5.5 | When somebody is new, say so plainly. | Return NEW for an unseen number | Unseen numbers return NEW | Branch in the verdict formula | new | | | build | 5.4 |
| 5.6 | When they are already listed, point at the row. | Return ALREADY ON SITE with the row | Known numbers name the right row | Branch in the verdict formula | new | | | build | 5.4 |
| 5.7 | When a mobile changes, a human must look. | Flag same name with a new number | That case returns its verdict | Branch in the verdict formula | new | | | build | 5.4 |
| 5.8 | When detail is missing, a human must look. | Flag Not Known or very short text | Both triggers return CHECK THIS | Branch in the verdict formula | new | | | build | 5.4 |
| 5.9 | When the owner decides, one tap should do it. | Add the three-option action dropdown | Dropdown present on every row | Data validation on the column | new | | | build | 5.4 |
| 5.10 | When an id changes, every vote is orphaned. | Document the id allocation rule | Rule written in README and handover | Written documentation | new | | | docs | 5.1 |
| 5.11 | When formulas are untested, they are guesses. | Test sample rows for all four verdicts | Each sample returns its verdict | Sample rows covering each branch | new | | | build | 5.8 |

---

## Step 6 — Inheritance package

Write the documents that make the two account logins sufficient on their own, and then
**verify that claim rather than asserting it**.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 6.1 | new | Write `README.md` at the repository root **for a non-technical inheritor**, in plain English. Done when somebody with no technical background can read it and understand what the site is and how to change it. | 5 |
| 6.2 | new | The README states the **five-minute republish lag** explicitly, so an inheritor editing the sheet does not conclude the site is broken. Done when it is stated. | 1 |
| 6.3 | new | The README warns: **never click "Stop publishing"** — it takes the site offline. Done when the warning is present. | 1 |
| 6.4 | new | The README warns that the published URL is tied to the tab's **internal id**: deleting and recreating the tab breaks it, **renaming is fine**. Done when both halves are stated. | 1 |
| 6.5 | new | The README explains how to add, edit and remove a tradesperson by editing the spreadsheet. Done when the three procedures are written. | 3 |
| 6.6 | new | The README explains how to edit the site itself **in the GitHub web editor**, and states that there is **no build step**. Done when both are stated. | 3 |
| 6.7 | new | Write `docs/RESTORE-dunchi-trader.md` as the **full rebuild-from-zero runbook**: recreate the Form, the Sheet, the tabs, the publishing, the Apps Script deployment, the repository and Pages. Done when every step is written in order with its expected result. | 6 |
| 6.8 | new | RESTORE records the exact Published tab schema, the publishing procedure, and the Apps Script deployment settings. Done when all three are recorded. | 3 |
| 6.9 | new | **VERIFICATION — walk the RESTORE document end to end and confirm every step can be done with only the two account logins.** This sub-task verifies the inheritance claim rather than asserting it. Any step needing anything else is a defect to fix, not a footnote to add. Done when the walk is completed and every step is confirmed achievable with those two logins alone. | 5 |
| 6.10 | new | Confirm no personal credential, token or account of the original owner is required by the running system. Done when removing his access leaves the site running and editable. | 3 |
| 6.11 | new | Confirm both repositories hold the full source and neither is a partial copy or a build artefact. Done when a file-by-file comparison shows them identical. | 2 |
| 6.12 | new | Confirm the documents reference no external organisation's internal systems or standards. Done when a search of all documents returns no such reference. | 2 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 6.1 | When someone inherits this, plain English is the interface. | Write a README for a non-technical reader | A non-technical reader understands it | Plain-English root README | new | | | docs | 3.23 |
| 6.2 | When the sheet edit lags, people think it broke. | State the republish lag in the README | Lag is stated explicitly | One paragraph in the README | new | | | docs | 6.1 |
| 6.3 | When stop publishing is clicked, the site dies. | Warn against stop publishing | Warning present in the README | Warning in the README | new | | | docs | 6.1 |
| 6.4 | When the tab is recreated, the feed URL breaks. | Warn that deleting the tab breaks the URL | Both halves stated in the README | Warning in the README | new | | | docs | 6.1 |
| 6.5 | When the list changes, the owner edits a sheet. | Document add, edit and remove procedures | Three procedures written | Step lists in the README | new | | | docs | 6.1 |
| 6.6 | When a build step is added, inheritance breaks. | Document web-editor editing and no build step | Both stated in the README | Explanation in the README | new | | | docs | 6.1 |
| 6.7 | When everything is lost, a runbook rebuilds it. | Write the full rebuild-from-zero runbook | Every step written with its result | Ordered runbook document | new | | | docs | 4.14, 5.11 |
| 6.8 | When settings are undocumented, rebuilds stall. | Record schema, publishing and deployment | All three recorded in RESTORE | Detail sections in RESTORE | new | | | docs | 6.7 |
| 6.9 | When inheritance is asserted, it is usually false. | Walk RESTORE using only the two logins | Every step achievable with two logins | End-to-end verification walk | new | | | build | 6.7 |
| 6.10 | When the owner leaves, his keys go with him. | Confirm no personal credential is required | Site runs without his access | Removal test of his access | new | | | build | 6.9 |
| 6.11 | When repos drift, the inherited one may be stale. | Compare both repositories file by file | Both hold identical full source | File-by-file comparison | new | | | build | 6.9 |
| 6.12 | When documents cite outside systems, they stop standing alone. | Search documents for outside references | No such reference remains | Search across all documents | new | | | docs | 6.7 |

---

## Step 7 — Launch readiness

Seed the directory with enough content to be worth opening, then launch.

**A directory with four people in it gets opened once and never again.** There is exactly one
chance to make a first impression on this audience. The target before the link goes into the
village WhatsApp group is **12–15 tradespeople across at least 6 trades**.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 7.1 | new | Agree the seed trade list, covering the everyday village trades: Gardener, Handyman, Carpenter / Joiner, Plasterer, Painter & Decorator, Tree Surgeon, Fencing, Groundworks / Drainage, Window Cleaner, Cleaner, Logs / Firewood, Oil / LPG Supplier, Pest Control. Done when the list is agreed and recorded. | 2 |
| 7.2 | new | Seed the Published tab to **12–15 tradespeople across at least 6 trades**. Done when both thresholds are met, counted from the live CSV. | 5 |
| 7.3 | new | Confirm each seeded entry has a working phone number and a correct trade. Done when every number is checked and every trade is right. | 3 |
| 7.4 | new | Confirm the seeded ids run `T001` upward with no gaps or duplicates. Done when the id column is checked end to end. | 2 |
| 7.5 | new | Full pre-launch pass on a real phone: open the link, tap a trade, tap Call, place a vote. Done when all four work on a phone. | 3 |
| 7.6 | new | Full pre-launch pass on a computer. Done when the same four actions work on a computer. | 2 |
| 7.7 | new | Re-run the largest-text-size and 200% zoom checks against the seeded live site, not a test fixture. Done when neither produces sideways scrolling or lost content. | 3 |
| 7.8 | new | Confirm the empty-trade rule holds with real data: trades with nobody in them do not appear. Done when the live grid shows only populated trades. | 2 |
| 7.9 | new | Write the launch message for the village WhatsApp group, in plain language, naming what the site is and what it is not. Done when the message is written and approved by the owner. | 2 |
| 7.10 | new | Confirm the small print and the village chat line are both visible on the live seeded site. Done when both are seen on the live site. | 1 |
| 7.11 | new | Launch: the owner posts the link to the village WhatsApp group. Done when the link is posted. | 1 |
| 7.12 | new | Post-launch check within the first week: confirm new form submissions are arriving and the review path works with real villager data. Done when at least one real submission has been reviewed end to end. | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 7.1 | When trades are missing, villagers give up. | Agree the everyday village trade list | Seed trade list agreed and recorded | List agreed with the owner | new | | | operator | none |
| 7.2 | When a list is thin, it is opened once. | Seed 12 to 15 people across 6 trades | Both thresholds met on the live feed | Seed rows on the Published tab | new | | | operator | 7.1, 6.9 |
| 7.3 | When a number is wrong, trust is gone. | Check every seeded number and trade | All numbers and trades correct | Manual verification of each row | new | | | operator | 7.2 |
| 7.4 | When ids are messy, votes attach wrongly. | Check ids run upward without gaps | Id column is clean end to end | Inspect the id column | new | | | operator | 7.2 |
| 7.5 | When most use a phone, launch must work there. | Run the full journey on a phone | All four actions work on a phone | End-to-end manual test | new | | | build | 7.2 |
| 7.6 | When some use a computer, it must work there too. | Run the full journey on a computer | All four actions work on a computer | End-to-end manual test | new | | | build | 7.2 |
| 7.7 | When zoom breaks the layout, the audience is lost. | Re-run zoom checks on the live site | No sideways scroll or lost content | Live-site zoom testing | new | | | build | 7.2 |
| 7.8 | When empty trades show, taps are wasted. | Confirm only populated trades appear | Live grid shows populated trades | Inspect the live trade grid | new | | | build | 7.2 |
| 7.9 | When the link is shared, the words matter. | Write the WhatsApp launch message | Message written and approved | Draft approved by the owner | new | | | docs | 7.5 |
| 7.10 | When the site looks official, the caveats must show. | Confirm small print and chat line live | Both visible on the live site | Check the live site | new | | | build | 7.2 |
| 7.11 | When everything is ready, share the link. | Post the link to the village group | Link posted to the group | Owner posts to WhatsApp | new | | | operator | 7.9, 7.10 |
| 7.12 | When real data arrives, the path must hold. | Review a real submission end to end | One real submission reviewed | Post-launch review of live data | new | | | operator | 7.11 |

---

*End of build plan.*
