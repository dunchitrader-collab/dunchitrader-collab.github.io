---
project: dunchi-trader
repo: https://github.com/dunchitrader-collab/dunchitrader-collab.github.io
server: none — static hosting on GitHub Pages
environment: production
owner: dunchitrader@gmail.com
handover-format-version: 2
last-updated: 2026-09-18T17:31:02Z
status: active
---

# LAYER 1 — CURRENT TRUTH

**Last updated: 2026-09-18T17:31:02Z**

*If removing anything from this layer, it must first exist in the Decision Log with a dated entry explaining why it was removed. Moving content out of this file is treated the same as deleting it.*

### Project Status

ACTIVE — build started 2026-09-18. **The site now shows real tradespeople from the Published tab.** The design is live, the page reads the feed, search and the recommendation panel work, and the zoom/overflow behaviour is measured. Plan stands at ~~7 of 75 effort (9.3%)~~ ~~20 of 75 effort (26.7%)~~ ~~31 of 75 effort (41.3%)~~ ~~46 of 75 effort (61.3%), 9 of 14 rows done~~ SUPERSEDED 2026-09-18T17:26Z → **48 of 77 effort (62.3%)**, 10 of 15 rows done. The denominator moved because **row 4.4 was appended this session** (effort 2) as unplanned work — the three defects the previous session raised and left unfixed. Without it the position would read 46/75 (61.3%); the row both added 2 to the numerator and 2 to the denominator. Rows 2.1 and 3.3 closed on the owner's sighting; row 4.3 closed on measurement. **The votes endpoint is wired and served** — a villager's recommendation now leaves the page. Row 4.2 stays open by its own wording: it closes only when a vote placed **on a real phone** appends a row to the Votes tab. ~~**Nothing is live yet:** the live site still serves its original Jekyll page, because there is no push credential for the dunchitrader-collab account.~~ SUPERSEDED 2026-09-18T14:26:12Z → **THE SITE IS LIVE.** The placeholder page and the reviewed wireframe are served at `https://dunchitrader-collab.github.io`, verified byte-identical to the committed source at `f94d45a`. Build Plan row 1.2 is `done`; row 1.1 is complete but for Gavin's phone sighting.

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
| [URL] Votes endpoint — ~~not deployed; `VOTES_ENDPOINT` empty~~ SUPERSEDED 2026-09-18T17:04:41Z → `https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec` | The write interface. The Apps Script web app the page posts a recommendation to; it can only append to the Votes tab. Set in `app.js` line 30 at commit `4d67c15`. | [VERIFIED 2026-09-18T17:02:32Z] — driven from the live Pages origin in a real browser: `POST` returns **HTTP 302** with `access-control-allow-origin: *`, redirecting to `script.googleusercontent.com/macros/echo`, which the browser follows as `GET` and receives **HTTP 200**; round trip 2779.9 ms. The page itself sees only an **opaque** response (`type: opaque`, `status: 0`, `ok: false`, no readable headers) — see Layer 3 and solution design §6.2. **The DEPLOYMENT SETTINGS and the existence of the Votes tab with its four-column header are REPORTED BY THE OWNER, not measured here** — he deployed it under `dunchitrader@gmail.com` per `apps-script/DEPLOY.md` steps 1–3, executing as himself with access set to Anyone. |

### Repository Topology

Both repositories hold the **full source**. Neither is a build artefact and neither is a partial copy.

| Repo | Role |
|---|---|
| `dunchitrader-collab/dunchitrader-collab.github.io` | **The live and inheritable home.** GitHub Pages serves from it. |
| `gsamwell-lang/dunchi-trader` | The development working remote. |

**If the two diverge, the `dunchitrader-collab` repository is correct**, because it is the one that is inherited and the one that is served.

### Architecture Summary

Villager fills the Google Form → row lands on the **Form responses** tab (raw, messy, nobody sees it) → the owner reviews and copies approved rows across → **Published** tab (curated, the **only** thing the site reads) → published as a live CSV, auto-republishing with roughly a **five minute lag** → the static page on GitHub Pages fetches that CSV on load.

Votes travel the other way: the page posts to a Google Apps Script bound to the sheet, which appends a row to a **Votes** tab.

**The site can only READ the Published tab, so nothing a villager does can change a listing.**

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
| 2026-09-18 | HIGH | no | **Row 4.2 needs a vote FROM A REAL PHONE.** ~~The script and its numbered steps are committed. Follow [PATH] `apps-script/DEPLOY.md` while signed in as `dunchitrader@gmail.com`.~~ SUPERSEDED 2026-09-18T17:04:41Z → the owner has deployed it (REPORTED by him, not measured here) and the endpoint is now wired in `app.js` at `4d67c15` and **verified served live**. **DEPLOY.md step 4 is superseded** — the endpoint was set in this repository and pushed to both remotes, so the owner must NOT hand-edit `app.js` in the live repo. What remains is only the closing evidence: the owner opens the live site **on his phone**, taps a trade, taps "I recommend them too", fills both boxes, taps "Add my recommendation", then opens the Votes tab and sees the row. Closes on that. |
| 2026-09-18 | HIGH | no | **Delete the test row from the Votes tab.** Row 4.3's measurement deliberately submitted one real recommendation through the live site, so the Votes tab now carries a row that is not a villager's. It is labelled for deletion in both text columns. Column `id` is `T001`; column `name` is `TEST - Claude Code 2026-09-18 - please delete`; column `text` begins `TEST ROW - please delete - automated cross-origin measurement from Claude Code session 2026-09-18, build plan row 4.3.` Delete that one row. **Note the caveat:** because the cross-origin response is opaque, this session could not confirm from the browser that the row was actually appended — if the Votes tab has no such row, that is itself the finding, and it means row 4.2's append path is not working. |
| 2026-09-18 | MEDIUM | no | **Row 5.1 needs the formulas pasted.** Paste-ready in [PATH] `apps-script/SHEET-FORMULAS.md`. Closes when one sample row of each of the four verdicts shows correctly in the real sheet. |
| 2026-09-18 | MEDIUM | no | **Row 6.1 needs the runbook walked.** [PATH] `docs/RESTORE-dunchi-trader.md` is written; the walk needs the Form, Sheet, Apps Script and Pages under the two logins and is the owner's. |
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
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~Complete first build session — populate handover layers~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. |

### Next Action

~~The owner completes the seven operator actions in Layer 4, starting with the **CRITICAL** republishing of the CSV from the Published tab. Then Build Plan `PLAN-DUNCHI-TRADER-V1` step 1 can begin. Step 2 is **blocked** until the CSV serves the correct tab.~~ SUPERSEDED 2026-09-18T14:13:45Z →

~~**Two things are needed from the owner, and the first now blocks everything:**~~

~~1. **Supply a push credential for the `dunchitrader-collab` GitHub account** — a Personal Access Token with `repo` scope on `dunchitrader-collab/dunchitrader-collab.github.io`, or add an existing account as a collaborator with write access. **Until this exists nothing can reach the live site**, and because a change is only built when it is visible at the URL Gavin opens, no build plan row can be completed. Rows 1.1 and 1.2 are `blocked` on exactly this. The code for both is written and pushed to `origin` at `c1a4f78`; only the push to the live repo is missing.~~
~~2. **Republish the CSV from the Published tab** — still blocks Build Plan row 2.1.~~

~~Plus the remaining Google-side operator actions in Layer 4.~~ SUPERSEDED 2026-09-18T17:04:41Z — both are resolved. Push works via the `gsamwell-lang` classic token; the CSV serves the Published tab. →

~~**The build is at 46 of 75 effort (61.3%), 9 of 14 rows done. Nothing is blocked on code. Three things are needed from the owner, all Google-side:**~~ SUPERSEDED 2026-09-18T17:26Z →

**The build is at 48 of 77 effort (62.3%), 10 of 15 rows done. Nothing is blocked on code, and every remaining item is the owner's, inside Google.** In priority order:

1. **SEED THE LIST.** This is now the biggest single thing between the build and launch, and it is bigger than everything else combined. The live list carries 3 visible test people across 4 trades; launch needs **12–15 tradespeople across at least 6 trades**. It blocks row 7.1 and the second half of 7.2. **[PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` is the step-by-step guide**, written for him rather than for a developer.
2. **Place ONE vote from your phone, then look at the Votes tab.** The only thing standing between the project and row 4.2. Open the site on your phone, tap a trade, tap "I recommend them too", type a name and a sentence, tap "Add my recommendation" — then open the Sheet's **Votes** tab and confirm a new row appeared. The page will show its thank-you either way, because the cross-origin reply is unreadable by design and by measurement (Layer 3), so **the sheet is the only proof**.
3. **Delete the test row** the 4.3 measurement wrote into the Votes tab — identified in the Outstanding Items table above.
4. **The remaining Google-side operator actions in Layer 4** — the form's dropdown/"Other" control, email collection, the star-rating question, the missing trades, and the 5.1 sheet formulas.

**Do NOT post the launch message yet.** It is drafted in `docs/PROCESS-seeding-and-launch-dunchi-trader.md` §4 under a heading marking it a draft awaiting approval, and it must not go to the village group until step 7 has passed — otherwise the village is sent to a list of test people.

---

# LAYER 2 — ARCHITECTURE

~~None recorded yet.~~ SUPERSEDED 2026-09-18 → recorded below.

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
| `docs/RESTORE-dunchi-trader.md` | Full rebuild runbook | Not written — Build Plan row 6.1 |
| `docs/SOLUTION-DESIGN-dunchi-trader.md` | Architecture and rationale | [VERIFIED 2026-09-18] |
| `docs/BUILD-PLAN-dunchi-trader.md` | `PLAN-DUNCHI-TRADER-V1` | [VERIFIED 2026-09-18] |
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

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~Complete first build session — populate all handover layers with architecture, decisions, and session history.~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. See Layer 6 entry dated 2026-09-18T13:49:45Z.

### Operator Actions — the owner's to do inside Google

These sit inside Google and can only be done by the account owner. **They are deliberately not Build Plan sub-tasks.**

~~**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes**~~
~~**Republish the CSV from the Published tab.** Measured this session: the published CSV URL currently serves the raw Form responses tab, whose header is the form's question text, not the agreed `id, first_name, last_name, business, phone, trade, extra_trade, status`. Until this is corrected, the site would read unreviewed submissions and bypass the approval gate entirely. **This blocks Build Plan step 2.** Either republish from the correct tab and record the new URL here, or confirm the existing URL is repointed.~~ RESOLVED 2026-09-18T15:20:38Z — the owner republished from the Published tab (gid `1915382769`); `app.js` switched at `0267ef3` and verified live. Recorded here 2026-09-18T17:04:41Z; the Layer 1 row was closed at the time but this Layer 4 copy was missed.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Place one vote from your phone and confirm it reaches the Votes tab.** This is the sole remaining evidence for Build Plan row 4.2, and nothing in the code blocks it. Open `https://dunchitrader-collab.github.io` on your phone, tap a trade, tap "I recommend them too", type a name and a sentence of at least 15 characters, tap "Add my recommendation" — then open the Sheet's **Votes** tab and confirm a new row appeared. **The page will show its thank-you whether or not the write succeeded** (Layer 3 — the cross-origin reply is opaque and carries no information), so the sheet is the only proof. `apps-script/DEPLOY.md` **step 4 is superseded** — do NOT hand-edit `app.js` in the live repo; the endpoint is already set at `4d67c15` and served.

**[OUTSTANDING] 2026-09-18 | HIGH | Blocking: no**
**Delete the test row from the Votes tab.** Build Plan row 4.3's measurement deliberately submitted one real recommendation through the live site, so the Votes tab carries a row that is not a villager's. It is labelled for deletion in both text columns: `id` is `T001`, `name` is `TEST - Claude Code 2026-09-18 - please delete`, and `text` begins `TEST ROW - please delete - automated cross-origin measurement from Claude Code session 2026-09-18, build plan row 4.3.` **If no such row is present, that is itself a finding** — it would mean the append path is not working, and row 4.2 should not be closed.

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
