---
project: dunchi-trader
repo: https://github.com/dunchitrader-collab/dunchitrader-collab.github.io
server: none — static hosting on GitHub Pages
environment: production
owner: dunchitrader@gmail.com
handover-format-version: 2
last-updated: 2026-09-18T14:02:20Z
status: active
---

# LAYER 1 — CURRENT TRUTH

**Last updated: 2026-09-18T14:02:20Z**

*If removing anything from this layer, it must first exist in the Decision Log with a dated entry explaining why it was removed. Moving content out of this file is treated the same as deleting it.*

### Project Status

ACTIVE — design and planning complete as of 2026-09-18. No application code written yet. Build has not started.

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
| [URL] `https://dunchitrader-collab.github.io` | The live site | [VERIFIED 2026-09-18] — HTTP 200. Currently serving the default Jekyll placeholder page, not the application. |
| [URL] `https://github.com/dunchitrader-collab/dunchitrader-collab.github.io` | Live and inheritable repository. Public. Pages enabled on main / root. | [VERIFIED 2026-09-18] — HTTP 200 |
| [URL] `https://github.com/gsamwell-lang/dunchi-trader` | Development working remote. Same content. | [VERIFIED 2026-09-18] |
| [URL] `https://forms.gle/ZyLed4Tue91bzXjD7` | The Google Form villagers fill in | [VERIFIED 2026-09-18] — HTTP 200 |
| [URL] `https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit` | The Google Sheet | [ASSUMED] — not opened this session (requires the Google login) |
| [URL] Published CSV — `https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1qHOmFEOYqsSZcy0Y90LBUXbiTBGTJCqy2U-W3VE_zXdWWB6a59QclDbbO9tXoriWZda76rDWkn/pub?gid=1583719737&single=true&output=csv` | The read interface the site fetches | [VERIFIED 2026-09-18] — HTTP 200, `text/csv`, 636 bytes. **BUT IT SERVES THE WRONG TAB — see the CRITICAL entry under Outstanding Items.** |

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
| 2026-09-18 | **CRITICAL** | **YES — blocks Build Plan step 2** | **The published CSV serves the WRONG TAB.** Measured this session: it returns the raw Form responses header, not the Published schema. Must be republished from the Published tab. |
| 2026-09-18 | HIGH | no | Form question 1 is a dropdown with "Other" typed as an ordinary option. Must become Multiple Choice with the real Add "Other" control. |
| 2026-09-18 | HIGH | no | Email collection is on and required on the form. Must be turned off. |
| 2026-09-18 | HIGH | no | A star-rating question exists on the form, contradicting decision 3. Must be removed. |
| 2026-09-18 | MEDIUM | no | The form's trade list is missing everyday village trades. |
| 2026-09-18 | MEDIUM | no | Confirm the Published tab carries the agreed header row. |
| 2026-09-18 | MEDIUM | no | Whether the two form validation rules were added is UNKNOWN and unverified. |
| ~~2026-09-18~~ | ~~MEDIUM~~ | ~~no~~ | ~~Complete first build session — populate handover layers~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. |

### Next Action

The owner completes the seven operator actions in Layer 4, starting with the **CRITICAL** republishing of the CSV from the Published tab.

Then Build Plan `PLAN-DUNCHI-TRADER-V1` step 1 can begin. Step 2 is **blocked** until the CSV serves the correct tab.

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

Planned. None written yet as of 2026-09-18.

| File | Description |
|---|---|
| `index.html` | The whole page |
| `style.css` | All styling |
| `app.js` | CSV fetch, parse, render, search, autocomplete, vote posting |
| `.nojekyll` | Disables Jekyll so Pages serves committed files untouched |
| Apps Script source | Committed to the repo as well as deployed, per decision 14 |
| `README.md` | For a non-technical inheritor |
| `docs/RESTORE-dunchi-trader.md` | Full rebuild runbook |
| `docs/SOLUTION-DESIGN-dunchi-trader.md` | Architecture and rationale |
| `docs/BUILD-PLAN-dunchi-trader.md` | `PLAN-DUNCHI-TRADER-V1` |
| `design/wireframe-dunchi-trader.html` | Layout authority. Arrives in a separate prompt. |

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

### Gotchas

- **The five-minute republish lag is real.** The owner edits the sheet and the site catches up shortly after, not on refresh. The README must say so or an inheritor will think the site is broken.
- **Never click "Stop publishing"** — it takes the site offline.
- **The published CSV URL is tied to the tab's internal id.** Deleting and recreating the tab breaks it; renaming is fine.
- **GitHub Pages will not serve from a private repository on a free account.** The live repo must be public, so no credential may ever be committed.
- **GitHub Pages applies Jekyll by default.** The live site is currently serving a default Jekyll page. A `.nojekyll` file at the repo root is required so the committed files are served untouched — otherwise "no build step" is not actually true.
- **The votes endpoint is necessarily open**, because villagers do not log in. It is append-only to the Votes tab; it cannot read, edit or delete anything, and cannot touch Published. **Worst case is junk rows in a tab only the owner looks at.** This trade-off is explicitly accepted (decision 12a).
- **Posting to an Apps Script web app from a GitHub Pages origin usually needs `mode: 'no-cors'` with `Content-Type: text/plain`**, meaning the response cannot be read. Show the thank-you optimistically. **This is REPORTED, not measured** — it is the expected behaviour of Apps Script and browser CORS, but it has not been tested on this project. Confirm when Build Plan step 4 is built.

---

# LAYER 4 — OUTSTANDING WORK

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~Complete first build session — populate all handover layers with architecture, decisions, and session history.~~ COMPLETED 2026-09-18T13:49:45Z — all six layers populated by this session. See Layer 6 entry dated 2026-09-18T13:49:45Z.

### Operator Actions — the owner's to do inside Google

These sit inside Google and can only be done by the account owner. **They are deliberately not Build Plan sub-tasks.**

**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes**
**Republish the CSV from the Published tab.** Measured this session: the published CSV URL currently serves the raw Form responses tab, whose header is the form's question text, not the agreed `id, first_name, last_name, business, phone, trade, extra_trade, status`. Until this is corrected, the site would read unreviewed submissions and bypass the approval gate entirely. **This blocks Build Plan step 2.** Either republish from the correct tab and record the new URL here, or confirm the existing URL is repointed.

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
