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
- **Status** is one of `new`, `to-do`, `in progress`, `done`, `blocked`, `parked`, `descoped`.
- **Effort** is an integer 1–10, where 10 is the most work.

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
| 1.1 | blocked | The site is live at `https://dunchitrader-collab.github.io` and serves the committed source untouched. Done when a placeholder page carrying the site title and the small print is reachable at that URL on a phone and on a computer, the served HTML is byte-identical to the committed `index.html` (Jekyll processing disabled), and nothing resembling a credential or token is present anywhere in the repository. **2026-09-18: files built and pushed to `origin` at `c1a4f78` — `index.html`, `style.css`, `app.js`, `.nojekyll`. Credential scan clean. BLOCKED on the same missing dunchitrader-collab credential as 1.2: the files cannot reach the live repo, so the live URL still serves the old Jekyll page (measured — live sha differs from committed `index.html`, `Jekyll v3.10.0` still in the served markup). The byte-identity and phone/computer checks are unrunnable until the push lands.** | 5 |
| 1.2 | blocked | Both repositories carry the same source and either can be pushed to. Done when the `collab` remote and `origin` both push successfully, the two repositories hold identical content, and the push procedure is written down plainly enough for someone who has not seen this session to follow it. **2026-09-18: `collab` remote configured and fetches successfully; `origin` pushes successfully; push procedure written in `README.md`. BLOCKED on a credential for the dunchitrader-collab GitHub account — both credentials available to this session have `push: false` on that repo, and a dry-run push returns HTTP 403 "Permission denied". Nothing else is outstanding on this row.** | 3 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 1.1 | When Gavin opens the link on his phone to check the work, he sees the page. | Serve committed static source at the public URL | Later steps become verifiable, because rendered work can now be reviewed in a browser | Static files plus .nojekyll on Pages | blocked | | | build | none |
| 1.2 | When Gavin has finished a change here and wants the village to see it, he pushes to the live site. | Configure both remotes and document the push | The inheritable repo stays a full copy rather than drifting behind | Second named git remote | blocked | | | build | 1.1 |

---

## Step 2 — Live data

The live page shows the real tradespeople from the sheet, grouped by trade.

**Precondition, measured 2026-09-18 and still failing.** The published CSV URL serves the
**raw Form responses tab**, not the curated Published tab. Built against it today, the site
would publish unreviewed submissions and bypass the approval gate entirely. Sub-task 2.1 is
therefore `blocked` on the owner republishing from the correct tab.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 2.1 | blocked | The page shows the real tradespeople from the Published tab, grouped by trade. Blocked on the owner republishing the CSV from the Published tab. Done when the live page lists every active row from the sheet under the right trade heading, a person holding two trades appears under both without being counted twice, inactive rows do not appear, trades with nobody in them are absent entirely, and each card shows the name, business, trade and a working Call button. Reading rules per solution design §6.1.1 — columns matched by header name, quoted fields parsed properly. | 8 |
| 2.2 | new | The page stays useful when the sheet is empty or the feed is unreachable. Done when a sheet with no data rows, a blocked or timed-out fetch, and a feed whose header is not the expected schema each produce a readable message rather than a blank page or a silent console error. Per solution design §6.1.1 rule 3 and §7.4. | 4 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 2.1 | When a villager needs a plumber and taps Plumber, they expect to see the plumbers the village actually recommends. | Fetch and render the Published tab by trade | The directory stops being a placeholder and becomes the real list | Client-side CSV fetch, parse and group | blocked | | | build | 1.1 |
| 2.2 | When a villager opens the link while Gavin is mid-edit on the sheet, they never meet a blank screen. | Render explicit empty and failure states | A bad feed reads as a message, never as a broken site | Explicit branches before render | new | | | build | 2.1 |

---

## Step 3 — Front end

The agreed design is live, and it holds up at the largest text size on a narrow phone.

The wireframe is the implementation (see Authority precedence above). This step ports it and
then verifies it against the binding rules in solution design §9.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 3.1 | new | The live site looks and behaves like the agreed wireframe on a phone and on a computer. Done when `design/wireframe-dunchi-trader.html` is ported to the live page, the text-size control and its remembered setting work, the small print and the village chat line are both visible, and no user-facing text says "tradesman". | 6 |
| 3.2 | new | A villager can find someone by work type without knowing a name. Done when tapping a trade shows that trade's people, typing in the search box suggests trades ahead of people and businesses, the trade list stays visible while suggestions show, and tapping a trade or Back clears the search box. Behaviour per solution design §9.11. | 6 |
| 3.3 | new | The page survives the way this audience actually uses it. Done when, at the largest text size on a 320px-wide phone and again at 200% browser zoom, nothing scrolls sideways, no text leaves its box, no phone number breaks mid-digit, the header does not swallow the screen and the size buttons do not grow as they are pressed. Rules and the two fixed bugs per solution design §9.6–§9.10. | 5 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 3.1 | When a 78-year-old villager opens the link for the first time, the page looks calm and readable. | Port the reviewed wireframe to the live page | The eight iterations of agreed design reach the real site | CSS and markup port from wireframe | new | | | build | 2.1 |
| 3.2 | When a villager's gutter is overflowing and they know no roofers by name, they search by the work. | Wire trade filtering and search suggestions | Searching by work type is the primary route, as the owner required | In-memory match over loaded rows | new | | | build | 3.1 |
| 3.3 | When a villager with poor eyesight presses the biggest A, the phone number stays readable. | Verify layout at largest size and 200% zoom | The zoom requirement is proven on a real narrow screen | Narrow-viewport and zoom testing | new | | | build | 3.1 |

---

## Step 4 — Votes

A villager can add their own recommendation from the card, and it reaches the sheet.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 4.1 | new | A villager can add a recommendation to someone already listed, without leaving the page or re-typing anything. Done when the in-place panel opens on the card headed "You are recommending {name}", a blank name records as "a villager", a too-short entry shows a plain-text error without clearing what they typed, and the tally and their words appear on the card. Behaviour per solution design §7.4 and §7.5. | 7 |
| 4.2 | new | Those recommendations reach the sheet through an endpoint that can do nothing else. Done when a vote placed on a real phone appends one row to the Votes tab carrying the trader id rather than the name, an attempted write to the Published tab fails, and the Apps Script source is committed to the repository so it can be redeployed from scratch. | 6 |
| 4.3 | new | The cross-origin behaviour is known rather than assumed. Done when the actual response behaviour from the live Pages origin is measured and written down, and solution design §6.2 is corrected to record what was observed rather than what was expected. | 2 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 4.1 | When a villager sees the electrician who rewired their kitchen last year already listed, they want to say so too. | Build the in-card recommendation panel | A second voice can be added to a listing without the owner touching the sheet | In-card form, no navigation away | new | | | build | 3.1 |
| 4.2 | When Gavin opens the Votes tab on a Sunday evening, the new recommendations are there and the listings untouched. | Deploy an append-only Apps Script endpoint | The open endpoint is bounded to junk rows at worst, never a changed listing | Bound Apps Script web app | new | | | build | 4.1 |
| 4.3 | When a villager taps Add and nothing visibly happens, they will tap it again and again. | Measure real cross-origin response behaviour | The optimistic thank-you rests on a measurement, not a guess | Live test from the Pages origin | new | | | build | 4.2 |

---

## Step 5 — Sheet clean-up

The responses tab flags its own duplicates and tells the owner what to do about each row.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 5.1 | new | The owner can review a new submission at a glance and act on it in one tap. Done when each response row shows a plain-English verdict covering all four cases, tested with sample rows that trigger each, and carries a Publish / Add to T0xx / Reject dropdown. Normalisation and verdict definitions per solution design §7.2 and §7.3. | 6 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 5.1 | When Gavin cannot remember whether a submitted plumber is already listed, the sheet tells him. | Add normalising keys and the verdict column | Reviewing a submission becomes a glance instead of a search | Spreadsheet formulas on the responses tab | new | | | build | 2.1 |

---

## Step 6 — Inheritance package

Someone handed the two logins can run the site, and can rebuild it from zero.

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 6.1 | new | Someone handed only the two account logins can both run the site and rebuild it from nothing — verified by walking it, not asserted. Done when the root `README.md` explains in plain English what the site is, how to add, edit and remove a tradesperson, how to edit the page in the GitHub web editor with no build step, that ids are assigned once and never changed, and carries the three standing warnings (the five-minute republish lag, never click "Stop publishing", and deleting the Published tab breaks the feed while renaming it is safe); `docs/RESTORE-dunchi-trader.md` covers recreating the Form, Sheet, tabs, publishing, Apps Script deployment, repository and Pages in order with expected results; **and somebody has walked that runbook end to end confirming every step is achievable with those two logins alone.** Any step needing anything else is a defect to fix, not a footnote to add. | 9 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 6.1 | When Gavin hands the directory to whoever takes it on and walks away, they can run it without him. | Write README and runbook, then walk it | The inheritance requirement is proven rather than asserted | End-to-end verification walk | new | | | build | 4.2, 5.1 |

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

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on |
|---|---|---|---|---|---|---|---|---|---|
| 7.1 | When the first villager taps the link minutes after Gavin posts it, that first visit works. | Run the full journey against seeded content | Launch risk is retired before the link is shared, not after | End-to-end manual test on two devices | new | | | build | 6.1 |
| 7.2 | When Gavin is about to paste the link into the village group, he needs a sentence to put with it. | Draft the launch message and confirm seeding | A thin directory cannot be launched by accident | Draft approved by the owner | new | | | docs | 7.1 |

---

*End of build plan.*
