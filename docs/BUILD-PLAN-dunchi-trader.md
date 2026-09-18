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

**A row is an OUTCOME, not a task.** The test each row must pass: could the owner look at the
result and say *"yes, that is delivered"*? "A villager can find a plumber and ring them from
their phone" is a row. "Set line-height to 1.55" is not — that is implementation detail, and
it lives in the solution design.

- **The design says HOW; this plan says WHAT IS DELIVERED.** The accessibility rules, the
  overflow rules, the two text-size bugs, the autocomplete behaviour, the verdict definitions
  and the CSV reading rules are all recorded in `docs/SOLUTION-DESIGN-dunchi-trader.md`. They
  are **cited here, never restated** — a second copy would drift from the first.
- **Detail belongs in a row's done-when**, which may list several checkable conditions, not in
  extra rows.
- **The owner's own actions are not rows.** Seeding the directory, posting the launch message
  and the seven Google-side operator actions are his, and are recorded in
  `docs/HANDOVER-dunchi-trader.md` Layer 4. Counting them here would inflate the plan with
  work the build does not do.
- Sub-tasks are numbered `{step}.{n}`. **Numbering is append-only from here on.**
- **Status** is one of `new`, `to-do`, `done`, `blocked`, `parked`, `descoped`, `external`.
- **Effort** is an integer 1–10, where 10 is the most work.

### Delivery fields — every row, no exceptions

Every row carries an **Owner**, a **Due start**, a **Due end**, an **Actual start** and a
**Forecast end**. A blocked row carries dates like any other: a blocked row still has a
forecast, and that is the point of having one.

- **Owner** is the account key `222b34c4-7d05-48f4-9d23-cfb47e96d9de` — Gavin. It is stored
  as the stable account identifier and the name is resolved at render, so a rename never
  orphans a row. He is accountable for every row; Claude Code is the tool, never the owner.
- **Actual start** is populated only for rows that have actually started. A row that has not
  begun carries a blank, which is information rather than an omission.
- **Forecast end** is where the row is heading now, which may differ from its Due end.

**Scheduling is FORWARD from today, never backwards from a deadline.** The dates below start
at 2026-09-18, apply each row's effort and its dependencies, and let the end date fall out.
No target finish was chosen and worked back to.

**Rate: 60 minutes per effort point, over an 8-hour working day. This figure is ASSUMED, not
measured** — it was supplied as a working figure and can be adjusted once real throughput is
known. Nothing derived from it below is a measured duration, and the resulting dates are
projections, not commitments. The 8-hour day is this repo's first such convention; no earlier
one was recorded.

**Critical path: 49 of the 75 effort** — `1.1 → 2.1 → 3.1 → 4.1 → 4.2 → 6.1 → 7.1 → 7.2`.
Computed from the Depends-on column rather than assumed, and it matches the figure given when
the fields were commissioned. On the forward schedule the plan lands **2026-09-25**.

**One deliberate departure from the validator.** `STD-00009` §5.12 wants a *named person* in
`Owner` and reports the account key as "an opaque identifier, not a named person". The key is
used here because that is what was instructed, under decision `D12a-P3ud-09092026`: the estate
stores a stable account key and resolves the display name at render. The advisory is expected,
does not change the exit code, and is recorded here rather than silently accepted.

### Authority precedence

`design/wireframe-dunchi-trader.html` is a **working, reviewed page** — the layout, palette,
typeface, text-size control, autocomplete, search-clearing and overflow handling are already
built and were reviewed across eight iterations. Step 3 is therefore **port it, then verify
it**, not rebuild it feature by feature.

Where the wireframe and the design disagree, **the solution design §9 wins** and the wireframe
is corrected to match.

---

## Step 1 — Repo, remotes and hosting

The site exists at its public address and serves exactly what is committed.

**This step also satisfies the browser-reachability dependency for every later step.** The
owner tests rendered work in a live browser. A change is only built when it is **visible at
the URL he opens** — not when it is committed, and not when it works locally. Every later
step's done-when is checked against the live site, so nothing after this can be verified
until it is done.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 1.1 | blocked | The site is live at `https://dunchitrader-collab.github.io` and serves the committed source untouched. Done when a placeholder page carrying the site title and the small print is reachable at that URL on a phone and on a computer, the served HTML is byte-identical to the committed `index.html` (Jekyll processing disabled), and nothing resembling a credential or token is present anywhere in the repository. **2026-09-18T14:25:29Z — measured against the live URL: HTTP 200, `text/html`, 624 bytes; live sha256 `926e3141…babbeb8` equals committed `index.html` sha256 `926e3141…babbeb8`; `Jekyll v3.10.0` returns 0 matches, so `.nojekyll` is working; served `<title>` is `Dunchideock Village Suppliers`; the small print line is served. Credential scan clean. Computer half CONFIRMED. OUTSTANDING — the phone sighting only: this session has no phone and did not check it, and the row is deliberately left short of done on that ground alone. Gavin opens the URL on a phone to close it.** | 5 |
| 1.2 | done | Both repositories carry the same source and either can be pushed to. Done when the `collab` remote and `origin` both push successfully, the two repositories hold identical content, and the push procedure is written down plainly enough for someone who has not seen this session to follow it. **CLOSED 2026-09-18T14:25:29Z — `origin` pushed (`5d48f55..f94d45a`) and `collab` pushed (`313ccfb..f94d45a`, `master:main`). Tree equality verified: both remotes resolve to tree `7b79e241`, and HEAD is 0 ahead of each. Push procedure written in `README.md`, including the `master:main` branch-name difference. The live repo's own unrelated `Initial commit` was merged rather than force-pushed over, so its history is preserved.** | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1.1 | When Gavin opens the link on his phone to check the work, he sees the page. | Serve committed static source at the public URL | Later steps become verifiable, because rendered work can now be reviewed in a browser | Static files plus .nojekyll on Pages | blocked | 2026-09-18 | 2026-09-19 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | none | 2026-09-18 | 2026-09-18 |
| 1.2 | When Gavin has finished a change here and wants the village to see it, he pushes to the live site. | Configure both remotes and document the push | The inheritable repo stays a full copy rather than drifting behind | Second named git remote | done | 2026-09-18 | 2026-09-18 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 1.1 | 2026-09-18 | 2026-09-18 |
---

## Step 2 — Live data

The live page shows the real tradespeople from the sheet, grouped by trade.

**Precondition, measured 2026-09-18 and still failing.** The published CSV URL serves the
**raw Form responses tab**, not the curated Published tab. Built against it today, the site
would publish unreviewed submissions and bypass the approval gate entirely. Sub-task 2.1 is
therefore `blocked` on the owner republishing from the correct tab.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 2.1 | blocked | The page shows the real tradespeople from the Published tab, grouped by trade. Blocked on the owner republishing the CSV from the Published tab. Done when the live page lists every active row from the sheet under the right trade heading, a person holding two trades appears under both without being counted twice, inactive rows do not appear, trades with nobody in them are absent entirely, and each card shows the name, business, trade and a working Call button. Reading rules per solution design §6.1.1 — columns matched by header name, quoted fields parsed properly. **2026-09-18T14:39:30Z — the machinery is BUILT, LIVE and TESTED at `d10ae18`; only the feed is missing. Proven against a correct Published-tab fixture: 3 active people yield 4 listings, a two-trade person appears under both headings while counted once, the inactive row is excluded, and no empty trade appears. Header-name mapping verified by re-ordering every column. STILL BLOCKED — the live feed serves the raw Form responses tab, so there is nothing correct to render. This row closes when Gavin republishes from the Published tab; no further code is expected.** | 8 |
| 2.2 | done | The page stays useful when the sheet is empty or the feed is unreachable. Done when a sheet with no data rows, a blocked or timed-out fetch, and a feed whose header is not the expected schema each produce a readable message rather than a blank page or a silent console error. Per solution design §6.1.1 rule 3 and §7.4. **CLOSED 2026-09-18T14:39:30Z. All three states render prose in the page's own voice, not an error string — "Nobody on the list just yet", "The list will not load at the moment", "The list is being updated". The wrong-header state was demonstrated against the REAL live condition rather than a mock: the live `app.js` run against the live feed parses 3 rows, `build()` returns `null`, and the page shows the message and nothing else. Safety property proven with a fixture carrying 2 email addresses — 0 reached the rendered DOM, and no raw form question text leaked. 14 logic tests pass, including quoted commas, embedded newlines, doubled quotes, and re-ordered columns.** | 4 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2.1 | When a villager needs a plumber and taps Plumber, they expect to see the plumbers the village actually recommends. | Fetch and render the Published tab by trade | The directory stops being a placeholder and becomes the real list | Client-side CSV fetch, parse and group | blocked | 2026-09-21 | 2026-09-22 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 1.1 | 2026-09-18 | 2026-09-18 |
| 2.2 | When a villager opens the link while Gavin is mid-edit on the sheet, they never meet a blank screen. | Render explicit empty and failure states | A bad feed reads as a message, never as a broken site | Explicit branches before render | done | 2026-09-18 | 2026-09-18 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 2.1 | 2026-09-18 | 2026-09-18 |
---

## Step 3 — Front end

The agreed design is live, and it holds up at the largest text size on a narrow phone.

The wireframe is the implementation (see Authority precedence above). This step ports it and
then verifies it against the binding rules in solution design §9.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 3.1 | blocked | The live site looks and behaves like the agreed wireframe on a phone and on a computer. Done when `design/wireframe-dunchi-trader.html` is ported to the live page, the text-size control and its remembered setting work, the small print and the village chat line are both visible, and no user-facing text says "tradesman". **2026-09-18T14:39:30Z — ported and live at `d10ae18`. `index.html` 1,845B, `style.css` 10,988B, `app.js` 14,060B, all three HTTP 200 and sha256-identical to the committed files. Verified in the served output: small print and village chat line both present; "tradesman" 0 matches; demo scaffolding 0 matches; header not sticky (0 `position:sticky`); sizer strip entirely in px (0 `rem` in that block); `minmax(min(100%, 15rem), 1fr)` present; two-line Call button present; autocomplete `mark` uses `color:inherit` + underline only. The only CSS rule dropped from the wireframe is `.demo`; the only ones added are `.notice` and `.loading`. OUTSTANDING — this is a rendered surface and Gavin has not seen it. It awaits his sighting on a phone AND a computer, and is deliberately not closed on Claude's own reading of the page.** | 6 |
| 3.2 | done | A villager can find someone by work type without knowing a name. Done when tapping a trade shows that trade's people, typing in the search box suggests trades ahead of people and businesses, the trade list stays visible while suggestions show, and tapping a trade or Back clears the search box. Behaviour per solution design §9.11. **CLOSED 2026-09-18T15:02Z — 26 behaviour tests driven in a real browser (Chromium/puppeteer), all passing: tapping a trade shows that trade's people and clears the search; Back clears it too and returns to the 8-trade grid; typing suggests TRADES ahead of people and businesses (verified by index position); matches are UNDERLINED with `color` equal to the parent's, so colour carries no meaning alone; the trade list stays visible while suggestions show; Enter searches everything and Escape clears. NOT RUN AGAINST REAL DATA — the live feed still serves the wrong tab, so every search test used a correct Published-tab fixture.** | 6 |
| 3.3 | blocked | The page survives the way this audience actually uses it. Done when, at the largest text size on a 320px-wide phone and again at 200% browser zoom, nothing scrolls sideways, no text leaves its box, no phone number breaks mid-digit, the header does not swallow the screen and the size buttons do not grow as they are pressed. Rules and the two fixed bugs per solution design §9.6–§9.10. **2026-09-18T15:02Z — measured in a real browser at 320px across six cases: default 20px, largest 29px, 200% zoom, largest+cards, largest+cards+200% zoom, and desktop 1280px. `scrollWidth` equals `clientWidth` in ALL SIX (0px sideways overflow), 0 elements past the right edge, header `position: static` in every case, size buttons a constant 48×44px. Three real defects were found and fixed: a long international number split mid-digit (3 lines at largest size, 13 at 200% zoom); the fixed-px size strip needed 108px of a 102px line under zoom; and rem-scaled padding on `.wrap`/`.card`/`.call` claimed 174px of a 160px body, collapsing the content box. Every digit group now stays intact at every size measured. OUTSTANDING — a rendered surface Gavin has not seen; not closed on measurement alone.** | 5 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 3.1 | When a 78-year-old villager opens the link for the first time, the page looks calm and readable. | Port the reviewed wireframe to the live page | The eight iterations of agreed design reach the real site | CSS and markup port from wireframe | blocked | 2026-09-18 | 2026-09-19 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 2.1 | 2026-09-18 | 2026-09-18 |
| 3.2 | When a villager's gutter is overflowing and they know no roofers by name, they search by the work. | Wire trade filtering and search suggestions | Searching by work type is the primary route, as the owner required | In-memory match over loaded rows | done | 2026-09-18 | 2026-09-18 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 3.1 | 2026-09-18 | 2026-09-18 |
| 3.3 | When a villager with poor eyesight presses the biggest A, the phone number stays readable. | Verify layout at largest size and 200% zoom | The zoom requirement is proven on a real narrow screen | Narrow-viewport and zoom testing | blocked | 2026-09-18 | 2026-09-19 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 3.1 | 2026-09-18 | 2026-09-18 |
---

## Step 4 — Votes

A villager can add their own recommendation from the card, and it reaches the sheet.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 4.1 | done | A villager can add a recommendation to someone already listed, without leaving the page or re-typing anything. Done when the in-place panel opens on the card headed "You are recommending {name}", a blank name records as "a villager", a too-short entry shows a plain-text error without clearing what they typed, and the tally and their words appear on the card. Behaviour per solution design §7.4 and §7.5. **CLOSED 2026-09-18T15:02Z — driven in a real browser: the panel opens in place on the card headed "You are recommending Dave Trelawny" without leaving the page; a blank name records as "a villager"; a too-short entry shows a plain-text error positioned BELOW the textarea whose colour equals the body colour (so colour alone carries nothing) and does NOT clear what was typed; the tally and the villager's words then appear on the card. THE ENDPOINT DOES NOT EXIST YET — the send sits behind `sendRecommendation()`, which returns `false` and posts nothing while `VOTES_ENDPOINT` is empty. Row 4.2 sets that constant. The confirmation deliberately says the recommendation is "noted on this page" and adds that it will not reach the village list until the site is finished, so the thank-you does not lie.** | 7 |
| 4.2 | new | Those recommendations reach the sheet through an endpoint that can do nothing else. Done when a vote placed on a real phone appends one row to the Votes tab carrying the trader id rather than the name, an attempted write to the Published tab fails, and the Apps Script source is committed to the repository so it can be redeployed from scratch. | 6 |
| 4.3 | new | The cross-origin behaviour is known rather than assumed. Done when the actual response behaviour from the live Pages origin is measured and written down, and solution design §6.2 is corrected to record what was observed rather than what was expected. | 2 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 4.1 | When a villager sees the electrician who rewired their kitchen last year already listed, they want to say so too. | Build the in-card recommendation panel | A second voice can be added to a listing without the owner touching the sheet | In-card form, no navigation away | done | 2026-09-18 | 2026-09-18 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 3.1 | 2026-09-18 | 2026-09-18 |
| 4.2 | When Gavin opens the Votes tab on a Sunday evening, the new recommendations are there and the listings untouched. | Deploy an append-only Apps Script endpoint | The open endpoint is bounded to junk rows at worst, never a changed listing | Bound Apps Script web app | new | 2026-09-21 | 2026-09-21 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 4.1 |  | 2026-09-21 |
| 4.3 | When a villager taps Add and nothing visibly happens, they will tap it again and again. | Measure real cross-origin response behaviour | The optimistic thank-you rests on a measurement, not a guess | Live test from the Pages origin | new | 2026-09-22 | 2026-09-22 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 4.2 |  | 2026-09-22 |
---

## Step 5 — Sheet clean-up

The responses tab flags its own duplicates and tells the owner what to do about each row.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 5.1 | new | The owner can review a new submission at a glance and act on it in one tap. Done when each response row shows a plain-English verdict covering all four cases, tested with sample rows that trigger each, and carries a Publish / Add to T0xx / Reject dropdown. Normalisation and verdict definitions per solution design §7.2 and §7.3. | 6 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 5.1 | When Gavin cannot remember whether a submitted plumber is already listed, the sheet tells him. | Add normalising keys and the verdict column | Reviewing a submission becomes a glance instead of a search | Spreadsheet formulas on the responses tab | new | 2026-09-21 | 2026-09-21 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 2.1 |  | 2026-09-21 |
---

## Step 6 — Inheritance package

Someone handed the two logins can run the site, and can rebuild it from zero.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 6.1 | new | Someone handed only the two account logins can both run the site and rebuild it from nothing — verified by walking it, not asserted. Done when the root `README.md` explains in plain English what the site is, how to add, edit and remove a tradesperson, how to edit the page in the GitHub web editor with no build step, that ids are assigned once and never changed, and carries the three standing warnings (the five-minute republish lag, never click "Stop publishing", and deleting the Published tab breaks the feed while renaming it is safe); `docs/RESTORE-dunchi-trader.md` covers recreating the Form, Sheet, tabs, publishing, Apps Script deployment, repository and Pages in order with expected results; **and somebody has walked that runbook end to end confirming every step is achievable with those two logins alone.** Any step needing anything else is a defect to fix, not a footnote to add. | 9 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 6.1 | When Gavin hands the directory to whoever takes it on and walks away, they can run it without him. | Write README and runbook, then walk it | The inheritance requirement is proven rather than asserted | End-to-end verification walk | new | 2026-09-23 | 2026-09-23 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 4.2, 5.1 |  | 2026-09-22 |
---

## Step 7 — Launch readiness

The site is ready for the link to go into the village WhatsApp group.

**Seeding the directory and posting the launch message are the owner's actions, not the
build's.** They are recorded as launch prerequisites in `docs/HANDOVER-dunchi-trader.md`
Layer 4. This step delivers only the readiness check against real seeded content and the
words he will post.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 7.1 | new | The seeded site has been proven end to end on the devices villagers will actually use. Done when, against the real seeded content rather than a test fixture, the whole journey works on a phone and on a computer — open the link, tap a trade, tap Call, add a recommendation — only populated trades appear, and the largest-text-size and 200% zoom checks still pass. | 5 |
| 7.2 | new | Gavin has the words to post and knows the list is worth opening. Done when the launch message for the village WhatsApp group is drafted in plain language, saying what the site is and what it is not, and the live feed is confirmed to carry at least 12 tradespeople across at least 6 trades. | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 7.1 | When the first villager taps the link minutes after Gavin posts it, that first visit works. | Run the full journey against seeded content | Launch risk is retired before the link is shared, not after | End-to-end manual test on two devices | new | 2026-09-24 | 2026-09-24 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 6.1 |  | 2026-09-24 |
| 7.2 | When Gavin is about to paste the link into the village group, he needs a sentence to put with it. | Draft the launch message and confirm seeding | A thin directory cannot be launched by accident | Draft approved by the owner | new | 2026-09-25 | 2026-09-25 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de | 7.1 |  | 2026-09-25 |
---

*End of build plan.*
