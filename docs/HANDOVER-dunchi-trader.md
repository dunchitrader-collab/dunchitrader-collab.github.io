---
project: dunchi-trader
repo: https://github.com/dunchitrader-collab/dunchitrader-collab.github.io
server: none — static hosting on GitHub Pages
environment: production
owner: dunchitrader@gmail.com
handover-format-version: 2
last-updated: 2026-09-19T11:31:46Z
status: active
---

# LAYER 1 — CURRENT TRUTH

**Last updated: 2026-09-19T11:31:46Z** ~~2026-09-18T21:10:23Z~~

*If removing anything from this layer, it must first exist in the Decision Log with a dated entry explaining why it was removed. Moving content out of this file is treated the same as deleting it.*

### Project Status

ACTIVE — build started 2026-09-18. **The site now shows real tradespeople from the Published tab.** The design is live, the page reads the feed, search and the recommendation panel work, and the zoom/overflow behaviour is measured. Plan stands at ~~7 of 75 effort (9.3%)~~ ~~20 of 75 effort (26.7%)~~ ~~31 of 75 effort (41.3%)~~ ~~46 of 75 effort (61.3%), 9 of 14 rows done~~ ~~48 of 77 effort (62.3%), 10 of 15 rows done~~ ~~54 of 77 effort (70.1%), 11 of 15 rows done~~ ~~56 of 79 effort (70.9%), 12 of 16 rows done~~ ~~58 of 87 effort (66.7%), 13 of 18 rows done~~ SUPERSEDED 2026-09-18T19:45Z → **62 of 92 effort (67.4%)**, 14 of 20 rows done. **2026-09-18T20:08Z — position UNCHANGED at 62/92 (67.4%); this session closed no rows.** **2026-09-18T20:18Z — STILL 62/92 (67.4%), still no rows closed.** **2026-09-18T20:46Z → 68 of 92 effort (73.9%), 15 of 20 rows done — ROW 5.2 IS CLOSED.** **2026-09-18T21:10:23Z — CONVERSATION CLOSED DOWN at 68 of 92 (73.9%), 15 of 20 rows.** **2026-09-19T11:25:10Z — ~~68 of 92 (73.9%), 15 of 20 rows~~ SUPERSEDED → 68 of 96 effort (70.8%), 15 of 21 rows.** This session **cleared no effort and closed no row, which was the expected outcome and is stated plainly rather than dressed up**: everything it built closes on the owner's sighting of a real vote on the live page, and he has not yet redeployed. The percentage FELL because row **4.7** was appended at effort 4, adding to the denominator while the numerator stood still — arithmetic, not regression. **THE OPEN DEFECT IS DIAGNOSED AND IT WAS NONE OF THE FIVE CANDIDATES.** Measured 2026-09-19: the deployment behind the votes `/exec` address is not running `Code.gs` at all — Google answers *"Script function not found: doPost"* to every request, and *"doGet"* to every GET. The address is alive; the script behind it is the wrong one. **AND THE PANEL NOW FEEDS THE VILLAGE LIST.** Owner's ruling D1b: the site's own recommend button writes to **Published `K` and `L`** — the tab the village reads — through the same `appendRecommendation()` the automatic publisher uses, not a second copy. It no longer writes to the **Votes** tab, which nothing ever read. Bounded by D2 and enforced in code: it cannot create a row, assign or reuse an id, write any column but `K` and `L`, touch the owner's formula columns `I` and `J`, or reach an unknown or `hidden` id. **NEITHER FIX IS LIVE UNTIL THE OWNER REDEPLOYS** — nothing in this repository can put a script behind that address, and that is his first job (`apps-script/DEPLOY.md` step 14). This conversation took the plan from 31/75 (41.3%) to here, closing eight rows and appending six as real gaps were found. **The site is functionally complete and not yet launchable**: a villager's recommendation reaches the village list without anybody touching a spreadsheet, the Call button dials correctly (sighted by the owner on his phone), and villagers' words appear on the cards. What stands between it and launch is **seeding** — the list still holds test people — plus the runbook walk. **One defect is open and undiagnosed:** the site's own recommend button produced no row in the Votes tab after the endpoint was redeployed; it is the first thing the successor conversation picks up, and it does not affect the directory itself. **THE LAUNCH-CRITICAL MISDIAL IS FIXED AND CONFIRMED BY THE OWNER ON THE SERVED PAGE:** he opened the live site on his phone, tapped Plumber, tapped Call, and the dialler showed the full eleven-digit number with its leading zero. His word: *"pass"*. **And a real form submission published itself** — `T013 Ron Suttil` appeared on Published without him touching the spreadsheet. Measured here against his real feed for the first time: 12 of 13 phones are eleven digits starting zero (the exception is `T007`, twelve digits, correctly refused and `hidden`), every trade is on the agreed list, and nine of twelve cards show a villager's words. Three further defects in row 5.2's own deliverable were found in the owner's screenshot and fixed: **telephone numbers had lost their leading zero and the Call button would have misdialled (LAUNCH-CRITICAL)**, six people were listed twice, and two trade names did not match the site's tiles. It fixed a defect in row 5.2's own deliverable: the publisher completed cleanly twice and wrote its rows ~1000 lines below the table, invisible to the owner. Reproduced, fixed, and a recovery added. **Row 5.2 stays open until he submits the form and sees the row himself.** **THE SITE IS NOW A RECOMMENDATIONS LIST RATHER THAN A PHONE LIST.** Until today it carried neither the villager's words nor the villager's name, and the form's own question promises the name appears — *"so a fellow villager might reach out to you if they have any questions"*. Owner's ruling D8a. Published gained columns **K `recommendations`** and **L `recommended_by`**; a duplicate submission is now a SECOND RECOMMENDATION appended to the existing person rather than a hard failure; and the card shows the words with attribution. Two rows were appended (3.5 at effort 4, 4.6 at effort 1) adding 5 to the denominator, of which 3.5's 4 closed. **The percentage FELL while real work landed**, and that is arithmetic rather than regression: two rows were appended this session — 5.2 the automatic publisher (effort 6) and 3.4 case-insensitive trade grouping (effort 2) — adding 8 to the denominator, of which only 3.4's 2 closed. **THE REVIEW GATE IS GONE.** Owner's ruling D7a: publishing is automatic, so a villager's submission reaches the live site with no human in between, protected by three hard checks plus his batch sweep rather than by an approval step. The denominator moved because **row 4.5 was appended this session** (effort 2) — the owner's ruling that the note minimum becomes seven characters is a change to shipped behaviour on a closed row, so it got its own row rather than being slipped in. It added 2 to the numerator and 2 to the denominator, which is why the percentage moved only 70.1% → 70.9%. **Row 4.2 is CLOSED: a villager's recommendation now reaches the sheet from a real phone.** Owner confirmation 2026-09-18 (~17:47Z), verbatim: *"the vote populated"*. The denominator moved because **row 4.4 was appended this session** (effort 2) as unplanned work — the three defects the previous session raised and left unfixed. Without it the position would read 46/75 (61.3%); the row both added 2 to the numerator and 2 to the denominator. Rows 2.1 and 3.3 closed on the owner's sighting; row 4.3 closed on measurement. **The votes endpoint is wired and served** — a villager's recommendation now leaves the page. Row 4.2 stays open by its own wording: it closes only when a vote placed **on a real phone** appends a row to the Votes tab. ~~**Nothing is live yet:** the live site still serves its original Jekyll page, because there is no push credential for the dunchitrader-collab account.~~ SUPERSEDED 2026-09-18T14:26:12Z → **THE SITE IS LIVE.** The placeholder page and the reviewed wireframe are served at `https://dunchitrader-collab.github.io`, verified byte-identical to the committed source at `f94d45a`. Build Plan row 1.2 is `done`; row 1.1 is complete but for Gavin's phone sighting.

The build plan was rejected by the owner on 2026-09-18 and wholly rewritten the same day: ~~90 sub-tasks / 231 effort~~ SUPERSEDED 2026-09-18T14:02:20Z → **14 sub-tasks / 75 effort**, same Plan ID `PLAN-DUNCHI-TRADER-V1`, same seven steps. See Layer 5 decision 18.

### What the System Does

~~[ASSUMED] dunchi-trader project — update after first session.~~ SUPERSEDED 2026-09-18 → A public web app listing local tradespeople recommended by villagers of Dunchideock, Devon.

It is a **recommendations list and deliberately not a review site**. Villagers open a link, tap a trade, and tap a large green Call button. That is the whole product.

Built for an elderly audience who will mostly use a phone and will zoom heavily. Tradespeople from surrounding parishes count, but the site is for Dunchideock.

**Wording rule:** always **"tradesperson"**, never "tradesman". "Trader" is acceptable and is the owner's own word. This applies to user-facing copy, documentation and code.

### Standalone Requirement

This project is **entirely standalone**. It depends on no external organisation's servers, accounts, standards or services. The two accounts listed below are the complete system. Anyone holding both logins can run, change and redeploy the site without access to anyone else.

### Server

- **Server:** ~~deverse-dev (89.167.88.21)~~ SUPERSEDED 2026-09-18 → **None.** The site is static and served by GitHub Pages. There is no server, no database and nothing to patch. [VERIFIED 2026-09-18]
- [PATH] **Working copy path (development only, not a dependency):** `~/projects/dunchi-trader/`
- **Service name:** None — there is no service.

### Accounts

| Account | Purpose | Notes |
|---|---|---|
| [CREDENTIAL] `dunchitrader@gmail.com` | Google account — owns the Form, the Sheet, the published CSV and the Apps Script deployment | Password held by the owner. Not stored in this repo. Last verified: 2026-09-18 |
| [CREDENTIAL] `dunchitrader-collab` | GitHub account — owns the live repository and GitHub Pages | Password held by the owner. Not stored in this repo. Last verified: 2026-09-18 |

**These two logins together are the complete system.** No other account is required to operate the site.

### URLs

| URL | Purpose | Status |
|-----|---------|--------|
| [URL] `https://dunchitrader-collab.github.io` | The live site | [VERIFIED 2026-09-18T14:25:29Z] — HTTP 200, `text/html`, 624 bytes. ~~Currently serving the default Jekyll placeholder page, not the application.~~ SUPERSEDED 2026-09-18T14:26:12Z → serves **our** `index.html`: live sha256 equals the committed file's, and `Jekyll v3.10.0` returns 0 matches. |
| [URL] `https://github.com/dunchitrader-collab/dunchitrader-collab.github.io` | Live and inheritable repository. Public. Pages enabled on main / root. | [VERIFIED 2026-09-18] — HTTP 200 |
| [URL] `https://github.com/gsamwell-lang/dunchi-trader` | Development working remote. Same content. | [VERIFIED 2026-09-18] |
| [URL] `https://forms.gle/ZyLed4Tue91bzXjD7` | The Google Form villagers fill in | [VERIFIED 2026-09-18] — HTTP 200 |
| [URL] `https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit` | The Google Sheet | [ASSUMED] — not opened this session (requires the Google login) |
| [URL] Published CSV — ~~`...&gid=1583719737&...`~~ SUPERSEDED 2026-09-18T15:20:38Z → `https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1qHOmFEOYqsSZcy0Y90LBUXbiTBGTJCqy2U-W3VE_zXdWWB6a59QclDbbO9tXoriWZda76rDWkn/pub?gid=1915382769&single=true&output=csv` | The read interface the site fetches. **Now the Published tab** (gid `1915382769`). | [VERIFIED 2026-09-18T15:20:38Z] — HTTP 200, `text/csv`, 291 bytes, header exactly `id,first_name,last_name,business,phone,trade,extra_trade,status`, 4 data rows. ~~**BUT IT SERVES THE WRONG TAB**~~ RESOLVED — it now serves the correct tab. |
| [URL] ~~Votes endpoint~~ SUPERSEDED 2026-09-19 → **Recommendations endpoint** — ~~not deployed; `VOTES_ENDPOINT` empty~~ SUPERSEDED 2026-09-18T17:04:41Z → `https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec` | The write interface. The Apps Script web app the page posts a recommendation to; ~~it can only append to the Votes tab.~~ SUPERSEDED 2026-09-19 (D1b) → it appends the villager's words and name to columns `K` and `L` of one existing, `active` Published row, via the publisher's own `appendRecommendation()`. Bounded by D2 — it cannot create a row, assign or reuse an id, write any other column, touch `I`/`J`, or reach an unknown or `hidden` id. **[BROKEN 2026-09-19 — MEASURED]** the deployment at this address is not running `Code.gs`: a GET returns a Google error page reading *"Script function not found: doGet"* and a POST the same for `doPost`. The address itself is correct and the served page posts to it correctly; only the deployment's content is wrong. It is repaired by the owner redeploying (DEPLOY.md step 14), and verified by opening this address in a browser — one plain sentence means working, an error page means broken. Set in `app.js` line 30 at commit `4d67c15`. | [VERIFIED 2026-09-18T17:02:32Z] — driven from the live Pages origin in a real browser: `POST` returns **HTTP 302** with `access-control-allow-origin: *`, redirecting to `script.googleusercontent.com/macros/echo`, which the browser follows as `GET` and receives **HTTP 200**; round trip 2779.9 ms. The page itself sees only an **opaque** response (`type: opaque`, `status: 0`, `ok: false`, no readable headers) — see Layer 3 and solution design §6.2. **The DEPLOYMENT SETTINGS and the existence of the Votes tab with its four-column header are REPORTED BY THE OWNER, not measured here** — he deployed it under `dunchitrader@gmail.com` per `apps-script/DEPLOY.md` steps 1–3, executing as himself with access set to Anyone. **2026-09-18T17:48Z — THE WHOLE PATH IS NOW CONFIRMED END TO END FROM A REAL PHONE: the owner placed a vote on the live site and the row reached the Votes tab. Verbatim: *"the vote populated"*. REPORTED by him — the append is only visible inside his Google account, which is inherent to the design rather than a gap in the testing. His first attempt at ~17:25Z produced no row; see the stale-page `[BUG]` in Layer 3. Build Plan row 4.2 is `done`.** |

### Repository Topology

Both repositories hold the **full source**. Neither is a build artefact and neither is a partial copy.

| Repo | Role |
|---|---|
| `dunchitrader-collab/dunchitrader-collab.github.io` | **The live and inheritable home.** GitHub Pages serves from it. |
| `gsamwell-lang/dunchi-trader` | The development working remote. |

**If the two diverge, the `dunchitrader-collab` repository is correct**, because it is the one that is inherited and the one that is served.

### Architecture Summary

Villager fills the Google Form → row lands on the **Form responses** tab (raw, messy, nobody sees it) → the owner reviews and copies approved rows across → **Published** tab (curated, the **only** thing the site reads) → published as a live CSV, auto-republishing with roughly a **five minute lag** → the static page on GitHub Pages fetches that CSV on load.

~~Votes travel the other way: the page posts to a Google Apps Script bound to the sheet, which appends a row to a **Votes** tab.~~ SUPERSEDED 2026-09-19 (D1b-6G7f-19092026) →

Recommendations travel the other way: the page posts to a Google Apps Script bound to the sheet, which appends the villager's words to **Published column `K`** and their name to **`L`**, on the row of the tradesperson being recommended. It uses the publisher's own `appendRecommendation()`, so a recommendation from the site and a second recommendation through the form are stored identically. The **Votes** tab is no longer read or written by anything.

~~**The site can only READ the Published tab, so nothing a villager does can change a listing.**~~ SUPERSEDED 2026-09-19 → **Nothing a villager does can change a LISTING**, which is the property that actually matters and it is intact. The site can now add *words* to an existing, visible row — and nothing else. It cannot add a person, assign or reuse an id, change a name, telephone number, trade or status, touch the owner's formula columns `I` and `J`, or reach a `hidden` row. The worst case is unwanted text on a card, deleted from column `K` in one edit; the names and numbers the product exists for are untouchable from the internet. Bounded by D2 and enforced in `apps-script/Code.gs`. See solution design §8.2, which records the widening rather than replacing the old claim.

### Published Tab Schema

```
id, first_name, last_name, business, phone, trade, extra_trade, status
```

`id` is `T001`, `T002`, … **assigned once and never changed.** Votes reference this id. Changing an id silently orphans every recommendation attached to that person.

### Publishing Mechanism — three standing warnings

Publishing is already configured via **File → Share → Publish to web** on the Published tab as CSV, with automatic republishing on.

1. **There is a republish lag of roughly five minutes.** An edit to the sheet does not appear on the next page refresh. This is normal, not a bug.
2. **Never click "Stop publishing"** — it takes the site offline immediately.
3. **The published URL is tied to the tab's internal id.** Deleting and recreating the tab breaks the URL. **Renaming the tab is safe.**

### Credentials

[CREDENTIAL] No credential, token or key is stored in this repository, and none is required by the running system. The read path is a public read-only URL; the write path is an open endpoint by design (see Layer 3).

The two account passwords are held by the owner outside this repository. Last verified: 2026-09-18.

### Cron Schedule

None. Nothing is scheduled. The only recurring behaviour is Google's automatic CSV republishing, which is a Google-side setting and not a cron job.

### HTTPS Certificates

~~[ASSUMED] Managed by Caddy — confirm after first deployment.~~ SUPERSEDED 2026-09-18 → HTTPS is provided and renewed automatically by **GitHub Pages**. There is no certificate to manage, no renewal to configure and no expiry to track. [VERIFIED 2026-09-18 — the live URL serves over HTTPS with HTTP 200]

### Outstanding Items

| Date | Priority | Blocking | Description |
|------|----------|----------|-------------|
| ~~2026-09-18~~ | ~~**CRITICAL**~~ | ~~**YES**~~ | ~~**No push credential for the dunchitrader-collab GitHub account.** Measured 2026-09-18T14:13:45Z: both credentials report `"push": false`, and a dry-run push returns HTTP 403.~~ RESOLVED 2026-09-18T14:26:12Z — Gavin added `gsamwell-personal` as a collaborator with Write access. The push landed at `f94d45a` using the `gsamwell-lang` classic token; see Layer 3 for why the fine-grained token still could not, despite the API reporting `push: true`. |
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~**Row 1.1 needs the phone sighting.**~~ RESOLVED 2026-09-18T15:13:20Z — **Owner sighting 2026-09-18T15:04Z, verbatim:** *"https://dunchitrader-collab.github.io all works are expected without any data in it though"* Row 1.1 is `done`. |
| ~~2026-09-18~~ | ~~HIGH~~ | ~~no~~ | ~~**Row 3.3 is held open on ONE clause.** The sighting covered most of it — nothing scrolled sideways, no text left its box, the header did not swallow the screen and the size buttons did not grow. But *"no phone number breaks mid-digit"* **cannot** have been shown: the feed still serves the wrong tab, so no cards and therefore no phone number were on screen. Deliberately not closed on evidence that could not have shown it. Closes when 2.1 is unblocked and the owner presses the largest A with real cards visible.~~ RESOLVED 2026-09-18T17:04:41Z — the held clause is now sighted. **Owner sighting 2026-09-18 (~16:50Z), verbatim:** *"Task 1 is a pass."* He pressed the largest A on his phone with real cards on screen and confirmed the phone number stays in one piece with nothing running off the right edge. Row 3.3 is `done`. |
| ~~2026-09-18~~ | ~~HIGH~~ | ~~no~~ | ~~**Row 4.2 needs a vote FROM A REAL PHONE.** The script and its numbered steps are committed. Follow [PATH] `apps-script/DEPLOY.md` while signed in as `dunchitrader@gmail.com`. … the owner has deployed it and the endpoint is now wired in `app.js` at `4d67c15` and verified served live. What remains is only the closing evidence: the owner opens the live site on his phone, taps a trade, taps "I recommend them too", fills both boxes, taps "Add my recommendation", then opens the Votes tab and sees the row. Closes on that.~~ RESOLVED 2026-09-18T17:48Z — **Owner confirmation 2026-09-18 (~17:47Z), verbatim:** *"the vote populated"*. He placed the vote from his phone on the live site and confirmed the row reached the Votes tab. Build Plan row 4.2 is `done`. His FIRST attempt at ~17:25Z did not reach the sheet and he retried on a cache-busted URL — see the stale-page `[BUG]` in Layer 3; the endpoint was provably working throughout. |
| 2026-09-18 | HIGH | no | **Delete the TWO non-villager rows from the Votes tab before launch.** The tab now holds two rows that are not a villager's recommendation, and they are different things: **(1) the automated test row** from Build Plan row 4.3's cross-origin measurement — `id` `T001`, `name` `TEST - Claude Code 2026-09-18 - please delete`, `text` beginning `TEST ROW - please delete - automated cross-origin measurement from Claude Code session 2026-09-18, build plan row 4.3.` **(2) the owner's own test vote** from ~17:47Z, the one that closed row 4.2 — whatever name and words he typed, against whichever tradesperson he tapped. Only he knows its content; it is the row whose arrival he confirmed. **Both should go before launch**, so the tally on each card counts only real villagers. Deleting rows from the Votes tab is safe and affects nothing else — the site never reads that tab. **Do NOT delete anything from the Published tab in the process**; that is the list itself. His first ~17:25Z attempt produced no row at all, so there is nothing to remove for that one. |
| 2026-09-18 | MEDIUM | no | **Row 5.1 needs the formulas pasted.** ~~Paste-ready in [PATH] `apps-script/SHEET-FORMULAS.md`.~~ SUPERSEDED 2026-09-18T18:20Z → **the previously committed formulas were WRONG against the real sheet and would have written nonsense into every row.** They assumed phone in E, name in D+J, experience text in G and business in J; the real layout is phone **F**, first name **D**, last name **E**, business **G**, experience text **H**, trade **C**, with **J** the first free column. Rewritten and re-simulated at `bd3f42a` against the owner's three real rows plus nine constructed ones. **They now go in `J2`, `K2`, `L2` on Form responses, with two helper columns in `I2`/`J2` on Published** — the cells changed, so any earlier note about K/L/M/N is superseded. NOT RUN IN GOOGLE SHEETS. Closes when one sample row of each of the four verdicts shows correctly in the real sheet. |
| 2026-09-18 | **CRITICAL** | no | **Install the automatic publisher — paste `Publish.gs`, add the on-form-submit trigger, run the backfill once.** Full numbered steps in [PATH] `apps-script/DEPLOY.md` **Part 2** (steps 6–9). Until the trigger is installed, nothing publishes itself and the site shows only what is already on the Published tab. `apps-script/Code.gs` is NOT touched by any of this — it stays exactly as deployed. **Tested against a stub only; it has never run in Google Sheets**, so his first real submission is the proof.
| 2026-09-18 | **CRITICAL** | no | **Add columns K and L to the Published tab, and re-paste `Code.gs`.** Two short jobs, both in [PATH] `apps-script/DEPLOY.md` — **step 10** adds `recommendations` and `recommended_by` at K1 and L1 (leave them empty; the publisher fills them), and **step 11** re-pastes `Code.gs` and redeploys it as a **NEW VERSION OF THE EXISTING DEPLOYMENT**. **Step 11's last instruction is the one that matters**: choosing *New deployment* instead would issue a different `/exec` URL, the site would keep posting to the old one, and the recommend button would stop with nothing on screen to say so. Without K and L the site still works exactly as before — it simply shows no recommendations.
| 2026-09-18 | **CRITICAL** | no | **Re-paste `Publish.gs`, run the repair, then re-test.** The publisher he installed tonight wrote its rows about a thousand lines below the table — see the Layer 3 bug; **nothing was lost and every id is intact.** Three steps, written out in [PATH] `apps-script/DEPLOY.md` **step 12**: (1) re-paste `apps-script/Publish.gs` into the Apps Script editor and save; (2) reload the spreadsheet and click **Village list → Repair the list (move stray rows back up)**; (3) click **Village list → Check the setup** and confirm it reports *"Stranded rows below the list: none. Good."* Then submit the form once from his phone and watch the row appear directly under the others. **Fixed and tested in the stub at `e5a82da` (23/23), but NOT RUN IN GOOGLE SHEETS** — his re-test is the proof.
| 2026-09-18 | **CRITICAL** | no | **The Call button would misdial — repair the phone numbers before anybody uses the site.** Google stored six of his eight numbers as NUMBERS and dropped the leading zero, and the site builds the `tel:` link from that column. **Nothing warns the villager**: they tap Call and reach a stranger. Fixed so it cannot recur (phone written as text) and repairable for rows already damaged — [PATH] `apps-script/DEPLOY.md` **step 13** has his five steps. Re-derives each number from the responses tab where the original text survives; refuses and reports anything it cannot work out. **Helen Smith's `78853335434` is one it refuses** — it is the known-bad twelve-digit number minus its zero, so it needs retyping from her form answer. Her row is `hidden` either way. The same repair also removes the six duplicate people and corrects `Gas Engineer`/`Car Mechanic` to `Boiler & heating`/`Car mechanic`.
| ~~2026-09-18~~ | ~~**CRITICAL**~~ | ~~yes~~ | ~~**The Call button would misdial.**~~ RESOLVED 2026-09-18T20:46Z — **CONFIRMED BY THE OWNER ON THE SERVED PAGE.** He opened the live site on his phone, tapped Plumber, tapped Call, and the dialler showed the full eleven-digit number with its leading zero. His word: *"pass"*. Measured here against his real feed the same evening: 12 of 13 numbers are eleven digits starting zero. **One remains and needs him:** `T007` Helen Smith's `078853335434` is twelve digits — the repair refused it honestly rather than inventing a plausible wrong number, and her row is `hidden`, so no villager can reach it. Retype it from her original form answer.
| 2026-09-18 | HIGH | no | **Re-paste `Publish.gs` once more — the repair destroyed the duplicate-checker formulas in Published `I2` and `J2`.** He has already pasted them back by hand, so the columns are working again (measured: populated for all 13 rows on the live feed). **The script can no longer do it** as of `8dbf9b2`, but he must take that version for the protection to apply. Re-paste `apps-script/Publish.gs` into the Apps Script editor and save. The same version also maps a second trade, which the live site showed was still producing a stray `Heating` tile. Afterwards, **Village list → Check the setup** reports the health of `I` and `J` so this cannot be found by eye again.
| 2026-09-18 | MEDIUM | no | **Recommendations typed into the SITE's own panel are still seen only by the person who typed them.** Measured 2026-09-18: they post to the Votes tab, and nothing copies Votes into Published, so no other visitor ever sees them. Recommendations arriving through the **Google Form** do reach everybody, via `Publish.gs` writing K and L. Closing the gap means teaching the publisher to read the Votes tab as well, which is NOT built and would need its own plan row and its own ruling. Recorded so nobody assumes D8a closed it.
| 2026-09-18 | HIGH | no | **RULE FOR HIS RULING — the form should tell villagers their recommendation goes public.** Recorded, not implemented; changing the form is his alone. A tradesperson's name and telephone number now appear on a public website without anybody asking that tradesperson, and the villager submitting is the only person in a position to have asked them. Suggested: add one line to the form's description saying the recommendation will be shown publicly with the tradesperson's name and number. See solution design §7.3.
| ~~2026-09-18~~ | ~~HIGH~~ | ~~no~~ | ~~**Form email collection is still ON.** Evidence, REPORTED by the owner: the third real response row carries `gsamwell@deverse.co.uk` in column B. This contradicts decision 3 … **Settings → Responses → Collect email addresses → Off.** Only the owner can change it; nobody here can touch the Google Form.~~ RESOLVED 2026-09-18T18:30Z — **REPORTED BY THE OWNER, NOT MEASURED HERE.** He reports having turned email collection off in Google on 2026-09-18. Nobody in this session can verify it: the form's settings are visible only while signed in and editing the form, and the responses tab is not published. It will become observable the first time a new submission arrives with column B empty — worth a glance then, and until then it stands on his report alone. |
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~**The telephone validation rule is too loose to catch a typo, and may also be absent.** … Recommendation: tighten the rule so it counts digits rather than characters.~~ RESOLVED 2026-09-18T18:30Z — **REPORTED BY THE OWNER, NOT MEASURED HERE.** He reports having installed an **eleven-digit** phone validation rule in Google on 2026-09-18, which is the digit-counting form recommended. Same limitation as the row above: form settings cannot be seen from outside the account, so this stands on his report. The measured finding it replaces is preserved in the record: the old documented rule `^[\d\s\+\(\)\-]{10,20}$` counted *characters*, which is why the twelve-digit `078853335434` passed it — that was never evidence the rule was missing. Solution design §7.1 updated to the new rule, marked REPORTED. |
| 2026-09-18 | MEDIUM | no | **Row 6.1 needs the runbook WALKED.** [PATH] `docs/RESTORE-dunchi-trader.md` is written and was **reconciled to the deployed state on 2026-09-18T17:40Z at `983525f`** so the walk is not wasted on stale instructions — it had been written before the Apps Script was deployed. It now carries a **walk-through tick list** at the end, one line per step naming what should be seen, usable on a phone beside a laptop. The walk itself needs the Form, Sheet, Apps Script and Pages under the two logins and is the owner's; nothing in the build can substitute for it. **Two steps are honestly marked as not confirmable from outside the Google account** — step 3's email-collection and response-validation settings — with an incognito test given for what can be checked. |
| ~~2026-09-18~~ | ~~HIGH~~ | ~~no~~ | ~~**Row 3.1 needs Gavin's sighting.**~~ RESOLVED 2026-09-18T15:13:20Z — same sighting. Every clause of row 3.1 is visible without data, so the sighting covers it in full. Row 3.1 is `done`. |
| ~~2026-09-18~~ | ~~**CRITICAL**~~ | ~~**YES**~~ | ~~**The published CSV serves the WRONG TAB.**~~ RESOLVED 2026-09-18T15:20:38Z — the owner republished from the Published tab (gid `1915382769`) and seeded four test rows. `app.js` switched at commit `0267ef3` and verified live. The feed now returns the agreed eight-column header. |
| ~~2026-09-18~~ | ~~HIGH~~ | ~~no~~ | ~~**Rows 2.1 and 3.3 await the owner's sighting WITH DATA.** Everything on both is measured against the live site — real rows render under the right trades, the hidden row is absent, and at the largest text size no phone number splits mid-digit (0px overflow). Both are rendered surfaces, so neither closes on measurement. The owner opens the site on his phone, taps a trade, and presses the largest A.~~ RESOLVED 2026-09-18T17:04:41Z — **Owner sighting 2026-09-18 (~16:50Z), verbatim:** *"Task 1 is a pass."* He opened the live site on his phone, tapped Plumber, pressed the largest A, and confirmed a card shows name, business and a working green Call button, that it reads correctly, and that the phone number stays in one piece with nothing running off the right edge. Both rows are `done`. |
| 2026-09-18 | HIGH | no | Form question 1 is a dropdown with "Other" typed as an ordinary option. Must become Multiple Choice with the real Add "Other" control. |
| 2026-09-18 | HIGH | no | Email collection is on and required on the form. Must be turned off. |
| 2026-09-18 | HIGH | no | A star-rating question exists on the form, contradicting decision 3. Must be removed. |
| 2026-09-18 | MEDIUM | no | The form's trade list is missing everyday village trades. |
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~Confirm the Published tab carries the agreed header row.~~ RESOLVED 2026-09-18T17:25Z — measured this session by fetching the published CSV directly: the first line is exactly `id,first_name,last_name,business,phone,trade,extra_trade,status`, all eight columns in the agreed order. 291 bytes, `text/csv; charset=utf-8`, 4 data rows. |
| 2026-09-18 | HIGH | no | **Seed the Published tab to 12–15 tradespeople across at least 6 trades, and remove the four test rows.** This is now the largest single thing standing between the build and launch — it blocks Build Plan rows 7.1 and the second half of 7.2, and no code change can substitute for it. Measured 2026-09-18T17:25Z, the live feed carries only `T001`–`T004`: 3 visible test people across 4 trades. **[PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` was written this session and tells him exactly how** — the eight columns, that ids start at `T005` and are never changed or reused, that `status` must be exactly `active`, how `extra_trade` puts one person under two headings without double-counting, how to remove the test rows safely, the trade vocabulary, the five-minute lag and the two publishing warnings. |
| 2026-09-18 | MEDIUM | no | Whether the two form validation rules were added is UNKNOWN and unverified. |
| 2026-09-19 | **CRITICAL** | **YES — the recommend button does nothing at all until this is done** | **Redeploy `apps-script/Code.gs`.** MEASURED 2026-09-19: the deployment behind the `/exec` address is not running that script — Google answers *"Script function not found: doPost"* to every request. Nothing in this repository can fix it; only the owner can put a script behind that address. [PATH] `apps-script/DEPLOY.md` **step 14**, nine steps, including the check that was missing last time (search the editor for `doPost` before deploying). Verified afterwards in ten seconds by opening the `/exec` address in a browser: one plain sentence means working, a Google error page means broken. |
| 2026-09-19 | HIGH | no | **Place one real vote from the phone and see the words appear on the card.** The sighting that closes Build Plan rows **4.6 and 4.7**, and the only thing that can. Both are built and tested — 66 endpoint tests, 30 browser checks — but nothing has run against the real Google Sheet. Check **Published columns `K` and `L`**, not the Votes tab and not the page's thank-you, which appears either way. |
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~Complete first build session — populate handover layers~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. |

### Next Action

~~The owner completes the seven operator actions in Layer 4, starting with the **CRITICAL** republishing of the CSV from the Published tab. Then Build Plan `PLAN-DUNCHI-TRADER-V1` step 1 can begin. Step 2 is **blocked** until the CSV serves the correct tab.~~ SUPERSEDED 2026-09-18T14:13:45Z →

~~**Two things are needed from the owner, and the first now blocks everything:**~~

~~1. **Supply a push credential for the `dunchitrader-collab` GitHub account** — a Personal Access Token with `repo` scope on `dunchitrader-collab/dunchitrader-collab.github.io`, or add an existing account as a collaborator with write access. **Until this exists nothing can reach the live site**, and because a change is only built when it is visible at the URL Gavin opens, no build plan row can be completed. Rows 1.1 and 1.2 are `blocked` on exactly this. The code for both is written and pushed to `origin` at `c1a4f78`; only the push to the live repo is missing.~~
~~2. **Republish the CSV from the Published tab** — still blocks Build Plan row 2.1.~~

~~Plus the remaining Google-side operator actions in Layer 4.~~ SUPERSEDED 2026-09-18T17:04:41Z — both are resolved. Push works via the `gsamwell-lang` classic token; the CSV serves the Published tab. →

~~**The build is at 46 of 75 effort (61.3%), 9 of 14 rows done. Nothing is blocked on code. Three things are needed from the owner, all Google-side:**~~ SUPERSEDED 2026-09-18T17:26Z →

~~**The build is at 48 of 77 effort (62.3%), 10 of 15 rows done. Nothing is blocked on code, and every remaining item is the owner's, inside Google.**~~ SUPERSEDED 2026-09-18T17:48Z →

~~**The build is at 54 of 77 effort (70.1%), 11 of 15 rows done. Step 4 is COMPLETE — the whole votes path works end to end from a real phone. Nothing is blocked on code, and every one of the four remaining rows waits on the owner.**~~ SUPERSEDED 2026-09-19T11:25:10Z →

**The build is at 68 of 96 effort (70.8%), 15 of 21 rows done. Step 4 is NOT complete — the recommend button has not worked since the 2026-09-18 redeploy, and the cause is now measured. Nothing is blocked on code; every remaining row waits on the owner.** In priority order:

0. **REDEPLOY `apps-script/Code.gs` — do this before anything else on this list.** [PATH] `apps-script/DEPLOY.md` **step 14**. The deployment behind the votes `/exec` address is running neither `doPost` nor `doGet`, measured 2026-09-19, which is why the recommend button produces nothing. The same redeploy also lands the repointed endpoint (D1b — it now writes to Published `K`/`L` rather than to a tab nothing reads) and the seven-character minimum (row 4.6). **Check it in ten seconds afterwards by opening the `/exec` address in a browser**: one plain sentence means working, a Google error page means broken. Then place one vote from the phone and look at that person's row on Published — that sighting closes rows 4.6 and 4.7.

Then, unchanged from 2026-09-18:

1. **SEED THE LIST.** The biggest single thing between the build and launch, and bigger than everything else combined. The live list carries 3 visible test people across 4 trades; launch needs **12–15 tradespeople across at least 6 trades**. It blocks rows 7.1 and 7.2. **[PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` is the step-by-step guide**, written for him rather than for a developer.
2. **WALK THE RUNBOOK** — [PATH] `docs/RESTORE-dunchi-trader.md`, row 6.1 at 9 effort, the largest row left. It was reconciled to the deployed state at `983525f` so the walk is not wasted on stale instructions, and it ends with a tick list usable on a phone beside a laptop.
3. **Delete the TWO non-villager rows from the Votes tab** — the 4.3 automated test row and his own ~17:47Z test vote. Both identified in the Outstanding Items table above.
4. **The remaining Google-side operator actions in Layer 4** — the form's dropdown/"Other" control, email collection, the star-rating question, the missing trades, and the 5.1 sheet formulas.

**Do NOT post the launch message yet.** It is drafted in `docs/PROCESS-seeding-and-launch-dunchi-trader.md` §4 under a heading marking it a draft awaiting approval, and it must not go to the village group until step 7 has passed — otherwise the village is sent to a list of test people.

---

# LAYER 2 — ARCHITECTURE

~~None recorded yet.~~ SUPERSEDED 2026-09-18 → recorded below.

**[BUG] 2026-09-18 — ~~OPEN, UNDIAGNOSED~~ DIAGNOSED 2026-09-19 BY MEASUREMENT — the site's own recommend button produced no row in the Votes tab after the endpoint was redeployed**

~~**This is the first thing the successor conversation diagnoses.** It is recorded open and undiagnosed on purpose: no cause has been established and none is guessed at here.~~ **DIAGNOSED 2026-09-19T11:10Z. The cause is recorded in full in the entry immediately below this one; the five candidates are each dispositioned at the end of this entry. It was none of them.**

What happened, REPORTED by the owner. He redeployed `apps-script/Code.gs` as a new version of the existing deployment, then followed the test in `apps-script/DEPLOY.md`: open the live site, tap **I recommend them too** on a card, type a short sentence, submit, then look at the Votes tab. **No row appeared.** His words: *"job 2 done. number 4 did not work."*

Impact: the site's own recommend panel is the only route by which a villager can add a recommendation to somebody **already listed** without filling in the whole form again. Recommendations arriving through the Google Form are unaffected and continue to publish themselves — this does not touch the directory itself, and nothing a villager sees is broken. It also fails in the way this project keeps producing: the page thanks the villager either way, because the cross-origin reply is opaque by design, so nobody would know.

**CANDIDATES TO TEST, not conclusions.** No evidence yet favours any of these over the others, and they are listed so a successor starts from a checklist rather than a hunch:

1. **Was the deployment EDITED rather than replaced?** `DEPLOY.md` step 11 requires *Deploy → Manage deployments → pencil icon → Version: New version*. Choosing **New deployment** instead issues a **different `/exec` URL**, and the site would carry on posting to the old one. Check the deployment's URL against `VOTES_ENDPOINT` in `app.js`.
2. **Was the new version actually published?** Saving the editor is not deploying. Check the deployment's version number went up.
3. **Does `doPost` appear in the Apps Script Executions log for that attempt?** If it does not, the request never arrived and the fault is the URL or the browser. If it does and failed, the fault is inside the script.
4. **Does `VOTES_ENDPOINT` in `app.js` still match the deployed URL?** Measured 2026-09-18 that the served `app.js` carries `…AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec`; compare that string against what Manage deployments shows now.
5. **Did the seven-character minimum land in the DEPLOYED copy?** `Code.gs` in the repository carries `MIN_TEXT = 7` as of `bb616a3`, but if an older copy is deployed it still requires fifteen, and a short test sentence would be rejected silently. Check the length of the sentence he typed against what the deployed file requires.

Also worth eliminating early, because it has bitten on this project before: **a stale page in the phone's memory**. A page loaded before the redeploy carries the old `app.js`. Re-test on a cache-busted URL (`?x=1`) before concluding anything — see the stale-page `[BUG]` recorded above.

Diagnosis: ~~the Apps Script **Executions** log is the first place to look, because it distinguishes "the request never arrived" from "the request arrived and failed", and those two have entirely different causes.~~ SUPERSEDED 2026-09-19 — a cheaper and more decisive test was found and is now the first thing to do: **open the `/exec` address in a browser.** See the entry below. The Executions log would in fact have shown nothing at all for these attempts, because the request never reached any function.

Fix applied: ~~**none.**~~ SUPERSEDED 2026-09-19 → the cause is measured and `apps-script/Code.gs` is rewritten at commit `f8e34ff`, but **the fix is not live**: the owner must redeploy, which is the only step that can put the corrected script behind the address. Build Plan rows 4.6 and 4.7 stay `new`.

---

#### THE FIVE CANDIDATES, EACH DISPOSITIONED — 2026-09-19

Recorded one by one, because the entry above promised a successor a checklist and a checklist half-answered is worse than none. **None of the five was the cause**, and the actual cause was not on the list.

| # | Candidate | Disposition |
|---|---|---|
| 1 | Was the deployment EDITED rather than replaced? | **CANNOT BE THE CAUSE, and is subsumed.** Had a *new deployment* been issued, the old `/exec` address would have kept serving the OLD working script, and the button would have carried on writing to Votes. It does not: the old address now answers *"Script function not found"*, which means the deployment at that address was edited and its content is wrong. The deployment was replaced in place, as instructed — with the wrong file behind it. |
| 2 | Was the new version actually published? | **CANNOT BE THE CAUSE, and is subsumed.** If nothing had been published, the address would still be running the previous, working `Code.gs`. Something *was* published; it simply did not contain `doPost`. |
| 3 | Does `doPost` appear in the Executions log for that attempt? | **OWNER-TESTABLE, and the expected result is now predicted rather than open.** Not visible from outside the Google account. **Expected: NO entry at all for those attempts** — not a failed one. Google rejects the request before any function runs, so there is nothing to log. If he finds a *failed* `doPost` entry instead, this diagnosis is wrong and must be reopened. |
| 4 | Does `VOTES_ENDPOINT` in `app.js` still match the deployed URL? | **TESTED AND CLEARED 2026-09-19.** The served page was fetched cache-busted from `https://dunchitrader-collab.github.io/app.js?x=1` — HTTP 200, 24,626 bytes, sha256 `c1358c09…1fb7b4c`, byte-identical to the committed file — and it carries `…AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec`, exactly the address recorded in Layer 1. The page is posting to the right place. |
| 5 | Did the seven-character minimum land in the DEPLOYED copy? | **TESTED AND CLEARED as the cause 2026-09-19.** It cannot be: a length check lives *inside* `doPost`, and `doPost` is never reached. Separately, the request shape was confirmed correct by running the served page's exact body through the committed parser — `{id, name, text}` parses, and the seven/six boundary behaves (7 accepted, 6 refused). **The underlying concern was real and is fixed anyway**: `MIN_TEXT` is 7 in `Code.gs` at `f8e34ff`, which is row 4.6. |

**Also on the list to eliminate early: a stale page in the phone's memory. CLEARED.** The served page was fetched cache-busted (`?x=1`) and is byte-identical to the commit, so even a fresh load posts to an address that answers "Script function not found". A stale page would not change the outcome.


**[BUG] 2026-09-19 — MEASURED — the deployment behind the votes endpoint is not running `Code.gs`: Google answers "Script function not found: doPost" to every request**

**This is the cause of the 2026-09-18 defect above, and it was not on the list of five candidates.**

Root cause: the `/exec` address the live site posts to is alive and reachable, but the Apps Script *deployment* behind it does not contain `Code.gs`'s entry points. Most likely the editor was showing a different file — `Publish.gs` was pasted three times that evening — when **Deploy → Manage deployments → New version** was taken, so the version that was published is one in which `doPost` and `doGet` do not exist. Nothing visible from the owner's side says so: the deployment exists, its version number went up, and the site's thank-you appears exactly as it always did.

**MEASURED 2026-09-19T11:10Z**, by sending real requests to the address recorded in Layer 1 and reading what came back. Not inferred:

| Request | Response |
|---|---|
| `GET …/exec` | HTTP 200, a Google error page reading **`Ohjelmatoimintoa ei löydy: doGet`** |
| `POST …/exec`, `text/plain`, JSON body — three times | HTTP 200, **`Ohjelmatoimintoa ei löydy: doPost`**, identically each time |
| `POST …/exec` with ordinary form parameters | **`Ohjelmatoimintoa ei löydy: doPost`** — so it is not the body shape |

`Ohjelmatoimintoa ei löydy` is Finnish for **"Script function not found"** (Google serves the error page in an arbitrary locale). Both entry points are missing, which is why a GET is as informative as a POST.

**One further detail worth recording, because it is itself evidence the deployment changed.** The 2026-09-18T17:02:32Z measurement in solution design §6.2 recorded the POST returning **HTTP 302** followed to a 200. It now returns **HTTP 200 directly, with no redirect.** A working Apps Script web app redirects to `script.googleusercontent.com`; an error page does not. The behaviour of the address changed when the owner redeployed, which corroborates the diagnosis independently of the error text.

**Why it went undiagnosed for a day, and this is the lesson rather than the bug.** Every signal the project had said the path was fine. The code was correct and committed. The URL was correct and served — measured byte-identical. The request shape was correct. The page's own reply is opaque **by design** (§6.2), so the browser could never have reported the failure. The only test that could find this was *sending a real request to the real address and reading the real reply*, and nothing in the project did that until this session. **A deployment is a thing that can be wrong independently of the code, and it needs its own test.**

Fix applied — in two halves, and **only the first half is done**:

1. `apps-script/Code.gs` rewritten at commit `f8e34ff`. `doGet` now returns one plain sentence, deliberately, so that *opening the address in a browser* is a ten-second test with two unmistakable outcomes. A `requirePublisher()` guard refuses to run and says why if `Publish.gs` is absent from the project, rather than failing obscurely mid-write.
2. **The owner must redeploy.** Nothing in this repository can put a script behind that address. `apps-script/DEPLOY.md` **step 14** carries the nine steps, including a check the previous instructions lacked: before deploying, press Ctrl+F in the editor and search for `doPost`, to prove the right file is open. That is the step whose absence caused this.

Diagnosis, and it is now the FIRST thing to try whenever the recommend button is in doubt: **open the `/exec` address in any browser.**

- **Working** — one plain sentence: *"This address only accepts recommendations sent by the Dunchideock village suppliers website."*
- **Broken** — a Google error page reading *"Script function not found: doGet"*.

It takes ten seconds, needs no Google login, and turns a silent failure into a visible one. The Apps Script Executions log is the *second* place to look, and note what it will show for this fault: **nothing at all** — no failed entry, because no function was ever entered.

**[BUG] 2026-09-18 — the repair destroyed the owner's helper formulas by writing straight through their columns**

Root cause: Published now has three kinds of column — `A`–`H` written by the script, **`I` and `J` owned by the owner's `ARRAYFORMULA` helpers**, and `K`–`L` written by the script. Five of the script's six writes crossed all twelve columns in one contiguous range:

| Where | Range | Crossed I and J? |
|---|---|---|
| `publishOne` — new row | `setValues` A..L | **yes** |
| `appendRecommendation` — words | `setValue` K only | no |
| `appendRecommendation` — name | `setValue` L only | no |
| `repairPublished` — move a stranded row | `setValues` A..L | **yes** |
| `repairPublished` — clear the old position | `clearContent` A..L | **yes, cleared them** |
| `cleanPublished` — write the tidied table | `setValues` A..L | **yes** |
| `cleanPublished` — clear the surplus rows | `clearContent` A..L | **yes, cleared them** |

Writing a value into a cell an `ARRAYFORMULA` produces **replaces the formula with that value**, so after the repair `I2` and `J2` held their last computed result as dead text. The declaration `PUB_COLS` already carried the comment *"the sheet-formula helpers, written by formulas, NEVER by this script"* — **the intent was recorded and the code contradicted it**, which is the kind of gap a comment cannot catch.

**Why it matters beyond tidiness, and why it is the same failure class this project keeps producing:** the `verdict` formula on the Form responses tab looks up Published `I` and `J` to decide `ALREADY ON SITE` and `SAME NAME, DIFFERENT NUMBER`. With those columns dead, **every future submission reads as `NEW`, even for somebody already listed** — and nothing anywhere would say so. The owner found it by eye, on one row, by noticing the new row had published "but not column I or J".

Fix applied: `apps-script/Publish.gs` at `8dbf9b2`. **`FORMULA_COLS` declares the columns the script must never touch**, and `writableBlocks()` derives the contiguous writable spans from it — `A`–`H` and `K`–`L`. Every write now goes through `writeRowBlocks`, `writeRangeBlocks` or `clearRowsBlocks`. Adding another formula column later means adding one index to `FORMULA_COLS` and nothing else.

**The limit, stated in the file rather than left implicit:** if the owner puts a formula in a column `FORMULA_COLS` does not name, the script will still overwrite it. It cannot detect one, because the Sheets API returns a formula's **result** when reading values — a formula and a typed value are indistinguishable on a read. `checkSetup` therefore reports the health of the columns it knows about, and `FORMULA_COLS` is the place to record any new one.

**Proven, not asserted.** A stub was built whose `I` and `J` hold formula *objects*, so any write to them is detectable, with a damaged phone number to force the repair's write path. After a publish, after a duplicate append and after a full repair, both formulas are intact. **The same test run against the previous commit `141330b` shows both destroyed and replaced by their last computed values** — exactly what the owner saw — so the test detects the defect rather than merely passing.

Diagnosis: **Village list → Check the setup** now reports whether `I2` and `J2` hold a formula at all, and if they do, whether they are producing a value for every row that has a phone. If they are missing it names the fix: *"open apps-script/SHEET-FORMULAS.md, step 2, and paste the two formulas back into Published I2 and J2"*.

**[BUG] 2026-09-18 — the repair mapped `trade` but not `extra_trade`, so a second trade could still make a stray tile**

Root cause: `cleanPublished` normalised the `trade` column only. A person with two trades appears under both headings, so an unmapped `extra_trade` makes a tile of its own just as readily.

**Measured on the owner's real live feed 2026-09-18**, which is how it was found: the site rendered seven tiles and one of them was **`Heating`** — not on the agreed list — sitting alongside the correct `Boiler & heating`. It came from `T002`'s `extra_trade`, which the repair had left untouched while correctly mapping that row's `trade`.

Fix applied: the same commit's follow-up — the clean-up loop now maps **both** trade columns, and `checkSetup` reports an unrecognised second trade as well, labelled *"second trade"* so he can tell which column to look in. Verified in the stub: `T002`'s `extra_trade` `Heating` becomes `Boiler & heating`.

Diagnosis: **Village list → Check the setup** lists any trade, in either column, that is not on the agreed list.


**[BUG] 2026-09-18 — LAUNCH-CRITICAL: Google ate the leading zero off telephone numbers, so the Call button misdialled**

Root cause: `appendRow` wrote the phone as a bare value, and Google Sheets reads `07887988959` as a **number**. Numbers do not carry a leading zero, so it stored `7887988959`. The site builds its `tel:` link straight from that column.

**Why this is the most damaging fault on the list, and why it is marked launch-critical:** the entire product is *"tap a trade, tap a large green Call button"*, for an audience that is elderly and on a phone. A wrong number does not look wrong. There is no error, no warning, and nothing on screen to question — an elderly villager taps Call, reaches a stranger, and has no way of knowing the list was at fault rather than themselves. It would have destroyed trust in the whole directory on first use, and it would have done so silently.

Measured in the owner's own sheet 2026-09-18: **six of eight numbers had lost their zero.** The two that survived were the only two containing a space — `07999 222333` and `07999 444555` — which Sheets could not parse as numbers. In the screenshot the damaged ones are right-aligned, which is the visible tell.

**Demonstrated on the SERVED page rather than asserted.** With a damaged value the Call button renders `tel:7887988959`; with the repaired value it renders `tel:07887988959`, and a spaced number correctly strips to `tel:07999222333`.

Fix applied: `apps-script/Publish.gs` at `bb616a3`. **`phoneText()` prefixes an apostrophe so Sheets stores the value as text** — invisible to the reader, not part of what the site reads, and it makes the fault impossible to recur. For rows already damaged, `cleanPublished()` **re-derives the number from the responses tab**, where the villager's original text survives untouched, and only falls back to a rule when that fails.

**The reconstruction rule, and what it refuses.** Exactly ten digits gets a leading zero restored — every UK landline and mobile is eleven digits nationally and all begin `0`, so a ten-digit value is unambiguous. **Anything else is REFUSED and reported for the owner to retype**, because a confidently wrong phone number is worse than an obviously missing one. **The honest case:** `78853335434` is eleven digits and looks repairable, but it is the known-bad twelve-digit `078853335434` with its zero eaten — restoring the zero would produce a number that is still wrong. It is refused, reported, and its row stays `hidden`, which it was already by coincidence rather than design.

Diagnosis: **Village list → Check the setup** now lists every number that is not eleven digits starting zero, by id. In the sheet, a right-aligned phone cell is a damaged one.

**[BUG] 2026-09-18 — six people listed twice, because the duplicate scan never reached the rows**

Root cause: the same blindness recorded in the stranded-rows bug above — the scan read `getDataRange()`, which stopped short of the rows sitting at 1001 and beyond, so every resubmission looked new. The 2026-09-18 fix stops it recurring; it does not clean up what is already there.

Fix applied: `repairPublished()` now removes duplicates. It keeps the **lowest id** for each person, **merges the higher row's recommendation text and recommender name into the kept row** rather than discarding them, and **retires the removed id — never reused**, because a villager's recommendation is filed against it and the next holder would inherit somebody else's reputation. Where two rows disagree on trade or status it keeps the earlier row's values and **reports the difference rather than silently picking one**.

**The subtlety that nearly lost a tradesperson, caught in the stub against his own fourteen rows:** keying duplicates on the phone number alone would have deleted a real person. His sheet has **Ben Franks the electrician and John Pilkington the car mechanic on 07887800192** — a shared household or business line. The key is therefore **phone plus name**; two different people on one number are both kept and the sharing is reported.

Diagnosis: **Village list → Check the setup** reports the duplicate count before anything is changed.

**[BUG] 2026-09-18 — trade names did not match the tiles the site builds**

Root cause: the publisher title-cased whatever arrived instead of mapping it onto the agreed list, so `Gas Engineer` and `Car Mechanic` reached Published while the owner's tile names are `Boiler & heating` and `Car mechanic`. Since the site builds tiles from the text in that column, each would have made a tile of its own with one person under it — findable only by somebody who happened to scroll to it.

Fix applied: **`TRADES` and `TRADE_ALIASES` near the top of `apps-script/Publish.gs` are now the single place trade names are decided**, deliberately positioned and commented so a human edits them there when the form changes. `Gas Engineer` and `Oil Boiler Technician` → `Boiler & heating`; `Car Mechanic` → `Car mechanic`; `General Builder` → `Builder`; `Window repair / Fitting` → `Windows & doors`; plus the older wordings from earlier versions of the form. Applied both on the way in and by the repair.

**What it deliberately does NOT do:** free text from the form's *Other* option passes through **trimmed and otherwise unchanged**, with no capitalisation forced and no guess made. Guessing is worse than passing through — "boiler" might mean a service or a replacement, and mapping it on a hunch files somebody under a heading they never chose. The site groups tiles case-insensitively, so an unmapped value cannot split an existing tile.

Diagnosis: **Village list → Check the setup** lists any trade not on the agreed list.


**[BUG] 2026-09-18 — the publisher wrote its rows a thousand lines below the table, and every run reported success**

Root cause: **a helper formula covering a whole column makes the sheet look full to a script.** The owner's duplicate-check helpers in Published `I2` and `J2` are `ARRAYFORMULA` over open-ended ranges, so they return an **empty string** for every row down to the bottom of the sheet. An empty string *returned by a formula* is still content as far as Google is concerned: `getLastRow()` counts it, `getDataRange()` spans it, and `appendRow()` writes **after** it. The publisher used `appendRow`, so "the end of the list" was row 1001 rather than row 5.

**In the owner's terms, which is the point of this entry: the script completed, the log was clean, and the data was invisible.** His Apps Script Executions log showed `onFormSubmitPublish` Completed at 20:51:27 and again at 20:55:23, and `backfillPublished` Completed twice. Nothing failed. Nothing warned. The rows were in Published, correct in every cell, about a thousand lines below anything he could see — which from his chair is indistinguishable from nothing having happened. **A silent success is harder to spot than a failure**, because every signal available said it had worked.

It also explains the 31-second backfill, which was the tell: `getDataRange()` returned ~1000 rows to read 8, so the duplicate scan and the highest-id scan were iterating a thousand blank rows per submission.

**REPRODUCED before anything was changed**, in a stub whose Published sheet mimics the real one — eight real data rows, helper columns returning empty strings to row 1000. The new row landed on **row 1001**, 992 rows below the data. After the fix, **row 10**. Successive submissions stranded at 1001, 1002 and so on, each further out. Ids remained correct throughout (`T009`), which is what made recovery possible: identity survived, only position was wrong.

Fix applied: `apps-script/Publish.gs` at `e5a82da`. **The publisher never asks the sheet how tall it is.** `lastIdRow()` reads column A only and returns the last row carrying a real id; `tableValues()` reads exactly that rectangle instead of `getDataRange()`; and the write is an explicit `setValues()` to a computed range, never `appendRow`. The same reasoning was applied to the duplicate scan and the highest-id scan, which shared the fault.

A recovery was added for rows already stranded: **Village list → Repair the list**. It moves them back into the table **keeping every id exactly as it is**, is safe to run when there is nothing to fix, and refuses rather than guesses if it meets a duplicate id or a row with details but no id. `checkSetup` was rewritten to report, in plain English, how many people are on the list, the last id in use, whether anything is stranded and on which row, and whether the trigger is installed.

Diagnosis: **Village list → Check the setup**. If it says anything is stranded, run the repair. More generally — *a script that finishes without complaining is not evidence that it did anything*. Where a script writes to a sheet the owner cannot easily eyeball, it needs a report he can read, and this one now has one.

Related trap for any future session: **never use `appendRow` or `getLastRow` on a tab carrying open-ended `ARRAYFORMULA` helpers.** The site's Published tab has them at `I` and `J` and will keep them.


### Flow Diagram

```
  VILLAGER (recommending someone new)
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

### Tech Stack

| Layer | Choice |
|---|---|
| Hosting | GitHub Pages |
| Markup | Plain HTML5 |
| Styling | Plain CSS with custom properties |
| Behaviour | Plain JavaScript, no framework |
| Typeface | Atkinson Hyperlegible, Verdana/Arial fallback |
| Data store | Google Sheets |
| Data transport | Published CSV over HTTPS |
| Write endpoint | Google Apps Script web app |
| Client persistence | `localStorage` — chosen text size only |

**There is no build step.** No bundler, no transpiler, no `npm install`, no framework requiring compilation. See Layer 5 decision 14.

### Key Scripts and Files

~~Planned. None written yet as of 2026-09-18.~~ SUPERSEDED 2026-09-18T14:13:45Z → the scaffold exists, committed at `c1a4f78`. Files marked *placeholder* are deliberate stubs, not the real thing.

| File | Description | State |
|---|---|---|
| `index.html` | The whole page | ~~Placeholder~~ SUPERSEDED → **ported from the wireframe**, 1,845B [VERIFIED 2026-09-18T14:39:30Z — `d10ae18`] |
| `style.css` | All styling | ~~Placeholder~~ SUPERSEDED → **ported from the wireframe**, 10,988B. Only `.demo` dropped; `.notice` and `.loading` added for the message states [VERIFIED 2026-09-18T14:39:30Z — `d10ae18`] |
| `app.js` | CSV fetch, parse, render, search, autocomplete, vote posting | ~~Placeholder stub~~ SUPERSEDED → **live feed read, trade grid, search, autocomplete and the three message states**, 14,060B. Vote posting is still to come at row 4.1 [VERIFIED 2026-09-18T14:39:30Z — `d10ae18`] |
| `.nojekyll` | Disables Jekyll so Pages serves committed files untouched. Empty file; **do not delete** | [VERIFIED 2026-09-18 — `c1a4f78`] |
| `design/wireframe-dunchi-trader.html` | **LAYOUT AUTHORITY.** The reviewed wireframe, landed verbatim | [VERIFIED 2026-09-18 — `c1a4f78`] |
| `README.md` | For a non-technical inheritor | Partial — carries the push procedure and the no-build-step rule. Full version is Build Plan row 6.1. [VERIFIED 2026-09-18] |
| Apps Script source | Committed to the repo as well as deployed, per decision 14 | Not written — Build Plan row 4.2 |
| ~~`docs/RESTORE-dunchi-trader.md`~~ | ~~Full rebuild runbook~~ | ~~Not written — Build Plan row 6.1~~ SUPERSEDED 2026-09-18T17:40Z → see the row below; it was written 2026-09-18T15:06Z and reconciled to the deployed state at `983525f` |
| `docs/SOLUTION-DESIGN-dunchi-trader.md` | Architecture and rationale | [VERIFIED 2026-09-18] |
| `docs/BUILD-PLAN-dunchi-trader.md` | `PLAN-DUNCHI-TRADER-V1` | [VERIFIED 2026-09-18] |
| `docs/RESTORE-dunchi-trader.md` | Full rebuild runbook, Form → Sheet → tabs → publishing → repository → Pages → Apps Script → formulas, each step with an expected result the walker can see with the two logins alone, plus a walk-through tick list | [VERIFIED 2026-09-18T17:40Z] — reconciled to the deployed state at `983525f`; **the walk itself is still outstanding** (Build Plan row 6.1) |
| `docs/PROCESS-seeding-and-launch-dunchi-trader.md` | **How the owner fills the list and launches it.** The eight columns, ids starting at `T005` and never reused, `status` must be exactly `active`, `extra_trade` for two-trade people, removing the four test rows, the trade vocabulary, the five-minute lag and the two publishing warnings, and the draft launch message. Written for a non-technical reader. | [VERIFIED 2026-09-18T17:26Z] — created this session; linked from `README.md`. Prefix `PROCESS-` confirmed ACTIVE via `get_active_prefixes` at 2026-09-18T17:25:49Z |

**Two deliberate anti-patterns in `design/wireframe-dunchi-trader.html` that must survive the port.** Both are fixes for defects found by eye, and a tidy-up would silently undo them:

- **The `.sizer` strip is sized in fixed `px`** while everything else is in `rem`. Without this the text-size buttons grow as they are pressed.
- **The header is NOT sticky.** With `position: sticky` it filled the whole phone screen at the largest text size.

The `<section class="demo">` block and the `RAW` / `CLEAN` arrays in that file are wireframe scaffolding. They stay there as the reference, and Build Plan row 3.1 drops them when porting.

### External Service Integrations

| Integration | Direction | Auth |
|---|---|---|
| Google Form → Sheet | Inbound | Google-internal |
| Published CSV → page | Inbound, read-only | None — public URL |
| Page → Apps Script → Votes tab | Outbound, append-only | None by design |

### Non-obvious System Behaviour

- **Visibility differs by path.** A new tradesperson appears only after the owner moves the row to Published. A vote on an existing tradesperson appears immediately, because it attaches to someone already approved.
- **The phone number is the identity for de-duplication, not the name.** Names are misspelt constantly; numbers almost never are.
- **The vote posts a trader id, not a name.** Names change; ids do not.
- **One person can hold two trades** via `extra_trade`, appearing under both without a duplicate row.
- **Trades with nobody in them do not appear at all.**
- **Authority precedence for the front end:** the accessibility rules in the solution design are the LOGIC authority; the wireframe is the LAYOUT authority. Where they disagree, the logic authority wins and the wireframe is corrected.

---

# LAYER 3 — KNOWN ISSUES AND GOTCHAS

~~None recorded yet.~~ SUPERSEDED 2026-09-18 → recorded below.

**[BUG] 2026-09-18 — trade headings are grouped case-SENSITIVELY, so `Plumber` and `plumber` become two separate headings**

Root cause: the site has no fixed trade vocabulary — headings are built from whatever text sits in the Published tab's `trade` and `extra_trade` columns. `app.js` line 139 trims every cell (`function cell(name){ return (r[index[name]] || "").trim(); }`) and line 141 lower-cases `status` before comparing it, **but nothing lower-cases the trade**, so the grouping key is the trimmed string with its original capitalisation intact.

**MEASURED 2026-09-18T18:29Z** by driving the LIVE site in a real browser at 320px with a feed fixture substituted at the network layer — the owner's sheet was never touched:

| Two rows carrying… | Headings rendered | What they read |
|---|---|---|
| `Plumber` and `plumber` | **TWO** | `Plumber` (1 person), `plumber` (1 person) |
| `Plumber` and `Plumber ` (trailing space) | **ONE** | `Plumber` (2 people) |
| `Plumber` and ` Plumber` (leading space) | **ONE** | `Plumber` (2 people) |
| all four spellings together | **TWO** | `Plumber` (3 people), `plumber` (1 person) |

So **whitespace is forgiven and capitalisation is not.** The trailing- and leading-space cases are safe because of the `.trim()`; the case difference is not, and it is the more likely mistake when somebody types a trade by hand.

Impact, and it is quiet rather than loud: a villager tapping `Plumber` sees only the people filed under that exact spelling. Somebody typed in as `plumber` sits under a second heading further down the list with one person under it, and is invisible to anyone who taps the first. Nothing errors and nothing looks broken. The form's own dropdown protects the responses tab, but **the owner retypes the trade when he copies a row across to Published, and that retyping is unprotected** — which is exactly where the mistake would enter.

Fix applied: **none.** This is a behaviour change to a closed row and is the owner's ruling to make; it is recorded as a recommendation in Layer 5 rather than implemented. The cheap mitigation, already in place, is that `docs/PROCESS-seeding-and-launch-dunchi-trader.md` tells him to copy and paste trade names from its list rather than retyping them.

Diagnosis: if somebody is missing from the site under the trade you expect, scroll the whole trade list before suspecting anything else — look for a second heading differing only in capitalisation. Then correct the spelling in the Published tab; it takes effect within the five-minute republish lag.

**[BUG] 2026-09-18 — the committed sheet formulas were written against a GUESSED responses-tab layout and recorded as tested against the real one**

Root cause: `apps-script/SHEET-FORMULAS.md` was authored on 2026-09-18T15:06Z without access to the real Form responses tab, which is not published and cannot be read from outside the Google account. An assumed column layout was used, and — this is the damaging part — **Build Plan row 5.1 recorded the formulas as written "against the real responses-tab columns A–J"**, which was never true and could not have been known. The 12 logic tests that passed were run against the same assumption, so they confirmed self-consistency rather than correctness.

The real layout, REPORTED by the owner 2026-09-18T18:13Z by pasting his own header row and three data rows:

| | Real column | Old formula assumed |
|---|---|---|
| Telephone | **F** | E |
| First name | **D** | D (correct) |
| Last name | **E** | J |
| Business | **G** | J |
| Experience text | **H** | G |
| Trade | **C** | not used |
| First free column | **J** | K |

Every one of the four the formulas depend on was wrong. **Impact: pasting the committed formulas would have put nonsense in every row of the tab** — `phone_key` built from the last name, `name_key` from the first name plus an empty column, and the experience-length test measuring the business name. Nothing would have errored visibly; it would simply have produced confident, wrong verdicts.

Three further defects were found while rewriting, none of which the layout mismatch would have revealed:

1. **The verdict formula nested `ARRAYFORMULA` inside `COUNTIF`**, which Google Sheets does not accept — `COUNTIF` needs a real range, not a computed array. It would have errored on paste regardless of the columns. Fixed by putting the two comparison keys in helper columns on the Published tab (`I` and `J`) and pointing `COUNTIF` at those ranges. Verified safe: `app.js` maps the Published tab by header **name** (`header.indexOf`) and reads only its eight known columns, so extra columns are ignored entirely.
2. **`0044` was not normalised.** `0044 7887 988959` produced `00447887988959` instead of `07887988959`, so the same number written that way would read as a different person. Fixed by stripping a leading `0044` before the `44` case. All five UK forms now collapse to one key, verified by simulation.
3. **`MATCH` was unguarded** and would surface `#N/A` in the verdict text on a near-miss. Now wrapped in `IFERROR`.

Fix applied: `apps-script/SHEET-FORMULAS.md` rewritten at `bd3f42a` against the real layout, target cells moved to `J2`/`K2`/`L2` on Form responses with helper columns at `I2`/`J2` on Published, re-simulated against the owner's three real rows plus nine constructed ones covering every verdict, both `CHECK THIS` triggers, the precedence case, a blank row and the `+44` form. **It has still not run in Google Sheets** — that is row 5.1's closing condition and remains the owner's.

Diagnosis, and the lesson worth carrying: **before trusting any formula that addresses cells by letter, read row 1 of the actual sheet.** The rewritten document now opens with exactly that check and tells the reader what to do if their layout differs — the step whose absence caused this. More generally, a document written against an unreadable system should say which parts are assumed; this one asserted them as measured, and the assertion survived three sessions unchallenged.

**[BUG] 2026-09-18 — a page already open on a phone keeps running the OLD `app.js`, so a villager can get a thank-you for a vote that was never sent**

Root cause: the site is static and has no version signal. A browser that already holds the page carries on running the copy it has. If that copy predates a change, the villager is using yesterday's code while the live site serves today's — and because the recommendation panel shows its thank-you optimistically (see the opaque-response bug below), a stale `app.js` whose `VOTES_ENDPOINT` is still `""` **sends nothing and thanks them anyway**. `sendRecommendation()` returns `false` immediately and the thank-you is shown regardless.

The timeline that surfaced it, separating what is measured from what is not:

| Time (UTC) | Event | Status |
|---|---|---|
| ~16:50 | Owner loads the live site on his phone for the row 2.1/3.3 sighting | REPORTED by the owner |
| 16:59:59 | `4d67c15` commits the endpoint into `app.js` | **MEASURED** — commit timestamp |
| ~17:01 | The live site first serves an `app.js` carrying the endpoint; sha256 byte-identical to the committed file | **MEASURED** — cache-busted fetch |
| ~17:02:32 | A server-driven browser vote from the Pages origin posts successfully (302 → 200) | **MEASURED** — row 4.3 |
| ~17:25 | Owner's FIRST phone vote: the page thanked him, **no row appeared** in the Votes tab | REPORTED by the owner |
| ~17:47 | Owner retries on a **cache-busted URL**; the row appears. Verbatim: *"the vote populated"* | REPORTED by the owner |

**The explanation is REPORTED, not measured, and nobody instrumented his phone.** The working account is that his phone was still running the `app.js` it loaded at ~16:50, before the endpoint went live at ~17:01, so the page skipped the send and showed its thank-you anyway. That is consistent with every fact above and with the code, and the cache-busted retry succeeding is strong circumstantial support — but it remains an inference about a device nobody observed.

One measured fact **narrows** that explanation, and it is recorded because the explanation would otherwise be stated too confidently: GitHub Pages serves both `index.html` and `app.js` with **`cache-control: max-age=600`** (measured 2026-09-18T17:48Z, alongside `etag` and `last-modified`). A ten-minute freshness window does **not** by itself explain a stale page ~35 minutes after loading. The likelier mechanism is therefore that the **already-loaded page stayed alive in the phone's memory** — an open tab, or a back-forward-cache restore — and simply never re-fetched anything, rather than HTTP caching holding a stale file past its expiry. Both routes produce the identical symptom, and neither was measured on his device.

Impact, and it is narrower than it first appears: **this bites people who already had the page open just before a change, not people arriving fresh.** A villager opening the link for the first time after a deploy gets the current code. The exposure is a window around each deploy, affecting only those holding an older copy — and for a site that changes rarely once launched, that window is small and closes on its own as people reload. It cost one confusing retry here and could have cost a wrong diagnosis: the natural first suspicion was that the endpoint or the Apps Script was broken, when both were provably working at the time.

Fix applied: **none, deliberately.** See the assessment below.

Diagnosis: if a vote does not reach the Votes tab, before suspecting the endpoint, **reload the page with a cache-busting query string** (`?x=1`, any value) and try again. If the cache-busted attempt works, the original page was stale and nothing is broken. Confirm the endpoint independently by fetching `app.js` from the live site cache-busted and checking `VOTES_ENDPOINT` is non-empty — if it is set on the server, the server side is fine.

**Assessment — does this warrant a change to the site? [ASSESSED 2026-09-18. A recommendation for the owner to rule on; no site behaviour was changed in recording it.]**

**Judgement: this is inherent to a no-build-step static site, and it is worth knowing rather than fixing.** It should not change the site. Three reasons:

1. **It is a deploy-window problem on a site that will stop being deployed.** Once the list is seeded and launched, `app.js` changes rarely or never. The failure needs a code change and a villager mid-visit at the same moment — a shrinking coincidence, not a standing defect.
2. **Every fix costs more than the problem.** A cache-busting version string on the `<script>` tag would have to be edited by hand on every change — precisely the kind of step-you-must-remember that the no-build-step rule (decision 14) exists to forbid, and forgetting it fails silently. A service worker or a version-check fetch adds machinery a non-technical inheritor cannot reason about, to a codebase whose entire value is that they can.
3. **The blast radius is one lost recommendation, recoverable by asking again.** Nothing is corrupted and no listing is affected; the villager's words are simply not saved that once.

**If the owner disagrees and wants it addressed**, the cheapest honest option is not a technical one: after any future change to `app.js`, reload once with `?x=1` before testing — already recorded as the diagnosis step above. **A change to site behaviour is his call, not the build's, and this entry does not make it.**

**The three "something is wrong" messages, and exactly what each one means — MEASURED 2026-09-18T17:38Z**

Not a bug; a reference that prevents misdiagnosis, and it corrected a wrong expected result in the rebuild runbook. The page never shows a blank screen, so **the message IS the diagnostic**, and the three are easy to confuse. Measured by driving the LIVE site in a real browser with the feed intercepted and replaced, one condition at a time, plus a control:

| Feed condition | Message shown | What it actually means |
|---|---|---|
| One or more rows with `status` `active` | *(the list renders)* | Working. |
| **Header row only, nobody active** | **"Nobody on the list just yet"** | **The feed was reached and parsed correctly.** The address and tab are right; the list is simply empty. |
| Wrong tab, or headers not the agreed eight | **"The list is being updated"** | The address answers, but what comes back is not a valid list — usually the `gid=` points at the wrong tab. |
| Unreachable, or HTTP 404 | **"The list will not load at the moment"** | The address could not be fetched at all. |

Control case: a single active row rendered normally, confirming the harness served the intercepted feed rather than breaking it. An earlier run of the same harness returned the unreachable message for all three conditions — that was a broken-interception artefact, not a finding, and it is recorded here because it would look like a real result to the next person who tries it.

Why it matters: *"Nobody on the list just yet"* is the **success** state when a rebuild first points at a fresh sheet, and mistaking it for a failure would send a walker back to re-do working steps. `docs/RESTORE-dunchi-trader.md` steps 5 and 6 were corrected against this measurement — step 5 had claimed the pre-feed state shows *"The list is being updated"*, which is only one of two possible messages and not the likelier one.

Diagnosis: read the message before touching anything. Code reference `app.js` lines 559–566: an unparseable or empty CSV and a `build()` returning `null` both set `badfeed`; a successful parse with zero people sets `empty`; a thrown fetch sets `unreachable`.

**[BUG] 2026-09-18 — the votes `fetch` RESOLVES on failure; `catch` will never fire and `ok`/`status` carry no information**
Root cause: the votes POST is sent with `mode: 'no-cors'`, which makes the browser return an **opaque** response. Measured 2026-09-18T17:02:32Z from the live Pages origin in a real browser: the promise **resolves** — it does not throw and does not reject — with `Response.type: "opaque"`, `status: 0`, `ok: false`, `redirected: false`, `url: ""` and **zero readable headers**. Those values are returned *whether or not the append succeeded*, so they are not a signal. The `try/catch` in `sendRecommendation()` is therefore dead code for network failures: it can only catch a synchronous throw, which does not occur here.
Impact: **the page cannot ever tell a villager whether their recommendation was saved**, and any future attempt to add error handling by branching on `ok`, `status` or a `.catch()` will silently do nothing — it will report success on a total failure. This is why the thank-you is optimistic by design, and the optimism is now a measured necessity rather than a guess. The only proof a vote landed is the Votes tab itself.
Fix applied: none required — the design is correct. The mistaken *reason* in the solution design was corrected: §6.2 previously said Apps Script "does not reliably return CORS headers", but it **does** return `access-control-allow-origin: *` on the 302. The reply is unreadable because `no-cors` discards it, not because the header is missing. `docs/SOLUTION-DESIGN-dunchi-trader.md` §6.2 rewritten with the measurement and the superseded inference preserved; risk-register row 7 closed.
Diagnosis: in a browser at the Pages origin, `fetch(VOTES_ENDPOINT, {method:'POST', mode:'no-cors', ...}).then(r => console.log(r.type, r.status, r.ok))` → `opaque 0 false`. At the network layer the same request shows `302` → followed `GET` → `200` → `net::ERR_ABORTED`; **that abort is the normal, successful ending**, not a fault.

**[BUG] 2026-09-18 — `GITHUB_TOKEN` in the environment silently overrides the git credential helper and breaks the push to `origin`**
Root cause: this environment exports `GITHUB_TOKEN`, a **fine-grained** PAT belonging to `gsamwell-personal`. `gh auth git-credential` prefers that env var over the stored `gsamwell-lang` classic token regardless of which account `gh auth switch` has made active, so `git push origin master` was refused with `remote: Write access to repository not granted.` / HTTP 403 — against `gsamwell-lang/dunchi-trader`, a repo the session plainly could push to. Measured this session: the identical push succeeded immediately when run as `GITHUB_TOKEN= git push origin master`.
Impact: a session can conclude it has lost access to its own development remote, or misread this as the *collab* permission problem recorded below, which it is not. The two failures look alike and have different causes.
Fix applied: none committed — this is environment behaviour, not repo state. Prefix the push: `GITHUB_TOKEN= git push origin master`. Note `gh auth switch` alone is **not** sufficient; the env var wins.
Diagnosis: `gh auth status` showing `Logged in to github.com account gsamwell-personal (GITHUB_TOKEN)` with `Active account: true` while a different account is the one you intend. If a push 403s against a repo you own, re-run it as `GITHUB_TOKEN= git push …` before investigating anything else.

**[BUG] 2026-09-18 — the site requests `/favicon.ico` and gets a 404 on every page load**
Root cause: no `favicon.ico` exists in the repository and `index.html` declares no icon link, so the browser makes its default request and GitHub Pages answers 404. Measured 2026-09-18T17:03Z on a plain load of the live site with no vote placed: exactly one failed request, `https://dunchitrader-collab.github.io/favicon.ico` → 404.
Impact: cosmetic only — nothing on the page is affected and no villager will see it. It is recorded because **it puts a red error line in the browser console on every load**, and a future session debugging the votes POST will see that 404 and may waste time attributing it to the vote. It is not the vote: the votes POST returns 302→200.
Fix applied: ~~none — out of scope for this session's tasks. Recorded in Layer 4 as a LOW outstanding item.~~ SUPERSEDED 2026-09-18T17:25Z → **FIXED at commit `99b66de`** in `index.html`, immediately after the `<title>`: a `<link rel="icon">` carrying an inline SVG data URI (527 bytes, a white telephone handset on a `#0A4F2E` circle — the Call button's own green, `--go`). A data URI was chosen over committing a `favicon.ico` because it adds no binary to a repository that must stay readable by a non-technical inheritor, costs no extra request, and needs no build step, which the project prohibits outright (decision 14).
Diagnosis: ~~load the site with the console open; a single 404 for `favicon.ico` and no other failed request is the expected, harmless state.~~ SUPERSEDED 2026-09-18T17:25Z → load the site with the console open: **zero failed requests and zero console errors is now the expected state.** Any 404 at all is a regression. Measured in a real browser on the live site, plain page load with no vote placed: **before the fix, 1 failed request (`/favicon.ico` → 404) and 1 console error; after, 0 and 0.** The icon was also verified to decode and paint (`naturalWidth` 150), not merely to be declared — a `rel="icon"` pointing at a malformed data URI would still silence the 404 while rendering nothing.

**[BUG] 2026-09-18 — Published CSV serves the wrong tab**
Root cause: the published CSV URL recorded for this project is publishing the **Form responses** tab, not the curated **Published** tab. Measured this session: the first line of the fetched CSV is the form's question text — `Timestamp,Email Address,What Trade are you recommending?,...` — not the agreed `id, first_name, last_name, business, phone, trade, extra_trade, status`.
Impact: if the site were built against this URL today it would read raw, unreviewed form submissions, including villagers' email addresses, and the manual approval gate would be bypassed entirely.
Fix applied: none — this is a Google-side setting only the account owner can change. Recorded as the CRITICAL outstanding item in Layer 1 and Layer 4, and as a blocked precondition on Build Plan sub-task 2.1.
Diagnosis: `curl -s -L "<published csv url>" | head -1` and confirm the header is the eight-column Published schema.

**[BUG] 2026-09-18 — Form collects email addresses**
Root cause: "Collect email addresses" is switched on and required in the form settings. Confirmed this session by the presence of an `Email Address` column in the published CSV header.
Impact: contradicts the owner's decision not to collect email, and may force a Google sign-in that stops elderly villagers at the door — the exact failure this product cannot afford.
Fix applied: none — operator action. Settings → Responses → Collect email addresses → Off.
Diagnosis: check for an `Email Address` column in the CSV header.

**[BUG] 2026-09-18 — Form carries a star-rating question**
Root cause: the form includes "Please give them a star rating out of 5". Confirmed this session in the published CSV header.
Impact: directly contradicts decision 3. With two or three recommendations each, an average is meaningless, and one grumpy neighbour costs a real person real work.
Fix applied: none — operator action. Remove the question from the form.
Diagnosis: check for a star-rating column in the CSV header.

**[BUG] 2026-09-18 — Form question 1 is a dropdown with a fake "Other"**
Root cause: question 1 is a **dropdown** with "Other" typed in as an ordinary option. A dropdown cannot have a working "Other" — the villager selects the word and gets no text box to type in.
Impact: a villager recommending a trade not on the list has no way to say which trade.
Fix applied: none — operator action. Change to **Multiple Choice** with the real Add "Other" control.
Diagnosis: open the live form and select "Other"; if no text box appears, the fault is present.

**[BUG] 2026-09-18 — Text-size control bugs found and fixed during design**
These were found during wireframe review and are recorded as permanent constraints, not as open bugs.
Root cause 1: the header was `position: sticky` and scaled with the text, so at the largest size it filled the entire phone screen.
Fix applied: **THE HEADER MUST NOT BE STICKY.** ~~Enforced by Build Plan sub-task 3.8.~~ SUPERSEDED 2026-09-18T14:02:20Z → recorded as a binding rule in solution design §9.9 and checked by Build Plan sub-task 3.3's done-when. (The plan rewrite of decision 18 removed the standalone guard row; the rule itself is unchanged.)
Root cause 2: the size buttons were themselves sized in `rem`, so they grew as they were pressed and ran away from the user's finger.
Fix applied: **THAT STRIP MUST BE SIZED IN FIXED PIXELS.** ~~Enforced by Build Plan sub-task 3.9.~~ SUPERSEDED 2026-09-18T14:02:20Z → recorded as a binding rule in solution design §9.9 and checked by Build Plan sub-task 3.3's done-when. (The plan rewrite of decision 18 removed the standalone guard row; the rule itself is unchanged.)
Diagnosis: set the largest text size on a narrow phone; the header must scroll away and the buttons must not change size.

**[BUG] 2026-09-18 — No push credential for the live repository**
Root cause: the build session has credentials for `gsamwell-lang` and `gsamwell-personal`. Neither has write access to `dunchitrader-collab/dunchitrader-collab.github.io`. Measured 2026-09-18T14:13:45Z: the GitHub API reports `"permissions": {"push": false, "pull": true}` for both, and `git push --dry-run collab master:main` returns `403 Permission to dunchitrader-collab/dunchitrader-collab.github.io.git denied to gsamwell-personal`.
Impact: **nothing can reach the live site.** Because a change is only built when it is visible at the URL Gavin opens, this blocks every build plan row, not just rows 1.1 and 1.2. Work can still be written and pushed to `origin`, but it cannot be verified where it must be.
Fix applied: **RESOLVED 2026-09-18T14:26:12Z.** Gavin added `gsamwell-personal` as a collaborator with Write access, and the invitation was accepted. The push then succeeded using the **`gsamwell-lang`** credential — see the sub-entry below, because the obvious route did not work and the reason is worth recording.
Diagnosis: `gh api repos/dunchitrader-collab/dunchitrader-collab.github.io --jq '.permissions'` — `push: true` means it is resolved.

**[BUG] 2026-09-18 — `.permissions` can report `push: true` while git is still refused**
Root cause: **a fine-grained PAT carries its own per-repository allow-list, and a collaborator invitation does not extend it.** After Gavin granted `gsamwell-personal` Write access, `gh api …/permissions` correctly reported `{"push": true}` for that account — but `git push` still returned `403 Permission to dunchitrader-collab/dunchitrader-collab.github.io.git denied to gsamwell-personal`. The account had the right; the *token* did not. `GITHUB_TOKEN` in this environment is a fine-grained PAT (`github_pat_…`), identifiable because the `x-oauth-scopes` response header is **absent**, and it was minted before the collab repo existed in its scope list. A probe of `…/collaborators/{user}/permission` returned `Resource not accessible by personal access token`, which is the token refusing, not the account lacking permission.
Impact: a session that trusts `.permissions` alone will believe it can push, then fail at the git layer and possibly misdiagnose it as a branch or credential-helper problem. The two answers disagree because they are answers to different questions: *does this account have write?* versus *is this token allowed to use it?*
Fix applied: pushed with the **`gsamwell-lang`** credential instead, which is a **classic** token carrying full `repo` scope (`gh auth status` lists its scopes, whereas a fine-grained PAT lists none). No token was modified and none was committed.
Diagnosis: `curl -sI -H "Authorization: Bearer $TOKEN" https://api.github.com/user | grep -i x-oauth-scopes` — **no such header means fine-grained**, so the repo must be in that token's own allow-list regardless of what `.permissions` says. Prefer `git push --dry-run` over the permissions API as the real test of whether a push will work.

**[BUG] 2026-09-18 — The live repo had an unrelated history**
Root cause: `dunchitrader-collab/dunchitrader-collab.github.io` was created through the GitHub UI with its own `Initial commit` (`313ccfb`) carrying a one-line auto-generated `README.md`. This repo's history began independently, so the two shared **no merge base** and a plain push was refused as a non-fast-forward.
Impact: the tempting fix is `push --force`, which would discard the live repo's own first commit.
Fix applied: `git merge collab/main --allow-unrelated-histories` at `f94d45a`, resolving the add/add `README.md` conflict in favour of this repo's version — which carries the publishing procedure and the no-build-step rule that plan row 1.2 requires. **No force-push was used**, and the live repo's `Initial commit` is preserved in the history.
Diagnosis: `git log HEAD..collab/main --oneline` shows commits the local branch lacks; `git merge-base HEAD collab/main` returning nothing means the histories are unrelated.

**[BUG] 2026-09-18 — rem-scaled padding collapsed the content box, splitting phone numbers mid-digit**
Root cause: `.wrap`, `.card` and `.call` each carried `1rem` padding. Because `rem` follows the text-size control, at the largest size under 200% browser zoom the three paddings together claimed **174px of a 160px-wide body**, collapsing the card's content box to **0px**. A phone number then had nowhere to sit and broke between digits — measured: `+44 7700 900456` split across **3 lines** at the largest text size and **13 lines** at 200% zoom.
Impact: directly violates the stated requirement *"In all zoom functions make sure the text never rolls outside the box"*, and a phone number broken mid-digit is unreadable — which on this site is the one thing that must always work.
Fix applied: padding capped with `min()` in [PATH] `style.css` — `.wrap` `padding-inline:min(1rem, 4vw)`, `.card` `padding:min(1rem, 4vw)`, `.call` `padding:.8rem min(1rem, 3vw)`; and `.call .num` sized `min(1.15rem, 6vw)` so the number shrinks rather than splits. Commit `0418f59`.
Diagnosis: at 320px with the largest text size and 200% zoom, walk the ancestor chain of `.call .num` and read `clientWidth` at each level. A content box near 0 with large `padding-left`/`padding-right` is this fault. Font size is NOT the lever — verified by measurement: the groups still split at 9px, because the container, not the type, was the constraint.

**[BUG] 2026-09-18 — the fixed-px size strip pushed the page sideways under zoom**
Root cause: the `.sizer` strip is deliberately sized in fixed px so the buttons do not grow as they are pressed (the BUG 2 fix). Under 200% browser zoom the CSS viewport halves, and the strip's three 48px buttons plus label and gaps needed **108px of a 102px line**, so the page scrolled sideways.
Impact: the control that exists to spare villagers from pinch-zoom was itself causing the sideways scrolling that pinch-zoom causes.
Fix applied: `flex-wrap:wrap` on `.sizer` in [PATH] `style.css` — the label drops to its own line and the buttons keep their fixed size. The BUG 2 fix is untouched. Commit `0418f59`.
Diagnosis: at 320px with 200% zoom, compare `.sizer` `scrollWidth` against `clientWidth`.

### Gotchas

- **The five-minute republish lag is real.** The owner edits the sheet and the site catches up shortly after, not on refresh. The README must say so or an inheritor will think the site is broken.
- **Never click "Stop publishing"** — it takes the site offline.
- **The published CSV URL is tied to the tab's internal id.** Deleting and recreating the tab breaks it; renaming is fine.
- **GitHub Pages will not serve from a private repository on a free account.** The live repo must be public, so no credential may ever be committed.
- **GitHub Pages applies Jekyll by default.** The live site is currently serving a default Jekyll page. A `.nojekyll` file at the repo root is required so the committed files are served untouched — otherwise "no build step" is not actually true.
- **The votes endpoint is necessarily open**, because villagers do not log in. It is append-only to the Votes tab; it cannot read, edit or delete anything, and cannot touch Published. **Worst case is junk rows in a tab only the owner looks at.** This trade-off is explicitly accepted (decision 12a).
- ~~**Posting to an Apps Script web app from a GitHub Pages origin usually needs `mode: 'no-cors'` with `Content-Type: text/plain`**, meaning the response cannot be read. Show the thank-you optimistically. **This is REPORTED, not measured** — it is the expected behaviour of Apps Script and browser CORS, but it has not been tested on this project. Confirm when Build Plan step 4 is built.~~ [historical — see Layer 1 for current value] SUPERSEDED 2026-09-18T17:02:32Z → **NOW MEASURED, and the conclusion holds while the stated reason does not.** `mode: 'no-cors'` with `Content-Type: text/plain;charset=utf-8` is correct and the response is indeed unreadable (opaque, `status: 0`, no headers), so the optimistic thank-you stands. But Apps Script **does** return `access-control-allow-origin: *`; the reply is discarded by `no-cors` itself, not missing. Also measured: the promise **resolves** rather than rejecting, so failures cannot be caught. See Layer 3 and solution design §6.2.

---

# LAYER 4 — OUTSTANDING WORK

## The queue as it stands after the 2026-09-19 session

**[OUTSTANDING] 2026-09-19 | CRITICAL | Blocking: yes — the recommend button does not work at all until this is done**
**Redeploy `apps-script/Code.gs`, and check the address in a browser afterwards.** [PATH] `apps-script/DEPLOY.md` **step 14**, nine steps. This is the owner's first job and everything else about the recommend button waits behind it.

**Two things are being fixed in one redeploy, and it is worth knowing they are separate.** First, the deployment is currently running neither `doPost` nor `doGet` — measured, Layer 3 — which is why the button produces nothing. Second, the script being pasted is a **repointed** one: under D1b it writes to Published `K` and `L` rather than to Votes, and carries the seven-character minimum (row 4.6).

**The step that was missing last time and is now in the instructions:** before deploying, press **Ctrl+F** in the Apps Script editor and search for `doPost`. If it is not found, the wrong file is open — which is the most likely explanation for what happened on 2026-09-18, since `Publish.gs` was pasted three times that evening.

**`Publish.gs` must be in the same project.** The endpoint now shares its `appendRecommendation()` rather than keeping a copy, and refuses to run with an explicit message if it is absent.

**How he will know it worked, before placing any vote:** open the `/exec` address in a browser. Working is one plain sentence; broken is a Google error page. Ten seconds, no login.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no**
**Place a real vote from the phone and see the words on the card.** This is the sighting that closes Build Plan rows **4.6 and 4.7**, and nothing else can. Both rows are built and tested — 66 endpoint tests and 30 browser checks — but **nothing has run against the real Google Sheet**, because the deployment does not yet carry the script.

Open `https://dunchitrader-collab.github.io/?x=1` on the phone (the `?x=1` forces a fresh copy), tap a trade, tap **I recommend them too**, type a name and at least seven characters, tap **Add my recommendation**. Then look at **that person's row on the Published tab, columns K and L** — not the Votes tab, and not the page's thank-you, which appears either way because the reply is opaque by measurement. The words should also reach the card itself within the five-minute republish lag.

---

## The queue as it stands at conversation close-down, 2026-09-18T21:10:23Z

Recorded here in full so that **none of it lives only in conversation context**. The conversation that produced it is closed to further sends.

~~**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**~~
~~**Diagnose why the site's own recommend button produced no row in the Votes tab.** The first thing the successor conversation picks up. Recorded open and undiagnosed as a `[BUG]` in Layer 3, with five candidates to test and no cause guessed at. Build Plan row **4.6 stays open**. The directory itself is unaffected — form submissions still publish themselves.~~ RESOLVED 2026-09-19T11:25:10Z — **DIAGNOSED BY MEASUREMENT, and it was none of the five candidates.** The deployment behind the `/exec` address is not running `Code.gs` at all: Google answers *"Script function not found: doPost"* to every POST and *"doGet"* to every GET. Recorded in full as a new `[BUG]` in Layer 3 with each of the five candidates dispositioned. The *diagnosis* is what this item asked for and it is complete; **the repair needs the owner's redeploy**, which is the separate item immediately below.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Row 5.1 needs two more verdicts produced, and here are the exact test rows.** The verdict column has been seen producing **`ALREADY ON SITE`** (ten rows) and **`CHECK THIS`** (one row), MEASURED by the owner in his own sheet. **`NEW` and `SAME NAME, DIFFERENT NUMBER` have not been produced**, because every response on the tab is already published. Type these two rows into **Form Responses columns C to H** — they are recorded here in full so the successor does not have to reconstruct them:

| C trade | D first | E last | F phone | G business | H experience | Expect |
|---|---|---|---|---|---|---|
| Plumber | Test | Nine | `07999 888777` | *(blank)* | Did a proper job on the boiler | **NEW** |
| Plumber | Bob | Samwell | `07999 111222` | *(blank)* | Came out on a Sunday evening | **SAME NAME, DIFFERENT NUMBER** |

Row 5.1 closes when one sample row of **each of the four** verdicts shows correctly in the real sheet.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Walk `docs/RESTORE-dunchi-trader.md` end to end with the two Google logins and nothing else.** Build Plan row **6.1, 9 effort — the largest row left**. The runbook was reconciled to the deployed state so the walk is not wasted on stale instructions, and it ends with a tick list usable on a phone beside a laptop.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: yes — gates launch**
**Seed the Published tab to 12–15 real tradespeople across at least 6 trades.** Gates Build Plan rows **7.1 and 7.2**. The owner was advised to ask the village WhatsApp group; **submissions now publish themselves**, so anything villagers send arrives without him copying it across. `docs/PROCESS-seeding-and-launch-dunchi-trader.md` is the step-by-step guide.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**`T007` cannot be repaired automatically — retype it or delete the row before launch.** The form itself holds the same twelve-digit number, so there is no good source to re-derive from; the repair refuses it rather than inventing a plausible wrong number, and the row is `hidden` so no villager can reach it. **It is test data from the owner's own submission**, so deleting it is as acceptable as retyping it.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Verify the hand-pasted recommender names in Published column `L` are aligned to the right people.** The owner pasted them across from the responses tab as a block, and **the repair had reordered the rows**, so a block paste may be one or more rows out. Check each name against the response carrying **that person's phone number**, not against its position. A misaligned name attributes a villager's words to the wrong neighbour, which is worse than having no name at all.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Rule on Ben Franks and John Pilkington sharing `07887800192`** — one electrician, one car mechanic. Both are kept deliberately and the sharing is reported rather than resolved, because two people genuinely can share a household or business line. **The owner has not ruled on whether it is genuine.**

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: yes — gates launch**
**Delete the remaining test people from Published**, ~~and the two non-villager rows from the Votes tab. The Votes rows are the 4.3 automated test row (`name` = `TEST - Claude Code 2026-09-18 - please delete`) and the owner's own ~17:47Z test vote.~~ **AMENDED 2026-09-19T11:25:10Z — the Published half still gates launch; the Votes half no longer matters and is downgraded to optional tidying.**

**Why the Votes half stopped mattering.** Under D1b-6G7f-19092026 nothing reads the Votes tab and nothing writes to it, so those two rows are inert: they cannot reach the site, cannot affect a tally, and cannot be seen by a villager. The original reason for deleting them — *"so the tally shown on each card counts only real villagers"* — no longer applies, because no tally is derived from that tab. **Delete them or leave them; it makes no difference to anything a villager sees.** They are left in place deliberately rather than cleaned up, because the tab is now a historical record of what the old endpoint did and clearing it would remove the only evidence the old path ever worked.

**The Published half is unchanged and still gates launch.** Test people on the Published tab ARE on the website.

**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes — gates launch**
**The launch message stays a DRAFT and must not be posted until step 7 passes.** It is in `docs/PROCESS-seeding-and-launch-dunchi-trader.md` §4 under a heading saying so. Posting it early sends the village to a list of test people, and the link is the one thing that cannot be un-sent.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no — OPEN RULING**
**Should the form's description tell villagers their recommendation goes public?** Recommended, not implemented. A tradesperson's name and telephone number now appear on a public website without that tradesperson being asked, and the villager submitting is the only person positioned to have asked them. A form wording change, which only the owner can make.

~~**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no — OPEN RULING**~~
~~**The site's own recommend panel writes only to the Votes tab, which nothing reads.** Only form submissions reach the site. Two ways forward and they are the owner's to choose between: **teach the publisher to read the Votes tab** — matching each vote's trader id to a Published row and appending it exactly as a duplicate form submission is appended — **or retire the panel** so the site stops offering something that goes nowhere. Either way it needs its own plan row. This is separate from the `[BUG]` above: even with the button working, what it writes is read by nothing.~~ RESOLVED 2026-09-19T11:25:10Z — **ANSWERED BY THE OWNER'S RULING D1b-6G7f-19092026: the panel feeds the PUBLISHED tab.** Neither of the two ways forward offered was taken; a third was, and it is better than both. Rather than teaching the publisher to read Votes (D1a, which needs a second scan on every submission and leaves a second place words can strand) or retiring the panel (D1c, which removes the only way to second somebody already listed without filling in the whole form), **the endpoint itself was repointed to write straight to Published `K` and `L`, calling the publisher's own `appendRecommendation()`** — the same function, not a copy. Built at `f8e34ff`, bounded per D2-6G7f-19092026, and given its own plan row **4.7** as this item required. See Layer 5, 2026-09-19.


**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Re-paste `apps-script/Publish.gs` one more time.** The repair he ran destroyed the `ARRAYFORMULA` helpers in Published `I2` and `J2` by writing rows straight through their columns. He has pasted them back by hand and they are working again — measured on the live feed, populated for all thirteen rows — but **the protection only applies once he takes the new script** (`8dbf9b2`). It also fixes a second fault the live site revealed: a stray `Heating` tile from `T002`'s `extra_trade`, which the repair had not been mapping. One step: Extensions → Apps Script → `Publish.gs` → select all, delete, paste the fresh copy from GitHub, Ctrl+S. Then **Village list → Check the setup**, which now reports whether `I` and `J` are healthy.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Retype Helen Smith's telephone number (`T007`).** It reads `078853335434` — twelve digits, the mistyped original. The repair refuses it deliberately rather than inventing a plausible wrong number, and her row is `hidden`, so no villager can reach it. Retype it from her original form answer on the Form responses tab and set her `status` to `active`.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes — blocks launch**
**Repair the telephone numbers, the duplicates and the trade names.** [PATH] `apps-script/DEPLOY.md` **step 13**, five steps: re-paste `Publish.gs`, **Village list → Check the setup** to see what is wrong before changing anything, **Village list → Repair the list**, check again, then verify one number by eye and tap Call on the site.

**This blocks launch, which none of the other outstanding items do.** Six of his eight telephone numbers had lost their leading zero, and the Call button is the whole product. A villager tapping it reaches a stranger with nothing on screen to suggest the list was wrong. Everything else on this list is untidiness; this one hands an elderly person a wrong number.

**One number cannot be repaired automatically and needs him:** Helen Smith's `78853335434` is the known-bad twelve-digit value with its zero eaten, so restoring the zero still gives a wrong number. The repair refuses it and says so. Her row is `hidden` either way — retype it from her original form answer.

**Two people genuinely share a number** — Ben Franks (electrician) and John Pilkington (car mechanic) on `07887800192`. Both are kept and the sharing is reported; it is not an error unless he says it is.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**
**Re-paste `Publish.gs`, run the repair, and re-test the form.** Tonight's submissions did reach the Published tab — they are about a thousand rows below the others, because a whole-column helper formula makes the sheet look full to a script (Layer 3). **Nothing is lost and no id has changed.** [PATH] `apps-script/DEPLOY.md` **step 12** has the three steps in his own terms: re-paste the script, run **Village list → Repair the list**, then **Village list → Check the setup** and look for *"Stranded rows below the list: none. Good."* After that, one form submission from his phone should appear directly under the existing rows, and on the website within the republish lag. The fix passes 23 of 23 stub tests including the exact reproduction, but **has not run in Google Sheets**; his re-test is what closes Build Plan row 5.2.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**
**Add columns K and L to Published, and re-paste `Code.gs`.** Both are written out in [PATH] `apps-script/DEPLOY.md`. **Step 10**: paste `recommendations` and `recommended_by` into K1 and L1 of the Published tab and leave the cells below empty — the publisher fills them in. Without these two columns nothing breaks; the site simply shows no recommendations, because `app.js` reads them as optional. **Step 11**: re-paste `apps-script/Code.gs` into the Apps Script editor and redeploy via **Deploy → Manage deployments → pencil icon → Version: New version**. **Choosing "New deployment" instead would issue a different `/exec` URL and silently stop the recommend button**, because the site would carry on posting to the old address and the opaque reply means the page can never tell. That constant was corrected from 15 to 7 this session, so until he redeploys, a valid short recommendation typed on the site is still dropped by the endpoint.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Recommendations typed into the site's own panel reach nobody but their author, and D8a did not change that.** Measured 2026-09-18: `app.js` initialises `VOTES = {}` empty on every page load, writes to it only from the vote panel, and reads it only when drawing a card — so those words live in one browser for one visit. They are posted to the **Votes** tab, and **nothing copies Votes into Published**, which is the only thing the site reads. Recommendations arriving through the **Google Form** now reach everybody, because `Publish.gs` writes them into K and L. Closing the remaining gap means teaching the publisher to read the Votes tab too — matching each vote's trader id to a Published row and appending it exactly as a duplicate form submission is appended. That is **not built**, needs its own plan row, and is the owner's to rule on. Recorded explicitly so a future session does not read D8a as having closed it.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**
**Install the automatic publisher.** Three steps, all inside the spreadsheet, all written out in [PATH] `apps-script/DEPLOY.md` **Part 2**: paste `apps-script/Publish.gs` as a second Apps Script file (step 6), add the **on-form-submit** trigger on `onFormSubmitPublish` (step 7), and run **Village list → Publish any responses not yet on the list** once (step 8). Then check it with **Village list → Check the setup** and one real form submission (step 9). **`apps-script/Code.gs` is not touched** — the votes endpoint stays exactly as deployed. **The publisher has been tested only against a stub and has never run in Google Sheets**; his first real submission is the proof, which is why row 5.2 closes on that and not on this session's tests. Switching it off again is one trigger deletion, also documented.

~~**[OUTSTANDING] 2026-09-18 | LOW | Blocking: no**~~ RESOLVED IN SOURCE 2026-09-19T11:25:10Z at commit `f8e34ff` — `MIN_TEXT` is **7**, matching the page and the sheet, and the boundary is asserted by test (6 refused, 7 accepted, the owner's *"Fixed gate"* accepted). **It is not live until he redeploys**, which is DEPLOY.md step 14 and is on his list; row 4.6 accordingly stays `new`.
~~**`apps-script/Code.gs` still carries `MIN_TEXT = 15`.**~~ Yesterday's owner ruling moved the minimum length of the recommendation text to **seven** characters on the website (`app.js`) and in the sheet verdict (`SHEET-FORMULAS.md`), but the votes endpoint was not in scope for either change and still rejects a recommendation under fifteen characters server-side. **Consequence, and it is small but real:** a villager can type a seven-character note, the page accepts it and thanks them, and the endpoint silently drops it — the opaque cross-origin reply means the page cannot tell, exactly as recorded in Layer 3. Noticed 2026-09-18T19:27Z while reading `Code.gs` for the publisher work and deliberately NOT changed, because that file is the internet-facing endpoint and no prompt has authorised touching it. Fixing it means changing one constant and redeploying the web app, which produces a **new `/exec` URL** unless the existing deployment is edited rather than replaced — see `apps-script/DEPLOY.md`.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Rule on whether the Google Form should tell villagers their recommendation goes public.** Recorded as a recommendation and deliberately NOT implemented — the form is his and nobody here can change it. The reason it now matters: before today a human read every submission before anything appeared, and from now on a tradesperson's name and telephone number can reach a public website without that tradesperson ever being asked. The villager filling the form in is the only person positioned to have asked them, and at present the form does not tell them that is what they are doing. Suggested wording is one line in the form's description. See solution design §7.3.


~~**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**~~ RESOLVED 2026-09-18T18:30Z — **REPORTED by the owner, not measured here.** He turned email collection off in Google on 2026-09-18. Form settings cannot be seen from outside the account, so this stands on his report; it becomes observable the first time a new submission arrives with column B empty.
~~**Turn form email collection OFF.** Evidence, REPORTED by the owner from his own sheet: the third real response row carries `gsamwell@deverse.co.uk` in column B. It contradicts decision 3, and requiring a Google sign-in is exactly the barrier that stops an elderly villager at the first step. **Settings → Responses → Collect email addresses → Off.** Only he can do it; nobody here can touch the Google Form. Note this also means villagers' email addresses are currently landing in the responses tab — they never reach the site, because the site reads only the Published tab, but they are being collected without need.~~

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~ RESOLVED 2026-09-18T18:30Z — **REPORTED by the owner, not measured here.** He installed an **eleven-digit** phone validation rule in Google on 2026-09-18, which is the digit-counting form recommended below. Form settings are not visible from outside the account, so this stands on his report. Solution design §7.1 updated and marked REPORTED.
~~**Tighten the telephone validation rule, and confirm it is installed.** Evidence, REPORTED: the third row's number is `078853335434`, twelve digits — one too many for a UK mobile. **Measured this session, and it corrects the obvious reading:** that value **passes** the documented rule `^[\d\s\+\(\)\-]{10,20}$`, because the rule counts *characters* (10–20) rather than digits. Its presence is therefore NOT evidence the rule is missing or unenforced — a correctly installed rule would also have let it through. Whether the rule is actually installed is still UNKNOWN and is carried separately below. Recommendation, for the owner to rule on: change the rule to count digits, so a mistyped number is caught at the point a villager types it rather than discovered weeks later when somebody rings a stranger.~~

**[OUTSTANDING] 2026-09-18 | LOW | Blocking: no**
**The form's first-name box is collecting full names — and the recommendation is to leave it alone.** Evidence, REPORTED: two of the three real rows carry `Bob Samwell` and `Ben Franks` in the first-name column with the last-name column blank; the third, `Helen` / `Smith`, is split properly. **Judgement asked for and given: this is simply how people fill in forms, not a form defect and not a formula defect.** Reasons: the form's two boxes are correctly labelled and correctly required, so there is nothing to fix there short of merging them into one box — which would lose the split for the villagers who do use it properly, and which the Published tab's own `first_name`/`last_name` columns want. And it is **not a formula defect because the rewritten `name_key` already handles it**: the formula concatenates first and last *before* stripping non-letters, so `"Bob Samwell"` + `""` and `"Bob"` + `"Samwell"` both collapse to `bobsamwell` and match. **Verified by simulation this session**, along with differing capitals, doubled spaces, apostrophes and hyphens. The one case it cannot handle is a name typed back to front (`Samwell` then `Bob`), which is recorded as a stated limitation in `apps-script/SHEET-FORMULAS.md` rather than papered over. **No action recommended.** It is recorded so that a future session does not "fix" the form and break the split for people who use it correctly.

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~Complete first build session — populate all handover layers with architecture, decisions, and session history.~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. See Layer 6 entry dated 2026-09-18T13:49:45Z.

### Operator Actions — the owner's to do inside Google

These sit inside Google and can only be done by the account owner. **They are deliberately not Build Plan sub-tasks.**

~~**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes**~~
~~**Republish the CSV from the Published tab.** Measured this session: the published CSV URL currently serves the raw Form responses tab, whose header is the form's question text, not the agreed `id, first_name, last_name, business, phone, trade, extra_trade, status`. Until this is corrected, the site would read unreviewed submissions and bypass the approval gate entirely. **This blocks Build Plan step 2.** Either republish from the correct tab and record the new URL here, or confirm the existing URL is repointed.~~ RESOLVED 2026-09-18T15:20:38Z — the owner republished from the Published tab (gid `1915382769`); `app.js` switched at `0267ef3` and verified live. Recorded here 2026-09-18T17:04:41Z; the Layer 1 row was closed at the time but this Layer 4 copy was missed.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Place one vote from your phone and confirm it reaches the Votes tab.** This is the sole remaining evidence for Build Plan row 4.2, and nothing in the code blocks it. Open `https://dunchitrader-collab.github.io` on your phone, tap a trade, tap "I recommend them too", type a name and a sentence of at least 15 characters, tap "Add my recommendation" — then open the Sheet's **Votes** tab and confirm a new row appeared. **The page will show its thank-you whether or not the write succeeded** (Layer 3 — the cross-origin reply is opaque and carries no information), so the sheet is the only proof. `apps-script/DEPLOY.md` **step 4 is superseded** — do NOT hand-edit `app.js` in the live repo; the endpoint is already set at `4d67c15` and served.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Delete the TWO non-villager rows from the Votes tab before launch.** ~~Build Plan row 4.3's measurement deliberately submitted one real recommendation through the live site, so the Votes tab carries a row that is not a villager's.~~ SUPERSEDED 2026-09-18T17:48Z → there are now **two** such rows, and they are different things:

1. **The automated test row** — written by Build Plan row 4.3's cross-origin measurement at ~17:02Z. Labelled for deletion in both text columns: `id` is `T001`, `name` is `TEST - Claude Code 2026-09-18 - please delete`, and `text` begins `TEST ROW - please delete - automated cross-origin measurement from Claude Code session 2026-09-18, build plan row 4.3.`
2. **The owner's own test vote** — placed from his phone at ~17:47Z, the vote that closed row 4.2. Its name and words are whatever he typed, against whichever tradesperson he tapped, so only he can identify it. It is the row whose arrival he confirmed with *"the vote populated"*.

Both should be removed before launch so the tally shown on each card counts only real villagers. Deleting rows from the **Votes** tab is safe and affects nothing else — the site never reads that tab. **Do not delete anything from the Published tab while doing it**; that tab is the list itself. His first attempt at ~17:25Z produced no row at all (see the stale-page `[BUG]` in Layer 3), so there is nothing to remove for that one.

~~**If no such row is present, that is itself a finding** — it would mean the append path is not working, and row 4.2 should not be closed.~~ RESOLVED 2026-09-18T17:48Z — the append path is confirmed working by the owner's own vote; this caveat no longer applies.

~~**[OUTSTANDING] 2026-09-18 | LOW | Blocking: no**~~
~~**The site 404s on `/favicon.ico` on every page load.** No icon file exists and `index.html` declares no icon link. Cosmetic — no villager is affected — but it puts a red error line in the browser console on every load, which will mislead a future session debugging the votes POST. Either add a small `favicon.ico` at the repo root or declare an inline data-URI icon link. See Layer 3.~~ RESOLVED 2026-09-18T17:25Z — an inline SVG data-URI icon link was added to `index.html` at commit `99b66de`, drawn in the Call button green `#0A4F2E`. No build step, no binary file and no extra request. **Measured on the SERVED site in a real browser, plain page load: before, 1 failed request and 1 console error; after, 0 and 0.** The icon was additionally verified to decode and paint rather than merely be declared. Build Plan row 4.4. See Layer 3.

~~**[OUTSTANDING] 2026-09-18 | LOW | Blocking: no**~~
~~**The comment above `VOTES_ENDPOINT` in `app.js` is now stale.** Lines 27–29 still read "The Votes endpoint does not exist yet" and lines 287–291 still read "TODAY IT SENDS NOTHING … there is no endpoint to post to", both of which became false at `4d67c15` when the endpoint was wired and measured live. The code is correct; only the prose is wrong. It was deliberately left untouched because the prompt for that change said to alter nothing else in the file, and it is recorded here rather than silently fixed. A future session should correct both comments to describe the deployed endpoint and the measured opaque-response behaviour.~~ RESOLVED 2026-09-18T17:25Z — corrected at commit `99b66de`. Three comment blocks were stale, not two: the header above `VOTES_ENDPOINT`, the block above `sendRecommendation()`, and the comment inside its `try`. All three now describe the deployed bounded endpoint and carry the §6.2 measurement, including the explicit warning that the return value is **not** a success signal and that `catch`/`ok`/`status` must never be branched on. **Proven comment-only:** with comments and blank lines stripped the code is byte-identical to `93c2777`, and `node --check app.js` passes. Build Plan row 4.4.

~~**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**~~
~~`apps-script/DEPLOY.md` step 4 instructs the owner to hand-edit `app.js` in the live repository, which would split the two repositories apart.~~ RESOLVED 2026-09-18T17:25Z — rewritten at commit `99b66de`. Step 4 now records that the value went in at `4d67c15`, tells the owner there is nothing to paste, and explains in plain English why editing one repository of two makes them disagree and how the next ordinary push would silently revert it. It also tells him what to do if a redeploy ever produces a new `/exec` URL. The document's opening and step 5 were corrected in the same pass; step 5 now carries the measured fact that the page thanks the villager either way, so **the Votes tab is the only proof**. Build Plan row 4.4. (This item is recorded and closed in the same edit: it was raised in the previous session's summary and Layer 6 "what was not tested", but never written as a Layer 4 row.)

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Change form question 1 from a dropdown to Multiple Choice.** It is currently a dropdown with "Other" typed as an ordinary option. A dropdown cannot have a working "Other" — the villager selects the word and gets no text box. It must use the real Add "Other" control.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Turn off email collection on the form.** Settings → Responses → Collect email addresses → Off. It is currently on and required. The owner decided not to collect email, and it may force a Google sign-in that stops elderly villagers at the door. Confirmed present this session via the `Email Address` column in the published CSV.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Remove the star-rating question from the form.** Confirmed present this session as "Please give them a star rating out of 5". It contradicts decision 3, which rules out star ratings entirely. This item was found by measurement this session and was not in the original brief.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Add the missing everyday village trades to the form's trade list:** Gardener, Handyman, Carpenter / Joiner, Plasterer, Painter & Decorator, Tree Surgeon, Fencing, Groundworks / Drainage, Window Cleaner, Cleaner, Logs / Firewood, Oil / LPG Supplier, Pest Control.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Confirm the Published tab carries the header row** `id, first_name, last_name, business, phone, trade, extra_trade, status`. Could not be verified this session — the published CSV serves a different tab, so the Published tab's actual header is unknown from outside the Google account.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Confirm whether the two form validation rules were added.** Status is UNKNOWN and unverified — the settings are not visible on the public form page. The two rules are: telephone response validation matching `^[\d\s\+\(\)\-]{10,20}$` with custom error text "Please use numbers only, like 07825 736940 or 01392 833471."; and experience text with a minimum of 15 characters and custom error text "Please write a few more words — what did they do for you?"

### Launch Prerequisites — the owner's actions, not the build's

Added 2026-09-18T14:02:20Z. These were originally carried as Build Plan rows 7.1, 7.2, 7.3, 7.4, 7.11 and 7.12. They are **things Gavin does, not things the build delivers**, so counting them as plan rows inflated the denominator his throughput measure divides by while the work stayed the same. They are recorded here instead, and the rewritten plan no longer carries them. See Layer 5 decision 18.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: yes — blocks launch**
**Seed the Published tab to 12–15 tradespeople across at least 6 trades.** A directory with four people in it gets opened once and never again, and there is exactly one chance to make a first impression on this audience. Includes agreeing the seed trade list (Gardener, Handyman, Carpenter / Joiner, Plasterer, Painter & Decorator, Tree Surgeon, Fencing, Groundworks / Drainage, Window Cleaner, Cleaner, Logs / Firewood, Oil / LPG Supplier, Pest Control), checking every seeded phone number and trade is correct, and confirming the ids run `T001` upward with no gaps or duplicates. Build Plan sub-task 7.2 confirms the thresholds are met on the live feed but does not do the seeding.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Post the launch link to the village WhatsApp group.** Only after the seeding above is complete and Build Plan step 7 has passed. The plan drafts the message (sub-task 7.2); posting it is Gavin's.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Post-launch check within the first week.** Confirm new form submissions are arriving and the review path works with real villager data — at least one real submission reviewed end to end.

### Open Questions

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Apps Script CORS behaviour is unconfirmed.** Posting from a GitHub Pages origin is expected to require `mode: 'no-cors'` with `Content-Type: text/plain`, meaning the response cannot be read and the thank-you must be shown optimistically. This is REPORTED, not measured. ~~Build Plan sub-task 4.9~~ SUPERSEDED 2026-09-18T14:02:20Z → **Build Plan sub-task 4.3** measures it and corrects the solution design to match. (Renumbered by the plan rewrite — see Layer 5 decision 18.)

### Parked

None recorded yet.

---

# LAYER 5 — DECISION LOG

### 2026-09-18 — Project scaffolding

**[DECISION]** Project created via project-admin Create Project feature.
**Rationale:** Automated scaffolding ensures consistent project structure with CLAUDE.md, handover doc, git repo, and GitHub remote from day one.
**Alternatives considered:** Manual setup (slower, inconsistent).

### 2026-09-18 — Scoping, design and planning

All fourteen decisions below were settled across sessions on 2026-09-16 and 2026-09-18. Decisions 1 and 2 were taken on 2026-09-16; the remainder on 2026-09-18.

**[DECISION] 1 — GitHub Pages for hosting.**
**Rationale:** Free, permanent, no payment card required.
**Conditional on:** the site being VERY easy to search by work type. The owner's words: "Github pages is fine as long as the site easy VERY easy to search by work type."

**[DECISION] 2 — Google Form feeding a Google Sheet as the entry route.** (2026-09-16)
**Rationale:** The owner's own choice. It needs no build, no hosting and no account for the villager, and the owner can review submissions from his phone.

**[DECISION] 3 — NO star ratings.**
**Rationale:** With two or three recommendations each, an average is meaningless, and one grumpy neighbour costs someone work.
**Alternatives considered:** Public star ratings — rejected.

**[DECISION] 4 — NO public bad reviews.**
**Rationale:** A named local tradesperson publicly criticised on a site the owner publishes is a defamation risk he would personally have to defend, and a social problem in a village this size.

**[DECISION] 5 — Problems handled by one line of text on the site:** "Had a problem with someone on this list? Please mention it on the village chat."
**Rationale:** The owner's own amendment to a proposed private report form. **ZERO admin** — no inbox, no form, no queue. The signal reaches him anyway because he is in the group.
**Alternatives considered:** A private problem-report form or inbox — rejected because it creates administration.

**[DECISION] 6 — Small print on the site:** "These are recommendations from neighbours — not checks or endorsements by anyone. Please satisfy yourself before hiring."
**Rationale:** Distinguishes a neighbourly list from an implied endorsement by the publisher.

**[DECISION] 7 — Two name fields on the form, first and last, both required, rather than a regex.**
**Rationale:** Google Forms' own "This is a required question" is clearer than any custom message. Help text on surname: "If you don't know it then write 'Not Known'."
**Alternatives considered:** A single name field with a regex — rejected as less clear to an elderly user.

**[DECISION] 8 — Recommender names are shown publicly.**
**Rationale:** It is the whole value of the list. The form question is worded to tell them so.

**[DECISION] 9 — Surrounding parishes count.**
**Rationale:** Tradespeople from surrounding parishes serve Dunchideock, but the site is for Dunchideock.

**[DECISION] 10 — No paid domain.**
**Rationale:** The link is shared in the village WhatsApp group, so the address is never typed or spoken.
**Alternatives considered:** A QR code — rejected as too advanced for the audience.

**[DECISION] 11 — The PHONE NUMBER is the identity for de-duplication, not the name.**
**Rationale:** Names get misspelt constantly; numbers almost never do.

**[DECISION] 12 — The vote posts a trader ID, not a name.**
**Rationale:** Names change, IDs do not. The id is the join key between the Published tab and the Votes tab.

**[DECISION] 12a — The open votes endpoint is accepted.**
**Rationale:** The endpoint is necessarily open because villagers do not log in, and requiring a login would defeat the product. It is append-only to the Votes tab; it cannot read, edit or delete anything, and cannot touch Published. Worst case is junk rows in a tab only the owner looks at. **Explicitly accepted by the owner.** Recorded as a numbered sub-decision because it is a security trade-off that a future maintainer must be able to find, and it must not be glossed.

**[DECISION] 13 — Repository topology:** develop in `gsamwell-lang/dunchi-trader`, live and inherit from `dunchitrader-collab/dunchitrader-collab.github.io`.
**Rationale:** Both hold the full source. The live repo is never a build artefact and never a partial copy. If the two diverge, the `dunchitrader-collab` one is correct, because it is the one inherited and the one served.

**[DECISION] 14 — The inheritance requirement.**
**Rationale:** The owner's words: "I want to be able to hand over the operating site to anyone else who inherits that google email account". The `dunchitrader-collab` GitHub account and the `dunchitrader@gmail.com` Google account, together, must be a **complete and self-sufficient system**.
**Binding consequences:** NO BUILD STEP, EVER — plain HTML, CSS and JavaScript served exactly as committed, so anyone can edit a file in the GitHub web editor and see the change live. The live repo holds the SOURCE, not build output. No personal credential of the original owner in the running system. The Apps Script source is COMMITTED to the repo as well as deployed. The repo root carries a README for a NON-TECHNICAL inheritor. `docs/RESTORE-dunchi-trader.md` carries the full rebuild runbook.
**[PATTERN CANDIDATE: no-build-step-inheritable-static-site]** — the "no build step so a non-technical inheritor can edit in the web editor" constraint, with its one-sentence acceptance test, is project-agnostic and would apply to any handed-on static site.

**[DECISION] 15 — No email collection on the form.**
**Rationale:** The owner decided not to collect email, and requiring it may force a Google sign-in that stops elderly villagers at the door. Recorded as a numbered decision because the form currently contradicts it and an operator action exists to correct it.

**[DECISION] 16 — The standalone requirement.**
**Rationale:** The owner's words: "Nothing on this site must touch deverse. Everything must be registered to the dunchitrader email". Every document produced for this project stands alone and is readable by someone with no access to any other organisation's systems. No external organisation's standards are cited; where a convention would have required such a citation, the rule is stated in full instead.

**[DECISION] 17 — Handover metadata corrected to the standalone account.**
**Rationale:** The scaffolded handover carried `server: deverse-dev`, `owner: gsamwell@deverse.co.uk` and the development repo as `repo:`. Under decision 16 these are corrected to the values true of the standalone system: no server, the `dunchitrader@gmail.com` owner, and the live inheritable repository. Recorded as a decision rather than silently overwritten, because the superseded values must remain visible. The development working copy path is retained in Layer 1 and explicitly marked as not a dependency.

### 2026-09-18 — First build plan rejected by the owner

**[DECISION] 18 — The first build plan is rejected and wholly replaced. A plan row is an OUTCOME, not a task.**

The first draft of `PLAN-DUNCHI-TRADER-V1` carried **90 sub-tasks and 231 effort** for a single static page reading a CSV. The owner read it and rejected it. His words, verbatim:

> "How on earth has this plan got 231 effort in it? There's no way it's that big."

> "The plan is completely broken. If you read through all the when statements, they're extremely granular and don't necessarily make sense. They're describing random and slightly unusually structured use cases."

> "It looks like the project has just gone into far too much detail in the plan here. They're not the key outcomes required to deliver the plan. It seems to be at a much more detailed level than that."

**Rationale — the four failures, so they are not repeated:**

1. **The rows were tasks and acceptance criteria, not outcomes.** Rows such as "apply the emphasis rules", "set line-height 1.55", "confirm no sticky positioning", "underline matching letters" and "display the small print" are implementation detail. Nobody would call any of them a deliverable.
2. **The plan duplicated the solution design.** The accessibility rules, the overflow rules, the two text-size bug guards and the autocomplete behaviour were already recorded in `docs/SOLUTION-DESIGN-dunchi-trader.md`. Restating them as plan rows created a second source of truth that would drift from the first. **The design says HOW; the plan says WHAT IS DELIVERED.**
3. **The mandated `Human: "When..."` cell was filled with aphorisms.** Because the field is required on every row, and most rows had no human in them, the cell was filled with general truths and mini-arguments instead of real moments — "When the site needs a home, it needs its files" (circular), "When two repos must stay identical, both need remotes" (no person, no moment), "When inheritance is asserted, it is usually false" (a proverb). **If a truthful, specific "When" cannot be written for a row, that is the signal the row is not a row** — it folds into its parent's done-when.
4. **The owner's own actions were counted as build work.** Seeding the directory and posting to WhatsApp are Gavin's, not the build's. Counting them inflated the denominator his throughput measure divides by, flattering the number while the work stayed the same.

**The binding rule going forward.** A row must pass this test: **could the owner look at the result and say "yes, that is delivered"?** "A villager can find a plumber and ring them from their phone" is a row. "Set line-height to 1.55" is not. Detail belongs in a row's done-when, which may carry several checkable conditions, and in the solution design — never in extra rows.

**Result:** rewritten to **14 sub-tasks and 75 effort**, down from 90 and 231. The Plan ID, the Requirement as stated block, the seven steps, the blocked status on the CSV feed and the browser-reachability point in step 1 all survive unchanged. Effort was reduced by **merging rows, never by shaving effort numbers** on rows that remained.

**Alternatives considered:** Keeping the granular rows and simply lowering their effort values — rejected, because that would misrepresent the work rather than correct the grain, and the owner explicitly ruled it out.

**[PATTERN CANDIDATE: plan-row-is-an-outcome]** — the outcome-not-task test, and the rule that an unwritable "When" cell is the signal a row should be merged upward, are project-agnostic and would apply to any build plan carrying a mandated human-moment field.

### 2026-09-18 — Build-plan Owner field and delivery-field cutover (decision held in deverse-standards)

**[DECISION] D1a-i2zw-18092026** (Gavin, 2026-09-18 ~15:00Z) — in `STD-00009` the build-plan `Owner` field is the **stable account UUID that must resolve to a person**, never a display name or an email; and the five delivery fields are **mandatory for plans created on or after 2026-09-18, with no grace period**.

**This decision is NOT renumbered into this repo's own series.** It belongs to `deverse-standards`, where it is implemented in commits `51a34ca` and `34dad03`, and is recorded here only because this plan is governed by it. This repository's decision numbering continues from 18.

**Rationale:** a display name orphans a row when somebody is renamed; a stable key resolved at render does not. The no-grace cutover was chosen so that this plan, created 2026-09-18, is bound by the rule rather than exempted from it.

**Alternatives considered and rejected:** leaving the `Owner` rule as a literal named person — rejected because it contradicted a standing 2026-08-31 ruling and would have invalidated roughly 150 live rows; and a 2026-09-25 cutover — rejected precisely because it would have exempted this plan.

**Effect here:** `PLAN-DUNCHI-TRADER-V1` already carried the account UUID in every `Owner` cell. Its satellite tables were rebuilt to the 15-column delivery schema at commit `95baafd`, and the mandatory `Estimate` field added. The validator exits 0.

### Options Rejected — recorded so they are not revisited

| Rejected | Reason |
|---|---|
| **A plan decomposed to tasks and acceptance criteria** | Decision 18. 90 rows and 231 effort for one static page. Rows must be outcomes. |
| **Shaving effort numbers to hit a size bound** | Decision 18. Misrepresents the work instead of correcting the grain. Merge rows instead. |
| **A pre-filled Google Form link for the vote** | It does pre-fill trade, name and phone, but the villager lands on a six-question form and must scroll past four filled boxes to reach the two they care about. Rejected as not user friendly. |
| **Public star ratings** | Decision 3. |
| **Any public negative review** | Decision 4. |
| **A private problem-report form or inbox** | Creates admin. Decision 5. |
| **A paid domain** | Decision 10. |
| **A QR code** | Too advanced for the audience. Decision 10. |
| **A login** | The audience is elderly. A login is where they stop. |
| **A build step of any kind** | Decision 14. Breaks inheritance. |

### 2026-09-18 — Votes endpoint wired in the repository, not in the live repo by hand

**[DECISION]** The Apps Script Web app URL is set in `app.js` **in this repository** and pushed to both remotes, **superseding `apps-script/DEPLOY.md` step 4**, which instructed the owner to hand-edit `app.js` in the live repo after deploying.

**Rationale:** the two repositories must stay byte-identical — Layer 1 records `dunchitrader-collab` as authoritative if they diverge, and a hand-edit in the live repo only would create exactly the divergence that rule exists to arbitrate. It would also put the endpoint in the served file but not in the development remote, so the next session's `app.js` would silently revert it on the next push. Setting it once in source and pushing to both keeps a single origin for the value. DEPLOY.md's own text was deliberately left unaltered this session because correcting it was not in scope; the supersession is recorded here, in Layer 1 and in Layer 4 so nobody follows step 4 by accident.

**Alternatives considered:** having the owner follow DEPLOY.md step 4 as written — rejected for the divergence and revert risks above. Rewriting DEPLOY.md in the same session — deferred rather than rejected; it is the obvious follow-on and is noted for a future session.

**[DECISION]** Build Plan row 4.2 is **held open** even though the endpoint is wired, served and demonstrably reachable.

**Rationale:** the row's own done-when closes it only when a vote placed **on a real phone** appends a row to the Votes tab. This session drove a vote from a server-side browser, which is not a phone; and because the cross-origin response is opaque (Layer 3), even that vote cannot confirm from the browser side that the row was appended. Closing 4.2 would have meant asserting an append this session could not observe. Writing it as open and naming precisely what is missing is the honest record. `[PATTERN CANDIDATE: evidence-matches-claim]` — the general shape is that a row closes on the evidence its own wording names, never on adjacent evidence that merely resembles it; this is the third row in this project held open on that basis (3.3 at 15:06Z, and now 4.2).

**[DECISION]** Solution design §6.2 is corrected to record the measurement, with the superseded inference preserved verbatim inside the section rather than deleted.

**Rationale:** the old text's *conclusion* (use `no-cors`, show the thank-you optimistically) was right, but its *stated reason* (Apps Script "does not reliably return CORS headers") was wrong — the header is present. A silent overwrite would have hidden that a documented mechanism had been disproven, and a future session would have had no way to tell the corrected text from the original guess. Keeping both makes the correction auditable. The genuinely new fact, and the one most likely to cause a future bug, is that the promise **resolves** rather than rejecting, so error handling added later would silently never fire.

### 2026-09-18 — Documentation debts entered as a plan row; seeding and launch written for the owner

**[DECISION]** The three defects raised and deliberately left unfixed by the previous session were entered as a **new build plan row 4.4**, appended at the next free number, rather than fixed quietly as untracked tidying.

**Rationale:** they were real, they were known, and they had already survived one session. Work that is known and not on the board is work that gets forgotten — and in this case one of the three (`DEPLOY.md` step 4) was not merely stale but **actively dangerous**: it instructed the owner to hand-edit `app.js` in the live repository, which would have split the two repositories apart and been silently reverted by the next push, leaving him with a site that had no votes endpoint and no visible sign of why. Putting it on the plan makes the cost visible in the denominator and makes the fix auditable. The row's provenance as unplanned work entered mid-plan is recorded in Layer 6 rather than in the row text, so the row reads as an outcome like every other. `[PATTERN CANDIDATE: known-debt-becomes-a-row]`

**Alternatives considered:** fixing the three silently as housekeeping — rejected, because it would have moved the completion percentage without anything on the board explaining why, and because a dangerous instruction deserves a traceable fix. Leaving them for a later session — rejected; they were the only work available that did not depend on the owner, and one of them could have cost him the endpoint.

**[DECISION]** The favicon is an **inline SVG data URI in `index.html`**, not a committed `favicon.ico` binary.

**Rationale:** the project forbids a build step outright (decision 14) and is explicitly designed to be inherited by a non-technical person who edits files in the GitHub web interface. A binary blob in the repository is opaque to that person and cannot be inspected or changed in a browser; an inline data URI is text, lives in the file it affects, adds no extra HTTP request, and is self-evidently harmless. It is drawn in `--go` (`#0A4F2E`), the Call button's own green, because the Call button is what the product is for. Verified to decode and paint rather than merely be declared — a malformed data URI would have silenced the 404 while rendering nothing, which would have looked like success.

**[DECISION]** The launch message is published as a **draft explicitly marked as awaiting the owner's approval and not to be posted**, inside the seeding document rather than as a separate file.

**Rationale:** the words and the preconditions are one decision, not two. The message is only safe once the list is seeded, and a villager sent to a list of four test people does not come back — the link is the one thing that cannot be un-sent. Keeping the draft in the same document as the seeding instructions, behind a checklist, means the owner cannot encounter the message without also encountering what must be true before he posts it. The text is reproduced **byte-exact** as supplied and verified programmatically rather than by eye, because it is his voice and not the build's to edit.

### 2026-09-18 — The runbook is reconciled before the walk, not after it

**[DECISION]** `docs/RESTORE-dunchi-trader.md` was reconciled to the deployed state **before** the owner walks it, as documentation work carrying no plan row and clearing no effort.

**Rationale:** the runbook was written on 2026-09-18T15:06Z, when the Apps Script was not deployed and `VOTES_ENDPOINT` was empty. Row 6.1 closes only on a human walking it end to end, and a walk is expensive — it needs the Form, Sheet, Apps Script and Pages under both logins and takes about ninety minutes. Walking a document that contradicts the deployed reality does not merely waste that time: it **manufactures false defects**, because row 6.1's own wording says *"any step needing anything else is a defect to fix"*. A walker following the old step 7 would have been told to paste a URL that is already set, and told to expect a confirmation the page is measurably incapable of giving. He would have recorded real-looking failures against a system that works. Fixing the document first is the cheap half of the row; the walk is the half only he can do. `[PATTERN CANDIDATE: reconcile-before-the-walk]`

**Alternatives considered:** letting him walk it and correcting what he found — rejected, because the defects he would have found were ours and already known, and his time is the scarce resource. Closing 6.1 on the reconciliation — rejected outright; the row's closing clause is the walk, and nothing else in it can substitute.

**[DECISION]** Step 5's expected result was **measured rather than reasoned**, and both plausible messages are named.

**Rationale:** the runbook asserted that a rebuilt-but-unpointed site says *"The list is being updated"*. That is a claim about program behaviour and was testable, so it was tested rather than argued about — the page's three failure messages were driven one at a time against the live site with the feed intercepted. The assertion turned out to be the less likely of two possibilities: a genuine rebuild copies an `app.js` pointing at a spreadsheet that no longer exists, which yields *"The list will not load at the moment"*. Both are now named as correct at that point, with a statement of what would instead mean step 5 itself is wrong. The same measurement showed that *"Nobody on the list just yet"* is the **success** signal at step 6, which is the single most misreadable state in the whole runbook.

**Alternatives considered:** reasoning it out from the source — it would have reached the right answer for step 6 and probably the wrong one for step 5, because the deciding factor is what the *old* feed URL does after the old sheet is gone, which is not visible in the code.

**[DECISION]** Where two inheritance documents covered the same action, the one the reader reaches first keeps the instruction and the other points at it.

**Rationale:** four documents now address one non-technical reader — `README.md`, `docs/RESTORE-dunchi-trader.md`, `apps-script/DEPLOY.md` and `docs/PROCESS-seeding-and-launch-dunchi-trader.md`. Two copies of an instruction is two things to keep in step, and the estate has repeatedly found that the copies drift rather than staying identical. The three standing warnings are the deliberate exception and are kept in all of them: row 6.1 requires them in the README, a rebuilder needs them at the moment of publishing, and a seeder needs them before touching the tab — they are entry points, not duplicates, and each is a warning rather than a procedure.

### 2026-09-18 — Row 4.2 closed clause by clause; the stale-page finding assessed and deliberately not fixed

**[DECISION]** Row 4.2 was closed on the owner's confirmation, but **checked clause by clause first rather than on his sentence alone**.

**Rationale:** *"the vote populated"* is one sentence and the row carries three requirements. It plainly evidences the hard one — an append from a real phone, the clause held open across three sessions and the only one a build cannot supply for itself. It says nothing about the other two, and closing on it alone would have meant asserting things his sentence never claimed. So each was traced to its own evidence and the source of each was named: the *id-not-name* half of clause 1 was verified by reading the shipped code this session (`sendRecommendation(l.id, by, why)` — the tradesperson is referenced only by stable id, and the `name` field carries the **villager's** name, which is easy to misread as the tradesperson's); clause 2 rests on the prior session's 21 stub tests, REPORTED here, plus the stronger structural property that no code path can address `Published` at all; clause 3 was measured — `Code.gs` committed at `3bdf845` and present in both remotes. One limit is stated rather than glossed: nobody here can verify that the script **currently deployed** in his Apps Script project is byte-identical to the committed file, and clause 3 does not ask that it be. `[PATTERN CANDIDATE: evidence-matches-claim]` — the third row in this project closed or held on this basis.

**Alternatives considered:** closing on the owner's sentence alone — rejected; it would have recorded two clauses as evidenced by something that could not evidence them, which is the specific failure the estate's measured-vs-reported rule exists to prevent.

**[DECISION]** The stale-page finding is recorded as a known behaviour and **deliberately not fixed**; any change to site behaviour is referred to the owner rather than made.

**Rationale:** the cause is inherent to a static site with no build step — a browser already holding the page keeps running the copy it has, and because the thank-you is optimistic by design, a stale `app.js` with an empty `VOTES_ENDPOINT` thanks the villager while sending nothing. Every available fix costs more than the problem. A cache-busting version string on the `<script>` tag must be hand-edited on every change, which is exactly the remember-this-step trap decision 14 exists to forbid, and forgetting it fails silently. A service worker or version-check adds machinery a non-technical inheritor cannot reason about, to a codebase whose whole value is that they can. The blast radius is one lost recommendation, recoverable by asking again; nothing is corrupted and no listing is touched. It is also a deploy-window problem on a site that will stop being deployed once launched. The honest mitigation is procedural and already recorded as the diagnosis step: reload once with `?x=1` after any change to `app.js` before testing.

**Alternatives considered:** adding a version query string — rejected for the silent-failure and no-build-step reasons above. Shortening the cache window — not available; GitHub Pages sets `cache-control: max-age=600` and it is not configurable from a static repository.

**[DECISION]** The cache explanation is recorded as **REPORTED**, and a measurement that *narrows* it is recorded alongside rather than being allowed to dress it up as established.

**Rationale:** nobody instrumented the owner's phone, so the account of what it was running is an inference about an unobserved device, however well it fits. One thing here *was* measurable and was measured: GitHub Pages serves `index.html` and `app.js` with `cache-control: max-age=600`. That ten-minute window does **not** by itself explain a stale page ~35 minutes after loading, so the likelier mechanism is an already-loaded page still alive in memory — an open tab or a back-forward-cache restore — rather than HTTP caching holding a stale file past expiry. Recording the measurement next to the inference stops a plausible story hardening into a mechanism nobody tested, and it flags the one part of the story that does not quite fit. Both routes produce the identical symptom and neither was observed on his device.

### 2026-09-18 — Formulas rewritten against the real sheet; a trade check recommended but not built

**[DECISION]** `CHECK THIS` fires when **either** the last name **or** the business reads "not known", rather than picking one.

**Rationale:** the two authorities disagreed. Solution design §7.2 says *"Surname is 'Not Known'"*, and the form's own help text on the last-name question asks villagers to write exactly that — so the surname is where the convention actually lives. The prompt commissioning this work named the business column instead, which traces back to the old formula's mistaken assumption that the business sat in the column the experience text really occupies. Checking both costs one extra `REGEXMATCH`, catches the case whichever box the villager typed it into, and cannot produce a false negative. Picking one would have silently dropped the other. §7.2 was corrected to say "surname **or business**" so the design and the formula now agree.

**[DECISION]** The verdict compares against **helper columns on the Published tab** rather than computing the comparison keys inline.

**Rationale:** not a style choice — the committed formula nested `ARRAYFORMULA` inside `COUNTIF`, which Google Sheets rejects, because `COUNTIF` requires a real range and not a computed array. It would have errored on paste whatever the columns said. Two helper columns on Published (`I` phone key, `J` name key) give `COUNTIF` and `MATCH` genuine ranges. The cost is two more columns on a tab the owner looks at; that was checked rather than assumed to be safe — `app.js` maps the Published tab by header **name** via `header.indexOf` and reads only its eight known columns, so anything else there is ignored entirely.

**[DECISION]** A trade-not-in-the-list check is **recommended but deliberately not implemented**, for the owner to rule on.

**Rationale:** the trade column (`C`) became visible for the first time with the real layout, and the case for checking it is stronger than it first appears. **Measured this session:** `app.js` has no fixed trade vocabulary at all — the headings on the site are built from whatever text sits in the Published tab's `trade` and `extra_trade` columns. So a misspelling does not fail loudly; it **silently creates a separate heading with one person under it**, and a villager looking for a plumber never sees the person filed under `Plumbner`. The form's dropdown protects the responses tab, but the owner retypes the trade when he copies a row across to Published, and that retyping is unprotected. It is not implemented here because this prompt asked for a recommendation rather than a change, and because the sensible place for the check is the **Published** tab — where the retyping happens — not the responses tab these formulas live on, which would be a different piece of work with its own paste steps. Recommended shape if he wants it: a helper column on Published flagging any `trade` or `extra_trade` not matching the agreed vocabulary in `docs/PROCESS-seeding-and-launch-dunchi-trader.md`. `[PATTERN CANDIDATE: free-text-key-needs-a-vocabulary-check]`

**[DECISION]** The `name_key` limitation is stated in the document rather than hidden.

**Rationale:** the formula genuinely solves the case that matters — two of the owner's three real rows carry a full name in the first-name box, and the concatenate-then-strip order makes those match a properly split Published row, which was verified by simulation rather than asserted. It cannot match a reversed name order, and that is inherent to concatenation rather than fixable by a cleverer regex. A document that implies completeness it does not have is worse than one that names its edge, because the owner would trust a `NEW` verdict that was wrong. The limitation and the second one — that the formula compares against the site rather than against other form answers — are both written into the document in plain English under a heading saying so.

### 2026-09-18 — Seven characters, on both surfaces; trade normalisation measured and put to the owner

**[DECISION]** The minimum length of the experience text becomes **seven characters**, on the website and in the sheet verdict alike.

**Owner's ruling 2026-09-18 (~18:26Z), verbatim:** *"I think we can change the check to 7 characters. As they can't really put in a sentence without more than that "Fixed Gate" is about as short as you can get."*

**Rationale:** his ruling, and it outranks the solution design, which is downstream of it — where the design said fifteen, the design is what changed. The reasoning is worth keeping because it is a product judgement rather than a threshold preference: the site exists for villagers describing ordinary small jobs, and *"Fixed gate"* is a complete and honest answer to *"what did they do for you?"*. Fifteen turned that villager away at the last step, and it also buried the sheet's `CHECK THIS` signal under rows that were merely brief rather than suspect. Seven still catches the accidental `ok`, `yes` or stray keypress. **Both surfaces moved together deliberately** — the page and the sheet asking different questions of the same text would be a defect waiting to be discovered.

**Alternatives considered:** removing the check entirely — not what he ruled, and it would let an empty-ish note through. Changing only the page and leaving the sheet at fifteen — rejected; the sheet would then flag rows the page had just accepted.

**[DECISION]** The refusal message was rewritten, not merely the number.

**Rationale:** *"Please write a few more words — what did they do for you?"* stopped being true the moment the limit moved. Seven characters is about two words, not "a few more", and the old text never told the villager what would be enough — it asked them to guess, which for an elderly reader who has just been refused is the point at which they give up. The new text, **"Please add a word or two more — even "Fixed gate" is enough."**, names a length they can picture and uses the owner's own example so the page and his ruling say the same thing. A message that survives a threshold change unaltered is usually a message that was never specific enough.

**[DECISION]** The change was entered as **new build plan row 4.5** rather than folded into the closed row 4.1.

**Rationale:** 4.1 is `done` and its evidence describes behaviour observed on a particular day. This alters shipped behaviour on a rendered surface, so it needs its own evidence from the served page — which it now has — rather than quietly invalidating a closed row's record. 4.1's own wording says "a too-short entry shows a plain-text error" without naming a number, so it remains true; but the principle holds regardless. `[PATTERN CANDIDATE: behaviour-change-gets-a-row]`

**[DECISION]** Trade-name normalisation is **measured, recommended, and deliberately NOT implemented** — it awaits the owner's ruling.

**Rationale:** the question left open by the previous session was how close two spellings must be before they merge. **Now measured** (Layer 3): whitespace is forgiven, capitalisation is not, so `Plumber` and `plumber` produce two headings while `Plumber ` and ` Plumber` merge correctly. That makes the risk concrete rather than theoretical, and it lands precisely where the owner works — he retypes the trade when copying a row to Published. The case for lower-casing the grouping key is therefore strong, and the fix is small. It is not implemented here for two reasons: this prompt asked for a recommendation, and it is a behaviour change on a closed row (2.1) that would need its own row and its own served-page evidence, exactly as 4.5 did. **Recommended shape if he rules for it:** group by the lower-cased trade while displaying the first spelling encountered, so `Plumber`/`plumber` merge under one heading without changing what anyone sees. The mitigation already in place is procedural — `docs/PROCESS-seeding-and-launch-dunchi-trader.md` tells him to copy trade names from its list rather than retype them. `[PATTERN CANDIDATE: free-text-key-needs-a-vocabulary-check]`

### 2026-09-18 — D7a, publishing becomes automatic; D6a, trades group ignoring capitals

**[DECISION] D7a — publishing is automatic. The manual review gate is removed.**

**Owner's ruling 2026-09-18 (~19:20Z), verbatim:** *"OK i am not doing this by hand. I said as a design principle this will be no admin. Make it automatic from the form responses. I will routinely check the data and overwrite whatever looks messy. That is easier and can be done in batch. In fact we can write a script for that can we not?"*

**Rationale:** his ruling, and it restates a design principle that predates this project's build — no admin. It outranks the solution design, which is downstream of it, so §7.3 changed rather than the ruling being argued with. The practical case is his own: a sweep of a tidy list, done in batch when it suits him, is less work and more likely to actually happen than a per-row approval that accumulates a backlog and eventually gets skipped. An approval step nobody performs is worse than no approval step, because the documents claim a protection that is not being applied.

**The consequence, recorded factually rather than as an objection, because it is the thing a future session must not discover by surprise:** the Google Form is open to anyone with the link, and what it collects now reaches the live site **with no human in between**. The protection is no longer an approval; it is three hard checks in `apps-script/Publish.gs` plus the owner's batch sweep. A submission passing all three is visible to the village within the republish lag. The directory's *content* is therefore as open as the form is. Its *shape* — ids, columns, which tab the site reads — remains closed to everyone but the account holder, and the site still cannot be written to from the internet.

**What the three hard checks are, and why each:** no usable phone number, defined as not exactly eleven digits after normalisation — a mistyped number sends a villager to a stranger, which is worse than an absent listing, and eleven is what every genuine UK number on this project measures and what the owner put on the form itself. An email address or a web link in any field — a villager has no reason to type either, an advertiser does. A phone already on Published — a second row would split one person's recommendations across two ids. All three publish `hidden` rather than rejecting, so nothing a villager sent is ever lost.

**Alternatives considered:** keeping the dropdown as a gate and automating only the copy — rejected, it still requires him to act on every row, which is the thing he ruled out. Rejecting bad rows outright instead of hiding them — rejected, a villager's submission would vanish with no record and no way to recover a genuine one behind a mistyped digit.

**[DECISION]** `Publish.gs` is a **separate file from `Code.gs`, and the two must stay separate.**

**Rationale:** they have opposite security properties and merging them would destroy both. `Code.gs` is on the internet, reachable by anyone with the URL, and is deliberately bounded so the worst case is junk in the Votes tab — it cannot read, cannot touch Published, and cannot be pointed at another tab. `Publish.gs` writes to Published, which is the directory itself, and is therefore **account-only**: an installable trigger and a menu item, never deployed as a web app, never given a URL, unreachable from the internet. Putting the Published-writing code in the file that is exposed to the internet would put the directory one deployment mistake away from being writable by strangers. Both files say so in their own headers so that a future session reading either one sees the constraint without needing this entry.

**[DECISION] D6a — trades group ignoring capitals, displaying the first spelling encountered.**

**Rationale:** his ruling on the defect measured in the previous session. Without it a row typed `plumber` created a second tile beside `Plumber` with one person under it, invisible to anyone who tapped the first — silent, since nothing errors. It matters more now than it did yesterday: under D7a the trade text arrives straight from a villager's form answer, so free text entered under "Other" reaches Published without anyone tidying it first. Displaying the first spelling met, rather than lower-casing or title-casing the label, keeps ordinary words on screen instead of showing the village a normalised key.

**A limit worth stating:** `Publish.gs` tidies spacing and capitalisation on the way in, but it **cannot map meaning** — it does not know that "boiler" is Heating or "sparky" is Electrician, and a synonym list would be guesswork about what a villager meant. Free text under "Other" therefore still creates a new tile with that exact wording, and the owner's sweep is what catches it. That is written into the script's own comments so nobody later assumes the normalisation is cleverer than it is.

### 2026-09-18 — D8a, the site keeps the promise the form already made

**[DECISION] D8a — the villager's words and the villager's name are carried through to the site.**

**Rationale, in the owner's own framing: the form already promises this and the site was not keeping it.** The form's last question asks for the villager's name *"(if you want to share it on the website) so a fellow villager might reach out to you if they have any questions"*. That sentence is a promise to the person filling it in — their name will appear, and neighbours may contact them about it. Nothing carried it anywhere. Column H, the villager's description of the work, was dropped in the same way. So the site listed phone numbers while the mission calls it *"a public web app listing local tradespeople recommended by villagers"*; **"recommended by villagers" is the load-bearing phrase and nothing on the page carried a villager's voice.**

**Measured rather than inferred, because it is worse than it looks:** recommendations posted through the site's own panel were never read back by anybody. `VOTES` is initialised empty on every page load, written only by the panel and read only when drawing a card — so a villager's words lived in their own browser for one visit and then vanished. No villager has ever seen another villager's words on this site. That is now true only of panel-posted recommendations; those arriving through the form reach everybody, and the remaining gap is recorded as an outstanding item rather than being quietly left.

**[DECISION]** A duplicate submission becomes a **second recommendation**, not a hard failure.

**Rationale:** this was the sharpest finding. The previous session's own test table shows a duplicate being skipped and the second villager's words written nowhere at all — not to Published, not anywhere, with no record that anything had been sent. Yet a second person recommending the same tradesperson **is the product working**: it is the village agreeing. Treating it as noise threw away the most valuable thing the form collects. So a matching normalised phone now appends the words and the name to the existing person's row, preserving what is there and touching nothing else on it. The two remaining hard failures are unchanged.

**[DECISION]** Several recommendations share one cell, separated by a **blank line**, in two parallel columns.

**Rationale:** a delimiter like `|` or `;` can appear inside a villager's own words, and a separator that occurs in the data is a corruption waiting to happen. A blank line cannot appear inside a single form answer. **Verified rather than assumed:** the shape was tested against `app.js`'s own `parseCSV` — a cell containing a comma, an escaped quotation mark and two line breaks round-trips into exactly three recommendations, because that parser is a proper state machine that accumulates newlines inside quotes. Two parallel columns keep the nth name with the nth recommendation without inventing a record format inside a spreadsheet cell. **At ten recommendations** the cell is unwieldy to read in the sheet but nothing breaks — Google's limit is 50,000 characters — and the site shows them tidily; the practical limit is the owner's patience, and he can prune by hand since it is plain text.

**[DECISION]** A popular card shows **two recommendations, then a button**.

**Rationale:** at the largest text size on a 320px phone a single recommendation already fills much of the screen. Showing every one would bury the Call button — the one thing the card exists for — under a wall of text, for exactly the audience least able to scroll past it. Two in full plus a full-width *"Read N more recommendations"* button keeps the card's shape constant however popular somebody becomes, and hides nothing: it is one tap on a large target. Measured at both 20px and 29px with three recommendations: 0px overflow either way.

---

### 2026-09-18 — Conversation close-down: the five rulings, with their decision IDs

Recorded at close-down so each ruling carries its estate decision ID alongside the owner's own wording. The rationale for each is already written up in the dated Layer 5 entries above, made at the time the ruling was applied; this entry exists to give them their IDs and to catch the one that never reached a document.

**[DECISION] D4a-9USH-18092026** — the minimum length for a recommendation becomes **seven characters**, not removed. Owner verbatim: *"I think we can change the check to 7 characters. As they can't really put in a sentence without more than that "Fixed Gate" is about as short as you can get."* Applied to the sheet verdict rule and the site's recommend panel; the solution design was corrected to match, since his statement outranks it. Rejected: removing the minimum entirely (**D4b**).

**[DECISION] D5c-9USH-18092026** — **no fuzzy search and no everyday-words list.** Effort goes into the tile names being plain and complete instead. Rejected: a built-in forgiving matcher, and vendoring a fuzzy-search library (**D5b**).

**Recorded here for the first time.** This ruling was made in conversation and **never reached any document or any line of code** — a search of the repository for "fuzzy", "forgiving match" and "everyday words" returns nothing. Had this close-down not been written, the reasoning would have been lost and a future session could have proposed exactly the thing that was rejected. It also carries a standing consequence worth stating: because there is no forgiving matcher, **the search box matches what is actually written in the sheet**, so the tile names and trade spellings are doing the work a fuzzy matcher would otherwise do. That is the argument for keeping them plain.

**[DECISION] D6a-9USH-18092026** — the site **groups trades ignoring capitals**, displaying the first spelling seen. Measured cause: capitals split a tile in two while whitespace already merged. Rejected: leaving grouping case-sensitive (**D6b**).

**[DECISION] D7a-9USH-18092026** — **publishing becomes automatic**, with hard failures landing `hidden` rather than live: no usable phone number, an email address or web link in an identity field, and — **superseded by D8a** — a duplicate. Owner verbatim: *"OK i am not doing this by hand. I said as a design principle this will be no admin. Make it automatic from the form responses. I will routinely check the data and overwrite whatever looks messy. That is easier and can be done in batch. In fact we can write a script for that can we not?"* This reverses the manual copy-to-Published approval gate; the design was corrected to match. Rejected: publishing everything with no checks at all (**D7b**).

**[DECISION] D8a-9USH-18092026** — **villagers' words and names reach the site.** Published gains columns `K` and `L`; the publisher writes responses columns `H` and `I` into them; a duplicate submission **appends** to the person already listed rather than being discarded. Raised by the owner noticing the publisher ignored column `I`, **whose own question text promises the villager their name appears on the website**. Rejected: a second published feed from the Votes tab (**D8b**).

**[DECISION] D2-9USH-18092026** — planning-tracker left running and untouched; this conversation never sent to it.

---

### 2026-09-19 — The recommend button is repointed at the village list, and the undiagnosed defect is measured

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f). Successor to `cse_01HkJGChdg9xjNavfnTe9USH`, which is closed.

**[DECISION] D1b-6G7f-19092026** — the on-site **"I recommend them too" panel feeds the PUBLISHED tab, not the Votes tab.** Ruled by the owner.

**Rationale, in the form it was put to him:** nothing on the site reads Votes, so a recommendation landing there is invisible to villagers. The site fetches exactly one feed — the published CSV of the Published tab — and a villager who tapped the button, typed a few words and was thanked had those words written somewhere no neighbour would ever see. Published is the path the automatic publisher (row 5.2) already proves works, so the panel now joins it rather than needing a second mechanism invented for it.

**Alternatives considered and declined:** **D1a** — keep writing to Votes and teach the publisher to read that tab as well, which means a second scan on every submission and a second place a villager's words can be stranded. **D1c** — retire the panel, which would remove the only way a villager can second somebody **already listed** without filling in the whole form again; the form is the heavier path and this audience is elderly.

**How it was built, and this is the part that matters for anyone changing it later:** the endpoint calls `appendRecommendation()` in `apps-script/Publish.gs` — **the same function the publisher uses when a duplicate form submission turns out to be a second recommendation.** One function, not a second copy. Both routes therefore store a villager's words identically, and a future change to how recommendations are separated, deduplicated or attributed cannot apply to one route and miss the other. `apps-script/test-endpoint.js` test 18 asserts this by substituting a sentinel for the shared function and proving the endpoint calls it.

**[DECISION] D2-6G7f-19092026** — the endpoint's power is **bounded to APPENDING a recommendation to an EXISTING, non-hidden trader id.** Taken by Claude.ai under standing authority; implemented and tested this session.

**Rationale:** repointing the endpoint at Published moved it from a tab nobody read to the tab the whole village reads, which is a genuine widening of what a stranger can reach. The bound exists so that the widening is exactly one capability and not a category. It may not create a row, assign or reuse an id, write any column other than `K` `recommendations` and `L` `recommended_by`, or touch `I` and `J` — the owner's `ARRAYFORMULA` helpers, which a write destroys and which this project has already lost once. An unknown or hidden id is refused and logged, with no write.

**The test of whether the bound is the right one:** the endpoint's exposure now equals the open Google Form's, and is not wider. Anybody who finds the form can already submit words about somebody already listed, and `Publish.gs` appends them to exactly these two cells. Refusing the change would not have closed a door — it would have left the site's own button writing to a tab nobody read.

**What was given up, recorded rather than glossed:** the old endpoint had a property this one cannot have — it could not affect anything a villager sees, at all. That is gone. Solution design §8.2 was rewritten rather than edited, with the five superseded bullets struck through and preserved, because two of them stopped being true and a reader must see the exposure widened rather than find it quietly replaced. Risk-register row 8 moved from Low to Low–Medium for the same reason.

**[DECISION]** Row 4.6's landing target moved from Votes to Published, **without its text being edited.** The row reads "a short recommendation reaches the Votes tab", which is now the wrong destination — but the row's *outcome* ("no recommendation is accepted on screen and dropped in transit") is unchanged and still the thing being delivered. Rewriting a row's wording after the fact would make the plan disagree with the record of what was asked for. The change of destination is recorded here instead, which is where a reader is sent by the row's own history.

**[DECISION]** The panel's name field keeps the Google Form's own wording and **stays optional.** Under D1b the name reaches Published `L` and renders publicly on the card (row 3.5), so a label reading only "Your name" asks for something without saying where it goes. The form's question already says it. It is not made required, because the form's own "(if you want to share it on the website)" makes it optional and the site must not ask more of a villager than the form does — a blank becomes "a villager", as it already did.

**[PATTERN CANDIDATE: measure-the-deployment-not-the-code]** The defect that cost this project a day was invisible to every check it had. The code was correct and committed, the URL was correct and served, the request shape was correct — and the deployment behind the URL was running neither entry point. Nothing short of *sending a real request and reading the reply* could have found it. The generalisable move is that **a deployed endpoint needs a cheap, human-readable liveness reply that fails visibly** — `doGet` here returns one plain sentence, so "open the address in a browser" is now a ten-second test with two unmistakable outcomes. Any project with a deploy-by-paste step has this exposure.

**[PATTERN CANDIDATE: measure-the-alternative-before-preferring-it]** The long form label was going to be split into a label plus a hint, on the reasoning that nine lines of text above a field is bad for an elderly audience. Measured, the split was **worse** — 542px of scrolling to reach the send button versus 289px — because a separate note costs its own margins. The baseline measurement mattered even more: the button was **already** 299px below the fold before any change, so the thing that looked like a regression introduced by this session was pre-existing shipped behaviour. Neither fact was available by reasoning.

---

---

# LAYER 6 — SESSION HISTORY

### 2026-09-18T13:11:28Z — Project scaffolding
**Source:** project-admin API (automated)

Project scaffolded via `POST /api/projects/create`:
- Directory created at [PATH] `~/projects/dunchi-trader/`
- `CLAUDE.md` written to project root
- `docs/HANDOVER-dunchi-trader.md` created (this file)
- Git repo initialised, initial commit made
- Private GitHub repo created at [URL] `https://github.com/gsamwell-lang/dunchi-trader`
- Project registered in project-admin config

### 2026-09-18T13:49:45Z — Design and planning: handover, solution design and build plan
**Source:** Claude Code
**Started:** 2026-09-18T13:42:54Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
The full context transfer brief for the Dunchideock village trades directory, carrying two overriding constraints (the project is standalone and must not depend on any other organisation's systems; the site must be inheritable by whoever holds the two account logins, which forbids any build step), the repository topology, the product shape, the fourteen decisions, the options rejected, the vote mechanism, the four-layer validation and de-duplication design, the binding accessibility rules with their sources, the text-size control and its two fixed bugs, the overflow rules, the five outstanding operator actions, and the owner's requirement as stated verbatim. Task: produce three documents — the handover, the solution design and the build plan `PLAN-DUNCHI-TRADER-V1` with seven steps — writing no application code.

**What was done:**

Verified the repository and the live assets before writing anything:
- Confirmed the repo was clean at `d00e493` on `master` with a single remote.
- Found that `docs/HANDOVER-dunchi-trader.md` **already existed**, contrary to the brief's statement that the repo held no documents. It carried a scaffolded Layer 5 decision and a Layer 6 entry. Rather than create a second handover, this session **updated it in place**, preserving the existing Layer 5 and Layer 6 entries verbatim and marking every superseded Layer 1 value.
- Checked the live site, the live repo, the form and the published CSV by HTTP status.

`docs/HANDOVER-dunchi-trader.md` — updated in place. All six layers populated. Layer 1 rewritten with the accounts, URLs, topology, architecture summary, schema, publishing warnings and outstanding items, with every scaffolded value struck through and marked SUPERSEDED rather than overwritten. Layer 2 given the flow diagram, stack, file list and non-obvious behaviour. Layer 3 given five bug entries and the gotchas. Layer 4 given the seven operator actions and the open CORS question. Layer 5 extended with decisions 1–17 and the rejected options table, leaving the scaffolded entry untouched. Layer 6 given this entry.

Three decisions were added beyond the fourteen in the brief, each recorded with its rationale: **12a** (the open votes endpoint is accepted — numbered so the security trade-off is findable), **15** (no email collection — numbered because the live form contradicts it), **16** (the standalone requirement) and **17** (the metadata correction). Decision 17 exists because the scaffolded metadata block named another organisation's server and owner email, which the standalone constraint forbids; the values were corrected and the old ones left visible.

`docs/SOLUTION-DESIGN-dunchi-trader.md` — created. Thirteen sections covering the required list, plus the specifically requested additions: the one-way data flow and why the site can never alter a listing (§8.1); the vote path and the open-endpoint trade-off stated plainly rather than glossed (§8.2); the accessibility rules as binding constraints with all five sources cited (§9); a dedicated INHERITANCE section (§10) whose §10.3 lists what is permanently forbidden and gives the one-sentence test that decides any future proposal; and a section listing what the project will not do, with a reason against each (§11).

`docs/BUILD-PLAN-dunchi-trader.md` — created. Plan ID `PLAN-DUNCHI-TRADER-V1`, seven steps, 90 sub-tasks, total effort 231. Every sub-task carries a status, an integer effort and a checkable done-when. Step 1 states explicitly that it satisfies the browser-reachability dependency for every later step. Step 2 carries the empty-sheet and fetch-failed sub-tasks, neither of which may produce a blank page. Step 3 records the authority precedence and carries the two bug guards as sub-tasks 3.8 and 3.9. Step 4 includes committing the Apps Script source. Step 6 sub-task 6.9 verifies the inheritance claim by walking the restore document rather than asserting it. Step 7 carries the 12–15 tradespeople across 6+ trades launch target.

**A material discovery was made by measurement**, which contradicts the brief and changes the build order: the published CSV the site is meant to read is currently pointed at the **raw Form responses tab**, not the curated Published tab. Its header is the form's question text. This independently confirmed two of the listed operator actions (email collection is on; the trade question exists) and surfaced a **sixth, previously unlisted** one (a star-rating question exists on the form, contradicting decision 3). Build Plan sub-task 2.1 is therefore marked `blocked`, and the CSV republishing is recorded as the CRITICAL blocking outstanding item.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| `git status --porcelain` at session start | clean | clean | PASS |
| Live site reachable — `curl` on `https://dunchitrader-collab.github.io` | HTTP 200 | HTTP 200, default Jekyll page | PASS |
| Live repo reachable | HTTP 200 | HTTP 200 | PASS |
| Google Form reachable | HTTP 200 | HTTP 200 | PASS |
| Published CSV reachable | HTTP 200, `text/csv` | HTTP 200, `text/csv`, 636 bytes | PASS |
| Published CSV serves the Published schema | header `id, first_name, ...` | header is the raw form question text | **FAIL — recorded as CRITICAL** |
| Build plan validates | exit 0 | exit 0 | PASS |
| Build plan sub-task count recognised | greater than 0 | 90 sub-tasks, 7 steps, effort 231 | PASS |
| No external organisation references in output | zero matches | zero matches | PASS |
| Three documents at their required paths | all present | all present | PASS |
| Handover heading preservation | no heading removed | no heading removed | PASS |

**What was not tested:**

- **The Google Sheet itself was not opened.** It requires the Google account login, which this session does not hold. The Published tab's actual header, the presence of the Votes tab, and whether the two form validation rules were added are all therefore **unverified**. They are recorded as outstanding operator actions, not as facts.
- **The Apps Script CORS behaviour is REPORTED, not measured.** No Apps Script exists yet. The expectation that `mode: 'no-cors'` is required is written down as an expectation and Build Plan sub-task 4.9 measures it.
- **No application code was written or run**, by instruction. Every front-end claim in these documents is a design intent to be verified during the build, not a measured result.
- **The wireframe was not reviewed** — `design/wireframe-dunchi-trader.html` does not exist in the repo yet and arrives in a separate prompt.
- **Nothing was pushed to the live repository.** The `collab` remote is not yet configured; that is Build Plan sub-task 1.3.

**Commits:**
Recorded in the commit that carries the code and document work of this session. The commit adding this handover entry is not recorded here, as that hash does not exist at the time of writing.

**Finished:** 2026-09-18T13:49:45Z

**End state:**

Design and planning are complete. Three documents exist in `docs/`: the handover, the solution design and the build plan. No application code has been written and nothing has been deployed. The live site still serves the default Jekyll placeholder.

The build cannot start on step 2 until the owner republishes the CSV from the Published tab — that is the CRITICAL blocking item and it was found by measurement this session, not supplied by the brief. Step 1 can begin immediately and is not blocked.

Seven operator actions sit with the owner, all inside Google. Four of the seven were confirmed present by measurement this session; three remain unverified because they require the Google login.

### 2026-09-18T14:02:20Z — Build plan rejected and rewritten to outcomes
**Source:** Claude Code
**Started:** 2026-09-18T13:59:06Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
The owner rejected `PLAN-DUNCHI-TRADER-V1` — 90 sub-tasks and 231 effort — carrying his three verbatim quotes on its size, its granular and unusual "when" statements, and its level of detail being below the key outcomes required. The prompt set out four diagnosed failures (rows were tasks and acceptance criteria rather than outcomes; the plan duplicated the solution design; the mandated `Human: "When..."` cell was filled with aphorisms; the owner's own actions were counted as build work) and nine rules for the rewrite: a row is an outcome, 15–20 rows and 55–75 effort, the "When" cell is the decomposition test, the Outcome cell must add information, detail lives in the done-when and the design, the wireframe is the implementation not a specification, Gavin's own actions are not plan rows, the Plan ID and Requirement block and seven steps and blocked CSV status and browser-reachability point must survive, and numbering restarts for this wholesale replacement. Tasks: rewrite the plan, update the handover with a rejection decision and the moved launch actions and a session entry, and add to the solution design any rule being removed from the plan that was not already recorded there.

**What was done:**

**Loss audit first, before writing anything.** The 90 old rows were extracted from `HEAD` and each rule they carried was pattern-matched against `docs/SOLUTION-DESIGN-dunchi-trader.md`, to find what would be lost by merging. Fifty of the fifty-three rules checked were already present in the design. **Three were not**, and all three were read-path robustness rules that had only ever existed as plan rows.

`docs/SOLUTION-DESIGN-dunchi-trader.md` — a new **§6.1.1 "Reading the CSV — three binding rules"** was added, carrying only those three: columns matched by header name never by position; the parser must handle quoted fields with embedded commas and newlines; an unexpected or malformed header degrades to the failure state rather than rendering. Each is stated with its reason. No existing design content was altered, reworded or removed.

`docs/BUILD-PLAN-dunchi-trader.md` — rewritten wholly. **90 sub-tasks and 231 effort became 14 and 75.** The seven steps, the Plan ID, the Requirement as stated block (diffed identical to the old file, verbatim), the `blocked` status on the CSV feed and the browser-reachability point in step 1 all survive. A "How to read this plan" section now states the outcome-not-task test, that the design says HOW while the plan says WHAT IS DELIVERED, and that the owner's own actions are not rows. An "Authority precedence" section records that the wireframe is a working reviewed page and step 3 is port-then-verify, not a feature-by-feature rebuild.

Every `Human` cell was rewritten to name a real person at a real moment — a villager whose gutter is overflowing and who knows no roofers by name, a 78-year-old opening the link for the first time, Gavin opening the Votes tab on a Sunday evening, a villager tapping Add when nothing visibly happens. None is a proverb, a justification or a restatement of its Machine cell.

**Two corrections were made during the rewrite rather than being left to stand.** The first draft came in at 15 rows and 79 effort, four over the bound. Because shaving effort was explicitly forbidden, the fix was structural: step 6's two rows — the README and the runbook-plus-walk — are one outcome, "the inheritance package works", and were merged into a single row at 9. That removed a row and 4 effort. Seven `Human` sentences also breached a 20-word cap and were tightened without losing their specific moment.

`docs/HANDOVER-dunchi-trader.md` — **decision 18** added to Layer 5, carrying the owner's three quotes verbatim, the four diagnosed failures with the actual offending row text quoted, the binding outcome test, and the before-and-after figures. Two rows were added to the Options Rejected table. A new **"Launch Prerequisites — the owner's actions, not the build's"** section in Layer 4 now carries the seeding, the WhatsApp post and the post-launch check, which were previously plan rows 7.1–7.4, 7.11 and 7.12. A stale cross-reference to the now-deleted sub-task 4.9 was found and superseded to 4.3 rather than left dangling.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| HEAD matches the SHA the prompt was composed against | `a07f13f` | `a07f13f91b92101aa65513cb71b5a5e27096b34e` | PASS |
| Working tree clean at start | clean | clean | PASS |
| Loss audit — old rules present in the design | all accounted for | 50 of 53 present; 3 missing, added to §6.1.1 | PASS |
| Build plan validates | exit 0 | exit 0 | PASS |
| Row count within 15–20 | 15–20 | **14** | **BELOW BOUND — reported, not hidden** |
| Effort within 55–75 | 55–75 | **75** | PASS |
| Row count and effort recomputed independently of the validator | agree | rows 14 = 14, effort 75 = 75 | PASS |
| Every `Human` cell within the 20-word cap | all pass | all 14 pass | PASS |
| Every `Human` cell names a specific person and moment | no aphorisms | all 14 specific | PASS |
| Requirement as stated block preserved verbatim | byte-identical | diff reports identical | PASS |
| Plan ID unchanged | `PLAN-DUNCHI-TRADER-V1` | unchanged | PASS |
| Seven steps retained | 7 | 7 | PASS |
| CSV feed row still `blocked` | blocked | blocked | PASS |
| Browser-reachability point retained in step 1 | present | present | PASS |
| Append-only layers unaltered | zero deletions from Layers 5 and 6 | zero | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Timestamps regenerated and matching | both `date -u` this session | both `2026-09-18T14:02:20Z` | PASS |
| Layer 7 ban | none | none | PASS |
| Zero live external-organisation references | zero | zero | PASS |
| Stale sub-task cross-references in the handover | none dangling | 4.9 found, superseded to 4.3 | PASS |

**What was not tested:**

- **No application code was written or run.** This remains a planning session. Every row in the plan is an intended outcome, not a measured one.
- **The Google Sheet was still not opened** — it needs the Google login, which this session does not hold. The Published tab header, the Votes tab and the form validation rules remain unverified.
- **The wireframe was still not reviewed.** `design/wireframe-dunchi-trader.html` is not yet in the repo. The plan now treats it as the implementation on the strength of the prompt's statement that it is a working, reviewed page; **this session did not see it.**
- **The three rules added to design §6.1.1 are design intent**, not measured behaviour. No parser exists yet.
- **Effort figures are estimates.** The 75 total is a judgement about grain, not a measurement.

**Commits:**
Recorded in the commit carrying this session's document work. The commit adding this handover entry is not recorded here, as that hash does not exist at the time of writing.

**Finished:** 2026-09-18T14:02:20Z

**End state:**

`PLAN-DUNCHI-TRADER-V1` now carries 14 outcome-shaped sub-tasks totalling 75 effort across the same seven steps, and validates cleanly. The solution design carries the three read-path rules that previously existed only as plan rows, so nothing agreed was lost in the shrink. The handover records why the first plan was rejected, in the owner's own words, and now holds the launch actions that are his rather than the build's.

**One reported deviation:** the plan landed at 14 rows against a stated 15–20 band. The instruction to merge rather than shave took precedence, and step 6's README and runbook are genuinely one outcome. Splitting a row back apart purely to reach 15 would reintroduce the decomposition the rewrite exists to remove. Effort is at 75, the top of its band.

Nothing else changed. The CSV feed remains the CRITICAL blocker on step 2, and no code has been written.

### 2026-09-18T14:13:45Z — Wireframe landed; site scaffold built; live push blocked
**Source:** Claude Code
**Started:** 2026-09-18T14:09:35Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
First of four prompts to get the site built. Task 1: create `design/wireframe-dunchi-trader.html` containing the reviewed wireframe source exactly as supplied, wrapped only in a minimal standalone document skeleton, with no reformatting, reindenting, linting or "improving" — it is a reviewed artefact and the layout authority for step 3, and two things in it are deliberate and must not be "fixed" (the `.sizer` strip sized in fixed px, and the header not being sticky). Task 2: deliver build plan sub-tasks 1.1 and 1.2, cited not restated, with the placeholder `index.html` kept a placeholder rather than a wireframe port, `.nojekyll` at the root proven by comparing served bytes against committed bytes, and an instruction to STOP and report 1.2 blocked rather than invent a workaround if no credential for the dunchitrader-collab account is available. Do not start step 2 or step 3. Do not mark any row done on the strength of a local check.

**What was done:**

**Credential availability was checked first**, before any work that depended on it. The GitHub API reports `"push": false` on `dunchitrader-collab/dunchitrader-collab.github.io` for **both** credentials available to this session (`gsamwell-lang` and `gsamwell-personal`). That finding shaped the whole session: everything buildable was built, and the two rows were reported blocked rather than claimed.

`design/wireframe-dunchi-trader.html` — created, 916 lines, 26,513 bytes. The supplied source is carried **verbatim**. The only addition is the six-line document skeleton the prompt specified: doctype, `<html lang="en">`, `<head>` with charset and viewport, and `<body>`. Nothing was reformatted, reindented, linted or corrected.

Fidelity was **verified rather than assumed**. Both deliberate anti-patterns were confirmed present: the `.sizer` strip is in fixed `px` throughout (`width:48px`, `height:44px`, `gap:6px`, `padding:6px 0 8px`, `border-radius:6px`, `#s1/#s2/#s3` at 15/20/26px), and a search for `position:sticky` returns **zero** matches. The overflow fix `minmax(min(100%, 15rem), 1fr)` is present, and the two-line Call button spans are present in the JS. Tabs: 0. Trailing-whitespace lines: 0. Unicode preserved — 3 em-dashes, 2 smart quotes, 3 middots, 1 left arrow. The document parses without exception and every tag pair balances.

`index.html`, `style.css`, `app.js` — created as **placeholders**. `index.html` carries the site title and the small print line and nothing else; the wireframe was deliberately **not** ported into it, since that is row 3.1 in the next prompt. `style.css` and `app.js` are stubs whose comments say so and name the rows that fill them.

`.nojekyll` — created empty at the repo root. This is a real change, not a precaution: the GitHub Pages API reports the live repo's `build_type` as `"legacy"`, meaning Jekyll is currently processing it, and the live URL serves markup containing `Jekyll v3.10.0`.

`README.md` — rewritten from its one-line placeholder to carry what row 1.2 requires: the two-repository topology, the publishing procedure including the `master:main` branch-name difference and the warning that it needs a dunchitrader-collab login, how to edit directly in the GitHub web editor, and the no-build-step rule with the reason `.nojekyll` must not be deleted. The full non-technical README remains row 6.1.

`docs/BUILD-PLAN-dunchi-trader.md` — rows 1.1 and 1.2 set to `blocked` in both the canonical and satellite tables, each with a note recording exactly what was delivered and exactly what is missing.

`docs/HANDOVER-dunchi-trader.md` — a `[BUG]` entry for the credential blocker with its diagnosis command; the credential blocker added as the **first CRITICAL** Layer 1 outstanding item; Next Action superseded to lead with it; the Key Scripts table updated to distinguish placeholders from real files and to record the two anti-patterns that must survive the port.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| HEAD matches the SHA the prompt was composed against | `d6f897b` | `d6f897bfc99d…` | PASS |
| Working tree clean at start, 0 ahead / 0 behind | clean | clean | PASS |
| Wireframe: deliberate anti-pattern 1, `.sizer` in fixed px | present | all 9 px values present | PASS |
| Wireframe: deliberate anti-pattern 2, header not sticky | zero matches | 0 matches for `position:sticky` | PASS |
| Wireframe: overflow fix `minmax(min(100%, 15rem), 1fr)` | present | present, line 201 | PASS |
| Wireframe: two-line Call button spans | present | present, lines 666–667 | PASS |
| Wireframe: no tabs introduced | 0 | 0 | PASS |
| Wireframe: no trailing whitespace introduced | 0 | 0 | PASS |
| Wireframe: Unicode preserved | em-dash, quotes, middot, arrow | 3, 2, 3, 1 | PASS |
| Wireframe: HTML parses and tags balance | no error | parses; html/head/body/div/script/style all balanced | PASS |
| Wireframe: doctype first | true | true | PASS |
| `index.html` is a placeholder, not a wireframe port | placeholder | title + small print only | PASS |
| Credential scan over the whole tree | zero matches | zero | PASS |
| No `.env`, `.pem`, `.key` or `id_rsa` files | none | none | PASS |
| All four files serve over HTTP locally | 200 | 200 each | PASS |
| Served bytes identical to committed bytes (**local**) | identical | all 4 identical by sha256 | PASS |
| Push to `origin` | succeeds | `d6f897b..c1a4f78` | PASS |
| `collab` remote fetches (read access) | succeeds | `[new branch] main` | PASS |
| **Push to `collab` (write access)** | succeeds | **HTTP 403, permission denied** | **FAIL — blocker** |
| **Live URL serves our committed `index.html`** | byte-identical | **differs; still `Jekyll v3.10.0`** | **FAIL — consequence of the above** |
| Build plan validates after the row updates | exit 0 | exit 0, 14 sub-tasks, 75 effort | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Append-only layers unaltered | zero L5/L6 deletions | zero | PASS |

**What was not tested:**

- **The phone sighting could not be done and is not claimed.** Row 1.1's done-when requires the page rendering on a phone and on a computer. This session has no phone. It is recorded as outstanding for Gavin, and row 1.1 would remain short of done on that ground alone even if the push were unblocked.
- **The served-bytes proof was run locally, not against GitHub Pages.** The local check confirms the files are sound; it does **not** satisfy row 1.1, whose done-when is explicitly about the live URL. The live check was run and **failed** — correctly, because the files are not there yet.
- **The wireframe was not opened in a browser.** It was validated structurally — parse, tag balance, encoding, the specific values that matter — but nobody has looked at it rendered. Whether it *looks* right is for Gavin.
- **`.nojekyll` has not been proven to work**, because that can only be observed once the file is live. That Jekyll is currently active was measured; that `.nojekyll` stops it is expected, not yet demonstrated.
- **No CSS or JS behaviour was exercised.** The text-size control, autocomplete and vote panel in the wireframe were not run.

**Commits:**
- `c1a4f78` — `feat: land reviewed wireframe and placeholder site scaffold`

**Finished:** 2026-09-18T14:13:45Z

**End state:**

The wireframe is landed verbatim and is the layout authority for step 3. The site scaffold — placeholder page, stylesheet, script stub and `.nojekyll` — is committed and pushed to `origin` at `c1a4f78`. The `collab` remote is configured and can read the live repository.

**Neither row 1.1 nor row 1.2 is done, and neither is claimed.** Both are `blocked` on one missing thing: a push credential for the `dunchitrader-collab` GitHub account. Everything else on both rows is delivered. The live site still serves its original Jekyll page, which was measured rather than assumed.

This blocker is more serious than one step. Because a change counts as built only when it is visible at the URL Gavin opens, **no build plan row can be completed until it is resolved** — including the step 3 work in the next prompt, which can be written but not verified.

### 2026-09-18T14:26:12Z — Site published live; row 1.2 closed
**Source:** Claude Code
**Started:** 2026-09-18T14:24:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
The blocker reported last session is cleared — Gavin added `gsamwell-personal` as a collaborator with Write access on `dunchitrader-collab/dunchitrader-collab.github.io` and the invitation was accepted. A lean prompt clearing plan sub-tasks 1.1 and 1.2 and nothing else: confirm write access is real before relying on it and STOP if `push` is still false rather than retrying in a loop or inventing a workaround; push to the collab remote remembering that the branch names differ (`master:main`); then verify against the live URL, which is the only definition of built that counts — 200, serving our `index.html` not the Jekyll placeholder, served bytes sha256-identical to the committed file, the string `Jekyll v3.10.0` gone, allowing for Pages taking a minute or two and re-checking rather than concluding from the first read. Then update the plan: row 1.2 can close done, but row 1.1 requires a phone sighting that this session cannot do, so leave it short of done on that ground alone and do not close it on Claude's own reading. Update the handover, closing the credential blocker in Layer 3 with what actually fixed it.

**What was done:**

**The permission check passed but the push still failed, and diagnosing that was most of the session.** `gh api …/permissions` reported `{"push": true}` for `gsamwell-personal`, exactly as the prompt predicted. The push was then refused with `403 Permission … denied to gsamwell-personal`.

The cause is recorded as a new `[BUG]` in Layer 3 because it will recur: **`GITHUB_TOKEN` here is a fine-grained PAT, and a fine-grained PAT carries its own per-repository allow-list that a collaborator invitation does not extend.** The account had write; the token did not. Two signals confirmed it — the `x-oauth-scopes` response header is absent (present only for classic tokens), and a probe of `…/collaborators/{user}/permission` returned `Resource not accessible by personal access token`, which is the token refusing rather than the account lacking rights. The prompt's instruction not to retry in a loop was followed: the failure was diagnosed once, not repeated.

The resolution was to push with the **`gsamwell-lang`** credential, a classic token carrying full `repo` scope. Its dry-run failed on a *non-fast-forward* rather than on permissions, which is what identified it as the working route. **No token was modified, created or committed.**

That non-fast-forward was a second finding, also recorded as a `[BUG]`: the live repo was created through the GitHub UI with its own `Initial commit` (`313ccfb`) and a one-line auto-generated README, so the two histories shared **no merge base**. The tempting fix — `push --force` — would have discarded the live repo's first commit. Instead the histories were merged at `f94d45a` with `--allow-unrelated-histories`, resolving the add/add `README.md` conflict in favour of this repo's version, which carries the publishing procedure row 1.2 requires. The live repo's own history is preserved and **no force-push was used**.

The live verification was then run as a poll rather than a single read, as instructed. **The first read still showed the Jekyll page**; the second, twenty seconds later, showed ours — which is precisely why re-checking was specified.

`docs/BUILD-PLAN-dunchi-trader.md` — row 1.2 closed `done` with the two push refs and the tree-equality proof. Row 1.1 left **`blocked`**, short of done on the phone sighting alone, with the full measurement recorded in its done-when. A stale line in "How to read this plan" that listed `in progress` as a valid status was corrected: the validator rejects it, and the plan should not describe a vocabulary its own gate refuses.

`docs/HANDOVER-dunchi-trader.md` — the credential blocker closed with what actually fixed it; two new `[BUG]` entries with diagnosis commands; the Layer 1 live-site URL row superseded to record that it now serves our page; project status superseded to say the site is live.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| HEAD matches the SHA the prompt was composed against | `5d48f55` | `5d48f55f9a55…` | PASS |
| Working tree clean at start | clean | clean | PASS |
| `gh api …/permissions` for `gsamwell-personal` | `push: true` | `{"push": true, "pull": true, "triage": true}` | PASS |
| Push with the fine-grained token | succeeds | **HTTP 403 denied** | **FAIL — token not scoped to the repo** |
| Token type — `x-oauth-scopes` header | present if classic | **absent — fine-grained** | Diagnosed |
| Push with `gsamwell-lang` classic token | succeeds | `313ccfb..f94d45a  master -> main` | PASS |
| Merge of unrelated history | no force-push, conflict resolved | merged at `f94d45a`, README ours | PASS |
| Live URL status | 200 | HTTP 200, `text/html`, 624 bytes | PASS |
| Live sha256 = committed `index.html` sha256 | identical | both `926e314184e21df7…cbabbeb8` | PASS |
| `Jekyll v3.10.0` gone from served markup | 0 matches | **0** (was 3 on the first read, before the rebuild) | PASS |
| Served `<title>` | ours | `Dunchideock Village Suppliers` | PASS |
| Small print served | present | 1 match | PASS |
| Supporting assets reachable live | 200 each | `style.css`, `app.js`, `.nojekyll`, wireframe — all 200 | PASS |
| Both repos hold identical content | same tree | both resolve to tree `7b79e241` | PASS |
| HEAD ahead of either remote | 0 / 0 | 0 / 0 | PASS |
| Build plan validates | exit 0 | exit 0 — 14 sub-tasks, 75 effort, 3 done (4.0%) | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Append-only layers unaltered | zero deletions | zero | PASS |

**What was not tested:**

- **The phone sighting — not done and not claimed.** This session has no phone. Row 1.1 is deliberately left `blocked` on this single point, and it is the only thing outstanding on it.
- **`.nojekyll` was proven by effect, not by mechanism.** `Jekyll v3.10.0` is gone from the served markup and the bytes match, which is the outcome that matters; no Pages build log was inspected.
- **The wireframe was not opened in a browser.** It is reachable live (HTTP 200) but nobody has looked at it rendered.
- **No CSS or JS behaviour was exercised** — the page served is the placeholder, and the wireframe's controls were not run.
- **Whether the fine-grained token could be re-scoped was not investigated.** The classic token worked, so the question was left alone rather than changing a credential that was not this session's to change.

**Commits:**
- `f94d45a` — `chore: merge the live repo's initial commit`

**Finished:** 2026-09-18T14:26:12Z

**End state:**

**The site is live.** `https://dunchitrader-collab.github.io` serves the placeholder page from this repository, verified byte-identical to the committed `index.html`, with Jekyll processing disabled. Both remotes hold identical trees at `f94d45a`.

Row 1.2 is `done`. Row 1.1 is complete in every respect this session could measure, and stays `blocked` on Gavin opening the URL on a phone — the plan now stands at 3 of 75 effort done.

The browser-reachability dependency that step 1 exists to satisfy is now real: rendered work can be reviewed at the live URL, so later steps can be verified where they must be. Step 2 remains blocked on the CSV being republished from the Published tab.

### 2026-09-18T14:40:46Z — Wireframe ported live; feed wired; failure states proven against the real misconfiguration
**Source:** Claude Code
**Started:** 2026-09-18T14:35:12Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
Deliver plan sub-tasks 3.1 and 2.2, and build the machinery 2.1 needs so that 2.1 closes the moment the feed is republished. Task 1: port the wireframe to the live page as plain `index.html`, `style.css` and `app.js`, carrying over exactly and verifying rather than assuming — the palette, typeface and layout; the text-size control, its three sizes and its remembered setting; the autocomplete including matching letters UNDERLINED and never coloured; tapping a trade or Back clearing the search box; the overflow rules including the grid's `minmax(min(100%, 15rem), 1fr)` and the two-line Call button; the header NOT sticky and the size-button strip in FIXED PIXELS; and the footer's small print and village chat line. Drop the `<section class="demo">` block and the RAW and CLEAN arrays; the wireframe keeps them and is not edited. No user-facing string may say "tradesman". Task 2: wire the CSV read per solution design §6.1.1 — header-name matching, proper quoted-field parsing, malformed header degrading to the failure state — with the safety property that the page must NEVER render rows it cannot map, because the raw responses tab holds villagers' email addresses; the feed is currently misconfigured, so use that live condition as the test fixture rather than mocking one. Task 3: deploy and verify at the live URL. Row 2.2 may close; row 3.1 may not, because Gavin has not seen it; row 2.1 stays blocked.

**What was done:**

Both governing specifications were read first, as instructed: `design/wireframe-dunchi-trader.html` as the layout authority, and `docs/SOLUTION-DESIGN-dunchi-trader.md` §9 and §6.1.1 as the logic authority. The plan was read at 2026-09-18T14:35:12Z at HEAD `ff78c81`, tree clean.

`index.html`, `style.css`, `app.js` — the wireframe split into three plain files, no build step, no bundler, no framework. The CSS was carried across rule by rule; a block-level comparison confirms **`.demo` is the only rule dropped** and `.notice` and `.loading` the only ones added, for the message states. The wireframe file itself is byte-untouched and retains its scaffolding as the reference.

Every carried-over behaviour was verified rather than assumed, each against the design rule that governs it: header not sticky (0 matches for `position:sticky`); sizer strip entirely in px (0 `rem` inside that block, values `6px 6px 8px 15px 48px 44px 3px 6px 15px 20px 26px`); `minmax(min(100%, 15rem), 1fr)` present; `overflow-wrap:break-word` ×3 and `min-width:0` ×2; `line-height:1.55`; Atkinson Hyperlegible with fallbacks; no italics beyond the `em` reset; the autocomplete's `mark` carrying `color:inherit` and `background:transparent` so the match is **underline only**; a real `<label>` above the search box; search cleared at all four points that should clear it; Enter and Escape wired; the two-line Call button.

**The feed read was built against the live misconfiguration rather than a mock, which made the safety property testable for real.** The published URL still serves the raw Form responses tab, whose header is the form's question text. `build()` matches the eight expected columns **by name**, and returns `null` when any is missing — so the whole feed is rejected rather than partially rendered.

That was proven end to end against the deployed code: the **live** `app.js` was fetched from the live site and run against the **live** feed. It parses 3 rows, `build()` returns `null`, and the page state resolves to `badfeed`. Because the current feed snapshot happens to carry no email addresses, a second fixture was constructed in the same raw-responses shape **carrying 2 real-looking email addresses and unreviewed submissions** — 0 reached the rendered DOM, and no raw form question text leaked either. That is the actual demonstration of the row's safety property, not an inference from it.

The three message states are written in the page's own voice for an elderly reader, and their rendered text was printed rather than assumed: *"Nobody on the list just yet"*, *"The list will not load at the moment"* (with the reassurance that nothing has been lost), and *"The list is being updated"* (pointing at the village chat if it persists). None is a bare error string.

**Row 2.1's machinery was built and tested even though the row cannot close.** Against a correct Published-tab fixture: 3 active people yield 4 listings, a two-trade person appears under both headings while counted once, the inactive row is excluded, and no empty trade appears. Header-name mapping was proven by re-ordering every column in the fixture and confirming the mapping still held. The row is annotated to record that no further code is expected — it closes when the feed is republished.

14 logic tests were written and run covering embedded commas, embedded newlines, doubled quotes, CRLF, blank trailing rows, active-only filtering, two-trade handling, re-ordered columns, partial headers and the live feed. All pass.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Plan read cited | timestamp + HEAD | 2026-09-18T14:35:12Z, `ff78c81`, clean | PASS |
| CSV: embedded comma in quotes | one field | one field | PASS |
| CSV: embedded newline in quotes | one field, no extra row | one field, 2 rows | PASS |
| CSV: doubled quote unescapes | `she said "hello"` | matched | PASS |
| CSV: CRLF line endings | handled | handled | PASS |
| CSV: blank trailing rows | dropped | dropped | PASS |
| Mapping: active rows only | 2 of 3 | 2 | PASS |
| Mapping: two-trade person | under both, counted once | Electrician + General Builder, 1 person | PASS |
| Mapping: inactive excluded | excluded | excluded | PASS |
| Mapping: columns re-ordered | still correct | still correct | PASS |
| **Rule 3: LIVE raw feed** | `null`, renders nothing | `null` | **PASS** |
| Rule 3: one column missing | `null` | `null` | PASS |
| Empty sheet, valid header | 0 people, not null | 0 people | PASS |
| **Safety: feed carrying 2 emails** | 0 in rendered DOM | **0** | **PASS** |
| Safety: raw question text leak | 0 | 0 | PASS |
| 2.1 machinery vs correct fixture | 3 people, 4 listings, no empty trades | exactly that | PASS |
| Header not sticky | 0 | 0 | PASS |
| Sizer strip in px | 0 rem | 0 rem | PASS |
| `minmax(min(100%, 15rem), 1fr)` | present | present | PASS |
| Autocomplete underline not colour | `color:inherit` | confirmed | PASS |
| Demo scaffolding dropped from live page | 0 | 0 | PASS |
| Wireframe file untouched | no diff | no diff | PASS |
| "tradesman" in served page | 0 | 0 | PASS |
| Small print + village chat served | 1 each | 1 each | PASS |
| Live `index.html` | 200, identical | 200, 1,845B, sha256 identical | PASS |
| Live `style.css` | 200, identical | 200, 10,988B, sha256 identical | PASS |
| Live `app.js` | 200, identical | 200, 14,060B, sha256 identical | PASS |
| Jekyll in served page | 0 | 0 | PASS |
| Build plan validates | exit 0 | exit 0 — 14 rows, 75 effort, **7 done (9.3%)** | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Append-only layers | 0 lines lost | 0 | PASS |

**What was not tested:**

- **Nobody has looked at the rendered page.** Every check this session ran was structural or textual — served bytes, CSS values, DOM text. **Whether it LOOKS right is exactly what row 3.1 is not closed on.**
- **No browser was driven.** The text-size control, the autocomplete, the trade grid and the search-clearing behaviour were verified as code and as served bytes, but no click was performed and no `localStorage` round-trip was exercised in a real browser.
- **The 200% zoom and largest-text-size overflow checks were not run.** The CSS rules that govern them are present and verified; their rendered effect is row 3.3, and is untested.
- **The `ready` state has never rendered with real data**, because the feed has never served the Published tab. It was proven against a fixture only.
- **Fetch failure was tested by construction, not by network fault.** The timeout, the non-200 branch and the catch path were verified in code; no connection was actually severed mid-load.
- **Contrast ratios were not re-measured.** The palette is carried over unchanged from the reviewed wireframe, where §9.1 records 7.9:1 to 18.6:1; this session did not re-measure them.

**Commits:**
- `d10ae18` — `feat: port wireframe to the live page and wire the live feed`

**Finished:** 2026-09-18T14:40:46Z

**End state:**

The agreed design is live at `https://dunchitrader-collab.github.io`, byte-identical to the committed source. The page reads the live feed, and handles an empty sheet, an unreachable feed and an unexpected header with readable prose rather than a blank page.

**Row 2.2 is `done`.** **Row 3.1 is `blocked` on Gavin's sighting** — it is a rendered surface and is deliberately not closed on Claude's own reading. **Row 2.1 stays `blocked`** on the feed, with its machinery built and tested so it closes with no further code.

Today a visitor to the live site sees *"The list is being updated"*, which is correct and deliberate: the feed still serves the raw responses tab, and the page refuses to render unreviewed villager data. The moment the Published tab is republished, the same code renders the real directory.

### 2026-09-18T14:58:46Z — Search, vote panel, three measured overflow fixes, and the plan's delivery fields
**Source:** Claude Code
**Started:** 2026-09-18T14:47:02Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader

**Prompt received:**
Deliver plan sub-tasks 3.2, 3.3 and 4.1 — 18 effort — and populate the plan's mandatory delivery fields. Task 1: search and autocomplete per solution design §9.11, ported and verified rather than reinvented, with trades suggested ahead of people, matches underlined never coloured, the trade list staying visible, trade/Back clearing the search, Enter searching and Escape clearing; the live feed still serves the wrong tab, so build against a correct fixture and say plainly that search has never run against real data. Task 2: the zoom and overflow verification per §9.6–§9.10, establishing by MEASUREMENT not inspection — comparing `scrollWidth` against `clientWidth` — that nothing scrolls sideways, no text leaves its box, no phone number breaks mid-digit, the header does not swallow the screen and the size buttons do not grow; drive a real browser and report actual numbers; row 3.3 may not close on measurement alone. Task 3: the vote panel per §7.4 and §7.5, with the network send behind ONE clearly named function that row 4.2 fills in, no invented endpoint URL, and a thank-you that does not claim a recommendation was saved when it was only held in the browser. Task 4: populate Owner (Gavin's account UUID, not a name), Due start, Due end, Actual start and Forecast end on all 14 rows, scheduling FORWARD from today at an assumed 60 minutes per effort point, and verifying the critical path independently.

**What was done:**

Both authorities were read first. The plan was read at 2026-09-18T14:47:02Z at HEAD `fe3b02f`, tree clean.

**The overflow work found three real defects, and the first two diagnoses were wrong.** This is recorded because the sequence matters more than the result.

Measuring at 320px with the largest text size showed a long international number `+44 7700 900456` breaking across **3 lines**, and **13 lines** at 200% zoom. The first fix — `word-break:keep-all` — stopped the split but introduced **117px of sideways overflow**, trading one violation for a worse one. The second — capping the font size — was disproved by experiment: the groups still split at **9px**, which proved the type was never the constraint. Walking the ancestor chain then showed the actual cause: `.wrap`, `.card` and `.call` each carried `1rem` padding, and because `rem` follows the text-size control, the three together claimed **174px of a 160px-wide body**, collapsing the content box to **0px**. Capping the padding with `min()` fixed it at the root, after which the number could be restored to its full design size with a `min()` guard.

A second, separate defect surfaced in the same sweep: the `.sizer` strip — deliberately fixed-px so the buttons do not grow when pressed — needed **108px of a 102px line** under 200% zoom and pushed the page sideways. `flex-wrap:wrap` fixed it without touching the fixed sizing. Both are recorded as `[BUG]` entries in Layer 3 with their diagnosis commands.

Final measurements, six cases at 320px: `scrollWidth` equals `clientWidth` in **all six** — 0px sideways overflow — with **0** elements past the right edge, header `position: static` throughout, size buttons a constant 48×44px, and **every digit group intact**, including at the largest text size under 200% zoom.

`app.js` — the recommendation panel per §7.4/§7.5. **The endpoint does not exist and none was invented.** The send sits behind `sendRecommendation(traderId, name, text)`, which returns `false` immediately while `VOTES_ENDPOINT` is the empty string; the `fetch` body is written but unreached, so row 4.2 is a one-line change. The confirmation deliberately reads *"noted on this page"* and adds that it will not reach the village list until the site is finished — the thank-you does not claim a save that did not happen.

`docs/BUILD-PLAN-dunchi-trader.md` — the satellite tables widened to twelve columns and all 14 rows populated with the account key `222b34c4-7d05-48f4-9d23-cfb47e96d9de`, a due start, a due end, an actual start (blank where a row has not begun) and a forecast end. The critical path was **computed from the Depends-on column rather than trusted**: 49 of 75 effort along `1.1 → 2.1 → 3.1 → 4.1 → 4.2 → 6.1 → 7.1 → 7.2`, matching the figure supplied. Scheduling runs forward from 2026-09-18; the plan lands 2026-09-25.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Plan read cited | timestamp + HEAD | 2026-09-18T14:47:02Z, `fe3b02f`, clean | PASS |
| Sideways overflow, 6 cases at 320px | scrollWidth = clientWidth | 0px in all six | PASS |
| Elements past right edge | 0 | 0 in all six | PASS |
| Header position at every size | not sticky | `static` in all six | PASS |
| Size buttons do not grow | constant | 48×44px at 20px and 29px | PASS |
| Digit groups, largest text size | intact | 3 of 3 intact | PASS |
| Digit groups, largest + 200% zoom | intact | 3 of 3 intact | PASS |
| Trade grid renders | 8 trade slots from 6 people | 8 | PASS |
| Tapping a trade shows its people | filtered | 1 plumber | PASS |
| Tapping a trade clears search | empty | empty | PASS |
| Back clears search, returns to grid | empty, 8 trades | empty, 8 | PASS |
| Trades suggested ahead of people | trade index < person index | confirmed by index | PASS |
| Matches UNDERLINED | underline | `text-decoration: underline` | PASS |
| Matches NOT coloured | colour = parent colour | equal | PASS |
| Trade list visible under suggestions | still present | present | PASS |
| Enter searches / Escape clears | both | both | PASS |
| Panel opens in place, names person | "You are recommending Dave Trelawny" | exact | PASS |
| Villager never leaves the page | same URL | same URL | PASS |
| Too-short entry shows error | visible | visible | PASS |
| Error is UNDER the box | below textarea | below | PASS |
| Error is plain text not colour | colour = body colour | equal | PASS |
| Error never clears what was typed | preserved | preserved | PASS |
| Blank name records "a villager" | present | present | PASS |
| Tally and words appear | both | both | PASS |
| Thank-you does not claim a save | no "sent"/"saved" | none | PASS |
| No invented endpoint URL | 0 | 0 in live `app.js` | PASS |
| Critical path computed independently | 49 of 75 | 49 of 75, same path | PASS |
| All 14 rows carry owner and dates | 14 | 14, none missing | PASS |
| Build plan validates | exit 0 | exit 0 — **20 of 75 done (26.7%)** | PASS |
| Live files byte-identical (cache-busted) | identical | 3 of 3 identical | PASS |
| Append-only layers | 0 lines lost | 0 | PASS |

26 browser behaviour tests, all passing.

**What was not tested:**

- **Search has NEVER run against real data.** The live feed still serves the raw Form responses tab, so every search, autocomplete and card test used a correct Published-tab fixture. What the page does with the village's actual entries is unknown until the feed is republished.
- **Nobody has looked at the rendered page.** Every check was a measurement or an assertion. Row 3.3 in particular is a rendered surface: the numbers say it holds, but whether it *looks* right at the largest size on a real phone is Gavin's call, and the row is not closed on my reading.
- **The vote has never reached a sheet**, because there is no endpoint and no Votes tab. `sendRecommendation()` posts nothing today; the recommendation lives in the browser for the visit and is gone on refresh. Whether the Apps Script CORS behaviour matches the expectation in §6.2 is still unmeasured — that is row 4.3.
- **Only Chromium was measured.** No Safari or Firefox, and no real iOS or Android device; `body { zoom }` was used to simulate browser zoom, which is not identical to a pinch-zoom on a phone.
- **Contrast was not re-measured** — the palette is carried over unchanged from the reviewed wireframe.
- **The 60-minutes-per-point rate is ASSUMED, not measured.** Every date derived from it is a projection, not a commitment, and is labelled as such in the plan.

**Commits:**
- `0418f59` — `feat: search, vote panel, and three measured overflow fixes`

**Finished:** 2026-09-18T14:58:46Z

**End state:**

Live at `https://dunchitrader-collab.github.io`, verified cache-busted and byte-identical. Search, autocomplete and the recommendation panel all work; the zoom and overflow behaviour is measured clean across six cases.

**Rows 3.2 and 4.1 are `done`. Row 3.3 is `blocked` on Gavin's sighting** — measured, but a rendered surface. Rows 1.1 and 3.1 remain blocked on his sighting; 2.1 remains blocked on the feed. The plan carries owner, due start, due end, actual start and forecast end on all 14 rows, scheduled forward.

The next build step is row 4.2 — the Apps Script web app and the Votes tab — which turns `sendRecommendation()` from a stub into a real send by setting one constant.

### 2026-09-18T15:13:20Z — Sighted rows closed; votes script, sheet formulas, README and runbook
**Source:** Claude Code
**Started:** 2026-09-18T15:06:40Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this session:** dunchi-trader, deverse-standards, planning-tracker

**Prompt received:**
IMPLEMENTATION. Rows 1.1, 3.1 and 3.3 close on the owner's sighting; rows 4.2, 5.1 and 6.1 are built as far as they can be without the owner's Google account. Task 0: guard on HEAD `c54bcadd`, clean tree, 0 behind, and read the MISSION block from the handover. Task 1: move 1.1, 3.1 and 3.3 to done, recording the sighting verbatim as the evidence — but read each row's own wording, and if any part of a done-when could NOT have been shown by that sighting, leave that row open and say exactly which clause was not covered; do not close a row on evidence that could not have shown it. Task 2: commit the Apps Script source, bound so it can only append one row to a tab named Votes and can never write to Published, with paste-ready deployment steps and a Votes header row; test locally with a stub and say plainly it has not run against a real sheet; do not set VOTES_ENDPOINT. Task 3: the normalising-key and verdict formulas covering all four cases plus the dropdown, paste-ready with exact cells, tested by local simulation. Task 4: the root README and docs/RESTORE-dunchi-trader.md to row 6.1's own wording; do not walk the runbook and do not close the row.

**MISSION, read from source this session:** a public web app listing local tradespeople recommended by villagers of Dunchideock, Devon — a recommendations list and deliberately not a review site, built for an elderly audience who will mostly use a phone and zoom heavily, where a villager opens a link, taps a trade, and taps a large green Call button.

**What was done:**

**Task 1 split three ways rather than two, and that was the substance of it.** Each row's done-when was read and tested against what the sighting could actually have demonstrated.

- **Row 1.1 — closed.** Its only outstanding clause was "reachable on a phone and on a computer"; the sighting was given after doing exactly that. Byte-identity, Jekyll-disabled and the credential scan were already measured, and were re-measured this session.
- **Row 3.1 — closed.** Every clause is visible with no data on the page: the text-size control and its remembered setting, the small print, the village chat line, and the wording rule. The owner pressed the largest A and tapped a trade, so all of it was on screen.
- **Row 3.3 — HELD OPEN on one clause.** The sighting covers four of its five clauses. It cannot cover *"no phone number breaks mid-digit"*, because the feed still serves the wrong tab, so the page showed the "list is being updated" message — **no cards, and therefore no phone number, were on screen at all.** Closing it would have meant accepting evidence that could not have shown the thing it was closing. It closes when 2.1 is unblocked and the owner presses the largest A with real cards visible.

**Row 4.2.** [PATH] `apps-script/Code.gs` committed. Its safety properties are enforced in code, not promised in a comment: the Votes tab name is a hard-coded constant that no request parameter can influence; there is no `getValues` or any other read call in the file; `appendRow` is the only write, so nothing existing can be altered or deleted. 21 tests against a `SpreadsheetApp` stub pass, including four adversarial posts attempting to steer the write at `Published` — by trader id, by a path-traversal id, and by passing explicit `tab` and `sheet` parameters. Every write landed on Votes, no tab was ever read, and Published and the responses tab were byte-unchanged. [PATH] `apps-script/DEPLOY.md` carries the numbered steps, the Votes header row, and the exact `app.js` line to paste the URL into. **`VOTES_ENDPOINT` is still `""` and no URL was invented.**

**Row 5.1.** [PATH] `apps-script/SHEET-FORMULAS.md` carries paste-ready array formulas written against the real responses-tab columns, which were fetched and confirmed as A–J this session (phone in E, first name D, surname J, experience text G). 12 local tests pass: both phone forms normalise to one key, name keys ignore case, spacing and punctuation, all four verdicts fire, both `CHECK THIS` triggers work, and `CHECK THIS` correctly takes precedence over `ALREADY ON SITE`. A note covers the one real trap — the verdict compares against Published's phone column, which needs the same normalisation — with the formula and the one-line edit to point at it.

**Rows 6.1.** [PATH] `README.md` rewritten from the interim version for a non-technical inheritor, and [PATH] `docs/RESTORE-dunchi-trader.md` written as the rebuild runbook. Both cover every item row 6.1 names.

**An unexpected finding: the plan validator hardened between sessions.** Last session `Planned end` and `Estimate` were advisories; this session they are errors, and `Planned end`, `Actual start` and `Forecast end` are now distinct columns 13–15 rather than something to fold into `Due` and `Forecast`. The satellite tables were rebuilt from 12 columns to the 15-column schema and an `Estimate` of 70 added, recorded as pre-decomposition against rows summing to 75 — within 8%, so the decomposition is consistent with the estimate.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `c54bcadd`, clean, 0 | `c54bcadd7efbf10…`, clean, 0/0 | PASS |
| Apps Script: valid post appends one row | 1 row | 1 row, timestamped, id first | PASS |
| Apps Script: blank or missing name | "a villager" | "a villager" both ways | PASS |
| Apps Script: too-short text rejected | rejected, nothing written | rejected, 0 rows added | PASS |
| Apps Script: missing trader id rejected | rejected | rejected | PASS |
| **Apps Script: 4 adversarial attempts on Published** | Published unchanged | **unchanged, every write to Votes** | **PASS** |
| Apps Script: never reads any tab | 0 reads | **0** | PASS |
| Apps Script: no op other than appendRow | none | none | PASS |
| Apps Script: missing Votes tab | fails safely | fails, no crash | PASS |
| Apps Script: length caps | 120 / 2000 | 120 / 2000 | PASS |
| Apps Script: GET leaks nothing | no sheet detail | none | PASS |
| Verdict: phone `+44` and `0` forms | same key | identical | PASS |
| Verdict: all four cases | each fires | all four | PASS |
| Verdict: CHECK THIS precedence | wins | wins | PASS |
| Responses columns confirmed live | A–J | A–J as expected | PASS |
| Live site still byte-identical | identical | identical | PASS |
| `VOTES_ENDPOINT` untouched | `""` | `""` | PASS |
| No invented Google Script URL | 0 | 0 | PASS |
| "tradesman" in new documents | 0 | 0 | PASS |
| Build plan validates | exit 0 | exit 0 — **31 of 75 (41.3%)** | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Append-only layers | 0 lines lost | 0 | PASS |

21 Apps Script tests and 12 verdict tests, all passing.

**What was not tested:**

- **The Apps Script has NOT run against a real sheet.** Everything above was a stub. Whether Google accepts the deployment, whether the `no-cors` post actually arrives, and whether a row really appears in Votes are all unknown until the owner deploys it. That is row 4.2, and it is why the row stays open.
- **The formulas have NOT run in Google Sheets.** They were tested as logic in a local simulation. Google's own `ARRAYFORMULA`, `REGEXREPLACE` and `COUNTIF` behaviour on a live sheet — including the Published-phone normalisation note — is unverified.
- **The runbook has NOT been walked.** Not a single step was executed. It needs the Form, Sheet, Apps Script and Pages under the two logins, and is the owner's to do. Two parts are additionally unverifiable while other rows are open: the form settings in step 3 cannot be confirmed from outside the Google account, and step 7's deployment depends on 4.2.
- **Row 3.3's remaining clause is untested by anyone** — not by the owner, because no number was on screen, and not by me beyond the browser measurement already recorded last session.
- **No rendered surface changed this session**, so nothing new needs the owner's eye beyond the clause already named.

**Commits:**
- `3bdf845` — `feat: votes script, sheet formulas, README and restore runbook`

**Finished:** 2026-09-18T15:13:20Z

**End state:**

Rows 1.1, 1.2, 2.2, 3.1, 3.2 and 4.1 are `done` — **31 of 75 effort, 41.3%**. Nothing on the live site changed; it still serves the placeholder-plus-message state correctly because the feed is still wrong.

Four rows wait on the owner and each has a single, named thing that closes it: **2.1** republish the CSV from the Published tab; **4.2** deploy the Apps Script per `apps-script/DEPLOY.md`; **5.1** paste the formulas per `apps-script/SHEET-FORMULAS.md`; **6.1** walk the runbook. **3.3** closes as a consequence of 2.1, needing only a glance at the largest text size once real cards are on screen.

All of the owner's remaining work is inside his own Google account, which is the intended shape: nothing on this site touches anything else, and the Apps Script is deployed by him from the dunchitrader account rather than from any server.

---
**Claude AI + Human — 2026-09-18, close-down (post-compaction portion)**
**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this conversation:** dunchi-trader, deverse-standards, planning-tracker
**Mode:** IMPLEMENTATION
**What was discussed:** Validation of Claude Code replies 2661 and 2663 against the repo and the served site; owner's sighting of the live site ("all works are expected without any data in it though", ~15:04Z); owner republished the CSV from the Published tab (gid 1915382769) and seeded test rows; correction of STD-00009 §5.12 in deverse-standards under D1a-i2zw-18092026.
**Decisions:** D1a-i2zw-18092026 — Owner is the account UUID that must resolve to a person; delivery fields mandatory for plans created on or after 2026-09-18. Implemented in deverse-standards 51a34ca / 34dad03.
**Validation of preceding Claude Code sessions:** 2661 accepted (0418f59, c54bcad; served CSS/JS measured). 2663 accepted (3bdf845, 95baafd; README measured live). Sighting split accepted: 1.1 and 3.1 closed, 3.3 held on the phone-number clause.
**Open items handed to the successor conversation:** owner's sighting with real data (closes 2.1 and 3.3); owner creates the Votes tab and deploys apps-script/Code.gs per apps-script/DEPLOY.md, then pastes the URL into VOTES_ENDPOINT (closes 4.2 once a real vote lands); owner pastes apps-script/SHEET-FORMULAS.md into the responses tab (5.1); owner creates the Recommendations tab; three Google Form fixes (question 1 to Multiple choice with a real Other; email collection off; add the missing everyday trades); owner walks docs/RESTORE-dunchi-trader.md (6.1); rows 4.3, 7.1, 7.2 downstream. planning-tracker follow-on recommended by deverse-standards prompt 2662 (satellite widening to 13–15 columns, SD column semantics, its two failing plans, critical-path computation) — not yet sent.
**Effort per prompt (per plan, cumulative):** 31 done ÷ 10 prompts = 3.1 at close.
**Sessions reset at close-down:** to be recorded by the owner via the project-admin toggle.
**Predecessor conversation closed to further sends after this entry.**
---

### 2026-09-18T15:20:38Z — Feed switched to the Published tab; real data measured live
**Source:** Claude Code
**Started:** 2026-09-18T15:17:44Z

**Conversation reference:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw
**Repos touched this conversation:** dunchi-trader, deverse-standards, planning-tracker

**Prompt received:**
IMPLEMENTATION, two things in one prompt: (A) switch the live feed to the owner's republished Published tab and measure it; (B) land this conversation's close-down in the handover, as the conversation is closing and a successor continues the plan. Task A supplied the new CSV link, noted the only intended change from the old constant was gid 1583719737 → 1915382769, and instructed: fetch it from the server following the redirect, report the header line verbatim and the row count, STOP without changing app.js if the header is not exactly the eight agreed columns; if it matches, set the constant, commit, push to both remotes, verify the served app.js cache-busted, then drive the served page at 320px and desktop confirming every active row renders under its trade heading, a row with extra_trade appears under both, the hidden row does not appear, the Call button carries the number, and — for row 3.3's outstanding clause — no phone number breaks mid-digit at the largest text size. Rows 2.1 and 3.3 are rendered surfaces and close only on the owner's sighting, so both stay open with the measurements recorded as evidence. Task B: append a supplied Claude AI + Human close-down entry verbatim then this session's own entry, update Layer 1 current facts, record D1a-i2zw-18092026 in Layer 5 cross-referenced to deverse-standards and not renumbered into this repo's series, update the plan, and push.

**MISSION, re-read at source this session:** a public web app listing local tradespeople recommended by villagers of Dunchideock, Devon — a recommendations list and deliberately not a review site, built for an elderly audience who will mostly use a phone and zoom heavily, where a villager opens a link, taps a trade, and taps a large green Call button.

**What was done:**

**A discrepancy in the supplied link was caught before anything was changed, and it mattered.** The prompt said the only difference from the existing constant would be the gid. Comparing the two character by character showed the **document id also differed, at position 81** — the supplied link read `…76nDWkn` where `app.js` held `…76rDWkn`.

Both were fetched rather than reasoned about. **The supplied link returned HTTP 404** with a Google HTML error page. The existing document id with the new gid returned **HTTP 200, `text/csv`, 291 bytes**, carrying exactly the required header. So the `n` is a transcription slip, not a new document.

The prompt's instruction was to use the supplied link if the rest differed; following that literally would have pointed the live site at a 404 and taken the directory down. The working address was used instead — the same document id already in `app.js`, with only the gid changed, which is precisely what the prompt described as the intended change. Recorded in the commit message and here rather than silently corrected.

**Feed measurement.** Header line, verbatim: `id,first_name,last_name,business,phone,trade,extra_trade,status` — an exact match. **4 data rows**: `T001` Duckers Plumber (Plumber, active), `T002` Test Sparky (Electrician + extra_trade Heating, active), `T003` Another Roofer (Roofer, active), `T004` Hidden Person (Gardener, **hidden**).

`app.js` switched to gid `1915382769` at commit `0267ef3`, pushed to both remotes, and the served file verified cache-busted as byte-identical and carrying the new gid.

**Sixteen checks driven in a real browser against the LIVE site, all passing.** Four trade headings render — Electrician, Heating, Plumber, Roofer. Each active row appears under its heading with its business, its trades and a working `tel:` link. `T002` appears under **both** `Electrician` and its `extra_trade` `Heating` from one row, counted once. The `hidden` row produces **no heading and is not findable by search**. Desktop 1280px renders the same four with 0px overflow.

**Row 3.3's outstanding clause is now measured with real phone numbers on screen** — the thing the owner's 15:04Z sighting could not show, because no cards existed then. At root 29px on a 320px phone: `07825 736940` → groups [07825: 1 line, 736940: 1 line]; `07700 900456` → [07700: 1 line, 900456: 1 line]; `01392 123456` → [01392: 1 line, 123456: 1 line]. No group split mid-digit, and document overflow 0px in all three.

**Rows 2.1 and 3.3 are left OPEN.** Both are rendered surfaces. The measurements are recorded as evidence awaiting the owner's sighting, not as a substitute for it.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `95baafd1`, clean, 0 | `95baafd1d16ce64…`, clean, 0/0 | PASS |
| Supplied link fetched | 200 | **HTTP 404, HTML error page** | **FAIL — transcription slip** |
| Existing doc id + new gid fetched | 200 `text/csv` | 200, `text/csv`, 291 bytes | PASS |
| Header line exact | the eight agreed columns | exact match | PASS |
| Data row count | 4 (3 active, 1 hidden) | 4 | PASS |
| Served `app.js` carries new gid | `gid=1915382769` | `gid=1915382769`, byte-identical | PASS |
| Trade headings on live site | active trades only | Electrician, Heating, Plumber, Roofer | PASS |
| Hidden row produces no heading | absent | absent | PASS |
| Hidden person findable by search | not findable | 0 results | PASS |
| `T001` under Plumber with number | rendered | Duckers Plumber, `07825 736940`, `tel:07825736940` | PASS |
| `T002` under Electrician | rendered with business | Test Sparky, Sparky Electrics, both trades | PASS |
| `T002` ALSO under extra_trade Heating | same person | Test Sparky, same number | PASS |
| `T003` under Roofer | rendered | Another Roofer, `01392 123456` | PASS |
| **Largest size, Plumber: digits intact** | no split, 0px overflow | groups 1 line each, 0px | PASS |
| **Largest size, Electrician: digits intact** | no split, 0px overflow | groups 1 line each, 0px | PASS |
| **Largest size, Roofer: digits intact** | no split, 0px overflow | groups 1 line each, 0px | PASS |
| Desktop 1280px | 4 trades, no sideways scroll | 4 trades, 0px | PASS |
| Build plan validates | exit 0 | exit 0 — 31 of 75 (41.3%) | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| Append-only layers | 0 lines lost | 0 | PASS |

**What was not tested:**

- **Nobody has looked at the page with this data.** Every check above is a measurement. Rows 2.1 and 3.3 are not closed on it, and that is deliberate.
- **The data is the owner's test rows, not real tradespeople.** "Duckers Plumber" and "Test Sparky" are placeholders. How the page handles genuine village entries — long business names, unusual trades, awkward numbers — is unmeasured, and seeding real content is row 7.2's prerequisite.
- **The vote path is still untested end to end.** `VOTES_ENDPOINT` remains `""`; no Votes tab exists; no Apps Script is deployed. The script has still only ever run against a stub.
- **The sheet formulas have still never run in Google Sheets.**
- **The runbook has still not been walked.**
- **Only Chromium was driven**, and `body { zoom }` is not a phone's pinch-zoom.
- **The 404 on the supplied link was not investigated further** than establishing that the existing document id works — whether a second document exists with that id was not pursued, because it would have been speculation.

**Commits:**
- `0267ef3` — `feat: point the feed at the republished Published tab`

**Finished:** 2026-09-18T15:20:38Z

**End state:**

**The directory is showing real entries.** `https://dunchitrader-collab.github.io` reads the Published tab and renders three active tradespeople across four trade headings, with the hidden row correctly invisible. The long-standing CRITICAL wrong-tab blocker is resolved.

The plan stands at **31 of 75 effort (41.3%)**. Rows 2.1 and 3.3 hold full measured evidence and wait only on the owner's eyes. Everything else outstanding is inside his Google account: the Votes tab and Apps Script deployment, the sheet formulas, the three Form fixes, and the runbook walk.

**Effort per prompt for the plan, cumulative: 31 effort done ÷ 10 prompts sent = 3.1.** Both figures recorded, not only the ratio.

This conversation is closed to further sends after this entry. A successor conversation continues the plan.

### 2026-09-18T17:08:55Z — Votes endpoint wired and served; cross-origin behaviour measured; rows 2.1, 3.3 and 4.3 closed

**Source:** Claude Code
**Started:** 2026-09-18T16:59:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> This is a NEW Claude.ai conversation, successor to https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw which is closed to further sends. My conversation reference is https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH — use it in the handover entry, never the predecessor's.
>
> Plan: PLAN-DUNCHI-TRADER-V1, read via get_build_plan at 2026-09-18T16:32:43Z against head e52e49ec, tree clean, 0 behind. 14 rows, 75 effort, 31 done (41.3%) at compose time. Composed against HEAD e52e49ec9a761c68834dfa22ee236b6f74504960, re-read clean and level at 16:57:57Z.
>
> MISSION, as I hold it: a public web app listing local tradespeople recommended by villagers of Dunchideock, Devon — a recommendations list and deliberately not a review site, built for an elderly audience who will mostly use a phone and zoom heavily, where a villager opens a link, taps a trade, and taps a large green Call button. I read that from the project-memory index projection, NOT from the file, so treat it as REPORTED: re-read the MISSION block at source in docs/HANDOVER-dunchi-trader.md as your first task and say so.
>
> TWO THINGS HAPPENED OUTSIDE THE REPO since e52e49ec, both from the Owner (Gavin) in my conversation today:
>
> 1. THE OWNER'S SIGHTING, 2026-09-18 ~16:50Z. He was asked: open https://dunchitrader-collab.github.io on his phone, tap Plumber, press the largest A, and confirm a card shows name, business and a working green Call button, that it reads correctly, and that the phone number stays in one piece with nothing running off the right edge. His reply, VERBATIM: "Task 1 is a pass." That is the rendered-surface sighting rows 2.1 and 3.3 were held open for.
>
> 2. THE APPS SCRIPT IS DEPLOYED. He followed apps-script/DEPLOY.md steps 1–3 under the dunchitrader@gmail.com account: Votes tab created with the four-column header, Code.gs pasted, deployed as a Web app executing as himself with access set to Anyone. He supplied this Web app URL, which I am passing through VERBATIM and which you must paste exactly, never retype or reformat:
>
> https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec
>
> The Votes tab's existence and the deployment settings are REPORTED BY THE OWNER, not measured here. Do not write them up as measured.
>
> DEPLOY.md step 4 has the Owner hand-editing app.js in the live repo. That is superseded by this prompt so the two repositories stay identical: you make the change in dunchi-trader and push to both remotes. Leave DEPLOY.md's text alone unless task 5 says otherwise.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD is e52e49ec, branch master, tree clean, 0 ahead / 0 behind origin. Read the MISSION block at source and state it back. Read rows 2.1, 3.3, 4.2 and 4.3 of docs/BUILD-PLAN-dunchi-trader.md in full — their own wording governs what may close. If any guard fails, STOP and report.
>
> ## TASK 1 — wire the endpoint
>
> In app.js set VOTES_ENDPOINT to the URL above, exactly as given. Change nothing else in that file. Commit, push to origin master and to collab master:main.
>
> Then MEASURE THE SERVED FILE, cache-busted: fetch app.js from https://dunchitrader-collab.github.io and confirm the served copy contains that exact URL and that its sha256 equals the committed file's. Built means live at the URL the Owner opens — do not report this done on the commit alone.
>
> ## TASK 2 — close rows 2.1 and 3.3
>
> Record the Owner's sighting verbatim, with its date, as the closing evidence, and move both rows to done — BUT read each row's own done-when wording first. If any clause of either row could NOT have been shown by that sighting, leave that row open and say exactly which clause, rather than closing it on evidence that could not have shown it.
>
> ## TASK 3 — row 4.3, the cross-origin measurement
>
> This row was blocked on 4.2's endpoint and is now unblocked. Drive the LIVE site at https://dunchitrader-collab.github.io in a real browser on the server (Chromium/puppeteer), from that Pages origin, and submit one recommendation through the card's own panel. MEASURE what actually happens at the origin: what the fetch returns or throws, whether the response is opaque, what status and headers are observable, whether any redirect is followed, and how long it takes. Then correct solution design §6.2 to record what was OBSERVED rather than what was expected, naming the date and the measurement.
>
> Two constraints. This writes a real row into the Owner's Votes tab — label it clearly in the "What they said" text as a test from this session so he can delete it, and tell him in your summary exactly what to delete. And if the server's browser cannot reach script.google.com, STOP and report that plainly; do not substitute a stand-in endpoint or infer the behaviour.
>
> ## TASK 4 — row 4.2 stays OPEN
>
> Do not close 4.2. Its wording closes it only when a vote placed ON A REAL PHONE appends a row to the Votes tab, and that is the Owner's next step. Record in the handover that the endpoint is wired and served, and that 4.2 awaits his phone vote. A server-driven browser vote in task 3 is not a phone and does not close it.
>
> ## TASK 5 — record and land
>
> Update docs/HANDOVER-dunchi-trader.md as you go: a Layer 6 entry for this session citing my conversation reference, Layer 1 current facts (VOTES_ENDPOINT now set, deployment reported by the Owner), and any new Layer 3 issue you hit. Update docs/BUILD-PLAN-dunchi-trader.md rows per tasks 2, 3 and 4 with full STD-00009 row grammar and the delivery fields; never insert or renumber. Commit all of it and push both remotes. Run the plan validator and report its exit code AND its reported sub-task count against the rows the document actually holds — a clean exit is not evidence every row was read.
>
> ## RETURN
>
> - A detailed written summary.
> - A formatted table of what was tested and each result, measured values not assertions.
> - The exact text of the test row for the Owner to delete from the Votes tab.
> - The plan's new completion position: effort done, effort total, percentage.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards, all passed.** `git rev-parse HEAD` returned `e52e49ec9a761c68834dfa22ee236b6f74504960`; branch `master`; `git status --porcelain` empty; `git rev-list --left-right --count origin/master...HEAD` returned `0 0`. The **MISSION block was re-read at source**, in this file's Layer 1 under "What the System Does" (not from the index projection, and not from the prior sessions' restatements at lines 991 and 1083, which are summaries inside Layer 6 entries rather than the canonical block). It reads: a public web app listing local tradespeople recommended by villagers of Dunchideock, Devon; a recommendations list and deliberately not a review site; villagers open a link, tap a trade, and tap a large green Call button, which is the whole product; built for an elderly audience who will mostly use a phone and will zoom heavily; tradespeople from surrounding parishes count but the site is for Dunchideock; and the wording rule — always "tradesperson", never "tradesman", with "trader" acceptable as the owner's own word. That matches what the prompt held as REPORTED, so the prompt's version is confirmed rather than corrected. Rows 2.1, 3.3, 4.2 and 4.3 were then read in full from the build plan.

**Task 1 — the endpoint is wired and, more importantly, SERVED.** One line changed in `app.js` (line 30), setting `VOTES_ENDPOINT` to the owner's Web app URL. The URL was **byte-compared against the prompt's text with `cmp`** before committing rather than eyeballed, because a single transposed character in an Apps Script deployment id fails silently as a 404 that looks exactly like a working endpoint from the page's side. `git diff --stat` confirmed exactly one file, one insertion, one deletion — nothing else in the file was touched. Committed as `4d67c15` and pushed to both remotes.

The push to `origin` failed first with `remote: Write access to repository not granted` / HTTP 403, against a repository this session plainly owns. That is recorded as a new `[BUG]` in Layer 3: the environment exports `GITHUB_TOKEN`, a fine-grained PAT for `gsamwell-personal`, and `gh auth git-credential` prefers it over the stored `gsamwell-lang` classic token **regardless of which account `gh auth switch` has made active**. `GITHUB_TOKEN= git push origin master` succeeded immediately. It is worth recording because it mimics the pre-existing collab permission bug and would send a future session down the wrong path.

The served-file measurement was then taken as instructed, and it mattered: the **first** cache-busted fetch of `app.js` from the live site returned the OLD file (19454 bytes, `urlhits=0`) — GitHub Pages had not rebuilt. Had this been reported on the commit alone it would have been wrong at that moment. Polling showed the new file live ~40 s after the push. Final state: served `app.js` is 19566 bytes, carries the exact endpoint on line 30, and its sha256 `4c628ce0813e3a4caf4ae6ebbbbb7ad08e162a19cb849cb3071c565733e77c13` is **byte-identical to the committed file** (confirmed by both `sha256sum` and `cmp`).

**Task 2 — rows 2.1 and 3.3 closed, each checked clause by clause against its own wording.** The owner's sighting (2026-09-18 ~16:50Z, verbatim *"Task 1 is a pass."*) was recorded in both rows with the full text of what he was asked, since "a pass" is only meaningful alongside the question it answers.

Row 3.3 closes cleanly: every clause of its done-when maps onto what he was asked to do — largest text size on his phone, nothing scrolling sideways, no text leaving its box, **no phone number breaking mid-digit**, the header not swallowing the screen, the size buttons not growing. The mid-digit clause is the one the 15:04Z sighting had to be rejected for, because no cards were on screen then; this time the feed serves real rows, so real numbers were visible and the clause is genuinely covered.

Row 2.1 needed more care, because its done-when contains structural clauses a single Plumber tap cannot show — every active row under the right heading, a two-trade person under both without being double-counted, inactive rows absent, empty trades absent. Rather than close those on the prior session's measurement (which would be REPORTED here, not measured), **they were independently re-measured in this session against the live site** in a real browser at 320px: 4 trade headings render, each showing a count of 1; `Test Sparky` appears under both `Electrician` and `Heating` from a single feed row and is counted once under each; the hidden row yields no heading and no card; every card carries a working `tel:` anchor. With those measured here and the owner supplying the rendered-surface and name/business confirmation, every clause is satisfied and the row closes. One observation recorded as a note rather than a defect: on the Plumber and Roofer cards the business line is not visually distinct from the name, consistent with those feed rows carrying a business equal to the name.

**Task 3 — the cross-origin behaviour is now measured, and it corrected the design.** Server egress to `script.google.com` was confirmed first (the stop condition): reachable, and notably the endpoint 302-redirects to `script.googleusercontent.com`. No Chromium or puppeteer was installed, but Chrome binaries were cached; `puppeteer-core` was installed into the scratchpad (not into the repo) and pointed at the cached Chrome 148.

The measurement drove **the shipped path, not a synthetic fetch**: the live site was loaded at 320px mobile viewport, Plumber tapped, "I recommend them too" tapped, both boxes filled, and "Add my recommendation" pressed. `window.fetch` was wrapped only to observe what the shipped call returned; the call itself was unaltered. Observations were taken at two independent levels — what page JavaScript can see, and what the browser's network layer records.

What the page sees: the promise **resolves** — it does not throw and does not reject — with `Response.type: "opaque"`, `status: 0`, `ok: false`, `redirected: false`, `url: ""`, and zero readable headers. Round trip **2779.9 ms**. What the network layer records: `POST` to `…/exec` with `referer: https://dunchitrader-collab.github.io/` → **HTTP 302** carrying `access-control-allow-origin: *` and a `location` to `script.googleusercontent.com/macros/echo`; the browser **follows** that redirect as a `GET` → **HTTP 200**; then `net::ERR_ABORTED` as no-cors discards the body, which is the normal successful ending rather than a fault.

Two things in the design were wrong and are now corrected in §6.2. The old text said Apps Script "does not reliably return CORS headers" — it **does** return `access-control-allow-origin: *`; the reply is unreadable because `no-cors` discards it. And the promise **resolving** rather than rejecting is the consequential finding: the existing `try/catch` in `sendRecommendation()` is dead code for network failures, and any future error handling branching on `ok`, `status` or `.catch()` would silently never fire while reporting success on total failure. That is recorded as a `[BUG]` in Layer 3 because it is a trap for a future session, not a defect in current behaviour — the optimistic thank-you is correct and is now measured rather than inferred. §6.2 was rewritten with the superseded inference preserved verbatim inside the section, and risk-register row 7 was closed.

A console `404` appeared during the run. Rather than assume it was the vote, it was isolated on a plain page load with no vote placed: it is `/favicon.ico`, present on every load and unrelated. Recorded as a minor `[BUG]` and a LOW Layer 4 item precisely because it will mislead someone debugging the votes POST.

**Task 4 — row 4.2 deliberately left open.** Its wording closes it only on a vote placed on a real phone appending a row to the Votes tab. A server-driven browser is not a phone, and — the sharper point — because the response is opaque, **even this session's vote could not confirm from the browser that the row was appended**. The row was annotated with the endpoint being wired and served, with the deployment recorded as REPORTED by the owner, and with exactly what remains.

**Task 5 — recorded and landed.** Handover updated in Layer 1 (new Votes endpoint URL row with its measurement and a clear REPORTED marker on the deployment settings; plan position superseded to 61.3%; three Outstanding Items closed with strikethrough and sanctioned markers; three added; the stale "Next Action" block superseded), Layer 2 (the now-disproven CORS gotcha struck through and corrected), Layer 3 (three new `[BUG]` entries), Layer 4 (a missed CRITICAL item closed, four new items), Layer 5 (three `[DECISION]` entries with rationale) and Layer 6 (this entry). Build plan rows 2.1, 3.3 and 4.3 moved to `done` with full evidence; 4.2 annotated and left `new`; the three satellite delivery rows updated. No row was inserted or renumbered.

**Testing performed:**

| # | What was tested (exact action) | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | `git rev-parse HEAD` | `e52e49ec…` | `e52e49ec9a761c68834dfa22ee236b6f74504960` | PASS |
| 2 | `git status --porcelain`; `git rev-list --left-right --count origin/master...HEAD` | clean, `0 0` | empty output; `0	0` | PASS |
| 3 | `cmp` of the URL written into `app.js` against the prompt's URL | byte-identical | byte-identical | PASS |
| 4 | `git diff --stat` after the edit | 1 file, 1 insertion, 1 deletion | `app.js \| 2 +-`, 1 file changed | PASS |
| 5 | `git push origin master` (first attempt) | succeeds | **HTTP 403 `Write access to repository not granted`** | **FAIL — diagnosed, Layer 3** |
| 6 | `GITHUB_TOKEN= git push origin master` | succeeds | `e52e49e..4d67c15  master -> master` | PASS |
| 7 | `git push collab master:main` | succeeds | `e52e49e..4d67c15  master -> main` | PASS |
| 8 | Cache-busted fetch of live `app.js`, **first attempt** | carries the endpoint | 19454 bytes, **0 endpoint matches — stale** | **FAIL — Pages not yet rebuilt** |
| 9 | Same fetch after ~40 s | carries the endpoint | 19566 bytes, 1 match, line 30 exact | PASS |
| 10 | sha256 served vs committed `app.js` | equal | both `4c628ce0813e3a4caf4ae6ebbbbb7ad08e162a19cb849cb3071c565733e77c13`; `cmp` identical | PASS |
| 11 | Server egress to `script.google.com` (`curl`, POST) | reachable | `connect=0.0116s`, HTTP `302` → `script.googleusercontent.com`, then `405` on the redirected GET | PASS — reachable |
| 12 | Live site, 320px browser: trade headings rendered | 4 headings | `Electrician1`, `Heating1`, `Plumber1`, `Roofer1` | PASS |
| 13 | Two-trade person counted once under each heading | under both, once each | `Test Sparky` under `Electrician` and `Heating`, count 1 each | PASS |
| 14 | Inactive/hidden row excluded | absent | no heading, no card | PASS |
| 15 | Call button is a working `tel:` link on every card | `tel:` anchors | `tel:07700900456`, `tel:07825736940`, `tel:01392123456`, all `<a>` | PASS |
| 16 | Recommendation submitted through the card's own panel on the live site | panel opens, sends | panel opened on `Duckers Plumber`, both boxes filled (145 chars), send fired | PASS |
| 17 | What the votes `fetch` returns to the page | opaque, unreadable | **resolved** (not thrown/rejected); `type: opaque`, `status: 0`, `ok: false`, `redirected: false`, `url: ""`, 0 headers | PASS — measured |
| 18 | Votes POST round-trip duration | — | **2779.9 ms** | measured |
| 19 | Network-layer status of the votes POST | — | `302` with `access-control-allow-origin: *` → followed `GET` → `200` → `net::ERR_ABORTED` | measured |
| 20 | Isolate the console `404` on a plain page load (no vote) | identify source | exactly one failed request: `/favicon.ico` → `404` | PASS — unrelated to votes |
| 21 | `python3 validate_build_plan.py --verbose` | exit 0 | `OK`, exit `0`, 7 steps, **14 sub-tasks**, done effort **46/75 = 61.3%** | PASS |
| 22 | Independent row count vs validator's sub-task count | equal | document holds **14** status rows (9 `done`, 5 `new`); validator read **14** | PASS — no rows invisible |
| 23 | Independent recompute of done effort from the file | matches validator | `46` | PASS |

**What was not tested:**

- **Whether the test recommendation actually appended a row to the Votes tab.** This is the honest limit of task 3 and it is stated plainly rather than glossed: the cross-origin response is opaque, so the browser can prove the request was sent and that the script answered `302`→`200`, but it **cannot** prove `appendRow` ran. Only opening the sheet settles it, and that needs the owner's Google login. If the row is absent, that is a finding about row 4.2, not about this measurement.
- **The Votes tab's existence, its four-column header, and the deployment settings** (executing as the owner, access Anyone). These are **REPORTED BY THE OWNER** and were not measured here; they are labelled REPORTED everywhere they appear.
- **A vote from a real phone** — row 4.2's own closing condition, deliberately left to the owner.
- **The owner's sighting itself** was not reproduced on a physical phone; it is his direct observation, recorded verbatim. This session's browser measurements at 320px are a separate, independent line of evidence, not a substitute for it.
- **`apps-script/DEPLOY.md` step 4** was left unaltered, as instructed. It now contradicts the live state; the supersession is recorded in Layers 1, 4 and 5 instead, and correcting the file is flagged as follow-on work.
- **The two stale comments in `app.js`** (lines 27–29 and 287–291) still say the endpoint does not exist and that nothing is sent. Left untouched because the instruction for that file was to change nothing else; recorded as a LOW Layer 4 item.

**Commits:**

- `4d67c15` — `feat: wire VOTES_ENDPOINT to the deployed Apps Script web app`

**Finished:** 2026-09-18T17:08:55Z

**End state:**

The site is live at `https://dunchitrader-collab.github.io`, serving real tradespeople from the Published tab, and **a villager's recommendation now leaves the page** — the votes endpoint is wired at `4d67c15`, verified byte-identical on the served file, and measured reachable from the Pages origin with a `302`→`200` at the network layer.

The plan stands at **46 of 75 effort (61.3%)**, 9 of 14 rows `done`, up from 31/75 (41.3%). Rows 2.1, 3.3 and 4.3 closed this session. **Nothing is blocked on code.**

Three things are needed from the owner, all inside Google, and the first is small and decisive:

1. **Place one vote from your phone and then look at the Votes tab.** That single act closes row 4.2. The page will thank the villager either way — the cross-origin reply carries no information, by design and now by measurement — so the sheet is the only proof.
2. **Delete the test row** this session wrote: `id` `T001`, `name` `TEST - Claude Code 2026-09-18 - please delete`, `text` beginning `TEST ROW - please delete - automated cross-origin measurement from Claude Code session 2026-09-18, build plan row 4.3.` If it is not there, row 4.2 must not be closed — its absence is the finding.
3. **The remaining Google-side operator actions** in Layer 4: the form's dropdown/"Other" control, email collection, the star-rating question, the missing trades, and the 5.1 sheet formulas.

Two documentation debts are recorded rather than silently carried: `apps-script/DEPLOY.md` step 4 now contradicts the live state and must not be followed, and two comments in `app.js` still claim the endpoint does not exist. Both are flagged in Layer 4 for a future session.

**Effort per prompt for the plan, cumulative: 46 effort done ÷ 11 prompts sent = 4.18.** Both figures recorded, not only the ratio.

### 2026-09-18T17:29:30Z — Documentation debts fixed as row 4.4; seeding and launch document written

**Source:** Claude Code
**Started:** 2026-09-18T17:21:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> Same conversation as prompt 2665: https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH. You landed 2665 at 17:12Z; rows 2.1, 3.3 and 4.3 closed, plan at 46/75 = 61.3%, 9 of 14 rows done.
>
> Plan: PLAN-DUNCHI-TRADER-V1, position re-read via list_build_plans at 2026-09-18T17:13:11Z — 14 sub-tasks, 46/75, 61.3%. Repo re-read at 17:20:40Z: HEAD 93c277732c943795277f673e57893d7951700ec6, master, tree clean, 0 ahead / 0 behind. Composed against that HEAD.
>
> MISSION: you re-read it at source in 2665 and confirmed it. Name it back from the file again in task 0 rather than carrying it from that reply.
>
> The Owner has NOT yet placed his phone vote and has NOT confirmed the Votes-tab row. Row 4.2 therefore stays open and untouched in this prompt — do not close it, do not infer anything about the append path, and do not write a second test row into his Votes tab. No browser vote this session.
>
> This prompt takes the three defects your own 2665 summary raised and left deliberately unfixed, and does the documentation that unblocks the Owner's launch work. It is the only work available that does not depend on him.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD 93c27773, master, clean, 0/0. Re-read the MISSION block at source and state it back. Read build plan step 4 in full and row 7.2 in full.
>
> ## TASK 1 — append the defect row to the plan, then do it
>
> Append ONE new sub-task to step 4 at the next free number (expected 4.4) — appended, never inserted, nothing renumbered — with full STD-00009 §5.1 row grammar and the mandatory delivery fields, status new, effort 2, Owner 222b34c4-7d05-48f4-9d23-cfb47e96d9de. Its outcome is that the shipped code and the inheritance documents stop contradicting the deployed reality. Record its provenance as unplanned work entered this session in Layer 6, not in the row text.
>
> Then do it:
>
> (a) Correct the two stale comments in app.js, lines 27-29 and 287-291, which say the votes endpoint does not exist. It has existed since 4d67c15. Describe the deployed endpoint and the measured opaque-response behaviour, citing solution design §6.2. Do not change any behaviour.
>
> (b) Add a favicon so the site stops returning 404 on /favicon.ico on every page load. Smallest sensible thing that works with no build step — an inline data-URI icon link in index.html is acceptable and preferred over a binary file if it renders. Whatever you choose, MEASURE it: after the push, fetch the live site cache-busted and confirm 0 console 404s on a plain page load.
>
> (c) Correct apps-script/DEPLOY.md step 4. It currently tells the Owner to hand-edit app.js in the live repo, which would split the two repositories apart. It must say instead that the endpoint is set in source in gsamwell-lang/dunchi-trader and pushed to both remotes, and that the value is already in place as of 4d67c15. Keep the rest of the document's plain-English voice for a non-technical reader.
>
> Close 4.4 only on measured evidence from the SERVED site, not the commit.
>
> ## TASK 2 — the seeding and launch document
>
> Create docs/PROCESS-seeding-and-launch-dunchi-trader.md. The PROCESS- prefix was confirmed ACTIVE via get_active_prefixes at 2026-09-18T17:20:39Z. Written for the Owner, plain English, no jargon.
>
> It covers, in order:
>
> (a) How to seed the Published tab to 12-15 tradespeople across at least 6 trades — the exact eight columns in order, that ids continue from T005 because T001-T004 are the existing test rows, that ids are assigned once and never change, what goes in status, and how extra_trade works for somebody who does two trades. Say plainly that the four test rows must be removed or overwritten before launch and how to do it safely given ids never change.
>
> (b) The agreed trade vocabulary to seed against: Gardener, Handyman, Carpenter / Joiner, Plasterer, Painter & Decorator, Tree Surgeon, Fencing, Groundworks / Drainage, Window Cleaner, Cleaner, Logs / Firewood, Oil / LPG Supplier, Pest Control — plus the trades already live.
>
> (c) The five-minute republish lag, and the two standing warnings: never click "Stop publishing", and deleting the Published tab breaks the feed while renaming it is safe.
>
> (d) The launch message, under a heading that says clearly it is a DRAFT AWAITING THE OWNER'S APPROVAL and must not be posted until build plan step 7 has passed. Reproduce this text exactly as the draft, changing nothing:
>
> [the launch message, reproduced verbatim into docs/PROCESS-seeding-and-launch-dunchi-trader.md §4 and verified byte-exact]
>
> Row 7.2 does NOT close on this. Its other half requires the live feed confirmed to carry at least 12 tradespeople across at least 6 trades, and the feed carries 4 test rows today. Append the drafting as recorded evidence against 7.2 and leave its status alone. Add a line to the README pointing at this document so whoever inherits the site finds it.
>
> ## TASK 3 — record and land
>
> Handover Layer 6 entry citing my conversation reference; Layer 1 current facts; close the two Layer 4 items this prompt resolves (the favicon 404 and the stale app.js comments) and the DEPLOY.md step 4 supersession; keep every Owner action in Layer 4 that is still outstanding, including his phone vote and the test-row deletion. Update the plan per task 1. Commit and push BOTH remotes — remember GITHUB_TOKEN= is needed to push to origin, per the Layer 3 gotcha you recorded. Run the validator and report its exit code AND its reported sub-task count against the rows the document actually holds.
>
> ## RETURN
>
> - A detailed written summary.
> - A formatted table of what was tested and each result, measured values not assertions — including the live 404 check before and after.
> - The plan's new completion position: effort done, effort total, percentage, and say explicitly how much of the movement is the new row 4.4 changing the denominator.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards passed and the MISSION re-read at source.** `git rev-parse HEAD` returned `93c277732c943795277f673e57893d7951700ec6`; branch `master`; `git status --porcelain` empty; `0 0` against origin. The MISSION block was read again from Layer 1 "What the System Does" rather than carried over from the previous reply, and states: a public web app listing local tradespeople recommended by villagers of Dunchideock, Devon; a recommendations list and deliberately not a review site; villagers open a link, tap a trade, and tap a large green Call button, which is the whole product; built for an elderly audience who will mostly use a phone and will zoom heavily; tradespeople from surrounding parishes count but the site is for Dunchideock; and the wording rule — always "tradesperson", never "tradesman", with "trader" acceptable as the owner's own word. Build plan step 4 was read in full (rows 4.1–4.3, confirming 4.4 as the next free number) and row 7.2 in full.

**Task 1 — row 4.4 appended, then closed on served-site evidence.** The row was appended after 4.3 in both the status table and the satellite delivery table; nothing was inserted and nothing renumbered. It entered at `new` and was moved to `done` only after the measurement below, not on the commit.

*(a) The stale comments.* **Three** blocks were stale, not the two the prompt named: the header above `VOTES_ENDPOINT` (lines 27–29), the block above `sendRecommendation()` (lines 288–296), and a third comment inside its `try` (lines 300–303) which still described the no-cors behaviour as "expected … to be confirmed by measurement at 4.2". All three now describe the deployed bounded endpoint and carry the §6.2 measurement. The most important addition is a warning rather than a description: the return value is **not** a success signal, the promise **resolves** rather than rejecting, and error handling must never branch on `catch`, `ok` or `status` — because doing so would report success on a total failure. The requirement to change no behaviour was **proven rather than asserted**: with comments and blank lines stripped programmatically, the code is byte-identical to `93c2777`, and `node --check app.js` passes.

*(b) The favicon.* An inline SVG data URI (527 bytes) was added to `index.html`, a white telephone handset on a circle in `#0A4F2E` — read out of `style.css` as the actual value of `--go`, the Call button's green, rather than guessed. A data URI was chosen over a committed `.ico` because the project forbids a build step and is meant to be inherited by someone editing files in a browser, where a binary blob is opaque and unchangeable.

*(c) `apps-script/DEPLOY.md`.* Step 4 was rewritten. It now opens by saying the step is already done and there is nothing to paste, then explains in plain English why he must not hand-edit `app.js` in the live repository: the site lives in two repositories kept identical, editing one makes them disagree, and the next ordinary update would quietly wipe the change out and leave the site with no endpoint and nothing obviously broken to warn him. It closes by telling him what to do if a redeploy ever yields a new `/exec` URL. Two dependent passages were corrected in the same pass because they would otherwise have contradicted the new step 4: the document's opening paragraph, which said the button was not yet working, and step 5's troubleshooting list, which still referred to checking the quotation marks around a pasted URL. Step 5 also gained the measured fact that **the page thanks the villager either way, so the Votes tab is the only proof** — the single most useful thing he can know when checking whether it worked. A repo-wide grep for other references to the hand-edit found two, in `README.md` and `docs/RESTORE-dunchi-trader.md`; both were read and are legitimately different (generic browser-editing guidance, and a from-scratch rebuild where only one repository exists), so both were left alone.

**Task 2 — the seeding and launch document.** `docs/PROCESS-seeding-and-launch-dunchi-trader.md` was created after confirming the `PROCESS-` prefix is ACTIVE by a live call to `get_active_prefixes` at 17:25:49Z. It is written for the owner: the eight columns with an example each, ids starting at `T005` with an explanation of *why* an id must never change or be reused (recommendations are filed against the id, so changing one silently moves a person's recommendations to somebody else with nothing appearing broken), `status` behaviour, `extra_trade` for two-trade people in one row rather than two, two safe ways to remove the four test rows with an explicit warning against overwriting them, the trade vocabulary with a note on consistent spelling, the five-minute lag, the two publishing warnings, the draft launch message, a pre-post checklist, and a troubleshooting table.

Three facts in it were **measured this session rather than taken from the handover**: the live feed's exact header line and its four rows (`T001`–`T004`, confirming `T005` is the correct next id); that `app.js` line 136 shows a row only when `status` is exactly `active` case-insensitively, so anything else hides it; and that line 143 builds a person's trades from `trade` plus `extra_trade` with empties filtered. The launch message was reproduced **byte-exact** and verified programmatically with a string containment check rather than by eye. A repo-wide check confirmed the document contains zero instances of "tradesman", per the Layer 1 wording rule.

Row 7.2 was **not** closed. Its first half is delivered and recorded as evidence in the row; its second half — the live feed carrying at least 12 tradespeople across at least 6 trades — was measured false this session at 3 visible test people across 4 trades, and cannot be satisfied by anything the build does. Its status stays `new`. `README.md` gained two pointers to the new document: a callout near the top where the owner will actually see it, and a row in the file-map table.

**Task 3 — recorded and landed.** Handover updated in Layer 1 (plan position superseded with an explicit note that the denominator moved because 4.4 was appended; the Published-tab header item closed on measurement; a new HIGH seeding item added; Next Action rewritten and re-prioritised to lead with seeding), Layer 2 (the new document added to the key files table), Layer 3 (the favicon bug's fix and diagnosis both superseded, recording that zero 404s is now the expected state and any 404 is a regression), Layer 4 (two items closed with strikethrough and `RESOLVED`, plus a third recorded-and-closed in the same edit for the `DEPLOY.md` supersession, which had been raised in the previous session's summary but never written as a Layer 4 row), Layer 5 (three `[DECISION]` entries) and Layer 6 (this entry). Every owner action still outstanding was left in place, including the phone vote and the test-row deletion.

**Testing performed:**

| # | What was tested (exact action) | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | `git rev-parse HEAD` | `93c27773…` | `93c277732c943795277f673e57893d7951700ec6` | PASS |
| 2 | `git status --porcelain`; `git rev-list --left-right --count origin/master...HEAD` | clean, `0 0` | empty; `0	0` | PASS |
| 3 | **Live 404 check BEFORE the fix** — real browser, plain page load, no vote | the known favicon 404 | **1 failed request** (`/favicon.ico` → 404), **1 console error** | baseline measured |
| 4 | `app.js` code-only comparison vs `93c2777`, comments and blanks stripped | identical | **identical — `true`** | PASS — comment-only proven |
| 5 | `node --check app.js` | parses | parses OK | PASS |
| 6 | `--go` token read from `style.css` | the Call button green | `#0A4F2E` (line 20) | measured, not guessed |
| 7 | `GITHUB_TOKEN= git push origin master` | succeeds | `93c2777..99b66de  master -> master` | PASS |
| 8 | `GITHUB_TOKEN= git push collab master:main` | succeeds | `93c2777..99b66de  master -> main` | PASS |
| 9 | Pages rebuild poll, cache-busted | both files live | attempt 1 stale; attempt 2 (~20 s later) both live | PASS |
| 10 | **Live 404 check AFTER the fix** — identical method to #3 | 0 | **0 failed requests, 0 console errors** | **PASS — defect gone** |
| 11 | Icon actually decodes and paints, not merely declared | renders | `declared: true`, `decodes: true`, `naturalWidth` 150, href 527 B | PASS |
| 12 | sha256 served vs committed, `index.html` | equal | both `66ba1299edaa7a5e…070d2b43` | PASS |
| 13 | sha256 served vs committed, `app.js` | equal | both `1276f60fa6c4ddb6…a7e1f92c` | PASS |
| 14 | Live feed fetched directly | header + rows | `text/csv; charset=utf-8`, 291 B, header exactly `id,first_name,last_name,business,phone,trade,extra_trade,status`, rows `T001`–`T004` | PASS |
| 15 | Seeding threshold against row 7.2's wording | ≥12 across ≥6 | **3 visible people across 4 trades** | FAIL — correctly leaves 7.2 open |
| 16 | `get_active_prefixes` live call | `PROCESS-` active | `PROCESS-` present, `active: true`, read at 17:25:49Z | PASS |
| 17 | Launch message reproduced byte-exact | exact match | containment check `True` | PASS |
| 18 | Wording rule — "tradesman" in the new document | 0 | 0 | PASS |
| 19 | Repo-wide grep for other hand-edit instructions | none live | 2 found, both read, both legitimately different; left alone | PASS |
| 20 | `validate_build_plan.py --verbose` | exit 0 | `OK`, exit `0`, 7 steps, **15 sub-tasks**, done effort **48/77 = 62.3%** | PASS |
| 21 | Independent row count vs validator's sub-task count | equal | document holds **15** rows (10 `done`, 5 `new`); validator read **15** | PASS — no rows invisible |
| 22 | Independent recompute of done and total effort | matches validator | **48** and **77** | PASS |

**What was not tested:**

- **Whether the test recommendation from the 4.3 measurement reached the Votes tab.** Unchanged from the previous session and still the owner's to confirm. No vote was placed this session, and no second test row was written, as instructed.
- **Row 4.2's append path**, deliberately untouched. Nothing here infers anything about it.
- **How the favicon looks in a browser tab.** It was verified to decode and paint at 150px, which proves the SVG is valid and renders, but nobody has looked at it small. It is cosmetic either way.
- **The seeding document walked end to end by the owner.** It was written from measured facts about the feed and the code, but he has not yet followed it, so its clarity for its actual reader is untested. That is the honest limit of any document written for somebody else.
- **The launch message's wording** was not reviewed or improved — deliberately. It is reproduced byte-exact as supplied and marked as a draft for his approval.
- **`docs/RESTORE-dunchi-trader.md`** was read where it mentioned committing changes but was otherwise not revisited against the new endpoint state.

**Commits:**

- `99b66de` — `fix: code, deploy steps and favicon stop contradicting the deployed reality`

**Finished:** 2026-09-18T17:29:30Z

**End state:**

The plan stands at **48 of 77 effort (62.3%)**, 10 of 15 rows `done`. The movement from 46/75 is smaller than it looks and is worth reading carefully: row 4.4 added **2 to the numerator and 2 to the denominator**, so the percentage moved only 61.3% → 62.3%. Closing a 2-effort row on a 75 denominator would have given 64.0%; appending the row first is what accounts for the difference. Nothing was reweighted and no row was renumbered.

The live site serves 0 failed requests and 0 console errors on a plain load, down from 1 and 1. Nothing a maintainer or the owner reads still claims the votes endpoint does not exist, and `apps-script/DEPLOY.md` no longer contains an instruction that would have broken the site.

**Nothing is blocked on code.** Every remaining item is the owner's, inside Google, and the largest by far is seeding — the live list carries 3 visible test people across 4 trades against a launch requirement of 12–15 across at least 6. `docs/PROCESS-seeding-and-launch-dunchi-trader.md` now tells him exactly how to do it, and `README.md` points at it.

In priority order for him: **seed the list**; place one vote from his phone and check the Votes tab (row 4.2); delete the test row from the 4.3 measurement; then the remaining form and sheet actions in Layer 4. **The launch message must not be posted until step 7 has passed** — it is drafted and waiting for his approval, not ready to send.

**Effort per prompt for the plan, cumulative: 48 effort done ÷ 12 prompts sent = 4.0.** Both figures recorded, not only the ratio.

### 2026-09-18T17:41:58Z — Runbook reconciled to the deployed state before the owner's walk

**Source:** Claude Code
**Started:** 2026-09-18T17:35:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> Same conversation as prompts 2665 and 2667: https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH. You landed 2667 at 17:32Z. Repo re-read by me at 17:35:24Z: HEAD 697a80b2d59f9652299e89cf630d5041d21e65c0, master, tree clean, 0 ahead / 0 behind. Composed against that HEAD. Plan at 48/77 = 62.3%, 10 of 15 rows done.
>
> MISSION: re-read it at source in task 0 and name it back. Do not carry it from a previous reply.
>
> WHY THIS PROMPT EXISTS, and it is the whole point: the Owner is about to WALK docs/RESTORE-dunchi-trader.md end to end. That walk IS row 6.1, the largest row left at 9 effort, and it closes only when a human has walked it with the two Google logins and nothing else. Your own 2667 summary flagged that the runbook was NOT revisited after the endpoint was deployed. A runbook that contradicts the deployed reality wastes his walk and manufactures false defects. This prompt makes the inheritance package internally consistent BEFORE he walks it. It does not close row 6.1 and must not pretend to.
>
> Row 4.2 stays open and untouched: he has not yet confirmed a phone vote reaching the Votes tab. Write no test row into his Votes tab this session, and place no vote.
>
> This is documentation work and is exempt from the planning gate as such — no new plan row, no status change on 6.1.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD 697a80b2, master, clean, 0/0. Re-read the MISSION block at source and state it back. Read docs/RESTORE-dunchi-trader.md in full, and read row 6.1's own wording in full, because the runbook is judged against that wording and nothing else.
>
> ## TASK 1 — reconcile the runbook against what is actually deployed
>
> Go through docs/RESTORE-dunchi-trader.md step by step and correct every place where it disagrees with the repo and the live site as they now stand. Known drift to check, not an exhaustive list — find the rest yourself:
>
> - the Apps Script web app is DEPLOYED and its URL is live in app.js as of 4d67c15; the runbook was written when it was not
> - the Votes tab exists with the four-column header
> - VOTES_ENDPOINT is no longer empty, and step 4 of apps-script/DEPLOY.md no longer says to hand-edit app.js in the live repo
> - the favicon is now an inline data URI in index.html at 99b66de, so a from-scratch rebuild reproduces it by copying the repo, not by adding a file
> - docs/PROCESS-seeding-and-launch-dunchi-trader.md now exists and the runbook should point at it where seeding is concerned
> - the measured opaque-response behaviour means a rebuilt endpoint CANNOT be verified from the page; the only proof is a row appearing in the Votes tab, and the runbook's expected results must say so
>
> Every step keeps its expected result, and each expected result must be something the walker can actually see with the two Google logins and nothing else. Where a step cannot be verified that way, say so in the step rather than leaving the walker to discover it.
>
> ## TASK 2 — make the inheritance package agree with itself
>
> README.md, docs/RESTORE-dunchi-trader.md, apps-script/DEPLOY.md and docs/PROCESS-seeding-and-launch-dunchi-trader.md are now four documents telling one story to a non-technical inheritor. Check them against each other and fix contradictions and dead references. Report a table of every disagreement found and what you did about it. If any two documents give conflicting instructions for the same action, the one the walker would reach first wins and the other points at it rather than repeating it.
>
> Keep the plain-English voice throughout. "Tradesperson", never "tradesman". Ids are assigned once and never change.
>
> ## TASK 3 — the walk-ready check
>
> Produce, at the end of the runbook, a short numbered list the Owner ticks off as he walks it, one line per step, each naming what he should see. Nothing else — no prose block. It must be usable on a phone beside a laptop.
>
> ## TASK 4 — record and land
>
> Handover Layer 6 entry citing my conversation reference; Layer 1 current facts; any new Layer 3 or Layer 4 item this surfaces. Record against row 6.1 that the runbook was reconciled to the deployed state on this date and that the WALK ITSELF IS STILL OUTSTANDING and the row stays new. Commit and push BOTH remotes — GITHUB_TOKEN= is needed for origin, per the Layer 3 gotcha. Run the validator and report its exit code AND its reported sub-task count against the rows the document actually holds.
>
> ## RETURN
>
> - A detailed written summary.
> - The table of disagreements found and resolved, with file and line.
> - A formatted table of what was tested and each result, measured values not assertions.
> - The plan's completion position, and state plainly that this prompt clears no effort because it is documentation.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards passed, MISSION re-read at source.** HEAD `697a80b2d59f9652299e89cf630d5041d21e65c0`, branch `master`, `git status --porcelain` empty, `0 0` against origin. The MISSION block was read again from Layer 1 rather than carried from the previous reply. Row 6.1's wording and the whole runbook were read before any edit, because the runbook is judged against that wording and nothing else.

**Task 1 — the runbook reconciled, with one expected result measured rather than reasoned.** The prompt listed six known drifts; all six were addressed and **three further defects were found that the prompt did not name**.

The three found independently were: (1) step 2's example published-CSV address still carried `gid=1583719737`, the **superseded raw form-answers tab** — the exact misconfiguration this project was already caught by on 2026-09-18, which would have had the site serving unreviewed submissions and villagers' email addresses. It now shows `1915382769` with a warning describing how to spot the wrong tab from what the address downloads. (2) Step 5's file list omitted `CLAUDE.md`; it now lists every tracked file, verified against `git ls-files`. (3) **Step 5's expected result was factually wrong**, and this is the substantive find.

Step 5 asserted that a rebuilt-but-not-yet-pointed site says *"The list is being updated"*. That is a claim about program behaviour, so it was tested rather than argued. The page's failure states were driven one at a time against the **live** site with the feed intercepted and replaced, plus a control: a header-only feed gives *"Nobody on the list just yet"*; a wrong-shaped feed gives *"The list is being updated"*; an unreachable or 404 feed gives *"The list will not load at the moment"*; and one active row renders normally, which is what proves the harness served the feed rather than breaking it. A genuine rebuild copies an `app.js` pointing at a spreadsheet that no longer exists, so the **likelier** message at step 5 is the unreachable one — the opposite of what the runbook claimed. Step 5 now names both as correct at that point and says what would instead mean step 5 itself is wrong (a blank page or a GitHub 404, which indicate the files or the Pages setting rather than the list address). The same measurement established that *"Nobody on the list just yet"* is the **success** signal at step 6 — the most misreadable state in the runbook, because it reads like a failure — and step 6 now explains why its message differs from step 5's, which is what makes it proof rather than decoration.

An earlier run of the harness returned the unreachable message for all three conditions. That was a broken-interception artefact rather than a finding; it was caught by adding the control case, and it is recorded in Layer 3 because it would look like a real result to the next person who tries it.

On the six named drifts: step 7 no longer tells the walker to paste into `VOTES_ENDPOINT` unqualified — it distinguishes the **one-repository rebuild** case, where editing `app.js` directly is correct, from the **two-repository live** case, where it is the thing that breaks the site — and it no longer promises a result the page cannot give. Its expected result is now the Votes tab, with the measured reason stated plainly: the reply comes back sealed, the page thanks the villager either way, so the spreadsheet is the only proof. Step 5 gained a note that the favicon is drawn inside `index.html`, so a rebuild reproduces it by copying the repository rather than remembering a file. Step 6 points at `docs/PROCESS-seeding-and-launch-dunchi-trader.md` for seeding while making clear seeding is not part of rebuilding. Step 3 now states which two settings — email collection and the two response-validation rules — **cannot** be confirmed from outside the Google account, and supplies an incognito test that proves the email setting indirectly, rather than leaving the walker to discover the gap. A dated note at the top records that the document was checked against the live site on 2026-09-18 and that the walker is rebuilding something which currently exists and works.

**Task 2 — the four documents made to agree.** Every file reference in all four was extracted and checked to resolve against the filesystem; all resolve. One real contradiction was found: `README.md` still told the reader the recommend button was waiting to be switched on and that recommendations "only stay on their own phone", which has been false since `4d67c15`. It now states the button is switched on, that new recommendations arrive on the Votes tab, and that the Votes tab is the only place that tells the truth. `docs/PROCESS-seeding-and-launch-dunchi-trader.md` gained a table pointing at the single place each day-to-day job is documented, so it stops implicitly competing with the README. The three standing warnings appear in three documents and were **deliberately left duplicated**: row 6.1 requires them in the README, a rebuilder needs them at the moment of publishing and a seeder before touching the tab — they are entry points rather than competing procedures. Consistency of the id rule and the "tradesperson" wording rule was verified mechanically across all four.

**Task 3 — the walk-ready tick list** was added as the last section of the runbook: eleven numbered lines, one per step plus the closing checks, each naming what the owner should see, with no surrounding prose.

**Task 4 — recorded and landed.** Row 6.1 carries a dated note that the runbook was reconciled and that **the walk itself is outstanding**; its status is unchanged at `new` and no effort was cleared. Handover updated in Layer 1 (the runbook's outstanding item rewritten; a stale Key Scripts row saying the runbook was "Not written" superseded, and a current row added), Layer 3 (the measured three-message reference), Layer 5 (three `[DECISION]` entries) and Layer 6 (this entry).

**Testing performed:**

| # | What was tested (exact action) | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | `git rev-parse HEAD` / branch / tree / sync | `697a80b2…`, master, clean, `0 0` | `697a80b2d59f9652299e89cf630d5041d21e65c0`, master, empty, `0	0` | PASS |
| 2 | Feed state: **control**, one active row | list renders | 1 trade heading `Plumber1`, no notice | PASS — harness valid |
| 3 | Feed state: **header row only** | some message | **"Nobody on the list just yet"** | measured |
| 4 | Feed state: **wrong shape / wrong tab** | some message | **"The list is being updated"** | measured |
| 5 | Feed state: **request aborted** | some message | **"The list will not load at the moment"** | measured |
| 6 | Feed state: **HTTP 404** | some message | **"The list will not load at the moment"** | measured |
| 7 | Runbook step 5's asserted expected result vs #3–#6 | matches | **did NOT match** — it named the badfeed message; the likelier is unreachable | **DEFECT — corrected** |
| 8 | Repo file list vs runbook step 5's list | equal | step 5 omitted `CLAUDE.md`; 15 tracked files vs 10 listed | **DEFECT — corrected** |
| 9 | `grep` for the superseded gid `1583719737` outside handover history | none | found in runbook step 2 | **DEFECT — corrected** |
| 10 | Same grep after the fix | none | 0 matches outside handover history | PASS |
| 11 | `app.js` constants vs runbook claims | both set | `FEED` gid `1915382769`; `VOTES_ENDPOINT` set to the `/exec` URL | PASS |
| 12 | Every file reference in the four documents resolves | all exist | all resolve; one apparent miss was a shorthand mention, not a link | PASS |
| 13 | Stale "not switched on" / "endpoint does not exist" claims across the four | none | 0 matches after the README fix | PASS |
| 14 | Wording rule — "tradesman" in each of the four | 0 | README 0, RESTORE 0, DEPLOY 0, PROCESS 0 | PASS |
| 15 | Id rule consistency across README / RESTORE / PROCESS | consistent | all three state assigned once, never changed, never reused | PASS |
| 16 | Runbook step headings sequential after edits | 1–8 in order | Steps 1–8 in order, then closing checks, then the tick list | PASS |
| 17 | `validate_build_plan.py --verbose` | exit 0 | `OK`, exit `0`, 7 steps, **15 sub-tasks**, **48/77 = 62.3%** | PASS |
| 18 | Independent row count vs validator's sub-task count | equal | document holds **15** rows (10 `done`, 5 `new`); validator read **15** | PASS |
| 19 | Independent recompute of done and total effort | matches validator | **48** and **77** — unchanged, as expected for documentation | PASS |
| 20 | Both remotes pushed and level | equal | `697a80b..983525f` on origin and collab | PASS |

**What was not tested:**

- **The walk itself.** This is the whole point of the session's restraint: the runbook was reconciled, not walked. Every step's expected result is now something the walker should be able to see, but **whether each step is actually achievable with the two logins alone is exactly what row 6.1 exists to establish, and only the owner can establish it.** Nothing here shortens that walk's verdict.
- **Steps 1–4 and 7–8 of the runbook were not executed.** No spreadsheet was created, no form built, no repository made, no Apps Script deployed. The corrections are to what the document *says*, checked against the repository and the live site, not against a fresh rebuild.
- **Step 3's two Google-side settings** remain unconfirmable from outside the account. That is now stated in the step rather than left for the walker to trip over, but it is not resolved.
- **Row 4.2 was left untouched** as instructed: no vote was placed and no test row was written to the Votes tab.
- **The incognito form test in step 3** was written but not performed — it needs the live form and was not exercised here.
- **The tick list has not been used on a phone.** It is short enough to be usable there by construction, but that is a design intention rather than a measurement.

**Commits:**

- `983525f` — `docs: reconcile the runbook to the deployed state before the owner walks it`

**Finished:** 2026-09-18T17:41:58Z

**End state:**

The plan is **unchanged at 48 of 77 effort (62.3%)**, 10 of 15 rows `done`. **This session cleared no effort, and that is correct** — it was documentation work against an open row, not delivery. Row 6.1 stays `new` at 9 effort, the largest row left.

What changed is that the runbook now matches the system it describes. Three defects in it would each have cost the owner time during the walk, and one — step 5's expected result — would have had him re-doing correctly completed steps because the message on screen did not match the document. The runbook also no longer promises a confirmation the page is measurably incapable of giving, which is the failure most likely to have been recorded as a genuine defect against a working system.

The inheritance package is four documents telling one story: `README.md` for day-to-day running, `docs/PROCESS-seeding-and-launch-dunchi-trader.md` for filling the list and launching, `apps-script/DEPLOY.md` for the recommend button, and `docs/RESTORE-dunchi-trader.md` for rebuilding from nothing. Each now points at the others rather than repeating them, with the three standing warnings the deliberate exception.

Nothing is blocked on code. For the owner, in priority order: **walk the runbook** (row 6.1, and the tick list at its end is the ticksheet); **seed the list** to 12–15 tradespeople across at least 6 trades; **place one vote from his phone and check the Votes tab** (row 4.2); **delete the test row** from the 4.3 measurement; then the remaining form and sheet actions in Layer 4. The launch message stays a draft and must not be posted until step 7 has passed.

**Effort per prompt for the plan, cumulative: 48 effort done ÷ 13 prompts sent = 3.69.** Both figures recorded, not only the ratio.

### 2026-09-18T17:52:10Z — Row 4.2 closed on the owner's phone vote; the stale-page finding recorded and assessed

**Source:** Claude Code
**Started:** 2026-09-18T17:48:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> Same conversation as prompts 2665, 2667 and 2670: https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH. You landed 2670 at 17:44Z. Repo re-read by me at 17:47:39Z: HEAD d6dfcc989a69e75bb021900a847800a4350c8b49, master, tree clean, 0 ahead / 0 behind. Composed against that HEAD. Plan at 48/77 = 62.3%, 10 of 15 rows done.
>
> MISSION: re-read at source in task 0 and name it back.
>
> THE EVENT THIS PROMPT RECORDS. Row 4.2's own wording closes it when a vote placed on a real phone appends a row to the Votes tab. That has now happened. The Owner (Gavin), 2026-09-18 ~17:47Z, VERBATIM: "the vote populated". He placed the vote from his phone on the live site and has confirmed the row reached the Votes tab.
>
> There is a second fact worth recording accurately, because it nearly cost a wrong diagnosis. His FIRST attempt, at about 17:25Z, did not reach the sheet: the page thanked him and no row appeared. The working explanation, REPORTED not measured, is that his phone was serving the cached app.js from his 16:50Z sighting, taken before the endpoint went live at about 17:05Z, so the page skipped the send and showed its thank-you anyway. He retried on a cache-busted URL and that vote populated. Record it as REPORTED with that reasoning, never as measured — nobody instrumented his phone.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD d6dfcc98, master, clean, 0/0. Re-read the MISSION block at source and state it back. Read row 4.2's own wording in full before closing anything.
>
> ## TASK 1 — close row 4.2
>
> Close it on the Owner's confirmation, recorded verbatim with its date. Check its wording clause by clause first: a vote placed on a real phone appends one row to the Votes tab carrying the trader id rather than the name; an attempted write to the Published tab fails; the Apps Script source is committed so it can be redeployed from scratch. Two of those three were already evidenced — the committed source at apps-script/Code.gs, and the Published-tab isolation proven by 21 logic tests against a stub in the earlier session. State plainly which clause rests on which evidence, and if you judge any clause NOT covered, leave the row open and say which. Do not close it on the Owner's sentence alone if his sentence does not reach every clause.
>
> ## TASK 2 — record the cached-page finding
>
> Add a Layer 3 entry: a page loaded before a change keeps working from the cached copy, so a villager who visited shortly before a deploy can use a stale app.js and see a thank-you for a vote that was never sent. Record the measured facts around it — the endpoint went live at about 17:05Z, the server-driven vote at 18:02 local appended correctly, the Owner's first phone attempt did not, his cache-busted retry did — and mark the cache explanation REPORTED. Say what it means for launch: it bites people who visited just before a change, not people arriving fresh.
>
> Then judge, and say plainly either way: does this warrant any change to the site, or is it inherent to a no-build-step static site and simply worth knowing? Do NOT change site behaviour in this prompt. If you recommend a change, name it as a recommendation for the Owner to rule on.
>
> ## TASK 3 — record and land
>
> Handover Layer 6 entry citing my conversation reference; Layer 1 current facts; close the Layer 4 item for the Owner's vote. Keep the test-row deletion item open — he has not confirmed deleting it, and there are now two rows in that tab that are not villagers' (the 4.3 test row and his own test vote). Say so in Layer 4 with what each one is, so he deletes the right things before launch.
>
> Update the plan for row 4.2 with full STD-00009 row grammar and delivery fields; never insert or renumber. Commit and push BOTH remotes — GITHUB_TOKEN= is needed for origin. Run the validator and report its exit code AND its reported sub-task count against the rows the document actually holds.
>
> ## RETURN
>
> - A detailed written summary.
> - A formatted table of what was tested and each result, measured values not assertions, and for row 4.2 a clause-by-clause table of its wording against the evidence that closes each clause.
> - The plan's new completion position: effort done, effort total, percentage.
> - What now remains, and which of it is the Owner's rather than the build's.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards passed, MISSION re-read at source.** HEAD `d6dfcc989a69e75bb021900a847800a4350c8b49`, branch `master`, `git status --porcelain` empty, `0 0` against origin. The MISSION block was read again from Layer 1 rather than carried from the previous reply. Row 4.2's full wording was read before anything was closed.

**Task 1 — row 4.2 closed, clause by clause rather than on one sentence.** The owner's confirmation — *"the vote populated"*, 2026-09-18 ~17:47Z — is recorded verbatim in the row, in Layer 1 twice and in Layer 4. It plainly evidences the clause the row was held open on for three sessions: an append from a real phone, the only clause a build cannot supply for itself.

It does not, by itself, reach the other two, so each was traced to its own evidence and the **source of each was named separately**:

- **Clause 1, the append and *"carrying the trader id rather than the name"*.** The append is the owner's confirmation. The id-not-name half was **verified by reading the shipped code this session**: `app.js` calls `sendRecommendation(l.id, by, why)`, so the tradesperson is referenced ONLY by the stable id; `Code.gs` line 146 appends `[new Date(), id, name, text]`, putting that id in column B. Worth stating because it is easy to misread: the `name` column carries the **villager's own name** — or the literal `"a villager"` when left blank — and never the tradesperson's.
- **Clause 2, *"an attempted write to the Published tab fails"*.** Satisfied by a **stronger property than a runtime failure**, and the distinction is deliberate: there is no code path that can address `Published` at all. The target is the hard-coded constant `VOTES_TAB = 'Votes'` (line 39), never derived from caller input, with a `FORBIDDEN_TABS` guard checked before any sheet is opened (lines 137–139), and the file holds no read, edit or delete path. Such a write is not expressible through this endpoint rather than merely rejected by it. The 21 stub tests including four adversarial attempts are REPORTED from the 15:06:40Z session, not re-run here.
- **Clause 3, *"the Apps Script source is committed … so it can be redeployed from scratch"*.** **Measured this session:** `apps-script/Code.gs`, 5,733 bytes, committed at `3bdf845`, present in both `origin/master` and `collab/main`, alongside `apps-script/DEPLOY.md` with five numbered steps.

**One limit is recorded rather than glossed:** nobody here can verify that the script **currently deployed** in his Apps Script project is byte-identical to the committed `Code.gs` — he pasted it, and only he can see it. Clause 3 asks that the source be committed so it *can* be redeployed, which is measured and true; it does not assert that what is running today came from that file.

**Task 2 — the stale-page finding recorded, and assessed.** A new `[BUG]` in Layer 3 records that a page already open on a phone keeps running the `app.js` it loaded, so a villager holding a copy from before a deploy can be thanked for a vote that was never sent — the optimistic thank-you and an empty `VOTES_ENDPOINT` combine to make the failure invisible at the moment it happens. The timeline is tabulated with each line marked MEASURED or REPORTED: the commit at 16:59:59Z and the first endpoint-carrying serve at ~17:01Z are measured from the commit timestamp and a cache-busted fetch; the successful server-driven vote at ~17:02:32Z is measured from row 4.3; the owner's failed 17:25Z attempt and successful cache-busted 17:47Z retry are REPORTED by him.

**The cache explanation is marked REPORTED throughout**, and one measurement was taken that **narrows** it rather than confirming it: GitHub Pages serves both `index.html` and `app.js` with `cache-control: max-age=600`. A ten-minute freshness window does **not** by itself explain a stale page ~35 minutes after loading, so the likelier mechanism is an already-loaded page still alive in the phone's memory — an open tab or a back-forward-cache restore — rather than HTTP caching holding a stale file past its expiry. That is recorded next to the inference deliberately: it is the part of the reported story that does not quite fit, and leaving it unrecorded would let a plausible account harden into a mechanism nobody tested. Both routes produce the identical symptom and neither was observed on his device.

**The assessment, stated plainly as the prompt required: this warrants no change to the site.** It is inherent to a no-build-step static site and is worth knowing rather than fixing. It is a deploy-window problem on a site that will stop being deployed once launched; every available fix costs more than the problem (a hand-edited cache-busting version string is exactly the remember-this-step trap decision 14 forbids, and fails silently when forgotten; a service worker adds machinery a non-technical inheritor cannot reason about); and the blast radius is one lost recommendation, recoverable by asking again, with nothing corrupted and no listing touched. **No site behaviour was changed.** The mitigation offered is procedural and already recorded as the diagnosis step — reload once with `?x=1` after any change to `app.js` before testing — and the entry states explicitly that a behaviour change is the owner's call, not the build's.

**Task 3 — recorded and landed.** Layer 1: plan position superseded to 54/77 (70.1%); the votes-endpoint URL row now records the end-to-end confirmation; the phone-vote outstanding item closed with `RESOLVED` and the verbatim quote; **the test-row item deliberately kept open and widened**, because the Votes tab now holds **two** non-villager rows and they are different things — the 4.3 automated test row, identifiable by its labelled text, and the owner's own ~17:47Z test vote, whose content only he knows. Both are described so he removes the right things, with a warning not to touch the Published tab while doing it, and a note that his failed 17:25Z attempt left nothing to remove. The Next Action block was re-prioritised: seeding first, then the runbook walk, then the two Votes rows, then the Google-side actions. Layer 4 carries the same widened item. Layer 5 gained three `[DECISION]` entries. The plan's row 4.2 and its satellite delivery row were updated; nothing was inserted or renumbered.

**Testing performed:**

| # | What was tested (exact action) | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | `git rev-parse HEAD` / branch / tree / sync | `d6dfcc98…`, master, clean, `0 0` | `d6dfcc989a69e75bb021900a847800a4350c8b49`, master, empty, `0	0` | PASS |
| 2 | What `app.js` sends as the trader reference | the id, not the name | `sendRecommendation(l.id, by, why)` — id only; `by` is the VILLAGER's name | PASS |
| 3 | What `Code.gs` appends | id in its own column | line 146 `sheet.appendRow([new Date(), id, name, text])` | PASS |
| 4 | Can any code path address `Published`? | no | `VOTES_TAB` a hard-coded constant (line 39); `FORBIDDEN_TABS` guard (lines 137–139); no read, edit or delete path | PASS |
| 5 | `Code.gs` committed and in both remotes | present | 5,733 B at `3bdf845`; in `origin/master` and `collab/main` | PASS |
| 6 | `DEPLOY.md` redeployment steps present | numbered steps | 5 numbered steps | PASS |
| 7 | Endpoint commit timestamp | ~17:00Z | `4d67c15` authored **2026-09-18T16:59:59+00:00** | measured |
| 8 | **Live cache headers on `app.js`** | — | **`cache-control: max-age=600`**, plus `etag` and `last-modified` | measured |
| 9 | **Live cache headers on `index.html`** | — | **`cache-control: max-age=600`**, same | measured |
| 10 | Does a 600 s window explain a stale page at ~35 min? | — | **No** — recorded as narrowing the REPORTED explanation | measured / reasoned |
| 11 | `validate_build_plan.py --verbose` | exit 0 | `OK`, exit `0`, 7 steps, **15 sub-tasks**, **54/77 = 70.1%** | PASS |
| 12 | Independent row count vs validator's sub-task count | equal | document holds **15** rows (11 `done`, 4 `new`); validator read **15** | PASS |
| 13 | Independent recompute of done and total effort | matches validator | **54** and **77** | PASS |

**What was not tested:**

- **The owner's phone.** Nobody instrumented it. That his first attempt ran a stale `app.js` is REPORTED and inferred, never measured, and the one measurement taken (the 600-second cache window) does not fully account for a 35-minute gap — which is recorded rather than smoothed over.
- **The append itself.** The row reaching the Votes tab is the owner's observation inside his own Google account. It cannot be measured from outside, which is inherent to the design rather than a gap in the testing.
- **Whether the DEPLOYED script matches the committed `Code.gs`.** Only he can see the Apps Script project. Clause 3 does not require it, and the row records the limit explicitly.
- **The Published-tab isolation was not re-run this session** — the 21 stub tests are REPORTED from the earlier session. What was verified here is the structural property in the source: no code path can name that tab.
- **No vote was placed and no test row was written** to the Votes tab this session.
- **No site behaviour was changed**, so nothing about the stale-page finding was fixed or re-measured after a change.

**Commits:**

- None for code. This session changed documentation only; the commits are recorded in the git history for `docs/HANDOVER-dunchi-trader.md` and `docs/BUILD-PLAN-dunchi-trader.md`.

**Finished:** 2026-09-18T17:52:10Z

**End state:**

**Step 4 is complete.** The votes path works end to end from a real phone: a villager taps a card, types a few words, and the recommendation reaches the Votes tab. That was the last uncertain mechanism in the system, and it is now confirmed rather than assumed.

The plan stands at **54 of 77 effort (70.1%)**, 11 of 15 rows `done`, up from 48/77 (62.3%). Row 4.2's 6 effort is the whole movement; the denominator did not change.

**Four rows remain, and every one of them waits on the owner** — none is blocked on code, and none can be advanced by the build:

- **6.1 (9 effort)** — walk `docs/RESTORE-dunchi-trader.md` end to end. The largest row left. Reconciled to the deployed state at `983525f` so the walk is not wasted, and it ends with a tick list usable on a phone.
- **7.1 (5)** and **7.2 (3)** — both need the list seeded first: 12–15 tradespeople across at least 6 trades, against 3 visible test people across 4 trades today.
- **5.1 (5)** — paste the four sheet formulas, paste-ready in `apps-script/SHEET-FORMULAS.md`.

Before launch he must also **delete two rows from the Votes tab**: the 4.3 automated test row, labelled for deletion, and his own ~17:47Z test vote, which only he can identify. Both are described in Layer 1 and Layer 4, with a warning not to touch the Published tab while doing it.

**The launch message stays a draft** and must not be posted until step 7 has passed.

**Effort per prompt for the plan, cumulative: 54 effort done ÷ 14 prompts sent = 3.86.** Both figures recorded, not only the ratio.

### 2026-09-18T18:19:44Z — Sheet formulas rewritten against the real responses tab; three form defects recorded

**Source:** Claude Code
**Started:** 2026-09-18T18:14:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> Same conversation as prompts 2665, 2667, 2670 and 2671: https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH. You landed 2671 at 17:54Z. Repo re-read by me at 18:13:42Z: HEAD 94ff7dbdee91ebfedf2ef41ad42cde1c006a3d54, master, tree clean, 0 ahead / 0 behind. Composed against that HEAD. Plan at 54/77 = 70.1%, 11 of 15 rows done.
>
> MISSION: re-read at source in task 0 and name it back.
>
> ## THE FINDING — apps-script/SHEET-FORMULAS.md IS WRITTEN AGAINST THE WRONG COLUMNS
>
> The formulas were written and logic-tested against an assumed responses-tab layout. The Owner has now pasted the REAL header row and the real data. They do not match, and pasting the committed formulas would put nonsense in every row.
>
> The Owner supplied this verbatim. It is his sheet, so it is the authority on its own shape; it is REPORTED to you rather than measured by you, and you cannot read that tab from the server because it is not published. Record it as reported.
>
> Real responses-tab columns, in order: A Timestamp, B Email Address, C What Trade are you recommending?, D What is their First name?, E What is their Last name?, F What is their telephone number?, G What is their Business called? (Optional), H Please give a short amount of text to describe your experience with them and why you are recommending them., I Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions.
>
> Column J is empty. The committed formulas assume phone in E, name in D, experience text in G and business in J — every one of those is wrong.
>
> The three real data rows he pasted, verbatim, for your test fixtures:
>
> 9/18/2026 13:29:27 | (no email) | Plumber | Bob Samwell | (blank) | 07887988959 | (blank) | top blokes | Frankie Valentine
> 9/18/2026 13:30:08 | (no email) | Electrician | Ben Franks | (blank) | 07887800192 | (blank) | Lovely people | Gavin
> 9/18/2026 19:10:50 | gsamwell@deverse.co.uk | Gas Engineer | Helen | Smith | 078853335434 | (blank) | Really helpful chap - punctual etc. | Gavin
>
> Note what those rows tell you and check each one rather than taking my word: the first two carry a FULL NAME in the first-name column with last name blank, the third is split properly; the third carries an email address, so form email collection is still on; the third's phone number has twelve digits, so the phone validation rule is either absent or not enforcing; and two of the three experience texts are under fifteen characters, which should trigger CHECK THIS.
>
> The Published tab's columns are unchanged and the formulas' Published-side references are correct: A id, B first_name, C last_name, D business, E phone, F trade, G extra_trade, H status.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD 94ff7dbd, master, clean, 0/0. Re-read the MISSION block at source and state it back. Read apps-script/SHEET-FORMULAS.md in full, read row 5.1's own wording in full, and read solution design §7.2 and §7.3, which define the normalisation and the four verdicts.
>
> ## TASK 1 — rewrite the formulas against the real columns
>
> Rewrite phone_key, name_key and verdict to work against the layout above, keeping the meaning defined in the solution design unchanged. Decide the target cells yourself and state why: column I is the last used column, so J is free. Keep them together and say exactly which cell each goes in.
>
> Points to get right, each of which you should satisfy yourself about rather than accept from me:
>
> - phone_key normalises the +44 and 0 forms to one key, from column F
> - name_key must be comparable with the Published tab's first_name plus last_name. A response carrying "Bob Samwell" in the first-name column with a blank last name must produce the same key as a Published row holding "Bob" and "Samwell". Say plainly whether your formula achieves that, and if it cannot, say so rather than implying it does
> - CHECK THIS fires when the business reads "not known" (now column G) or the experience text is under fifteen characters (now column H), and takes precedence over ALREADY ON SITE
> - the trade column, C, is now visible to you and was not used before. Consider whether the verdict should say anything about a trade that is not in the site's trade list, and recommend rather than implement if you think it should
>
> ## TASK 2 — test them against the real rows
>
> Simulate locally against the three real rows above plus rows you construct to trigger every verdict: NEW, ALREADY ON SITE, SAME NAME DIFFERENT NUMBER, CHECK THIS by short text, CHECK THIS by "not known" business, and the precedence case. Report a table of input row against verdict produced. Say plainly that this is local simulation and has not run in Google Sheets.
>
> Row 5.1 does NOT close on this. Its wording closes it when the Owner has pasted the formulas and one sample row of each case shows the right verdict in the real sheet. Leave it open.
>
> ## TASK 3 — rewrite the document for a human at a keyboard
>
> apps-script/SHEET-FORMULAS.md is what the Owner pastes from. Rewrite it so it names the exact cell for each formula, states the column layout it depends on, and — this is the part that failed today — tells the reader how to check their own sheet matches that layout BEFORE pasting, and what to do if it does not. Keep the dropdown setup. Plain English throughout.
>
> If solution design §7.2 or §7.3 states the wrong columns, correct it to the real layout and say so. If it states only the meaning and not the columns, leave it alone and say that instead.
>
> ## TASK 4 — record the three defects this exposed
>
> As Layer 4 items for the Owner, or Layer 3 if you judge them defects of the build:
>
> - form email collection is still on, evidenced by an address in the third row
> - the phone validation rule is absent or not enforcing, evidenced by a twelve-digit number
> - the first-name field is collecting full names, so the form's two name fields are not being used as intended. Recommend whether this is a form problem, a formula problem, or simply how people fill forms in — and say which
>
> Do not change the Google Form. Nobody here can.
>
> ## TASK 5 — record and land
>
> Handover Layer 6 entry citing my conversation reference; Layer 1 current facts; the Layer 4 items above. Record against row 5.1 that the committed formulas were wrong against the real sheet, that they have been rewritten and simulated, and that the row still closes only on the Owner's paste. Commit and push BOTH remotes — GITHUB_TOKEN= is needed for origin. Run the validator and report its exit code AND its reported sub-task count against the rows the document actually holds.
>
> ## RETURN
>
> - A detailed written summary.
> - The three rewritten formulas, each in its own fenced block, ready for the Owner to copy one at a time, with its cell named immediately above it.
> - The table of test input against verdict produced.
> - The plan's completion position, and state plainly whether this prompt cleared any effort.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards passed, MISSION re-read at source, all three required documents read.** HEAD `94ff7dbdee91ebfedf2ef41ad42cde1c006a3d54`, master, clean, `0 0`. `apps-script/SHEET-FORMULAS.md`, row 5.1's wording and solution design §7.2/§7.3 were all read before any change.

**Task 1 — formulas rewritten, with four things checked rather than accepted.**

Target cells: **`J2` `phone_key`, `K2` `name_key`, `L2` `verdict`, column `M` the dropdown** on Form responses. Column `I` is the last question, so `J` is the first free column and the four sit together immediately right of the answers, which is where a reader expects them. They have **moved** from the old `K`/`L`/`M`/`N`, and that is called out wherever the old cells were named.

*phone_key, from column F.* Normalises `+44` and `0` to one key — and a defect was found here that the brief did not name: **`0044` was not normalised** by the old logic, producing `00447887988959` instead of `07887988959`, so the same number written that way would have read as a different person. Fixed by stripping a leading `0044` before the `44` case. Verified by simulation that all five UK forms — `07887988959`, `+44 7887 988959`, `0044 7887 988959`, `+447887988959`, `(07887) 988959` — collapse to one key.

*name_key, from columns D and E.* **It does achieve the full-name case, and this was verified rather than asserted.** `"Bob Samwell"` in D with E blank and a Published row of `"Bob"`/`"Samwell"` both produce `bobsamwell`, because the formula concatenates first and last *before* stripping non-alphanumerics — the order is what makes it work. Also verified: differing capitals, doubled spaces, apostrophes and hyphen-versus-space all match. **It cannot match a name typed back to front** (`Samwell` then `Bob` against `Bob`/`Samwell`), which is inherent to concatenation rather than fixable by a better regex. That limitation is stated plainly in the document under its own heading rather than implied away, together with a second one: the verdict compares against the site, not against other form answers, so the same person recommended twice before being published shows `NEW` on both rows — correct, but worth knowing.

*verdict.* `CHECK THIS` now fires when the **last name (E) or the business (G)** reads "not known", or the experience text (H) is under fifteen characters, and it is evaluated before the two lookups so it takes precedence over `ALREADY ON SITE` as the design requires. Checking both name and business was a deliberate departure from the brief, which named only the business: solution design §7.2 says *"Surname is 'Not Known'"* and the form's own help text asks villagers to write exactly that on the last-name question, so the surname is where the convention actually lives. Checking both costs one `REGEXMATCH`, catches it whichever box was used, and cannot produce a false negative. §7.2 was corrected to say "surname **or business**" so design and formula agree.

**Two further defects were found while rewriting, neither in the brief and neither caused by the column mismatch.** The old verdict formula nested `ARRAYFORMULA` inside `COUNTIF`, which Google Sheets rejects outright because `COUNTIF` needs a real range rather than a computed array — **it would have errored on paste whatever the columns said**. Fixed by giving Published two helper columns (`I2` phone key, `J2` name key) so `COUNTIF` and `MATCH` have genuine ranges; that this is safe was **measured, not assumed** — `app.js` maps the Published tab by header name via `header.indexOf` and reads only its eight known columns, so extra columns are ignored. And `MATCH` was unguarded and would have surfaced `#N/A` inside the verdict text; it is now wrapped in `IFERROR`.

*The trade column.* Recommended, not implemented, as the prompt directed. The case is stronger than it looks and rests on a measurement: **`app.js` has no fixed trade vocabulary** — site headings are built from whatever text sits in Published's `trade`/`extra_trade`. A misspelling therefore does not fail loudly; it silently creates a separate heading with one person under it, and a villager looking for a plumber never sees somebody filed under `Plumbner`. The form's dropdown protects the responses tab, but the owner retypes the trade when copying a row to Published, and that retyping is unprotected. The right home for the check is therefore the **Published** tab, not the responses tab these formulas live on — a different piece of work with its own paste steps. Recorded as a Layer 5 recommendation for him to rule on.

**Task 2 — simulated against the three real rows plus nine constructed.** All twelve produce the intended verdict; the table is in the session summary and in the plan row. The owner's predictions were confirmed: rows 1 and 2 do trigger `CHECK THIS` on short experience text (10 and 13 characters). **This is local simulation in JavaScript modelling the formula semantics — it has NOT run in Google Sheets.** The document's three formulas were additionally checked structurally against the shipped file: parentheses balanced, quotes even, `CHECK THIS` evaluated before both lookups, each reading the intended column, `MATCH` guarded, and no nested `ARRAYFORMULA` inside `COUNTIF`.

**Task 3 — the document rewritten for someone at a keyboard.** It now opens with a **⚠️ FIRST — check your sheet matches this layout** section listing all nine questions against their column letters, telling the reader to stop if their sheet differs, naming the three columns that matter most, and warning that changing the form changes the columns. That is precisely the step whose absence caused today's failure. Every formula names its exact cell immediately above it, the Published helper columns are a numbered step of their own, the dropdown setup is kept, and a troubleshooting table maps five likely symptoms to their causes.

**Solution design §7.2 and §7.3 state only the meaning, not the columns** — there is not a single cell reference in either — so per the prompt's instruction they were left alone structurally. The one substantive correction made was the `CHECK THIS` trigger wording described above.

**Task 4 — the three defects recorded, one of them corrected in the recording.** Email collection ON (HIGH) and the telephone rule (MEDIUM) are the owner's, in Layer 4, since nobody here can touch the Google Form. **The telephone item corrects the brief's reasoning:** `078853335434` is twelve digits, but it **passes** the documented rule `^[\d\s\+\(\)\-]{10,20}$`, which counts characters not digits and permits 10–20. Its presence is therefore **not** evidence the rule is missing or unenforced — a correctly installed rule would also have allowed it. Whether the rule exists at all remains UNKNOWN and is already carried separately. The recommendation is to count digits instead. The name-splitting question was judged as asked: **it is simply how people fill in forms** — not a form defect, because the boxes are correctly labelled and merging them would lose the split for villagers who use it properly and which Published's own two columns want; and not a formula defect, because the rewritten `name_key` already handles it, verified by simulation. **No action recommended**, recorded so a future session does not "fix" the form and break the split.

**Task 5 — recorded and landed.** Layer 1: the 5.1 outstanding item rewritten with the real layout and the moved cells, plus the two new form items. Layer 3: a `[BUG]` for the build's own failure — formulas written against a guessed layout and **recorded in the plan as tested against the real one**, which was never knowable. Layer 4: three items. Layer 5: four `[DECISION]` entries. Row 5.1 updated and deliberately left `new`.

**Testing performed:**

| # | What was tested | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | HEAD / branch / tree / sync | `94ff7dbd…`, master, clean, `0 0` | as expected | PASS |
| 2 | Do §7.2/§7.3 name any columns? | — | **No cell references in either** — meaning only | left alone, as instructed |
| 3 | `name_key`: `"Bob Samwell"`+blank vs `Bob`/`Samwell` | match | both `bobsamwell` | **PASS** |
| 4 | `name_key`: case, double space, apostrophe, hyphen-vs-space | match | all match | PASS |
| 5 | `name_key`: reversed order (`Samwell`/`Bob`) | — | `samwellbob` ≠ `bobsamwell` | **FAILS — stated as a limitation** |
| 6 | `phone_key`: five UK forms of one number | one key | all → `07887988959` | PASS |
| 7 | `phone_key`: `0044` under the OLD logic | — | `00447887988959` — wrong | **DEFECT — fixed** |
| 8 | Old verdict formula: `ARRAYFORMULA` inside `COUNTIF` | valid | **invalid in Sheets** | **DEFECT — fixed** |
| 9 | Are extra Published columns safe for the site? | safe | `app.js` uses `header.indexOf`, reads 8 known names only | PASS — measured |
| 10 | Does the site have a fixed trade list? | — | **No** — headings derived from feed text | measured; drives the recommendation |
| 11 | 12 simulated rows → verdicts | all correct | all 12 correct (table in summary) | PASS |
| 12 | Shipped document's 3 formulas: parens/quotes | balanced | all balanced, quotes even | PASS |
| 13 | Shipped verdict formula: 9 structural properties | all hold | all 9 PASS | PASS |
| 14 | `078853335434` against the documented phone rule | — | **PASSES** (rule counts characters 10–20) | corrects the brief's premise |
| 15 | Validator | exit 0 | `OK`, exit `0`, **15 sub-tasks**, 54/77 = 70.1% | PASS |
| 16 | Independent row count vs validator | equal | 15 vs 15 | PASS |

**What was not tested:**

- **The formulas have not run in Google Sheets.** Everything here is local simulation of the formula semantics plus structural checks on the shipped text. Sheets' own evaluation — array spilling, locale separators, `REGEXMATCH` on a whole column — is not exercised by either. That is row 5.1's closing condition and remains the owner's.
- **The real responses tab was never read.** It is not published and cannot be reached from the server; the layout and the three data rows are **REPORTED by the owner**, who is the authority on his own sheet.
- **Whether the two form validation rules are installed at all** is still UNKNOWN. This session measured only that the documented rule would have permitted the twelve-digit number.
- **The Published helper columns have not been pasted**, so the claim that extra columns do not disturb the site is measured from the code's behaviour rather than observed on the live feed with those columns present.
- **No Google Form change was made or attempted**, as instructed.
- **The trade check was not implemented**, only recommended.

**Commits:**

- `bd3f42a` — `fix: rewrite the sheet formulas against the REAL responses-tab columns`

**Finished:** 2026-09-18T18:19:44Z

**End state:**

The plan is **unchanged at 54 of 77 effort (70.1%)**, 11 of 15 rows `done`. **This prompt cleared no effort**, which is correct: row 5.1 closes on the owner pasting the formulas and seeing the right verdicts in his own sheet, and nothing done here can substitute for that.

What changed is that the formulas would now work. The committed ones would have written nonsense into every row of his responses tab — four wrong columns — and the verdict formula would have errored on paste regardless, because of the nested `ARRAYFORMULA` inside `COUNTIF`. Both are fixed, along with the `0044` normalisation gap and the unguarded `MATCH`, and the document now makes the reader check their own layout before pasting anything.

Four rows remain, all the owner's: **6.1** (9, walk the runbook), **7.1** (5, full journey — needs seeding), **5.1** (6, paste these formulas), **7.2** (3, seed to 12–15 across ≥6 trades). Two Votes-tab rows still need deleting before launch, and the launch message stays a draft.

**Effort per prompt for the plan, cumulative: 54 effort done ÷ 15 prompts sent = 3.6.** Both figures recorded, not only the ratio.

### 2026-09-18T18:33:23Z — Seven-character minimum on both surfaces; trade grouping measured

**Source:** Claude Code
**Started:** 2026-09-18T18:27:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> Comply with the loaded global CLAUDE.md and the loaded project CLAUDE.md. Both auto-load — do NOT Read either.
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> ## CONTEXT TRANSFER BRIEF
>
> Same conversation as prompts 2665, 2667, 2670, 2671 and 2673: https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH. You landed 2673 at 18:22Z. Repo re-read by me at 18:26:39Z: HEAD 2169da1020d9d70c266d3972d622d8b831e76266, master, tree clean, 0 ahead / 0 behind. Composed against that HEAD. Plan at 54/77 = 70.1%, 11 of 15 rows done.
>
> MISSION: re-read at source in task 0 and name it back.
>
> ## REQUIREMENT AS STATED
>
> The Owner has ruled on the minimum length of the experience text. His words, verbatim, 2026-09-18 ~18:26Z:
>
> "I think we can change the check to 7 characters. As they can't really put in a sentence without more than that "Fixed Gate" is about as short as you can get."
>
> Fifteen becomes SEVEN. Not removed — seven. This is his ruling and it outranks the solution design, which is downstream of it; where the design says fifteen, the design is what changes.
>
> He has also reported two form changes he made himself, in Google, which nobody here can verify: email collection is now OFF, and an eleven-digit phone validation rule is in. Record both as REPORTED by the Owner, not measured, and close their Layer 4 items on that basis, saying it is his report.
>
> ## TASK 0 — GUARDS
>
> Confirm HEAD 2169da10, master, clean, 0/0. Re-read the MISSION block at source and state it back. Read row 5.1's wording, row 4.1's wording, and the current CHECK THIS rule in apps-script/SHEET-FORMULAS.md. Read the minimum-length check in app.js and quote the line.
>
> ## TASK 1 — seven characters in the sheet verdict
>
> Change the CHECK THIS trigger in the verdict formula from fifteen characters to seven. Leave the two "not known" triggers alone — surname and business — and leave the precedence of CHECK THIS over ALREADY ON SITE alone.
>
> Re-run your twelve-case simulation and report the full table again, calling out every verdict that CHANGES as a result. In particular say what the Owner's three real rows now produce: "top blokes" is ten characters and "Lovely people" thirteen, so both should stop being flagged.
>
> Update apps-script/SHEET-FORMULAS.md with the corrected formula, keeping the layout check you added at its start. Correct solution design §7.3 where it states fifteen.
>
> Row 5.1 does NOT close. It closes when the Owner has pasted the formulas and seen one sample row of each verdict come out right in his own sheet.
>
> ## TASK 2 — seven characters on the website, as an appended plan row
>
> The recommend panel in app.js currently refuses a note under fifteen characters. That is a change to shipped behaviour on a closed row, so it gets its own row rather than being slipped in.
>
> Append ONE new sub-task to step 4 at the next free number — appended, never inserted, nothing renumbered — full STD-00009 §5.1 row grammar and delivery fields, status new, effort 2, Owner 222b34c4-7d05-48f4-9d23-cfb47e96d9de. Its outcome is that a villager describing a small job in a few words is not turned away. Record its provenance as unplanned work entered this session in Layer 6.
>
> Then do it: the minimum becomes seven characters, and the error message changes to match what it now asks for — read the current message and rewrite it so it is truthful about the new limit and still in the page's own voice for an elderly reader. Do not change anything else about the panel.
>
> This is a rendered surface. Close the row only on evidence from the SERVED page, driven in a real browser: a six-character note is refused with the new message visible, a seven-character note is accepted, and the message's colour still equals the body colour so colour alone carries no meaning. If any of that cannot be shown, leave the row open and say which part.
>
> ## TASK 3 — measure the trade-heading question
>
> Your own 2673 reply established that the site has no fixed trade list and that headings come from whatever text sits in the Published tab's trade column. What is NOT established is how close two spellings have to be before they merge.
>
> MEASURE it against the live site in a real browser, using a feed fixture rather than touching the Owner's sheet: does "Plumber" group with "plumber", with "Plumber " carrying a trailing space, and with " Plumber" carrying a leading one? Report exactly what happens in each case — one heading or two, and what each heading reads as.
>
> Then say plainly what it means for him when he types a trade into Published, and recommend whether the site should normalise trade names before grouping. RECOMMEND ONLY — do not implement it. That is his ruling to make, and it is a behaviour change that would need its own row.
>
> ## TASK 4 — record and land
>
> Handover Layer 6 entry citing my conversation reference; Layer 1 current facts; close the two Layer 4 form items on the Owner's report, marked as reported; record the trade-normalisation recommendation as a decision awaiting his ruling. Update the plan for the new row and for row 5.1's evidence. Commit and push BOTH remotes — GITHUB_TOKEN= is needed for origin. Run the validator and report its exit code AND its reported sub-task count against the rows the document actually holds.
>
> ## RETURN
>
> - A detailed written summary.
> - The corrected verdict formula in its own fenced block with its cell named, ready for the Owner to copy.
> - The twelve-case table, with changed verdicts called out.
> - The trade-heading measurement, case by case.
> - A formatted table of what was tested and each result, measured values not assertions, including the served-page evidence for the new row.
> - The plan's new completion position: effort done, effort total, percentage, and how much of the movement is the new row changing the denominator.
> - The end-of-session summary and any recommended follow-on prompt as a single copy-paste-ready fenced code block.
> - State the model and effort this session ran on.

**What was done:**

**Task 0 — guards passed, MISSION re-read at source, all four reads done.** HEAD `2169da1020d9d70c266d3972d622d8b831e76266`, master, clean, `0 0`. The quoted line from `app.js` was **line 264**, `if (why.length < MIN_WORDS){`, with `var MIN_WORDS = 15;` at line 39 and the message at line 265. Row 5.1's wording, row 4.1's wording and the `CHECK THIS` rule were all read before any change. **Row 4.1 turned out to matter:** it is `done` and says *"a too-short entry shows a plain-text error"* **without naming a number**, so lowering the threshold does not falsify its recorded evidence — which is a point in favour of the new row rather than against it.

**Task 1 — the sheet verdict moved to seven.** Only the length clause changed, from `<15` to `<7`; the two `not known` triggers on surname and business and the precedence of `CHECK THIS` over `ALREADY ON SITE` are untouched, verified by re-running the precedence case.

Re-simulated across the same twelve cases. **Two verdicts change, and they are exactly the two the owner predicted:** his real row 1 (*"top blokes"*, 10 characters) and real row 2 (*"Lovely people"*, 13) move from `CHECK THIS` to `NEW`. Honest short answers stop being flagged. The other ten are unchanged — `C4` (4 characters) still flags, `C5` and `C6` still flag on "not known", and `C7` still returns `CHECK THIS` despite its phone matching `T001`, which is the precedence rule holding. **The boundary was then verified exactly rather than assumed from the table:** 0, 2, 3, 5 and 6 characters all flag; 7 passes; and the owner's own *"Fixed Gate"* (10) passes.

`apps-script/SHEET-FORMULAS.md` updated with the corrected formula, the layout check at its start kept intact, the verdict table's wording changed from the vague *"wrote barely anything"* to **"under seven characters"**, and a short note added explaining why seven is deliberately low.

**On the design:** the prompt asked for §7.3 to be corrected, but **§7.3 does not state a length at all** — it covers only the Publish / Add to T0xx / Reject dropdown. The fifteen lived in two other places, and both were corrected: **§7.4**, the page panel's rule, now reads seven with the owner's ruling quoted verbatim and the rationale preserved; and **§7.2**'s verdict table, which described the `CHECK THIS` trigger. A third correction was made in **§7.1**, the Google Form's own rules, where the telephone regex is now marked SUPERSEDED to the eleven-digit rule the owner reports installing — recorded as REPORTED, not measured.

**Task 2 — row 4.5 appended and closed on served-page evidence.** Appended after 4.3/4.4 in both the status and satellite tables; nothing inserted, nothing renumbered. `MIN_WORDS` 15 → 7 with a comment recording the ruling, and **the message rewritten because the number alone was not enough**: *"Please write a few more words"* had stopped being true — seven characters is about two words, not "a few more" — and it never said what would be enough, which for a villager who has just been refused is where they give up. It now reads **"Please add a word or two more — even "Fixed gate" is enough."**, naming a length they can picture and using the owner's own example. Exactly two lines changed; `node --check` passes and the diff shows nothing else in the panel touched.

**Measured on the SERVED page** in a real browser at 320px, with the votes POST blocked at the network layer so no row was written to the owner's sheet: **six characters (`"Fix it"`) is REFUSED** — panel stays open, message visible reading exactly the new text, what was typed preserved, `aria-invalid="true"` set; **seven characters (`"Fixed g"`) is ACCEPTED** — panel closes; and the owner's own **`"Fixed gate"` (10) is accepted and renders on the card**. **Message colour `rgb(16, 20, 19)` equals body colour `rgb(16, 20, 19)`**, so colour alone still carries no meaning. Every clause of the row's own wording is covered by evidence from the served page.

**The validator rejected the first version of this row and was right to.** The `Human` sentence was 21 words against STD-00009's 20-word cap (Rule 5.11.9.1). The sentence was shortened rather than the check weakened, and the plan re-validated clean.

**Task 3 — the trade-heading question measured, and the answer is not uniform.** Driven against the LIVE site in a real browser with a feed fixture substituted at the network layer; the owner's sheet was never touched. **Whitespace is forgiven; capitalisation is not.** `Plumber` and `plumber` produce **two** headings of one person each. `Plumber` and `Plumber ` (trailing space) produce **one** heading of two. `Plumber` and ` Plumber` (leading space) produce **one** heading of two. All four spellings together produce **two** headings — `Plumber` with 3 and `plumber` with 1.

The mechanism was then confirmed in the source rather than inferred: `app.js` line 139 trims every cell, which is why the space cases merge, and line 141 lower-cases `status` before comparing it — but **nothing lower-cases the trade**, so the grouping key keeps its original capitalisation. What it means for the owner is concrete: the form's dropdown protects the responses tab, but he **retypes the trade when copying a row across to Published**, and that retyping is unprotected. A row typed as `plumber` sits under a second heading further down with one person under it, invisible to anyone who taps the first, and nothing errors or looks broken. **Recommended, not implemented**, as instructed — recorded in Layer 5 with the suggested shape (group by the lower-cased trade, display the first spelling seen) and left for his ruling, because it is a behaviour change on a closed row that would need its own row and its own served-page evidence.

**Task 4 — recorded and landed.** Layer 1: plan position superseded with the denominator effect spelled out; both form items closed as **REPORTED by the owner**, each saying plainly that form settings cannot be seen from outside the account and noting that the email change becomes observable the first time a submission arrives with column B empty. Layer 3: the trade-grouping measurement as a `[BUG]` with the full case table and the code mechanism. Layer 4: the same two items closed with strikethrough and `RESOLVED`. Layer 5: four `[DECISION]` entries. The plan's rows 4.5 and 5.1 updated; 5.1 deliberately left `new`.

**Testing performed:**

| # | What was tested | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | HEAD / branch / tree / sync | `2169da10…`, master, clean, `0 0` | as expected | PASS |
| 2 | Does design §7.3 state a length? | — | **No** — §7.3 is the dropdown only; the fifteen was in §7.4 and §7.2 | corrected the right sections |
| 3 | Does row 4.1 name a number? | — | **No** — "a too-short entry"; its evidence stays true | PASS |
| 4 | 12-case simulation at `<7` | 2 verdicts change | **R1 and R2 flip `CHECK THIS` → `NEW`**; other 10 unchanged | PASS — as owner predicted |
| 5 | Precedence case `C7` at `<7` | still `CHECK THIS` | `CHECK THIS` (text "quick", 5 chars) | PASS |
| 6 | Boundary: 0/2/3/5/6 characters | flag | all `CHECK THIS` | PASS |
| 7 | Boundary: 7 characters | pass | `NEW` | PASS |
| 8 | Owner's "Fixed Gate" (10) | pass | `NEW` | PASS |
| 9 | `node --check app.js` | parses | parses OK | PASS |
| 10 | `git diff app.js` | 2 changes only | constant + message; nothing else in the panel | PASS |
| 11 | Served `app.js` carries `MIN_WORDS = 7` | live | live ~20 s after push | PASS |
| 12 | **SERVED page: 6 characters** | refused | panel open, message visible, text preserved, `aria-invalid="true"` | **PASS** |
| 13 | **SERVED page: message text** | new wording | `"Please add a word or two more — even "Fixed gate" is enough."` | **PASS** |
| 14 | **SERVED page: 7 characters** | accepted | panel closes | **PASS** |
| 15 | **SERVED page: message colour vs body** | equal | both `rgb(16, 20, 19)` | **PASS** |
| 16 | SERVED page: "Fixed gate" renders on card | appears | `"Fixed gate"` under `1 villager recommends this tradesperson` | PASS |
| 17 | Trade grouping: `Plumber` vs `plumber` | — | **TWO headings**, 1 person each | measured |
| 18 | Trade grouping: trailing space | — | **ONE heading**, 2 people | measured |
| 19 | Trade grouping: leading space | — | **ONE heading**, 2 people | measured |
| 20 | Trade grouping: all four | — | **TWO headings** — `Plumber` (3), `plumber` (1) | measured |
| 21 | Mechanism in source | — | `.trim()` on every cell (L139); `status` lower-cased (L141); **trade is not** | measured |
| 22 | Validator, first attempt | exit 0 | **exit 1** — Human sentence 21 words over the 20-word cap | **FAIL — plan fixed** |
| 23 | Validator, after fix | exit 0 | `OK`, exit `0`, **16 sub-tasks**, 56/79 = 70.9% | PASS |
| 24 | Independent row count vs validator | equal | 16 vs 16 (12 done, 4 new); effort 56/79 both ways | PASS |

**What was not tested:**

- **The sheet formulas have still not run in Google Sheets.** The `<7` change is simulated and structurally checked, exactly as the `<15` version was. Row 5.1 remains open on the owner's paste.
- **Neither reported form change could be verified.** Email collection being off and the eleven-digit rule being installed are **REPORTED by the owner**; form settings are invisible from outside the account. Both Layer 4 items were closed on his report and say so.
- **Trade normalisation was not implemented**, only measured and recommended.
- **The trade measurement used a substituted feed**, not the owner's real sheet, which was deliberate — it proves the site's grouping behaviour without touching his data.
- **The votes POST was blocked during the row 4.5 measurement**, so no row was written to his Votes tab and the end-to-end send was not re-exercised. That path was already proven at row 4.2.
- **The new message has not been seen by a real villager** on a real phone at the largest text size. Its colour and visibility are measured; its readability in situ is not.

**Commits:**

- `81385b7` — `feat: the note minimum becomes seven characters, on the page and in the sheet`

**Finished:** 2026-09-18T18:33:23Z

**End state:**

The plan stands at **56 of 79 effort (70.9%)**, 12 of 16 rows `done`. The movement from 54/77 is small and worth reading correctly: **row 4.5 added 2 to the numerator and 2 to the denominator**, so the percentage moved only 70.1% → 70.9%. Closing a 2-effort row against the old 77 denominator would have read 72.7%; appending the row first accounts for the difference. Nothing was reweighted and nothing renumbered.

A villager can now write *"Fixed gate"* and be thanked rather than refused, on the page and without being flagged in the sheet — the two surfaces ask the same question of the same text, which they did not before today.

**Four rows remain, every one of them the owner's:** **6.1** (9, walk the runbook), **5.1** (6, paste the formulas), **7.1** (5, full journey, needs seeding), **7.2** (3, seed to 12–15 across ≥6 trades). Two non-villager rows still need deleting from the Votes tab before launch, and the launch message stays a draft.

**One ruling is waiting on him:** whether the site should group trade headings case-insensitively. The risk is now measured rather than theoretical, and the fix is small, but it is a behaviour change on a closed row and it is his call.

**Effort per prompt for the plan, cumulative: 56 effort done ÷ 16 prompts sent = 3.5.** Both figures recorded, not only the ratio.

### 2026-09-18T19:35:08Z — The review gate replaced by an automatic publisher; trades group ignoring capitals

**Source:** Claude Code
**Started:** 2026-09-18T19:26:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> Same conversation as prompts 2665, 2667, 2670, 2671, 2673 and 2675. You landed 2675 at 18:35Z. Repo re-read by me at 19:25:38Z: HEAD c28c50819548cf71670b5fbd4f3ab0586eb6536c, master, tree clean, 0 ahead / 0 behind. Plan at 56/79 = 70.9%, 12 of 16 rows done.
>
> MISSION: re-read at source in task 0 and name it back.
>
> ## REQUIREMENT AS STATED — THE REVIEW GATE IS BEING REPLACED
>
> The Owner has ruled that publishing becomes automatic. His words, verbatim, 2026-09-18 ~19:20Z:
>
> "OK i am not doing this by hand. I said as a design principle this will be no admin. Make it automatic from the form responses. I will routinely check the data and overwrite whatever looks messy. That is easier and can be done in batch. In fact we can write a script for that can we not?"
>
> This reverses the manual copy-to-Published gate. It is his ruling and it outranks the solution design, which is downstream of it. Where the design describes a manual approval step, the design is what changes. Do not argue the point back at him in the documents; record the change and its consequence factually.
>
> He then ruled two decisions:
>
> D7a — the automatic gate is NOT wide open. Clean submissions publish themselves; three hard failures land in Published with status hidden instead, off the site and waiting for him: no usable phone number, an email address or a web link in any field, or a duplicate of somebody already listed.
>
> D6a — the site groups trades ignoring capitals, displaying the first spelling seen. You measured the defect yourself in 2675: capitals split a tile in two, whitespace already merges.
>
> The Owner has also confirmed this evening that he has pasted all four sheet formulas and the dropdown, and that his three real response rows read NEW.
>
> [Tasks 0–6 as issued: guards and the eight Published columns; append two plan rows; write apps-script/Publish.gs as a NEW file without touching Code.gs, with id/plain-value/append-only/hard-failure/trade/name constraints and a twice-safe backfill, tested against a stub; add deployment instructions; case-insensitive trade grouping in app.js closed only on served-page evidence; update the documents that describe the old gate; record and land.]

**What was done:**

**Task 0 — guards passed, MISSION re-read at source, and the Published contract stated before writing to it.** HEAD `c28c50819548cf71670b5fbd4f3ab0586eb6536c`, master, clean, `0 0`. The eight Published columns in order: **`id`, `first_name`, `last_name`, `business`, `phone`, `trade`, `extra_trade`, `status`** — columns A to H. Worth noting for anyone writing to that tab later: **`I` and `J` now hold the sheet-formula helper columns**, so the publisher writes A–H only and appends nothing beyond H. `apps-script/Code.gs` was read in full and is untouched by this session.

**A stale value was noticed in `Code.gs` and deliberately left alone:** it carries `MIN_TEXT = 15`, which yesterday's seven-character ruling superseded on the page and in the sheet. It is out of scope here — this prompt says nothing in it goes near that file — so it is recorded as a Layer 4 item rather than silently changed inside the internet-facing endpoint.

**Task 1 — two rows appended, nothing renumbered.** `3.4` (case-insensitive trade grouping, effort 2) after 3.3, and `5.2` (the automatic publisher, effort 6) after 5.1, each with its satellite delivery row. Both provenances are unplanned work entered this session.

**Task 2 — `apps-script/Publish.gs` written as a new file.** It is account-only: an installable on-form-submit trigger plus a `Village list` menu, never deployed as a web app and never given a URL. Each constraint was satisfied and checked rather than asserted:

*Ids.* Derived from the **highest existing id on Published**, never a row count or position. Tested against a deliberately awkward sheet — ids `T004, T001, T009, T003`, out of order, with gaps at 002 and 005–008 and one of them `hidden` — and the next id is `T010`, not `T002` or `T005`. Interior gaps stay gaps forever. **One limit was found in testing and is documented in the file rather than hidden: deleting the HIGHEST id frees that number for reuse.** If `T010` is the last row and is deleted, the next submission becomes `T010` again and any recommendation filed against the old one would attach to the new person. That is inherent to deriving from the sheet, and the sheet is the only durable source given the owner edits by hand; the mitigation is the rule the README already carries — hide rows, never delete them — now repeated in the script and in DEPLOY.md Part 2.

*Plain values.* Every cell written is a plain string. `plain()` additionally prefixes a leading `=` or `+` with an apostrophe, so a villager typing `=1+1` into a name box lands as text rather than becoming a live formula — verified in the stub.

*Append only.* The only write is a single `appendRow` to Published, guarded by a forbidden-tab check. The stub throws if anything writes anywhere else; the Votes tab was byte-unchanged at the end of every test.

*Usable phone number.* **Eleven digits after normalisation.** Stated and justified rather than assumed: every genuine number this project has seen measures eleven — `07825 736940`, `01392 123456`, and the `+44`/`0044` forms once folded — while the one known-bad number, `078853335434`, is twelve. It also matches the eleven-digit rule the owner installed on the form, so form and publisher agree instead of disagreeing silently.

*Trade normalisation.* Trims, collapses runs of spaces, and capitalises the first letter of each word, preserving internal forms like `Carpenter / Joiner`. **What it does NOT do is stated in the file, because assuming otherwise would be a silent defect: it does not understand what a trade means.** It cannot map "boiler" to Heating or "sparky" to Electrician. Free text typed under the form's "Other" option creates a new tile with that exact wording, and the owner's sweep is what catches it.

*Names.* The first-name box frequently carries a full name with the surname blank — two of the three real responses do exactly that, measured. If the last name is blank and the first contains a space, the **last word** becomes the surname: `Bob Samwell` → `Bob` / `Samwell`, `Mary Anne Blythe` → `Mary Anne` / `Blythe`. A single word with no surname stays as it is rather than inventing one.

*Reading the responses tab.* **By header name, not column letter**, using leading-fragment matches. Deliberate: the sheet formulas were once written against guessed letters and were wrong in four places, and adding a form question shifts every letter. Both the trigger path and the backfill use the same matcher, so they cannot drift apart.

*The backfill.* A menu item that publishes everything not yet on Published, matching on the normalised phone. **Run twice in the stub against the owner's three real rows: the first run added 3, the second added 0 and skipped 3, with the row count identical.** It is idempotent by construction rather than by a flag.

**Task 3 — deployment instructions added to `apps-script/DEPLOY.md` as "Part 2" rather than a new document.** Stated and reasoned in the document itself: it is the same job from the owner's side — pasting a script into the same spreadsheet from the same menu — and two documents both beginning "open Extensions → Apps Script" is how they drift apart. Part 2 covers what changes when it is switched on, pasting `Publish.gs` as a second file, installing the trigger (with a warning to choose **On form submit**, not On edit, which would re-fire on his own tidying), running the backfill once, checking it, and deleting the trigger to switch it off again.

**Task 4 — case-insensitive trade grouping, closed on served-page evidence.** All **three** places that keyed on the raw trade were moved to a shared lower-cased key — the tile grid, the autocomplete counts, and the filter applied when a trade is tapped — so none can disagree; a grep confirms no direct `l.trade` keying remains. Measured in a real browser against the LIVE site at 320px with a feed fixture at the network layer, so the owner's sheet was never touched: `Plumber` + `plumber` → **one tile reading `Plumber`, count 2**, tapping it gives heading `Plumber` and **2 cards**. With the lowercase spelling appearing **first**, the tile reads **`plumber`** — which is what actually proves the label is the first spelling met rather than a rewrite. Four spellings including `PLUMBER` and `" Plumber "` → **one tile, count 4, 4 cards**. Regression against the four live trades: still four separate tiles, one each, hidden row still absent, `Heating` still arriving via `extra_trade`, **0px overflow in every case**.

**Task 5 — five documents updated to describe the system that now exists.** Solution design §7.3 rewritten with the ruling quoted, the three checks tabulated with the reason for each, and the consequence recorded plainly — the open form reaches the live site with no human in between, so the protection is those checks plus the sweep. §7.2's `NEW` action corrected: it has published itself. `README.md`'s flow diagram redrawn and the "you copy them across" step replaced. The PROCESS doc's gate paragraph superseded in place, with the seeding section explicitly still a hand job — the publisher handles what villagers send but cannot invent the twelve to fifteen people needed before launch. `SHEET-FORMULAS.md`'s gate sentence superseded: the dropdown is now a note to himself, and the tab is a view rather than a gate.

**Recorded as a recommendation for his ruling and deliberately NOT implemented:** the Google Form's description should tell villagers their recommendation goes public. A tradesperson's name and telephone number now appear on a public website without that tradesperson being asked, and the villager submitting is the only person positioned to have asked them. It is a form wording change, which only he can make.

**Task 6 — recorded and landed.** Layer 1: plan position superseded with the falling-percentage arithmetic explained; two new outstanding items. Layer 4: the same two as full items. Layer 5: three `[DECISION]` entries covering D7a, the separation of `Publish.gs` from `Code.gs`, and D6a.

**Testing performed:**

| # | What was tested | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | HEAD / branch / tree / sync | `c28c5081…`, master, clean, `0 0` | as expected | PASS |
| 2 | Clean submission | published `active` | `T005`, Nigel/Hart, `active` | PASS |
| 3 | Full name in first-name box | split | `Bob Samwell` → `Bob` / `Samwell` | PASS |
| 4 | Three-part name | split on last word | `Mary Anne Blythe` → `Mary Anne` / `Blythe` | PASS |
| 5 | Phone 12 digits | `hidden` | `T008`, `hidden` | PASS |
| 6 | No phone at all | `hidden` | `T009`, `hidden` | PASS |
| 7 | Email in business field | `hidden` | `T010`, `hidden` | PASS |
| 8 | Web link in trade field | `hidden` | `T011`, `hidden` | PASS |
| 9 | Duplicate phone | no row written | not written | PASS |
| 10 | Duplicate via `+44` form | no row written | not written — normalisation matched | PASS |
| 11 | Lowercase trade `"  plumber "` | tidied | `Plumber`, `active` | PASS |
| 12 | Formula injection `=1+1` | inert | written as `'=1+1` | PASS |
| 13 | Votes tab after all of the above | untouched | header row only, unchanged | PASS |
| 14 | Id sequence with gaps, out of order | highest+1 | `T004,T001,T009,T003` → **`T010`** | PASS |
| 15 | Deleting the HIGHEST id | — | **frees it for reuse** | LIMIT — documented |
| 16 | Backfill, first run, 3 real rows | 3 added | "Added 3… Skipped 0" | PASS |
| 17 | Backfill, second run | 0 added | "Added 0… Skipped 3", row count identical | **PASS — idempotent** |
| 18 | Backfill reads the real header row | by name | matched all five fields | PASS |
| 19 | Trigger path via `e.namedValues` | publishes | `T002`, `Ada` / `Blythe`, `Plumber`, `active` | PASS |
| 20 | `node --check app.js` | parses | parses OK | PASS |
| 21 | Direct `l.trade` keying left anywhere | none | 0 matches | PASS |
| 22 | **SERVED: `Plumber` + `plumber`** | one tile | **1 tile `Plumber`, count 2, 2 cards** | **PASS** |
| 23 | **SERVED: lowercase first** | label = first seen | **tile reads `plumber`** | **PASS** |
| 24 | **SERVED: four spellings** | one tile | **1 tile `Plumber`, count 4, 4 cards** | **PASS** |
| 25 | **SERVED: regression, four live trades** | unchanged | 4 tiles, 1 each, hidden absent, `Heating` present | **PASS** |
| 26 | **SERVED: overflow at 320px** | 0px | **0px in all four cases** | **PASS** |
| 27 | Validator after both rows appended | exit 0 | `OK`, **18 sub-tasks**, 58/87 = 66.7% | PASS |
| 28 | Independent row count vs validator | equal | 18 vs 18 | PASS |

**What was not tested:**

- **`Publish.gs` has never run in Google Sheets.** Everything above is a local `SpreadsheetApp` stub modelling the API surface it uses. Apps Script's own behaviour — trigger authorisation, `getDataRange` on a live sheet, quota, the exact shape of `e.namedValues` from a real submission — is not exercised by any of it. **Row 5.2 closes on a real form submission landing a row on Published and the owner confirming it**, which is why it is `new`.
- **The trigger has not been installed** and the backfill has not been run against the real sheet. Both are the owner's steps.
- **The three hard checks have not faced a real adversary.** The email and link patterns catch the obvious shapes; somebody determined would get past them, and the design has always accepted that the worst case is a row the owner hides during his sweep.
- **Row 5.1 is unchanged and still `new`.** The owner reports having pasted all four formulas and the dropdown, and that his three real rows read `NEW`. That is consistent with this session's simulation but was **not verified here**, and 5.1's own wording closes it on one sample row of each of the four verdicts showing correctly in his sheet.
- **`Code.gs`'s stale `MIN_TEXT = 15`** was left as found and recorded, not changed.
- **No Google-side change was made or attempted**, and nothing was written to the owner's sheet: the trade measurement used a substituted feed and the served-page tests blocked the votes POST.

**Commits:**

- `b8b54be` — `feat: automatic publisher, and case-insensitive trade grouping`
- `c555707` — `docs: the review gate is gone - four documents now describe automatic publishing`

**Finished:** 2026-09-18T19:35:08Z

**End state:**

The plan stands at **58 of 87 effort (66.7%)**, 13 of 18 rows `done`. **The percentage fell while real work landed**, which is arithmetic rather than regression: two rows were appended totalling 8 effort, and only one of them — 3.4, at 2 — closed. Against the old 79 denominator the same work would have read 58/79 = 73.4%. The honest reading is that the plan grew because the owner changed what the system does, not that anything went backwards.

**What this session actually closed: row 3.4 only.** Row 5.2 is built, tested against a stub and documented, but it is `new` and stays `new` until a real submission publishes itself and the owner says so.

The shape of the product has changed. A villager fills in the form and the tradesperson appears on the village list by themselves, within the republish lag, with no human in between — protected by three hard checks and the owner's batch sweep rather than by an approval step. That is his ruling and the documents now describe it plainly, including the part that is a genuine trade-off: the directory's content is as open as the form is.

**Five rows remain, and every one waits on the owner:** **6.1** (9, walk the runbook), **5.2** (6, install the publisher and confirm a real submission), **5.1** (6, confirm the verdicts in his sheet), **7.1** (5, full journey, needs seeding), **7.2** (3, seed to 12–15 across ≥6 trades). Two non-villager rows still need deleting from the Votes tab before launch, one ruling is waiting on him about the form's description, and the launch message stays a draft.

**Effort per prompt for the plan, cumulative: 58 effort done ÷ 17 prompts sent = 3.41.** Both figures recorded, not only the ratio.

### 2026-09-18T19:46:55Z — D8a: the villagers' words and names reach the site; duplicates become second recommendations

**Source:** Claude Code
**Started:** 2026-09-18T19:39:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> Same conversation as 2665, 2667, 2670, 2671, 2673, 2675 and 2684. You landed 2684 at 19:38Z reporting HEAD 892ed21, plan 58/87 = 66.7%, 13 of 18 rows done. Re-establish HEAD yourself in task 0 and stop if it is not 892ed21, clean and level.
>
> MISSION: re-read at source and name it back. This prompt exists because the site does not currently do what the mission says.
>
> ## THE FINDING — THE SITE IS A PHONE LIST, NOT A RECOMMENDATIONS LIST
>
> The Owner noticed that the publisher ignores the responses tab's column I. Checking it properly turned up something larger, and I measured the second part myself against the live site rather than inferring it.
>
> 1. The form asks, in column I: "Finally please give your name (if you want to share it on the website) so a fellow villager might reach out to you if they have any questions." That is a PROMISE MADE TO VILLAGERS that their name appears on the site. Nothing keeps it.
> 2. Column H — the villager's description of the work, the actual recommendation — is also dropped. Published has no column for either.
> 3. MEASURED by me at 19:34Z against the live app.js: the page fetches ONE feed, the Published tab, carrying trader details only. Recommendations posted from the site go to the Votes tab and are rendered from the visitor's own browser memory. NOTHING EVER READS THEM BACK. No villager has ever seen another villager's words, and none would.
>
> So the product currently lists phone numbers. The mission says it is a recommendations list. The Owner has ruled D8a to fix it.
>
> Note from your own 2684 reply: Published columns I and J now hold the sheet-formula helper columns, so new columns go at K and L.
>
> [Tasks 0–5 as issued: guards and the Published contract; append two plan rows; carry the words and name through to Published at K and L with the duplicate rule changed to append; show them on the card with served-page evidence at 320px and largest text; fix Code.gs's stale MIN_TEXT to seven and say he must redeploy as a new version of the existing deployment; update the documents and land.]

**What was done:**

**Task 0 — guards passed, MISSION re-read, contract stated.** HEAD `892ed2162cec8b3740234be9ee04a7449a388ecf`, master, clean, `0 0`. Published now runs `A id · B first_name · C last_name · D business · E phone · F trade · G extra_trade · H status · I pub_phone_key · J pub_name_key`, so the new columns go at **K** and **L** as the brief says.

**The finding was verified at source rather than taken on trust, and it is correct.** `app.js` initialises `VOTES = {}` empty on every load (line 50), writes to it only from the vote panel, and reads it only when drawing a card. Nothing else references it and no feed carries it. **No villager has ever seen another villager's words.** The CSS for `.recs`, `.rec`, `.tally` and `.by` already existed, which tells its own story: the card was built to show recommendations and was never given any to show.

**Task 1 — rows 3.5 (effort 4) and 4.6 (effort 1) appended**, nothing renumbered, provenance recorded here rather than in the row text.

**Task 2 — the words and the name now reach Published.** Two columns, **`recommendations` (K)** and **`recommended_by` (L)**, written from the responses tab's column H and column I. `Publish.gs` matches both by header name like every other field, so adding or reordering a form question cannot break them. A blank recommender becomes **"a villager"**, matching what the site's own panel already does.

*The storage shape, and it was verified rather than chosen on taste.* Several contributions share one cell separated by a **blank line**, in two parallel columns so the nth name belongs to the nth recommendation. A delimiter such as `|` can occur inside a villager's own words; a blank line cannot occur inside a single form answer. **Tested against `app.js`'s own `parseCSV`** — not a stand-in — with a value carrying a comma, an escaped quotation mark and two line breaks: it round-trips into exactly three recommendations. **At ten recommendations for one person** the cell is unwieldy to read in the spreadsheet but nothing breaks; Google's per-cell limit is 50,000 characters, the site renders them tidily, and the owner can prune by hand because it is plain text. The limit is his patience, not the software.

*The duplicate rule changed, and this was the sharpest part of the brief.* Previously a duplicate was skipped and the second villager's words were written **nowhere at all** — the previous session's own test table shows it. A second person recommending the same tradesperson is the product working, not noise. Now a matching normalised phone **appends** the words and name to that person's existing K and L, preserving what is there and never touching their name, phone, trade or status. The same words submitted twice are not added twice, which is what keeps the backfill idempotent. The two other hard failures are unchanged; a duplicate is no longer one of them.

**Task 3 — the card shows them, and the design decision was made for the audience.** `app.js` reads both columns as **OPTIONAL**, so a sheet predating them renders exactly as before rather than failing. A popular card shows **two recommendations in full plus a full-width "Read N more recommendations" button**: at 29px on a 320px phone a single recommendation already fills much of the screen, and showing every one would bury the Call button under a wall of text for exactly the audience least able to scroll past it.

**Task 4 — `Code.gs`'s `MIN_TEXT` corrected from 15 to 7**, with the reason and the redeployment warning written into the file itself. The repository change is half the fix; the running copy is in the owner's account.

**Task 5 — five documents updated**, and a consistency sweep caught the second-order effect: three of them still said *"three kinds of submission do not go live"*. A duplicate is no longer one of the three, so `README.md`, the PROCESS doc and `DEPLOY.md` were all corrected to two, with the duplicate's new behaviour explained in each. The design's §3.1 diagram and §3.3 visibility table still described the manual gate and were corrected too.

**Testing performed:**

| # | What was tested | Expected | Actual (measured) | Result |
|---|---|---|---|---|
| 1 | HEAD / branch / tree / sync | `892ed21`, master, clean, `0 0` | as expected | PASS |
| 2 | Is `VOTES` ever read from a feed? | — | **No** — empty on load, panel-written, card-read only | finding confirmed |
| 3 | Blank-line cell through `app.js`'s own `parseCSV` | 3 recommendations | **3**, comma and escaped quote intact | PASS |
| 4 | New person, words + name | K/L populated | `Cleared the whole garden…` / `Sue` | PASS |
| 5 | New person, **blank** name | "a villager" | `a villager` | PASS |
| 6 | **Duplicate of T001** | appended, no new row | **no new row; appended to T001** | **PASS** |
| 7 | **Duplicate, same words again** | nothing added | **unchanged** | **PASS — idempotent** |
| 8 | **Duplicate, blank name** | appended as "a villager" | `Mary\n\na villager` | **PASS** |
| 9 | **Duplicate, comma + quotation mark** | preserved | `Fixed the gate, and said "no charge"` intact | **PASS** |
| 10 | Duplicate via `+44` form | matched | matched, appended | PASS |
| 11 | K and L stay aligned | equal counts | **3 recommendations, 3 names** | PASS |
| 12 | Bad phone (12 digits) | `hidden`, words kept | `hidden`, K/L populated | PASS |
| 13 | Email in business | `hidden` | `hidden` | PASS |
| 14 | Votes tab throughout | untouched | header only, unchanged | PASS |
| 15 | **Backfill run 1** over 5 responses incl. 2 duplicates | 3 people | "Added 3… Skipped 2"; Bob has **3 recommendations** | PASS |
| 16 | **Backfill run 2** | changes nothing | "Added 0… Skipped 5", sheet **byte-identical** | **PASS** |
| 17 | `node --check` on all three files | parse | all parse | PASS |
| 18 | **SERVED, 3 recs, 20px** | 2 + button | tally "3 villagers…", 2 shown, "Read 1 more recommendation" | **PASS** |
| 19 | **SERVED, tap the button** | all 3, button gone | **3 shown, button removed, 0px overflow** | **PASS** |
| 20 | **SERVED, 1 rec** | shown, no button | shown, attributed `Sue`, no button | **PASS** |
| 21 | **SERVED, 0 recs** | nothing | no tally, no empty heading | **PASS** |
| 22 | **SERVED, all of the above at 29px** | same | **identical behaviour at root 29px** | **PASS** |
| 23 | **SERVED, Call + vote panel** | still work | right `tel:` on every card, panel present | **PASS** |
| 24 | **SERVED, overflow at 320px** | 0px | **0px and 0 elements past the right edge, all 6 cases** | **PASS** |
| 25 | Validator | exit 0 | `OK`, **20 sub-tasks**, 62/92 = 67.4% | PASS |
| 26 | Independent row count vs validator | equal | 20 vs 20 | PASS |

**What was not tested:**

- **`Publish.gs` still has never run in Google Sheets.** Every publisher result above is a local `SpreadsheetApp` stub. The real trigger, real authorisation and the exact shape of `e.namedValues` from a live submission remain unexercised. Row 5.2 still closes on a real submission.
- **Columns K and L do not exist on the real sheet yet.** Until the owner adds them (DEPLOY.md step 10), the publisher writes into positions the sheet has no headers for, and the site shows no recommendations. The site does not break either way — that was the point of reading them as optional — but the feature is inert until he acts.
- **`Code.gs`'s fix is not live.** The deployed copy still carries 15 until he re-pastes and redeploys.
- **The served-page evidence used a feed fixture**, not the owner's sheet, which was deliberate: it proves the rendering without writing anything to his data.
- **Recommendations typed into the site's own panel still reach nobody else**, and that is recorded as an outstanding item rather than implied to be fixed.
- **No Google-side change was made or attempted**, and nothing was written to the owner's sheet or Votes tab.

**Commits:**

- `91a3f4c` — `feat: carry villagers' words and names through to the site`

**Finished:** 2026-09-18T19:46:55Z

**End state:**

The plan stands at **62 of 92 effort (67.4%)**, 14 of 20 rows `done`. Two rows were appended totalling 5 effort and one of them closed, so the percentage moved 66.7% → 67.4%. **Row 3.5 is the only row this session closed.**

The product is now shaped like its mission. A villager filling in the form has their words and their name carried through to the tradesperson's card, which is what the form has been promising them all along. A second person recommending somebody already listed adds to that person rather than being discarded. A card with several recommendations stays readable at the largest text size on the smallest phone.

**Two things must happen in the owner's Google account before any of it is visible**, both short and both in `apps-script/DEPLOY.md`: add `recommendations` and `recommended_by` at K1 and L1, and re-paste `Code.gs` redeploying as a **new version of the existing deployment**. Until then the site behaves exactly as it did yesterday.

**Six rows remain, every one waiting on him:** 6.1 (9, walk the runbook), 5.2 (6, install the publisher and confirm a real submission), 5.1 (6, confirm the verdicts), 7.1 (5, full journey), 7.2 (3, seed the list), 4.6 (1, redeploy the endpoint).

**Effort per prompt for the plan, cumulative: 62 effort done ÷ 18 prompts sent = 3.44.** Both figures recorded, not only the ratio.

### 2026-09-18T20:08:08Z — The publisher's silent success: reproduced, fixed, and given a way to be seen

**Source:** Claude Code
**Started:** 2026-09-18T19:57:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader
>
> MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> Same conversation as 2665 through 2685. You landed 2685 at 19:49Z reporting HEAD 8ec82c6, plan 62/92 = 67.4%, 14 of 20 rows. Re-establish HEAD yourself and stop if it is not 8ec82c6, clean and level.
>
> MISSION: re-read at source and name it back.
>
> ## THE DEFECT — THE PUBLISHER RUNS, COMPLETES, AND THE OWNER SEES NOTHING
>
> The Owner installed Publish.gs and the on-form-submit trigger, added Published columns K and L, and submitted the form twice from his phone — once with a phone number already listed, once with an entirely new person. Published appeared unchanged both times.
>
> EVIDENCE, from his Apps Script Executions log, which I have read myself: onFormSubmitPublish, Trigger, 20:51:27 local, 1.467s, Completed; onFormSubmitPublish, Trigger, 20:55:23 local, 1.357s, Completed; backfillPublished, Menu, 20:48:14, 31.073s, Completed; backfillPublished, Menu, 20:58:03, 12.887s, Completed; checkSetup, Menu, 20:49:03, Completed; onOpen, Simple Trigger, 20:46:16, Completed.
>
> NOTHING FAILED. Every run completed. A 31-second backfill is not the profile of a script that wrote nothing.
>
> MY HYPOTHESIS, and it is a hypothesis you must test rather than accept: the Owner pasted the duplicate-check helper formulas into Published I2 and J2 earlier this evening. Both are ARRAYFORMULA over an open-ended column range, so they return an empty string for every row to the bottom of the sheet. An empty string returned by a formula still counts as content to getLastRow() and to appendRow(). So the publisher is appending its rows BELOW the full height of the helper columns — the data is in Published, a thousand or more rows down, under a sea of blanks, which is exactly what "nothing went in" looks like from the Owner's chair.
>
> Test that hypothesis first. If it is wrong, say so plainly and find the real cause; do not implement a fix for a fault you have not reproduced.
>
> [Tasks 0–5 as issued: guards and which call decides where a row goes; reproduce it in a stub and report the row number; fix it without ever asking the sheet its height, applying the same reasoning to the duplicate and highest-id scans; a recovery the owner can run that keeps every id; a checkSetup report he can read; record and land.]

**What was done:**

**Task 0 — guards passed, MISSION re-read.** HEAD `8ec82c60ce516da927fb54eb0192283fcbd0a164`, master, clean, `0 0`. **The call that decided where a new row went was `pub.appendRow(out)` at line 379**, with three other extent-dependent reads: `pub.getDataRange().getValues()` at line 333, feeding both the duplicate scan and the highest-id scan, and `sheet.getDataRange().getValues()` at line 259 over the responses tab.

**Task 1 — THE HYPOTHESIS REPRODUCED EXACTLY, and it was tested before anything was changed.** A stub was built whose `getDataRange()`, `getLastRow()` and `appendRow()` model the real semantics: a formula returning an empty string occupies its row. Published was given eight real data rows — ending at row 9 — with helper columns returning `""` to row 1000.

**The new row landed on ROW 1001. Not row 10. 992 blank rows below the table.** `getDataRange()` returned 1000 rows where 9 exist, and `getLastRow()` reported 1000. Successive submissions stranded at 1001, then 1002, each further out. **Ids stayed correct throughout** (`T009` for the first), which is what later made recovery possible: identity survived, only position was wrong.

That also settles the 31-second backfill, which was the tell in his log: the duplicate scan and the highest-id scan were iterating **999 rows to read 8** on every single submission.

**Task 2 — fixed by never asking the sheet how tall it is.** Three new functions define the table's height in one place: `idColumn()` reads column A only; `lastIdRow()` returns the last row carrying a real id, or the header row if there are none; and `tableValues()` reads exactly that rectangle in place of `getDataRange()`. The write became an **explicit `setValues()` to a computed range**, and `appendRow` is gone from the Published path entirely. The duplicate scan and the highest-id scan now read `tableValues()`, so both were fixed by the same change rather than separately. The responses-tab read was left as it is — that tab carries no open-ended formulas, so its own extent is honest — with a comment saying so and what to do if that ever changes.

**Verified against the reproduction: row 1001 → row 10**, with the helpers still reaching row 1000.

**Task 3 — a recovery the owner can run.** `repairPublished()`, on the **Village list** menu as *"Repair the list (move stray rows back up)"*. It finds rows below the contiguous block and moves them up so Published is one continuous table again, **keeping every id exactly as it is** — a row's identity is its id, and every recommendation a villager has left is filed against it, so the row moves and the id does not. It reports what it did in each case: *"Nothing to repair"* with the block size when the sheet is already sound; *"Repaired — moved N people back up into the list. Every ID is unchanged."* when it acts; and **"STOPPED — nothing was changed"** with a list of what it found when it meets something it cannot place.

**The stub suite caught a real gap in that refusal before it ever ran on his sheet.** A row carrying details but no id does not appear in the id list, so the first version returned *"nothing to repair"* while an orphan sat below the table — **the same class of silent reassurance as the bug the repair exists for.** The check was reordered to run before the early return, and its scan extended past the last id. That is recorded here because it is the more interesting failure: the fix for a silent-success bug had its own silent success in it.

**Task 4 — `checkSetup` rewritten as a report he can read.** It now states how many people are on the list, the last id in use, which rows the list fills, **whether anything is stranded and on exactly which row**, any missing or misplaced headings, whether the responses tab is found, and whether the trigger is installed. With a stranded row present it reads: *"1 ROW IS STRANDED BELOW THE LIST — at row 1001. They are real people and nothing is lost — they are just in the wrong place, so you cannot see them and nor can the website. Fix it with: Village list → Repair the list."* That is the report that would have told him the truth tonight, in place of a clean log and an empty-looking sheet.

**Task 5 — recorded.** Layer 3 carries the bug in his own terms — the script completed, the log was clean, the data was invisible, and a silent success is harder to spot than a failure — with the causing interaction named: a helper formula covering a whole column makes the sheet look full to a script. `apps-script/DEPLOY.md` gained **step 12**, his three-step recovery. **Row 5.2 stays open**; it closes when he submits the form and sees the row himself.

**Testing performed:** 23 stub cases, **23 passed**. Every case from the previous session was re-run with helper columns present, plus the new ones the brief named.

| # | Test | Expected | Actual | Result |
|---|---|---|---|---|
| — | **REPRODUCTION, before the fix** | — | **new row on ROW 1001**, data ends row 9 | **defect reproduced** |
| — | **Same, after the fix** | row 10 | **row 10** | **fixed** |
| 1 | New person lands contiguously | row 3 | row 3 | PASS |
| 2 | Blank name → "a villager" | a villager | a villager | PASS |
| 3 | Duplicate appends, no new row | 3 id rows | 3 id rows | PASS |
| 4 | Same words twice → once | 1 block | 1 block | PASS |
| 5 | `+44` duplicate, comma + quote | 2 blocks intact | 2 blocks, quote intact | PASS |
| 6 | 12-digit phone → hidden | hidden | hidden | PASS |
| 7 | Email in business → hidden | hidden | hidden | PASS |
| 8 | Votes tab untouched | 1 row | 1 row | PASS |
| 9 | **Helpers 1000 rows past the data** | row 10 | row 10 | **PASS** |
| 10 | Next id over a 1000-row range | T009 | T009 | PASS |
| 11 | **Genuinely empty Published** | row 2 | row 2 | **PASS** |
| 12 | First id on an empty sheet | T001 | T001 | PASS |
| 13 | **Rows already stranded by the old bug** | 2,3,4,1001,1002 | 2,3,4,1001,1002 | **PASS** |
| 14 | **Duplicate whose existing row is STRANDED** | appends there | 2 blocks on row 1001 | **PASS** |
| 15 | After repair, contiguous | 2,3,4,5,6 | 2,3,4,5,6 | **PASS** |
| 16 | **Ids unchanged by the move** | T004 then T005 | T004 then T005 | **PASS** |
| 17 | Stranded row kept its recommendations | 2 blocks | 2 blocks | PASS |
| 18 | Repair safe to run twice | unchanged | unchanged | PASS |
| 19 | Repair reports "Nothing to repair" | yes | yes | PASS |
| 20 | **Repair REFUSES on a row with no id** | STOPPED, nothing changed | STOPPED, nothing changed | **PASS** (failed first, fixed) |
| 21 | Backfill lands contiguously | rows 2,3 | rows 2,3 | PASS |
| 22 | Backfill merges a duplicate | 2 blocks | 2 blocks | PASS |
| 23 | Backfill run twice | byte-identical | byte-identical | PASS |

**What was not tested:**

- **None of this has run in Google Sheets.** Every result is a local stub modelling the API surface, including the empty-string-counts-as-content behaviour that is the whole bug. That behaviour is **REPORTED** from the brief and consistent with every observation in the owner's log, but it was not measured inside Google by this session. His re-test is the proof.
- **The repair has never run on his real sheet**, so the number of rows actually stranded there is unknown. `checkSetup` will tell him before he runs it.
- **The 31-second backfill is explained, not measured.** The scan-volume arithmetic (999 rows read to reach 8) is measured in the stub; that this accounts for his 31 seconds is inference.
- **Row 5.2 is unchanged and still `new`**, as is every other open row. This session closed nothing.
- **No Google-side change was made**, and nothing was written to his sheet.

**Commits:**

- `e5a82da` — `fix: the publisher wrote a thousand rows below the table, silently`

**Finished:** 2026-09-18T20:08:08Z

**End state:**

The plan is **unchanged at 62 of 92 effort (67.4%)**, 14 of 20 rows `done`. **This session closed no rows**, which is correct: it repaired a defect inside row 5.2's own deliverable, and 5.2 closes on the owner seeing a row appear, not on a passing stub.

What changed is that the failure is now both impossible and visible. Impossible, because the publisher no longer asks the sheet how tall it is — it computes the table's height from column A and writes to an explicit range. Visible, because **Village list → Check the setup** now tells him in plain words how many people are on the list and whether anything is stranded, which is the question he actually had tonight and had no way to answer.

**His three steps are in `apps-script/DEPLOY.md` step 12:** re-paste `Publish.gs`, run **Village list → Repair the list**, then **Check the setup** and look for *"Stranded rows below the list: none. Good."* Then one form submission from his phone. Nothing is lost and no id has changed — the people are in the sheet, just in the wrong place.

**Six rows remain, every one waiting on him:** 6.1 (9, walk the runbook), 5.2 (6, the re-test above), 5.1 (6, confirm the verdicts), 7.1 (5, full journey), 7.2 (3, seed the list), 4.6 (1, redeploy the endpoint).

**Effort per prompt for the plan, cumulative: 62 effort done ÷ 19 prompts sent = 3.26.** Both figures recorded, not only the ratio.

### 2026-09-18T20:18:13Z — Three defects in the owner's data: a misdialling Call button, six duplicated people, and trades off the list

**Source:** Claude Code
**Started:** 2026-09-18T20:12:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader. MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> Same conversation as 2665 through 2688. You landed 2688 at 20:09Z reporting HEAD 8a5bd3e, plan 62/92 = 67.4%, 14 of 20 rows. Re-establish HEAD yourself and stop if it is not 8a5bd3e, clean and level. MISSION: re-read at source and name it back.
>
> ## THREE MORE DEFECTS IN THE SAME DATA, VISIBLE IN THE OWNER'S OWN SCREENSHOT
>
> 2688 fixed where rows land. The Owner sent a screenshot of Published rows 1001-1014 and it shows three further faults that 2688 does not cover. All three are in row 5.2's own deliverable, so this is that row's work — do NOT append a new plan row for them.
>
> [His fourteen rows, T005–T018, quoted verbatim in the prompt.]
>
> DEFECT 1 — THE DUPLICATE SCAN WAS BLIND, AND THE DUPLICATES ARE REAL. Six people listed twice. repairPublished must also remove duplicates. Keep the LOWEST id for each person, merge the higher row's recommendation text and recommender name into the kept row rather than discarding them, and NEVER reuse or change an id. Say plainly what it does when two rows share a phone but disagree on name, trade or status — do not silently pick one.
>
> DEFECT 2 — PHONE NUMBERS HAVE LOST THEIR LEADING ZERO. LAUNCH-CRITICAL. Google has stored them as NUMBERS and dropped the leading zero. The site builds the tel: Call link from that column, so a villager tapping Call would dial a wrong number. This is the single most damaging fault on the list, because it fails silently in the hands of an elderly person trying to reach a plumber. The publisher must write the phone as TEXT, and the repair must fix the values already damaged — prefer re-deriving from the responses tab over reconstructing by rule, and if you reconstruct, state the rule and what it refuses to guess at. Note that T007's 78853335434 is eleven digits already and is the known-bad twelve-digit number minus its zero, so it is hidden for the right reason by accident; handle it honestly. Then MEASURE it on the SERVED page.
>
> DEFECT 3 — THE TRADE NAMES DO NOT MATCH THE TILES. [The agreed 29-trade list, quoted in full, plus Other as free text.] Map the publisher's trade normalisation onto that list, including the historical values his sheet already holds. Free text from Other passes through trimmed and unchanged. Put the mapping table where a human can edit it, and say where. The repair should correct the trade on existing rows using the same mapping.
>
> [Tasks 0–5 and the recording requirements as issued.]

**What was done:**

**Task 0 — guards passed, MISSION re-read.** HEAD `8a5bd3e7bfe3152f548e8e3673953b5ae9795b5e`, master, clean, `0 0`. **Defect 2 sits directly against the mission**: *"tap a trade, tap a large green Call button. That is the whole product."* A misdialling Call button is not a blemish on this product, it is the product failing.

**The leading-zero analysis was verified against his data before anything was built.** Six of eight values are ten or eleven digits with no leading zero; the two intact ones are the only two containing a space. Restoring a zero to each ten-digit value yields exactly eleven digits, which is correct for every UK number. **T007 is the case that matters**: `78853335434` is already eleven digits, so a naive rule leaves it alone and it *looks* valid — but it is the known-bad twelve-digit `078853335434` with its zero eaten. A reconstruction rule alone cannot distinguish those, which is precisely why re-deriving from the responses tab had to come first.

**Defect 2 — done first, because it is the one that misdials.** `phoneText()` prefixes an apostrophe so Sheets stores the value as text; the publisher now uses it, so the fault cannot recur. For damaged rows, `cleanPublished()` **re-derives the number from the responses tab**, where the villager's original text survives untouched, and only falls back to a rule when there is no match. The rule restores a zero to exactly ten digits and **refuses everything else**, reporting it for the owner to retype.

**MEASURED ON THE SERVED PAGE**, driven in a real browser at 320px with a feed fixture: repaired values give `tel:07887988959` and `tel:07111655432`, and a spaced number correctly strips to `tel:07999222333`. The damaged value gives `tel:7887988959` — the misdial demonstrated rather than asserted.

**Defect 1 — duplicates removed inside the repair.** Lowest id kept, higher row's recommendations merged into it, removed ids **retired and never reused**. Disagreements on trade or status keep the earlier row's values and are **reported, not silently resolved**.

**The subtlety that would have deleted a real tradesperson, and it was caught in the stub against his own fourteen rows:** keying duplicates on the phone number alone merged **John Pilkington the car mechanic into Ben Franks the electrician**, because they share `07887800192` — a household or business line. The key became **phone plus name**; two different people on one number are both kept and the sharing is reported. Had this gone out keyed on phone alone, the village would have lost a tradesperson silently.

**Defect 3 — the mapping table.** `TRADES` and `TRADE_ALIASES` sit near the top of `apps-script/Publish.gs`, under a heading that says to edit them there when the form changes. All the historical values the brief named are mapped, plus the older wordings from earlier versions of the form. **Free text from *Other* passes through trimmed and unchanged** — no capitalisation forced, no guess made, because mapping "boiler" on a hunch files somebody under a heading they never chose.

**Task 4 — `checkSetup` now reports all three before he runs anything:** the duplicate count, every telephone number that is not eleven digits starting zero listed by id, and every trade not on the agreed list.

**Three real bugs were caught by the stub before any of this could reach his sheet**, and they are worth recording because each would have been damaging:
1. **`mergeBlocks` was called with its arguments in the wrong order**, merging the recommender's *name* into the words column — visible as `"Top blokes\n\nFrankie"` where it should read `"Top blokes\n\nAlso fixed our tap"`.
2. **The phone-only dedupe key**, which deleted John Pilkington.
3. **An early return that skipped the clean-up entirely** on a sheet that happened to be contiguous — so a sheet with duplicates but no stranded rows would have been declared sound. That is the same silent-reassurance shape as the bug recorded yesterday.

**Testing performed: 46 stub cases, 46 passed** — the 23-case regression suite from the previous session, all re-run, plus 23 new.

**His fourteen rows, before and after:**

| Before | id | phone | trade | → After |
|---|---|---|---|---|
| row 1001 | T005 | `7887988959` | Plumber | **row 2**, `07887988959`, recommendations merged from T013 |
| row 1002 | T006 | `7887800192` | Electrician | **row 3**, `07887800192` |
| row 1003 | T007 | `78853335434` | Gas Engineer | **row 4**, phone **REFUSED** and reported, trade → **Boiler & heating**, stays `hidden` |
| row 1004 | T008 | `7999000111` | Plumber | **row 5**, `07999000111` |
| row 1005 | T009 | `07999 222333` | Plumber | **row 6**, unchanged (was already text) |
| row 1006 | T010 | `07999 444555` | Plumber | **row 7**, unchanged |
| row 1007 | T011 | `7887800192` | Car Mechanic | **row 8**, `07887800192`, trade → **Car mechanic**, KEPT despite sharing a number with T006 |
| row 1008 | T012 | `7111655432` | Carpenter | **row 9**, `07111655432` |
| rows 1009–1014 | T013–T018 | — | — | **removed as duplicates; ids retired, never reused** |

Fourteen rows became eight. Six ids retired: `T013, T014, T015, T016, T017, T018`. Twelve phone numbers repaired, four trade names corrected, one number refused and reported. **The repair is idempotent** — run twice, the sheet is byte-identical.

| # | Test | Expected | Actual | Result |
|---|---|---|---|---|
| 1–23 | Full regression suite from the previous session | all pass | all pass | **23/23** |
| 24 | His 14 rows → repair | 8 rows | 8 rows | PASS |
| 25 | Ids retired, never reused | T013–T018 | T013–T018 | PASS |
| 26 | Recommendations merged into the kept row | 2 blocks on T005 | `"Top blokes\n\nAlso fixed our tap"` | PASS |
| 27 | Two people on one number both kept | T006 and T011 survive | both survive, reported | PASS |
| 28 | Repair run twice | byte-identical | byte-identical | PASS |
| 29–40 | Trade mapping, 12 cases incl. free text | as tabulated | all correct | PASS |
| 41–46 | Phone rule, 6 cases incl. 3 refusals | as tabulated | all correct | PASS |
| — | **SERVED page, repaired value** | zero present | **`tel:07887988959`** | **PASS** |
| — | **SERVED page, spaced number** | stripped | **`tel:07999222333`** | **PASS** |
| — | **SERVED page, damaged value** | shows the misdial | **`tel:7887988959`** | demonstrated |

**What was not tested:**

- **None of this has run in Google Sheets.** Every publisher and repair result is a local stub. His re-test is the proof.
- **The apostrophe-forces-text behaviour is REPORTED**, not measured inside Google by this session. It is standard Sheets behaviour and consistent with his own data — the two numbers that kept their zeros were the two Sheets could not read as numbers — but it was not observed here.
- **The served-page evidence used a fixture**, not his sheet, which was deliberate: it proves the rendering without touching his data.
- **Whether T007's true number can be recovered** depends on his original form answer, which this session cannot read.
- **Row 5.2 is unchanged and still `new`.** This session closed no rows.

**Commits:**

- `bb616a3` — `fix: phone numbers stored as text, duplicates merged, trades mapped to the tiles`

**Finished:** 2026-09-18T20:18:13Z

**End state:**

The plan is **unchanged at 62 of 92 effort (67.4%)**, 14 of 20 rows `done`. **This session closed no rows**, correctly: all three defects live inside row 5.2's own deliverable, and 5.2 closes when the owner sees a row land correctly, not on a passing stub.

The most important thing here is not the count. **The Call button would have misdialled**, for six of the eight people on his list, in the hands of exactly the audience least able to tell that the list rather than they had made the mistake. That is now impossible to recur and repairable where it has already happened, and it was demonstrated on the served page rather than argued.

**His steps are in `apps-script/DEPLOY.md` step 13.** One number — Helen Smith's — needs him to retype it from her original form answer; the repair refuses it honestly rather than inventing a plausible wrong number.

**Six rows remain, every one waiting on him:** 6.1 (9, walk the runbook), 5.2 (6, re-paste, repair, re-test), 5.1 (6, confirm the verdicts), 7.1 (5, full journey), 7.2 (3, seed the list), 4.6 (1, redeploy the endpoint).

**Effort per prompt for the plan, cumulative: 62 effort done ÷ 20 prompts sent = 3.1.** Both figures recorded, not only the ratio.

### 2026-09-18T20:46:38Z — Row 5.2 closed; the repair no longer destroys the owner's formulas; his real data measured for the first time

**Source:** Claude Code
**Started:** 2026-09-18T20:20:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this session:** `gsamwell-lang/dunchi-trader` (origin), `dunchitrader-collab/dunchitrader-collab.github.io` (collab). No other repository was read or written.

**Prompt received:**

> Target repo: dunchi-trader. MODE: IMPLEMENTATION. Package tier (a) hard/ambiguous, model claude-opus-5, effort high.
>
> Same conversation as 2665 through 2689. You landed 2689 at 20:19Z reporting HEAD 141330b, plan 62/92 = 67.4%, 14 of 20 rows. Re-establish HEAD yourself and stop if it is not 141330b, clean and level. MISSION: re-read at source and name it back.
>
> ## WHAT THE OWNER DID AND WHAT HAPPENED
>
> He re-pasted Publish.gs, added the K1/L1 headings, ran Check the setup, then ran the repair. Reported verbatim: "Repaired. Moved 14 people back up into the list. Removed 6 duplicate rows, keeping the earliest ID for each person and moving their recommendations onto the row that was kept. Retired IDs (never reused): T013, T014, T015, T016, T017, T018. Put the missing 0 back on 12 telephone numbers. Corrected 5 trade names to match the list on the website. WORTH A LOOK — these duplicates did not agree: T006 and T011 share a telephone number but are different people (Ben Franks / John Pilkington) — BOTH KEPT, nothing merged. Every ID is unchanged."
>
> The before picture from Check the setup, also verbatim: 18 people, last id T018, list filling rows 2 to 5, 14 rows stranded at rows 1001-1014, 7 duplicate rows, 12 telephone numbers wrong, 3 trade names off the list (T003 Roofer, T007 and T015 Gas Engineer), and the K1/L1 headings missing at that point.
>
> THEN THE TWO TESTS: 1. RENDERED SURFACE, PASSED. He opened the live site on his phone, tapped Plumber, tapped Call, and confirmed the dialler showed the full eleven-digit number with its leading zero. His word: "pass". 2. A REAL FORM SUBMISSION FROM HIS PHONE PUBLISHED ITSELF.
>
> ## THE NEW DEFECT — THE REPAIR DESTROYS THE HELPER FORMULAS
>
> His words: the new row published "but not column I or J", and when asked which columns, he named them: pub_phone_key and pub_name_key. Those two columns hold ARRAYFORMULA formulas he pasted into Published I2 and J2. The repair writes rows back across a range that includes I and J, so it has overwritten or cleared them. This matters beyond tidiness: the verdict column looks up Published I and J to decide ALREADY ON SITE and SAME NAME, DIFFERENT NUMBER. With those columns dead, every future submission reads as NEW even when the person is already listed. I have told him to re-paste both formulas by hand as an immediate repair. Your job is to make sure no script can do it again.
>
> [Tasks 0–5 as issued: guards and every Published range stated by column span; never write to the formula columns, in a way that survives another being added; detect it in Check the setup; close row 5.2 on his words after reading the row's own wording; measure the live feed and drive the live site; record and land.]

**What was done:**

**Task 0 — guards passed, MISSION re-read, every Published write stated by column span before changing anything.** HEAD `141330b0e12b78adbcf3e1e28461a65e8580f1d2`, master, clean, `0 0`. Six writes found; **five of them crossed `I` and `J`** — `publishOne`'s row write, both of `repairPublished`'s move-and-clear, and both of `cleanPublished`'s write-and-clear, all spanning `A`..`L`. Only `appendRecommendation` was safe, writing `K` and `L` individually. The full table is in the Layer 3 entry.

Worth recording: **`PUB_COLS` already carried the comment *"the sheet-formula helpers, written by formulas, NEVER by this script"*.** The intent was written down and the code contradicted it. A comment cannot enforce anything, which is why the fix is structural rather than another comment.

**Task 1 — the columns are now declared, not remembered.** `FORMULA_COLS = [8, 9]` names the columns the script must never touch, and `writableBlocks()` derives the contiguous writable spans from it — `A`–`H` and `K`–`L`. Every write goes through `writeRowBlocks`, `writeRangeBlocks` or `clearRowsBlocks`. **Adding another formula column later means adding one index and nothing else**, which was verified by declaring a thirteenth column formula-owned and watching the blocks recompute.

**The limit is stated in the file rather than left implicit:** if the owner puts a formula in a column `FORMULA_COLS` does not name, the script will still overwrite it — it cannot detect one, because the Sheets API returns a formula's **result** when reading values, so a formula and a typed value are indistinguishable on a read. `checkSetup` reports the health of the columns it knows about, and `FORMULA_COLS` is the place to record a new one.

**The proof was made to fail first.** A stub was built whose `I` and `J` hold formula *objects*, so any write replaces the object and is detectable. The first version of that test **passed against the old code**, which was wrong — the fixture exited early with "nothing to repair" and never reached a write. A damaged phone number was added to force the write path, and then: **old code destroys both formulas, replacing them with their last computed values — exactly what the owner saw — and the new code leaves both intact while still doing the repair.** A test that cannot fail proves nothing, and this one nearly did not.

**Task 2 — `checkSetup` reports the helper columns.** Whether `I2` and `J2` hold a formula at all, and if so whether they are producing a value for every row that has a phone. When they are missing it says what it means — *"EVERY new form submission will look like a new person, even somebody already on the list"* — and names the fix and the file. He found this by eye on one row; the report now states it.

**Task 3 — row 5.2 closed on his words, after checking its own wording clause by clause.** Every clause was **measured on his real live feed** rather than taken from the summary: a new response appended one row by itself (`T013 Ron Suttil`), the next id derived from the highest already there (`T012` → `T013`), plain values throughout, `active` for the clean submission, `hidden` for the unusable phone (`T007`), and no existing row edited, deleted or reordered.

**One clause is superseded rather than unmet, and it is recorded as such:** the row predates D8a and names "a phone already on Published" as a third hard failure that should set `hidden`. D8a deliberately reversed that — a duplicate is now a second recommendation appended to the existing person — and the live feed shows it working. The row's intent, that a duplicate must not quietly create a second listing, is met by the better behaviour.

**Task 4 — the first measurement of his real repaired data.** The live CSV now holds **13 rows**. **12 of 13 phone numbers are eleven digits starting zero**; the one exception is `T007`'s twelve-digit number, which the repair refused honestly and which is `hidden`, so no villager can reach it. **Every trade in the `trade` column is on the agreed list.** `I` and `J` are populated for all thirteen rows, confirming he has already pasted the formulas back.

Driving the live site at 320px: **7 trade tiles, 12 cards, 9 of them showing a villager's words, 0px overflow.** Every Call link carries a full eleven-digit `tel:`. **`T013` Ron Suttil's card reads *"Very good engineers, especially good working with metal" — Recommended by Helen*** — which is the **first end-to-end proof against real data** that the words and the recommender's name reach a card, where previously only a fixture had shown it.

**That measurement found a further defect the brief had not named.** One of the seven tiles was **`Heating`**, which is not on the agreed list, sitting beside the correct `Boiler & heating`. It came from `T002`'s **`extra_trade`**, which `cleanPublished` was not mapping — it normalised `trade` only. A person with two trades appears under both headings, so an unmapped second trade makes a stray tile just as readily. Fixed in the same session, with `checkSetup` now reporting an unrecognised second trade separately so he can tell which column to look in.

**Testing performed: 49 stub cases, 49 passed** — the 46-case regression suite from previous sessions plus the 3 new formula-column proofs.

| # | Test | Expected | Actual | Result |
|---|---|---|---|---|
| 1–23 | Regression suite (stranded rows, repair, backfill) | all pass | all pass | **23/23** |
| 24–46 | Regression suite (trades, phones, duplicates, his 14 rows) | all pass | all pass | **23/23** |
| 47 | **I and J after a PUBLISH** | formulas intact | intact | **PASS** |
| 48 | **I and J after a DUPLICATE APPEND** | formulas intact, K merged | intact, `"First words"` merged | **PASS** |
| 49 | **I and J after a FULL REPAIR** | formulas intact | intact, row moved 1001 → 4 | **PASS** |
| — | **Same three against `141330b`** | should FAIL | **both destroyed → `"07000000001"`, `"annone"`** | test is genuine |
| — | `writableBlocks()` | A–H, K–L | A–H, K–L | PASS |
| — | …with a 13th formula column declared | A–H, K–L | A–H, K–L | PASS |
| — | `extra_trade` mapping | `Heating` → `Boiler & heating` | `Boiler & heating` | PASS |
| — | His 14-row repair, re-run | idempotent | byte-identical | PASS |
| — | **LIVE FEED: phones** | 11 digits starting 0 | **12 of 13**; `T007` refused and `hidden` | measured |
| — | **LIVE FEED: trades** | on the agreed list | **13 of 13 in `trade`** | measured |
| — | **LIVE FEED: helper columns** | populated | **all 13 rows** | measured |
| — | **LIVE SITE: tiles** | on the agreed list | **7 tiles; `Heating` off-list** | **defect found** |
| — | **LIVE SITE: cards** | recommendations render | **9 of 12 show a villager's words** | measured |
| — | **LIVE SITE: overflow at 320px** | 0px | **0px** | measured |

**What was not tested:**

- **None of the script changes have run in Google Sheets.** The formula-column protection is stub-proven, including against the old code, but the owner must take the new `Publish.gs` for it to apply to him. Until he does, his next repair would destroy the formulas again.
- **The owner has not seen a recommendation on a card.** That was measured here against his real feed, and it is this session's measurement rather than his sighting — recorded in row 5.2 rather than implied.
- **`T007`'s true number cannot be recovered here**; it needs his original form answer.
- **Whether `T002`'s stray `Heating` tile is gone** will only be true after he re-pastes and re-runs the repair.
- **No Google-side change was made**, and nothing was written to his sheet or Votes tab.

**Commits:**

- `8dbf9b2` — `fix: the script must never write to the owner's formula columns`

**Finished:** 2026-09-18T20:46:38Z

**End state:**

The plan stands at **68 of 92 effort (73.9%)**, 15 of 20 rows `done`. **Row 5.2 closed** — the largest single movement in several sessions, and the one that matters most: a villager's recommendation now reaches the village list with nobody touching a spreadsheet.

**Two things are true tonight that were not this morning.** The Call button dials the right number, confirmed by the owner on his own phone on the served page. And a recommendation written by a villager appears on a tradesperson's card, measured against his real data rather than a fixture.

**Five rows remain, every one waiting on him:** 6.1 (9, walk the runbook), 5.1 (6, confirm the verdicts), 7.1 (5, full journey), 7.2 (3, seed the list), 4.6 (1, redeploy the endpoint). Two short jobs are outstanding: re-paste `Publish.gs` so the formula protection applies, and retype Helen Smith's number.

**Effort per prompt for the plan, cumulative: 68 effort done ÷ 21 prompts sent = 3.24.** Both figures recorded, not only the ratio.

### 2026-09-18T21:10:23Z — Claude AI + Human — conversation close-down
**Source:** Claude AI + Human

**Conversation reference:** https://claude.ai/cowork/cse_01HkJGChdg9xjNavfnTe9USH
**Repos touched this conversation:** dunchi-trader (accurate as at writing; may extend if the conversation is reopened, though it is closed to further sends)
**Predecessor:** https://claude.ai/cowork/cse_01U4wmyQG3nVGNetpsU5i2zw

**What was discussed.** This conversation took PLAN-DUNCHI-TRADER-V1 from 31/75 (41.3%) to 68/92 (73.9%), closing rows 2.1, 3.3, 4.3, 3.4, 3.5, 4.4, 4.5 and 5.2 and appending six new rows as real gaps were found. The substantive work: wiring the deployed Apps Script votes endpoint into the live site; measuring the cross-origin behaviour from the Pages origin rather than assuming it; reconciling the restore runbook to the deployed state before the Owner walks it; changing the minimum recommendation length from fifteen characters to seven; making the site group trades case-insensitively; replacing the manual review gate with an automatic publisher; and carrying villagers' words and names through to the cards.

**Decisions made.**

**[DECISION] D4a-9USH-18092026** — the minimum length for a recommendation becomes SEVEN characters, not removed. Owner verbatim: *"I think we can change the check to 7 characters. As they can't really put in a sentence without more than that "Fixed Gate" is about as short as you can get."* Applied to the sheet verdict rule and the site's recommend panel; the solution design was corrected to match, since his statement outranks it.

**[DECISION] D5c-9USH-18092026** — no fuzzy search and no everyday-words list. Effort goes into the tile names being plain and complete instead. Rejected: a built-in forgiving matcher, and vendoring a fuzzy-search library.

**[DECISION] D6a-9USH-18092026** — the site groups trades ignoring capitals, displaying the first spelling seen. Measured cause: capitals split a tile in two while whitespace already merged.

**[DECISION] D7a-9USH-18092026** — publishing becomes automatic, with three hard failures landing hidden rather than live: no usable phone number, an email address or web link in an identity field, and (superseded by D8a) a duplicate. Owner verbatim: *"OK i am not doing this by hand. I said as a design principle this will be no admin. Make it automatic from the form responses. I will routinely check the data and overwrite whatever looks messy. That is easier and can be done in batch. In fact we can write a script for that can we not?"* This reverses the manual copy-to-Published approval gate; the design was corrected to match.

**[DECISION] D8a-9USH-18092026** — villagers' words and names reach the site. Published gains columns K and L; the publisher writes responses columns H and I into them; a duplicate submission APPENDS to the person already listed rather than being discarded. Raised by the Owner noticing the publisher ignored column I, whose own question text promises the villager their name appears on the website.

**[DECISION] D2-9USH-18092026** — planning-tracker left running and untouched; this conversation never sent to it.

**Options rejected.** Publishing everything with no checks at all (D7b). A second published feed from the Votes tab (D8b). A fuzzy-search library (D5b). Removing the minimum length entirely (D4b). Leaving trade grouping case-sensitive (D6b).

**Constraints and gotchas.** GITHUB_TOKEN must be cleared to push to origin. Deleting the HIGHEST id frees it for reuse, so rows are hidden and never deleted. Helper formulas covering a whole column make a sheet look full to a script — the cause of tonight's largest defect. The Owner's Published tab carries owner-owned formula columns at I and J; the script must never write to them. The site fetches ONE feed, the Published tab; the Votes tab is written to and read by nothing.

**Documents produced or updated this conversation.** docs/PROCESS-seeding-and-launch-dunchi-trader.md (new), apps-script/Publish.gs (new), apps-script/DEPLOY.md (Part 2 added, step 4 superseded), apps-script/SHEET-FORMULAS.md (rewritten against the real column layout), docs/RESTORE-dunchi-trader.md (reconciled to the deployed state, tick list added), README.md, the solution design, the build plan and the handover.

**[Pattern candidate] tags raised this conversation:** evidence-matches-claim; known-debt-becomes-a-row; reconcile-before-the-walk.

---

#### THE OWNER'S WORK, 2026-09-18 evening

All REPORTED by him unless marked measured. This is his own work inside Google and on his phone, not a Claude Code session; it is recorded here because none of it is visible in the repository and a successor would otherwise have no account of it.

- **Rebuilt the Google Form:** removed the email question, made the trade question a real multiple choice with a working Other, removed the star rating, and replaced the trade list with the agreed twenty-nine tile names. **MEASURED** from the public form at 19:0xZ.
- Turned off email collection and added an eleven-digit phone validation rule.
- Pasted the four duplicate-check formulas and the action dropdown into the sheet.
- Installed `Publish.gs` and the on-form-submit trigger; **re-pasted it three times** as defects were fixed.
- Ran Check the setup and the repair. Verbatim: *"Repaired. Moved 14 people back up into the list. Removed 6 duplicate rows... Retired IDs (never reused): T013, T014, T015, T016, T017, T018. Put the missing 0 back on 12 telephone numbers. Corrected 5 trade names..."*
- **Restored the two ARRAYFORMULA helper columns** into Published `I2` and `J2` by hand after the repair destroyed them.
- **Hand-pasted recommender names** from the responses tab into Published column `L`. He was warned the repair had reordered rows so a block paste may be misaligned; **alignment has NOT been verified**.
- **SIGHTED on his phone, on the served site: the Call button carries the full eleven-digit number with its leading zero. His word: *"pass"*.** That is the launch-critical misdial confirmed fixed by the Owner.
- **SIGHTED:** no stray Heating tile, and a villager's words visible on a card.
- Redeployed `Code.gs` as a new version of the existing deployment.

**What the successor conversation picks up first:** the open `[BUG]` recorded in Layer 3 this session — the site's own recommend button produced no row in the Votes tab after the redeploy. Row 4.6 stays open. Row 5.1 stays open and needs two specific test rows typed into the sheet; both are recorded in Layer 4 so they do not have to be reconstructed.

---

### 2026-09-19T11:31:34Z — The recommend button repointed at the village list; the undiagnosed defect measured
**Source:** Claude Code
**Started:** 2026-09-19T11:03:37Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Successor to `cse_01HkJGChdg9xjNavfnTe9USH`, which is closed. Standing send authority for in-plan, low-risk work; interrupt only when a step needs the Owner, and bring every Owner step back in ONE block at the end. **First read** the MISSION block in the handover, then Layer 6 bottom-up, then Layer 3 (five untested candidates for the undelivered vote) and Layer 4 (Owner actions); then plan rows 4.1–4.6 and 5.2 and solution design §6.2. **Decisions to record:** D1b-6G7f-19092026 (ruled by Gavin) — the on-site panel feeds the PUBLISHED tab, not Votes, because nothing reads Votes; options declined were D1a (keep writing to Votes) and D1c (retire the panel). D2-6G7f-19092026 (Claude.ai under standing authority) — the endpoint's power is bounded to APPENDING a recommendation to an EXISTING, non-hidden trader id; it may never create a row, assign or reuse an id, write any column other than K and L, or touch I and J; an unknown or hidden id is refused and logged with no write. **Tasks:** (1) repoint the endpoint using THE SAME function the row-5.2 publisher uses, apply the D2 bound, stop writing to Votes but leave the tab untouched, and make the minimum note length SEVEN (row 4.6) — remembering that a helper formula covering a whole column makes the sheet look full to a script. (2) Site side: if the panel does not already collect the villager's name, add one required field labelled with the SAME words the Google Form uses; reconcile the WHOLE panel against the text-size control, the 320px/200% rules from row 3.3 and the Requirement as stated; fix the wireframe too. (3) Fold the diagnosis into the build — for each of the five candidates say whether the rebuilt path can still exhibit it and test every one testable from the server; anything needing the Owner's Google account goes in the Owner block phrased as a test with an expected result, not a conclusion. (4) Read RESTORE for how Code.gs reaches the deployment; if a route exists from the server use it, otherwise update RESTORE and README and put paste-and-deploy in the Owner block. (5) Row 7.2 first half: the village WhatsApp launch message, 70 words or fewer, as "Telling the village" in README. (6) Push to both remotes and confirm the SERVED page carries the change with a real fetch. (7) Append ONE row to step 4 at the next free number, status new, effort 4; never insert, never renumber; do not edit 4.6's text; do NOT mark either done. (8) HANDOVER: Layer 5 for D1b and D2, Layer 4 updates, Layer 6, and Layer 3 with the five candidates each marked.

**What was done:**

**THE DEFECT IS DIAGNOSED, AND IT WAS NONE OF THE FIVE CANDIDATES.** That is the finding of the session and everything else follows from it.

The five candidates all assumed the request reached a running script. It does not. **MEASURED 2026-09-19T11:10Z** by sending real requests to the `/exec` address recorded in Layer 1: a POST returns a Google error page reading **`Ohjelmatoimintoa ei löydy: doPost`** — Finnish for *"Script function not found"* — identically on three attempts and again with form parameters rather than JSON. A GET returns the same for `doGet`. **The address is alive and the deployment behind it contains neither entry point.** A corroborating detail: the POST now returns HTTP 200 directly, where the 2026-09-18T17:02:32Z measurement in §6.2 recorded 302→200. A working Apps Script web app redirects; an error page does not. The behaviour of the address changed when the owner redeployed.

Most likely he had a different file open — `Publish.gs` was pasted three times that evening — when he took **New version**. `DEPLOY.md` step 14 now makes you search the editor for `doPost` before deploying, which is the check whose absence caused this.

**Why it survived a day, and this is the lesson rather than the bug.** Every signal the project had said the path was fine: the code correct and committed, the URL correct and served byte-identical, the request shape correct, and the page's reply opaque *by design* so the browser could never report it. **A deployment is a thing that can be wrong independently of the code, and nothing in this project tested it.** `doGet` now returns one plain sentence so that opening the address in a browser is a ten-second test with two unmistakable outcomes.

**Task 1 — the endpoint repointed.** `apps-script/Code.gs` rewritten. It appends the villager's words to Published `K` and their name to `L` of that trader's row, calling **`appendRecommendation()` in `Publish.gs` — the same function the row-5.2 publisher uses for a duplicate form submission**, not a copy. Test 18 proves it by substituting a sentinel for the shared function. A `requirePublisher()` guard refuses with an explicit message if `Publish.gs` is absent rather than failing obscurely mid-write.

The D2 bound is enforced in code: no `appendRow` and no `insertRow` anywhere in the file, `K` and `L` as constants taken from `Publish.gs`, an id match against column `A` with an unknown id refused and logged, and a `status` check so a `hidden` row is refused too. **Layer 3's lesson was applied**: it reads via `tableValues()`, never `getLastRow` or `getDataRange`, because the owner's whole-column `ARRAYFORMULA` helpers make the sheet look 1000 rows tall.

`MIN_TEXT` is **7** (row 4.6). The Votes tab is left untouched and added to `FORBIDDEN_TABS` so the endpoint cannot start writing to it again by accident.

**Task 2 — the panel. The name field already existed**, so none was added; the task's condition was not met. What did change is its label, because D1b changed where the name goes: it now reaches Published `L` and renders publicly on the card (row 3.5), and a label reading only "Your name" asks for something without saying where it goes. It now carries the Google Form's own sentence, minus the leading "Finally". **It stays optional**, because the form's own "(if you want to share it on the website)" makes it so and the site must not ask more of a villager than the form does.

The confirmation message was wrong in a way that mattered: *"It will not be sent to the village list until the site is finished"* became false under D1b. It now says the recommendation **has been sent** — true of the request, which is all the page knows — and names the five-minute republish lag, while still not claiming it arrived, because the reply is opaque by measurement.

**A finding on the panel worth more than the change itself.** The Form's sentence is long, so it was going to be split into a short label plus a note under the field. **Measured, the split was worse** — 542px of scrolling to reach the send button versus 289px for one label — because a separate note costs its own margins. And the baseline mattered more: the button was **already 299px below the fold before any change**, so what looked like a regression this session introduced is pre-existing shipped behaviour from rows 4.1 and 4.5. Neither fact was available by reasoning, and the split was reverted.

**Task 4 — deployment route. There is none from the server.** No `clasp` on the machine and none in the repository; `docs/RESTORE-dunchi-trader.md` describes a paste-and-deploy by the owner and that is still the only route. RESTORE, README and DEPLOY.md were updated accordingly and the paste-and-deploy steps are in the Owner block, citing DEPLOY.md step 14 rather than restating it.

**Documentation.** DEPLOY.md gains step 14 and its opening now points there. RESTORE step 7 says `Publish.gs` must go in first, carries the browser check with both outcomes, and points at Published `K`/`L`; the Votes steps are kept but marked optional; the verification list and phone tick list follow. README's recommend section is rewritten, and one correction in it matters more than the rest — *"The website can only read. Nothing a villager does on the site can change, add or delete anybody"* was true yesterday and is not true now.

**Solution design §8.2 was rewritten rather than edited.** The old five bullets are struck through and preserved, because two of them stopped being true and a reader must see that the exposure **widened** rather than find it quietly replaced. The new text states the worst case honestly, gives the seven bounds, and records what was given up: the endpoint used to be unable to affect anything a villager sees, and no longer is. Risk row 8 moves Low → Low–Medium.

**Task 5 — the launch message.** README gains **"Telling the village"** at **66 words**, covering what it is, what it does for them, the link, and how to recommend somebody. No jargon, no "tradesman". It carries a DO-NOT-POST-YET warning, because the list still holds test people and the link cannot be un-sent. 7.2 stays open on its second half.

**Task 7 — the plan. Row 4.7 appended** at the next free number, effort 4, status `new`. Never inserted, never renumbered, and **4.6's text is unedited** — it still says "Votes tab", which is now the wrong destination, but its outcome is unchanged and rewriting it would make the plan disagree with its own history; the moved destination is recorded in Layer 5 under D1b.

**Both rows stay `new`, and that is a finding rather than a choice.** STD-00009 §5.2.1 [CORE] gives exactly seven status tokens — `done`, `to-do`, `blocked`, `new`, `parked`, `descoped`, `external` — and **none of them means "built, awaiting verification"**. `to-do` was explicitly narrowed to "NOT STARTED, FULL STOP" under D3a-uNFL-03092026, so it is not available either. The built-but-unsighted state is carried in the row's prose, which is what §5.2.3 provides for.

The step heading changed from **"Step 4 — Votes"** to **"Step 4 — Recommendations from the site"**, with the reason recorded inline. No row number moved and no row text changed.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `5cb5049`, clean, 0 | `5cb5049`, clean, 0 | PASS |
| **Live `/exec` GET** | a plain sentence | **`Ohjelmatoimintoa ei löydy: doGet`** | **FAIL — the defect, found** |
| **Live `/exec` POST ×3** | `{"ok":…}` | **`Ohjelmatoimintoa ei löydy: doPost`** ×3 | **FAIL — the defect, confirmed stable** |
| Live `/exec` POST, form params | same as JSON | same error — not a body-shape fault | PASS (as diagnosis) |
| POST redirect chain | 302→200 per §6.2 | **HTTP 200 direct, no redirect** | Corroborates: behaviour changed at redeploy |
| **Candidate 4** — served `app.js` endpoint vs Layer 1 | identical | identical; sha256 `c1358c09…` byte-identical to commit | **CLEARED** |
| **Candidate 5** — served body vs `doPost` parser | parses | `{id, name, text}` parses; 7 accepted, 6 refused | **CLEARED as the cause** |
| Stale page in phone memory | ruled out | served page fetched `?x=1`, byte-identical | **CLEARED** |
| Endpoint: valid post writes K and L only | 2 cells, row of that id | 2 cells, cols 11 and 12, one row | PASS |
| Endpoint: second recommendation appends | both, blank-line separated | both, names in step | PASS |
| **Endpoint: 9 adversarial posts (tab, sheet, col, status, phone, whole-row, traversal ids)** | never outside K/L | **every one in K/L of one row; Votes never opened** | **PASS** |
| Endpoint: formula columns I and J | zero writes | zero; both still Formula objects | PASS |
| Endpoint: unknown id | refused, nothing written, logged | refused, 0 writes, logged | PASS |
| Endpoint: hidden id | refused, nothing written, logged | refused, 0 writes, logged | PASS |
| Endpoint: 6 vs 7 characters | 6 refused, 7 accepted | as expected; "Fixed gate" accepted | PASS |
| Endpoint: Votes tab | never written, read or opened | never | PASS |
| Endpoint: formula-column trap | writes to row 5, not 1001 | row 5; `getDataRange` never called | PASS |
| **Negative control: would a naive impl. fail?** | yes — row 1001 | **naive `getLastRow()+1` = 1001 vs `lastIdRow()` = 5** | **PASS — the test detects the defect** |
| Endpoint: duplicate tap | not recorded twice | `added:false`, 0 writes | PASS |
| Endpoint: blank name | "a villager" | "a villager" | PASS |
| Endpoint: malformed / non-JSON bodies | refused, nothing written | all 5 refused, 0 writes | PASS |
| Endpoint: `Publish.gs` absent | refuses loudly | refuses | PASS |
| **Endpoint: shared function, not a copy** | `Publish.gs`'s is called | sentinel fired, right row and values | **PASS** |
| Browser: label is the Form's words | exact match | exact | PASS |
| Browser: 320px largest A, overflow | 0 | **0**; label 9 lines, `scrollW` 199 = `clientW` 199 | PASS |
| Browser: 200% zoom on 320px | 0 overflow | **0** | PASS |
| Browser: desktop 1280px | 0 overflow | **0** | PASS |
| Browser: 6 refused / 7 accepted on the page | as row 4.5 | refused with text preserved and `aria-invalid`; 7 accepted | PASS |
| Browser: error colour vs body colour | equal | `rgb(16,20,19)` = `rgb(16,20,19)` | PASS |
| Browser: POST body and target | id not name, recorded `/exec` | `{"id":"T001","name":"Gavin","text":"Fixed g"}` to the recorded address | PASS |
| Browser: blank name | "a villager" | "a villager" | PASS |
| Browser: confirmation wording | sent, not arrived | "has been sent…", five-minute lag, no arrival claim | PASS |
| **Fold measurement, three ways** | — | baseline 299px, one label 289px, split 542px | Split rejected on the measurement |
| Build plan validator | exit 0 | **exit 0 — 21 sub-tasks, 68/96 (70.8%)** | PASS |
| Human sentence ≤20 words | pass | 24 → **rejected by validator**, rewritten to 18 | PASS after fix |
| `node --check app.js` | pass | pass | PASS |
| "tradesman" in new text | 0 | 0 | PASS |
| Served page carries the change | byte-identical to commit | see End state | PASS |

**66 endpoint tests and 30 browser checks, all passing.** Both harnesses are committed and runnable: `apps-script/test-endpoint.js` and `scripts/test-panel-browser.js` (with `scripts/cdp.js`, a dependency-free DevTools client written for this project, since the site has no build step and no `node_modules`).

**What was not tested:**

- **NOTHING HAS RUN AGAINST THE REAL GOOGLE SHEET.** Every endpoint test is a stub. Whether Google accepts the redeploy, whether `appendRecommendation` behaves identically on the live sheet, and whether the words reach a real card are all unknown until the owner redeploys and places a vote. **That is exactly why rows 4.6 and 4.7 stay `new`.**
- **The owner's real Published tab was never written to**, by design — the browser harness intercepts the POST and the feed, and the diagnostic POSTs used a deliberately non-existent id (`__DIAGNOSTIC_NO_SUCH_ID__`) against a deployment that refuses everything anyway. **No row was added to any tab this session.**
- **The Apps Script Executions log was not read** — it is inside the owner's Google account. The diagnosis predicts what he will find (no entry at all, not a failed one) and that prediction is in the Owner block as a test rather than a conclusion. **If he finds a failed `doPost` entry instead, this diagnosis is wrong and must be reopened.**
- **The `hidden`-row refusal has never been exercised against a real hidden row**, only the stub's.
- **No rendered surface was checked by a human.** The panel's label is new text on a real page and the owner has not seen it.

**Commits:**
- `f8e34ff` — `feat: the recommend button feeds the village list, and the endpoint's failure is measured`
- `d1bb4e9` — `docs: the endpoint's new target, its new bound, and the launch message`
- `751a779` — `plan: row 4.7 appended — the recommendation reaches the village list by itself`

**Finished:** 2026-09-19T11:31:34Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 at 68 of 96 effort (70.8%), 15 of 21 rows**. **This session cleared no effort and closed no row**, which was the expected outcome: everything it built closes on the owner's sighting. The percentage fell from 73.9% because row 4.7 added 4 to the denominator — arithmetic, not regression.

**The site itself is unaffected and working.** The directory, the search, the Call button and the automatic publisher are untouched by this session. A villager can still find a tradesperson and ring them, and form submissions still publish themselves.

**The recommend button does not work, and will not until the owner redeploys.** The cause is measured and the fix is written and tested, but nothing in this repository can put a script behind that Google address. That is the first item in Layer 4 and the first step of the Owner block.

Both remotes level. Working tree clean.
