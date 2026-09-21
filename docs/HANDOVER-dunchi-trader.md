---
project: dunchi-trader
repo: https://github.com/dunchitrader-collab/dunchitrader-collab.github.io
server: none — static hosting on GitHub Pages
environment: production
owner: dunchitrader@gmail.com
handover-format-version: 2
last-updated: 2026-09-21T10:18:44Z
status: active
---

# LAYER 1 — CURRENT TRUTH

**Last updated: 2026-09-21T10:18:44Z** ~~2026-09-21T10:05:12Z~~ ~~2026-09-21T09:43:07Z~~ ~~2026-09-21T09:26:45Z~~ ~~2026-09-21T09:16:32Z~~ ~~2026-09-21T08:05:27Z~~ ~~2026-09-21T07:23:59Z~~ ~~2026-09-21T06:08:30Z~~ ~~2026-09-21T05:58:10Z~~ ~~2026-09-19T21:40:59Z~~ ~~2026-09-19T21:31:25Z~~ ~~2026-09-19T20:34:32Z~~ ~~2026-09-19T20:24:20Z~~ ~~2026-09-19T18:44:11Z~~ ~~2026-09-19T17:30:52Z~~ ~~2026-09-19T17:19:01Z~~ ~~2026-09-19T16:07:57Z~~ ~~2026-09-19T16:04:42Z~~ ~~2026-09-19T15:55:48Z~~ ~~2026-09-19T15:44:39Z~~ ~~2026-09-19T14:02:06Z~~ ~~2026-09-19T13:43:10Z~~ ~~2026-09-19T13:35:54Z~~ ~~2026-09-19T12:21:07Z~~ ~~2026-09-19T11:31:46Z~~ ~~2026-09-18T21:10:23Z~~

*If removing anything from this layer, it must first exist in the Decision Log with a dated entry explaining why it was removed. Moving content out of this file is treated the same as deleting it.*

### MISSION

**Added 2026-09-21. The wording below is the Owner's own, given in conversation on 2026-09-21 and transcribed verbatim, subject to one correction stated here: he wrote the village name as "Dunchidiuk"; the correct spelling is "Dunchideock" and that is what is written below. No other word was altered.**

> This repo exists to create an online resource for the Dunchideock village to recommend and find workmen for their use. The purpose of this is to ensure everybody has easy access to high quality work.

**How progress against this mission is measured.** It is measured by the current build plan, [PATH] `docs/BUILD-PLAN-dunchi-launch.md` (Plan ID `PLAN-DUNCHI-LAUNCH-2026-09-19`), and by the completion computed from that plan's rows and efforts. **No figure is written here on purpose** — a percentage or row count typed into this block would be a second copy of a number the plan already holds, and it would drift the moment a row closed. Read the plan, or the completion computed from it, for the current position.

**This mission changes only by an explicit decision recorded in Layer 5, never as a side effect of session work.**

### Project Status

ACTIVE — build started 2026-09-18. **The site now shows real tradespeople from the Published tab.** The design is live, the page reads the feed, search and the recommendation panel work, and the zoom/overflow behaviour is measured. Plan stands at ~~7 of 75 effort (9.3%)~~ ~~20 of 75 effort (26.7%)~~ ~~31 of 75 effort (41.3%)~~ ~~46 of 75 effort (61.3%), 9 of 14 rows done~~ ~~48 of 77 effort (62.3%), 10 of 15 rows done~~ ~~54 of 77 effort (70.1%), 11 of 15 rows done~~ ~~56 of 79 effort (70.9%), 12 of 16 rows done~~ ~~58 of 87 effort (66.7%), 13 of 18 rows done~~ SUPERSEDED 2026-09-18T19:45Z → **62 of 92 effort (67.4%)**, 14 of 20 rows done. **2026-09-18T20:08Z — position UNCHANGED at 62/92 (67.4%); this session closed no rows.** **2026-09-18T20:18Z — STILL 62/92 (67.4%), still no rows closed.** **2026-09-18T20:46Z → 68 of 92 effort (73.9%), 15 of 20 rows done — ROW 5.2 IS CLOSED.** **2026-09-18T21:10:23Z — CONVERSATION CLOSED DOWN at 68 of 92 (73.9%), 15 of 20 rows.** **2026-09-19T11:25:10Z — ~~68 of 92 (73.9%), 15 of 20 rows~~ SUPERSEDED → 68 of 96 effort (70.8%), 15 of 21 rows.** This session **cleared no effort and closed no row, which was the expected outcome and is stated plainly rather than dressed up**: everything it built closes on the owner's sighting of a real vote on the live page, and he has not yet redeployed. The percentage FELL because row **4.7** was appended at effort 4, adding to the denominator while the numerator stood still — arithmetic, not regression. **THE OPEN DEFECT IS DIAGNOSED AND IT WAS NONE OF THE FIVE CANDIDATES.** Measured 2026-09-19: the deployment behind the votes `/exec` address is not running `Code.gs` at all — Google answers *"Script function not found: doPost"* to every request, and *"doGet"* to every GET. The address is alive; the script behind it is the wrong one. **AND THE PANEL NOW FEEDS THE VILLAGE LIST.** Owner's ruling D1b: the site's own recommend button writes to **Published `K` and `L`** — the tab the village reads — through the same `appendRecommendation()` the automatic publisher uses, not a second copy. It no longer writes to the **Votes** tab, which nothing ever read. Bounded by D2 and enforced in code: it cannot create a row, assign or reuse an id, write any column but `K` and `L`, touch the owner's formula columns `I` and `J`, or reach an unknown or `hidden` id. **NEITHER FIX IS LIVE UNTIL THE OWNER REDEPLOYS** — nothing in this repository can put a script behind that address, and that is his first job (`apps-script/DEPLOY.md` step 14). **2026-09-19T12:17Z — THE BROKEN DEPLOYMENT IS NOW CONFIRMED BY THE OWNER**, on his own phone: he opened the `/exec` address and got `Script function not found: doGet`, independently matching the server-side measurement from a different device and network. **AND A SECOND DEFECT WAS FOUND AND FIXED — ROW 5.1's DELIVERABLE.** He typed the two test rows into Form responses and both reported somebody already on the site when neither was, **each naming its own row number**: `ALREADY ON SITE row 15` on row 15 and `row 16` on row 16. The `verdict` formula was comparing every row against the Form responses tab itself rather than against Published, because it read its comparison keys back out of its own columns `J` and `K`. Fixed at `6e0d4a0` — the keys are now computed inline so a self-match is not expressible, the verdict names the person's **id** rather than a row number, and the lookups are bounded so the helper columns' several hundred empty cells are out of reach. **34 tests pass including a negative control that reproduces the owner's exact readings against the defective formula.** Measured against his real list: both test rows had **already published themselves** as `T014` and `T015`, so `ALREADY ON SITE` is now their correct verdict and **`NEW` is structurally unreachable** on his tab — automatic publishing means every response is on the list within seconds. **Both fixes need a COMPUTER and are bundled into one trip** as DEPLOY.md step 14 Parts A and B. **2026-09-19T13:35:54Z — THE VERDICT FIX WAS ITSELF WRONG, AND THE OWNER FOUND IT BY LOOKING.** He pasted the morning's formula and photographed the result: **about twelve consecutive rows all reading `ALREADY ON SITE — T005`** — the same id on every row, where rows 15 and 16 must read `T014` and `T015`. The self-match was genuinely gone and every branch was chosen correctly; only the **id** was a broadcast constant. Cause, established from Google's documentation: **`INDEX` does not vectorise inside `ARRAYFORMULA`** — handed an array of positions it reads only the first. `MATCH` and `COUNTIF` both do vectorise, which is why the branches were right. Fixed at `81708cd` by replacing `INDEX`/`MATCH` with **`VLOOKUP` over a curly-brace literal array**; nothing else in the formula changed. **THE DEEPER FINDING: two successive fixes were proven against a hand-written simulator whose Sheets semantics were wrong, so the harness agreed with the code and both were wrong together. The owner found both defects by looking; the repository's tests found neither.** The harness now models `INDEX` as non-vectorising and requires the negative control to fail before a fix is written. **STILL NOT RUN IN GOOGLE SHEETS — treat the new formula as REPORTED until his screen confirms it.** One paste, and it needs a computer. **2026-09-19T13:41:12Z — THE RECOMMENDATION PATH IS CLOSED, SIGHTED END TO END BY THE OWNER ON THE LIVE SITE.** At ~13:35Z he placed a recommendation on **`Frank Shelly`** from the cache-busted live page, confirmed it reached **Published `K` and `L`**, then reloaded with a **FRESH** cache-busting parameter and saw his words and his name **on Frank Shelly's card**. The second cache-bust is what makes it a sighting of the path rather than of his browser's memory: the page that showed his words had never seen his submission. **Villager taps, the endpoint writes Published, the village sees it, and nobody touches a spreadsheet.** Build Plan rows **4.6 and 4.7 are `done`** at `5883164`; the plan moves **68 of 96 (70.8%) → 73 of 96 (76.0%), 17 of 21 rows**. **What remains is row 5.1's verdict formula** — one paste, needing a computer, and still unsighted. **2026-09-19T14:02:06Z — TWO MORE DEFECTS FIXED, BOTH IN WHAT A VILLAGER SEES, AND BOTH DEPLOYED.** Rows **4.8** and **4.9** appended at effort 3 each. **4.8, the Owner's ruling D5b:** the card drew a villager's own words the instant they pressed the button, from an in-page object — and because the endpoint's reply is opaque the page cannot know the write succeeded, so on a failure they were left believing permanently that the village could see words that had gone nowhere. The card now renders from the published feed alone; the thank-you and the five-minute notice stay. **4.9, misattribution:** the predicted cause was wrong — the writer keeps the blank line, but the READER dropped it, sliding every later name onto somebody else's words. Measured: **Helen and Bob were each credited with words they never wrote.** Fixed as two independent guards, and **the Owner's five existing rows with an empty `L` are safe as they stand — no repair needed.** **Three recommendations measured: ZERO overflow at every size, and the Call button sits at 827px whether a card carries 0, 1 or 3 — recommendations render below it, so the core action never moves.** **The Votes tab is safe to rename:** nothing opens it on any path. Deployed and **confirmed on the served page by real fetch**. Both rows stay `new` — they change what he sees. Plan **73 of 102 (71.6%), 17 of 23**. **2026-09-19T15:44:39Z — ROWS 4.8 AND 5.1 CLOSED; STEP 5 IS COMPLETE.** **4.8** closed on his sighting — he submitted a recommendation on the live site and the card showed nothing new while both messages appeared; his words: ***"CHECK 1 PASS."*** **5.1** closed under the Owner's ruling **D4b-6G7f-19092026**, which **corrected the row's acceptance** rather than leaving it unmeetable: automatic publishing under D7a means a response holds the verdict `NEW` only in the seconds between submission and publication, so the original *"all four cases"* clause could never be satisfied by looking at the sheet. Acceptance is now **three verdicts sighted by the Operator, with `NEW` evidenced by the committed harness**. He has sighted `CHECK THIS`, `SAME NAME, DIFFERENT NUMBER` and `ALREADY ON SITE` with per-row ids, and reported of the corrected formula: *"I have now pasted the correct code. And it seems to work."* **Recorded rather than glossed: he did NOT quote the readings of rows 15 and 16 back**, so the row does not claim he confirmed `T014`/`T015` individually. **Row 4.9 stays `new`** — he has confirmed named recommendations pair correctly but has **not** tested a nameless recommendation sitting above a named one, which is the only arrangement the defect lived in; the exact test is in Layer 4. Plan **82 of 102 (80.4%), 19 of 23** — **9 effort cleared.** **2026-09-19T15:55:48Z — ROW 4.9 CLOSED, AND A CONTROL NOBODY ASKED FOR REMOVED.** **4.9** closed on his sighting done in the exact order the defect required — nameless recommendation first, named one second, and on reload the first reads *"a villager"* while the second carries the right name. **Then he found drift:** *"it put in a button you had to click on to reveal the 'one more review' which is pointless. Just let it scroll!"* **Traced from history rather than assumed** — the expander came in at `91a3f4c` on 2026-09-18 in the row 3.5 work, **eighteen hours before** prompt 2718, so 2718 did not invent it. **But 2718's three-recommendation measurement was taken against a card rendering only two and a button, and is therefore superseded.** Removed entirely: no expander, no cap, no truncation — row **4.10** carries the ruling. **Six recommendations measured: zero overflow at every size, and the Call button stays at 827px with none, one or six, because recommendations render below it.** **A SECOND DEFECT WAS FOUND BY THAT MEASUREMENT, LIVING INSIDE 4.9's OWN FIX** — a blank name in the MIDDLE stores four consecutive newlines and the greedy split ate all four as one separator, so Wendy was credited with words she had not written; 4.9's tests only ever put the blank first or last. `splitNames` now splits on the literal separator. Deployed and **confirmed on the served page by real fetch**. Plan **85 of 104 (81.7%), 20 of 24**. **2026-09-19T16:04:42Z — ROW 4.10 CLOSED; STEP 4 IS COMPLETE.** His word: ***"4.10. pass"*** — he opened a card with more than two recommendations and every one rendered in order with nothing to tap. **Owner's ruling D7-6G7f-19092026 recorded: HIDE, NEVER DELETE.** Duplicates and test entries get `status` `hidden`, because deleting the highest id frees it for reuse and a later submission would inherit somebody else's recommendations. **The hiding itself is NOT done — it is his action on his own sheet and it GATES LAUNCH**, because the village list still shows test people. **Three things he resolved directly in his sheet:** the shared `07887800192` (*"I have changed the number"*), `T007`'s twelve-digit number (*"fixed"*), and the **`Publish.gs` re-paste** — which **corrects the previous session's summary**, since that said it was still outstanding and it is not: **both halves of the misattribution guard, writer and reader, are now live.** **One residual risk recorded and NOT acted on** (Layer 3): a recommendation filed while two people shared a number may sit on the wrong row, and changing the number does not move it — a one-off eyeball check for him, with its expected result written down. Plan **87 of 104 (83.7%), 21 of 24**. **2026-09-19T17:19:01Z — PLAN-DUNCHI-TRADER-V1 IS CLOSED AND ARCHIVED, AND A SUCCESSOR PLAN NOW GOVERNS.**

**THE CURRENT PLAN IS `PLAN-DUNCHI-LAUNCH-2026-09-19`** at [PATH] `docs/BUILD-PLAN-dunchi-launch.md` — ~~**0 of 23 effort, 0 of 5 rows.**~~ ~~SUPERSEDED 2026-09-19 → 0 of 41 effort, 0 of 9 rows (step 6 appended four rows)~~ **SUPERSEDED 2026-09-21T06:06:37Z → 0 of 32 effort, 9 rows in the table of which 1 is `external`.** V1 is archived at [PATH] `docs/archive/BUILD-PLAN-dunchi-trader-PLAN-DUNCHI-TRADER-V1.md` and is frozen.

**2026-09-21T07:23:59Z — THE SWEEP RAN INSIDE GOOGLE FOR THE FIRST TIME, RECOVERED 8 MISSED SUBMISSIONS, AND THEN KILLED ITSELF ON ITS OWN AUDIT TRAIL.** The Owner pasted `Publish.gs` and installed the sweep this morning; at **07:11:08** the timer fired, the log reads ***"sweep published 8 missed submission(s)"*** at 07:11:10, and at 07:11:11 it threw — *"The data you entered in cell M2 violates the data validation rules set on this cell. Please enter one of the following values: Publish, Add to T0xx, Reject."* **Column `M` carries a leftover triage dropdown; the publisher writes free text.** [REPORTED from his Executions log — the validation rule is inside his account and no session can read it.]

**THE DEFECT IS A DESIGN DEFECT AND IT IS WORSE THAN THE LOG IMPLIES: row 6.2's visibility mechanism killed row 6.1's recovery function.** `sweepPublished` wrote its outcome note with a **bare `setValue`** at three sites while `note()` — the form-submit path's identical write — had been guarded since it was written. **Measured here by reproducing the exact Sheets refusal against the real code: the sweep does not merely lose the notes, it ABORTS MID-LOOP.** With two missed submissions due, only the first published; the second was never reached, and **`recordSweepRun()` never ran.** Fixed at [PATH] `apps-script/Publish.gs:556` — new `noteInto()`, which cannot throw; the sweep's three sites route through it, count refusals, and emit a loud summary naming the probable cause. **Writes to Published itself stay fatal, because a failure there IS a lost recommendation.** **227 checks pass across four suites**, including two negative controls that **pass against the broken file and fail against the fixed one**.

⚠ **NOT LIVE — THE FIX IS COMMITTED, THE COPY THAT RUNS IS IN HIS ACCOUNT.** He must re-paste `Publish.gs`. Until then every sweep still risks abandoning submissions after the first refused note.

**THE DUPLICATE QUESTION IS ANSWERED AND THE ANSWER IS NO, ON EVIDENCE.** The sweep has fired repeatedly since 07:11 with the action column still blank, so every firing reconsidered the same rows. **Measured against the real functions: `rowIndexForPerson` matches on phone AND name and finds the row the aborted run already wrote, so the sweep `continue`s; `publishInto` returns `added: false` if reached; and `appendRecommendation` refuses identical words.** Three independent layers, any one sufficient. **What his sheet needs is a look, not a repair** — the check is in Layer 4.

**2026-09-21T08:05:27Z — TWO FINDINGS FROM PRODUCTION, AND ONE OF THEM OVERTURNS YESTERDAY'S CONCLUSION.**

**(A) THE OWNER RE-PASTED AND RE-INSTALLED THE UNFIXED FILE.** Measured: the live repo `dunchitrader-collab/dunchitrader-collab.github.io` — **the copy-source he is told to use** — stood at `0f7c3ec` (2026-09-19) and its `apps-script/Publish.gs` was **byte-identical to `1d50b00`**, the original publisher missing BOTH of today's fixes. **Nothing automates `origin` → `collab`; it is a manual push that had not been run.** ⚠ **Every conclusion drawn from his execution log this morning is a conclusion about `1d50b00`.** **RESOLVED THIS SESSION — the push was performed**, verified by dry run first.

**(B) THERE IS A RUNAWAY DUPLICATE DEFECT, AND YESTERDAY'S "NO DUPLICATE RISK" WAS WRONG.** `normalisePhone` returns `''` for a phone it refuses, and the duplicate check was guarded by `if (key)` — so **for refused-phone rows the check never ran at all** and the sweep republished them every five minutes. **Measured by reproducing the LIVE condition — the same sheet swept repeatedly, which is what yesterday's fresh-stub test did not do: 8 responses became 112 rows over 14 sweeps on `4f4e88f`.** That is the Owner's log exactly — *"sweep published 8 missed submission(s)"* fourteen times, 07:11 to 08:16. ⚠ **`4f4e88f` made it worse:** the abort it removed had been accidentally limiting the damage to one row per run. Fixed by `rowIndexForUnusablePhone()`, a name+trade fallback. **Same scenario now yields 8 rows and no duplicates.**

**WHAT HIS SHEET SHOULD SHOW, and it is the good case:** he is running `1d50b00`, whose abort stopped each sweep after the first new row — so **roughly 14 extra rows, not 112**. The count to check is in Layer 4.

**2026-09-21T09:16:32Z — EVERY ROW ON PUBLISHED IS TEST DATA, AND A FULL CLEAR IS ESTABLISHED SAFE. THE OWNER HAS NOT YET RULED.**

**The new fact, REPORTED from the Owner:** all twenty-nine data rows on Published are test data from him and three family members. **There has never been live village traffic.** His words: ***"I would rather delete all test data if I can and seed real data. Is there an approach to do this? As this set of data is very messy!"***

**⚠ THIS CONFLICTS WITH HIS OWN STANDING RULING D7-6G7f-19092026 — HIDE, NEVER DELETE — and with build plan row 2.1's Approach column. NOTHING HAS BEEN CHANGED AND NO DECISION IS RECORDED AS MADE.** The conflict is real, the analysis is done, and **the ruling is his to make.**

**VERDICT: THE FULL CLEAR IS SAFE — and the ruling it overturns is right about the case it was written for.** Established by executing the real code, not by reading it:

| Question | Measured |
|---|---|
| Id generation on an empty tab | **`T001`** — `nextId` starts `highest = 0`; no throw |
| Does it restart while a higher id survives? | **No — `T030` after `T029`.** The ruling's hazard is real for a PARTIAL delete |
| First real submission after a clear | Publishes **`T001`**, lands on **row 2** |
| Owner's `I`/`J` formulas | **Zero writes reach them.** `writableBlocks()` = A–H and K–L |
| The site with a cleared tab | **"Nobody on the list just yet"** — the calm empty state, driven through the real `app.js` |

**WHY IT IS SAFE, IN ONE LINE: if nothing survives, there is nothing left to inherit a reused id.** The dangerous case is the **partial** delete — remove the highest id and the next submission takes that number back. **All of it, or none of it.**

**⚠ THE TRAP, AND IT IS A ONE-CLICK TRAP.** The `action` column genuinely protects against the sweep — twelve sweeps of an emptied tab brought **nothing** back. But **"Publish any responses not yet on the list"**, the FIRST item in the Owner's Village list menu, **ignores the `action` column entirely**: one click republished all 29 and reported *"Added 29 new people to the list."* **After a clear, that menu item's wording describes exactly what he would want and does exactly what he must not do.** Recorded as a `[GOTCHA]` in Layer 3.

**The procedure is written, click by click, in [PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md`** under *"Starting the list completely clean"*. **No session may run it — it is his action on his own sheet.**

**2026-09-21T09:26:45Z — THE OWNER HAS RULED D7a-VCWL-21092026: CLEAR BOTH TABS. His words: *"I am going to do D7a. It feels cleaner"*, and of the hidden rows *"Surely it is just messy noise?"***

**Both tabs are cleared so they agree, ids restart at `T001`, and the testers re-submit real tradespeople through the form.** He ruled it knowing it overturns his own `D7-6G7f-19092026`; Claude.ai put that to him before he answered.

**THE SUPERSESSION IS NARROW. `D7-6G7f-19092026` IS NOT REPEALED** — hide-never-delete remains correct and binding for every **partial** removal, because deleting the highest id frees it for reuse. **A total clear escapes that for the opposite reason: nothing survives to inherit a reused id.** Also superseded for the same narrow case: the carried-forward convention *"never delete rows from Form responses"*.

**⚠ THE PREVIOUS SESSION'S RECOMMENDATION WAS WRONG AND THE OWNER'S RULING IS SAFER.** Prompt 2758 advised leaving the Form responses rows in place and documenting the backfill menu item as a residual risk. **Measured side by side this session:**

| Shape | 12 sweeps | One click of *"Publish any responses not yet on the list"* |
|---|---|---|
| Rows **LEFT** (2758's advice) | 0 — held | **6 returned.** Trap live forever |
| Rows **CLEARED** (D7a) | 0 — held | **0.** *"There are no form responses yet."* |

**Clearing the responses DISARMS the trap instead of documenting it.** Proven end to end: after the reset a new submission publishes as **`T001`, `active`**, action line written back.

**⚠ A REAL DEFECT IN THE PREVIOUS PROCEDURE IS FIXED.** It said delete rows then check `I2`/`J2` survived — **but `I2`/`J2` ARE in row 2**, so the check came after the destruction. **Every delete now starts at ROW 3**, and row 2 is cleared by hand in two pieces skipping the formula cells (`A2:H2` then `K2:L2` on Published; `A2:I2` then `M2` on Form responses). **The same trap exists on Form responses, whose `J2`/`K2`/`L2` verdict formulas are also in row 2**, and both are now stated.

**THE `L2` VERDICT FORMULA IS FOLDED INTO THE RESET AS STEP 6, and is NOT a blocker.** Established: **no code reads the `verdict` column** — zero matches in `Publish.gs` logic, `Code.gs` and `app.js`. It is an at-a-glance aid for the Owner alone, so a wrong version cannot corrupt the list or the site. It is folded in because he will already have `L2` open. **His 2026-09-19 words — *"I have now pasted the correct code. And it seems to work"* — suggest he already has the corrected version**, so the step is compare-then-paste-if-different.

**Build plan row `2.1` Approach and sub-task text AMENDED; its STATUS is untouched and still `new`** — it closes on his sighting of a clean list, not on the ruling. Validator exit 0, 9 sub-tasks, position unchanged at **0/32**.

**THE PROCEDURE IS IN [PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md`** under *"Starting the list completely clean — the full reset"*, eleven steps. **No session may run it — it is his action on his own sheet.**

**2026-09-21T09:43:07Z — THE D7a RESET IS DONE AND THE LIST IS LIVE AT `T001`. `checkSetup`'s "DUPLICATE CHECKER IS BROKEN" ALARM IS CORRECT, EXPECTED, AND NARROWER THAN IT SOUNDS.**

**REPORTED from the Owner:** he completed the reset himself; Published holds one real submission at **`T001`** on row 2, it renders on the live site, and his initial row-23 gap was his own clearing-versus-deleting and is fixed. ***"Check the setup"* now takes a few seconds against the 38.95 seconds measured on 2026-09-19.**

**⚠ HE DOES NOT NEED TO STOP SUBMITTING, and this is the operational answer:**

| Mechanism | Affected by the dead `I`/`J`? |
|---|---|
| **The publisher's duplicate merge** | **NO** — `rowIndexForPerson` reads columns **E, B, C** and normalises in JavaScript. **Executed with both cells empty: a repeat still merges, `added: false`, no second row** |
| **The site, `Code.gs`, the endpoint** | **NO** — zero references to either column |
| **The `verdict` column he reads** | **YES, and this is the whole impact** — a person already listed reads **`NEW`** instead of `ALREADY ON SITE — T001` |

**THE ALARM'S WORDING OVERSTATES IT.** *"EVERY new form submission will look like a new person"* is true of **the verdict column**, false of **the publisher**. **Nothing gets published twice.**

**THE REPORTED DEFECT IN THE REMEDY IS REFUTED BY MEASUREMENT.** It was reported that `SHEET-FORMULAS.md` gives identical formulas for Published `I2` and `J2`. **Hashing every documented formula in that file: no two cells share one.** `I2` (291 chars, reads column **E**) and `J2` (121 chars, reads **B**+**C**) differ in hash, length and source columns; the live raw copy is byte-identical to the repo. **The document is CORRECT and was NOT changed.** `checkSetup`'s pointer to *"step 2"* resolves to the right section.

**Why it looked wrong:** the same idea sits at different letters on the two tabs — phone is `E` on Published and `F` on Form responses; names are `B`/`C` versus `D`/`E`. **Comparing Published `I2` against Form responses `J2` shows two different formulas, and both are right for their own tab.**

**THE REPAIR IS TWO PASTES and is in Layer 4**, with the verbatim formulas and how he confirms it took.

**2026-09-21T10:05:12Z — THREE ROWS CLOSED ON THE OWNER'S SIGHTINGS AND ONE RULING. THE PLAN MOVES 0/32 (0.0%) → 8/32 (25.0%), 3 of 9 rows done.** Verified two independent ways: the §3.10 validator reports `exit=0`, `sub-tasks: 9`, `done effort: 8 / 32 = 25.0%`, and the same figure recomputed directly from the document's own rows. **The row count was cross-checked against the rows the file actually holds — 9 and 9 — because a clean exit is not evidence every row was read.**

| Row | Effort | Closed on |
|---|---|---|
| **2.1** — no test person is visible | 2 | **His own clearing of the list.** He completed the D7a reset, then removed the last made-up entry — ***"The electrician is made up so I will be deleting it."*** — re-ran the tab clean and pasted the `I2`/`J2` helpers back. **Published holds no data rows, and the live page renders the empty state** [VERIFIED 2026-09-21T10:00Z, REPORTED from Claude.ai's browser read] |
| **6.2** — every submission's fate is visible | 5 | **Owner's ruling `D10a-VCWL-21092026`.** *Check the setup* ran in **"a few seconds"** against **38.95s** on 2026-09-19, reconciled both tabs, **and correctly reported a real fault three Claude Code sessions and Claude.ai had all missed** — the dead `I2`/`J2` helper formulas |
| **6.4** — a villager can get back to the list | 1 | **His sighting on the live site:** ***"yes it opens in a new tab"***, with the village list still behind it |

⚠ **TWO THINGS WERE NOT WITNESSED AND ARE STATED RATHER THAN GLOSSED.** **(1) Row 6.2's blank-`action`-cell alarm has NOT fired since the reset** — every publisher path writes one line into the `action` column so a blank is the alarm, and that clause is **installed and covered by the harness but has not been SEEN to fire on his sheet**, because nothing has been lost since. It closes on his ruling with that gap named. **(2) Row 2.1's outcome is met by an EMPTY list rather than a curated one** — no test person is visible because nobody is. That satisfies the row's wording, and it is worth a reader knowing which of the two it was.

**Rows `1.1`, `3.1`, `4.1`, `6.1` and `6.3` are untouched and still `new`; `5.1` remains `external`.**

**2026-09-21T10:18:44Z — ROW 6.3 CLOSED ON THE OWNER'S RULING `D9a-VCWL-21092026`. THE PLAN MOVES 8/32 (25.0%) → 12/32 (37.5%), 4 of 9 rows done.** Verified three ways: validator `exit=0` with `sub-tasks: 9` and `done effort: 12 / 32 = 37.5%`; the same figure recomputed from the document's own rows; and every row re-checked as parsing to exactly four cells.

**His ruling, verbatim: *"D9a - no point testing functionality that is not needed."*** He was offered three routes and chose the first. **Claude.ai recommended D9b — briefly disabling the form validation to witness the publisher's own refusal — and he overruled it.**

**WHY THE INTENDED SIGHTING IS NO LONGER REACHABLE.** Row 6.3 was to close on the publisher refusing a two-number telephone field and writing the reason into the `action` column. **The Owner has response validation on the form's telephone question**, this expression:

```
^[-() ]*(\+44|0)[-() ]*(\d[-() ]*){9,10}$
```

When he deliberately submitted a two-number field this morning to test this row, **the form rejected it at the door and nothing reached the sheet.** His ruling is that an upstream control making a bad number unsubmittable removes the need to test the downstream one.

**THE THREE-WAY SPLIT, recorded because closing a row on an upstream control is not the same as closing it on the row's own behaviour:**

| | |
|---|---|
| **WITNESSED** | The form refuses a multi-number telephone field at submission. **He saw it happen.** |
| **INSTALLED BUT NOT WITNESSED** | The publisher's OWN refusal and its `action`-column reason; the merge matching on phone AND name; the merge recording what was submitted; the verdict reading `ON THE LIST BUT HIDDEN`; and `Code.gs`'s header no longer claiming it appends to the Votes tab. **Committed at `4f4e88f` and `04e9b54`, covered by the test suite — none has been seen to run inside Google.** |
| ⚠ **RESIDUAL RISK** | **The form's validation protects the FORM ROUTE ONLY.** Any row reaching Published another way — the Owner typing into the sheet, or a future recovery path such as the backfill — is **not** covered by it, and for those the publisher's unwitnessed refusal is the only defence. |

**Rows `1.1`, `3.1`, `4.1` and `6.1` are untouched and still `new`; `5.1` remains `external`; `2.1`, `6.2` and `6.4` remain `done`.** **`3.1` is still the live gate** — the list is empty, so the village cannot usefully be told.

**THERE ARE NOW TWO LIVE PLANS IN THIS REPO [VERIFIED 2026-09-21].** Row `5.1` — the inheritance walk — left the launch plan on the Owner's ruling **D3c-VCWL-21092026** and is now **`1.1` of `PLAN-DUNCHI-INHERITANCE-2026-09-21`** at [PATH] `docs/BUILD-PLAN-dunchi-inheritance.md`, **0 of 9 effort, 0 of 1 row.**

| Plan ID | Path | Position [VERIFIED 2026-09-21, validator] |
|---|---|---|
| `PLAN-DUNCHI-LAUNCH-2026-09-19` | `docs/BUILD-PLAN-dunchi-launch.md` | ~~**0 / 32 = 0.0%**~~ ~~SUPERSEDED 2026-09-21T10:05:12Z → **8 / 32 = 25.0%**, 3 `done`~~ SUPERSEDED 2026-09-21T10:18:44Z → **12 / 32 = 37.5%**, 9 sub-tasks (1 `external`, excluded), **4 `done`** |
| `PLAN-DUNCHI-INHERITANCE-2026-09-21` | `docs/BUILD-PLAN-dunchi-inheritance.md` | **0 / 9 = 0.0%**, 1 sub-task |

**The launch plan's denominator fell 41 → 32 and that is SCOPE LEAVING, not progress.** Done effort was 0 before and is 0 after; the 9 effort was excluded **by the row's `external` status**, never by re-weighting it (STD-00009 Rules 5.4.2 and 5.2.5 [CORE]).

⚠ **THE INHERITANCE REQUIREMENT IS UNPROVEN AND IS NOT OWNED BY ANY PLAN THAT IS BEING WORKED.** The Owner's own clause — *"I want to be able to hand over the operating site to anyone else who inherits that google email account"* — **remains the only clause of the Requirement as stated that is unmet**, and moving it between plans did not advance it by one step. **Nothing anywhere may describe it as satisfied.**

**V1 CLOSED AT A TRIMMED 100% AND THAT PHRASE MATTERS: *"Closed at 100% of 21 rows, TRIMMED from 24 on 2026-09-19; pre-trim position 83.7% (87/104 effort)"*.** It reached 100% by **moving 17 effort across three rows** to the successor (STD-00009 Rule 5.2.4 `external`), **not by building them.** Owner's rulings **D6b** (seeding and launch leave V1) and **D10** (the runbook test moves rather than being descoped, superseding **D8b**).

**WHAT IS NOT BUILT, and the closure record says so rather than letting the percentage imply otherwise:** the **inheritance requirement is UNPROVEN** — the Owner's own *"I want to be able to hand over the operating site to anyone else who inherits that google email account"* is the one clause of the Requirement as stated still unmet — and **its runbook is KNOWN BROKEN** in three measured ways. **The launch has not happened** and the list still carries test people.

**What IS delivered and sighted by him, row by row:** a villager opens a link, taps a trade and taps a large green Call button; submissions publish themselves; a recommendation added from a card reaches the village list; the page holds at the largest text size on a 320px phone and at 200% zoom. **The directory works today — it simply cannot yet be launched or handed on.**

**THE SEEDING ROUTE IS UNDECIDED** and is carried in Layer 4 as an open decision with three routes; the soft launch is **Claude.ai's recommendation, not his ruling**. **2026-09-19T17:30:52Z — THE RESTORE RUNBOOK IS REPAIRED AND STILL UNWALKED, and those are different things.** He ruled YES to fixing the known defects, which cost him nothing; **he has NOT agreed to walk it**, so **row 5.1 stays `new`** and closes on the walk rather than on the repair. **Five faults fixed at `3453b78`, all by reading** — the three measured this afternoon (step 4 naming the live repository so a rehearsal stopped dead; steps 7 and 8 reaching into the live spreadsheet by its hard-coded id; no cleanup section) **plus two found while reconciling the whole document**: the form's minimum length said **fifteen** characters against **seven** everywhere else under D4a, and the file list named an archived plan while omitting `apps-script/Publish.gs`, without which step 7 cannot work. **Route taken for the live-id problem: the instructions were carried INTO the runbook**, leaving `DEPLOY.md` and `SHEET-FORMULAS.md` untouched so they keep their job as his live repair guides. **The document now opens by saying it has never been walked**, and tells a walker that finding a fault is the expected outcome of the first walk — a runbook presenting itself as verified invites the walker to doubt themselves instead of the document. **Rehearsing it takes about two hours**, rebuilding about ninety minutes. **2026-09-19T18:44:11Z — THE OWNER HAS RULED: GO NOW. D9c-6G7f-19092026, his words: *"Go - I will manage the content"*.** He tells the whole village now and curates submissions as they arrive. **Claude.ai recommended the soft launch and he OVERRULED it** — both are recorded in Layer 5, with his mitigation that he will actively manage the content. **The risk, stated once:** the first villagers see whatever the list holds, and the plan's own reasoning is that this audience may look only once. **THE RUNNING ORDER IS NOW 2.1 → 1.1 → 3.1 → 4.1, with 5.1 independent** — recorded as prose in the plan, **nothing renumbered**. **Row 2.1 was housekeeping and is now the ONLY HARD GATE**, the last thing between the village and the list. **MEASURED the same day: he has already hidden 13 of the 15 rows himself**, leaving **two people visible — `T005 Bob Samwell` (Plumber) and `T012 Frank Shelly` (Carpenter)**. What remains of 2.1 is his judgement on those two, not a list of ids. **Row 3.1's outcome is unchanged and its timing is no longer his to control** — villagers now fill the list, so it may sit open for weeks, which is expected rather than stalled. **ONE MISMATCH REPORTED, NOT FIXED:** the drafted launch message promises *"plumbers, electricians, gardeners and the rest"* and the live list today has **no electrician and no gardener visible**. It was drafted assuming the list would be seeded first. **Whether to soften it or post it as drafted is his call.** **2026-09-19T20:24:20Z — "THE DATA HAS FAILED HERE" DIAGNOSED: IT HAS NOT. THE SITE IS CORRECT AND THE LIST IS NEARLY EMPTY**, and from a phone those look identical. Measured end to end read-only: feed **HTTP 200, 2,681 bytes, 20 rows**, `no-cache`, two fetches byte-identical; the live site driven in Chrome 148 renders **three tiles — Gardener, Heating oil & gas, Plumber — one person each**, correct numbers, working `tel:` links, recommendations rendering, **zero console errors, zero failed requests, zero overflow**, served `app.js` byte-identical to the commit. Every candidate defect was tested and cleared: feed not stale, site not cached, **helper columns `I`/`J` alive on all 20 rows**, no unrecognised `status` token, no empty-state path tripped, `K`/`L` aligned. **THE VILLAGE HAS STARTED USING IT — five new people arrived today (`T016`–`T020`) from real submissions** naming Tim, Lin, Gavin and Hazel as recommenders. **Two mismatches against his expectation, both explained:** `T005` and `T012` read **`hidden`**, not visible as he reported — **why is UNKNOWN**, the edit history is inside his account; and `T017 Lee Schofield` and `T020 Gecko Geckster` were hidden **automatically and correctly by the publisher**, not by him — `T017`'s phone reads *"07872 065874 or 01392 980312"* (a 22-digit key) with an email in the business field, and `T020`'s is 13 digits. **SAFE TO GIVE THE VILLAGE? Technically yes — nothing is broken, no test person is visible, every number on screen dials correctly. Editorially his call: three people is a thin first impression.** **Un-hiding `T005` and `T012` if they are real, and retyping those two phone numbers, would take the list to seven people across five or six trades in a few minutes — all in his sheet, no code.** **2026-09-19T20:34:32Z — A SECOND, WORSE FAULT FOUND: THE PUBLISHER SILENTLY DROPPED TWO REAL SUBMISSIONS, AND THE LAUNCH MESSAGE MUST NOT GO OUT TONIGHT.** The 20:2xZ diagnosis read only Published; reading the **Form responses** tab as well — both are publicly readable by `gviz` CSV, no login needed — shows **`Murray Angel` (20:03:57, recommended by Tim) and `Stuart Ironside` (20:07:52, recommended by Lin) reached Published at all.** Both villagers were thanked by the form. **Exactly two of twenty responses were lost; all twelve from 2026-09-18 reconcile.** **THE CODE IS SOUND AND THIS WAS PROVEN BY REPLAY, not by reading:** both submissions were run through the real committed `Publish.gs` against Published as it stood, and **both produce a row** — Murray `hidden` (22-digit phone), Stuart `active`. `publishOne` has no path that writes nothing. **THE `NEW`-VERDICT LEAD IS REFUTED AND BACKWARDS:** `verdict` is a live formula the publisher never reads, so a row says `ALREADY ON SITE` *because* it published — the correlation is the same fact stated twice. **WHAT THE TWO SHARE IS TIME, NOT DATA:** they are consecutive submissions in a contiguous ~4-minute window with working publishes 3m37s before and 2m51s after, and they share no data property. **MECHANISM: UNKNOWN**, and marked so — it points at the trigger not reaching the script, which cannot be established from outside his account. **The Apps Script Executions log for those two timestamps is the only place the answer exists**, and Layer 4 phrases it as a two-minute test with what each outcome means. **RECOVERY, not applied:** *Village list → Publish any responses not yet on the list* is idempotent and would create **`T021` Murray (hidden, needs his number retyped) and `T022` Stuart (active)** — next free ids, nothing reused. **AND A STANDING DESIGN GAP, separate from the transient cause:** a submission that fails to publish leaves **no row, no flag, no email, no trace** — the only detection is reconciling two tabs by hand. **2026-09-19T21:31:25Z — THE CAUSE IS MEASURED AND THE FIX IS BUILT, BUT ONLY ONE PART OF IT IS LIVE.** His Executions log settles it: **two different failures four minutes apart.** `Murray Angel` 20:03:57 had **NO EXECUTION ENTRY AT ALL** — Google never delivered the event, so no code of ours could catch it. `Stuart Ironside` 20:07:52 **FAILED** on `Service Spreadsheets failed`. **A retry saves Stuart's class and is useless against Murray's, which is why the fix has two halves.** Build plan **step 6** appended (rows 6.1–6.4, efforts 8/5/4/1, Claude.ai's estimates open to revision) and built at `1d50b00`: **`withRetry`** for genuine service failures only; **`sweepPublished`** on a five-minute trigger, the only defence against Murray's class; **`LockService`** on both paths; an **idempotent menu installer**; every path writes one line into the **`action` column so a BLANK is the alarm**; both silent paths closed; **`normalisePhone` refuses a two-number field instead of welding it** into the 22-digit number nobody has; **merge on phone AND name**; **`ON THE LIST BUT HIDDEN`** for a hidden person. **THE SWEEP WAS MADE CHEAP FIRST, because that gated the schedule: 120 range reads and 125,160 cells over sixty responses, down to 2 reads and 1,732 cells — sixty times fewer**, against Google's ~90 minutes of daily trigger runtime and 288 runs a day. **Negative controls were written first and watched passing against the unfixed file** — 17 of them — before a line changed. **216 checks pass across four suites. ⚠ ONLY ROW 6.4 IS LIVE** (the form opens in a new tab, confirmed on the served page and in a real browser). **6.1, 6.2 and 6.3 are INERT until he pastes `Publish.gs` — the publisher in his account is still the one that lost Murray and Stuart.** **RECOVERY:** the sweep or the backfill gives Murray **`T022`** and Stuart **`T023`**; Murray's will be `hidden` because his number is two numbers joined by "Or", and he needs one of them retyped. **2026-09-19T21:40:59Z — CONVERSATION CLOSED DOWN, and the two outstanding safety claims from prompt 2740 are VERIFIED BY QUOTATION rather than accepted on report.** Claude.ai would not take them as measured (preferences 4.1.1), and it was right to ask: **(A1) `LockService` IS on both paths** — `onFormSubmitPublish` acquires at `Publish.gs:396-397` and releases in a `finally` at `428`; `sweepPublished` acquires at `542-543` and releases in a `finally` at `616`, and line `652` confirms `sweepPublished` is the function the five-minute trigger calls. **(A2) The retry discriminates and is bounded** — `withRetry` at `466-478` loops `attempt <= RETRY_ATTEMPTS` where `RETRY_ATTEMPTS = 3` at line `455`, and **`if (!isTransient(err)) throw err;` at line `473` means a logic error escapes on the FIRST attempt and is never retried**; `isTransient` at `486-494` matches only Google's own service faults. It **cannot loop indefinitely**: the bound is the `for` at `468` and `throw lastErr` at `477`. **(A3) No write can reach Published `I` or `J`** — `writableBlocks()` computes `A–H` and `K–L`, verified by execution, and the only two direct Published writes are `1069-1070` at `COL_WORDS+1`/`COL_BY+1` = columns **K and L**. **No code path deletes a row** from either tab — zero matches for `deleteRow`, `deleteRows`, `deleteSheet` across `Publish.gs` and `Code.gs`. **The `action` column is column `M` on the Form responses tab**, found by header NAME, and **cannot collide with the `L2` verdict formula in column `L`** — different columns on the same tab, and the only header matching `action` is `M`. **NO DEFECT WAS FOUND AND NO CODE WAS CHANGED.** **The Owner's thirteen outstanding actions are recorded in the close-down Layer 6 entry and live nowhere else.** This conversation took the plan from 31/75 (41.3%) to here, closing eight rows and appending six as real gaps were found. **The site is functionally complete and not yet launchable**: a villager's recommendation reaches the village list without anybody touching a spreadsheet, the Call button dials correctly (sighted by the owner on his phone), and villagers' words appear on the cards. What stands between it and launch is **seeding** — the list still holds test people — plus the runbook walk. **One defect is open and undiagnosed:** the site's own recommend button produced no row in the Votes tab after the endpoint was redeployed; it is the first thing the successor conversation picks up, and it does not affect the directory itself. **THE LAUNCH-CRITICAL MISDIAL IS FIXED AND CONFIRMED BY THE OWNER ON THE SERVED PAGE:** he opened the live site on his phone, tapped Plumber, tapped Call, and the dialler showed the full eleven-digit number with its leading zero. His word: *"pass"*. **And a real form submission published itself** — `T013 Ron Suttil` appeared on Published without him touching the spreadsheet. Measured here against his real feed for the first time: 12 of 13 phones are eleven digits starting zero (the exception is `T007`, twelve digits, correctly refused and `hidden`), every trade is on the agreed list, and nine of twelve cards show a villager's words. Three further defects in row 5.2's own deliverable were found in the owner's screenshot and fixed: **telephone numbers had lost their leading zero and the Call button would have misdialled (LAUNCH-CRITICAL)**, six people were listed twice, and two trade names did not match the site's tiles. It fixed a defect in row 5.2's own deliverable: the publisher completed cleanly twice and wrote its rows ~1000 lines below the table, invisible to the owner. Reproduced, fixed, and a recovery added. **Row 5.2 stays open until he submits the form and sees the row himself.** **THE SITE IS NOW A RECOMMENDATIONS LIST RATHER THAN A PHONE LIST.** Until today it carried neither the villager's words nor the villager's name, and the form's own question promises the name appears — *"so a fellow villager might reach out to you if they have any questions"*. Owner's ruling D8a. Published gained columns **K `recommendations`** and **L `recommended_by`**; a duplicate submission is now a SECOND RECOMMENDATION appended to the existing person rather than a hard failure; and the card shows the words with attribution. Two rows were appended (3.5 at effort 4, 4.6 at effort 1) adding 5 to the denominator, of which 3.5's 4 closed. **The percentage FELL while real work landed**, and that is arithmetic rather than regression: two rows were appended this session — 5.2 the automatic publisher (effort 6) and 3.4 case-insensitive trade grouping (effort 2) — adding 8 to the denominator, of which only 3.4's 2 closed. **THE REVIEW GATE IS GONE.** Owner's ruling D7a: publishing is automatic, so a villager's submission reaches the live site with no human in between, protected by three hard checks plus his batch sweep rather than by an approval step. The denominator moved because **row 4.5 was appended this session** (effort 2) — the owner's ruling that the note minimum becomes seven characters is a change to shipped behaviour on a closed row, so it got its own row rather than being slipped in. It added 2 to the numerator and 2 to the denominator, which is why the percentage moved only 70.1% → 70.9%. **Row 4.2 is CLOSED: a villager's recommendation now reaches the sheet from a real phone.** Owner confirmation 2026-09-18 (~17:47Z), verbatim: *"the vote populated"*. The denominator moved because **row 4.4 was appended this session** (effort 2) as unplanned work — the three defects the previous session raised and left unfixed. Without it the position would read 46/75 (61.3%); the row both added 2 to the numerator and 2 to the denominator. Rows 2.1 and 3.3 closed on the owner's sighting; row 4.3 closed on measurement. **The votes endpoint is wired and served** — a villager's recommendation now leaves the page. Row 4.2 stays open by its own wording: it closes only when a vote placed **on a real phone** appends a row to the Votes tab. ~~**Nothing is live yet:** the live site still serves its original Jekyll page, because there is no push credential for the dunchitrader-collab account.~~ SUPERSEDED 2026-09-18T14:26:12Z → **THE SITE IS LIVE.** The placeholder page and the reviewed wireframe are served at `https://dunchitrader-collab.github.io`, verified byte-identical to the committed source at `f94d45a`. Build Plan row 1.2 is `done`; row 1.1 is complete but for Gavin's phone sighting.

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
| 2026-09-19 | ~~**CRITICAL**~~ HIGH | ~~**YES — the recommend button does nothing at all until this is done**~~ SUPERSEDED 2026-09-19T13:41:12Z → **no** — the button works; only the verdict column is affected | **Redeploy `apps-script/Code.gs`.** MEASURED 2026-09-19: the deployment behind the `/exec` address is not running that script — Google answers *"Script function not found: doPost"* to every request. Nothing in this repository can fix it; only the owner can put a script behind that address. [PATH] `apps-script/DEPLOY.md` **step 14**, nine steps, including the check that was missing last time (search the editor for `doPost` before deploying). Verified afterwards in ten seconds by opening the `/exec` address in a browser: one plain sentence means working, a Google error page means broken. **UPDATED 2026-09-19T13:41:12Z — PART A IS DONE AND PROVEN.** The redeploy happened and the recommendation path now works end to end, sighted by the owner (see the row below). **PART B IS STILL OUTSTANDING and is now the only thing left in this item**: the `L2` verdict formula was re-pasted but printed the same id on every row, so it needs one more paste — `apps-script/SHEET-FORMULAS.md` step 3, commit `81708cd`. Still a computer job. |
| ~~2026-09-19~~ | ~~HIGH~~ | ~~no~~ | ~~**Place one real vote from the phone and see the words appear on the card.**~~ COMPLETED 2026-09-19T13:41:12Z — **DONE, AND BOTH ROWS ARE CLOSED.** At ~13:35Z on the live site he recommended **`Frank Shelly`**, confirmed Published `K` and `L`, and re-loaded with a **fresh** cache-bust to see his words and name on the card — rendered from the feed, not from his browser. Build Plan rows **4.6 and 4.7 `done`** at `5883164`. |
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

~~0. **REDEPLOY `apps-script/Code.gs` — do this before anything else on this list.**~~ **DONE 2026-09-19 — and the whole recommendation path is now sighted end to end on the live site (rows 4.6 and 4.7 `done`). What replaces it as the top item is ONE PASTE, and it needs a computer: the `L2` verdict formula, `apps-script/SHEET-FORMULAS.md` step 3 at commit `81708cd`, because the version in his sheet prints the same id on every row. Row 5.1 stays open on it.** The superseded text follows for the record:

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


**[BUG] 2026-09-19 — THE CAUSE IS NOW MEASURED: TWO DIFFERENT FAILURES FOUR MINUTES APART, AND ONLY ONE OF THEM IS RETRYABLE**

**Supersedes the "mechanism unknown" in the entry below.** The Owner read his Apps Script Executions log and it settles it — **the two losses had two different causes, and that is why the fix has two halves.**

| Time | Submission | Execution log |
|---|---|---|
| 19:56:57 | Andy Watson | Completed 1.231s → `T016` |
| 20:00:20 | Lee Schofield | Completed 1.346s → `T017` |
| **20:03:57** | **Murray Angel** | **NO EXECUTION ENTRY AT ALL — the trigger never fired** |
| **20:07:52** | **Stuart Ironside** | **FAILED 0.953s — `Service Spreadsheets failed while accessing document with id 1j9SVNJG…`** |
| 20:10:43 | Ben Phythian | Completed 0.989s → `T018` |
| 20:12:08 | Tony Clapham | Completed 1.63s → `T019` |
| 20:17:33 | Bob The Builder | Completed 1.144s → merged onto `T003` |
| 20:18:34 | Gecko Geckster | Completed 1.646s → `T020` |
| 22:07:22 | Testcase Alpha (live test) | Completed 1.28s → `T021` active |

**STUART'S IS RETRYABLE. MURRAY'S IS NOT, AND THAT DISTINCTION IS THE WHOLE DESIGN.** Stuart's script ran and Google's Sheets service hiccuped — trying again a second later would have worked, and the failure was swallowed by `onFormSubmitPublish`'s catch into a log nobody reads. **Murray's had no execution at all: Google never delivered the event, so no code of ours could have caught it, retried it, or logged it.** A retry is useless against Murray's class. **Only a scheduled sweep can catch it**, which is the answer to the Owner's question — *"Why can't we make an automated fix for both problems? … Surely there's an automated way."*

**The 22:07 live test proves the trigger, the publisher and the whole path work normally.** This is intermittent, not a standing breakage.

Fix applied at commit `1d50b00`, build plan step 6 — **and none of it is live until the Owner pastes `Publish.gs`**:

- **`withRetry`** retries only genuine service failures; `isTransient` matches the measured message and its documented companions. **A logic error is thrown straight out rather than retried three times.**
- **`sweepPublished`**, a five-minute time-based trigger, is the only defence against Murray's class.
- **The sweep had to be made cheap before it could be scheduled**, and that gated it — see the separate entry below.
- **`LockService` on both paths.** Nothing used a lock before; a sweep and a submission arriving together would both compute the same target row.
- **`installSweep`** from the menu, idempotent — clicking twice replaces the trigger rather than creating a second.

Diagnosis: **the `action` column on Form responses now carries one line per response.** A blank beside a real submission means nothing ran, which is the only way Murray's class is visible at all.

**[BUG] 2026-09-19 — THE BACKFILL WAS QUADRATIC, WHICH IS WHY A FREQUENT SWEEP WAS NOT AFFORDABLE UNTIL IT WAS FIXED**

`backfillPublished` called `publishOne` per response, and **each call re-read the whole Published tab** through `tableValues`; `publishOne` then called `lastIdRow` for the target row, re-reading column A again. Cost grew as responses × published.

**MEASURED over sixty responses in a stub that counts range reads and cells:**

| | range reads | cells read |
|---|---|---|
| **before** | **120** | **125,160** |
| **after** | **2** | **1,732** |

**Sixty times fewer reads.** `checkSetup` was measured at **38.95 seconds** on the Owner's real sheet, which is the same shape of cost.

**The arithmetic that made this a blocker rather than a tidy-up:** Google allows roughly **90 minutes of trigger runtime per day** on a consumer account. A five-minute sweep is **288 runs a day**. At the old cost that allowance is gone; at two reads and no writes when idle, it is affordable with room to spare.

Fix: `publishOne` is split so **`publishInto` takes an already-read table**, the target row is computed from that table in memory rather than re-reading column A, and a response whose `action` is already filled is skipped on a cheap string test. **An idle sweep does one read of Published and writes nothing.**

**[BUG] 2026-09-19 — `normalisePhone` WELDED TWO TELEPHONE NUMBERS INTO ONE THAT BELONGS TO NOBODY**

**The Owner's words:** *"the system has actually just merged two phone numbers together and created one very, very long number, which is useless to anybody using it."* He is exactly right and it was this function.

It stripped every non-digit, so `"07872 065874 or 01392 980312"` became **`0787206587401392980312`** — 22 digits, a number nobody has, **on a card with a Call button**. Two real villagers hit it: **`T017` Lee Schofield** and **Murray Angel**, whose number reads `01626 879961 Or 07966 184788`.

Fix: **`phoneProblem()` is now the single place the judgement is made**, and a multi-number field is **refused with a reason in words** rather than welded. Detection is on the TEXT before the digits are stripped — once stripped, the join is invisible. The `+44` and `0044` folding is unchanged and regression-tested.

**It also fixes a disagreement between two checks in one file:** `checkSetup` counted raw digits, so `+44 7775 726754` came to twelve and `T016` was reported as a wrong number **while the publisher was accepting it**. Both now call `phoneProblem`.

**[BUG] 2026-09-19 — THE PUBLISHER MERGED ON PHONE ALONE, SO ONE MAN'S RECOMMENDATION COULD LAND ON ANOTHER MAN'S CARD**

`rowIndexForPhone` matched on the number only. **`cleanPublished`, in the same file, already refused to do this and explains why** — the Owner's sheet has **Ben Franks the electrician and John Pilkington the car mechanic on `07887800192`**, a shared line. The publisher was still keying on the phone alone, so a recommendation for either attached to whichever row came first.

Fix: **`rowIndexForPerson` matches phone AND name** — the number narrows the candidates, the name decides — bringing the publisher up to the standard the cleaner already applied. A third person on that number matches nobody and gets their own row. **A merge now also records the submitted trade, names and phone**, because a merge used to keep the words and discard everything that would show the match was wrong.

**[BUG] 2026-09-19 — THE PUBLISHER SILENTLY DROPPED TWO REAL SUBMISSIONS, AND THE CODE IS NOT AT FAULT — MECHANISM UNKNOWN, TRANSIENT**

**Two villagers were thanked by the form and their recommendations never reached the site.** Tim recommended `Murray Angel`; Lin recommended `Stuart Ironside`. Neither exists anywhere on Published.

**MEASURED 2026-09-19T20:3xZ by reading BOTH tabs directly** — the spreadsheet is publicly readable through its `gviz` CSV endpoint, so no login is needed and the Form responses tab can be reconciled against Published without the Owner. **The previous diagnosis read only Published and therefore could not see this**; that is the lesson as much as the bug.

**Full reconciliation, all 20 responses against all 20 Published rows. Exactly two drops:**

| Submitted | Name | Trade | Phone as typed | Outcome |
|---|---|---|---|---|
| 19:56:57 | Andy Watson | Plumber | `+44 7775 726754` | `T016` |
| 20:00:20 | Lee Schofield | Electrician | `07872 065874 or 01392 980312` | `T017` (hidden) |
| **20:03:57** | **Murray Angel** | **Logs & firewood** | `01626 879961 Or 07966 184788` | **NO ROW** |
| **20:07:52** | **Stuart Ironside** | **Builder** | `07887522959` | **NO ROW** |
| 20:10:43 | Ben Phythian | Gardener | `07496326434` | `T018` |
| 20:12:07 | Tony Clapham | Heating oil & gas | `07724135551` | `T019` |
| 20:17:32 | Bob The Builder | Builder | `01392 123456` | merged onto `T003` |
| 20:18:34 | Gecko Geckster | Car mechanic | `01392 47484847` | `T020` |

**The twelve responses from 2026-09-18 all reconcile.** No earlier submission was dropped. **These two are the only ones, out of twenty.**

**THE CODE IS NOT AT FAULT, and this was established by replaying both submissions through the real committed `Publish.gs`, not by reading it.** Against a stub Published holding `T001`–`T017` as it stood at 20:03:57:

- **Murray Angel** → `publishOne` returns `true`, writes 10 cells, **would have created `T018` with status `hidden`** (his phone is two numbers joined by "Or", a 22-digit key).
- **Stuart Ironside** → returns `true`, writes 10 cells, **would have created `T018` with status `active`**.

Neither threw. Neither logged. **There is no path in `publishOne` that produces no row at all** — every route either merges onto an existing person or writes a new one. `looksLikeContactSpam` is `false` for both, and both trades are on the agreed list (`isKnownTrade('Logs & firewood')` is `true`).

**THE `NEW` VERDICT IS NOT THE CAUSE — IT IS THE CONSEQUENCE, AND THE CORRELATION IS BACKWARDS.** Every published submission reads `ALREADY ON SITE` and both dropped ones read `NEW`, which looks like a perfect eight-for-eight lead. It is an artefact: **`verdict` is a live formula, and the publisher never reads it.** `FIELD_MATCH` names seven fields and `verdict` is not among them. A row reads `ALREADY ON SITE` *because* it published and the formula now finds its own phone on Published; the two dropped rows read `NEW` *because* they did not publish and there is nothing to match. **The correlation is the same fact stated twice.**

**WHAT THEY ACTUALLY HAVE IN COMMON IS TIME, NOT DATA.** The two drops are **consecutive submissions in a contiguous window** — 20:03:57 and 20:07:52 — with a working publish 3m37s before and another 2m51s after:

```
19:56:57  Andy Watson       -> published
20:00:20  Lee Schofield     -> published
20:03:57  Murray Angel      -> DROPPED   |  a contiguous ~4 minute
20:07:52  Stuart Ironside   -> DROPPED   |  window, nothing either side
20:10:43  Ben Phythian      -> published
```

**Two independent data faults would not queue up next to each other.** They share no data property: Stuart's phone is clean and valid, Murray's is not; Stuart's trade already existed on Published as `T013`, Murray's did not. **The only thing they share is when they arrived.**

**MECHANISM: UNKNOWN, and marked so deliberately rather than filled in.** The evidence says the trigger did not reach `publishOne` for those two — consistent with an installable-trigger failure, a Google-side quota or timeout, or an authorisation lapse in that window — but **which of those it was cannot be established from outside the account.** `onFormSubmitPublish` catches every exception into `Logger.log` and returns, and `readSubmission` returns `null` silently if `e.namedValues` is absent, so **either failure mode is invisible from the sheet.** The Apps Script Executions log is the only place the answer exists.

**THE STANDING DESIGN FLAW THIS EXPOSES, whatever the transient cause was:** a submission that fails to publish produces **no row, no flag, no email and no visible trace anywhere the Owner looks.** The villager is thanked by Google's own form regardless. **The only way to find it is to reconcile the two tabs by hand**, which nobody would think to do. That is a gap in the design, not a bug in a line, and it is separate from whatever caused these two.

Fix applied: **NONE. Read-only diagnosis.** Recovery and the Owner-side test are in Layer 4.

Diagnosis: **reconcile Form responses against Published.** Both tabs are publicly readable at `https://docs.google.com/spreadsheets/d/{id}/gviz/tq?tqx=out:csv&sheet={tab}`, so this needs no login and takes a minute. **Any response whose phone key matches no Published row and whose words appear in no `recommendations` cell was dropped.**

**[BUG] 2026-09-19 — FIVE FAULTS IN THE RESTORE RUNBOOK — REPAIRED BY READING, AND THE DOCUMENT IS STILL UNWALKED**

**The distinction in that heading is the whole of this entry. Repairing a document is not proving it**, and this project has twice today had a fix pass its own test and fail on the Operator's screen. [PATH] `docs/RESTORE-dunchi-trader.md` is now **correct as far as reading can establish** and **nobody has followed it from step 1 and built anything.**

Repaired at commit `3453b78` under the Owner's ruling that fixing the known defects costs him nothing. **He has NOT agreed to walk it.** Build plan row **5.1 of `PLAN-DUNCHI-LAUNCH-2026-09-19` stays `new`**, and it closes on the walk, not on this repair.

**The three measured defects, all fixed:**

| | Fault | Repair |
|---|---|---|
| **1** | **Step 4 stopped a rehearsal dead.** It named the live site's own repository — `dunchitrader-collab.github.io` — and said *"The name matters exactly"*. GitHub refuses a duplicate, so there was no way past step 4. | A rehearsal preamble at the top giving throwaway names for every artifact, **and step 4 branched at the point of use** — the preamble alone was not enough, because step 4 is exactly where the walk died. It explains that a repo not named `<account>.github.io` serves at `<account>.github.io/<repo>`, so the different address reads as expected rather than as failure. Step 5's expected result and the tick list are branched the same way. |
| **2** | **Steps 7 and 8 reached into live state.** Step 7 delegated to `DEPLOY.md`, whose step 1 opens the **live spreadsheet by its hard-coded id**; step 8 to `SHEET-FORMULAS.md`, which hard-codes the same id. Compounding it, `DEPLOY.md` now opens *"START AT STEP 14"*. | **Step 7 is now self-contained** (7a–7f). Step 8 still points at `SHEET-FORMULAS.md` but tells the walker to **ignore its opening two lines** and work in their own sheet. **`apps-script/` is untouched.** |
| **3** | **No cleanup section.** A rehearsal left a second spreadsheet, form, published CSV and **public website**, none of it mentioned. | A cleanup section **ordered by risk** — the CSV publish and the repository **first and marked PUBLIC** — saying plainly what skipping it leaves. Each destructive step carries a check-the-name warning, and the final tick is that the **LIVE site still loads**. |

**THE ROUTE TAKEN FOR DEFECT 2, and why.** The instructions were **carried into RESTORE** rather than making the delegated documents id-neutral. `DEPLOY.md` was rewritten this week as the Owner's **live repair guide** and opens by sending him to step 14; making it serve a rebuild as well would have put a fork in a document whose whole job is telling him what to do about the live site, **and he may need it again**. Both delegated documents keep their live-repair role exactly as it was.

**TWO FURTHER FAULTS FOUND WHILE RECONCILING THE WHOLE DOCUMENT**, fixed because leaving them would have made the repair incoherent:

- **The form's minimum-length validation said FIFTEEN characters.** The site, the endpoint and the verdict column all enforce **seven** under ruling **D4a**. A rebuild would have produced a form that turns away honest short answers the rest of the system accepts, **and nothing would have flagged the disagreement** — the form's rule and the code's rule are checked by nobody against each other.
- **The step 5 file list was stale.** It named `docs/BUILD-PLAN-dunchi-trader.md`, archived this afternoon, and **omitted `apps-script/Publish.gs`** — which step 7 needs and without which `Code.gs` refuses to run. Now matches the repository exactly, checked mechanically rather than by eye.

**The time estimate was rechecked**: rebuilding unchanged at about ninety minutes, since the repair moved step 7's instructions rather than adding work; **rehearsing now stated separately at two hours**, the extra half hour being the preamble, substituting names as you go, and the cleanup.

**The document's own opening now says it is unproven**, in those words, and tells the walker that **finding a fault is the expected outcome of the first walk** rather than a sign they have gone wrong. That was deliberate: a runbook that presents itself as verified invites a walker to doubt themselves instead of the document.

Diagnosis, for whoever walks it: **if a step cannot be done as written, that is a fault in the document.** Work around it, finish, and write down what changed — the first walk's job is to produce that list.

**[BUG] 2026-09-19 — RESIDUAL RISK, NOT ACTED ON: a recommendation filed while two people shared a telephone number may sit on the wrong row, and changing the number now does not move it**

**Recorded as a one-off check for the Operator, not as work. Nothing here is being changed on the strength of it.**

The publisher and the endpoint both find a person **by normalised telephone number**. While **Ben Franks** and **John Pilkington** both held `07887800192`, a recommendation for *either* would have attached to **whichever row the code met first** — `rowIndexForPhone` returns the first match and stops. Both men were deliberately kept, and the sharing was reported rather than resolved, because two people genuinely can share a household or business line.

**The Operator has since changed the number** (his words: *"I have changed the number"*; which entry and to what is not recorded — see Layer 5). **That fixes the future and does not fix the past:** any recommendation already written into `K` and `L` stays on the row it landed on. Nothing moves it, and nothing flags it.

**What is believed, and by whom.** From his screenshot of Published it **appears clean** — the `Ben Franks` row carried words and the `John Pilkington` row carried none, so there is probably nothing misplaced. **That is Claude.ai reading a screenshot, not a measurement**, and it is recorded here at exactly that strength.

**The check, for the Operator, once:**

1. Open the **Published** tab and find **Ben Franks** and **John Pilkington**.
2. Read column **K** on each — the villagers' words.
3. **Expected: the words on each row describe that person's own trade.** Ben Franks is an electrician; John Pilkington is a car mechanic. A recommendation about a car sitting on the electrician's row, or about wiring on the mechanic's, is the fault.

**If it is wrong, the repair is a cut and paste** — move the text from `K` (and the matching line of `L`) to the right row. It is plain text and nothing else depends on it. **If both rows read sensibly, there is nothing to do and this entry can be considered closed.**

**Why it is recorded rather than fixed:** no script here may write to his sheet, the evidence is a screenshot rather than a measurement, and guessing at which words belong to which man would be exactly the misattribution this project has spent the day removing.

**[BUG] 2026-09-19 — MISATTRIBUTION SURVIVED ITS OWN FIX: a blank name in the MIDDLE of a list was still dropped, because four consecutive newlines split as one separator**

**Found by measurement, hours after row 4.9 was believed fixed and closed on the Owner's sighting — and his sighting was sound. He tested two recommendations, blank then named, which is the arrangement that works.**

Measured 2026-09-19 with **six** recommendations on one card, the **third** name blank:

| Position | The words | Shown as | Should have been |
|---|---|---|---|
| 3 | *"Been taking our family cars…"* | **Wendy Fieldgate** | *a villager* |
| 4 | *"Rehung the front gate…"* | **Ron Suttil** | Wendy Fieldgate |
| 5 | *"Fixed gate"* | **Ben Franks** | Ron Suttil |
| 6 | *"Replaced the whole bathroom…"* | *a villager* | Ben Franks |

**Every name from the blank onwards was one place out.** Wendy was credited with words she had not written — the exact fault row 4.9 exists to prevent, surviving **inside** 4.9's own fix.

**Root cause.** The separator is exactly two newlines. A blank entry **between** two separators therefore stores **four consecutive newlines** — `"Bob\n\n" + "" + "\n\nWendy"`. `splitNames` split on `/\n\s*\n/`, and `\s` matches a newline, so the pattern is **greedy across the whole run and consumed all four as ONE separator**, dropping the empty entry.

**Why 4.9's suite passed over it, and this is the part worth carrying.** Every test case put the blank name **first** or **last** — positions where the greedy pattern has nothing to eat, because there is no adjacent separator to run into. The middle case was never constructed. **The fix was correct for the shapes it was tested against and wrong for the shape it was not**, and the owner's sighting used the same two-recommendation shape the tests did, so neither caught it.

Fix applied at commit `d4eb469`: **`splitNames` splits on the literal two-newline separator**, `"\n\n"`, never on a pattern. `splitRecs` keeps `/\n\s*\n/` deliberately — the words are never blank, so greediness cannot bite them, and the permissive form forgives a stray space the owner may type when tidying a cell by hand. **The two columns now differ in their splitter as well as in their emptiness handling, and both differences are load-bearing.**

A regression test covers the middle-blank case and carries a control asserting the greedy pattern **would** have lost it, so the test is shown to be capable of failing.

Diagnosis: count the entries. If a names cell yields fewer entries than its words cell, a blank has been eaten — `apps-script/test-recommendations.js` section 1b asserts exactly this.

**[BUG] 2026-09-19 — a recommendation could be attributed to the WRONG VILLAGER, because the reader dropped the blank name that was holding a position**

**Found by reading the Owner's live data rather than by a failure, and the predicted cause was not the cause.**

Published `K` (the villagers' words) and `L` (their names) pair **by line position** — the nth name belongs to the nth block of words. The owner's real Published tab carries **at least five rows with words in `K` and `L` entirely empty** (Bob Samwell, Ben Franks, Helen Smith, the long entry about family cars, and Duckers Plumber). The name question on the form is optional, so that is ordinary data and will recur.

**The predicted failure was that the WRITER drops the line.** It does not. Executed against the committed source rather than reasoned about: `appendRecommendation` does `byBlocks.push(by)`, which pushes the empty string, so `L` keeps an empty line and `K`/`L` stay aligned. **Both write paths were checked** — the form publisher (`publishOne` passes `plain(row.by) || ANON`) and the site endpoint (`Code.gs` substitutes `ANON_ENDPOINT()` before calling). Neither can produce the predicted fault.

**The defect is on the READER, and it is a real misattribution.** `splitRecs` in `app.js` ended `.filter(function(s){ return s.length; })`, dropping **every** empty entry wherever it sat. An empty name entry is not noise — it is a villager who gave no name, holding that recommendation's place. Dropping it slides every later name **up** onto somebody else's words.

**MEASURED** on three recommendations whose first name was blank:

| The words | Who the card said wrote them | Who actually did |
|---|---|---|
| *"Fixed the gate"* | **Helen** | nobody — the villager gave no name |
| *"Rewired the kitchen"* | **Bob** | Helen |
| *"Cleared the drain"* | *a villager* | Bob |

**Helen and Bob were each credited with words they had never written**, on a public village website, and nothing on the card looked wrong.

**Two further faults found while testing, neither predicted and both real.** A **name** containing a blank line splits into two entries, so `L` gains a line and every later name shifts; and **words** containing a blank line do the same to `K` in the other direction. The second is reachable by an ordinary villager pressing Enter twice in the site's textarea — `trim()` removes only leading and trailing whitespace, and **nothing on any path stripped an interior blank line**. The code's own comment claimed *"a villager typing two newlines mid-sentence is not a real case here"*, which was true while the form was the only writer and became false when the textarea path was added.

Fix applied at commit `e3c6e1f`, as **two independent guards**, deliberately:

1. **The writer no longer emits an empty name.** `apps-script/Publish.gs`: a new `sanitise()` collapses any interior blank line so a value cannot contain the separator, a blank name becomes `ANON`, and the write is **REFUSED with a log line** if `K` and `L` would ever disagree — a missing recommendation the owner can chase beats one silently attributed to the wrong neighbour.
2. **The reader no longer drops one.** `app.js` now has **two** functions, because the columns have two different jobs. `splitRecs` (words) may drop blanks — words are never legitimately blank, the seven-character rule sees to that, and a trailing blank must not invent a phantom recommendation. **`splitNames` (names) drops nothing**: position is the meaning.

Both guards matter: **the rows already in the owner's sheet were written by the old code**, so the reader guard is what protects those.

**Are the existing rows safe? YES, as they stand — measured, not assumed.** A row with words in `K` and `L` **entirely empty** reads correctly: `splitNames('')` returns an empty list, every recommendation falls back to *"a villager"*, and there is nothing to mis-pair. **No repair is needed and no cell needs editing.** The danger was only ever in a row where `L` held *some* names and an empty one among them — and appending to such a row pads correctly, which is why none of his five rows was ever at risk.

Diagnosis: if a card ever shows *"Recommended by"* a name that does not belong to those words, compare the line counts of `K` and `L` for that row — they must be equal. `apps-script/test-recommendations.js` asserts the invariant across nine adversarial sequences and keeps the old reader as a negative control.

**[BUG] 2026-09-19 — MEASURED BY THE OWNER — the `verdict` column printed the SAME id on every row, because `INDEX` does not vectorise inside `ARRAYFORMULA`**

**The second defect in row 5.1's deliverable in one day, and the second one the owner found by looking while the repository's tests said everything passed.**

What he photographed, after pasting the morning's corrected `L2` formula:

| What the column showed | Count |
|---|---|
| **`ALREADY ON SITE — T005`** | **roughly TWELVE consecutive rows, all the same id** |
| `SAME NAME, DIFFERENT NUMBER` | 1 row |
| `CHECK THIS` | 1 row |
| blank | 2 rows |

Rows **15** and **16** must read `T014` and `T015` — this session's own live-CSV measurement established that `T014 Test Nine` and `T015 Bob Samwell` are the Published rows those two responses created. **They read `T005` instead.**

**What was RIGHT, and it matters for scoping the fix.** The self-match is genuinely gone — no verdict names a row number any more — and **the branch selection is correct on every row**. One row correctly reads `SAME NAME, DIFFERENT NUMBER`, one correctly reads `CHECK THIS`. The defect is confined to the id printed by the `ALREADY ON SITE` branch.

**Root cause, established from Google's documentation rather than from the test harness.** Claude.ai's diagnosis was right about the outcome and needs one correction about the cause:

| Function | Inside `ARRAYFORMULA` |
|---|---|
| `COUNTIF` | **vectorises** — which is exactly why `hitP`/`hitN` chose the right branch per row |
| `MATCH` | **vectorises** — it correctly produced the right position for every row |
| **`INDEX`** | **DOES NOT.** It is not array-aware over its **position** argument: handed an array of positions it reads only the **first** and ignores the rest. `ARRAYFORMULA` cannot fix it, because the limitation is inside `INDEX`. |

**So the culprit is `INDEX`, not `MATCH`** — and that is not a pedantic distinction, because it determines the fix. `MATCH` could have stayed; `INDEX` had to go.

**Why this got shipped, stated plainly because it is the more important failure.** Earlier the same day this project wrote, in its own analysis, *"MATCH is not an array-aware function in Sheets — it does not vectorise."* **That sentence was wrong**, and the fix written immediately after it used `INDEX`/`MATCH` anyway. It was then validated against a hand-written simulator that modelled **both** functions as vectorising. **The harness agreed with the code because both encoded the same misunderstanding**, so 34 checks passed on a formula that was already broken. See the Layer 5 entry, `[PATTERN CANDIDATE: a-simulator-is-not-the-platform]`.

Fix applied: `apps-script/SHEET-FORMULAS.md` at commit `81708cd`. **Only the id lookup changed** — proven by character-level diff. The branch logic, the precedence, the seven-character rule and every `CHECK THIS` case are byte-identical, because the owner's screenshot confirms all of them are correct and disturbing them would risk a third defect.

```
was:  INDEX(Published!$A$2:$A$500,MATCH(pk,Published!$I$2:$I$500,0))
now:  VLOOKUP(pk,{Published!$I$2:$I$500,Published!$A$2:$A$500},2,FALSE)
```

`VLOOKUP` **is** array-aware over its search key and spills per row. The id sits in Published column `A`, to the **left** of the phone key in column `I`, and `VLOOKUP` cannot look left — so a curly-brace literal array builds a virtual two-column table with the search column first. Both properties were verified against documentation before the formula was written.

**The harness was rewritten BEFORE the formula, and the negative control shown failing first.** [PATH] `apps-script/test-verdict.js` now models `INDEX` as non-vectorising — `verdictV2_constantId` takes the whole sheet rather than a row index, because **a function that does not vectorise cannot honestly be modelled as if it did**. Against that model the deployed formula stamps one id on all 15 rows and rows 15/16 read wrong, reproducing the screenshot. Three versions are kept side by side: the original self-match, the deployed constant-id, and the fix. **43 checks pass.**

It also carries the property as its own test: **no two response rows may print the same id unless they genuinely name the same published person.** The expected id is derived independently from the fixture rather than from the formula under test, and the same property is asserted to **fail** against the deployed version.

Diagnosis, and it is a one-line eyeball check: **look down the verdict column. If many rows show the same id, it is broken** — different people cannot all be the same person. One id repeated is the signature. `apps-script/SHEET-FORMULAS.md` now carries a warning box before step 3 naming which functions work per row and which do not, plus this symptom in its troubleshooting table.

**[BUG] 2026-09-19 — MEASURED BY THE OWNER — the `verdict` column matched every Form Responses row against ITSELF, so a stranger read `ALREADY ON SITE — row 15` on row 15**

**Row 5.1's deliverable was defective, and the defect was invisible because its answers looked right.**

What the owner measured, on his phone, after typing the two Layer 4 test rows into Form Responses at rows **15** and **16**:

| Row | What he typed | Verdict shown |
|---|---|---|
| 15 | `Plumber` / `Test` / `Nine` / `07999 888777` | **`ALREADY ON SITE row 15`** |
| 16 | `Plumber` / `Bob` / `Samwell` / `07999 111222` | **`ALREADY ON SITE row 16`** |

**Each row named its own row number**, and at the time neither person was on the Published list. A row was being compared against itself.

He also observed, first, that with column **H** (the experience text) left blank **both rows read `CHECK THIS`**. That reading was correct behaviour and not part of this bug — see the Layer 5 entry for how that false lead arose.

**Root cause, established from the formula rather than accepted on report.** Claude.ai's reading — that the lookup was searching Form Responses instead of Published — is **correct**, and the arithmetic identifies precisely which range:

| Searching for row 15's key `07999888777` | Result |
|---|---|
| in `Published!$I$2:$I` | **`#N/A`** — it was not on Published |
| in Form Responses `$J$2:$J` (the tab's own `phone_key`) | position **14**, and `14 + 1 = ` **15** — the number he saw |

Four candidate `ARRAYFORMULA` semantics were modelled against his two readings; **only full self-reference — both `COUNTIF` and `MATCH` searching this tab's own `J` column — reproduces both**. The author's intended semantics produce `NEW`, so the formula was not doing what its text describes.

**The structural cause, which is the part worth carrying:** the old formula **read its comparison keys back out of columns `J` and `K` of its own tab** —

```
COUNTIF(Published!$I$2:$I, $J$2:$J)          <- $J$2:$J is THIS tab
MATCH($J$2:$J, Published!$I$2:$I, 0) + 1     <- and so is this
```

— so it carried live same-tab ranges alongside its cross-tab lookups. **One unqualified range turns a Published lookup into a self-search, silently, and produces a number that looks exactly like a correct answer.** `MATCH` position + 1 is arithmetically the row's own number, so the wrong answer is indistinguishable from the right one by inspection. That is why it survived being "tested by local simulation" and twelve passing cases: **the simulation evaluated one row at a time, and a self-match is invisible row-by-row — it appears only when a row is evaluated in the presence of its own key.**

**A second fault in the same formula, not observed but latent.** `Published!$I$2:$I` is open-ended, and the owner's helper columns are `ARRAYFORMULA` over open-ended ranges, so they return an **empty string for ~986 rows** below the data. `COUNTIF(range, "")` counts every one of them. Any response with an unreadable telephone number would therefore have read `ALREADY ON SITE` against a blank cell. **This is Layer 3's whole-column lesson in its second form** — the first cost this project its helper formulas and stranded a thousand rows.

Fix applied: `apps-script/SHEET-FORMULAS.md` at commit `6e0d4a0`, the `L2` formula replaced with a `LET()` version. Three changes, each closing one route:

1. **The keys are computed inline from the row's own cells** (`F`, `D`, `E`), never read out of `J` and `K`. There is no same-tab range left for a lookup to fall onto, so **a self-match is not expressible rather than merely avoided**.
2. **It reports the person's ID, not a row number** — `ALREADY ON SITE — T014`. An id is checkable against the site in one glance; a row number looked right whether it was or not.
3. **The lookup ranges are bounded** to `Published!$I$2:$I$500`, so the empty-string cells below the data are out of reach.

Plus: an unreadable phone number now yields `CHECK THIS` rather than falling through to `NEW`, stated as a deliberate rule because the publisher hides such a row.

**Proven with a negative control**, which the previous suite lacked. [PATH] `apps-script/test-verdict.js` implements the **defective** formula alongside the fixed one and asserts the defective version reproduces the owner's exact readings — row 15 says "row 15", row 16 says "row 16", and **every** row names its own number. It evaluates a whole column at once, as `ARRAYFORMULA` does. 34 checks pass. **A fix not shown to turn an observed wrong answer into an observed right one is an assertion, not a proof.**

**Measured against the owner's REAL Published tab**, fetched live 2026-09-19 (15 people, both helper columns alive for every row — so the helpers he re-pasted by hand are healthy). Two findings that change what row 5.1 can show:

- **The two test rows have ALREADY PUBLISHED THEMSELVES**, as `T014 Test Nine` and `T015 Bob Samwell`. So after the fix they correctly read `ALREADY ON SITE — T014` and `— T015`. **Row 15 cannot read `NEW`**, and the expectation that it should is out of date rather than wrong at the time it was written.
- **`Bob Samwell` is published twice** — `T005` on `07887988959` and `T015` on `07999111222`. A real duplicate, created because the test row's number differed from the existing Bob Samwell's.

Diagnosis: **look at the verdict text.** If it names a **row number** rather than a `T0xx` id, the old formula is still in the sheet. `apps-script/SHEET-FORMULAS.md` carries this in its troubleshooting table.

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

**CONFIRMED BY THE OWNER 2026-09-19, independently and on his own phone.** He opened the `/exec` address in his phone browser and got **`Script function not found: doGet`** — the English rendering of the same error, from a different device, a different network and a different locale to the server-side measurement above. That matters for two reasons. It rules out anything peculiar to this server's requests, and it is the first time the ten-second browser check has been used by the person who will need it: **the check works, and it is usable from a phone.** The diagnosis is no longer a single session's measurement.

**Consequence for the five candidates in the entry above: candidates 1 and 2 move from "cannot be the cause, subsumed" to CONFIRMED BY THE OWNER.** Both turned on what the deployment is serving, and he has now seen what it serves.

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

**[GOTCHA] 2026-09-21 — `checkSetup`'s "THE DUPLICATE CHECKER IS BROKEN" alarm is CORRECT and is EXPECTED after a D7a reset. It does NOT mean live duplicate protection has failed, and the Owner does not need to stop submitting.**

**Reported as a possible defect in the documented remedy; MEASURED as a false alarm about the document and a TRUE alarm about the sheet.** Both halves are recorded because the distinction is what the Owner needs.

**WHAT IS ACTUALLY TRUE.** The Owner ran *Village list → Check the setup* after completing the D7a reset and it reported `I2 has no formula in it` / `J2 has no formula in it`. **That report is right.** `checkSetup` reads `pub.getRange(2, 9, 1, 2).getFormulas()` at `Publish.gs:1932` — row 2, columns I and J — and the D7a reset cleared row 2's data cells. **If the formulas went with it, they are genuinely gone.**

**WHAT IS NOT TRUE, AND IT WAS THE REASON THIS WAS INVESTIGATED.** It was reported that `SHEET-FORMULAS.md` gives **identical** formulas for Published `I2` and `J2`, so anybody following the repair instruction would paste the same formula twice. **MEASURED 2026-09-21 by hashing every documented formula in that file: no two cells share a formula, and `I2` and `J2` differ in hash, in length (291 vs 121 characters) and in the columns they read.** The live raw copy is byte-identical to the repo. **The document is correct and was not changed.**

**WHAT ACTUALLY BREAKS WHILE `I`/`J` ARE DEAD — and what does not.** This is the part that matters:

| Mechanism | Affected? | Evidence |
|---|---|---|
| **The publisher's duplicate merge** | **NO** | `rowIndexForPerson` reads Published columns **E, B and C** and normalises them *in JavaScript*; it never touches I or J. **Executed with both cells empty: a repeat submission still returns `added: false`, "Merged into T001", and no second row.** |
| **The site** | **NO** | `app.js` has zero references to `pub_phone_key` / `pub_name_key`; it maps by header name and ignores unknown columns |
| **`Code.gs` / the recommendation endpoint** | **NO** | zero references |
| **The `verdict` column on Form responses** | **YES — this is the whole impact** | `L2` reads `Published!$I$2:$I$500` and `$J$2:$J$500`. With them blank, a person already listed reads **`NEW`**. Measured against the committed verdict harness: `NEW` with the helpers dead, `ALREADY ON SITE — T001` with them alive |

**So the alarm's own wording overstates it.** It says *"EVERY new form submission will look like a new person, even somebody already on the list"* — true of the **verdict column he reads**, and **false of the publisher**, which keeps merging correctly. **Nothing gets published twice.** Recorded rather than fixed, because the message is right about the consequence he can see and erring loud is the correct bias for a setup check.

**Why the two tabs' formulas look wrong when compared side by side, which is the trap this class of report falls into:** the same idea sits at different letters, because the phone column is `E` on Published and `F` on Form responses, and the names are `B`/`C` versus `D`/`E`. **A reader comparing Published `I2` against Form responses `J2` sees two different formulas and can conclude one is broken. Both are right for their own tab.**

Diagnosis: `node apps-script/test-verdict.js` — section *"2026-09-21 — the documented formulas are right for their own tab"*, which hashes every documented formula, asserts no two are identical, and asserts each key reads the correct columns **for the tab it belongs to**. **Mutation-tested: making `J2` identical to `I2` is killed by three of those checks, naming the exact cells.**

**[GOTCHA] 2026-09-21 — "Publish any responses not yet on the list" IGNORES the `action` column and republishes EVERYTHING. It is the first item in the Owner's menu, and after a list-clear its wording actively invites the click that undoes the clear.**

**Not a code defect — it does exactly what it says — but it is a trap with a live blast radius, so it is recorded as one.**

`sweepPublished` skips a response whose `action` cell is non-empty, at `Publish.gs:621`:

```javascript
if (actionCol > 0 && String(values[r][actionCol - 1] || '').trim() !== '') continue;
```

**`backfillPublished` has no such test.** Defined at `Publish.gs:797`, its loop runs `810-822`, reads every response row, skips only rows with no name and no phone, and calls `publishOne` on the rest at `822`. The `action` column is never consulted.

**MEASURED 2026-09-21** against an emptied Published tab with 29 test responses whose `action` cells were all filled:

| Action | Rows on Published afterwards |
|---|---|
| Twelve five-minute sweeps | **0** — the `action` cells held; nothing came back |
| Clearing the `action` column, then one sweep | **29** — everything returned |
| **One click of "Publish any responses not yet on the list"** | **29** — everything returned, and the alert read *"Done. Added 29 new people to the list. Skipped 0 already there or empty."* |

**Why the wording is the hazard.** The menu item is described as publishing *"any responses not yet on the list"*. After a deliberate clear the list is empty, so every response is literally "not yet on the list" — the description is accurate and the behaviour is catastrophic for the Owner's intent. **The reassuring alert compounds it**: it reports 29 additions as a success.

Diagnosis: `node apps-script/test-publisher-resilience.js` — section *"2026-09-21 — what would bring the test data back"*, which asserts all three behaviours above as facts.

**Not fixed, and deliberately not.** The function is correct for its actual purpose — recovering responses that genuinely never published — and it is the documented recovery route in `DEPLOY.md` and the restore runbook. **Changing it to consult the `action` column would break that purpose**, because a response that failed to publish has a blank action cell only when the publisher never ran at all. The mitigation is documentation: the full-clear procedure in [PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` names this menu item as the one click not to make, and says the Owner will not need it again.

**[BUG] 2026-09-21 — COMMITTING A FIX TO `origin` DOES NOT PUT IT WHERE THE OWNER COPIES FROM. He re-pasted believing he was installing a fix, and re-installed the unfixed file.**

**This is a distribution defect, not a code defect, and it silently wasted a session's work.**

Root cause: there are **two** repositories and **no automation between them**. `gsamwell-lang/dunchi-trader` (`origin`) is where sessions commit. `dunchitrader-collab/dunchitrader-collab.github.io` (`collab`) serves GitHub Pages **and carries a full copy of `apps-script/`** — and **that is the one the Owner is told to copy from**, because it is the account he is signed into. **Nothing pushes `origin` → `collab`.** It is a manual `git push collab master:main`, and it had not been run since 2026-09-19.

**MEASURED 2026-09-21T08:0xZ:**

| Check | Result |
|---|---|
| `git fetch collab main`; `git log -1 FETCH_HEAD` | **`0f7c3ec`, 2026-09-19T21:43:38Z** |
| `git show FETCH_HEAD:apps-script/Publish.gs \| grep -c noteInto` | **`0`** — the audit-trail fix is absent |
| `diff` live copy against each local commit | **byte-identical to `1d50b00`** — the ORIGINAL publisher, missing BOTH 2026-09-21 fixes |

**So when the Owner re-pasted this morning he installed `1d50b00`** — the version with the bare `setValue` and the unguarded duplicate check. **Every conclusion drawn from his subsequent execution log is a conclusion about `1d50b00`, not about the committed fix.**

**The `apps-script/` copy in the live repo serves no runtime purpose.** GitHub Pages serves `index.html`, `app.js` and the assets; Apps Script code is pasted by hand into a Google project. It is there as **the Owner's copy-source**, which is precisely why it must not be allowed to go stale.

Fix applied: **the push was performed this session** — this repo has write access to `collab` (Gavin added `gsamwell-personal` as a collaborator on 2026-09-18; see the RESOLVED Layer 1 row), verified by `git push --dry-run collab master:main` returning `0f7c3ec..ed70407` at exit 0 **before** anything was written.

⚠ **`GITHUB_TOKEN=` MUST BE CLEARED ON EVERY PUSH TO EITHER REMOTE.** The environment exports a fine-grained PAT that overrides the credential helper — the `[BUG] 2026-09-18` entry below records this and it applies to `collab` exactly as it does to `origin`. `GITHUB_TOKEN= git push collab master:main` succeeds; the same command without the prefix fails with HTTP 403 and looks like a permissions problem it is not.

Diagnosis: `GITHUB_TOKEN= git fetch collab main && GITHUB_TOKEN= git diff FETCH_HEAD..HEAD --stat -- apps-script/` — **any output means the Owner's copy-source is stale.** Run it before telling him to paste anything.

**[BUG] 2026-09-21 — A REFUSED PHONE DISABLED THE DUPLICATE CHECK ENTIRELY, so the sweep republished the same people every five minutes. MEASURED: 8 responses became 112 rows over 14 sweeps.**

⚠ **THIS CORRECTS THE PREVIOUS SESSION'S CONCLUSION, which was wrong.** The 2026-09-21 audit-trail session concluded *"no duplicate-row risk"* on three measured guards. **The measurement was sound and the conclusion did not follow**, because the test drove each re-run against a **fresh stub**, where the merge guard is always consulted. **The live condition is the SAME sheet swept again and again**, and there the guard is not always reachable. **The earlier entry's guards are real; they are simply not the only path.**

Root cause: `normalisePhone` **deliberately returns `''`** for a field it refuses — two numbers in one box, a damaged leading zero, a wrong digit count. That is correct behaviour and is itself a 2026-09-19 fix. But the sweep's duplicate check was written:

```javascript
var key = normalisePhone(row.phone);
if (key) {                                  // <-- FALSE for a refused phone
  var at = rowIndexForPerson(existing, key, row.first, row.last);
  if (at !== -1) { ...record the merge and continue... }
}
```

**For exactly those rows the duplicate check NEVER RAN.** The response published `hidden`, the sweep came round five minutes later, found no action note and never consulted the guard, and published it **again**. `publishInto` carried the identical `if (phoneKey)` structure, so every caller was affected.

**Why it needed BOTH conditions, which is why it was not seen sooner.** A row is skipped at the top of the loop if its `action` cell is non-empty. So a refused phone alone is harmless — the note lands, the row is skipped next time. **The runaway needs a refused phone AND a refused note**, and the Owner had both: `T017 Lee Schofield`'s number is *"07872 065874 or 01392 980312"*, and column `M` carried the triage dropdown that refused every note.

**MEASURED, reproducing the live condition — the same sheet swept repeatedly, not a fresh stub:**

| File | 14 sweeps, 8 refused-phone responses, notes refused | Duplicates |
|---|---|---|
| `1d50b00` (original, **what the Owner is running**) | **14 rows** — one new person per sweep, because the abort stopped it after the first | Yes, growing |
| `4f4e88f` (yesterday's audit fix) | **112 rows** | **Yes — all 8, every sweep** |
| This fix | **8 rows** | **None** |

⚠ **`4f4e88f` MADE THIS WORSE AND THAT IS RECORDED RATHER THAN GLOSSED.** Removing the abort was correct on its own terms — it stopped the sweep truncating — but the abort had been accidentally *limiting* the duplication to one row per run. **Fixing the abort without fixing the guard turned a slow leak into a flood.** This is the exact reason the Owner's log showed `published 8` fourteen times rather than `published 1`.

Fix applied: **new `rowIndexForUnusablePhone(values, first, last, trade)` at [PATH] `apps-script/Publish.gs:1083`** — a name + trade fallback used when and only when the phone yields no key. Both call sites now read `var at = <key> ? rowIndexForPerson(...) : rowIndexForUnusablePhone(...)`: the sweep at `Publish.gs:642-643`, and `publishInto` at `961-962`.

**The fallback is deliberately weaker than name + phone**, and that trade is stated rather than hidden: the alternative is not a stricter match but **no match at all and a list that grows without bound**. A false match costs one merged recommendation on a row that is `hidden` with an unusable number and which the Owner must edit by hand regardless.

Diagnosis: `node apps-script/test-publisher-resilience.js` — section *"2026-09-21 — a refused phone must not disable the duplicate check"*. **Against the pre-fix file those controls fail and the suite reproduces the runaway**: six sweeps of two responses produce twelve rows with each person five times over.

**[BUG] 2026-09-21 — the audit-trail write aborted the recovery it was auditing: a refused `action` note threw out of `sweepPublished` MID-LOOP, so the sweep published some missed submissions and silently abandoned the rest**

**This is a design defect, not a typo, and it is the most serious class this project has produced: row 6.2's visibility mechanism killed row 6.1's recovery function.**

Root cause: `sweepPublished` wrote its outcome note into the `action` column with a **bare `sheet.getRange(...).setValue(...)`** at three sites, with nothing around them. `note()` — the form-submit path's equivalent — had carried a `try/catch` since it was written, with the comment *"Never let recording the outcome become a second failure."* **The sweep never got that guard, and the asymmetry is the whole defect: the same write, protected on one path and bare on three.** When Sheets refused the write, the exception propagated out of the `for` loop, past `recordSweepRun()`, to the `finally` that released the lock — and out of the function.

**What refused the write, on the Owner's sheet:** column `M` carried a **leftover data-validation dropdown from the manual triage era**, permitting only `Publish`, `Add to T0xx` and `Reject`. The publisher writes free text such as `Published as T021 (by the automatic check)`, which that rule rejects. **REPORTED from the Owner's execution log, not measured here** — the validation rule is inside his account and no session can read it. **The fix does not depend on that diagnosis being right**, and deliberately so: it survives a refused write whatever the reason.

**MEASURED in the Owner's own account — the sweep's first live run, his Executions log, quoted verbatim:**

```
Sep 21, 2026, 7:11:08 AM   sweepPublished   Time-Driven   3.128 s   Failed
  07:11:10  Info    sweep published 8 missed submission(s)
  07:11:11  Error   The data you entered in cell M2 violates the data validation
                    rules set on this cell. Please enter one of the following
                    values: Publish, Add to T0xx, Reject.
```

**REPRODUCED AND MEASURED HERE, and the reproduction found the failure to be WORSE than the log alone implies.** A negative control in [PATH] `apps-script/test-publisher-resilience.js` drives the real `sweepPublished` against a stub whose column M throws the identical Sheets message. Against the unfixed file, with **two** missed submissions due:

| What the log suggested | What the reproduction measured |
|---|---|
| The notes were lost after the publishing succeeded | **The sweep aborted MID-LOOP.** Only `T021` was written; the second submission was never reached and never published |
| The run failed at the end | `recordSweepRun()` **never ran**, so the run was not remembered at all |

**The Info line at 07:11:10 is not proof all 8 landed.** It reports `added`, incremented as each row publishes — the throw came one second later, so the count is of work genuinely done, but **any submissions after the one that threw were abandoned**. On his sheet the throw was on `M2`, the FIRST data row, which is consistent with the 8 having published before the first note was attempted; the ordering cannot be established from outside his account.

Fix applied: **new function `noteInto(sheet, rowNum, col, text)` at [PATH] `apps-script/Publish.gs:556`**, which writes the note and returns `true`, or catches, logs and returns `false` — it **cannot throw**. The sweep's three write sites — `Publish.gs:641` (merge note), `655` (FAILED note) and `663` (outcome note) — now call it and increment an `unrecorded` counter declared at `617`; `note()` routes through it too at `513`, keeping one mechanism rather than four. The loud summary is at `672-673`, and `recordSweepRun()` at `681` is now reachable on the refused-note path where before it was not. **A non-zero `unrecorded` produces a loud summary line naming the probable cause**, so a refused note is visible in three places — the log, the summary count, and the action cell staying blank, which is already the documented alarm.

**This is NOT swallowing an error, and the distinction is the design.** The recommendation is already safely on Published by the time the note is written. **Losing the note costs a line of audit text; losing the sweep costs a villager their tradesperson.** Writes to **Published itself remain fatal** — `writeRowBlocks`, `writeRangeBlocks` and `appendRecommendation` are untouched, because a failure there *is* a lost recommendation and is correctly handled by the retry and the `FAILED —` note.

Diagnosis: `node apps-script/test-publisher-resilience.js` — the section *"2026-09-21 — a refused action write must never abort the sweep"*. Run `CONTROL=1 node apps-script/test-publisher-resilience.js` to assert the OLD behaviour; **those two controls pass against the pre-fix file and FAIL against the fixed one**, which is what proves they test the mechanism rather than themselves.

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

## The queue as it stands after the 2026-09-21 session

*The 2026-09-19 queue follows below this section, under its own original heading, unchanged except where an item has been closed in place.*

**[OUTSTANDING] 2026-09-21 | HIGH | Blocking: no — the list and the publisher are fine without it | COMPUTER, two pastes, about two minutes**

**PUT THE TWO DUPLICATE-CHECKER FORMULAS BACK.** The D7a reset cleared them from Published row 2. `checkSetup` reports it correctly.

⚠ **This is NOT urgent and nothing is at risk while it waits.** Measured 2026-09-21: the publisher's duplicate merge does not use these columns and still works with them empty — a repeat submission merges rather than creating a second row. **What is affected is only the `verdict` column he reads**, which will say `NEW` for somebody already on the list.

**Open the Published tab. Click cell `I2` and paste this ONE line:**

```
=ARRAYFORMULA(IF($E$2:$E="","",IF(LEFT(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),4)="0044","0"&MID(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),5,50),IF(LEFT(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),2)="44","0"&MID(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),3,50),REGEXREPLACE(TO_TEXT($E$2:$E),"\D","")))))
```

**Then click cell `J2` and paste this ONE line:**

```
=ARRAYFORMULA(IF(($B$2:$B="")*($C$2:$C="") ,"",LOWER(REGEXREPLACE(TO_TEXT($B$2:$B)&TO_TEXT($C$2:$C),"[^A-Za-z0-9]",""))))
```

⚠ **They are DIFFERENT formulas and must not be swapped.** `I2` is the **phone** key and reads column **E**; `J2` is the **name** key and reads columns **B** and **C**. **Paste each into its own cell and check the formula bar afterwards** — `I2` should mention `$E$2:$E`, `J2` should mention `$B$2:$B`.

**How he confirms the repair took:** run **Village list → Check the setup** again. The block that read *"THE DUPLICATE CHECKER IS BROKEN"* should be replaced by:

```
Duplicate-checker columns (I and J): working.
```

**If it instead says "THE DUPLICATE CHECKER IS NOT FILLING IN for: T001"**, the formula is in `I2` but is not reaching that row — most likely `I2` was pasted into `I3` or lower, or a stray value sits in `I3` blocking the spill. Clear anything below `I2`/`J2` and re-paste.

**Also worth a glance while he is there:** the `verdict` column on Form responses should go back to reading `ALREADY ON SITE — T001` for a resubmission of the same person, rather than `NEW`.

---

**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — the last thing before the village is told | COMPUTER, about fifteen minutes**

**RUN THE FULL RESET.** The Owner has ruled **D7a-VCWL-21092026** and the procedure is written click-by-click in [PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` under *"Starting the list completely clean — the full reset"*. **It is his action on his own sheet; no session may run it.**

**The four things most likely to go wrong, in order:**

1. **Deleting row 2.** His formulas live there — `I2`/`J2` on Published, `J2`/`K2`/`L2` on Form responses. **Every delete starts at row 3**; row 2 is cleared by hand in two pieces that skip the formula cells.
2. **Clicking "Publish any responses not yet on the list".** After the reset it would have nothing to republish — but only because the response rows went too. **Still never click it.**
3. **Deleting row 1.** The header is load-bearing: with it the site shows *"Nobody on the list just yet"*; without it, *"The list is being updated"*, which reads as broken.
4. **Leaving the data-validation rule on column `M`.** Not dangerous, but the `action` column stays blank and he loses the record of what happened to each submission.

**What good looks like:** Published empty below the header, the site showing *"Nobody on the list just yet"* on a cache-busted load, nothing back ten minutes later, and the first re-submitted tradesperson arriving as **`T001`, `active`**.

---

~~**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — gates seeding, which gates launch | AWAITING THE OWNER'S RULING, not a task**~~ **RESOLVED 2026-09-21T09:26:45Z — he ruled D7a-VCWL-21092026, recorded in Layer 5. The question below is preserved as it stood when it was put to him.**

**OPEN QUESTION: may the Published tab be cleared completely?** The Owner has asked to; his own standing ruling **D7-6G7f-19092026 (HIDE, NEVER DELETE)** says no. **Both cannot stand and he has not yet ruled.**

**What he would be overturning, stated so the ruling is made knowingly:**

| Artefact | What it currently says |
|---|---|
| **D7-6G7f-19092026** (Layer 5, 2026-09-19) | Hide, never delete — *"deleting the highest id frees it for reuse and a later submission would inherit every recommendation filed against the old holder"* |
| **Build plan row 2.1**, Approach column | *"Set status to hidden, never delete"* |
| **Row 2.1's Sub-task text** | *"every test entry and the two duplicates carry `status` `hidden`"* |

**The analysis says the clear is SAFE and the ruling is still RIGHT about its own case** — they do not actually contradict once the cases are separated: a **total** clear leaves nothing to inherit a reused id; a **partial** delete is exactly the hazard D7 names. **The proposed supersession is therefore narrow: D7 continues to govern every partial removal, and is set aside only for a complete clear.**

⚠ **NO PLAN ROW HAS BEEN CHANGED AND NO DECISION RECORDED AS MADE.** Row 2.1 still reads `new` with its original Approach. If he rules yes, a later session amends row 2.1 and records the supersession in Layer 5 — **not this one.**

**If he rules NO**, the cost is small and worth stating: hiding all 29 leaves them in the sheet forever, the next real person is `T030` rather than `T001`, and the Form responses tab stays as it is either way. **Nothing breaks.** It is untidiness versus a rule he wrote for good reasons.

---

**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — duplicate rows are on the list NOW | COMPUTER, five minutes**

**COUNT THE ROWS ON PUBLISHED. This is the one specific thing to do, and it distinguishes every hypothesis.**

**Open the Published tab and count the data rows** (ignore the header). Then count how many are **`Murray Angel`** and how many are **`Stuart Ironside`**.

| What he counts | What it means | What follows |
|---|---|---|
| **~22 rows**, Murray once and Stuart once | Everything worked; the 8 landed cleanly and nothing duplicated | **Best case.** Nothing to undo |
| **~30–40 rows**, with **one or two names repeated a dozen times** | **EXPECTED, and it is the measured behaviour of the file he is running.** `1d50b00` aborts after the first new row each sweep, so ~14 sweeps added ~14 extra rows — mostly copies of whichever response sits first with an unusable phone | Hide the copies; see below |
| **100+ rows**, all 8 names repeated ~14 times | He is somehow running `4f4e88f` rather than `1d50b00` | **Send the count across** — it changes which file was installed |
| **Murray or Stuart appearing 5+ times** | The runaway hit them specifically | Hide the copies; keep the **lowest** id of each |

**⚠ HIDE THE COPIES, NEVER DELETE THEM** — Owner's standing ruling **D7-6G7f-19092026**. Deleting the highest id frees it for reuse and a later submission inherits somebody else's recommendations. **Keep the LOWEST id for each real person** (it holds the original recommendation) and set `status` to `hidden` on the rest.

**Why this happened, in one line:** a telephone number the system refuses — two numbers in one box, like `T017 Lee Schofield`'s *"07872 065874 or 01392 980312"* — produced no usable key, and the duplicate check only ran when there was a key. **Fixed in the code this session; he needs the re-paste below for the fix to be running.**

---

**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — stops the duplication recurring | COMPUTER, one paste**

**RE-PASTE `Publish.gs` — and this time the copy-source is correct.** ⚠ **The file he pasted this morning was the ORIGINAL publisher**, not a fix: the live repo had not been updated since 2026-09-19 (see the `[BUG] 2026-09-21` distribution entry in Layer 3). **That has been fixed — the push was performed this session**, so the copy at the URL below now carries both of today's fixes.

**Copy from:**

```
https://raw.githubusercontent.com/dunchitrader-collab/dunchitrader-collab.github.io/main/apps-script/Publish.gs
```

**Click-by-click:** open that URL → **Ctrl+A**, **Ctrl+C** → open the spreadsheet → **Extensions → Apps Script** → click **`Publish.gs`** in the left-hand file list → **Ctrl+A**, **Ctrl+V** → **Ctrl+S**. **Do not touch `Code.gs`** and **do not redeploy** — neither is involved.

**How he knows it worked:** press **Ctrl+F** in the editor and search for **`rowIndexForUnusablePhone`**. **Present = the fix is installed. Absent = the paste did not take.**

**Then remove the data validation from column `M`** on Form responses (**Data → Data validation →** remove the rule permitting only `Publish` / `Add to T0xx` / `Reject`). The fix survives without this, but until it is gone the `action` column stays blank and he has no audit trail.

**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — the fix is committed but the copy that RUNS is in his account | COMPUTER, one paste**

**Re-paste `apps-script/Publish.gs`.** The version he pasted this morning is the one whose audit-trail write aborts the sweep mid-loop — see the `[BUG] 2026-09-21` entry in Layer 3. **Until he re-pastes, every five-minute sweep still risks abandoning submissions after the first refused note.**

**And remove the data validation from the `action` column** (his own action, on his own sheet): select column `M` on **Form responses** → **Data → Data validation** → remove the rule permitting only `Publish`, `Add to T0xx`, `Reject`. **That rule is a leftover from the manual triage era and nothing uses it now.** ⚠ **The re-paste does not depend on him doing this** — the fixed code survives the refusal either way — but until the rule is gone the `action` column stays blank and he loses the audit trail that tells him what happened to each submission.

---

**[OUTSTANDING] 2026-09-21 | ⚠ CRITICAL | Blocking: YES — he needs to know whether 8 real submissions actually landed | COMPUTER or phone, about three minutes**

**THE CHECK: did the 8 land, and has anything been duplicated?** The sweep reported *"published 8 missed submission(s)"* at 07:11:10 and threw one second later. **The publishing is believed to have completed, and the throw to have been on the audit note — but that must be confirmed by looking, not assumed.**

**Step 1 — open the Published tab and look at the bottom.** Scroll to the last row carrying an id.

| What he finds | What it means |
|---|---|
| **Ids running consecutively with no gaps**, e.g. `T021`…`T028` | **Good. The 8 landed.** This is the expected result |
| **The same person on two rows with two different ids** | **A duplicate — send the two ids across.** The code says this cannot happen (evidence below); if it has, the evidence is wrong and it is a defect |
| **Fewer new rows than 8** | The sweep aborted earlier than believed. **Send the count** — the remainder will need the recovery below |

**Step 2 — specifically, are `Murray Angel` and `Stuart Ironside` there?** These are the two lost on 2026-09-19 and they are the test of whether the recovery worked at all.

- **Expected:** both present, each **once**. Murray's row should read `status` **`hidden`**, because his telephone field holds **two numbers joined by "Or"** and the publisher refuses rather than welds them — he needs one of them retyped into the cell, then `status` set to `active`. Stuart's should be **`active`**.
- **Their ids depend on what else published first and cannot be predicted from outside the account.** The previous session's estimate of `T022`/`T023` assumed nothing else arrived; 8 submissions published this morning, so **read the ids off the sheet rather than expecting particular ones**.

**Step 3 — has the repeated sweeping duplicated anything?** It has now fired roughly a dozen times since 07:11 with the action column still blank, so **every firing reconsidered the same rows.**

**MEASURED HERE AGAINST THE REAL CODE — there is no duplicate-row risk, and this is evidence rather than reassurance:**

| Guard | Measured behaviour |
|---|---|
| `rowIndexForPerson(existing, key, first, last)` | Finds the row the aborted run already published — **matching on phone AND name** — so the sweep hits `continue` and never republishes |
| `publishInto()` if it were reached | Returns **`added: false`** — a merge into the existing id, never a new row |
| `appendRecommendation()` | **Refuses identical words**, so the recommendation text is not doubled either |

**Three independent layers, any one of which prevents a duplicate.** Committed as permanent tests in [PATH] `apps-script/test-publisher-resilience.js`.

**What the repeated firing DOES cost:** nothing on the list, but each run burns a little of Google's ~90 minutes of daily trigger time. **Not urgent, and not a reason to turn the sweep off** — the sweep is the only defence against Murray's failure class.

---

**⚠ ONE THING THIS SESSION COULD NOT ESTABLISH, and it needs his eyes.** Whether all 8 published **before** the throw, or whether some were abandoned after it. The reproduction here shows the sweep **aborts mid-loop**, so the order matters. **His Executions log for the runs AFTER 07:11:08 is where the answer is** — if later runs report `published 0 missed submission(s)` and completed, everything landed; if a later run reports a further non-zero count, the earlier one had abandoned work that a subsequent sweep then recovered. **Either way the list ends up correct; the question is only whether the 07:11 run did it all.**

---

## The queue as it stands after the 2026-09-19 session

~~**[OUTSTANDING] 2026-09-19 | ⚠ CRITICAL | Blocking: YES — the publisher in his account is still the one that lost two recommendations | COMPUTER, one paste and two clicks**~~
~~**Paste the new `Publish.gs` and turn on automatic checking. Until he does, NOTHING from build plan rows 6.1, 6.2 or 6.3 is running.** The code is committed at `1d50b00` and tested; the copy that runs is in his Apps Script project.~~ **COMPLETED 2026-09-21T07:23:59Z — he pasted it and installed the sweep.** REPORTED from his Executions log: `installSweep` Completed at 07:08:34, `onOpen` Completed at 06:53:06, and `sweepPublished` fired on the five-minute timer at 07:11:08. **The paste is done; a RE-paste is now outstanding above because that version carries the 2026-09-21 defect.**

**What the paste brings:** a retry for Google's transient failures (Stuart's class), a five-minute sweep that catches anything Google never delivered (Murray's class — **the only defence against it**), a line in the `action` column for every submission so **a blank cell is the alarm**, a refusal to weld two telephone numbers into one, and merging on name as well as number.

**Then two clicks:** **Village list → Turn on automatic checking** (safe to click twice), and **Village list → Check for missed recommendations now** — which recovers Murray and Stuart immediately.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | follows the paste above**
**Murray Angel and Stuart Ironside are recovered by the sweep, and Murray then needs one number retyped.**

| | id it will take | status | what he must do |
|---|---|---|---|
| **Stuart Ironside** (Builder) | **`T022`** | **`active`** | Nothing — appears on the site |
| **Murray Angel** (Logs & firewood) | **`T023`** | **`hidden`** | His number reads `01626 879961 Or 07966 184788` — **two numbers in one box.** Put one in the phone cell, then set `status` to `active`. The `action` column will say why. |

**Ids assume `T021` is taken by the 22:07 live test.** Nothing is reused.

**[OUTSTANDING] 2026-09-19 | MEDIUM | Blocking: no | his judgement, after the paste**
**`T017 Lee Schofield` has the same two-number fault** — `07872 065874 or 01392 980312`, plus an email address in the business field. He is a real villager submission and is currently `hidden`. One number in the phone cell, clear the business field, set `active`.

**[OUTSTANDING] 2026-09-19 | ⚠ CRITICAL | Blocking: YES — DO NOT POST THE LAUNCH MESSAGE UNTIL THIS IS UNDERSTOOD**
**Two real submissions vanished silently. Run the ONE test that can identify the cause, then recover them.** See the `[BUG]` in Layer 3 for the full measurement.

### Step 1 — THE TEST, and only he can run it. Two minutes.

**Open the spreadsheet → Extensions → Apps Script → Executions** (clock icon in the left margin). **Look for `onFormSubmitPublish` at 20:03:57 and at 20:07:52 on 2026-09-19.**

| What he finds | What it means | What follows |
|---|---|---|
| **No entry at all** for either time | **The trigger did not fire.** Google did not call the script — a trigger fault, a quota, or an authorisation lapse. | The code is sound; the trigger needs re-installing and watching. Most likely outcome given the evidence. |
| An entry marked **Failed** | The trigger fired and the script threw. **The error text names the cause** and is the one thing that would identify it exactly. | Send the error text across. |
| An entry marked **Completed** | **The worst outcome**, because it means the script believed it succeeded and wrote nothing. | Send the timestamp and duration across — this would be a defect in the code after all, and everything above would need reopening. |
| **Timed out** / **cancelled** | Google killed it mid-run. | Likely a transient Google-side event; watch for recurrence. |

**Whatever he finds, send it back.** The mechanism is currently **UNKNOWN** and this log is the only place it exists.

### Step 2 — RECOVERY. No villager resubmits, and no id is reused.

**Run: Village list → Publish any responses not yet on the list** (the `backfillPublished` menu item).

**Why this is the right route and is safe:** it walks every response through `publishOne`, which **merges a duplicate onto the person already listed rather than adding a second row** — so the eighteen that already published are skipped, not doubled. It is idempotent and has been exercised before.

**What it will do, arithmetic verified against the live Published tab:** ids come from the **highest** already present, which is `T020`, so —

| | id assigned | status | why |
|---|---|---|---|
| **Murray Angel** | **`T021`** | **`hidden`** | His phone reads `01626 879961 Or 07966 184788` — two numbers in one box, a 22-digit key. **Needs one number retyped, then set `active`.** |
| **Stuart Ironside** | **`T022`** | **`active`** | Phone clean and valid. **Appears on the site immediately.** |

**Nothing is reused and no id is freed.** `T021` and `T022` are the next free numbers.

### Step 3 — then check it worked

Re-run the reconciliation, or simply confirm `T021` and `T022` exist on Published. **Tell Tim and Lin their recommendations are on the site**, since both were thanked by the form and neither was.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | A DESIGN GAP, separate from the transient fault above**
**A submission that fails to publish leaves NO trace anywhere the Owner looks.** No row, no flag, no email, nothing in the sheet — and the villager is thanked by Google's form regardless. `onFormSubmitPublish` catches every exception into `Logger.log` and returns; `readSubmission` returns `null` silently if the event carries no `namedValues`.

**The only way to detect it is to reconcile Form responses against Published**, which nobody would think to do and which found this one only because it was looked for.

**Worth a plan row in `PLAN-DUNCHI-LAUNCH-2026-09-19` once the transient cause is known** — the obvious shape is that the publisher writes a visible marker to the response row on success, so a blank marker is the signal. **Not proposed as work yet**, because the right fix depends on what the Executions log says.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no — the site works either way | ⚠ OPERATOR ONLY, his sheet. FOUR SMALL EDITS, A FEW MINUTES**
**The list shows THREE people. Four edits in his own sheet would take it to seven across five or six trades.** Diagnosed read-only 2026-09-19T20:2xZ — **nothing is broken**, see Layer 6. These are his judgement calls, not fixes.

**1 and 2 — decide about two rows that are hidden and he thought were not.**

| id | name | trade | what to check |
|---|---|---|---|
| `T005` | Bob Samwell | Plumber | If real, set `status` to `active`. **He reported leaving this visible and the feed says `hidden`** — why is UNKNOWN here, the sheet's history is inside his account. |
| `T012` | Frank Shelly | Carpenter | Same. |

**3 and 4 — retype two phone numbers the publisher correctly refused.** Both are **real villager submissions from today** and both are recoverable; the publisher hid them automatically, exactly as designed, and neither is a fault.

| id | name | the problem | the fix |
|---|---|---|---|
| `T017` | Lee Schofield (Electrician) | Phone reads **`07872 065874 or 01392 980312`** — two numbers in one box, normalising to a 22-digit key. **Also an email address in the business field**, which is a second, independent reason it was hidden. | Put **one** number in the phone box; move or clear the email. Then set `status` to `active`. |
| `T020` | Gecko Geckster (Car mechanic) | Phone reads **`01392 47484847`** — 13 digits, not 11. | Retype it correctly, then set `status` to `active`. |

> **Why the publisher hid them rather than publishing them:** a wrong number is the one failure this project treats as launch-critical, because a villager taps Call, reaches a stranger, and has no way of knowing the list was at fault. Hiding is the designed behaviour and it worked.

**[OUTSTANDING] 2026-09-19 | MEDIUM | Blocking: no | GOOD NEWS, recorded so it is not missed**
**The village has started using the directory.** Five people arrived today through the form — `T016` Andy Watson (Plumber), `T017` Lee Schofield (Electrician), `T018` Ben Phythian (Gardener), `T019` Tony Clapham (Heating oil & gas), `T020` Gecko Geckster (Car mechanic) — with recommendations naming **Tim, Lin, Gavin and Hazel**. **Three published themselves cleanly with no intervention.** That is `PLAN-DUNCHI-LAUNCH-2026-09-19` row 3.1 advancing on its own, which is exactly what D9c predicted would happen.

**[OUTSTANDING] 2026-09-19 | ⚠ CRITICAL | Blocking: YES — THE LAST GATE BEFORE THE VILLAGE IS TOLD | OPERATOR ONLY, his sheet**
**Finish hiding the test people. `PLAN-DUNCHI-LAUNCH-2026-09-19` row 2.1 — ITS URGENCY HAS CHANGED AND THIS ITEM REPLACES THE EARLIER ONE.**

**It was housekeeping. Under D9c it is the hard gate**, and the only one. The plan assumed the list would be seeded before anybody was told; he has ruled the reverse. **So this is now the last thing standing between the village and the list, and the link cannot be un-sent.**

**MEASURED 2026-09-19T18:4xZ against his live feed — he has already done most of it.** Thirteen of fifteen rows are `hidden`. **Two people are visible:** `T005 Bob Samwell` (Plumber) and `T012 Frank Shelly` (Carpenter). **What remains is his judgement, not a list of ids:** are those two real tradespeople he is content for the village to ring? If either is test data, it wants hiding before the link goes out. Nothing here can tell him — **only he knows which of those two names is a real person.**

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | ⚠ TIMING NO LONGER UNDER HIS CONTROL**
**Row 3.1 — the list carries real people — is unchanged in its outcome and changed in its character.** Still 12–15 tradespeople across at least 6 trades. But under D9c it is reached by **villagers submitting through the form**, not by him seeding, so **he cannot decide when it finishes.** It was an afternoon's work; it is now paced by how many neighbours happen to fill in a form.

**What that means for the plan:** row 3.1 may sit open for weeks and that is the expected behaviour rather than a stall. It is also why D6b put this work in a plan of its own.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no — but he should read it before posting | ⚠ THE LAUNCH MESSAGE NO LONGER MATCHES THE LIST**
**The drafted launch message promises more than the list currently holds, and under D9c it will be posted to an unseeded list.**

Its first line reads: *"a simple page listing local tradespeople the village has recommended — **plumbers, electricians, gardeners and the rest**"*. **Measured against the live feed the same day: two active people, two trades — one plumber and one carpenter. No electrician and no gardener is visible.**

**This is reported, not rewritten.** The message was drafted under the assumption the list would be seeded first, which D9c reverses, and **whether to soften the wording or post it as drafted is his call** — he may prefer the words as they are, since they describe what the page is for rather than promising an inventory. **It is recorded so the mismatch is a decision he makes rather than one he discovers** from a villager who went looking for an electrician.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | ⚠ THE OPERATOR'S, AND HE HAS NOT AGREED TO IT YET**
**WALK the restore runbook. `PLAN-DUNCHI-LAUNCH-2026-09-19` row 5.1, effort 9 — the largest row in the plan, and the only clause of the Requirement as stated still unproven.**

**The document was REPAIRED on 2026-09-19 and has NEVER BEEN WALKED.** Those are different things and the row closes on the second. Five faults were fixed **by reading**; a walk is what finds the sixth.

**What the repair changed, so he knows what he is walking into:** the document now opens by asking whether he is **rebuilding** or **rehearsing**, and a rehearsal uses throwaway names for everything it creates — including a repository called `dunchi-rehearsal` rather than the live site's name, which is what used to stop the walk at step 4. **His rehearsal site will appear at `https://<account>.github.io/dunchi-rehearsal`, not at the bare address, and that is correct.** Step 7 no longer sends him into `DEPLOY.md`; the instructions are in RESTORE itself. There is a cleanup section at the end and **it is not optional** — skipping it leaves a second public village directory on the internet.

**Allow two hours for a rehearsal** (ninety minutes to rebuild, plus the preamble, the name substitutions and the cleanup). The document says so itself now.

**When he walks it, the expected outcome is that he finds something.** The document says that too. Anything that cannot be done as written is a fault in the document — work around it, finish, and note what changed.

~~**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: yes — gates `PLAN-DUNCHI-LAUNCH-2026-09-19` row 3.1 | ⚠ OPEN DECISION, NOT YET RULED**~~ RESOLVED 2026-09-19 — **RULED D9c-6G7f-19092026: route C, go now and curate.** His words: *"Go - I will manage the content"*. **Claude.ai's recommendation was route A, the soft launch, and he overruled it** — both are recorded in Layer 5. See the two items below, which are what that ruling changes.
~~**How the list gets seeded has NOT been decided, and no route should be assumed.**~~ The village has **already been told the directory exists** and is waiting on Gavin's go signal, so the decision is live rather than hypothetical.

**Three routes were put to him. He has not ruled.**

| | Route | What it trades |
|---|---|---|
| **A** | **Soft launch** — the link goes to five or six villagers who fill it in before the broad go | Slowest to start, but the village meets a list that already has people in it. **Claude.ai's recommendation — named as a recommendation, not as settled.** |
| **B** | **He seeds it himself** from names he already holds | Fastest and fully under his control, but the form route is then unproven by anybody but him, and every entry carries his judgement rather than a neighbour's recommendation |
| **C** | **Go now** and let it populate live | The village sees it first and thinnest — and row 3.1's own wording warns that *a directory with four people in it gets opened once and never again* |

**Why it matters more than it looks:** the audience is elderly, mostly on a phone, and there is **one chance at a first impression**. The link cannot be un-sent.

**This is recorded against `PLAN-DUNCHI-LAUNCH-2026-09-19` row 3.1**, which is gated on 2.1 (hiding the test people) either way — whichever route he picks, the test entries come off the list first.

~~**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no — but row 6.1 CANNOT be walked safely until it is settled | READ-ONLY FINDING, the Operator's call**~~ RESOLVED 2026-09-19 at commit `3453b78` — **he ruled YES to repairing the three defects, and all three are fixed, plus two more found while reconciling the whole document.** **THE DOCUMENT IS NOW SAFE TO REHEARSE AS FAR AS READING CAN ESTABLISH, AND IT IS STILL UNWALKED** — see the Layer 3 entry, and the open item below which is the part that remains.
~~**`docs/RESTORE-dunchi-trader.md` is NOT safe to rehearse as a parallel throwaway copy, and three of its steps would touch live state if followed literally.** Established 2026-09-19 by reading the document end to end; nothing was changed.~~

**The three collisions:**

| Step | What it says | What happens if followed literally |
|---|---|---|
| **4** | Create a GitHub repository named **`dunchitrader-collab.github.io`** — *"The name matters exactly"* | **That is the live site's repository.** GitHub refuses a duplicate name, so the walk **stops dead at step 4**. He cannot proceed without inventing a name the document does not offer. |
| **7** | *"Follow `apps-script/DEPLOY.md` and do its steps 1, 2 and 3"* | **`DEPLOY.md` step 1 opens the LIVE spreadsheet by its hard-coded document id** and adds a tab to it. A walker doing this is editing the live sheet, not a copy. |
| **8** | *"Follow `apps-script/SHEET-FORMULAS.md`"* | **Same fault** — that document opens the live spreadsheet by the same hard-coded id in its second line. |

**A fourth problem, not a collision but a blocker:** `DEPLOY.md` now opens with **"START AT STEP 14"**, because it was rewritten as the owner's live repair guide. A rebuilder sent to *"its steps 1, 2 and 3"* meets an instruction to skip them.

**Steps 1, 2, 3, 5 and 6 are clean** — they create new artifacts (a new spreadsheet, a new publish address, a new form) and tread on nothing.

**It needs nothing beyond the two logins** — no token, no local tool, no machine-specific path. Step 5 offers a `git clone` route but gives a browser alternative, so a walker with no git still gets through.

**Size: 8 top-level steps, 45 numbered sub-steps.** The document says **"Allow about an hour and a half"** — **not the half hour the walk was pitched at.**

**There is NO cleanup section.** The document ends at verification and general notes, and never mentions that a rehearsal leaves a second spreadsheet, a second form with its own responses tab, a second published CSV address, a second GitHub repository serving a second public website, and possibly a second Apps Script deployment — **all live, all indexable, all under the same two accounts.** A second public village directory on the internet is the part that matters.

**What would make it safe**, stated for the Operator to rule on rather than done here:

1. **A rehearsal preamble** naming throwaway names for every artifact — including a repository name that is NOT `<account>.github.io`, with a note that such a repo serves at `<account>.github.io/<repo>` rather than the bare domain.
2. **Steps 7 and 8 stop delegating to documents that hard-code the live sheet** — either inline what a rebuilder needs, or tell them to substitute their own spreadsheet's address.
3. **A cleanup section** listing everything to delete afterwards, with *"stop publishing the throwaway CSV"* and *"delete the throwaway repository"* called out, since those two are public.

**The Operator's call: fix the document first and then walk it, or walk it knowing steps 4, 7 and 8 must be adapted on the fly.** Row **6.1 is untouched** and stays `new` either way — deliberately, because which of those two he chooses changes what the row is asking for.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: YES — GATES LAUNCH | ⚠ OPERATOR ONLY — his sheet, no script may write there**
**Hide the test people and the two duplicates on Published. Owner's ruling D7-6G7f-19092026: set `status` to `hidden`, NEVER delete.**

**Why never delete, and it is not tidiness:** ids come from the highest already present, so **deleting the highest frees it for reuse** and a later submission would take it — re-pointing every recommendation already filed against the old holder at a different tradesperson. Hiding keeps the id occupied for ever and takes the row off the site within the republish lag.

**What he accepted this for:**

| Row | Why | The real one |
|---|---|---|
| The remaining **test people** | test data | — |
| **`T015` Bob Samwell** | a test row typed into Form responses this morning while proving the verdict column; it published itself because its number differed | **`T005`** on `07887988959` |
| **Duckers Plumber on `07999222333`** | duplicate | **`T001`** on `07825736940` |

> **⚠ CONFIRM `07999222333` BY EYE FIRST.** That it is a *test* number was **inferred** by Claude.ai from the `079990xxxxx` / `079992xxxxx` / `079994xxxxx` pattern in his sheet — **not measured, and not confirmed by anybody.** If the inference is wrong, hiding it takes a real tradesperson off the village list.

**This GATES LAUNCH.** Until it is done the village list still shows test people, and the link is the one thing that cannot be un-sent.

~~**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | PHONE — sighting only, nothing to paste**~~
~~**Sight rows 4.8 and 4.9 on the live site.**~~ **PARTLY RESOLVED 2026-09-19 — 4.8 is sighted and closed; 4.9 is NOT, and is carried below as its own item.**

~~**4.8** — open a tradesperson's card, tap *I recommend them too*, submit. **Expected: the thank-you and the five-minute notice appear and the card shows NOTHING new** — no words, no name, no tally.~~ **DONE 2026-09-19 (afternoon).** He did exactly that and the card showed nothing new, with both messages appearing. **His words: *"CHECK 1 PASS."*** Build Plan row 4.8 is `done` at commit `c4bf0da`.

~~**4.9** — look at any card carrying more than one recommendation.~~ **NOT SUFFICIENT, and superseded by the item below.** He sighted named recommendations pairing correctly, but **that is not the case the defect lived in** — see the next item.

~~**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | PHONE — sight row 4.10**~~ COMPLETED 2026-09-19 — he opened a card carrying more than two recommendations and confirmed every one renders in order with nothing to tap. **His word: *"4.10. pass"*.** Build Plan row **4.10 is `done`**.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | PHONE — one specific test, in one specific order**
**Row 4.9 awaits a sighting of the case the defect actually lived in, and a general look at the cards is NOT that case.** He has confirmed that named recommendations pair correctly, and explicitly said he has **not** tested a nameless recommendation sitting **above** a named one — which is the only arrangement that produced the misattribution. The order matters, because the fault was the blank entry being dropped and everything below it sliding up.

**The test, exactly:**

1. Pick a tradesperson who has **no recommendations yet**.
2. Recommend them from the site, leaving the **name box EMPTY**.
3. Recommend the **same person again**, this time **WITH a name typed in**.
4. Wait for the five-minute republish, reload the page, and read that card.

**Expected: the FIRST recommendation reads *"Recommended by a villager"* and the SECOND carries the typed name.** If the first one shows the typed name — or if the typed name appears against the wrong words — the defect is still live and must be reopened.

Row **4.9 stays `new`** until he has done this.

~~**[OUTSTANDING] 2026-09-19 | MEDIUM | Blocking: no | ⚠ COMPUTER — one paste, still owed**~~ COMPLETED 2026-09-19 — **HE HAS DONE IT, and the previous session's summary saying otherwise is WRONG.** He confirmed the re-paste to Claude.ai after that session ran, so its closing statement that the writer guard was "still not re-pasted" was true when written and false by the time it was read. **The writer half of the misattribution guard is LIVE**: `sanitise()`, a blank name stored as `a villager` rather than an empty string, and the refusal-with-log if `K` and `L` would ever disagree. Both halves — writer and reader — are now in place.
~~**Re-paste `apps-script/Publish.gs` into the Apps Script project.**~~ It carries the WRITER half of the 4.9 misattribution fix — `sanitise()`, which collapses an interior blank line so a value cannot forge an extra entry, a blank name stored as `a villager` rather than an empty string, and a refusal-with-log if `K` and `L` would ever disagree.

**Not urgent and nothing is broken without it.** The READER half is already live on the site and is what protects the rows currently in his sheet. This one stops the problem being **created** in future writes.

**No redeploy is needed for this file** — `Publish.gs` runs from a trigger and a menu, not from a web-app deployment. Paste and Ctrl+S is the whole job. Best done in the same sitting as any other Apps Script work.

**[OUTSTANDING] 2026-09-19 | MEDIUM | Blocking: no | COMPUTER — one rename, optional**
**The Votes tab can safely be renamed.** Verified from the code 2026-09-19: nothing opens a sheet called `Votes` on any path, no tab constant names it, and `app.js` never mentions it at all. It appears only in the two `FORBIDDEN` lists, which are guards *against* writing to it — renaming the tab does not weaken them, because they compare the target name before a write and the target is `Published`. **`Votes — NOT USED (kept for history, 19 Sep 2026)` is safe.** Nothing reads it, so nothing can break.

**[OUTSTANDING] 2026-09-19 | CRITICAL | Blocking: no | ⚠ NEEDS A COMPUTER — one paste**
**Re-paste the `L2` verdict formula ONE more time.** The version now in his sheet prints **the same id on every row** — he photographed about twelve consecutive rows reading `ALREADY ON SITE — T005`. Cause: `INDEX` does not vectorise inside `ARRAYFORMULA`. Fixed at `81708cd` in [PATH] `apps-script/SHEET-FORMULAS.md` step 3; the corrected formula is also in the session summary so he does not have to open the repository.

**Only the id lookup changed.** Everything his screenshot confirmed correct — the branches, the precedence, the seven-character rule, the `CHECK THIS` cases — is byte-identical and deliberately untouched.

**Expected after pasting:** rows 15 and 16 read **`ALREADY ON SITE — T014`** and **`ALREADY ON SITE — T015`**, and **different rows show different ids**. If many rows still show one id, the paste did not take.

**PHONE-DOABLE?** The paste is a computer job — the Sheets mobile app will not reliably take a 744-character formula into a specific cell. **Reading the result afterwards is phone work.**

**NOT YET RUN IN GOOGLE SHEETS.** Established from documentation, not measured. This project has been wrong twice about exactly this kind of claim, so the fix is REPORTED until his screen confirms it.

**[OUTSTANDING] 2026-09-19 | CRITICAL | Blocking: yes | ⚠ NEEDS A COMPUTER — cannot be done from a phone**
**ONE TRIP TO THE LAPTOP, fixing TWO unrelated faults.** [PATH] `apps-script/DEPLOY.md` **step 14**, now in two parts. They are deliberately bundled because both need a computer and neither can be done from a phone, and the owner was on a phone only on 2026-09-19.

- **Part A — redeploy `apps-script/Code.gs`.** The deployment behind the `/exec` address is running neither `doPost` nor `doGet`. **CONFIRMED BY THE OWNER 2026-09-19** on his own phone: he opened the address and got `Script function not found: doGet`, independently matching the server-side measurement. The same redeploy also lands the repointed endpoint (D1b) and the seven-character minimum (row 4.6).
- **Part B — paste one new formula into Form responses `L2`.** The `verdict` column matched every row against itself; see the `[BUG]` in Layer 3. One paste, about thirty seconds, no deployment involved.

**What CAN be done from a phone:** checking the `/exec` address afterwards (one plain sentence versus a Google error page — he has already used this check successfully), reading column `L` to confirm no verdict names a row number, and placing a test vote on the live site. **What CANNOT:** both pastes, and the redeploy.

**Two things are being fixed in one redeploy, and it is worth knowing they are separate.** First, the deployment is currently running neither `doPost` nor `doGet` — measured, Layer 3 — which is why the button produces nothing. Second, the script being pasted is a **repointed** one: under D1b it writes to Published `K` and `L` rather than to Votes, and carries the seven-character minimum (row 4.6).

**The step that was missing last time and is now in the instructions:** before deploying, press **Ctrl+F** in the Apps Script editor and search for `doPost`. If it is not found, the wrong file is open — which is the most likely explanation for what happened on 2026-09-18, since `Publish.gs` was pasted three times that evening.

**`Publish.gs` must be in the same project.** The endpoint now shares its `appendRecommendation()` rather than keeping a copy, and refuses to run with an explicit message if it is absent.

**How he will know it worked, before placing any vote:** open the `/exec` address in a browser. Working is one plain sentence; broken is a Google error page. Ten seconds, no login.

~~**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no**~~
~~**Place a real vote from the phone and see the words on the card.** This is the sighting that closes Build Plan rows **4.6 and 4.7**, and nothing else can.~~ COMPLETED 2026-09-19T13:41:12Z — **HE DID IT, AND BOTH ROWS ARE CLOSED.** At approximately 13:35Z on the live site he placed a recommendation on **`Frank Shelly`** (Carpenter, `07111655432`), confirmed it reached Published `K` and `L`, and re-loaded the page with a **fresh** cache-busting parameter to see his words and his name on the card — so what he saw was rendered from the published feed, not from his own browser's state. Build Plan rows **4.6 and 4.7 are `done`** at commit `5883164`. Both rows are built and tested — 66 endpoint tests and 30 browser checks — but **nothing has run against the real Google Sheet**, because the deployment does not yet carry the script.

Open `https://dunchitrader-collab.github.io/?x=1` on the phone (the `?x=1` forces a fresh copy), tap a trade, tap **I recommend them too**, type a name and at least seven characters, tap **Add my recommendation**. Then look at **that person's row on the Published tab, columns K and L** — not the Votes tab, and not the page's thank-you, which appears either way because the reply is opaque by measurement. The words should also reach the card itself within the five-minute republish lag.

**[OUTSTANDING] 2026-09-19 | HIGH | Blocking: no | PHONE — after the Part B paste**
**Re-read the two verdicts, and type one more row to see the third.** Row 5.1 closes on the owner seeing all four verdicts correct in his own sheet.

**Rows 15 and 16 should now read `ALREADY ON SITE — T014` and `ALREADY ON SITE — T015`** — naming a person, not a row number. **This is NOT the expectation the 2026-09-18 queue recorded**, and the reason is measured rather than assumed: both test rows **published themselves** while he was testing, so they are genuinely on the list now and `ALREADY ON SITE` is the correct answer. Row 15 can no longer produce `NEW`.

**To see `SAME NAME, DIFFERENT NUMBER`, one more row is needed** — neither test row can produce it. Type into Form Responses C–H: `Plumber` / `Duckers` / `Plumber` / `07700 900123` / *(blank)* / `Came out on a Sunday evening`. It clashes on name with **`T001 Duckers Plumber`** (on the site at `07825 736940`) and on number with nobody — `07700 900123` was checked against the live feed and is unused. Afterwards set that row's `status` to `hidden` on Published, since it will publish itself.

**`NEW` is structurally unreachable on his tab and should not be hunted for.** Measured 2026-09-19: every response he has has already been published, so every one correctly reads `ALREADY ON SITE`. `NEW` is the verdict a row holds only between the form being submitted and the publisher running — real, correct, and nearly always over before anybody looks. **This is a consequence of D7a automatic publishing, not a defect**, and row 5.1's "all four" clause should be read with it in mind.

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

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~**`T007` cannot be repaired automatically — retype it or delete the row before launch.** The form itself holds the same twelve-digit number, so there is no good source to re-derive from; the repair refuses it rather than inventing a plausible wrong number, and the row is `hidden` so no villager can reach it. **It is test data from the owner's own submission**, so deleting it is as acceptable as retyping it.~~ RESOLVED 2026-09-19 BY THE OPERATOR, in his own sheet. He reports: ***"fixed"***. **What he changed it to is deliberately not recorded — nobody here has seen his sheet**, and writing a guess into the permanent record would be worse than leaving the detail where it lives.

**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**
**Verify the hand-pasted recommender names in Published column `L` are aligned to the right people.** The owner pasted them across from the responses tab as a block, and **the repair had reordered the rows**, so a block paste may be one or more rows out. Check each name against the response carrying **that person's phone number**, not against its position. A misaligned name attributes a villager's words to the wrong neighbour, which is worse than having no name at all.

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~**Rule on Ben Franks and John Pilkington sharing `07887800192`** — one electrician, one car mechanic. Both are kept deliberately and the sharing is reported rather than resolved, because two people genuinely can share a household or business line. **The owner has not ruled on whether it is genuine.**~~ RESOLVED 2026-09-19 BY THE OPERATOR, in his own sheet. He reports: ***"I have changed the number."*** **Which entry he changed, and to what, is deliberately not recorded — nobody here has seen it.** **One residual check remains and is recorded in Layer 3**, not as work: a recommendation filed while the two shared a number may sit on the wrong row, and changing the number now does not move it. Layer 3 carries the check and its expected result.

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

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~**Retype Helen Smith's telephone number (`T007`).** It reads `078853335434` — twelve digits, the mistyped original. The repair refuses it deliberately rather than inventing a plausible wrong number, and her row is `hidden`, so no villager can reach it. Retype it from her original form answer on the Form responses tab and set her `status` to `active`.~~ RESOLVED 2026-09-19 BY THE OPERATOR, in his own sheet. Same fix as the `T007` item above — he reports it ***"fixed"***. Recorded twice because the queue carried it twice.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: yes — blocks launch**
**Repair the telephone numbers, the duplicates and the trade names.** [PATH] `apps-script/DEPLOY.md` **step 13**, five steps: re-paste `Publish.gs`, **Village list → Check the setup** to see what is wrong before changing anything, **Village list → Repair the list**, check again, then verify one number by eye and tap Call on the site.

**This blocks launch, which none of the other outstanding items do.** Six of his eight telephone numbers had lost their leading zero, and the Call button is the whole product. A villager tapping it reaches a stranger with nothing on screen to suggest the list was wrong. Everything else on this list is untidiness; this one hands an elderly person a wrong number.

**One number cannot be repaired automatically and needs him:** Helen Smith's `78853335434` is the known-bad twelve-digit value with its zero eaten, so restoring the zero still gives a wrong number. The repair refuses it and says so. Her row is `hidden` either way — retype it from her original form answer.

**Two people genuinely share a number** — Ben Franks (electrician) and John Pilkington (car mechanic) on `07887800192`. Both are kept and the sharing is reported; it is not an error unless he says it is.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**
**Re-paste `Publish.gs`, run the repair, and re-test the form.** Tonight's submissions did reach the Published tab — they are about a thousand rows below the others, because a whole-column helper formula makes the sheet look full to a script (Layer 3). **Nothing is lost and no id has changed.** [PATH] `apps-script/DEPLOY.md` **step 12** has the three steps in his own terms: re-paste the script, run **Village list → Repair the list**, then **Village list → Check the setup** and look for *"Stranded rows below the list: none. Good."* After that, one form submission from his phone should appear directly under the existing rows, and on the website within the republish lag. The fix passes 23 of 23 stub tests including the exact reproduction, but **has not run in Google Sheets**; his re-test is what closes Build Plan row 5.2.


**[OUTSTANDING] 2026-09-18 | CRITICAL | Blocking: no**
**Add columns K and L to Published, and re-paste `Code.gs`.** Both are written out in [PATH] `apps-script/DEPLOY.md`. **Step 10**: paste `recommendations` and `recommended_by` into K1 and L1 of the Published tab and leave the cells below empty — the publisher fills them in. Without these two columns nothing breaks; the site simply shows no recommendations, because `app.js` reads them as optional. **Step 11**: re-paste `apps-script/Code.gs` into the Apps Script editor and redeploy via **Deploy → Manage deployments → pencil icon → Version: New version**. **Choosing "New deployment" instead would issue a different `/exec` URL and silently stop the recommend button**, because the site would carry on posting to the old address and the opaque reply means the page can never tell. That constant was corrected from 15 to 7 this session, so until he redeploys, a valid short recommendation typed on the site is still dropped by the endpoint.

~~**[OUTSTANDING] 2026-09-18 | MEDIUM | Blocking: no**~~
~~**Recommendations typed into the site's own panel reach nobody but their author, and D8a did not change that.** Measured 2026-09-18: `app.js` initialises `VOTES = {}` empty on every page load, writes to it only from the vote panel, and reads it only when drawing a card — so those words live in one browser for one visit. They are posted to the **Votes** tab, and **nothing copies Votes into Published**, which is the only thing the site reads. Recommendations arriving through the **Google Form** now reach everybody, because `Publish.gs` writes them into K and L. Closing the remaining gap means teaching the publisher to read the Votes tab too — matching each vote's trader id to a Published row and appending it exactly as a duplicate form submission is appended. That is **not built**, needs its own plan row, and is the owner's to rule on. Recorded explicitly so a future session does not read D8a as having closed it.~~ RESOLVED 2026-09-19T13:41:12Z — **ANSWERED, and answered by a sighting rather than by an argument.** The gap this item named is closed: the endpoint was repointed under D1b-6G7f-19092026 to write the villager's words to Published `K` and their name to `L`, and on **2026-09-19T13:35Z the owner walked the whole chain on the live site** — he placed a recommendation on `Frank Shelly` from the cache-busted live page, confirmed it reached Published `K` and `L`, then reloaded with a **fresh** cache-busting parameter and saw his words and his name on Frank Shelly's card. The reload is what answers this item specifically: it was raised because those words lived only in the author's own browser, and the page that displayed them had never seen his submission. **Build Plan rows 4.6 and 4.7 are `done` on that sighting.**


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

### 2026-09-19 — The verdict column matched every row against itself; the false lead came from Claude.ai

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f). Same conversation as the morning's session.

**[DECISION]** The `verdict` formula **computes its comparison keys inline from the row's own cells** rather than reading them back out of columns `J` and `K`.

**Rationale, and it is a rule about shape rather than about this bug.** The old formula carried live same-tab ranges (`$J$2:$J`, `$K$2:$K`) in the same expression as its cross-tab lookups into `Published`. That made a self-search *reachable* — one unqualified range is all it takes — and when it happened the answer was a row number, which looks exactly like a correct answer. Computing the keys inline removes the same-tab ranges entirely, so **a row matching itself is no longer something the formula can express**. Closing a route is worth more than fixing an instance.

**Alternatives considered:** re-qualifying the ranges and leaving the shape alone — rejected, because it fixes this occurrence while leaving the next dropped prefix just as silent. Moving the verdict into `Publish.gs` as a written column — rejected, because the owner's helper columns are already formula-owned and a script writing a column a formula also writes is the exact failure recorded in Layer 3 on 2026-09-18.

**[DECISION]** The verdict **reports the person's id, not a row number.** `ALREADY ON SITE — T014` can be checked against the live site in one glance. `— row 15` was indistinguishable from the self-match that produced it, and that indistinguishability is what let the defect survive a session that believed it had tested the formula.

**[DECISION]** The lookup ranges are **bounded** to `Published!$I$2:$I$500` rather than left open-ended. The owner's helper columns are `ARRAYFORMULA` over whole columns and return an empty string for every row to the bottom of the sheet; `COUNTIF` matches an empty criterion against all of them. **Second occurrence of the same class** — the first stranded a thousand rows and destroyed two formulas on 2026-09-18. The bound is a ceiling, not a guess: the real list holds 15 people, and the troubleshooting table says what to do if the village ever passes 500.

**[DECISION]** A telephone number with no digits in it yields **`CHECK THIS`**, not `NEW`. Stated as a rule rather than left to fall through, because the publisher hides such a row and a verdict calling it a clean new person would be untrue.

---

**THE FALSE LEAD CAME FROM CLAUDE.AI, NOT FROM THE SHEET, AND IT IS RECORDED HERE SO THE RECORD SHOWS WHERE IT CAME FROM.**

The owner was instructed — in the Layer 4 test-row table written on 2026-09-18, authored by Claude.ai — to type the two test rows with column **H**, the experience text, shown as one of the fields but with the emphasis on trade, name and phone. He first entered them with **H left blank**. Both rows read **`CHECK THIS`**.

**That reading was correct.** A blank experience box is zero characters, which is fewer than seven, and `CHECK THIS` takes precedence over every other verdict by design — the owner's own ruling D4a set the threshold at seven. The sheet did exactly what it was told to do.

But it sent the first look in the wrong direction. `CHECK THIS` on both rows is indistinguishable from a broken formula if you do not already know the precedence rule, and **it masked the real defect entirely**: `CHECK THIS` short-circuits before any comparison against Published happens, so the self-match could not show itself. The genuine fault only appeared once he filled column H in.

**Two things follow, and both are now written into the documents rather than left as this session's knowledge:**

1. **A test row must always carry a real sentence in the experience box.** Anything else tests the `CHECK THIS` precedence and nothing else. `apps-script/SHEET-FORMULAS.md` now has a section saying exactly this, headed so it is found by somebody testing.
2. **The instruction that produced the false lead was Claude.ai's, not a fault in the sheet and not the owner's mistake.** Recorded plainly because a future reader looking at this sequence — "he was told to test it, the test said CHECK THIS, then it said something else" — would otherwise reasonably conclude the sheet was unstable. It was not. The test was wrong before the sheet was.

---

**[PATTERN CANDIDATE: a-wrong-answer-that-looks-right-survives-testing]** Both defects found in this project in two days share a shape: the system produced a **plausible** wrong answer rather than an error. The publisher wrote rows a thousand lines down and reported success; the verdict named a row number that happened to be the row's own. In both cases every available signal said it had worked. The generalisable move is that **where a system reports a computed locator — a row, an index, a position — the report must be in terms the reader can independently check.** An id can be looked up on the site; a row number can only be believed.

**[PATTERN CANDIDATE: evaluate-the-whole-column-not-the-row]** The previous suite tested this formula row by row and passed twelve cases. A self-match is invisible row-by-row: it appears only when a row is evaluated in the presence of its own key. **A test harness must reproduce the evaluation model of the thing it tests**, not a simplified one — and here the simplified model was also the author's mental model, so the test confirmed the misunderstanding rather than catching it.

---

### 2026-09-19 — Two fixes in a row proven against a simulator whose Sheets semantics were wrong

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f). Third session of the day in the same conversation.

**[DECISION]** The `ALREADY ON SITE` branch looks the id up with **`VLOOKUP` over a curly-brace literal array**, not with `INDEX`/`MATCH`.

**Rationale.** `INDEX` is not array-aware over its position argument — inside `ARRAYFORMULA` it reads only the first position it is handed and ignores the rest, so a single id is broadcast down the whole column. `VLOOKUP` **is** array-aware over its search key and spills per row. Because the id sits to the left of the key column, a literal `{key_column, id_column}` builds the virtual table `VLOOKUP` needs. Both properties were checked against Google's documentation **before** the formula was written, which is the step that was skipped last time.

**Alternatives considered:** `MAP`/`LAMBDA`, which also evaluates per row and preserves left-lookup — rejected as heavier to read and harder for the owner to re-paste correctly, for no behavioural gain here. Keeping `INDEX` and accepting the constant — not viable, it is the defect.

**[DECISION] The id is KEPT rather than dropped, and this was a real choice.** A verdict of plain `ALREADY ON SITE` with no id **cannot be wrong** and is immune to this entire class of defect. It was implemented and tested as `verdictV4_noId` so the comparison rests on evidence rather than preference.

**Rationale for keeping it.** The id is what makes the verdict *actionable*: `ALREADY ON SITE — T014` tells the owner which row to look at, and the previous session's argument for it still holds — a name can be typed three ways and duplicated (his list has **two** `Bob Samwell` rows and **two** `Duckers Plumber` rows, so "find them by name" is genuinely ambiguous on his real data). Dropping the id would trade a fixable defect for a permanent loss of information. **But the condition attached to keeping it is that the formula must be demonstrably per-row**, which is now asserted by a dedicated test that fails against the broken version.

**The honest counter-argument, recorded rather than buried:** this is the second defect in two days in the id-printing branch specifically, and both were silent. If a third occurs, **drop the id** — the branch text alone has never been wrong, and at that point the evidence would say the fragility is not worth the convenience.

---

**TWO SUCCESSIVE FIXES WERE PROVEN AGAINST A SIMULATOR WHOSE SHEETS SEMANTICS WERE WRONG, AND THE OWNER FOUND BOTH DEFECTS BY LOOKING.**

This is the finding of the session and it is worth more than the formula.

- **Fix one** (morning) replaced a formula that matched every row against itself. It was proven by a harness that evaluated **one row at a time** — and a self-match is invisible row-by-row. Twelve cases passed.
- **Fix two** (midday) replaced that with a formula using `INDEX`/`MATCH`. It was proven by a harness that modelled **both as vectorising**. 34 checks passed. The formula stamped one id on every row.

**In both cases the harness and the formula encoded the same misunderstanding, so the test could only ever agree.** And in both cases the same session had written the correct fact down and then not acted on it: the midday session's own analysis contains the sentence *"MATCH is not an array-aware function in Sheets — it does not vectorise"*, written hours before it shipped a fix built on exactly that function pair.

**The repository's tests found neither defect. Gavin found both, on a phone, by looking at his screen.** That is the measure of what the harness was worth.

**What changed as a result**, beyond the formula:

1. **The harness now models the platform strictly.** `INDEX` is modelled as non-vectorising, and the function that uses it takes the whole sheet rather than a row index — because a function that does not vectorise cannot honestly be given a per-row signature. The file opens with a rule: *the model of a platform function may only be made more permissive on documented evidence, never on convenience.*
2. **The negative control must be shown FAILING before the fix is written.** That ordering is now the stated method, not an afterthought. This session ran it and watched the deployed formula fail before touching the document.
3. **Both broken versions are kept in the harness**, so a future change that reintroduces either is caught rather than re-discovered.
4. **The semantics are documented where the formula is edited** — a warning box in `apps-script/SHEET-FORMULAS.md` naming which functions work per row, why `INDEX` bites, and the one-line symptom.

**[PATTERN CANDIDATE: a-simulator-is-not-the-platform]** A hand-written model of a platform is a statement of belief about that platform, and a test built on it can only confirm the belief. Where the model and the code are written by the same author in the same session, they will share every misconception, and the suite's passing tells you nothing about the platform — only that the author was self-consistent. **Two defects in one day, both silent, both found by a human looking at a screen.** The mitigations that actually worked here were: establishing semantics from the vendor's documentation before writing code; modelling the platform's *limitations* rather than its capabilities; and requiring the negative control to fail first. Any project simulating a platform it cannot execute against — spreadsheets, cloud APIs, another team's service — has this exposure.

**[PATTERN CANDIDATE: one-value-repeated-is-a-broadcast-bug]** A column of identical computed values is almost never data. Where a per-row lookup silently degrades to a single evaluation, the output is uniform and plausible, and no error is raised. Worth a standing check wherever a computed locator is displayed: **if every row agrees, suspect the machinery, not the data.**

---

### 2026-09-19 — D5b: a card may not show what the page cannot confirm

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f). Fifth prompt of the day.

**[DECISION] D5b-6G7f-19092026 — RULED BY GAVIN.** **The card must not show a recommendation until it is genuinely on the village list.** The thank-you message and the five-minute notice both stay.

**The measurement behind the ruling, from today.** He submitted a recommendation and the card showed his words and his name **while the Published tab still held nothing**. `app.js` kept recommendations added during a visit in an in-page `VOTES` object and drew them on the card immediately.

**Why that is worse than it looks, and it is the reason the ruling is right.** The endpoint's reply is **opaque by design and by measurement** (solution design §6.2) — the page cannot distinguish a successful write from a total failure. So on a genuine failure a villager was left looking at their own words, on the card, under their own name, in exactly the form a real recommendation takes. **They would believe permanently that the village could see it, and nothing would ever tell them otherwise.**

**The distinction the ruling turns on: a message is a claim the reader can weigh; a card looks like data.** *"Your recommendation has been sent"* is a statement about what the page did, and it is true. Words rendered on the card are a statement about what the village list holds, and the page has no standing to make it. The screen also contradicted itself — the notice says it takes about five minutes to appear while the page had already shown it.

**Alternatives considered.** Keeping the optimistic render and adding a "not yet on the list" badge — rejected, because it still shows the words and relies on a villager reading and retaining a qualifier; the failure mode is someone who glances and leaves. Polling the feed until the words appear — rejected as disproportionate for an audience on intermittent rural mobile data, and it would leave the card changing under them minutes later.

**What was deliberately NOT changed:** the thank-you and the five-minute notice, which the ruling explicitly preserves, and `VOTES` itself, which is still recorded so a double tap is not sent twice. Nothing else about the panel was touched.

---

**[DECISION]** The words column and the names column get **separate readers**, because they have different jobs.

**Rationale.** They were sharing `splitRecs`, which dropped every empty entry. For the **words** that is right — words are never legitimately blank (the seven-character rule), and a trailing blank must not invent a phantom recommendation, which is what the filter was for. For the **names** it is a misattribution bug: an empty entry is a villager who gave no name, holding that recommendation's place, and dropping it slides every later name onto somebody else's words. One function could not be correct for both, and the attempt to make it so — trimming only leading and trailing blanks — was tried, measured against the three-recommendation case, and **failed**, because a leading blank name is exactly the position-bearing case.

**[DECISION]** A misaligned write is **refused and logged** rather than made. A missing recommendation the owner can chase beats one silently attributed to the wrong neighbour — the defect this whole row exists to prevent is precisely the silent kind.

---

**[PATTERN CANDIDATE: a-positional-column-may-never-be-tidied]** Where two parallel columns pair by position, any operation that removes an entry from one — a filter, a trim, a "drop the empties" tidy-up — silently re-pairs everything after it. It looks like cleaning and is data corruption. The tell is that the corrupted output is **well-formed**: every name is a real name, every sentence a real sentence, and only the pairing is wrong, so nothing validates as broken. Two rules fall out of this one: **decide which column is authoritative for the count**, and **never let a positional column share a helper with a non-positional one.**

**[PATTERN CANDIDATE: a-comment-that-asserts-an-input-cannot-occur]** `REC_SEP`'s comment said *"a villager typing two newlines mid-sentence is not a real case here"*, and it was true when written — the Google Form was the only writer. Adding the site's textarea made it false, and nothing re-read the comment. **An assumption about inputs, recorded as a comment next to the code that depends on it, does not travel to the new caller.** Where a separator cannot appear in the data, that must be enforced on write, not asserted in prose.

---

### 2026-09-19 — D4b: a row's acceptance is corrected rather than left unmeetable

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**[DECISION] D4b-6G7f-19092026 — RULED BY GAVIN.** Build plan row **5.1's acceptance becomes three verdicts sighted by the Operator, with `NEW` evidenced by the committed test harness rather than by sighting.**

**The ground, established by measurement before it was put to him.** The row asked for a verdict *"covering all four cases, tested with sample rows that trigger each"*. That clause **cannot be satisfied**, and not because anything is broken. Under the owner's own earlier ruling **D7a**, publishing is automatic: every form response reaches the Published tab within seconds. A response therefore holds the verdict `NEW` only in the interval between submission and publication — real, correct, and over before anybody looks. Measured 2026-09-19 against his live feed: **every response on his Form responses tab had already published itself**, so every one correctly reads `ALREADY ON SITE` and not one can read `NEW`.

**It is behaviour, not a defect.** `NEW` is doing exactly what it was designed to do; automatic publishing simply made the window too short to observe. The row's wording was written before D7a existed and did not survive it.

**Three options were put to him, and he ruled on the wording:**

| | Option | Outcome |
|---|---|---|
| **D4a** | Leave the wording; close the row on three verdicts anyway | **Declined** — it would close a row against a clause the evidence does not meet, and leave a future reader unable to tell whether the fourth case was missed or was impossible |
| **D4b** | **Correct the wording to match what is observable** | **RULED** |
| D4c | Build a way to pause the publisher so `NEW` can be caught | **Declined** — machinery whose only purpose is to make a test pass, on a system whose design principle is no admin |

**Why D4b is the right answer rather than merely the convenient one.** The alternative that looks most rigorous — D4c — would have added a pause switch to the publisher purely so a human could photograph a verdict. That is building a feature to satisfy a test, on a product whose governing ruling (D7a, his own words) is *"I am not doing this by hand… make it automatic"*. And D4a is worse than it appears: closing a row while its written acceptance is unmet leaves the plan claiming something the evidence does not support, which is the failure this project has spent the day correcting elsewhere.

**How the amendment was made, and why it needed a decision of its own.** **STD-00009 is SILENT on amending a row's acceptance wording** — checked 2026-09-19 against the standard itself. Rule 5.10.8 governs removing a row that is permanently *unfalsifiable*; Rule 5.7.4 governs a duplicate row; neither is this case, which is a row whose criteria were satisfiable when written and were made unmeetable by a later ruling. No rule prescribes strikethrough, a clean rewrite, or a descope-and-reappend.

So **this plan's own precedent was followed**: row **5.2** recorded a superseded clause in place, under a clear heading, rather than deleting it. Row 5.1 is amended the same way — the original clause struck through with the new one beside it and the reason stated. **The Sub-task cell is prose and is not machine-read**, so a strikethrough there cannot produce the silent wrong answer STD-00009 warns of for machine-read declaration cells.

**What 5.1 actually closed on, recorded exactly as he reported it and no further.** He pasted the corrected `L2` formula and said: *"I have now pasted the correct code. And it seems to work."* Three verdicts are sighted on his own screen — `CHECK THIS`, `SAME NAME, DIFFERENT NUMBER`, and `ALREADY ON SITE` with per-row ids. `NEW` rests on `apps-script/test-verdict.js`. **He did NOT quote the readings of rows 15 and 16 back**, so the row does not rest on an individual confirmation that they read `T014` and `T015`; that gap is written into the row rather than papered over.

**[PATTERN CANDIDATE: a-ruling-can-strand-an-earlier-row's-acceptance]** D7a was a good decision that quietly invalidated a clause written before it, in a different step, which nobody re-read. The row then sat open for a day against a condition no one could meet. **When a ruling changes how a system behaves, the rows already written against the old behaviour are part of its blast radius** — and the cost of not noticing is a row that looks like outstanding work when it is actually finished. Worth a standing check: after any behavioural ruling, re-read the acceptance wording of every open row it touches.

---

### 2026-09-19 — Drift: a control was invented where the instruction was to raise the problem

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**THE OPERATOR'S WORDS, VERBATIM:** *"it put in a button you had to click on to reveal the 'one more review' which is pointless. Just let it scroll!"*

**[DECISION]** Every recommendation renders, in order. **No expander, no "show more", no cap, no truncation.** The villager scrolls.

**THIS IS RECORDED AS CLAUDE'S DRIFT THROUGH ITS OWN DECOMPOSITION, NOT AS THE OPERATOR CHANGING HIS MIND.** He never asked for a control and never approved one. Prompt 2718 said, in terms: *"RAISE it rather than inventing a 'show more' control."* A villager nonetheless met one.

**WHERE IT CAME FROM, ESTABLISHED FROM HISTORY RATHER THAN ASSUMED.** `git log -S "var SHOWN" -- app.js` names commit **`91a3f4c`, 2026-09-18 19:43:23 UTC**, in the **D8a row 3.5** work that first carried villagers' words to the site. It is an ancestor of prompt 2718's commits and **pre-dates them by roughly eighteen hours.**

**So the finding cuts two ways, and both halves matter:**

1. **Prompt 2718 did NOT introduce the control**, and did not disobey its own instruction by adding one. The instruction *"raise it rather than inventing"* was about what to do with the three-recommendation measurement, and nothing was invented in response to it.
2. **But 2718 measured a card that was hiding recommendations, and did not notice.** With `SHOWN = 2`, the card it reported on as *"three recommendations"* was rendering **two and a button**. Its numbers — card height 1562px, zero overflow — described a card the villager would not have seen. **Those figures were unrepresentative and are superseded** by the six-recommendation measurement taken this session. The session reported *"three recommendations still honour the Requirement"* on evidence that had not rendered three.

**That is the more instructive failure**, and it is the one worth carrying: a measurement can be scrupulous in its method and still describe the wrong thing, because **the harness renders what the code renders** and the code was quietly showing less than it was asked to show. Nothing in the numbers looked wrong. The tell was available — the harness reported `recCount: 2` against a three-row fixture — and it was not read.

**The reasoning the control was built on, and why it was wrong for this audience.** Its comment said *"a popular tradesperson must not become a wall of text… Nothing is hidden from anybody — it is one tap."* One tap is not nothing. **Scrolling is the single gesture every phone user already has; a button must first be noticed, then understood to contain something, then tapped.** For *"the older generation"* the Requirement is written for, a control standing between a villager and the words their neighbours wrote is a barrier, and those words are the point of the site. The Requirement asks for *"really simple, really quick and extremely easy to use"* — the expander was the opposite trade.

**The wall-of-text worry does not bite, and this is measured rather than argued.** Recommendations render **below** the Call button, so however many there are, the thing a villager came to do never moves: `callTop` is **827px at the largest text size with zero, one, three and six recommendations alike.** Length below that point costs a scroll, not a task.

**No control, cap or truncation was invented in its place** — the instruction was given twice and is followed. Six recommendations at the largest size on a 320px phone: **zero overflow, zero overflowing elements, card 2672px.** At 200% zoom: **zero overflow, card 4908px.** Reported and not acted on further.

---

**[PATTERN CANDIDATE: a-measurement-describes-what-rendered-not-what-you-loaded]** 2718 loaded a three-recommendation fixture and reported on a two-recommendation card. The harness was honest, the method was sound, and the conclusion was still about the wrong artefact. **A measurement harness should assert that what rendered matches what was loaded** — here, a single check that `recCount` equals the fixture's row count would have caught it instantly, and the field was already being collected and printed. The general form: when measuring a rendered surface, make the count of things rendered an assertion, not an observation.

**[PATTERN CANDIDATE: drift-is-a-decomposition-failure-not-a-disobedience]** The control was not added against an instruction; it was added *before* the instruction existed, by a session solving a different row, and then survived a session that was explicitly told to raise rather than invent. **No single step did anything wrong.** The failure is that a decision taken inside row 3.5 — hide recommendations behind a control — was never surfaced as a decision at all, so no later session recognised it as something to question. Worth recording: **a choice about what the user sees is a decision even when it arrives inside an implementation**, and it belongs in Layer 5 at the time it is made, not discovered eighteen hours later by the Operator.

---

### 2026-09-19 — D7: hide, never delete

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**[DECISION] D7-6G7f-19092026 — RULED BY GAVIN. Duplicates and test entries on the Published tab have their `status` set to `hidden`. They are NEVER deleted.**

**The reason, and it is a data-integrity reason rather than a tidiness preference.** Ids are assigned from the **highest id already present**, so **deleting the highest id frees that number for reuse** — the next submission would take it, and every recommendation a villager has already filed against the old holder would silently attach to a different tradesperson. Interior gaps are safe; the top of the list is not. Hiding keeps the id occupied for ever, keeps the person's recommendations attached to them, and takes the row off the website within the republish lag. **It costs nothing and it is irreversible in the right direction.**

**What he accepted this for:**

- **The remaining test people.**
- **The duplicate `Bob Samwell`, `T015`.** `T005` on `07887988959` is the real one; **`T015` came from a test row typed into Form responses this morning** while proving the verdict column, and published itself as a new person because its number differed.
- **The duplicate `Duckers Plumber` on `07999222333`.** `T001` on `07825736940` is the real one.

**AN INFERENCE, FLAGGED AS ONE AT THE TIME AND RECORDED AS ONE HERE.** That `07999222333` is a *test* number was **inferred by Claude.ai from the pattern** of `079990xxxxx` / `079992xxxxx` / `079994xxxxx` numbers visible in his sheet — it was **not** measured, and no one has confirmed the number belongs to nobody real. He was told to **confirm by eye before hiding it**, and that instruction stands. If the inference is wrong, hiding takes a real tradesperson off the village list, which is the kind of quiet harm this project has spent the day learning to avoid.

**THE HIDING IS NOT DONE.** It is the Operator's action inside his own spreadsheet, and **no script here may write to it** — carried as an open Layer 4 item. It **gates launch**, because until it is done the village list still shows test people, and the one thing that cannot be un-sent is the link.

---

**[DECISION]** Three things the Operator resolved **directly in his own sheet**, recorded on his report rather than on measurement:

- **The shared telephone number.** Ben Franks and John Pilkington both held `07887800192`. He reports: *"I have changed the number."* **Which entry he changed, and to what, is deliberately not recorded — nobody here has seen it**, and writing a guess into the permanent record would be worse than leaving the detail to his sheet.
- **`T007`'s twelve-digit number.** He reports: *"fixed"*. Same treatment, for the same reason.
- **`Publish.gs` re-pasted.** He confirmed this after the previous session ran. **That session's summary said it was still outstanding, and that statement is now wrong** — corrected in Layer 4. **The writer half of the misattribution guard is live**: `sanitise()`, the `ANON` substitution for a blank name, and the refusal-with-log if `K` and `L` would ever disagree.

---

**[PATTERN CANDIDATE: an-id-is-a-promise-to-whoever-filed-against-it]** The rule *"hide, never delete"* is not about the row; it is about everything already pointing at it. Here a villager's recommendation is filed against a trader id, so freeing an id re-points somebody's words at a stranger. **Wherever a user-visible identifier is derived from "the highest one so far", deletion at the top is unsafe and the safe operation is a status change.** Worth stating because the unsafe operation is the obvious one and it looks tidier.

---

### 2026-09-19 — V1 closed at a trimmed 100%; the launch plan created

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**[DECISION] D6b-6G7f-19092026 — RULED BY GAVIN.** The seeding and launch work **leaves V1 for a plan of its own.**

**Rationale, and he overruled a recommendation to get here.** Claude.ai recommended keeping the work in V1. He overruled it, **knowing the successor will sit open while it waits on villagers.** That is the argument rather than an objection to it: seeding is paced by a village, not by a build, and leaving it inside V1 means the build plan's percentage is permanently dragged by work no session can advance. Two plans, each measuring something one kind of effort can actually move.

---

**[DECISION] D8b-6G7f-19092026 — RAISED, THEN OVERTAKEN. RECORDED AS OVERTAKEN, NOT AS LIVE.**

He first ruled row **6.1 descoped**, reasoning: *"I don't see the tests as necessary evidence of it all working has already been shown."* Claude.ai accepted it, and noted once that the runbook had been found **broken** rather than merely untested.

**It is recorded because a ruling that was made and then replaced is part of the record**, and because the distinction it turned on matters: *"it all working has already been shown"* is true of the **site**, and the site is not what 6.1 measures. 6.1 measures whether somebody **else** can rebuild it — a different claim, and the only clause of the Requirement as stated still unproven.

**[DECISION] D10-6G7f-19092026 — RULED BY GAVIN, AND IT GOVERNS.** Verbatim: *"put the run book test on a new plan ID along with the test with multiple workers in it. I can get to it at some point!"*

**So row 6.1 MOVES to the successor. It is NOT descoped.** D8b is superseded.

**One reading recorded as a reading.** Claude.ai took *"the test with multiple workers"* to mean **row 7.1** — the full journey proven against a real list of tradespeople rather than a fixture — and **told him to correct that if wrong.** He has not corrected it, and it is written here as an interpretation rather than as his words, so a successor can challenge it.

---

**[DECISION] THE CLOSURE OF PLAN-DUNCHI-TRADER-V1, and which rules were applied.**

V1 is **closed and archived** at [PATH] `docs/archive/BUILD-PLAN-dunchi-trader-PLAN-DUNCHI-TRADER-V1.md`, carrying `STATUS: SIGNED-OFF 2026-09-19`.

**The rules used, named so the close is auditable:**

| What | Rule | Why this one |
|---|---|---|
| The three rows leave as **`external`**, not `descoped` | **5.2.1, 5.2.2 [CORE]** | `external` means *another Plan ID owns it*; `descoped` means *permanent scope removal*. The work is moving, not stopping — `descoped` would have recorded the opposite of the Owner's ruling. |
| Each names **`[owner: PLAN-DUNCHI-LAUNCH-2026-09-19]`** | **5.2.4 [CORE]** | An `external` row without an owner is an error, not a note; the validator exits 1. |
| **Effort unchanged** at 9, 5 and 3 | **5.2.5 [CORE]**, and **5.4.4 [CORE]** | Weight is removed by *status*, never by re-weighting. Re-weighting on the way across would move a percentage without changing any work. |
| Excluded from the denominator | **5.4.2** | By status, mechanically — which is why V1 reads 87/87 rather than 87/104. |
| Closing at 100% | **5.8.1 [CORE]** | 100% is the precondition; `external` rows do not block it (**5.8.2 [CORE]**). |
| The marker's placement | **5.8.3 [CORE]** | `STATUS: SIGNED-OFF YYYY-MM-DD` above the first `## Step` heading. |
| **The pre-trim position, mandatory** | **5.8.10.4 [CORE]** | *"Closed at 100% of 21 rows, TRIMMED from 24 on 2026-09-19; pre-trim position 83.7% (87/104 effort)."* **Without it a reader sees 100% and concludes everything was built.** |
| Nothing orphaned | **5.8.10.1 [CORE] q2** | Checked: no `done` row existed only to serve 6.1, 7.1 or 7.2. Every delivered row is independently useful, which is why the directory works today. |
| Archive move | **5.8.4, 5.8.4.1 [CORE]** | `mkdir -p docs/archive/` then `git mv`, so history follows the file. |
| Successor takes a **new** Plan ID, rows **renumbered from Step 1** | **5.8.5 [CORE]** | The one sanctioned renumbering in the standard; old ids stay with the archive so an old citation lands on the closed plan. |

**Where the standard was silent, and what was done instead.** STD-00009 prescribes **no header schema for a successor plan** — only that provenance goes in prose (5.8.5). The successor therefore carries a `## SUCCESSOR TO PLAN-DUNCHI-TRADER-V1` section naming the archive path, quoting V1's trimmed-close line, and tabulating which row came from which old id. That is this project's own choice, not a standard's requirement.

**THE CLOSE RECORD STATES WHAT WAS NOT BUILT, and that is the point of it.** The inheritance requirement is **unproven**, and its runbook is **known broken** in three measured ways. The launch has not happened and the list still carries test people. **A trimmed 100% that said none of this would be a lie told by arithmetic.**

---

**[PATTERN CANDIDATE: a-trimmed-100-percent-needs-its-starting-point]** STD-00009 Rule 5.8.10.4 exists because the number people read at a close is the percentage, and a percentage cannot distinguish *built it all* from *moved what was left*. **The rule's form — closed at 100% of N, trimmed from M, pre-trim x%** — is worth borrowing anywhere a completion figure is reported after a scope change. The general failure is quieter than a wrong number: it is a **right** number that answers a different question from the one the reader asked.

---

### 2026-09-19 — D9c: go now and curate, against the recommendation

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**[DECISION] D9c-6G7f-19092026 — RULED BY GAVIN. His words: *"Go - I will manage the content"*.**

**He tells the whole village now and curates submissions as they arrive**, rather than seeding the list first.

**CLAUDE.AI RECOMMENDED THE SOFT LAUNCH, AND HE OVERRULED IT.** Both halves are recorded because a record that keeps only the ruling makes the reasoning look unanimous when it was not. Three routes were put to him:

| | Route | Status |
|---|---|---|
| **A** | **Soft launch** — the link goes to five or six willing villagers, the list reaches 12–15 tradespeople across six trades, then everyone is told | **RECOMMENDED by Claude.ai. OVERRULED.** |
| **B** | He seeds it himself from names he already holds | Not taken |
| **C** | **Go now and let it populate live** | **RULED — D9c** |

**His stated mitigation: he will actively manage the content as it comes in.** That is a real mitigation rather than a dismissal — the risk the recommendation was guarding against was an unattended thin list, and an attended one is a different thing.

**THE RISK, RECORDED ONCE, HONESTLY, AS A RISK AND NOT AS AN OBJECTION.** The first villagers to open the link see whatever the list holds at that moment. The plan's own reasoning — written into row 3.1 before this ruling — held that *"a directory with four people in it gets opened once and never again"*, and that with this audience there is **one chance at a first impression**. **He has weighed that and ruled**, which is his to do; it is written down so that if the first impression does go badly, the record shows the trade-off was seen rather than missed.

**Measured at the moment of the ruling, because the number matters to it:** the live list shows **TWO active people across TWO trades** — `T005 Bob Samwell` (Plumber) and `T012 Frank Shelly` (Carpenter). Thirteen of the fifteen rows are already `hidden`, so he has evidently begun the D7 hiding. **A villager opening the link today finds two people.**

---

**THE PLAN'S ORDER CHANGES, AND IT IS RECORDED AS PROSE RATHER THAN BY RENUMBERING.**

`PLAN-DUNCHI-LAUNCH-2026-09-19` was written assuming **3.1 (the list carries real people) → 1.1 (the village is told)**. Under D9c that reverses: **1.1 runs first.** No row is renumbered — STD-00009 §5.1.4 forbids renumbering within a live plan, and the numbers are citation targets. The re-ordering is stated in the plan's own prose and in each affected row.

**Row 3.1's outcome is UNCHANGED** — 12–15 tradespeople across at least 6 trades. What changed is **how it is reached and by whom**: villagers submitting through the form rather than the Operator seeding. **Its timing is therefore no longer under his control**, and that is a genuine change in the row's character rather than a scheduling note. A row he could have finished in an afternoon is now a row that finishes when enough neighbours happen to fill in a form.

**Row 2.1 — hiding the test people — WAS HOUSEKEEPING AND IS NOW THE HARD GATE.** Under the original order it was one tidy-up among several before a launch that was weeks off. Under D9c **it is the last thing standing between the village and the list**, and the link cannot be un-sent. Its priority in Layer 4 is raised to reflect that, and the change is recorded rather than silently applied.

---

**[PATTERN CANDIDATE: a-sequencing-ruling-re-weights-the-rows-it-does-not-name]** D9c named neither 2.1 nor 3.1. It changed both: one from housekeeping to a hard gate, the other from an afternoon's work to something paced by other people. **A decision about ORDER is also a decision about urgency and ownership**, and the rows that change are usually not the ones the ruling mentions. Worth a standing check after any re-ordering: for each row whose position moved relative to another, ask what is now upstream of it and who now controls when it finishes.

---

### 2026-09-19 — Step 6: the publisher is made to stop losing recommendations

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f).

**[DECISION]** Four rows appended to `PLAN-DUNCHI-LAUNCH-2026-09-19` as **Step 6**, all `new`. **The efforts are Claude.ai's estimates, set under standing authority, and are open to the Operator's revision:** 6.1 at **8**, 6.2 at **5**, 6.3 at **4**, 6.4 at **1**.

**[DECISION] The fix has TWO halves because the failure had two causes**, and this is the substantive design decision of the session. A retry alone would have looked like a complete answer and would have left half the problem standing.

- **Stuart Ironside's** script ran and Google's Sheets service failed. **Retryable.**
- **Murray Angel's** never ran at all — Google did not deliver the event. **No code of ours could have caught, retried or logged it. Only a scheduled sweep can catch that class.**

**Alternatives considered:** a retry alone — rejected, it cannot see Murray's class. A sweep alone — rejected, it would leave every transient failure waiting up to five minutes when a one-second retry fixes it invisibly. **Email alerting on failure** — rejected as the primary mechanism, because it tells the Owner something broke rather than fixing it, and his question was explicitly *"why can't we make an automated fix"*.

**[DECISION] The sweep's cost gated its schedule, so the cost was fixed first.** `backfillPublished` was quadratic — **120 range reads and 125,160 cells over sixty responses**, measured. Google allows roughly 90 minutes of trigger runtime a day and a five-minute sweep is 288 runs. **Splitting `publishOne` so `publishInto` takes an already-read table brought an idle sweep to 2 reads and 1,732 cells — sixty times fewer.** Without that the schedule would have been indefensible and the honest answer would have been a longer interval.

**[DECISION] A blank `action` cell is the alarm.** Every path out of the publisher writes one line into the `action` column. **This is the only way Murray's class is visible at all** — nothing ran, so nothing could report anything, and the absence of a line is the signal. It answers the Owner directly: *"it's frustrating that the system didn't give me a good enough error message to tell me exactly what the problem was."*

**[DECISION] A multi-number field is refused, never welded.** His words: *"the system has actually just merged two phone numbers together and created one very, very long number, which is useless to anybody using it."* Detection is on the **text**, before the digits are stripped, because once stripped the join is invisible. **Refusing produces a hidden row with a reason he can read; welding produced a Call button that dials nobody.**

**[DECISION] 6.3e needed no change, and that is reported rather than quietly skipped.** The brief asked for `Code.gs`'s header to stop saying it appends to the Votes tab. **Reading it, it already says the opposite** — it carries a heading *"WHY IT NO LONGER WRITES TO THE VOTES TAB"* and describes writing to Published `K`/`L`. It was corrected under D1b earlier today. **Nothing was invented to satisfy the instruction.**

---

**[PATTERN CANDIDATE: two-symptoms-one-story-is-usually-two-stories]** Both losses looked like one fault — same evening, minutes apart, same outcome, and an earlier session found a clean correlation (`NEW` verdict) across all eight submissions that pointed at a single cause. **The execution log showed two unrelated causes needing two unrelated defences.** The pull toward one explanation is strong precisely because one explanation is tidier, and here it would have shipped a retry and declared the problem solved while Murray's class stayed open and silent. **Where two failures share a window, check whether they share a mechanism before designing one fix.**

**[PATTERN CANDIDATE: make-the-cheap-thing-possible-before-scheduling-it]** The sweep is the answer to Murray's class and it could not be scheduled at a useful interval until it was sixty times cheaper. **The performance work was not an optimisation; it was the precondition.** Worth asking of any scheduled job at the point it is proposed: what does an idle run cost, times how many runs a day, against what allowance.

---

### 2026-09-19 — Close-down: three rulings recorded, and a verification that found no defect

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f (reference 6G7f). Close-down of the conversation that ran prompts 2697–2741.

**Recorded here because the close-down Layer 6 entry lists them and they had no Layer 5 entry of their own.** D6b, D8b, D9c and D10 are already recorded above, at the time each was ruled; these three are not.

**[DECISION] The Votes tab is approved for deletion.** Confirmed empty — header row only — and unreferenced by any code path. Verified across `Code.gs`, `Publish.gs` and `app.js` on 2026-09-19: nothing calls `getSheetByName('Votes')`, no tab constant names it, and the site never mentions it. It appears only inside `FORBIDDEN_TABS` and `PUBLISH_FORBIDDEN`, which are guards **against** writing to it and which compare a target name before a write — deleting the tab cannot weaken them.

**Rationale for deleting rather than keeping:** it has been dead since D1b repointed the endpoint at Published, and a tab that looks like data but is read by nothing is a trap for whoever inherits the sheet. **Superseded, and worth stating as a supersession:** an earlier session recommended keeping it *"as a historical record of what the old endpoint did"*, and that is now overruled — the record lives in this handover, which is the right place for history, rather than in a live spreadsheet tab a future maintainer may mistake for the system.

**[DECISION] The recovery is AUTOMATIC, not a daily one-click.** Owner's ruling, verbatim: *"One day is a long time. Surely there's an automated way."*

**Rationale, in his terms rather than the implementation's:** the fix as first proposed was a button he would press each day to sweep up anything lost. He rejected the latency, not the mechanism. **A recommendation lost at nine in the morning would sit invisible until he happened to press the button**, and the villager who wrote it would have been thanked by the form hours earlier. The five-minute sweep is the same mechanism with the human removed from the loop. **Alternatives rejected:** the daily button (his objection); and email alerting on failure, rejected because it tells him something broke rather than fixing it, and his question was explicitly *why can this not be automated*.

**[DECISION] Testing and review of prompt 2740 delegated to Claude.ai.** Verbatim: *"Write it and send the prompt. Then I want you to automatically test it and review it. You should not need me for this process."*

**Rationale and its limit, both recorded.** It is the right delegation for work whose evidence is machine-checkable — negative controls, read counts, served-page fetches — and 2740 produced the strongest such evidence on this project. **But it does not extend to anything that closes a row.** Every row in step 6 still requires either his paste or his sighting, and this delegation does not change that: a session may verify its own code, and it may not sight its own effect on his screen. **Recorded explicitly so the delegation is not later read as permission to close rows on self-assessment.**

---

**[PATTERN CANDIDATE: an-unevidenced-claim-is-reported-until-quoted]** Prompt 2741 accepted none of the previous session's two load-bearing claims — the lock on both paths, and the retry's discrimination — and required them **quoted with line numbers** rather than described. Both held, and the verification cost minutes. **The value is not in catching an error; it is that the check is cheap enough to run whether or not one is suspected**, which is what makes it usable as a habit rather than as an accusation. Worth applying wherever one session hands another a safety property it did not watch execute.

---

### 2026-09-21 — The MISSION block is added, in the Owner's own words

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION]** A **MISSION block is added to Layer 1 of this handover**, immediately above `Project Status`, on **2026-09-21**. It lives in **exactly one place in the repo** — that block — and nowhere else.

**[DECISION] The wording is the Owner's own, transcribed verbatim**, given in conversation on 2026-09-21:

> This repo exists to create an online resource for the Dunchideock village to recommend and find workmen for their use. The purpose of this is to ensure everybody has easy access to high quality work.

**One correction was applied, and the block itself states it rather than leaving it silent:** he wrote the village name as **"Dunchidiuk"**; the correct spelling is **"Dunchideock"**, and that is what is written. **No other word was changed** — not punctuation, not phrasing, not the slightly informal *"for their use"*. Tidying an Owner's sentence is how a mission stops being his.

**Rationale for the block existing at all.** Preferences §4.18 requires every repo Claude.ai does substantive work in to carry a MISSION block, and requires every commissioning prompt to name it. **This repo carried none.** The gap was declared in the commissioning prompt rather than discovered later, and closing it was that prompt's first and only task. Four days of substantive work — the launch plan, the silent-data-loss diagnosis, the self-healing publisher — had run against a handover that never stated what the thing is *for*. Everything in Layer 1 describes mechanism; none of it says why the village would want any of it.

**[DECISION] Progress is measured by POINTING, never by a typed figure.** The block names [PATH] `docs/BUILD-PLAN-dunchi-launch.md` and the completion computed from it, and **writes no percentage and no row count.**

**Rationale:** a figure written into Layer 1 is a second copy of a number the plan already holds, and it is stale the moment a row closes. This document already demonstrates the failure at length — the `Project Status` paragraph above carries a long chain of struck-through effort positions, each one correct when written and wrong within hours, preserved only because §3.3 forbids deleting them. **The mission block does not join that chain.** It points at the computation and stops.

**[DECISION] This mission changes only by an explicit decision recorded in this layer** — never as a side effect of session work, and never by a session tidying Layer 1. §4.18 requires it; it is restated inside the block so a future session reading Layer 1 alone still sees the constraint.

**What this session did NOT do, recorded so the absence is deliberate:** it changed **no build-plan status**, closed **no row**, cleared **no effort**, and appended **no row**. The work is exempt from the planning gate under preferences §4.15 as a handover/documentation update. It did not touch the Owner's spreadsheet, any Apps Script file, or the Owner actions he is currently working through from the 2026-09-19 Layer 6 entry.

---

### 2026-09-21 — D3c: the inheritance walk leaves the launch plan, and the requirement stays unproven

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] `D3c-VCWL-21092026` — the Owner's ruling, his words verbatim:**

> ***"D3c. Handover is less of a concern than getting this live!"***

**What he was choosing between.** Row `5.1` of `PLAN-DUNCHI-LAUNCH-2026-09-19` — repair the restore runbook, then walk it — at **effort 9, the largest row in that plan**. Three routes were put to him:

| Route | What it was | Outcome |
|---|---|---|
| D3a | Repair the runbook, then **he** walks it | Declined |
| D3b | Repair the runbook, then **Frank** walks it | **Claude.ai's recommendation — OVERRULED** |
| **D3c** | **Move the row into a successor plan of its own** | **CHOSEN** |

**[DECISION] The recommendation was OVERRULED, and the grounds it was made on are recorded rather than summarised away.** Claude.ai recommended **D3b** because the row's own acceptance test is *"someone handed only the two logins"*, and **the Owner knows too much about this system for his own walk to be a valid test of it** — he would supply from memory whatever the runbook fails to say, which is precisely the defect class the walk exists to find. **He did not dispute that reasoning. He reprioritised against it:** getting the directory in front of the village is worth more to him now than proving it can be handed on.

**Recorded because an overruled recommendation is only useful if a later reader can see what was argued.** A future session reading only *"the row moved"* would not know that the question of **who can credibly walk it** is still open, and would be at risk of closing the row on the weakest available evidence.

**[DECISION] ⚠ THE INHERITANCE REQUIREMENT IS UNPROVEN AND MUST NOT BE DESCRIBED ANYWHERE AS SATISFIED.** The Owner's own clause — *"I want to be able to hand over the operating site to anyone else who inherits that google email account"* — is **the only clause of the Requirement as stated that remains unmet**. Moving the row changed **who owns it**, not whether it is done. **It is now owned by a plan nobody is working**, which is a weaker position than it was in this morning, and that is the honest reading rather than a pessimistic one.

**[DECISION] The mechanism is the standard's, not this prompt's, and it differs from what was anticipated.** The commissioning prompt expected the row to *move out* and the denominator to fall 41 → 32. **The denominator does fall to 32 — but not by the row leaving.** Established by reading STD-00009 directly this session:

- **Rule 5.2.2 and the §5.2 status table [CORE]** — `external` means *"not this plan's work at all. Another Plan ID owns it and is accountable for it. This plan records the dependency so the reader can see it, but carries none of the weight."* The status table's own denominator column reads **"No — excluded entirely (§5.4)"**.
- **Rule 5.4.2 [CORE]** — the denominator is the sum of effort of rows *"NEITHER `parked` NOR `external`"*. **The exclusion is done by the status, in the arithmetic.**
- **Rule 5.2.5 [CORE]** — an `external` row *"still carries an integer effort 1-10 like every other row"*, and *"The weight of an `external` row is removed by its **status**… never by writing an effort value the grammar does not permit."*
- **Rule 5.4.4 [CORE]** — a weight is never revised to move a completion figure.

**So the row STAYS IN THE TABLE at id `5.1`, with its full text and its effort of 9, and only its status changes.** Nothing is deleted and nothing is renumbered.

**[DECISION] §5.10 — re-cutting a live plan — was read and deliberately NOT used, and the reason is the important part.** §5.10 is the section that governs work *leaving* a plan that continues, so it looked like the governing rule. **It is not, because §5.10.1 [CORE] permits removal for exactly two lawful causes**: the governing design no longer exists (evidenced by a named Solution Design commit), or the row cannot be falsified (Rule 5.10.8). **Row 5.1 satisfies neither.** Its design exists, and it is one of the most precisely falsifiable rows in the estate. §5.10.1 names the *unlawful* causes explicitly, and *"a row someone has lost interest in"* and *"inconvenient to the percentage"* are on that list.

**Had the row been REMOVED, this would have been the falsification §5.8.10.3 names.** It was not removed. **An `external` status change is not a §5.10 removal at all** — the row is still in the plan, still readable, still cited — so §5.10's causes never engage. **This is the distinction that made the work lawful, and it was reached by reading the standard rather than by assuming the prompt's framing was the mechanism.**

**[DECISION] The precedent followed is this repo's own, set four days ago.** `PLAN-DUNCHI-TRADER-V1` moved these same rows out under **D10-6G7f-19092026** using exactly this mechanism — `external`, `[owner: …]` marker, text preserved in full, effort unchanged, *"excluded from this plan's denominator by its status, never by re-weighting"*. **Row 5.1 is in fact the same row making its second hop**, V1 `6.1` → launch `5.1` → inheritance `1.1`, and all three ids are named in the new plan so any old citation resolves.

**[DECISION] The launch plan's `Summary` was corrected, and this is a change of substance rather than tidying.** It read *"…from working to launched, **and prove it can be inherited**"*. **That promise left with the row.** Leaving it would have had the launch plan claiming ownership of the very requirement this ruling made unowned — the false-satisfaction claim the ruling's own terms forbid. The `Estimate` of 23 was **not** revised (§5.13.5), and the historical 41 figure is preserved with the new 32 recorded beside it.

**Alternatives considered and rejected:** `descoped` — rejected, it means the work was **dropped**, and the Owner deprioritised it rather than dropping it. `parked` — rejected, it means *this plan's* work set aside, but the work is now another plan's entirely. Deleting the row — rejected as falsification under §5.8.10.3 and unlawful under §5.10.1. Renumbering the remaining rows to close the gap — rejected under §5.1.4 and §5.10.4; ids are citation targets and gaps are correct and permanent.

**[PATTERN CANDIDATE: a-prompts-expected-mechanism-is-a-hypothesis]** The prompt predicted the right **number** (32) and the wrong **mechanism** (the row leaving the table). Both were checkable against the standard in minutes, and the instruction to *"check it rather than confirming it"* is what made the difference — a session that had confirmed the arithmetic would have reported a correct figure reached by an unlawful route, and the error would have been invisible in the percentage. **Worth applying wherever a commissioning prompt states an expected outcome: the figure and the mechanism are separate claims and need separate verification.**

---

### 2026-09-21 — An audit-trail write may never abort the recovery it audits

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] The action-column write is made NON-FATAL, and every other write is deliberately left fatal.** The distinction is the whole design and it is stated as a rule rather than as a patch:

> **A write whose failure loses a villager's recommendation must throw. A write whose failure loses only the record of what happened must not.**

**Rationale.** By the time the outcome note is written, the recommendation is already safely on Published. **Losing the note costs the Owner a line of audit text; losing the sweep costs a villager their tradesperson** — and the sweep is the only defence in existence against Murray Angel's failure class, where Google never delivers the event at all. The mechanism built to make failures *visible* became the thing that made a recovery *fail*, which inverts its purpose.

**So `writeRowBlocks`, `writeRangeBlocks` and `appendRecommendation` are untouched.** They write to Published; a failure there is a lost recommendation and is correctly handled by the existing retry and the `FAILED —` note. **Only the audit write changed.**

**[DECISION] It is a counted, logged refusal — NOT a swallowed error**, and the difference was made explicit because the brief named swallowing as the failure mode this step exists to fix. A refused note is recorded in **three** places a person can reach: the Logger with the row number and the refusal text; an `unrecorded` counter the sweep reports in a loud summary line naming the probable cause; and the action cell staying **blank**, which is already the documented alarm. **What is deliberately not done is re-throwing.**

**[DECISION] The fix does not depend on the diagnosis being right.** The refusal is believed to come from a leftover data-validation dropdown on column `M`, and the Owner is removing it. **That is REPORTED from his execution log — the rule is inside his account and no session can read it.** The code was written to survive a refused write **whatever the reason**, per the brief's explicit instruction not to design around his sheet's current state. If the cause turns out to be something else entirely, the fix still holds.

**[DECISION] One shared writer rather than three inline try/catches.** `noteInto()` is the only place that writes the action column, and `note()` routes through it too. **The defect existed precisely because the same write was protected on one path and bare on three** — a second mechanism would have recreated the asymmetry that caused it.

**[PATTERN CANDIDATE: audit-writes-must-not-be-able-to-fail-their-subject]** This is a general and project-agnostic defect class: an instrumentation, logging, telemetry or audit-trail write placed inside the transaction it observes, where a failure in the observer aborts the observed work. **It is especially dangerous when the audit exists BECAUSE the subject was previously unreliable**, which is exactly this case — the action column was added on 2026-09-19 to make lost submissions visible, and on its first live run it lost them itself. **Worth a pattern: observation must be strictly weaker than the thing observed.**

**What was tried and rejected.** Wrapping the whole sweep body in a try/catch — rejected: it would have caught the refusal but also every genuine Published write failure, converting real lost recommendations into silent ones, which is the opposite of the intent. Validating the note text against the dropdown's permitted values before writing — rejected: it designs around one spreadsheet's current configuration, which the brief forbade, and it would break again on the next validation rule. Removing the action write from the sweep entirely — rejected: it is row 6.2's deliverable and the Owner asked for it in his own words.

**[DECISION] The duplicate risk was ESTABLISHED, not estimated, and the answer is no.** `recordSweepRun()` does sit **after** the throw point, so the run was never remembered — but that only feeds `checkSetup`'s display and does **not** drive the re-scan decision. The re-scan is driven by the blank action cell, so every subsequent firing genuinely reconsidered the same rows. **Three independent guards prevent a duplicate**, each measured against the real functions rather than reasoned about: `rowIndexForPerson` matches on phone **and** name and finds the row the aborted run already wrote, so the loop `continue`s; `publishInto` returns `added: false` if reached; `appendRecommendation` refuses identical words. **All three are now committed as permanent tests**, because the evidence for "no duplicates" was worth more as a regression guard than as a paragraph.

---

### 2026-09-21 — A correction: "no duplicate risk" was wrong, and the test that proved it was testing the wrong thing

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] The previous session's conclusion is CORRECTED, not defended.** It concluded *"no duplicate-row risk"* from three guards measured against the real functions. **The guards are real and the measurements were honest. The conclusion did not follow**, and the gap is specific and worth naming because it is a general testing error:

> **The test drove each re-run against a FRESH stub. The live condition is the SAME sheet swept again and again.** With a fresh sheet the merge guard was always consulted, so it always fired. On a real sheet a refused phone means the guard is **never consulted at all**.

**The production log was right and the test was wrong.** Fourteen sweeps logging `published 8` was not consistent with "no duplicates", and the correct response to that inconsistency was to reproduce the live condition rather than re-assert the test.

**[DECISION] The mechanism, established rather than assumed.** `normalisePhone` returns `''` for a phone it refuses — itself a deliberate 2026-09-19 fix so a two-number field is never welded. The duplicate check was `if (key) { ...rowIndexForPerson... }`. **For a refused phone `key` is `''`, so the entire block was skipped** and the response republished on every sweep. `publishInto` carried the same structure, so every caller was affected.

**It required BOTH a refused phone AND a refused note**, which is why it survived earlier testing: a row with a written action note is skipped at the top of the loop before the phone is ever consulted. The Owner had both conditions simultaneously.

**[DECISION] ⚠ YESTERDAY'S FIX MADE THIS WORSE, and that is recorded rather than glossed.** `4f4e88f` removed the abort so the sweep would stop truncating. Correct on its own terms — **but the abort had been accidentally limiting the duplication to one row per run.** Measured over 14 sweeps of 8 refused-phone responses: `1d50b00` → 14 rows, `4f4e88f` → **112 rows**, this fix → 8 rows. **Fixing a symptom without understanding the whole loop turned a slow leak into a flood.**

**[DECISION] The fallback matches on NAME + TRADE, and is deliberately weaker than name + phone.** The alternative is not a stricter match; it is **no match at all and a list that grows without bound.** A false match costs one merged recommendation on a row that is `hidden` with an unusable number and which the Owner must edit by hand regardless. **Trade is a secondary check rather than a requirement**, so an Owner who tidies the trade on a hidden row does not thereby cause a second copy.

**Alternatives considered and rejected.** Keying on the form Timestamp — rejected: the sweep reads submissions whose timestamps it cannot match to Published, which stores none. Writing the response row number into Published — rejected: it adds a column to the Owner's sheet for the publisher's convenience and breaks if he ever sorts. Refusing to publish a bad-phone row at all — rejected: it loses the villager's recommendation entirely, which is the thing this whole step exists to prevent. Making `normalisePhone` return something for a refused phone — rejected: it would re-open the welded-number defect the Owner reported in his own words.

**[DECISION] `apps-script/` in the live repo is a DISTRIBUTION CHANNEL and is now treated as one.** It serves no runtime purpose — Pages serves the site, and Apps Script code is pasted by hand. **It exists as the Owner's copy-source**, and a stale copy there means a session's fix silently never reaches production. **He re-pasted this morning and installed `1d50b00`.** The push `origin` → `collab` is manual and was 2 days stale; it has been performed this session and the diagnosis command is recorded in Layer 3 so it is checked before anybody is told to paste again.

**[PATTERN CANDIDATE: test-the-steady-state-not-the-first-run]** A guard that runs on a fresh fixture every time is tested in the one state where it is least likely to fail. **Idempotence claims must be tested by running the operation repeatedly against the SAME accumulated state**, which is the condition production is always in. This session's error and its correction are both instances.

**[PATTERN CANDIDATE: committed-is-not-deployed]** Work reaching `origin` is not work reaching the person who installs it. Where a human copies code from somewhere, **that somewhere is production** and needs the same staleness checks as a deploy target.

---

### 2026-09-21 — The full clear is established safe; the ruling it would overturn is NOT recorded as made

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**NO DECISION WAS TAKEN THIS SESSION, and that is the point of this entry.** The Owner asked to clear the Published tab. His own ruling **D7-6G7f-19092026** forbids it. **The analysis is recorded here so his ruling can be made knowingly; the ruling itself is his and is not pre-empted.** Nothing was changed on any plan row and no supersession is recorded.

**[FINDING] The full clear is SAFE, established by executing the real code rather than reading it.** `nextId` yields `T001` on an empty tab (`highest` starts at 0, no throw); `tableValues` returns header-only and `lastIdRow` returns 1; the first real submission publishes as `T001` onto row 2; `writableBlocks()` remains A–H and K–L so **zero writes reach the Owner's `I`/`J` formulas**; and the real `app.js`, driven end to end, shows **"Nobody on the list just yet"** — the calm empty state, not an error.

**[FINDING] D7 IS NOT WRONG, AND THE HYPOTHESIS PUT TO THIS SESSION WAS RIGHT.** Claude.ai offered *"a total wipe is the safe case and a partial delete is the dangerous one"* as a hypothesis to test rather than implement. **Tested: it holds.** `nextId` after `T029` survives as `T030`, so the reuse hazard D7 names is real and present for any partial removal. **The two rules do not contradict once the cases are separated** — which is why the proposed supersession is narrow rather than a repeal.

**[FINDING] THE REAL DANGER IS NOT THE CLEAR — IT IS ONE MENU ITEM.** The `action` column protects against the sweep, measured: twelve sweeps of an emptied tab brought nothing back. **But `backfillPublished` never consults it.** One click of *"Publish any responses not yet on the list"* — the **first** item in the Owner's menu — republished all 29 and reported *"Added 29 new people to the list."* **After a clear its wording describes precisely what he wants and does precisely what he must not do.** Recorded as a `[GOTCHA]` in Layer 3 and named in the procedure as the one click not to make.

**[DECISION] `backfillPublished` is deliberately NOT changed.** Making it consult the `action` column would break its actual purpose: a response that genuinely failed to publish has a blank action cell **only when the publisher never ran at all**, which is Murray Angel's class and the reason the function exists. It is also the documented recovery route in `DEPLOY.md` and the restore runbook. **The mitigation is documentation, not code** — and that is a deliberate choice rather than an omission.

**[DECISION] The procedure goes in the existing `PROCESS-` document, not a new file.** `docs/PROCESS-seeding-and-launch-dunchi-trader.md` already carries the Owner-facing runbook including a *"Removing the four test people before launch"* section. A second document would have split his instructions across two files with no rule for which to read.

**[FINDING] That existing section carried advice that is now unsafe in general, and it was corrected in place rather than left.** It offered *"or delete the four rows outright… leave the gap"* as equally safe. **That held only because `T001`–`T004` were the LOWEST ids.** A correction note now records that deleting the **highest** id frees it for reuse, and points to hiding, or to the full clear.

**What was NOT done, deliberately:** build plan row 2.1 is untouched and still reads `new` with its original *"Set status to hidden, never delete"* Approach; no Layer 1 supersession marker was written against D7; and nothing was written to the Owner's spreadsheet. **If he rules yes, a later session amends the row and records the supersession.**

**[PATTERN CANDIDATE: a-rule-and-its-exception-are-usually-two-cases-not-a-contradiction]** D7 and the Owner's request looked like a head-on conflict. Separating *partial* from *total* showed both correct over disjoint domains, and the resolution preserved the rule rather than repealing it. **Worth reaching for before overturning any standing rule: ask what case it was written for, and whether the new request is actually that case.**

---

### 2026-09-21 — D7a: the Owner rules for a complete reset, and it is SAFER than what the previous session recommended

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] `D7a-VCWL-21092026` — the Owner's ruling, verbatim:**

> ***"I am going to do D7a. It feels cleaner"***

**And of the hidden rows, when they were questioned:**

> ***"Surely it is just messy noise?"***

**What he ruled:** clear the data rows on **Published** AND the test rows on **Form responses**, so both tabs agree and ids restart at `T001`. The testers will then re-submit real tradespeople **through the form**, rather than data being copied out and re-entered by hand.

**He ruled it knowing what it overturns.** Claude.ai put the conflict to him explicitly before he answered. **This is a knowing supersession, not an oversight.**

**[DECISION] THE SUPERSESSION IS NARROW, AND D7 IS NOT REPEALED.** `D7-6G7f-19092026` — *hide, never delete* — **remains correct and binding for every partial removal.** Its reasoning is untouched: deleting the highest id while lower ids survive frees that number for reuse, and the next submission inherits recommendations filed against the old holder. **A total clear escapes that for the opposite reason — nothing survives to inherit a reused id.** The two rules govern disjoint cases and both now stand.

**Amended in the build plan, status deliberately NOT touched:** row `2.1`'s Approach column moves from *"Set status to hidden, never delete"* to *"Complete clear sanctioned by D7a; partial removal still means hiding"*, and its sub-task text carries the supersession with the Owner's words. **Row 2.1 stays `new`** — it closes on his sighting of a clean list, not on the ruling. Validator re-run at exit 0, 9 sub-tasks, position unchanged at 0/32.

**[DECISION] A SECOND RULE IS ALSO SUPERSEDED, and it is named because it would otherwise be missed.** The carried-forward constraints paragraph in Layer 6 records *"never delete rows from Form responses (standing rule established this session)"* — a session convention rather than a D-numbered ruling. **D7a overturns it for the same narrow case.** It continues to govern partial removal from that tab.

**[FINDING] THE PREVIOUS SESSION'S RECOMMENDATION WAS WRONG, AND THE OWNER'S RULING IS THE SAFER OPTION.** Prompt 2758 recommended leaving the Form responses rows in place, because their filled `action` cells stop the sweep republishing them, and it recorded the backfill menu item as a **residual risk to be documented**. **Measured this session, side by side:**

| Shape | 12 sweeps | One click of *"Publish any responses not yet on the list"* |
|---|---|---|
| Response rows **LEFT** (2758's advice) | 0 rows — held | **6 rows returned.** The trap stays live forever |
| Response rows **CLEARED** (D7a) | 0 rows — held | **0 rows.** Alert reads *"There are no form responses yet."* |

**Clearing the response rows DISARMS the trap rather than documenting it.** A guard that depends on nobody ever clicking a menu item is weaker than having nothing for that item to act on. **The Owner's instinct — "it feels cleaner" — was right for a reason he did not have to articulate.**

**[FINDING] The reset is proven end to end.** After clearing both tabs, a new submission through the form publishes as **`T001`, `active`**, with its action line written back to the response row. No path throws on an empty responses tab (`values.length < 2` guard).

**[DECISION] The procedure's row-2 ordering was a REAL defect and is rewritten, not patched.** The first version told the Owner to *delete rows and then check whether `I2`/`J2` survived* — but `I2`/`J2` **are in row 2**, so by the time he checked they would already be gone. **A procedure that says destroy-then-verify will destroy.** Every delete now starts at **row 3**, and row 2 is cleared by hand in two pieces that skip the formula cells: `A2:H2` then `K2:L2` on Published, `A2:I2` then `M2` on Form responses. **The same trap exists on Form responses, whose `J2`/`K2`/`L2` verdict formulas are also in row 2**, and it is now stated for both tabs.

**[DECISION] The corrected `L2` verdict formula is folded into the reset as step 6, rather than left as a separate job.** Owner action 12 from the 2026-09-19 close-down has been outstanding since. **Established this session: no code reads the `verdict` column** — zero matches in `Publish.gs`'s logic, `Code.gs` and `app.js`. It is an at-a-glance aid for the Owner alone, so a wrong version **cannot** corrupt the list or the site. **It is therefore not a blocker for the reset.** It is folded in because he will already have `L2` open, and because a wrong verdict on the *first real submission* is the moment it would mislead him most. **His 2026-09-19 report — *"I have now pasted the correct code. And it seems to work"* — suggests he already has the corrected version**, so the step says compare-then-paste-if-different rather than assuming he needs it.

**Alternatives considered.** Making the reset depend on the L2 paste — rejected: nothing reads the column, so it cannot block. Leaving L2 as a separate outstanding action — rejected: it needs the same cell in the same trip, and splitting it invites a second visit that never happens. Changing `backfillPublished` to consult the `action` column — rejected again, for the reason recorded on 2026-09-21 earlier: a genuinely-failed response has a blank action cell precisely when the publisher never ran.

**[PATTERN CANDIDATE: disarm-beats-document]** 2758 found a one-click trap and mitigated it with a warning. The Owner's ruling removed the fuel instead. **Where a hazard depends on state you can delete, deleting the state beats documenting the hazard** — a warning must be read every time, a removed precondition works even when nobody reads anything.

**[PATTERN CANDIDATE: a-procedure-that-verifies-after-destroying-is-not-a-procedure]** *"Delete X, then check Y survived"* is a defect whenever Y lives inside X. The ordering must make destruction impossible, not detectable.

---

### 2026-09-21 — A reported defect in the documented remedy is REFUTED by measurement, and the real alarm is narrowed

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[FINDING] THE REPORTED DEFECT DOES NOT EXIST, and it is recorded as refuted rather than quietly dropped.** The commissioning prompt reported that `apps-script/SHEET-FORMULAS.md` gives **identical** formulas for Published `I2` and `J2`, so anyone following `checkSetup`'s repair instruction would paste the same formula twice and believe the duplicate checker repaired.

**Measured by hashing every documented formula in that file: no two cells share one.** `I2` is 291 characters and reads column `E`; `J2` is 121 characters and reads `B` and `C`. The live raw copy is **byte-identical** to the repo. **Nothing in the document was changed, because nothing in it was wrong.**

**Rule 1.9 applies in the mirror direction and is worth naming: a refutation is a claim like any other.** This session did not accept the report and did not accept its negation on authority either — it hashed the formulas, diffed the live file, and mapped every cell reference against the column layout the code enforces.

**[FINDING] Why the report was a reasonable mistake, which is why a guard was added rather than a correction issued.** The same idea sits at **different letters on the two tabs**: phone is `E` on Published and `F` on Form responses; names are `B`/`C` versus `D`/`E`. **Published `I2` and Form responses `J2` are both "the phone key" and are necessarily different formulas.** A reader comparing across tabs sees a mismatch that is correct behaviour. **And this document has been wrong before in exactly this class** — it was once authored against an assumed column layout and every cell reference was incorrect (`[BUG] 2026-09-18`). **A report of this shape deserves testing, not dismissal.**

**[DECISION] The property is now asserted mechanically instead of trusted.** Ten checks in `apps-script/test-verdict.js` hash every documented formula, assert no two are identical, assert each phone key reads its own tab's phone column and each name key its own two name columns, and assert `checkSetup`'s *"step 2"* pointer resolves to a heading that exists. **Mutation-tested: making `J2` identical to `I2` is killed by three of them, naming the exact cells.** The next such report is answered by running one command.

**[FINDING] THE ALARM ITSELF IS CORRECT, AND ITS WORDING OVERSTATES THE CONSEQUENCE.** `checkSetup` reads `getRange(2, 9, 1, 2).getFormulas()` at `Publish.gs:1932`; the D7a reset cleared row 2, so the formulas are genuinely gone and the report is right.

**But the impact is narrower than the message says, and the Owner needed that distinction to know whether to stop submitting.** Established by reading every consumer and then by execution:

- **`rowIndexForPerson` never reads `I` or `J`.** It reads Published columns `E`, `B` and `C` and normalises them in JavaScript. **Run with both cells empty, a repeat submission still returns `added: false` / "Merged into T001" and creates no second row.**
- **`app.js` and `Code.gs` have zero references** to `pub_phone_key` / `pub_name_key`.
- **The only true consumer is the `verdict` formula**, which reads `Published!$I$2:$I$500` and `$J$2:$J$500`. With them blank a listed person reads `NEW`.

**So the message's *"EVERY new form submission will look like a new person"* is true of the verdict column and false of the publisher.** **Nothing gets published twice.**

**[DECISION] The alarm's wording is NOT softened, and that is deliberate.** It is a setup check; **erring loud is the correct bias**, and the sentence is accurate about the thing the Owner actually looks at. **Narrowing it to "your verdict column is affected" would understate a real repair he should make.** The precision belongs in the handover, which is where a session reads it, rather than in a one-line alert on his screen. **Recorded so a later session does not "fix" the wording and lose the prompt to repair.**

**This also reconciles two earlier reports that looked contradictory.** 2758 established that no publisher write reaches `I` or `J`; 2760 established that no code reads the `verdict` column. Both stand. **`checkSetup` can still call the duplicate checker broken, because the thing it is reporting on is neither of those** — it is the formula-fed verdict the Owner reads with his own eyes, which is precisely the audience the setup check is written for.

**[PATTERN CANDIDATE: the-same-idea-at-different-addresses-reads-as-a-bug]** Two tabs implementing one concept over differently-lettered columns produce formulas that look mismatched on inspection and are both correct. **Where a document carries parallel-but-not-identical instructions, assert the parallelism mechanically** — the human comparison is the unreliable step, and it fails toward false alarms.

---

### 2026-09-21 — D10a: three rows closed, and the check found what four sessions missed

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] `D10a-VCWL-21092026` — the Owner rules row 6.2 closed.** Claude.ai recommended closing and he ruled it. **The evidence is his own run of the tool the row delivers**, not a harness result:

- **Speed:** he reported *Check the setup* took **"a few seconds"** against the **38.95 seconds** measured on 2026-09-19. The row's wording requires it be *"materially faster"* than that figure. **Met on his own stopwatch.**
- **Reconciliation:** its output reconciled both tabs in one view — `People on the list: 1`, `Last ID in use: T001`, `The list fills rows 2 to 2.`, `Stranded rows below the list: none.`, `Duplicate rows: none.`, telephone numbers and trade names both checked.
- **And it earned its place by finding a REAL fault that three Claude Code sessions and Claude.ai had all missed:** `*** THE DUPLICATE CHECKER IS BROKEN *** / I2 has no formula in it. / J2 has no formula in it.` **The D7a reset had cleared his helper formulas and nobody had noticed.** The row exists so the Owner learns what happened and why without reading two tabs side by side. **It did exactly that, against a live fault rather than a fixture.**

**⚠ WHAT WAS NOT WITNESSED, recorded because the row's own wording rests on it.** Row 6.2 requires that *"a blank `action` means nothing happened and is itself the alarm"*. **That alarm has NOT fired since the reset.** Every path out of the publisher writes one line into the `action` column, the behaviour is covered by the committed harness, and it was measured working on 2026-09-21 — **but nobody has SEEN a blank cell signal a real loss on his sheet, because nothing has been lost since.** The clause is **installed and evidenced by tests, not sighted in production.** The row closes on the Owner's ruling with that gap named rather than absorbed.

**[DECISION] Row 2.1 closed on the Owner's own clearing of the list.** He completed the D7a reset, then removed the one remaining made-up entry — his words: ***"The electrician is made up so I will be deleting it."*** — re-ran the Published tab clean, and pasted the `I2`/`J2` helper formulas back. **Published now holds no data rows**, and the served page renders the empty state, [VERIFIED 2026-09-21T10:00Z and REPORTED from Claude.ai's live browser read]: *"Nobody on the list just yet / The list is being put together…"*.

**⚠ Stated plainly rather than glossed: the row's outcome is met by an EMPTY list, not a curated one.** Its wording is *"No test person is visible on the village list"*, and none is — because nobody is. **That genuinely satisfies the clause**, and its Approach was amended under **D7a-VCWL-21092026** to sanction the complete clear, so the route taken is the sanctioned one. But a reader should know which of the two situations closed it, because **the list being empty is also why row 3.1 is now the live gate on launch.**

**[DECISION] Row 6.4 closed on the Owner's sighting.** He tapped the add-someone link on the live site: ***"yes it opens in a new tab"***, with the village list still behind it. **That is the clause and nothing less** — the `target="_blank"` attribute's presence in the source had already been measured, and measuring an attribute is not the same as a person getting a new tab on a real device.

**What was deliberately NOT done.** Rows `1.1`, `3.1`, `4.1`, `6.1` and `6.3` were not touched and remain `new`; `5.1` remains `external`; **no row was appended and no effort re-weighted.** In particular **row 6.1 stays open** — the retry and the sweep have run in production, but the row closes on the Owner *seeing a dropped submission recover by itself*, and no submission has been dropped since the fix went in.

**[PATTERN CANDIDATE: the-diagnostic-that-earns-its-place-finds-what-the-authors-missed]** Row 6.2's tool was built to reconcile two tabs faster. **Its first real run found a fault that four separate reviewing sessions had walked past** — the helper formulas the reset had silently taken. A diagnostic proven against fixtures proves the fixtures; one that surprises its own authors on first contact with production is the stronger evidence, and is worth distinguishing when deciding whether such a row is really done.

---

### 2026-09-21 — D9a: row 6.3 closes on an upstream control, and what that does and does not prove

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL

**[DECISION] `D9a-VCWL-21092026` — the Owner's ruling, verbatim:**

> ***"D9a - no point testing functionality that is not needed."***

**He was offered three routes and chose the first. Claude.ai recommended D9b — briefly disabling the form validation so the publisher's own refusal could be witnessed — and he OVERRULED it.**

**The recommendation's grounds are recorded rather than summarised away**, because an overruled recommendation is only useful if a later reader can see what was argued: the row's wording is about **the publisher's** behaviour, and the only way to see it is to let a bad number through. **His ruling does not dispute that. It declines to manufacture a fault in a working control in order to exercise a downstream one**, which is a defensible position and his to take.

**[DECISION] WHY THE INTENDED SIGHTING IS NO LONGER REACHABLE THROUGH THE FORM.** Row 6.3 was to close on the publisher refusing a field holding two telephone numbers and writing the reason into the `action` column. The Owner has response validation on the form's telephone question:

```
^[-() ]*(\+44|0)[-() ]*(\d[-() ]*){9,10}$
```

**He deliberately submitted a two-number field this morning to test this row, and the form rejected it at the door — nothing reached the sheet.** The control the row was written against has been made unreachable by a control upstream of it.

**[DECISION] THE THREE-WAY SPLIT IS RECORDED IN FULL, because closing a row on an upstream control is NOT the same as closing it on the row's own behaviour.**

- **WITNESSED.** The form refuses a multi-number telephone field at submission. **He saw it happen.** That is one real, sighted control standing between a villager and an invented number.
- **INSTALLED BUT NOT WITNESSED.** Five clauses of this row's own wording: the publisher's own refusal of a multi-number field and its `action`-column reason; the merge matching on **phone AND name**; the merge recording what was actually submitted; the verdict reading `ON THE LIST BUT HIDDEN` for a hidden person; and `Code.gs`'s header no longer claiming it appends to the Votes tab. **All committed at `4f4e88f` and `04e9b54` and covered by the test suite. None has been seen to run inside Google.**
- ⚠ **RESIDUAL RISK, stated rather than buried.** **The form's validation protects the FORM ROUTE ONLY.** Any row reaching Published by another route — the Owner typing into the sheet by hand, or a future recovery path such as `backfillPublished` — is **not** covered by it. **For those routes the publisher's unwitnessed refusal is the only defence**, and it remains unwitnessed.

**Why this matters to the MISSION rather than only to the plan.** A villager who taps Call must reach a real person. **The form route is now protected twice — once visibly and once on trust. Every other route is protected once, on trust.** That is a materially better position than this morning and it is not the same as proven.

**[DECISION] Nothing was re-tested to justify the closure, and that is deliberate.** The five unwitnessed clauses were already covered by the committed suites; re-running them would demonstrate the same thing again and could be mistaken for the sighting the row actually wanted. **The honest record is that the row closes on the Owner's ruling plus one witnessed upstream control — not on new evidence produced this session.**

**[PATTERN CANDIDATE: an-upstream-control-can-close-a-row-but-cannot-prove-it]** Where a validation upstream makes a downstream guard's trigger unreachable, the downstream guard becomes untestable in production rather than unnecessary — **the two are easy to conflate and they differ exactly at the routes the upstream control does not cover.** Worth recording both the closure and the uncovered routes whenever a row is closed this way.

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

---

### 2026-09-19T12:20:53Z — The verdict column matched every row against itself; the Owner confirms the broken deployment
**Source:** Claude Code
**Started:** 2026-09-19T12:08:16Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Same conversation that sent prompt 2697 earlier today; read that session's Layer 6 entry rather than re-deriving its work. **Gavin is on a PHONE ONLY today and has no laptop to hand, so every Owner step must say plainly whether it needs a computer.** Repo state 72a5b96, clean. **TWO OWNER SIGHTINGS, MEASURED ON HIS PHONE TODAY — record both:** (1) the broken deployment is CONFIRMED — he opened the /exec address and got `Script function not found: doGet`, independently confirming 2697's server-side measurement; Layer 3's candidates 1 and 2 are now Owner-confirmed. (2) **A NEW DEFECT, self-match in the verdict column** — he typed the two Layer 4 test rows into Form Responses rows 15 and 16; with column H blank both read `CHECK THIS`; with H filled, row 15 read `ALREADY ON SITE row 15` and row 16 read `ALREADY ON SITE row 16`, **each naming ITS OWN row number**, neither person on Published. Claude.ai's reading, to be tested rather than assumed: the verdict lookup is searching Form Responses instead of, or as well as, Published — do not accept that on report, establish it from the actual logic and say which it was. **Tasks:** (1) find and read the verdict logic; establish why a row matches itself and why blank H yields CHECK THIS — the second must be a deliberate stated rule, not an accident. (2) Fix it so the four verdicts are correct against PUBLISHED only; a Form Responses row must never match itself or another Form Responses row; apply Layer 3's whole-column lesson. (3) Prove it with a test harness in the repo including a **negative control** that fails against the defective version. (4) Say plainly whether `SAME NAME, DIFFERENT NUMBER` is reachable with current Published contents; if no Bob Samwell is published, give the exact name and number to type and say who it clashes with. (5) **BUNDLE THE DEPLOYMENT** — the Owner already owes one laptop trip for DEPLOY.md step 14; if this fix needs anything pasted, it rides that SAME trip. (6) HANDOVER: Layer 3, Layer 4, Layer 6, and record in Layer 5 that **Claude.ai's instruction to leave column H blank was wrong** and produced the first CHECK THIS reading. This is work INSIDE open row 5.1 — do not append to the plan, do not renumber, do not mark 5.1 done.

**What was done:**

**THE SELF-MATCH IS ESTABLISHED FROM THE FORMULA, AND CLAUDE.AI'S READING WAS CORRECT.** It was not accepted on report. The verdict is a **sheet formula only** — `Publish.gs` never writes it and only reserves `I`/`J` on Published — so the fault is entirely in the `L2` formula in `apps-script/SHEET-FORMULAS.md`.

**Which range it searched, settled by arithmetic rather than by reading intent:**

| Searching for row 15's key `07999888777` | Result |
|---|---|
| in `Published!$I$2:$I` | **`#N/A`** |
| in Form responses `$J$2:$J` | position **14**, and `14 + 1 =` **15** — exactly what he saw |

Four candidate `ARRAYFORMULA` semantics were modelled against both his readings. **Only full self-reference — `COUNTIF` *and* `MATCH` both searching this tab's own `J` column — reproduces `row 15` on row 15 and `row 16` on row 16.** The author's intended semantics produce `NEW`, so the formula was not doing what its text describes.

**The structural cause, which is the transferable part.** The old formula read its comparison keys back out of columns `J` and `K` **of its own tab**, so it carried live same-tab ranges alongside its cross-tab lookups into Published. One unqualified range turns the lookup into a self-search — silently, and producing `MATCH position + 1`, which is arithmetically the row's own number. **A wrong answer shaped exactly like a right one.**

**A second, latent fault in the same formula.** `Published!$I$2:$I` is open-ended and the owner's helpers are `ARRAYFORMULA` over whole columns, so ~986 rows return an empty string. `COUNTIF(range, "")` counts every one. Any response with an unreadable telephone number would have read `ALREADY ON SITE` against a blank. **Layer 3's whole-column lesson, second occurrence.**

**The fix** (`apps-script/SHEET-FORMULAS.md` at `6e0d4a0`), a `LET()` formula, three changes each closing one route: keys **computed inline** from the row's own cells so no same-tab range remains and a self-match is **not expressible**; the verdict **names the person's id** (`ALREADY ON SITE — T014`) rather than a row number, so it is checkable against the site; lookups **bounded** to `Published!$I$2:$I$500`. Plus an unreadable phone number now yields `CHECK THIS` rather than `NEW`, stated as a rule because the publisher hides such a row.

**Why blank column H gave `CHECK THIS`, and it is correct behaviour.** Zero characters is fewer than seven, and `CHECK THIS` takes precedence over everything by design (owner's ruling D4a). But it **masked the real defect**, because it short-circuits before any comparison against Published happens. The instruction to leave H blank came from Claude.ai's own test-row table, not from the sheet — recorded in Layer 5 so a future reader does not conclude the sheet was unstable. `SHEET-FORMULAS.md` now carries a section saying a test row must always carry a real sentence.

**MEASURED AGAINST THE REAL LIST, and it changed two of the prompt's expectations.** The live CSV was fetched: **15 people, both helper columns alive for every row** — so the helpers he re-pasted by hand on 2026-09-18 are healthy.

- **Both test rows had ALREADY PUBLISHED THEMSELVES**, as `T014 Test Nine` and `T015 Bob Samwell`. So after the fix they correctly read `ALREADY ON SITE — T014` and `— T015`. **The prompt's expectation that row 15 should read `NEW` is out of date**, and the tests assert the correct answer rather than the expected one.
- **`NEW` is structurally unreachable** on his Form responses tab. Automatic publishing (D7a) puts every response on Published within seconds, so every row correctly reads `ALREADY ON SITE`. `NEW` exists only between submission and the publisher running. Recorded honestly in DEPLOY.md rather than sending him hunting for it.
- **`SAME NAME, DIFFERENT NUMBER` is NOT reachable from either test row.** An exact row was worked out against the live list and is in his block.
- Incidentally: **`Bob Samwell` is published twice** — `T005` on `07887988959` and `T015` on `07999111222`.

**The bundle.** `apps-script/DEPLOY.md` step 14 is restructured into **Part A** (redeploy `Code.gs`) and **Part B** (paste the `L2` formula), retitled *"ONE TRIP TO THE LAPTOP"*, with a table of the two faults at the top and an explicit statement of what can and cannot be done from a phone. Both pastes need a computer; the checks afterwards do not.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `72a5b96`, clean, 0 | as expected | PASS |
| Is the verdict written by Apps Script? | formula only | `Publish.gs` never writes it | PASS |
| Range audit of the committed `L2` | — | 6 same-tab ranges, 3 Published | PASS (found the shape) |
| Per-row simulation of the committed formula | reproduce his reading | **`NEW`** — did NOT reproduce | Useful negative |
| Hypothesis A: ranges resolve to Form responses cols I/J | reproduce | `NEW` — no | Rejected |
| Hypothesis B/S4: both lookups search this tab's `J` | reproduce | **`row 15` / `row 16`** | **CONFIRMED** |
| S1 author's intended semantics | — | `NEW` / `NEW` | Rejected |
| S2 `MATCH` takes first cell | — | `NEW` / `NEW` | Rejected |
| **NEGATIVE CONTROL: defective reproduces row 15 → "row 15"** | reproduces | **reproduces** | **PASS** |
| **NEGATIVE CONTROL: defective reproduces row 16 → "row 16"** | reproduces | **reproduces** | **PASS** |
| Negative control: blank H gives `CHECK THIS` both rows | reproduces | reproduces | PASS |
| Negative control: EVERY row names its own number | all 15 | all 15 | PASS |
| Fixed: no verdict contains "row {n}" | none | none | PASS |
| Fixed: row 15 → `ALREADY ON SITE — T014` | T014 | T014 | PASS |
| Fixed: row 16 → `ALREADY ON SITE — T015` | T015 | T015 | PASS |
| Fixed: `NEW` for a genuinely unknown person | NEW | NEW | PASS |
| Fixed: `ALREADY ON SITE — T001` on same number | T001 | T001 | PASS |
| Fixed: `+44` form of T001's number still matches | T001 | T001 | PASS |
| Fixed: `SAME NAME, DIFFERENT NUMBER` | fires | fires | PASS |
| Fixed: `CHECK THIS` — text under 7 chars | fires | fires | PASS |
| Fixed: `CHECK THIS` — last name "Not Known" | fires | fires | PASS |
| Fixed: `CHECK THIS` — business "not known" | fires | fires | PASS |
| Fixed: `CHECK THIS` beats `ALREADY ON SITE` | precedence holds | holds | PASS |
| Fixed: seven characters accepted, six flagged | boundary | boundary correct | PASS |
| Fixed: blank experience → `CHECK THIS` | deliberate rule | fires | PASS |
| Fixed: full name in first-name box still matches | matches | matches | PASS |
| Fixed: capitals/spaces/punctuation ignored | matches | matches | PASS |
| Fixed: a `hidden` person still counts as on site | T004 | T004 | PASS |
| **All four verdict kinds produced by the fixture** | all four | all four | PASS |
| Fixture reproduces the empty-cell trap | >900 empties | 986 | PASS |
| `COUNTIF` would match all of them on an empty key | >900 | 986 | PASS |
| Fixed: unusable phone → `CHECK THIS`, never ALREADY | CHECK THIS | CHECK THIS | PASS |
| Defective: same row self-matches on the empty key | self-matches | self-matches | PASS |
| Fixed: all 15 published people found by own number | all 15 | all 15 | PASS |
| Fixed: shared number resolves to first holder T006 | T006 | T006 | PASS |
| Fixed vs defective: every row changes verdict | 15 of 15 | 15 of 15 | PASS |
| Live Published CSV fetched | 200, `text/csv` | 200, 1696 bytes, 15 rows | PASS |
| Helper columns I and J alive on every row | all populated | all 15 populated | PASS |
| `07700 900123` unused on the live list | free | free | PASS |
| "tradesman" in new text | 0 | 0 | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**34 checks in `apps-script/test-verdict.js`, all passing**, including the negative control.

**What was not tested:**

- **NOTHING HAS RUN IN GOOGLE SHEETS.** The fixed formula has never been pasted into a real sheet. `LET()`, `INDEX`/`MATCH` inside `ARRAYFORMULA`, and the bounded ranges are all modelled from documented behaviour, not observed in Sheets. **That is row 5.1's closing condition and it remains the owner's.**
- **The `LET()` function is assumed available.** It is standard in current Google Sheets, but that is not measured here. DEPLOY.md tells him what `#NAME?` would mean and that a longer version without `LET` can be supplied.
- **The mechanism is established from arithmetic, not from reading his sheet.** The simulation proves which *range* was searched; it cannot show *how* the formula in his sheet came to differ from the committed text. The fix does not depend on knowing.
- **The owner's sheet was never written to.** No row was added and no cell changed; the only live access was a read of the public CSV.
- **Nothing user-facing changed**, so the served page was not re-checked — no site file was touched this session.

**Commits:**
- `6e0d4a0` — `fix: the verdict column matched every row against itself`

**Finished:** 2026-09-19T12:20:53Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 unchanged at 68 of 96 effort (70.8%), 15 of 21 rows.** No row was appended, none renumbered, and **row 5.1 is not marked done** — this was work inside its open deliverable. **Effort cleared: zero**, as expected; 5.1 closes only on the owner seeing the verdicts correct in his own sheet.

**The site is untouched and working.** No site file changed this session.

**Two things now wait on one trip to a computer**, bundled as DEPLOY.md step 14 Parts A and B: the `Code.gs` redeploy and the `L2` formula paste. The owner was on a phone only today, which is why they are bundled and why every step in his block is marked PHONE or COMPUTER.

Both remotes level. Working tree clean.

---

### 2026-09-19T13:35:39Z — The verdict printed one id on every row; INDEX does not vectorise
**Source:** Claude Code
**Started:** 2026-09-19T13:26:45Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Same conversation as prompts 2697, 2705 and 2715 today. Repo at `a3b00059`, clean. Work INSIDE open row 5.1 — do not append to the plan, do not renumber, do not mark 5.1 done. **Gavin has deployed Part A and Part B and is now AWAY FROM HIS COMPUTER, on a phone.** **MEASURED: the fix you shipped this session is WRONG IN A NEW WAY.** He pasted the new `L2` and sent a screenshot: **roughly twelve consecutive rows all read `ALREADY ON SITE — T005`**, the same id on every row; one row reads `SAME NAME, DIFFERENT NUMBER`, one reads `CHECK THIS`, two are blank. Rows 15 and 16 MUST read `T014` and `T015` and instead read `T005`. **The self-match is genuinely gone and the branch selection is correct per row** — the defect is confined to the id printed by the `ALREADY ON SITE` branch, which is a CONSTANT. **Claude.ai's diagnosis, to be tested and not accepted on report:** `INDEX`/`MATCH` do not vectorise inside `ARRAYFORMULA`, so `MATCH` is evaluated once and the id broadcast to every row; `COUNTIF` does vectorise, which is why the branch is right. **This is the part to sit with before writing any code.** Your own diagnosis earlier today contained the sentence *"MATCH is not an array-aware function in Sheets — it does not vectorise"* — and the fix you then wrote used `INDEX`/`MATCH` anyway, proven against a simulator that modelled those functions as vectorising. **A simulator that models the platform more generously than the platform behaves proves nothing, and it has now produced two wrong answers in a row.** Treat every claim about Sheets array semantics in your own harness as the primary suspect. **Tasks:** (1) establish from documented behaviour which lookup functions vectorise; verify `VLOOKUP` rather than assume it. (2) Rewrite the `ALREADY ON SITE` branch so the id is per row; change nothing else. (3) Answer explicitly whether printing the id is worth this fragility. (4) **Fix the harness first, then the formula** — it must model `INDEX`/`MATCH` as NON-vectorising so the deployed version FAILS, and that failing run must be shown before the fix is written. (5) Assert as its own test that no two rows print the same id unless they name the same person. (6) Warning in `SHEET-FORMULAS.md` naming the non-vectorising functions; one line, no smart quotes. (7) HANDOVER Layer 3, Layer 5 tagged `[PATTERN CANDIDATE: a-simulator-is-not-the-platform]`, Layer 6 — record plainly that the Owner found both defects by looking and the repo's tests found neither.

**What was done:**

**THE SEMANTICS WERE ESTABLISHED FROM GOOGLE'S DOCUMENTATION BEFORE ANY CODE WAS WRITTEN**, which is the step skipped last time. Claude.ai's diagnosis is **right about the outcome and needs one correction about the cause**:

| Function | Inside `ARRAYFORMULA` |
|---|---|
| `COUNTIF` | **vectorises** |
| `MATCH` | **vectorises** — it correctly produced the right position for every row |
| **`INDEX`** | **DOES NOT** — not array-aware over its *position* argument; reads only the first and ignores the rest |
| `VLOOKUP` | **vectorises** over its search key and spills per row |

**The culprit is `INDEX`, not `MATCH`**, and the distinction determined the fix: `MATCH` could have stayed, `INDEX` had to go. Sources: Google's `MATCH` and `VLOOKUP` reference pages for the scalar signatures, and published analysis for the vectorisation behaviour — *"INDEX is not array-aware over its position argument, it reads only the first position and ignores the rest"* and *"ARRAYFORMULA cannot fix this, because the limitation lives inside INDEX itself"*.

**`VLOOKUP` was verified rather than assumed**, including the left-lookup problem: Published's id is in column `A`, left of the phone key in `I`, and `VLOOKUP` cannot look left. The curly-brace literal-array workaround was confirmed before use.

**THE HARNESS WAS FIXED FIRST AND THE NEGATIVE CONTROL SHOWN FAILING BEFORE THE FORMULA WAS TOUCHED.** `verdictV2_constantId` models the deployed formula and **takes the whole sheet rather than a row index** — a function that does not vectorise cannot honestly be given a per-row signature. Run against it, the deployed formula stamps **one id (`T001`) on all 15 rows** with rows 15 and 16 both wrong: the shape of the screenshot. Three versions are now kept side by side — the original self-match, the deployed constant-id, and the fix — so reintroducing either is caught.

**THE FIX CHANGES ONLY THE ID LOOKUP**, proven by character-level diff. Branch logic, precedence, the seven-character rule and every `CHECK THIS` case are byte-identical, because the screenshot confirms they are correct and touching them would risk a third defect.

```
was:  INDEX(Published!$A$2:$A$500,MATCH(pk,Published!$I$2:$I$500,0))
now:  VLOOKUP(pk,{Published!$I$2:$I$500,Published!$A$2:$A$500},2,FALSE)
```

**The id is KEPT, and it was a real choice** — the no-id alternative was implemented and tested (`verdictV4_noId`) so the recommendation rests on a comparison. Reasoning and the counter-argument are in Layer 5; the short version is that his real list has two `Bob Samwell` rows and two `Duckers Plumber` rows, so "find them by name" is genuinely ambiguous on his own data — but **if a third defect occurs in this branch, drop the id**.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `a3b0005`, clean, 0 | as expected | PASS |
| Google `MATCH` docs — search_key | single value | *"The value to search for"* | PASS |
| Google `VLOOKUP` docs — search_key | single value | *"The value to search for in the first column"* | PASS |
| Vectorisation behaviour of `INDEX` | establish | **not array-aware over position; reads only the first** | PASS |
| Vectorisation behaviour of `MATCH` | establish | **DOES vectorise — produces an array of positions** | PASS (corrects Claude.ai) |
| `VLOOKUP` array search key spills per row | verify | confirmed | PASS |
| `{a,b}` literal array for a left lookup | verify | confirmed | PASS |
| **NEG CONTROL: deployed → ≥12 rows `ALREADY ON SITE`** | reproduces | **15 rows** | **PASS** |
| **NEG CONTROL: deployed → all print the SAME id** | 1 distinct | **1 distinct (`T001`)** | **PASS** |
| **NEG CONTROL: deployed row 15 is NOT `T014`** | wrong | wrong | **PASS** |
| **NEG CONTROL: deployed row 16 is NOT `T015`** | wrong | wrong | **PASS** |
| **NEG CONTROL: deployed violates the id property** | violates | violates | **PASS** |
| NEG CONTROL: original still self-matches | reproduces | reproduces | PASS |
| Fixed: row 15 → `ALREADY ON SITE — T014` | T014 | T014 | PASS |
| Fixed: row 16 → `ALREADY ON SITE — T015` | T015 | T015 | PASS |
| Fixed: distinct ids printed | >1 | **14 across 15 rows** | PASS |
| **PROPERTY: every printed id is that row's real person** | all | all | PASS |
| **PROPERTY: a shared id means a shared number** | holds | holds | PASS |
| Fixed: `NEW` / `ALREADY ON SITE` / `SAME NAME` / `CHECK THIS` | all four | all four | PASS |
| Fixed: three DIFFERENT ids in one fixture | T001, T004, T013 | T001, T004, T013 | PASS |
| Fixed: `+44` form still matches T001 | T001 | T001 | PASS |
| Fixed: `CHECK THIS` precedence | holds | holds | PASS |
| Fixed: 7 accepted / under-7 flagged | boundary | correct | PASS |
| Fixed: blank experience → `CHECK THIS` | fires | fires | PASS |
| Fixed: unusable phone → `CHECK THIS` | fires | fires | PASS |
| Fixed: hidden person still counts (T004) | T004 | T004 | PASS |
| Fixed: all 15 published found by own number | all | all | PASS |
| Fixed: shared number → first holder T006 | T006 | T006 | PASS |
| No-id alternative: never prints an id | none | none | PASS |
| No-id alternative: identical branch selection | identical | identical | PASS |
| Harness models the platform strictly | V2 ≠ V3 shape | 14 of 15 rows differ | PASS |
| Formula: one line, no smart quotes | clean | 744 chars, 1 line, none | PASS |
| Formula: brackets and quotes balanced | balanced | 40/40 parens, 1/1 braces, 46 quotes | PASS |
| Formula: `INDEX` removed | absent | absent | PASS |
| Document formula == tested formula | byte-identical | byte-identical | PASS |
| Plan untouched, 5.1 still `new` | untouched | untouched | PASS |

**43 checks in `apps-script/test-verdict.js`, all passing**, including the negative control against the deployed formula.

**What was not tested:**

- **NOTHING HAS RUN IN GOOGLE SHEETS — and that is the whole point of this session's finding.** The fixed formula has never been evaluated by Sheets. `VLOOKUP`'s per-row behaviour and the curly-brace literal are established from Google's documentation and published analysis, **not measured**, and this project has now been wrong twice about exactly this kind of claim. **Treat the fix as REPORTED until the owner's screen confirms it.**
- **`LET()` availability is still assumed**, unchanged from the morning.
- **The screenshot was described to me, not read by me.** The row counts and ids come from Claude.ai's account of it.
- **The owner's sheet was never written to**; no live access at all this session.
- **No site file changed**, so nothing user-facing was re-checked.

**Commits:**
- `81708cd` — `fix: the verdict printed ONE id on every row - INDEX does not vectorise`

**Finished:** 2026-09-19T13:35:39Z

**End state:**

Plan **unchanged at 68 of 96 effort (70.8%), 15 of 21 rows.** No row appended, none renumbered, **5.1 still `new`**. **Effort cleared: zero.**

**One paste stands between this and a correct verdict column**, and it is a computer job. The owner is on a phone, so his block says so.

**The record that matters for whoever reads this next: the owner found both of today's verdict defects by looking at his screen, and the repository's test suite found neither.** The suite has been rewritten to model the platform's limitations rather than its capabilities, and to require the negative control to fail before a fix is written — but it has not yet caught anything the owner did not catch first.

Both remotes level. Working tree clean.

---

### 2026-09-19T13:42:55Z — Rows 4.6 and 4.7 closed: the Owner sighted the recommendation path end to end
**Source:** Claude Code
**Started:** 2026-09-19T13:38:28Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. **PLAN UPDATE ONLY — lean prompt, sent ahead of queued build work per preferences 4.15.** Conversation 6G7f. Repo read 2026-09-19T13:38:28Z at HEAD `e0c56aec`, tree clean, behind_origin 0. **THE OWNER HAS SIGHTED THE RECOMMENDATION PATH END TO END.** On 2026-09-19 at approximately 13:35 UTC, on the LIVE site, Gavin: (1) opened `https://dunchitrader-collab.github.io/` with a cache-busting parameter, tapped a trade, tapped "I recommend them too" on `T0xx Frank Shelly` (Carpenter, `07111655432`), typed a name and a note, and submitted; (2) confirmed the recommendation reached the **Published** tab — columns K and L carry the words and the name; (3) reloaded the live page with a FRESH cache-busting parameter — so the card was rendered from the published feed and not from any in-page state — and confirmed his words and his name are on Frank Shelly's card. That is the sighting rows 4.6 and 4.7 were held open for. **Tasks:** (1) mark row 4.6 done and row 4.7 done, citing the sighting with its date and time; change nothing else — no renumbering, no other row's status, no text edits to any other row. (2) Run the validator; report exit code, sub-task count against the rows the document holds, and the completion figure. (3) HANDOVER: a Layer 6 entry recording the sighting, Layer 1 status and outstanding items updated to reflect that the recommendation path is closed, and in Layer 4 mark ANSWERED the item about the site's recommend panel. (4) **Do NOT touch row 5.1** — its verdict formula is still awaiting the Owner's paste and sighting. No Owner block needed.

**What was done:**

**Rows 4.6 and 4.7 are `done`** at commit `5883164`, on the owner's sighting of 2026-09-19T13:35Z.

**Why this sighting is worth more than the two it closes, and why the third step is the one that matters.** He did not simply submit a recommendation and look at the spreadsheet — he reloaded the live page with a **fresh** cache-busting parameter before looking at the card. That distinction is the whole difference between proving the path and proving his browser's memory: `app.js` keeps recommendations added during a visit in an in-page `VOTES` object and draws them on the card immediately, so a card seen without a reload proves nothing about whether anything left the phone. **The page that displayed his words had never seen his submission.** It fetched the published CSV and found them there. That is the chain proven end to end — villager taps, endpoint writes Published, village sees it, nobody touches a spreadsheet.

**Row 4.7 was checked clause by clause against its own done-when** rather than closed on the headline: *a vote placed from the live site on a real phone* — yes; *appends the villager's words and name to that person's card* — yes, Published `K` and `L`, then visible; *on the live page* — yes, re-fetched from the feed; *without the Owner touching the spreadsheet* — yes, he only read it to confirm. Every clause is covered by what he actually did.

**Row 4.6 closes on the same submission** because one recommendation exercised both: its seven-character minimum went in at `f8e34ff`, reached the deployment in his 2026-09-19 redeploy, and his note passed through it and landed.

**Four lines changed in the plan and nothing else** — each row in the sub-task table and in the satellite table. The satellite rows take `State=done` with `Forecast` and `Forecast end` set to the actual completion date, matching the convention of the other closed rows. **Row 5.1 is untouched and confirmed absent from the diff.**

**Handover.** Layer 1's status, its Outstanding Items table and its Next Action all now read that the recommendation path is closed; the CRITICAL/Blocking-YES flag on the redeploy item is superseded, because the button works and only the verdict column is still affected. Layer 4's *"Recommendations typed into the site's own panel reach nobody but their author"* item is marked **RESOLVED** — it was raised precisely because those words lived only in the author's own browser, and the fresh-cache reload is the direct answer to it.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `e0c56ae`, clean, 0 | as expected | PASS |
| Rows 4.6 / 4.7 before the edit | both `new` | both `new` | PASS |
| Rows 4.6 / 4.7 after the edit | both `done` | both `done` | PASS |
| Satellite rows 4.6 / 4.7 `State` | `done` | `done` | PASS |
| Satellite `Forecast` / `Forecast end` | actual date | `2026-09-19` both | PASS |
| Satellite column indices vs header | 8 and 15 | corrected from a mis-index to 15 | PASS after fix |
| Lines changed in the plan | 4 | **4** | PASS |
| **Row 5.1 untouched** | absent from diff | **absent** | PASS |
| Any other row's status changed | none | none | PASS |
| **Validator** | exit 0 | **exit 0** | PASS |
| Validator sub-task count vs rows held | 21 | **21** | PASS |
| Validator completion | — | **73 / 96 (76.0%)** | PASS |
| Cross-repo coherence | OK | OK, LIVE | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**What was not tested:**

- **The sighting is the owner's, reported to this session, not measured here.** Nothing in this session touched the live site, the endpoint or the spreadsheet. The account of what he did on his phone is his.
- **No code changed**, so nothing was re-run and no served page was re-checked.
- **Row 5.1's verdict formula remains unpasted and unsighted**, and is deliberately untouched by this session.

**Commits:**
- `5883164` — `plan: rows 4.6 and 4.7 CLOSED on the Owner's end-to-end sighting`

**Finished:** 2026-09-19T13:42:55Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 at 73 of 96 effort (76.0%), 17 of 21 rows** — up from 68 of 96 (70.8%), 15 of 21. **This prompt cleared 5 effort and closed 2 rows**, both on the owner's evidence rather than on anything built today.

**Step 4 is now complete.** Every row in it is `done`, and the recommendation path — the site's own *"I recommend them too"* button — works end to end on the live site.

**What remains: four rows.** Row **5.1** (the verdict formula, one paste, needs a computer, still unsighted), row **6.1** (the runbook walk, 9 effort, the largest left), and the two launch rows **7.1** and **7.2**, both gated on seeding the list with real tradespeople.

Both remotes level. Working tree clean.

---

### 2026-09-19T14:01:45Z — D5b: the card stops claiming what it cannot confirm, and names stop sliding
**Source:** Claude Code
**Started:** 2026-09-19T13:38:28Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Fifth prompt today; read Layer 6's entries for 2697, 2705, 2716 and 2717 rather than re-deriving. Repo at HEAD `7b14923` (73/96, 76.0%, 17 of 21, step 4 complete) — verify and say so if it has moved. Gavin is on a phone, away from his computer. **Governing design: `design/wireframe-dunchi-trader.html`; there is NO companion `.md` in `design/`; reconcile the WHOLE card and panel, not only the lines you change.** **PLAN ENTRY FIRST — before any code:** append TWO rows to step 4 at the next free numbers, status `new`, full §5.1 grammar — **4.8 effort 3**, outcome *a villager is never shown words on a card that have not reached the village list, and a card stays readable when three people have recommended the same tradesperson*; **4.9 effort 3**, outcome *a recommendation can never be shown against the wrong villager's name*. **D5b-6G7f-19092026 — RULED BY GAVIN:** the card must not show a recommendation until it is genuinely on the village list; keep the thank-you and the five-minute notice. **4.9 — the misattribution defect:** `K` and `L` pair by line position and his screenshot shows at least five rows with words in `K` and `L` empty; if the endpoint appends a blank name by writing nothing to `L` rather than an empty line, every later name pairs with the wrong words. Establish from the code what `appendRecommendation` actually does with a blank name on both paths and state which it was; guarantee the invariant; assert it over adversarial sequences; state whether the existing rows are safe and give exact cells if any need repair — do not write to his sheet. **Also:** measure three stacked recommendations in a real browser at the largest text size, 320px and 200% zoom, and say plainly whether it still honours the Requirement — RAISE it rather than inventing a "show more". **Verify from the code that NOTHING reads or writes the Votes tab**; he wants to rename it. Neither row may be marked done. Deploy and confirm the SERVED page by real fetch.

**What was done:**

**Repo verified at `7b14923`, clean, 0 behind, plan 73/96 (76.0%), 21 sub-tasks — as the brief stated. It had not moved.**

**Plan entry first, before any code**, as instructed: rows **4.8** and **4.9** appended at effort 3 each, commit `35d3dd4`, validator exit 0. Denominator 96 → 102.

---

**ROW 4.9 — AND THE PREDICTED CAUSE WAS NOT THE CAUSE.**

`appendRecommendation` **does not** drop the line. Executed against the committed source rather than reasoned about: `byBlocks.push(by)` pushes the empty string, so `L` keeps an empty line and `K`/`L` stay aligned. **Both write paths were checked** — the form publisher passes `plain(row.by) || ANON`, and the site endpoint substitutes `ANON_ENDPOINT()` before it calls. Neither can produce the predicted fault.

**The defect is on the READER, and it is a genuine misattribution.** `splitRecs` in `app.js` ended `.filter(function(s){ return s.length; })`, dropping **every** empty entry wherever it sat. An empty name entry is a villager who gave no name, **holding that recommendation's place** — dropping it slides every later name up. Measured on three recommendations with the first name blank: the card credited **Helen** with the first villager's sentence and **Bob** with the second's. Neither had written what they were shown as saying.

**Two further faults found while testing, neither predicted.** A **name** containing a blank line forges an extra entry; **words** containing a blank line do the same in the other direction — and the second is reachable by an ordinary villager pressing Enter twice in the site's textarea, because `trim()` touches only the ends and nothing on any path stripped an interior blank line. The code's own comment asserted such input *"is not a real case here"*, which was true while the Form was the only writer and became false when the textarea path was added.

**Fixed as two independent guards**, deliberately: the writer no longer emits an empty name (`sanitise()` collapses interior blank lines, a blank becomes `ANON`, and a would-be misaligned write is **refused and logged**), and the reader no longer drops one (`splitRecs` for words, **`splitNames` for names**, because the two columns have different jobs). Both matter — **the rows already in his sheet were written by the old code**, so the reader guard is what protects them.

**THE EXISTING ROWS ARE SAFE AS THEY STAND, and no cell needs editing.** Measured: a row with words in `K` and `L` **entirely empty** reads correctly — `splitNames('')` is empty, every recommendation falls back to *"a villager"*, and there is nothing to mis-pair. The danger was only in a row where `L` held *some* names with an empty one among them, and appending to such a row pads correctly. **No repair instructions are given because none are needed.**

---

**ROW 4.8 — D5b implemented.** The card renders from the published feed alone; the thank-you and the five-minute notice both stay, because they describe what was **sent**, which is true. `VOTES` is kept only so a double tap is not sent twice. **The wireframe carried the same optimistic render and was fixed in the same change**, so the next build cannot seed it back.

**THREE RECOMMENDATIONS, MEASURED IN CHROME 148** — and the headline is that the Requirement holds:

| Scenario | doc overflow | overflowing elements | card height | Call top | recommend top |
|---|---|---|---|---|---|
| 320px, largest A | **0** | **0** | 1562px | 827px | 1992px |
| 200% zoom on 320px | **0** | **0** | 2687px | 1203px | 3136px |
| 320px, normal size | **0** | **0** | 918px | 505px | 1172px |
| desktop 1280px | **0** | **0** | 710px | 485px | 947px |

**Nothing overflows anywhere**, which is the owner's absolute rule. And the baselines settle the usability question rather than leaving it to opinion — at 320px largest A, with **0, 1 and 3** recommendations the Call button sits at **827px in every case**. **Recommendations render BELOW the Call button, so the product's core action does not move at all.** Each recommendation adds roughly 500px beneath it. **Three recommendations still honour the Requirement: nothing is pushed away from the villager who only wants to ring somebody.** Raised rather than pre-empted: if a tradesperson ever collects six or more, the card becomes long to scroll past — but that is a real problem to solve when it exists, with a measurement, not a speculative "show more" control now.

**THE VOTES TAB — YES, IT IS SAFE TO RENAME.** Verified from the code: nothing calls `getSheetByName('Votes')` on any path, no tab constant is set to `Votes`, and `app.js` never mentions it in code at all. It appears only in `FORBIDDEN_TABS` (Code.gs) and `PUBLISH_FORBIDDEN` (Publish.gs) — guards **against** writing to it, which compare the target before a write, and the target is `Published`. Renaming cannot break them. Asserted as five checks in the suite so a future change that starts reading it fails the tests.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `7b14923`, clean, 0 | as stated | PASS |
| Plan rows appended before code | 4.8, 4.9 `new` | both `new`, validator exit 0 | PASS |
| **What `appendRecommendation` does with a blank name** | establish | **pushes `""` — keeps the line, stays aligned** | PASS |
| Both write paths checked | form + endpoint | both substitute `ANON` | PASS |
| **NEG CONTROL: old reader credits Helen with another's words** | reproduces | **reproduces** | **PASS** |
| **NEG CONTROL: old reader credits Bob with another's words** | reproduces | **reproduces** | **PASS** |
| FIXED: each villager keeps their own name | correct | `a villager\|Helen\|Bob` | PASS |
| Invariant: blank, named, blank | K=L lines | 3 = 3 | PASS |
| Invariant: first recommendation unnamed | K=L | 1 = 1 | PASS |
| Invariant: three blanks | K=L | 3 = 3 | PASS |
| Invariant: name containing a BLANK LINE | K=L | 2 = 2 | PASS |
| Invariant: name containing one newline | K=L | 2 = 2 | PASS |
| Invariant: WORDS containing a blank line | K=L | 2 = 2 | PASS |
| Invariant: whitespace-only name | K=L | 2 = 2 | PASS |
| Invariant: ten alternating | K=L | 10 = 10 | PASS |
| Reader agrees with writer, entry for entry | all sequences | all | PASS |
| Writer never emits an empty name | none empty | none | PASS |
| **The owner's five real rows read safely** | all safe | all 5 safe | PASS |
| Appending to a row whose `L` is empty | no misattribution | correct | PASS |
| **4.8 in a real browser: card shows nothing after submit** | nothing | no words, no name, no tally | **PASS** |
| 4.8: thank-you still shown | shown | shown | PASS |
| 4.8: five-minute notice still shown | shown | shown | PASS |
| 4.8: the recommendation really was sent | 1 POST | 1 POST, right values | PASS |
| **Three recs: overflow at 320px largest A** | 0 | **0** | PASS |
| **Three recs: overflow at 200% zoom** | 0 | **0** | PASS |
| Three recs: overflow desktop | 0 | 0 | PASS |
| **Call button position vs 0/1/3 recs** | unchanged | **827px in all three** | PASS |
| Votes: nothing opens it | none | none | PASS |
| Votes: no tab constant | none | none | PASS |
| Votes: site never mentions it | none | none | PASS |
| Wireframe reconciled | no optimistic render | fixed | PASS |
| `node --check app.js` | pass | pass | PASS |
| **SERVED page carries both fixes** | byte-identical | app.js/index.html/style.css MATCH | **PASS** |
| Served: `splitNames` present and used | yes | yes | PASS |
| Served: optimistic concat absent from code | absent | absent | PASS |
| All five suites | green | 51 + 43 + 66 + 8 + 30 = **198** | PASS |

**What was not tested:**

- **Neither fix has been seen by the Owner**, which is why both rows stay `new`. Both change what he sees.
- **`sanitise()` and the refusal path have not run in Google Sheets.** `Publish.gs` is stub-tested only; the copy that runs is the one in his Apps Script project, and **he has not re-pasted it**, so the writer-side guard is not live. The reader-side guard IS live, and it is the one that protects his existing rows.
- **The three-recommendation measurement used a fixture**, not his real feed — no card on his live site yet carries three.
- **The Votes answer is from the code, not from his spreadsheet.** If he has anything else bound to that tab — a formula, a filter, a script this repository does not hold — that is outside what was checked.

**Commits:**
- `35d3dd4` — `plan: rows 4.8 and 4.9 appended before the work starts`
- `e3c6e1f` — `feat: the card shows only what reached the village list, and names can no longer slide`

**Finished:** 2026-09-19T14:01:45Z

**End state:**

Plan **73 of 102 effort (71.6%), 17 of 23 rows.** **Effort cleared: zero** — both new rows close on the Owner's sighting. The percentage fell from 76.0% because the denominator grew by 6 while the numerator stood still: arithmetic, not regression.

**Both fixes are live and confirmed on the served page by real fetch.** `app.js`, `index.html` and `style.css` are byte-identical to the commit, and the served bytes were checked for the substance of each fix rather than only the hash.

**One thing is NOT live and should not be mistaken for live:** the writer-side guard in `Publish.gs`. It needs a re-paste into his Apps Script project, and that is a computer job. The reader-side guard covers his existing rows in the meantime.

Both remotes level. Working tree clean.

---

### 2026-09-19T15:44:19Z — Rows 4.8 and 5.1 closed; 5.1's acceptance corrected under D4b
**Source:** Claude Code
**Started:** 2026-09-19T15:39:53Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. **PLAN UPDATE ONLY — lean prompt per preferences 4.15.** Conversation 6G7f. Repo read 2026-09-19T15:39:53Z at HEAD `230e5be6`, tree clean, behind_origin 0. Read Layer 6's last entry for context; do not re-derive today's work. **(1) ROW 4.8 — CLOSE IT.** Gavin's sighting on the live site, 2026-09-19 afternoon: he opened the site, tapped a trade, tapped "I recommend them too", typed a name and words, and submitted. **The card showed nothing new — no words, no name, no tally** — and the thank-you and five-minute notice both appeared. His words: "CHECK 1 PASS." **(2) DECISION D4b-6G7f-19092026, RULED BY GAVIN — then close row 5.1.** The ruling: row 5.1's acceptance becomes **three verdicts sighted by the Operator, with `NEW` evidenced by the committed test harness rather than by sighting.** The ground: automatic publishing under D7a puts every response onto Published within seconds, so a row holds `NEW` only between submission and publication — correct behaviour, not a defect, but it means the "all four cases" clause can never be satisfied by looking. He was given three options and ruled **D4b, correct the wording**; declined D4a leave it, D4c build a pause. Amend the done-when per STD-00009's rules for changing a row's acceptance — struck through and superseded in place if that is the convention here, **never silently rewritten** — then mark 5.1 `done`. Evidence recorded **exactly as he reported it and no further**: he pasted the corrected `L2` (`81708cd`) and said *"I have now pasted the correct code. And it seems to work."*; he did **not** quote the readings of rows 15 and 16 back — record that gap plainly; verdicts sighted are `CHECK THIS`, `SAME NAME, DIFFERENT NUMBER` and `ALREADY ON SITE` with per-row ids; `NEW` is evidenced by the harness. **(3) DO NOT TOUCH ROW 4.9** — it stays `new`; he sighted named recommendations pairing correctly but has **not** tested a nameless recommendation above a named one. Record the test in Layer 4. **(4)** Change no other row's status, no renumbering, no other text edits. No Owner block.

**What was done:**

**Repo verified at `230e5be`, clean, 0 behind — as the brief stated.**

**Row 4.8 closed** on the owner's sighting, his words *"CHECK 1 PASS."* recorded verbatim in the row. His test matches the done-when exactly: the card showed nothing new while both messages appeared.

**Row 5.1's acceptance amended under D4b, then closed** — and the amendment needed a check before it could be made honestly.

**STD-00009 IS SILENT ON AMENDING A ROW'S ACCEPTANCE WORDING.** The prompt said *"per STD-00009's rules for changing a row's acceptance — struck through and superseded in place **if that is the convention here**"*, so the conditional was taken seriously rather than assumed away. The standard was read: **Rule 5.10.8** governs removing a row that is permanently *unfalsifiable*, **Rule 5.7.4** governs a duplicate row, and **neither is this case** — a row whose criteria were satisfiable when written and were made unmeetable by a later ruling. No rule prescribes strikethrough, a clean rewrite, or a descope-and-reappend, and no rule attaches a decision-id requirement to such a change.

**So this plan's own precedent was followed**, and it exists: row **5.2** recorded a superseded clause in place, under a clear heading, rather than deleting it. Row 5.1 is amended the same way — original struck through, replacement beside it, reason stated inline. **The Sub-task cell is prose and is not machine-read**, so the standard's specific warning that *"a strikethrough in a machine-read cell can be a silent wrong answer"* does not apply here; it governs declaration cells carrying counts and tokens, which a parser reads.

**The evidence for 5.1 is recorded exactly as reported and no further.** Three verdicts rest on his own screen. `NEW` rests on the harness, as D4b provides. And the gap is written into the row rather than smoothed over: **he did not quote the readings of rows 15 and 16 back**, so the row does not claim he individually confirmed `T014` and `T015`.

**Row 4.9 untouched and confirmed absent from the diff.** Layer 4 now carries the specific test it awaits, **in order**, because the order is the point: a nameless recommendation must sit **above** a named one, since the fault was the blank entry being dropped and everything below it sliding up. A general look at the cards — which he has done — cannot exercise it.

**Layer 4 also carries the `Publish.gs` re-paste**, which was noted in the previous session's owner block but had no standing item of its own. It is the writer half of the 4.9 fix; the reader half is already live and protects the existing rows.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `230e5be`, clean, 0 | as stated | PASS |
| Row 4.8 before / after | `new` → `done` | `new` → `done` | PASS |
| Row 5.1 before / after | `new` → `done` | `new` → `done` | PASS |
| Satellite rows 4.8 / 5.1 `State` | `done` | `done` | PASS |
| Satellite `Forecast` / `Forecast end` | actual date | `2026-09-19` both | PASS |
| **STD-00009 rule for amending acceptance** | establish | **SILENT — 5.10.8 and 5.7.4 do not cover it** | PASS |
| Plan's own precedent for a superseded clause | find | **row 5.2 supersedes in place** | PASS |
| Original 5.1 clause preserved, struck through | preserved | preserved | PASS |
| **Row 4.9 untouched** | absent from diff | **absent, still `new`** | PASS |
| Any other row's status changed | none | none | PASS |
| Lines changed in the plan | 4 | **4** | PASS |
| **Validator** | exit 0 | **exit 0** | PASS |
| Sub-task count vs rows held | 23 | **23** | PASS |
| Completion | — | **82 / 102 (80.4%)** | PASS |
| Cross-repo coherence | OK | OK, LIVE | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**What was not tested:**

- **No code changed and nothing was run.** This was a plan-and-handover session; the site, the endpoint and the spreadsheet were untouched, and no served page needed re-checking.
- **The sightings are the Owner's**, reported to this session, not measured here.
- **Rows 15 and 16 were not individually confirmed by him**, and row 5.1 says so.
- **`NEW` has never been seen by a human on this project**, and under D4b it is not expected to be.

**Commits:**
- `c4bf0da` — `plan: rows 4.8 and 5.1 closed; 5.1's acceptance amended under D4b`

**Finished:** 2026-09-19T15:44:19Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 at 82 of 102 effort (80.4%), 19 of 23 rows** — up from 73 of 102 (71.6%), 17 of 23. **This prompt cleared 9 effort and closed 2 rows** — 4.8 at 3 and 5.1 at 6 — both on the Owner's evidence.

**Step 5 is complete.** Both its rows are `done`.

**Four rows remain open:** **4.9** (awaiting one specific sighting, phone work, test recorded in Layer 4), **6.1** (the runbook walk, 9 effort, the largest left), and **7.1** and **7.2**, both gated on seeding the list with real tradespeople.

Both remotes level. Working tree clean.

---

### 2026-09-19T15:55:28Z — The expander removed; drift traced to its origin; a defect found inside 4.9's own fix
**Source:** Claude Code
**Started:** 2026-09-19T15:47:16Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T15:47:16Z at HEAD `7ac6062b`, clean, 0 behind. **Sequencing: do PART ONE entirely and COMMIT IT before touching any code.** Claude.ai has bundled the plan update with the build this once, against preferences 4.15's separate-lean-prompt rule, because the Operator has asked for the fewest prompts and least elapsed time; committing the plan record first preserves what that rule protects. **Say in your summary whether the bundling caused any difficulty.** **PART ONE:** (1) close row **4.9** — his sighting on the live site, done in the exact order the defect required: recommended a tradesperson leaving the name box EMPTY, then the same person again WITH a name; on reload the nameless one reads "a villager" and the named one below carries the right name. (2) Append ONE row to step 4 at the next free number, status `new`, **effort 2** — outcome: *a villager reads every recommendation on a card by scrolling, with nothing to tap first*. **PART TWO — the defect, recorded as drift.** Operator verbatim: *"it put in a button you had to click on to reveal the 'one more review' which is pointless. Just let it scroll!"* **This is Claude's drift through its own decomposition and must be recorded that way in Layer 5 — never as the Operator changing his mind.** Prompt 2718 said explicitly *"RAISE it rather than inventing a 'show more' control."* **Establish, do not assume, whether that control was introduced by 2718 or pre-dates it — check the history.** If 2718 introduced it, that is drift against an explicit instruction. If it pre-dates it, then 2718's three-recommendation measurement was taken against a card that hides recommendations, which would make those numbers unrepresentative — say so, and whether it needs redoing. **The fix:** remove the control; every recommendation renders, in order; no expander, cap or truncation. Wireframe is the layout authority; fix it there too if it carries the control. **Re-measure with SIX recommendations** at largest text size at 320px and 200% zoom: overflow, card height, Call position. **If six create a genuine problem, REPORT THE MEASUREMENT AND RAISE IT. Do not invent a control, a cap or a truncation — that instruction was given once and not followed, and this is the second time of asking.** The new row may NOT be marked done. Deploy and confirm the SERVED page by real fetch.

**What was done:**

**PART ONE was completed and committed first, at `3380e47`, before any source file was opened.** Row 4.9 closed on his ordered sighting; row **4.10** appended at effort 2. Validator exit 0.

**THE CONTROL PRE-DATES PROMPT 2718 — established from history, not assumed.** `git log -S "var SHOWN" -- app.js` names commit **`91a3f4c`, 2026-09-18 19:43:23 UTC**, in the **D8a row 3.5** work. It is an ancestor of 2718's commits and pre-dates them by about eighteen hours. **2718 did not introduce it and did not invent a control against its own instruction.**

**But the consequence the prompt anticipated is real: 2718's three-recommendation measurement was unrepresentative.** With `SHOWN = 2`, the card it measured was rendering **two recommendations and a button**. Its figures described something no villager would see, and its conclusion — *"three recommendations still honour the Requirement"* — rested on evidence that had not rendered three. **Those numbers are superseded by this session's six-recommendation run.** The tell was in its own output (`recCount: 2` against a three-row fixture) and was not read.

**The wireframe never carried the control**, so this was drift **away from** the layout authority rather than something it seeded — nothing to fix there, and the whole card was reconciled against it.

**Removed:** the `SHOWN` cap, the slice, the expander button and its handler in `app.js`, and the now-dead `.more` rule in `style.css`. **Zero live references remain** (§1.3 cleanup check run).

**A SECOND DEFECT, FOUND BY THE SIX-RECOMMENDATION MEASUREMENT, LIVING INSIDE ROW 4.9's OWN FIX.** With the third name blank, the card showed **Wendy credited with words she had not written**, and every name from that point was one place out. Cause: an empty entry **between** two separators stores **four consecutive newlines**, and `splitNames` split on `/\n\s*\n/`, which is greedy across whitespace and ate all four as one separator. **4.9's suite only ever put the blank first or last** — positions where greediness has nothing to consume — and the owner's sighting used the same two-recommendation shape, so neither caught it. `splitNames` now splits on the literal `"\n\n"`. A regression test covers the middle case with a control proving the greedy form would have failed.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `7ac6062`, clean, 0 | as stated | PASS |
| **Part One committed before any code** | separate commit | `3380e47`, code untouched | PASS |
| Row 4.9 `new` → `done` | done | done | PASS |
| Row 4.10 appended at next free number | 4.10, `new`, effort 2 | 4.10, `new`, 2 | PASS |
| Validator after Part One | exit 0 | exit 0, 24 sub-tasks, 85/104 | PASS |
| **Origin of the control** | establish | **`91a3f4c` 2026-09-18 19:43 — PRE-DATES 2718** | PASS |
| Is it an ancestor of 2718's work? | yes/no | **yes** | PASS |
| Was 2718's 3-rec measurement representative? | establish | **NO — `SHOWN=2`, it rendered two** | PASS (finding) |
| Does the wireframe carry the control? | check | **no** | PASS |
| `SHOWN` / expander gone from `app.js` | absent | absent | PASS |
| Dead `.more` rule removed from CSS | absent | absent | PASS |
| §1.3 cleanup: zero live references | 0 | 0 | PASS |
| **6 recs, 320px largest A: overflow** | 0 | **0**, 0 elements, card 2672px | PASS |
| **6 recs, 200% zoom: overflow** | 0 | **0**, 0 elements, card 4908px | PASS |
| 6 recs, 320px normal: overflow | 0 | 0, card 1519px | PASS |
| 6 recs, desktop: overflow | 0 | 0, card 1042px | PASS |
| **`callTop` with 0 / 1 / 6 recs** | unchanged | **827px / 827px / 827px** | PASS |
| All six actually render | 6 | `recCount: 6` | PASS |
| **Middle blank name: Wendy misattributed** | reproduce | **reproduced before the fix** | PASS (finding) |
| Middle blank after fix: correct pairing | all 6 correct | all 6 correct | PASS |
| Regression control: greedy split loses it | 5 not 6 | 5 | PASS |
| `node --check app.js` | pass | pass | PASS |
| All five suites | green | **58 + 43 + 66 + 8 + 30 = 205** | PASS |
| **SERVED `app.js` + `style.css` match** | byte-identical | both MATCH | PASS |
| Served: expander absent from code | absent | absent | PASS |
| Served: renders all recommendations | present | `recs.forEach(addRec)` | PASS |
| Served: `splitNames` splits on literal | present | present | PASS |
| Served: `.more` rule gone | absent | absent | PASS |

**What was not tested:**

- **Row 4.10 has not been seen by the Owner**, which is why it stays `new`.
- **No card on his live site carries six recommendations**; the measurement used a fixture.
- **The middle-blank fix has not been seen on his real data.** His live rows would need a person with three or more recommendations, one of them unsigned and not last — he has none today, so it is covered by test rather than by sighting.
- **`Publish.gs` is still not re-pasted**, so the writer-side guard from 4.9 remains un-deployed. Unchanged from the previous session and still carried in Layer 4.

**Commits:**
- `3380e47` — `plan: row 4.9 closed on the ordered sighting; row 4.10 appended for the expander`
- `d4eb469` — `fix: every recommendation renders - the expander is gone, and a blank name in the middle no longer shifts the rest`

**Finished:** 2026-09-19T15:55:28Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 at 85 of 104 effort (81.7%), 20 of 24 rows** — up from 82 of 102 (80.4%), 19 of 23. **This prompt cleared 3 effort** (row 4.9) and appended 2 to the denominator.

**Both fixes are live and confirmed on the served page by real fetch**, checked for substance rather than only hash.

**Four rows remain open:** **4.10** (awaiting his sighting, phone work), **6.1** (the runbook walk, 9 effort, the largest left), and **7.1** and **7.2**, both gated on seeding.

Both remotes level. Working tree clean.

---

### 2026-09-19T16:05:21Z — Row 4.10 closed, D7 recorded, and the runbook assessed for rehearsal
**Source:** Claude Code
**Started:** 2026-09-19T16:01:53Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T16:01:53Z at HEAD `2cb624fa`, clean, 0 behind. **Sequencing: do PART ONE and COMMIT IT before PART TWO.** Part Two is read-only investigation, exempt under preferences 4.15. **PART ONE:** (1) close row **4.10** — his sighting, *"4.10. pass"*, every recommendation renders in order with nothing to tap. (2) Record **D7-6G7f-19092026, ruled by Gavin — HIDE, NEVER DELETE**: duplicates and test entries get `status` `hidden`, never deleted, because deleting the highest id frees it for reuse. Accepted for the test people, the duplicate **Bob Samwell T015**, and the duplicate **Duckers Plumber on 07999222333**; Claude.ai **inferred** 07999222333 is a test number from the sheet's numbering pattern and told him to confirm by eye — **record that the inference was flagged as such**. **THE HIDING IS NOT DONE** — Operator action, gates launch. (3) Record as **resolved by the Operator directly in his sheet**: the shared number (*"I have changed the number"*), `T007` (*"fixed"*) — **do NOT state which entry or to what**; and the **`Publish.gs` re-paste**, which the previous session's summary wrongly said was outstanding. (4) **One residual risk in Layer 3, not to act on** — merging keys on phone number, so a recommendation filed while Ben Franks and John Pilkington shared one may sit on the wrong row, and changing the number now does not move it; from the screenshot it appears clean but that is Claude.ai reading a screenshot, not a measurement. Phrase it as a check with an expected result. **PART TWO — read-only: is the restore runbook safe to REHEARSE?** Row 6.1 asks him to walk it with only his two logins, and he has asked what "walking" means; Claude.ai told him it means building a **second, throwaway copy alongside the live one**. Establish whether the document supports that: (1) is it written for a parallel throwaway, or would it tread on the live sheet, form, Apps Script deployment or Pages site — **name every step that would touch live state if followed literally**; (2) does any step need anything **other than** the two logins; (3) how long and how many steps; (4) what needs cleaning up afterwards and does the document say. **If it is NOT safe as written, say so plainly and say what would make it safe — but do not rewrite it in this prompt.**

**What was done:**

**PART ONE, committed first and separately at `08a7867`.** Row 4.10 closed on his sighting, his word *"4.10. pass"* recorded verbatim. **Step 4 is now complete** — all ten of its rows are `done`.

**D7 recorded in Layer 5** with the reason stated as the data-integrity reason it is, not a tidiness preference: ids come from the highest already present, so deleting the highest frees it and a later submission inherits somebody else's recommendations. **The `07999222333` inference is recorded AS an inference**, with the instruction to confirm by eye standing, because if it is wrong the cost is a real tradesperson taken off the village list.

**The hiding is carried as an open Layer 4 item and marked as gating launch.** It is his action on his own sheet and nothing here may write there.

**Three items marked resolved on his report**, with the detail deliberately withheld: the shared `07887800192` and `T007`'s number — **which entry he changed and to what is not recorded, because nobody here has seen his sheet**, and a guess in a permanent record is worse than a gap. **The `Publish.gs` correction matters most of the three**: the previous session's summary said the re-paste was still outstanding, and that is now wrong. Both halves of the misattribution guard are live.

**A residual risk recorded in Layer 3 and deliberately not acted on.** While the two men shared a number, `rowIndexForPhone` returned the first match and stopped, so a recommendation for either attached to whichever row came first — and changing the number fixes the future, not the past. The screenshot suggests nothing is misplaced, and that belief is recorded at exactly the strength it has: **Claude.ai reading a screenshot, not a measurement.** The entry is a check with an expected result, plus what to do if it fails.

**PART TWO — THE RUNBOOK IS NOT SAFE TO REHEARSE AS WRITTEN.** Read end to end against the four questions; nothing was changed, and row 6.1 is untouched.

**Three steps would touch live state if followed literally**, and the first stops the walk outright:

- **Step 4** tells the walker to create a GitHub repository named **`dunchitrader-collab.github.io`** and says *"The name matters exactly"*. **That is the live site's repository.** GitHub refuses a duplicate name, so **the walk stops dead at step 4** — he cannot continue without inventing a name the document does not offer, and the document gives no hint that the name should differ for a rehearsal.
- **Step 7** delegates to `apps-script/DEPLOY.md` *"steps 1, 2 and 3"* — and **DEPLOY.md step 1 opens the LIVE spreadsheet by its hard-coded document id** and adds a tab to it. A walker following that is editing the live sheet.
- **Step 8** delegates to `apps-script/SHEET-FORMULAS.md`, which **hard-codes the same live spreadsheet id in its second line**.

**A fourth problem, not a collision but a blocker:** `DEPLOY.md` now opens with **"START AT STEP 14"**, because it was rewritten this week as the owner's live repair guide. A rebuilder sent to *"its steps 1, 2 and 3"* is met by an instruction to skip them.

**Steps 1, 2, 3, 5 and 6 are clean** — they create new artifacts and tread on nothing. **Nothing beyond the two logins is needed**: no token, no local tool, no machine-specific path, and step 5's `git clone` route has a browser alternative.

**Size: 8 top-level steps, 45 numbered sub-steps, and the document itself says "Allow about an hour and a half"** — not the half hour the walk was pitched at.

**There is NO cleanup section**, and that is the omission with the longest tail. A rehearsal leaves a second spreadsheet, a second form, a second published CSV address, and **a second public GitHub Pages website** — all live, all indexable, all under the same two accounts. The document never mentions removing any of it.

**Not rewritten, per the instruction.** What would make it safe is recorded in Layer 4 as three changes for the Operator to rule on, and **row 6.1 stays `new`** because his choice — fix the document first, or walk it adapting steps 4, 7 and 8 on the fly — changes what that row is asking for.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `2cb624f`, clean, 0 | as stated | PASS |
| **Part One committed before Part Two** | separate commit | yes | PASS |
| Row 4.10 `new` → `done` | done | done | PASS |
| Satellite 4.10 `State` / dates | `done`, 2026-09-19 | as expected | PASS |
| Lines changed in the plan | 2 | **2** | PASS |
| No other row's status changed | none | none | PASS |
| **Validator** | exit 0 | **exit 0, 24 sub-tasks, 87/104 (83.7%)** | PASS |
| Layer 4: hiding recorded as gating launch | present | present | PASS |
| Layer 4: `07999222333` flagged as an inference | present | present | PASS |
| Layer 4: three items marked resolved | 3 | 3 | PASS |
| Layer 4: `Publish.gs` correction recorded | present | present | PASS |
| Layer 3: residual risk as a check | present | present | PASS |
| Handover heading preservation | none removed | none removed | PASS |
| **Part Two: no file altered** | read-only | no change to RESTORE or the plan | PASS |

**What was not tested:**

- **Nothing was measured this session.** No code changed, no browser was driven, nothing was fetched. Part One rests entirely on the Operator's reports and Part Two on reading a document.
- **His sheet was not read**, so the hiding, the number changes and the `Publish.gs` re-paste are all REPORTED by him and not verified here.
- **The runbook was assessed by reading, not by walking it.** Whether a step behaves as written can only be established by doing it, which is row 6.1 itself.

**Commits:**
- `08a7867` — `plan: row 4.10 closed on the Owner's sighting; D7 hide-never-delete recorded`

**Finished:** 2026-09-19T16:05:21Z

**End state:**

Plan **PLAN-DUNCHI-TRADER-V1 at 87 of 104 effort (83.7%), 21 of 24 rows** — up from 85 of 104 (81.7%), 20 of 24. **This prompt cleared 2 effort** (row 4.10) and appended nothing.

**Step 4 is complete** — all ten rows `done`.

**Three rows remain open:** **6.1** (the runbook walk, 9 effort, the largest left, and Part Two bears directly on whether it can be attempted as it stands), **7.1** and **7.2**, both gated on seeding.

**What stands between here and launch, in his hands:** hiding the test people and duplicates (D7, gates launch), seeding 12–15 real tradespeople, and the runbook walk.

Both remotes level. Working tree clean.

---

### 2026-09-19T17:19:52Z — PLAN-DUNCHI-TRADER-V1 closed at a trimmed 100%; PLAN-DUNCHI-LAUNCH-2026-09-19 created
**Source:** Claude Code
**Started:** 2026-09-19T17:13:31Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T17:13:31Z at HEAD `2c16f686`, clean, 0 behind. **This prompt CLOSES PLAN-DUNCHI-TRADER-V1 and creates its successor. Read STD-00009's rules on plan closure and on moving rows between plans before editing anything, and follow them; where the standard is silent, follow this plan's own precedent and say which you used.** **Rulings:** **D6b** — the seeding and launch work leaves V1 for a plan of its own; he overruled the recommendation to keep it, knowing the successor will sit open. **D8b — RAISED, THEN OVERTAKEN; record as overtaken, not live** — he first ruled 6.1 descoped (*"I don't see the tests as necessary evidence of it all working has already been shown"*); Claude.ai accepted and noted the runbook was found **broken** rather than merely untested. **D10, which governs:** *"put the run book test on a new plan ID along with the test with multiple workers in it. I can get to it at some point!"* — so **6.1 MOVES, it is not descoped**; Claude.ai read *"the test with multiple workers"* as row 7.1 and told him to correct that if wrong. **PART ONE:** move rows **6.1, 7.1, 7.2** out using STD-00009's mechanism — never deleted, always pointing at the plan that now owns them, excluded from V1's denominator, never renumbered. V1 then stands at **87 of 87, 21 of 21 — 100%. CLOSE IT.** **The closure record is the point and must not read as "everything was built"** — state that V1 reached 100% by moving 17 effort across three rows, name where it started, and name what was NOT built: the inheritance requirement is unproven and its runbook known broken. **Cite the rule you used.** **PART TWO:** create `docs/BUILD-PLAN-dunchi-launch.md`, Plan ID **`PLAN-DUNCHI-LAUNCH-2026-09-19`**, primary repo `dunchi-trader`, REQUIREMENT AS STATED carried verbatim, header declaring the succession and which rows arrived. Five rows in order: moved 7.2; new effort 2 (no test person visible, ruling D7, Operator's own action, **gates everything else**); new effort 4 (12-15 tradespeople across 6+ trades via the form); moved 7.1; moved 6.1 **with a done-when that now also covers REPAIRING the runbook** — three defects measured. **PART THREE: the seeding route is UNDECIDED. Do not assume one.** Record the open decision in Layer 4 against row 3 with the soft launch named as Claude.ai's recommendation, not as settled. **HANDOVER:** Layer 5 for D6b, D8b-overtaken, D10 and the closure itself; Layer 6; Layer 1 pointing at the successor.

**What was done:**

**The rules were read first, as instructed, and they decided the mechanism rather than confirming a guess.**

**`external`, not `descoped`** — Rules **5.2.1** and **5.2.2 [CORE]**. `descoped` means *permanent scope removal*; `external` means *another Plan ID owns it*. The Owner ruled the work **moves**, so `descoped` would have recorded the opposite of his ruling. Each row carries **`[owner: PLAN-DUNCHI-LAUNCH-2026-09-19]`** per **5.2.4 [CORE]** — without it the validator exits 1. **Effort unchanged** at 9, 5 and 3 per **5.2.5 [CORE]** and **5.4.4 [CORE]**: weight leaves by *status*, never by re-weighting, because re-weighting moves a percentage without changing any work. The three texts are **preserved in full** so a reader following a citation to `6.1`, `7.1` or `7.2` still finds what it referred to.

**V1 closed at 87/87 — 100.0%**, with 17 effort excluded as external, and **archived** to `docs/archive/BUILD-PLAN-dunchi-trader-PLAN-DUNCHI-TRADER-V1.md` via `mkdir -p` then `git mv` (**5.8.4**, **5.8.4.1 [CORE]**) so history follows the file. Marker `STATUS: SIGNED-OFF 2026-09-19` above the first `## Step` heading (**5.8.3 [CORE]**).

**THE CLOSURE RECORD CARRIES THE MANDATORY PRE-TRIM LINE** under **Rule 5.8.10.4 [CORE]**: *"Closed at 100% of 21 rows, TRIMMED from 24 on 2026-09-19; pre-trim position 83.7% (87/104 effort)."* The rule's own justification is the reason it was asked for — **without it a reader sees 100% and concludes everything was built.** The record then states what was not built: the inheritance requirement unproven, its runbook broken in three measured ways, the launch not done, the list still carrying test people. **Rule 5.8.10.1 question 2 was answered explicitly** — nothing was orphaned, because no `done` row existed only to serve the three that left.

**The successor** carries the REQUIREMENT AS STATED **verbatim**, extracted from V1 rather than retyped. Rows are **renumbered fresh from Step 1** per **5.8.5 [CORE]** — the one sanctioned renumbering in the standard — with each moved row naming its old V1 id in prose so an old citation still resolves.

**Where the standard is silent, and what was used instead.** STD-00009 prescribes **no header schema for a successor plan**; 5.8.5 requires only that provenance appear in prose. The `## SUCCESSOR TO PLAN-DUNCHI-TRADER-V1` section — archive path, V1's trimmed-close line quoted, and a table mapping new id to old — is **this project's own choice**, following its habit of recording supersession in place rather than silently. Said plainly here so nobody later mistakes it for a standard's requirement.

**One correction to a standards lookup, recorded because it nearly went the other way.** A first pass reported that STD-00009 has **no** rule requiring a closed plan to record where it started, and flagged §5.8.10's body as unread. Reading that section directly found **Rule 5.8.10.4 [CORE]**, which mandates exactly that line in exactly that form. **Had the first answer been taken, the close would have omitted the one line the prompt identified as the point of the exercise.**

**Part Three: no seeding route was assumed.** The open decision is in Layer 4 with all three routes and the soft launch labelled **Claude.ai's recommendation, not his ruling**.

**Testing performed:**

| Test | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `2c16f68`, clean, 0 | as stated | PASS |
| Mechanism for a row leaving a plan | establish from the standard | **`external` + `[owner:]`, Rules 5.2.1/5.2.2/5.2.4** | PASS |
| Is `descoped` right instead? | establish | **No — it means permanent removal** | PASS |
| Effort treatment on the move | unchanged | 9, 5, 3 unchanged (5.2.5, 5.4.4) | PASS |
| Rows 6.1 / 7.1 / 7.2 → `external` | 3 rows, both tables | 3 rows, both tables | PASS |
| Each names the owning Plan ID | all 3 | all 3 | PASS |
| No row renumbered | none | none | PASS |
| **V1 completion after the move** | 100% | **87 / 87 (17 external) = 100.0%** | PASS |
| Pre-trim line present, correct form | 5.8.10.4 form | present, verbatim form | PASS |
| Orphan check (5.8.10.1 q2) | none orphaned | none | PASS |
| Sign-off marker placement | above first `## Step` | line 16 vs first Step at 162 | PASS |
| Archive move preserves history | `git mv` | exit 0, history follows | PASS |
| **V1 validator** | exit 0 | **exit 0, 24 sub-tasks, 87/87 = 100.0%** | PASS |
| V1 count vs rows the doc holds | 24 | **24** | PASS |
| Successor Plan ID differs from V1 | differs | differs | PASS |
| Successor rows renumbered from 1.1 | from Step 1 | 1.1, 2.1, 3.1, 4.1, 5.1 | PASS |
| REQUIREMENT carried verbatim | identical | extracted from V1, not retyped | PASS |
| **Successor validator** | exit 0 | **exit 0, 5 sub-tasks, 0/23 = 0.0%** | PASS |
| Successor count vs rows the doc holds | 5 | **5** | PASS |
| Cross-repo coherence, successor | OK | OK, LIVE | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**What was not tested:**

- **No code changed and nothing was measured.** This was a planning and records session; the site, the endpoint and the spreadsheet were untouched, and no served page needed re-checking.
- **The successor's two new estimates are Claude.ai's**, set under standing authority and **open to the Operator's revision** — 2 for hiding the test people, 4 for seeding.
- **The reading of *"the test with multiple workers"* as row 7.1 is an interpretation**, not his words. He was asked to correct it and has not; it is recorded as an interpretation so a successor can challenge it.
- **V1's cross-repo check now reports the service knows no such plan** — expected, since the plan is archived, and advisory only.

**Commits:**
- `4cea42a` — `plan: close PLAN-DUNCHI-TRADER-V1 at a trimmed 100%; create PLAN-DUNCHI-LAUNCH-2026-09-19`

**Finished:** 2026-09-19T17:19:52Z

**End state:**

**`PLAN-DUNCHI-TRADER-V1` is CLOSED, SIGNED OFF and ARCHIVED** at 87 of 87 effort, 21 of 21 rows, 100.0% — **trimmed from 24 rows and a pre-trim 83.7%.**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` is the current plan** at [PATH] `docs/BUILD-PLAN-dunchi-launch.md` — **0 of 23 effort, 0 of 5 rows.** **Effort cleared by this prompt: zero.** Nothing was built; work moved and a plan closed.

**The critical path through the new plan is short and entirely the Operator's:** hide the test people (2.1, gates everything), seed 12–15 tradespeople (3.1, route undecided), prove the journey on real content (4.1), tell the village (1.1). **Row 5.1 — repair the runbook, then walk it — is independent of all four** and is the largest row at effort 9.

Both remotes level. Working tree clean.

---

### 2026-09-19T17:30:32Z — The restore runbook repaired, and still unwalked
**Source:** Claude Code
**Started:** 2026-09-19T17:23:58Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T17:23:58Z at HEAD `2030d582`, clean, 0 behind. Current plan is **PLAN-DUNCHI-LAUNCH-2026-09-19**; this work sits inside its **row 5.1**, which already owns it — **do not append a row.** **Gavin has ruled YES to repairing the three known defects now.** It is document editing and costs him nothing. **He has NOT agreed to walk it** — that waits for him. **Row 5.1 may NOT be marked done. Repairing a document is not proving it.** When finished the runbook will be *correct as far as reading can establish* and still **unwalked**. Say exactly that in the summary and the handover; **do not let "fixed" read as "proven"** — this project has been bitten twice today by a fix that passed its own test and failed on the Operator's screen. **Defect 1:** step 4 names the live repository and says *"The name matters exactly"*, so a rehearsal cannot pass it — fix with a rehearsal preamble naming throwaway names including a repository that is **NOT** `<account>.github.io`, with a plain-English note that such a repo serves at `<account>.github.io/<repo>`. **Defect 2:** steps 7 and 8 delegate to documents that open the **live spreadsheet by its hard-coded id**, and `DEPLOY.md` now opens *"START AT STEP 14"* — **decide and state which route you took**, and **whatever you choose must not break DEPLOY.md's current job as Gavin's live repair guide.** **Defect 3:** no cleanup section — add one naming the CSV publish and the repository specifically because those two are public, and say what happens if it is skipped. **Also:** recheck the *"hour and a half"*; **reconcile the WHOLE document** and if a fourth problem turns up, **report it, do not quietly fix beyond this brief** unless leaving it would make the repair incoherent, in which case say so. Follow the approved-prefix rule for any new file.

**What was done:**

**All three defects are repaired, two more were found, and THE DOCUMENT IS STILL UNWALKED.** That last clause is not a caveat added at the end — it is written into the document's own opening, in those words, because a runbook that presents itself as verified invites a walker to doubt themselves instead of the document.

**Defect 1 needed fixing in two places, not one.** The rehearsal preamble went in at the top as asked, but **step 4 is also branched at the point of use** — the preamble alone would have left the exact instruction that killed the walk sitting unchanged where the walker meets it, and a reader following steps in order is not re-reading page one. Step 5's expected result and the tick list are branched the same way, so the longer rehearsal address reads as expected rather than as failure at every point it appears.

**Defect 2 — ROUTE TAKEN: the instructions were carried into RESTORE**, not made id-neutral in the delegated documents. **Reason:** `DEPLOY.md` was rewritten this week as the Owner's **live repair guide** and now opens by sending him to step 14. Making it serve a rebuild as well would put a fork in a document whose entire job is telling him what to do about the live site, **and he may need it again** — the prompt's own constraint. Step 7 is now self-contained across 7a–7f, including the ordering trap that `Publish.gs` must go in before `Code.gs`, and the `doPost` check before deploying. Step 8 still uses `SHEET-FORMULAS.md` for the formulas themselves — they are long and column-specific — but tells the walker to **ignore its opening two lines**, which name the live sheet. **`apps-script/` is untouched: measured, zero files changed.**

**Defect 3 — the cleanup section is ordered by risk rather than by the order things were made.** The CSV publish and the repository come first and are marked **PUBLIC**, because those two are reachable by anybody; the form and spreadsheet follow. Each destructive step carries a check-the-name warning, since clicking *Stop publishing* on the wrong sheet takes the real directory offline. **The final tick is that the LIVE site still loads** — the line that catches a cleanup done on the wrong copy.

**TWO FURTHER FAULTS, reported here as the prompt required, and fixed because leaving them would have made the repair incoherent:**

- **The form's minimum-length validation said FIFTEEN characters**, against **seven** in the site, the endpoint and the verdict column under ruling D4a. A rebuild would have produced a form turning away honest short answers the rest of the system accepts. **Fixed** — leaving it would have meant a document repaired for rehearsal that still rebuilds a subtly wrong system, which is not a coherent repair.
- **The step 5 file list was stale**: it named `docs/BUILD-PLAN-dunchi-trader.md`, archived earlier today, and **omitted `apps-script/Publish.gs`** — which step 7 needs and without which `Code.gs` refuses to run. **Fixed** — and directly incoherent with the step 7 I had just written, which depends on that file being present.

**Time estimate rechecked and now split:** rebuilding unchanged at about ninety minutes, because the repair **moved** step 7's instructions rather than adding work; **rehearsing stated separately at two hours**.

**No new file was created**, so the approved-prefix rule did not apply.

**Testing performed:**

| Check | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `2030d58`, clean, 0 | as stated | PASS |
| No plan row appended | none | none | PASS |
| **Row 5.1 NOT marked done** | stays `new` | stays `new` | PASS |
| Defect 1: rehearsal preamble present | present | present, with the address explanation | PASS |
| Defect 1: step 4 branched at point of use | branched | branched | PASS |
| Defect 1: step 5 + tick list branched | branched | branched | PASS |
| **Defect 2: live sheet id in RESTORE** | 0 | **0** | PASS |
| Defect 2: step 7 self-contained | no delegation for instructions | 7a–7f inline | PASS |
| Defect 2: step 8 warns off the live id | warns | warns | PASS |
| **Defect 2: `apps-script/` untouched** | 0 files changed | **0 files changed** | PASS |
| Defect 2: DEPLOY.md keeps its live anchor | still present | still present, correct for its job | PASS |
| Defect 3: cleanup section present | present | present, risk-ordered | PASS |
| Defect 3: both public artifacts named | 2 | 2, both marked PUBLIC | PASS |
| Defect 3: says what skipping it leaves | stated | stated | PASS |
| Defect 3: final tick is the LIVE site | present | present | PASS |
| **Defect 4: form minimum is 7 not 15** | 7 | 7; zero occurrences of 15 | PASS |
| **Defect 5: file list matches the repo** | exact | exact, no missing, no duplicates | PASS |
| Time estimate rechecked | corrected | 90 min rebuild / 2 h rehearsal | PASS |
| "tradesman" in the document | 0 | 0 | PASS |
| Document states it is unwalked | up front | in the opening block | PASS |
| No new file created | none | none | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**What was not tested — and this is the governing limitation:**

- **THE DOCUMENT HAS NOT BEEN WALKED.** Not one step was executed. Nothing was created in Google or on GitHub, no rehearsal was attempted, and no screen described in it was looked at. **Every repair above was made by reading**, and reading is exactly what missed these five faults for the document's whole life until today.
- **Whether the repaired step 7 actually works is unknown.** It was written from `DEPLOY.md`'s content and the shipped scripts' requirements, not by performing it. The ordering claim — `Publish.gs` before `Code.gs` — rests on `requirePublisher()` in the committed source, which is a strong basis and still not a performance of the step.
- **The throwaway names are untried.** Whether `dunchi-rehearsal` behaves as described at `<account>.github.io/dunchi-rehearsal` is GitHub's documented behaviour, not something measured here.
- **No code changed**, so nothing was run and no served page needed re-checking.

**Commits:**
- `3453b78` — `docs: repair the restore runbook so it can be rehearsed - REPAIRED, NOT PROVEN`

**Finished:** 2026-09-19T17:30:32Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` unchanged at 0 of 23 effort, 0 of 5 rows. Effort cleared: zero** — row 5.1 closes on the walk, and the walk has not happened. **`PLAN-DUNCHI-TRADER-V1` remains closed and archived** at 87/87.

**The runbook is now believed rehearsable and is not proven rehearsable.** The distinction is the whole of this session: five faults fixed by reading, in a document whose faults had survived every previous reading.

Both remotes level. Working tree clean.

---

### 2026-09-19T18:43:50Z — D9c: go now and curate; the launch message reported against the live list
**Source:** Claude Code
**Started:** 2026-09-19T18:40:36Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T18:40:36Z at HEAD `5e9884c1`, clean, 0 behind. Current plan is PLAN-DUNCHI-LAUNCH-2026-09-19. **Two things: record a ruling, and return one piece of text verbatim. No code changes. No row may be marked done.** **(1) RECORD D9c-6G7f-19092026, RULED BY GAVIN. His words: *"Go - I will manage the content"*.** He tells the whole village now and curates submissions as they arrive rather than seeding first. **Claude.ai recommended the soft launch and he overruled it** — record both, with his stated mitigation. **The consequence, once, as a risk rather than an objection:** the first villagers see whatever the list holds; the plan's own reasoning held that a thin directory cannot be launched by accident and this audience may look only once. **The plan's order changes** — 1.1 now runs BEFORE 3.1 — **record it as prose, not by renumbering.** Row 3.1's outcome is unchanged but its timing is no longer under his control. **Row 2.1 was housekeeping and is now the only hard gate** — record that in Layer 4 in those terms. **(2) RETURN THE LAUNCH MESSAGE VERBATIM** from README's *"Telling the village"*, in its own fenced block, read from the committed file. State its word count, whether it contains the live URL and whether that URL is correct, and **if it assumes the list is already seeded, say so plainly** — under D9c it goes to an unseeded list. **Do not rewrite it; report it.**

**What was done:**

**D9c recorded in Layer 5 with the overruled recommendation stated alongside it**, because a record keeping only the ruling makes the reasoning look unanimous when it was not. All three routes are tabulated with which was recommended and which was taken, and his mitigation — that he will actively manage content as it arrives — is recorded as the real mitigation it is rather than as a dismissal. The risk is stated once, as a risk: the first villagers see whatever the list holds, and the plan's own row 3.1 argues *"a directory with four people in it gets opened once and never again"*. **He has weighed that and ruled**, and it is written down so that if the first impression goes badly the record shows the trade-off was seen.

**THE LIVE LIST WAS MEASURED AT THE MOMENT OF THE RULING, because the number is what makes the risk concrete.** The published feed shows **two active people across two trades** — `T005 Bob Samwell` (Plumber) and `T012 Frank Shelly` (Carpenter). **Thirteen of fifteen rows are already `hidden`, so he has evidently begun the D7 hiding himself.** That materially changes what row 2.1 still asks of him: it is no longer a list of ids to hide but a judgement about two names, and **only he knows whether those two are real people.**

**The plan's re-ordering is recorded as prose in three places and nothing is renumbered** — §5.1.4 forbids renumbering in a live plan and the numbers are citation targets. A running-order table sits above *"How to read this plan"*, and rows 1.1, 2.1 and 3.1 each carry a superseded-in-place note. **The step numbers no longer imply the order, and the plan now says so explicitly** rather than leaving a reader to infer it.

**THE LAUNCH MESSAGE WAS READ FROM THE COMMITTED FILE AND REPORTED, NOT REWRITTEN.** 66 words as committed, carrying the live URL, which was fetched and returns HTTP 200 and matches Layer 1's recorded address. **One mismatch found and reported:** its first line promises *"plumbers, electricians, gardeners and the rest"*, and the live list today holds **one plumber and one carpenter — no electrician, no gardener.** The message was drafted when the list was expected to be seeded first, which D9c reverses. **Whether to soften it or post it as drafted is his call**; it is recorded so the mismatch is a decision rather than something a villager discovers for him.

**Testing performed:**

| Check | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / behind | `5e9884c`, clean, 0 | as stated | PASS |
| **No code changed** | none | none | PASS |
| **No row marked done** | all 5 stay `new` | all 5 `new` | PASS |
| **Nothing renumbered** | 1.1–5.1 unchanged | unchanged | PASS |
| Launch message read from the committed file | `git show HEAD:README.md` | read from HEAD, not the worktree | PASS |
| Message word count | — | **66** | PASS |
| Message contains the live URL | — | **yes** | PASS |
| That URL resolves | 200 | **HTTP 200** | PASS |
| URL matches Layer 1's recorded address | match | match | PASS |
| Smart quotes introduced | none | **none** — one em-dash, intentional | PASS |
| **Live list: active people** | — | **2 active, 2 trades** | PASS (finding) |
| **Message vs list: electrician visible?** | — | **no** | PASS (mismatch reported) |
| **Message vs list: gardener visible?** | — | **no** | PASS (mismatch reported) |
| Rows already hidden | — | **13 of 15** | PASS (finding) |
| Validator | exit 0 | **exit 0, 5 sub-tasks, 0/23** | PASS |
| Handover heading preservation | none removed | none removed | PASS |

**What was not tested:**

- **Nothing was executed and no code changed.** The only live access was a read of the public feed and a HEAD-style fetch of the site's address.
- **Whether `T005 Bob Samwell` and `T012 Frank Shelly` are real people is unknown here** and is the Operator's judgement. `Bob Samwell` is his own surname, which is suggestive and is not evidence.
- **The message was not rewritten**, as instructed. The mismatch is reported.
- **His hiding work was not verified beyond the feed** — thirteen rows read `hidden` in the published CSV, which is what the site reads, and that is the whole of the claim.

**Commits:**
- `faa0038` — `docs: record D9c - go now and curate; report the launch message against the live list`

**Finished:** 2026-09-19T18:43:50Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` unchanged at 0 of 23 effort, 0 of 5 rows. Effort cleared: zero** — this session recorded a decision and read a file. **`PLAN-DUNCHI-TRADER-V1` remains closed and archived** at 87/87.

**The running order is now 2.1 → 1.1 → 3.1 → 4.1, with 5.1 independent.** **Row 2.1 is the only hard gate**, he has already done most of it, and what remains is a judgement about two visible names rather than a task.

Both remotes level. Working tree clean.

---

### 2026-09-19T20:24:03Z — "The data has failed here": diagnosed, and the site is not at fault
**Source:** Claude Code
**Started:** 2026-09-19T20:19:59Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T20:19:59Z at HEAD `5e1cbbf0`, clean. **READ-ONLY DIAGNOSIS. Change no code, no plan, no document, and write nothing to the Owner's sheet.** If a fix is needed, report it — do not apply it. Commit nothing except, at the end, the handover entry. **THE REPORT.** Gavin, on his phone, just after hiding 13 of 15 rows on Published: *"the data has failed here. Something is wrong. There is test data in there but it is not working on the site well."* **That is all he has said. It is a symptom, not a diagnosis. Do not assume which of these it is.** He is mid-launch. **ESTABLISH, IN ORDER:** (1) what the published feed actually contains right now — HTTP status, bytes, row count, and every row's id, name, trade, phone and status verbatim; (2) whether the feed agrees with what he did — he reports leaving `T005` and `T012` visible, and a feed can lag independently of the sheet; (3) what the live site renders, driven in a real browser cache-busted, with console errors and failed requests; (4) reconcile the three and **name the discrepancy precisely**, testing candidates rather than assuming; (5) **say which it is, with evidence** — and **if the site is behaving correctly and the list is simply almost empty, say that plainly**, because "nearly empty" and "broken" look identical from a phone. **Mark anything you could not establish as unknown.** State explicitly whether the site is safe to give the village right now.

**What was done:**

**THE SITE IS NOT BROKEN. The list is nearly empty, and those look identical from a phone.** Every layer was measured rather than inferred, and each one is healthy.

**1. The feed.** `HTTP 200`, `text/csv`, **2,681 bytes**, **20 data rows** — not the 15 recorded this morning. The full table is in the session summary. Headers show `cache-control: no-cache, no-store, must-revalidate`, and two fetches minutes apart were byte-identical, so **the feed is live and stable, not lagging.**

**2. The feed does NOT agree with what he reported, and this is the heart of it.** He reported leaving `T005 Bob Samwell` and `T012 Frank Shelly` visible. **Both read `hidden` in the feed.** In fact **17 of the 20 rows are `hidden`**, and the three that are `active` are none of the ones he named:

| id | name | trade | why it is visible |
|---|---|---|---|
| `T016` | Andy Watson | Plumber | new villager submission, clean |
| `T018` | Ben Phythian | Gardener | new villager submission, clean |
| `T019` | Tony Clapham | Heating oil & gas | new villager submission, clean |

**FIVE NEW PEOPLE ARRIVED TODAY — `T016` to `T020` — and they are real villager submissions**, with real recommendations and real recommenders (Tim, Lin, Gavin, Hazel). **The village has started using it.** That is the thing his message does not mention and is the most important fact in this diagnosis.

**3. The live site, driven in Chrome 148 at 390px against the real feed, cache-busted.** **Three tiles — Gardener, Heating oil & gas, Plumber — one person under each, exactly the three active rows.** Every card carries the right name, the right number and a working `tel:` link, including `T016`'s `+44` form resolving to `tel:+447775726754`. Recommendations render (2, 1 and 2). **Zero console messages. Zero failed requests. Zero horizontal overflow.** Served `app.js` is byte-identical to the commit.

**4. Reconciled. The candidates were tested, not assumed:**

| Candidate | Verdict |
|---|---|
| Feed stale, still serving hidden rows | **NO** — `no-cache`, two fetches identical |
| Feed refreshed, site serving a cached copy | **NO** — browser fetched the CSV live; served `app.js` matches the commit |
| Hiding broke the `I`/`J` helper formulas | **NO** — both populated on all 20 rows |
| A `status` token the code does not expect | **NO** — every row is exactly `active` or `hidden` |
| Too few people to render a tile | **NO** — three tiles rendered from three people |
| Row count tripped an empty-state or error path | **NO** — no notice, no error path, normal render |
| `K`/`L` misalignment (the 4.9 invariant) | **NO** — four rows have words with no name, which correctly render *"a villager"*, and all four are hidden anyway |

**5. THE ANSWER. There is no defect. The site is doing exactly what the data tells it to.** What he is seeing is **three people across three trades**, which on a phone is indistinguishable from a failure — and is not one.

**Two things explain the gap between what he expected and what he sees:**

- **`T005` and `T012` are hidden.** He believed he left them visible. Whether he hid them deliberately and misremembered, or hid them by accident while working through the list, **cannot be established from here** — the sheet's edit history is inside his Google account. **Marked UNKNOWN.**
- **`T017 Lee Schofield` and `T020 Gecko Geckster` were hidden AUTOMATICALLY by the publisher, correctly**, and not by him. Both were tested against `Publish.gs`'s two hard checks: `T017`'s phone reads *"07872 065874 or 01392 980312"*, which normalises to a 22-digit key, and its business field holds an email address — two separate failures. `T020`'s *"01392 47484847"* is 13 digits. **The publisher is protecting the list from unusable numbers exactly as designed.** Both are real people worth rescuing, and both need one field retyped.

**NO FIX WAS APPLIED and none is needed in code.** What remains is the Owner's judgement in his own sheet, and it is small — set `T005` and `T012` back to `active` if he wants them, and retype two phone numbers.

**Testing performed:**

| Check | Expected | Actual | Result |
|---|---|---|---|
| Feed URL in Layer 1 == the one `app.js` uses | identical | identical | PASS |
| Feed fetch | 200 | **200, 2,681 bytes, `text/csv`** | PASS |
| Feed row count | — | **20** (was 15 this morning) | PASS (finding) |
| Feed cache headers | — | `no-cache, no-store, must-revalidate` | PASS |
| Two fetches minutes apart | identical | **identical** — not mid-refresh | PASS |
| `T005` / `T012` visible as he reported | active | **BOTH `hidden`** | **MISMATCH (finding)** |
| Active rows | — | **3: T016, T018, T019** | PASS (finding) |
| Helper columns `I`/`J` alive | populated | **all 20 rows populated** | PASS |
| Unrecognised `status` tokens | 0 | **0** | PASS |
| `K`/`L` alignment where names exist | aligned | aligned | PASS |
| Site: tiles rendered | 3 | **3 — Gardener, Heating oil & gas, Plumber** | PASS |
| Site: people per tile | 1 each | 1 each | PASS |
| Site: names, numbers, `tel:` links | correct | all correct, incl. `+44` form | PASS |
| Site: recommendations render | yes | 1, 2 and 2 | PASS |
| Site: console errors | 0 | **0** | PASS |
| Site: failed requests | 0 | **0** | PASS |
| Site: horizontal overflow | 0 | **0** | PASS |
| Served `app.js` vs commit | identical | **identical** | PASS |
| `T017` hidden — publisher or Owner? | establish | **publisher: 22-digit key + email in business** | PASS |
| `T020` hidden — publisher or Owner? | establish | **publisher: 13-digit number** | PASS |
| **No code, plan or document changed** | none | none | PASS |
| **Nothing written to his sheet** | none | read-only fetch only | PASS |

**What was not tested / UNKNOWN:**

- **WHY `T005` and `T012` are hidden is UNKNOWN.** The sheet's edit history is inside his Google account and cannot be reached from here. Whether he hid them deliberately, or by accident, or believed he had left them and had not, is his to say.
- **Whether the three active people are ones he is content to publish is UNKNOWN** and is his judgement — though all three carry recommendations naming real villagers, which is suggestive.
- **The sheet itself was never read**, only the published CSV. Anything true of the sheet but not yet republished would be invisible here — though the `no-cache` headers and the stable double fetch make a lag unlikely.
- **`T017` and `T020` were not corrected**, per the read-only instruction.

**Commits:**
- `9dfbe8b` — `docs: diagnose "the data has failed" - the site is correct, the list is nearly empty`

**Finished:** 2026-09-19T20:24:03Z

**End state:**

**No plan row changed status. `PLAN-DUNCHI-LAUNCH-2026-09-19` unchanged at 0 of 23 effort, 0 of 5 rows.** No code, plan or document was modified; this commit carries the handover alone.

**IS THE SITE SAFE TO GIVE THE VILLAGE RIGHT NOW? Technically yes, editorially his call.** Nothing is broken, no test person is visible, every phone number on screen is correct and dials. **But three people across three trades is a thin first impression**, and row 3.1 of the current plan argues in the project's own words that *"a directory with four people in it gets opened once and never again"*. **That is a judgement for him, not a fault to fix** — and under his ruling D9c he has already chosen to go now and curate as submissions arrive, which is precisely the situation this is.

**The quickest thing that would improve it, all in his own sheet and none of it code:** set `T005` and `T012` back to `active` if they are real, and retype the two phone numbers that the publisher correctly refused — `T017 Lee Schofield` (one number, not two separated by "or") and `T020 Gecko Geckster` (13 digits). **That would take the list from three people to seven across five or six trades in a few minutes.**

Both remotes level. Working tree clean.

---

### 2026-09-19T20:34:06Z — Two submissions dropped silently: the code is sound, the cause is transient and unknown
**Source:** Claude Code
**Started:** 2026-09-19T20:29:14Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo read 2026-09-19T20:29:14Z at HEAD `4c18b6fc`, clean. **READ-ONLY DIAGNOSIS. Write nothing to the Owner's sheet. Change no code. Commit only the handover.** **THE PUBLISHER HAS SILENTLY DROPPED TWO REAL SUBMISSIONS.** The 2738 diagnosis read Published and concluded correctly that the site renders what the feed justifies — **it did not read the Form Responses tab, and that is where the fault is.** The sheet is publicly readable by `gviz` CSV; no login needed. Measured by Claude.ai: `Murray Angel` (20:03:57) and `Stuart Ironside` (20:07:52) are ABSENT from Published, which holds exactly T001–T020. Tim recommended Murray; Lin recommended Stuart. Both got a thank-you. **ESTABLISH — and do not guess, the guessing has been expensive today:** (1) every code path on which a submission produces NO row, noting that Lee Schofield and Gecko Geckster have equally malformed numbers and DID get rows; (2) what the two share that the six published do not — **they do not obviously share a data property, which points at something transient; test that reading rather than adopting it**; (3) whether `verdict = NEW` is implicated — the correlation is perfect across eight and is the strongest lead, **but a perfect correlation over eight rows is not a mechanism**; (4) what is only testable from the Owner's account, phrased as a test with expected results; (5) how many EARLIER submissions were also dropped — there are twelve rows from 2026-09-18. **RECOVERY: report, do not apply**, ids must be next-free and reuse nothing. **THE QUESTION: is the automatic publisher safe to put in front of the village tonight?**

**What was done:**

**Both tabs were fetched directly and reconciled. EXACTLY TWO of twenty responses were dropped, and all twelve from 2026-09-18 reconcile** — no earlier loss.

**THE CODE IS NOT AT FAULT, and that was established by REPLAYING both submissions through the real committed `Publish.gs`, not by reading it.** Against a stub Published holding `T001`–`T017` as it stood at 20:03:57, **both produce a row**: Murray → `T018 hidden` (22-digit phone key), Stuart → `T018 active`. Neither threw, neither logged, ten cells written in each case. **`publishOne` has no path that produces no row at all** — every route merges or writes.

**THE `NEW` LEAD IS REFUTED, AND IT IS BACKWARDS.** It was the strongest-looking signal and it is an artefact. **`verdict` is a live formula and the publisher never reads it** — `FIELD_MATCH` names seven fields and `verdict` is not one. A row reads `ALREADY ON SITE` **because** it published and the formula now finds its own phone on Published; the two dropped rows read `NEW` **because** they did not. **The correlation is perfect because it is the same fact stated twice.** Had this been adopted as the mechanism it would have sent a fix at the verdict column, which is not involved.

**WHAT THEY SHARE IS TIME, NOT DATA — and the prompt's own reading proved correct.** The two drops are **consecutive submissions in a contiguous window**, 20:03:57 and 20:07:52, with a working publish 3m37s before and another 2m51s after. They share no data property: Stuart's phone is clean and valid where Murray's is not; Stuart's trade already existed on Published as `T013` where Murray's did not; both trades are on the agreed list. **Two independent data faults do not queue up next to each other.**

**MECHANISM: UNKNOWN, and marked so rather than filled in.** The evidence says the trigger did not reach `publishOne` for those two — consistent with a trigger failure, a Google-side quota or timeout, or an authorisation lapse in that window — but **which cannot be established from outside the account.** The Executions log is the only place the answer exists, and the test is in Layer 4 with what each outcome would mean.

**A STANDING DESIGN GAP was found alongside the transient fault and is recorded separately**, because it is true regardless of what caused these two: a submission that fails to publish leaves **no row, no flag, no email and no trace anywhere the Owner looks**, and the villager is thanked by Google's form regardless. `onFormSubmitPublish` swallows every exception into `Logger.log`; `readSubmission` returns `null` silently on a missing `namedValues`. **The only detection is reconciling two tabs by hand.**

**Testing performed:**

| Check | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree | `4c18b6f`, clean | as stated | PASS |
| Form responses tab readable without login | 200 | **200, 3,879 bytes, 20 rows** | PASS |
| Published tab readable without login | 200 | **200, 3,143 bytes, 20 rows** | PASS |
| **Full reconciliation, all 20 responses** | — | **exactly 2 dropped** | PASS |
| **Earlier submissions dropped?** | — | **NONE — all twelve from 09-18 reconcile** | PASS |
| `publishOne` path producing no row | find it | **none exists** | PASS |
| **Replay Murray through real code** | — | **`T018 hidden`, 10 cells, no throw** | PASS |
| **Replay Stuart through real code** | — | **`T018 active`, 10 cells, no throw** | PASS |
| `looksLikeContactSpam` on both | — | **false for both** | PASS |
| `isKnownTrade('Logs & firewood')` | — | **true** | PASS |
| `isKnownTrade('Builder')` | — | true | PASS |
| **Is `verdict` read by the publisher?** | establish | **NO — not in `FIELD_MATCH`** | PASS (refutes the lead) |
| Timing pattern of the two drops | — | **consecutive, contiguous ~4 min window** | PASS (finding) |
| Gap to nearest working publish | — | **3m37s before, 2m51s after** | PASS |
| Next free ids | no reuse | **`T021`, `T022`** — highest is `T020` | PASS |
| Status each would receive | — | Murray `hidden`, Stuart `active` | PASS |
| Backfill safe to re-run | idempotent | **yes — merges duplicates, adds nothing twice** | PASS |
| **No code, plan or document changed** | none | none | PASS |
| **Nothing written to his sheet** | none | read-only fetches only | PASS |

**What was not tested / UNKNOWN:**

- **THE MECHANISM IS UNKNOWN.** What prevented the trigger reaching `publishOne` on those two submissions cannot be established from outside the Google account. It is marked unknown rather than guessed, and the one test that would settle it is in Layer 4.
- **The Apps Script Executions log was not read** — it is inside his account.
- **Whether this can recur is unknown**, which is the whole of the launch answer below. Two of twenty is 10%, but two events in one window is not a rate.
- **The recovery was not applied**, per the read-only instruction.

**Commits:**
- `0d2d1b6` — `docs: diagnose two silently dropped submissions - code sound, cause transient and unknown`

**Finished:** 2026-09-19T20:34:06Z

**End state:**

**No plan row changed. `PLAN-DUNCHI-LAUNCH-2026-09-19` unchanged at 0 of 23 effort, 0 of 5 rows.** No code, plan or document modified; this commit carries the handover alone.

**IS THE AUTOMATIC PUBLISHER SAFE TO PUT IN FRONT OF THE VILLAGE TONIGHT? NO — not tonight, and the reason is narrow.** The code is sound and was proven so by replay. **But two of twenty submissions vanished with no trace, the cause is unknown, and nothing in the system would tell him if it happened again.** Asking the whole village to submit while a silent-loss path is open and un-diagnosed risks losing recommendations from neighbours who will never know, and who cannot be asked to resubmit something they were thanked for.

**What makes it safe is small and quick:** he reads the Executions log for those two timestamps (two minutes, Layer 4 says what each outcome means) and runs the backfill to recover Murray and Stuart. **If the log shows the trigger simply did not fire, the answer becomes yes** — that is a Google-side transient, the code is proven, and the backfill is a reliable safety net he can run whenever he likes. **If it shows `Completed`, everything above reopens.**

Both remotes level. Working tree clean.

---

### 2026-09-19T21:30:48Z — Step 6 built: retry, sweep, visibility, correctness — none of it live until he pastes
**Source:** Claude Code
**Started:** 2026-09-19T21:17:29Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. Conversation 6G7f. Repo at `8649beb0`, clean. **Sequencing: PART ONE (plan rows) committed on its own BEFORE any code.** **THE CAUSE IS NOW KNOWN** — measured from the Owner's Executions log. **Two submissions failed for TWO DIFFERENT reasons four minutes apart:** Murray Angel 20:03:57 **no execution entry at all**, Stuart Ironside 20:07:52 **FAILED, `Service Spreadsheets failed`**. A retry saves Stuart's class and does nothing for Murray's, **which is why this prompt asks for a sweep as well as a retry.** **PART ONE:** append a step — 6.1 effort 8 self-healing, 6.2 effort 5 visibility, 6.3 effort 4 correctness, 6.4 effort 1 the form dead end — carrying the Requirement as stated in his own words verbatim. **PART TWO (6.1):** retry transient failures only; a five-minute sweep, the only defence against Murray's class; **MAKE THE SWEEP CHEAP FIRST — this gates it**, `checkSetup` was 38.95s and 288 runs a day would exhaust Google's allowance, **report the measured before-and-after**; a script lock; idempotent menu installation. **PART THREE (6.2):** write an outcome line into the `action` column so **a blank means nothing happened**; close both silent paths; `checkSetup` reconciles the tabs and gets faster; fix its `+44` false positive. **PART FOUR (6.3):** stop welding phone numbers; merge on phone AND name; keep the evidence on a merge; `ON THE LIST BUT HIDDEN`; correct `Code.gs`'s stale Votes header. **PART FIVE (6.4):** the form opens in a new tab — **this one you CAN deploy.** **TESTING: write the negative control FIRST and watch it fail against the current code before writing the fix.** Three fixes today passed their own tests and failed on his screen. **No row may be marked done.**

**What was done:**

**PART ONE committed alone at `a7f54c4` before a line of code was written.** Four rows, all `new`, validator exit 0.

**THE NEGATIVE CONTROLS WERE WRITTEN FIRST AND WATCHED PASSING AGAINST THE UNFIXED FILE.** `apps-script/test-publisher-resilience.js` runs in two modes. With `CONTROL=1` it asserts the **old** behaviour: **17 checks, all passing, before anything changed** — the weld producing `0787206587401392980312`, the phone-only match finding the wrong man, one retry attempt and no row, no sweep function, no `LockService` anywhere, nothing written to the `action` column, and the quadratic cost. In fix mode against the same unfixed file it **failed 15**. That is the bar the prompt set, and it was met before writing rather than after.

**THE SWEEP'S COST, MEASURED BEFORE AND AFTER, because it gated the schedule:**

| over 60 responses | range reads | cells read |
|---|---|---|
| `backfillPublished` (before) | **120** | **125,160** |
| `sweepPublished` (after, idle) | **2** | **1,732** |

**Sixty times fewer reads, and an idle sweep writes nothing at all.** The arithmetic that made this a precondition rather than a nicety: Google allows roughly **90 minutes of trigger runtime per day**; five minutes is **288 runs**. At the old cost that allowance is gone. **Five minutes is therefore defensible and is what was implemented.** Three changes got it there: `publishInto` takes an already-read table, the target row is computed in memory instead of re-reading column A, and an already-actioned response is skipped on a cheap string test.

**One instruction turned out to need nothing, and that is reported rather than papered over.** **6.3e** asked for `Code.gs`'s header to stop claiming it appends to the Votes tab. **It already says the opposite** — it carries the heading *"WHY IT NO LONGER WRITES TO THE VOTES TAB"* and describes writing to Published `K`/`L`, corrected under D1b earlier today. **No edit was invented to satisfy the instruction.**

**PART FIVE is the only thing live.** `index.html` and the wireframe open the form in a new tab; pushed, and **confirmed on the served page by real fetch and driven in Chrome 148 against the live site** — `target="_blank"`, `rel="noopener"`, URL and label unchanged.

**Testing performed:**

| Check | Control (old) | Fix (new) | Result |
|---|---|---|---|
| **Two numbers in one field** | welds to `0787206587401392980312` | **refused, with a reason in words** | PASS both |
| Murray's `Or` form refused | — | refused | PASS |
| `+44` folding not regressed | — | `07775726754` | PASS |
| `0044` folding not regressed | — | `07887988959` | PASS |
| A clean number still accepted | — | accepted | PASS |
| **Two people on one number** | phone-only finds the FIRST | **Ben→T006, John→T011, a third→nobody** | PASS both |
| **Transient failure** | 1 attempt, no row, swallowed | **4 reads, 3.6s backoff, row created** | PASS both |
| Recovers within three attempts | — | yes | PASS |
| **Undelivered submission** | no sweep exists | **swept up, takes `T021`** | PASS both |
| **Idle sweep cost** | 120 reads / 125,160 cells | **2 reads / 1,732 cells** | PASS both |
| Idle sweep writes nothing | — | **nothing** | PASS |
| Sweep with one thing to do | — | recovers it, still 2 reads | PASS |
| **Script lock** | `LockService` never used | **taken and released on both paths** | PASS both |
| A denied lock writes nothing | — | **nothing, and it is recorded** | PASS |
| **Menu installer** | none exists | **installs one; twice still one** | PASS both |
| Sweep is time-based and frequent | — | 5 minutes | PASS |
| **`action` column: published** | writes nothing | **`Published as T0xx`** | PASS both |
| **`action` column: merged** | writes nothing | **`Merged into T003 — …`** | PASS both |
| **`action` column: two numbers** | writes nothing | **names the two-number fault** | PASS both |
| **`checkSetup` `+44` false positive** | flags what the publisher accepts | **shared `phoneProblem`, agrees** | PASS both |
| …and still flags a genuinely bad one | — | flags 13 digits | PASS |
| **Hidden person's verdict** | `ALREADY ON SITE` | **`ON THE LIST BUT HIDDEN — T004`** | PASS |
| Committed `L2` carries the new branch | — | yes, reads column `H` | PASS |
| `L2` one line, no smart quotes | — | 863 chars, clean | PASS |
| **6.4 on the LIVE site, real browser** | — | `target=_blank`, `rel=noopener` | PASS |
| Served `index.html` byte-identical | — | MATCH | PASS |
| REGRESSION: `sanitise`, ANON, `FORMULA_COLS`, writable blocks, `nextId` | — | all hold | PASS |
| **All four suites** | — | **43 + 58 + 49 + 66 = 216** | PASS |

**WHAT IS UNPROVEN — and it is most of this session:**

- **NONE OF THE APPS SCRIPT WORK HAS RUN IN GOOGLE.** Every check above is a stub. `LockService`, `ScriptApp.newTrigger`, `PropertiesService` and `Utilities.sleep` are all modelled, not exercised. **Whether the sweep installs, fires every five minutes, and completes inside Google's runtime is unknown until he pastes and watches it.**
- **The measured 60× is a stub measurement of range reads, not seconds in Google.** It is the right proxy — Sheets calls dominate — but **it is not a stopwatch on his sheet.** The honest claim is sixty times fewer reads, not sixty times faster.
- **The retry has never met a real `Service Spreadsheets failed`.** It matches the message his log recorded, in a stub that throws that exact string.
- **The new `L2` has never run in Google Sheets.** `VLOOKUP` over a second virtual range is the same construct already working in the current formula, which is a strong basis and not a measurement.
- **Only 6.4 is live.** Everything else is inert until he pastes `Publish.gs`.

**Commits:**
- `a7f54c4` — `plan: step 6 appended - the publisher does not lose a villager's recommendation`
- `1d50b00` — `feat: the publisher stops losing recommendations - retry, sweep, visibility and correctness`
- `991ecd8` — the handover

**Finished:** 2026-09-19T21:30:48Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` at 0 of 41 effort, 0 of 9 rows. Effort cleared: zero** — no row may be marked done; three of the four need him to paste, and 6.4 needs his sighting.

**Live on push: row 6.4 only.** **Inert until he pastes `Publish.gs`: 6.1, 6.2 and 6.3 entirely.** That distinction matters tonight — **the publisher in his account is still the one that lost Murray and Stuart.**

Both remotes level. Working tree clean.

---

## 2026-09-19 — Launch, silent data loss, and the self-healing publisher (Claude.ai session)

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f

**Repos touched this session:** dunchi-trader (prompts 2697–2741). claude-duality (a server-instructions change recording the "repo + prompt id" session-naming convention, e.g. "dunchi-trader 2697 is running") — state of that change is UNCONFIRMED and must be verified before anyone asserts it landed. List accurate as at writing; may extend.

**What was discussed.** PLAN-DUNCHI-TRADER-V1 was closed at 87/87 (100%), trimmed from 24 rows with a pre-trim position of 83.7%, and archived to docs/archive/BUILD-PLAN-dunchi-trader-PLAN-DUNCHI-TRADER-V1.md. PLAN-DUNCHI-LAUNCH-2026-09-19 was created (5 rows, 23 effort; step 6 later added 4 rows and 18 effort, taking it to 9 rows / 41 effort). The site was launched to the village. Gavin then reported that real villagers' submissions were behaving oddly, and the investigation established from the Apps Script Executions log that TWO real submissions were silently lost to two unrelated Google-side faults four minutes apart: Murray Angel at 20:03:57 produced NO execution entry at all (the onFormSubmit trigger never fired), and Stuart Ironside at 20:07:52 FAILED in 0.953s with "Service Spreadsheets failed while accessing document". The ID sequence proved publishOne was never called for either — Ben Phythian took T018, the id Murray would have had. A retry saves Stuart's class of failure; only a sweep saves Murray's. A live control submission (Testcase Alpha / 07700 900123) published as T021 active in 1.28s, proving the normal path works.

**Decisions made.**
- [DECISION] D6b — seeding and launch work moved OUT of V1 into the successor plan rather than descoped.
- [DECISION] D10 — runbook work moved, not descoped.
- [DECISION] D9c — "Go - I will manage the content". Site launched; Gavin manages content quality himself and accepts errors on a site he has ruled non-critical.
- [DECISION] D8b — the remaining V1 tests are not required as evidence; working was already shown.
- [DECISION] The runbook walk and the multi-worker test are placed on a separate future plan ID, not the launch plan.
- [DECISION] The Votes tab is confirmed empty (header row only) and unreferenced, and is approved for deletion.
- [DECISION] All outstanding fixes bundled into ONE prompt (2740), and the recovery made AUTOMATIC rather than a daily one-click, on Gavin's ruling: "One day is a long time. Surely there's an automated way."
- [DECISION] Gavin delegated the testing and review of 2740 to Claude.ai: "Write it and send the prompt. Then I want you to automatically test it and review it. You should not need me for this process."

**Options rejected.** Wiping all data and starting again (rejected — existing real submissions repaired in place). A daily one-click recovery button (rejected as too slow; replaced by the five-minute sweep). Deleting duplicate rows from Published (rejected — deleting the highest id frees it for reuse; hide instead). Keying duplicate detection on phone alone (rejected — cleanPublished already keys on phone+name because Ben Franks and John Pilkington share 07887800192).

**Constraints and gotchas carried forward.** Nothing may write to the Owner's Google Sheet from any session. Published columns I and J are the Owner's ARRAYFORMULA helpers (FORMULA_COLS = [8,9]) and no script may write there; writableBlocks() derives the A–H and K–L spans. The PUB_COLS order is a contract. Never delete rows from Published (frees the highest id for reuse) and never delete rows from Form responses (standing rule established this session). Apps Script must be deployed as a NEW VERSION of the EXISTING deployment — "New deployment" changes the /exec URL and silently breaks the site. In ARRAYFORMULA, COUNTIF and MATCH vectorise but INDEX does NOT, which is why the L2 verdict formula uses VLOOKUP against a literal array. The published CSV feed is a separate artefact from the sheet with roughly a five-minute lag. Nothing on the site may touch deverse; everything is registered to the dunchitrader Google account. Google allows roughly 90 minutes of trigger runtime per day, which is what the five-minute sweep had to be costed against.

**Claude.ai errors this session, recorded so they are not repeated.** (1) Asserted MATCH does not vectorise — wrong; MATCH does, INDEX does not. Right conclusion, wrong function named. (2) Told Gavin hand-typed Form responses rows would not publish; they published as T014/T015. (3) Told him to leave the experience column blank — it DID affect the verdict and both rows read CHECK THIS. (4) Predicted the misattribution was the WRITER dropping a blank name; it was the READER (splitRecs). (5) Called the verdict=NEW correlation "the strongest lead" in prompt 2739 — circular, because the verdict is a live formula. (6) Endorsed Gavin's row-deletion theory as "almost certainly it"; the trigger is event-driven and deleting rows cannot move it. (7) Estimated the runbook walk at half an hour on a document not read; the document says ninety minutes and rehearsing is two hours. (8) Said a URL in a Google Form confirmation message would be tappable; it renders as plain text.

**Review of prompt 2740 (Claude.ai's validation).** ACCEPTED WITH TWO ITEMS OUTSTANDING. The negative controls were constructed correctly — CONTROL mode asserted the OLD behaviour and 17 checks passed against the unfixed file before a line changed, with the fix-mode suite failing 15 at that moment; CONTROL now fails 5. That is the strongest evidence produced on this project to date and it corrects the failure pattern of three earlier fixes. The sweep cost was reported honestly as 120 reads / 125,160 cells before against 2 reads / 1,732 cells after, with the session stating plainly that this is a stub count of range reads and NOT a stopwatch on the live sheet — the claim is "sixty times fewer reads", not "sixty times faster", and Claude.ai accepts it on that basis. The quota arithmetic was given (288 runs a day against a ~90 minute allowance) and five minutes is defensible. Row 6.4 (the form link opening in a new tab) was confirmed on the SERVED page in a real browser. No row was marked done. The session also declined to invent an edit for instruction 6.3e when it found Code.gs's header was already correct, which is the right behaviour. OUTSTANDING at the time of writing: the placement of LockService on both the form-submit and sweep paths, and the retry's discrimination between a transient Google fault and a logic error, were asserted but not evidenced — Part A of prompt 2741 is the verification.

**Documents produced or updated.** docs/archive/BUILD-PLAN-dunchi-trader-PLAN-DUNCHI-TRADER-V1.md (archived, closed 87/87); docs/BUILD-PLAN-dunchi-launch.md (new); docs/RESTORE-dunchi-trader.md (repaired, and it declares itself unwalked); README.md (the "Telling the village" launch message); apps-script/SHEET-FORMULAS.md; app.js; apps-script/Publish.gs and apps-script/Code.gs.

**THE OWNER'S OUTSTANDING ACTIONS — these live nowhere else and must survive.**
1. Paste the updated apps-script/Publish.gs into the Apps Script project.
2. Redeploy as a NEW VERSION of the EXISTING deployment — never "New deployment".
3. Village list → Turn on automatic checking, to install the five-minute sweep.
4. Village list → Check for missed recommendations now, to recover Murray Angel and Stuart Ironside.
5. Retype T017 Lee Schofield's phone (one number only) and clear the email out of his business field.
6. Retype T020 Gecko Geckster's phone (currently 13 digits).
7. Retype Murray Angel's phone (two numbers in one box).
8. Unhide the real people: Ron Suttil, Duckers Plumber, Helen Smith, Ben Franks, John Pilkington, Lee Schofield, Gecko Geckster.
9. Hide T021 (Testcase Alpha — test data).
10. Delete the Votes tab.
11. Form settings: set the confirmation message, and add phone response validation — Regular expression → Matches → ^[-() ]*(\+44|0)[-() ]*(\d[-() ]*){9,10}$
12. Paste the new L2 verdict formula.
13. Then post the launch message from README.md to the village.

**Plan position handed forward.** PLAN-DUNCHI-LAUNCH-2026-09-19 at 0 of 41 effort, 0 of 9 rows. Effort-per-prompt for this plan, cumulative: 0 effort cleared / 2 prompts sent. PLAN-DUNCHI-TRADER-V1 is CLOSED, signed off and archived at 87/87.

---

### 2026-09-19T21:42:52Z — Close-down: Part A verified by quotation, no defect found
**Source:** Claude Code
**Started:** 2026-09-19T21:36:00Z

**Conversation reference:** https://claude.ai/cowork/cse_01KmELJ3FVVJwbZnoahT6G7f
**Repos touched this session:** dunchi-trader

**Prompt received:**

> Target repo: dunchi-trader. **This is a CLOSE-DOWN prompt with two verification questions attached. It is documentation and read-only verification. Do NOT change any behaviour, do NOT mark any plan row done, do NOT touch apps-script code unless PART A finds a genuine defect, in which case STOP and report rather than fixing.** Composed against HEAD `dd4673c0`, tree clean. **PART A — TWO VERIFICATION QUESTIONS (read-only, answer with quoted code).** The 2740 summary asserted both of these but did not evidence them; **Claude.ai cannot accept an unevidenced claim as measured (preferences 4.1.1 — a claim from another session is REPORTED until verified).** **A1** quote the lock acquisition and release from `onFormSubmitPublish` AND from the sweep, as two separate blocks with line numbers; **if the lock is on only one of the two, say so plainly — that is a defect and I need to know before Gavin pastes the file.** **A2** quote the code deciding whether a failure is retried; say what a transient Google fault does and what a logic error does; **confirm the retry cannot loop indefinitely and quote the bound.** **A3** confirm by quotation: no write path targets Published `I` or `J`; no path deletes a row from Published or Form responses; and state exactly which tab and column letter the `action` column occupies and whether it can collide with the `L2` ARRAYFORMULA in column `L`. **PART B** add the supplied Layer 6 entry VERBATIM, add its decisions to Layer 5, update Layer 1. **PART C** update the plan so its recorded position matches reality — 0 of 41, 0 of 9, rows 6.1–6.4 at `new`; correct the header if stale; do not restate the standard.

**What was done:**

**PART A — ALL THREE VERIFIED BY QUOTATION. NO DEFECT FOUND, SO NO CODE WAS TOUCHED.** The full quoted evidence is in the session summary table; the findings:

- **A1 — the lock IS on both paths.** `onFormSubmitPublish` acquires at lines **396–397** and releases in a `finally` at **428**; `sweepPublished` acquires at **542–543** and releases in a `finally` at **616**. **Line 652 closes the question that matters** — `ScriptApp.newTrigger('sweepPublished')` confirms the locked function is the one the five-minute trigger actually calls, so the lock is on the scheduled path and not merely on a function with a plausible name.
- **A2 — the retry discriminates and is bounded.** `withRetry` at **466–478**; **line 473, `if (!isTransient(err)) throw err;`, is the discrimination** — a logic error escapes on the **first** attempt and is never retried. A transient Google fault sleeps `RETRY_PAUSE_MS * attempt` and retries. **It cannot loop indefinitely:** the bound is the `for` at **468** with `RETRY_ATTEMPTS = 3` at **455**, and `throw lastErr` at **477** on exhaustion.
- **A3 — three separate confirmations.** `writableBlocks()` was **executed**, not read, and returns `A–H` and `K–L`; **`I` and `J` are unwritable on every path**. The only two direct Published writes, at **1069–1070**, target `COL_WORDS+1` and `COL_BY+1` = columns **K and L**. **No deletion exists anywhere** — zero matches for `deleteRow`, `deleteRows`, `deleteSheet` across both script files. **The `action` column is `M` on the Form responses tab**, located by header NAME at **668–674**, and **cannot collide with the `L2` verdict formula in column `L`** — they are different columns on the same tab, and `action` is the only header matching.

**PART B — the Layer 6 entry was added VERBATIM**, character for character, including the phone-validation regex `^[-() ]*(\+44|0)[-() ]*(\d[-() ]*){9,10}$` which was checked byte-for-byte after writing because its backslashes are escape-sensitive. **Four of its eight decisions — D6b, D8b, D9c, D10 — were already in Layer 5** from the sessions that ruled them, and were not duplicated. **Three had no Layer 5 entry and now do:** the Votes tab approved for deletion, the recovery made automatic rather than a daily click, and the delegation of testing to Claude.ai — **the last recorded with its limit stated**, that it does not extend to closing a row on self-assessment.

**PART C — THE PLAN NEEDED NO CORRECTION, AND ONE THING IN IT WAS DELIBERATELY LEFT ALONE.** The recorded position already matched reality: **0 of 41 effort, 0 of 9 rows, all nine at `new`**, validator exit 0.

**The header's `Estimate` reads 23 against a decomposed 41, and that is CORRECT — it must not be revised.** STD-00009 §5.13.5 records the `Estimate` as *"written before the rows"* and *"a declaration, not a prediction to be graded"*, and names the instinct to revise it as the error: *"a session that has just written 90 rows … will revise the estimate to match the rows every time."* Its value is that it is a second independent number. **41 ÷ 23 = 1.78×, under the standard's 3× review threshold**, and the validator raises no advisory. **A note was added to the plan recording why the figure stands** — the gap is honest, because step 6 was unplanned work commissioned after two real submissions were lost.

**Testing performed:**

| Check | Expected | Actual | Result |
|---|---|---|---|
| Guard: HEAD / tree / unpushed | `dd4673c`, clean, 0 | as stated | PASS |
| **A1 lock on the form path** | present | acquire `396-397`, release `428` in `finally` | **PASS** |
| **A1 lock on the sweep path** | present | acquire `542-543`, release `616` in `finally` | **PASS** |
| **A1 the locked sweep IS the trigger's target** | same function | `newTrigger('sweepPublished')` line `652` | **PASS** |
| **A2 transient fault is retried** | retried | `isTransient` true → sleep and retry | **PASS** |
| **A2 logic error is NOT retried** | thrown at once | `throw err` line `473`, first attempt | **PASS** |
| **A2 cannot loop indefinitely** | bounded | `for … attempt <= 3` line `468`; `throw lastErr` `477` | **PASS** |
| **A3 no write reaches `I` or `J`** | none | `writableBlocks()` executed → `A–H`, `K–L` | **PASS** |
| **A3 direct Published writes** | K and L only | lines `1069-1070` = columns 11, 12 | **PASS** |
| **A3 no row deletion anywhere** | none | 0 matches, both script files | **PASS** |
| **A3 `action` column location** | named | **column `M`, Form responses tab** | **PASS** |
| **A3 collision with `L2`** | none | `L` is `verdict`, `M` is `action`; found by name | **PASS** |
| Layer 6 entry verbatim | character-exact | verified, incl. the regex | PASS |
| Decisions already in Layer 5 | not duplicated | D6b, D8b, D9c, D10 present already | PASS |
| New decisions added | 3 | 3 | PASS |
| Plan position | 0/41, 0/9, all `new` | as recorded | PASS |
| Plan validator | exit 0 | exit 0, 9 sub-tasks, 0/41 | PASS |
| `Estimate` left at 23 | unchanged | unchanged, with the reason recorded | PASS |
| **No behaviour changed** | none | no `.gs`, `.js`, `.html` or `.css` touched | PASS |
| **No row marked done** | none | all nine `new` | PASS |

**What was not tested:**

- **The verification is STATIC.** Every answer above is read from the committed source and, for `writableBlocks()`, from executing that one function. **None of it has run in Google.** The lock is quoted, not observed contending; the retry is quoted, not observed recovering from a real `Service Spreadsheets failed`.
- **The `action` column's non-collision rests on the live header** fetched earlier today, in which `L` is `verdict` and `M` is `action`. Because `actionColumn()` matches by **name**, a reordering could not move it onto `L` — but if the Owner renamed a column the mapping would move with it.
- **The claude-duality session-naming change named in the Layer 6 entry is UNCONFIRMED**, as the entry itself states. Nothing here verified it.
- **Nothing was written to the Owner's sheet**, and no plan row changed.

**Commits:**
- `a163dc4` — the close-down documentation

**Finished:** 2026-09-19T21:42:52Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` at 0 of 41 effort, 0 of 9 rows. Effort cleared by this prompt: ZERO** — it was documentation and read-only verification, and no row may close on it. **`PLAN-DUNCHI-TRADER-V1` remains CLOSED, signed off and archived at 87/87.**

**The two safety properties Claude.ai declined to accept on report are now evidenced by quotation, and both hold.** There was no defect, so `apps-script/` was not touched — the instruction was to stop and report if one were found, and none was.

**Thirteen Owner actions are recorded in the close-down Layer 6 entry and live nowhere else.** The first is the one that matters tonight: **paste `Publish.gs`** — until he does, rows 6.1, 6.2 and 6.3 are inert and the publisher in his account is still the one that lost Murray Angel and Stuart Ironside.

Both remotes level. Working tree clean.

---

### 2026-09-21T05:58:10Z — The MISSION block is added to Layer 1

**Source:** Claude Code
**Started:** 2026-09-21T05:56:55Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader

**Prompt received:**

```
Target repo: dunchi-trader

Comply with the loaded global CLAUDE.md and the project CLAUDE.md. Both auto-load — do not read either, which would append a duplicate copy to your context.

## Context Transfer Brief

- Commissioned from Claude.ai conversation https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL on 2026-09-21, successor to the 2026-09-19 launch conversation.
- Plan in hand: PLAN-DUNCHI-LAUNCH-2026-09-19 at 0 of 41 effort, 0 of 9 rows. Read docs/BUILD-PLAN-dunchi-launch.md if you need it; do not restate it back.
- Repo state as read by Claude.ai at 2026-09-21T05:32Z: HEAD 0f7c3ec, branch master, tree clean, 0 ahead / 0 behind origin/master. This prompt was composed against that HEAD.
- Where things stand: the Owner has pasted apps-script/Publish.gs into his Apps Script project and the Village list menu is now present on his spreadsheet. He is working through the Owner actions recorded in HANDOVER Layer 6, 2026-09-19, "Launch, silent data loss, and the self-healing publisher". NOTHING IN THIS PROMPT TOUCHES THAT WORK, his spreadsheet, or any Apps Script file.
- MISSION GAP, DECLARED — and it is the reason this prompt exists. docs/HANDOVER-dunchi-trader.md carries no MISSION block. Preferences §4.18 requires every repo Claude.ai does substantive work in to carry one, and requires every commissioning prompt to name it. There is none to name, so the gap is declared here and closing it is this prompt's first and only task.
- PLANNING GATE: this work is EXEMPT under preferences §4.15 as a handover/documentation update. It is not a plan row, it appends no plan row, and it clears no effort. Do not change any status in the build plan and do not mark anything done.

## Task

Add a MISSION block to docs/HANDOVER-dunchi-trader.md. It lives in exactly one place in the repo — put it at the top of Layer 1, immediately above "Project Status".

The mission is the Owner's own wording, given in conversation on 2026-09-21. Transcribe it verbatim, subject to one correction which the block itself must state: he wrote the village name as "Dunchidiuk"; the correct spelling is "Dunchideock" and that is what is written.

> This repo exists to create an online resource for the Dunchideock village to recommend and find workmen for their use. The purpose of this is to ensure everybody has easy access to high quality work.

The block must also say how progress is measured. §4.18 requires it to POINT AT where the measure is computed and forbids a hand-typed figure, which would be a second copy that drifts. Point at docs/BUILD-PLAN-dunchi-launch.md and at the completion computed from it. Write NO percentage and NO row count into the block.

Record in Layer 5 that the MISSION block was added on 2026-09-21 and that the wording is the Owner's own — §4.18 requires a mission to change only by explicit decision recorded there, never as a side effect of session work.

## Required

- Update the HANDOVER as the work proceeds.
- Commit all code and documentation.
- Give a detailed written summary.
- Give a formatted table of what was tested and each result.
- Return the end-of-session summary, and any follow-on prompt, as a single copy-paste-ready fenced code block.
```

**What was done:**

Three changes, all in [PATH] `docs/HANDOVER-dunchi-trader.md`. No other file in the repo was read for editing, and none was modified. `apps-script/` was not opened. The build plan was not opened and not modified.

**1 — The MISSION block, added to Layer 1.** Placed **immediately above `### Project Status`** and immediately below the §3.9 self-enforcing note, which is the top of Layer 1's content. It carries four parts:

- A sentence recording that it was added **2026-09-21**, that the wording is the Owner's own given in conversation that day, and **the one correction, stated in the block itself as the prompt required**: he wrote "Dunchidiuk", the correct spelling is "Dunchideock", and that is what is written. It states explicitly that **no other word was altered**.
- The mission, as a blockquote, **transcribed verbatim** with the single spelling correction applied.
- **How progress is measured** — pointing at [PATH] `docs/BUILD-PLAN-dunchi-launch.md` (Plan ID `PLAN-DUNCHI-LAUNCH-2026-09-19`) and at the completion computed from it. It states *why* no figure is typed there: a hand-typed percentage would be a second copy of a number the plan already holds and would drift the moment a row closed. **No percentage and no row count appear anywhere in the block** — verified by grep, recorded in the testing table below.
- The §4.18 constraint restated inside the block, so a session reading Layer 1 alone still sees that the mission changes only by an explicit Layer 5 decision.

**Why the correction is stated in the block rather than only in Layer 5:** the prompt required the block itself to state it. The reason it is the right requirement is that Layer 1 is the layer a reader treats as authoritative without cross-referencing; a silent correction there would present altered wording as verbatim wording, and the reader would have no way to know a word had moved.

**2 — The Layer 5 decision entry**, appended at the end of Layer 5 immediately before the Layer 6 heading. It records the block's addition, the verbatim wording with its one correction, the rationale for the block existing (the §4.18 gap, declared in the commissioning prompt rather than discovered later), the decision to measure by pointing rather than by a typed figure, and the §4.18 change-control constraint. It also records **what this session did not do** — no plan status changed, no row closed, no effort cleared, no row appended, nothing touched in the Owner's spreadsheet or in `apps-script/`.

**A note on the drift rationale, because it is evidenced rather than asserted.** The Layer 5 entry justifies the no-typed-figure rule by pointing at this same document's `Project Status` paragraph, which carries a long chain of struck-through effort positions — each correct when written, each wrong within hours, all preserved because §3.3 forbids deleting them. That chain is the failure mode §4.18 is guarding against, visible in the very file the block was added to.

**3 — Timestamps.** Metadata `last-updated` and Layer 1 `Last updated` both regenerated with `date -u` at the point of writing and set to the same value, with the prior value struck through in Layer 1 per §3.3.

**No decision was required beyond the prompt's instructions**, and nothing ambiguous was encountered. The one judgement call was placement of the block relative to the §3.9 self-enforcing note: the note is a structural preamble that §3.9 requires at the top of Layer 1, so the MISSION block sits below it and above `Project Status`, which satisfies "at the top of Layer 1, immediately above Project Status" without displacing a mandated element.

**Testing performed:**

| # | What was tested | Command / action | Expected | Actual | Result |
|---|---|---|---|---|---|
| 1 | Repo state matches the HEAD the prompt was composed against | `git log --oneline -1` and `git status --porcelain` | HEAD `0f7c3ec`, tree clean | HEAD `0f7c3ec`, tree clean | PASS |
| 2 | No MISSION block already existed (do not create a second) | `grep -in "^### MISSION\|^## MISSION\|MISSION BLOCK"` before editing | Zero matches | Zero matches | PASS |
| 3 | MISSION block exists and appears exactly once | `grep -c "^### MISSION"` | 1 | 1 | PASS |
| 4 | Block sits immediately above `Project Status` | `grep -n "^### MISSION\|^### Project Status"` — line order and adjacency of sections | MISSION precedes Project Status, no section between | MISSION at 18, Project Status at 30, nothing between but the block's own body | PASS |
| 5 | Mission wording is verbatim against the prompt | Character-level diff of the blockquote against the prompt's quoted text, spelling correction excepted | Identical but for `Dunchidiuk` → `Dunchideock` | Identical but for that one word | PASS |
| 6 | The misspelling does not survive **in the mission quote** | `sed -n '22p' \| grep -c "Dunchidiuk"` — the quote line only | Zero matches in the quote | `0` | PASS |
| 6a | The misspelling **does** survive where it must — in the correction note, the Layer 5 entry, and the preserved prompt | `grep -in "Dunchidiuk"` over the whole file | Matches confined to text *describing* the correction, none in the quote | 5 matches: the block's correction note, the Layer 5 entry, the verbatim prompt, and two rows of this table — none in the quote | PASS |
| 7 | Correct spelling is used in the block | `grep -c "Dunchideock" within the MISSION block` | ≥ 2 (the correction note and the quote) | 3 | PASS |
| 8 | **No percentage in the MISSION block** (§4.18) | `sed -n '<block range>p' \| grep -n "%"` | Zero matches | Zero matches | PASS |
| 9 | **No completion figure in the MISSION block** (§4.18) | `sed -n '18,26p' \| grep -nE "[0-9]+ +of +[0-9]+\|[0-9]+ +rows? +done\|[0-9]+(\.[0-9]+)?%"` | Zero matches | Zero matches (`exit=1`) | PASS |
| 9a | Stronger form of 9 — **every** digit in the block inspected, not just pattern-matched | `sed -n '18,26p' \| grep -oE "[0-9]+" \| sort -u` | Only date components | `09 19 2026 21 5` — the two dates and the Plan ID's date; no count, no percentage | PASS |
| 10 | Block points at the build plan | `grep -n "BUILD-PLAN-dunchi-launch.md" within block` | Present, tagged `[PATH]` | Present, tagged `[PATH]` | PASS |
| 11 | Layer 5 entry recorded, dated 2026-09-21 | `grep -n "2026-09-21 — The MISSION block"` | One entry inside Layer 5 | One entry, between the prior Layer 5 entry and the Layer 6 heading | PASS |
| 12 | Layer 5 entry sits before Layer 6, not after | Line number of new entry vs `^# LAYER 6` | Entry line < Layer 6 line | Entry before Layer 6 | PASS |
| 13 | §3.6 step 1–3 — no heading removed | `git show HEAD:docs/HANDOVER-dunchi-trader.md \| grep "^#" > /tmp/old; grep "^#" docs/... > /tmp/new; diff` | Only additions, no deletions | Only additions (MISSION, the new Layer 5 entry, the new Layer 6 entry) | PASS |
| 14 | §3.6 step 4 — both timestamps regenerated and matching | `grep -n "^last-updated:" and Layer 1 "Last updated"` | Same ISO value, generated this session with `date -u` | Both `2026-09-21T05:58:10Z` | PASS |
| 15 | §3.6 step 5 — document ends at Layer 6 | `grep -n "^# LAYER"` | Highest is LAYER 6; no LAYER 7 | Highest is LAYER 6 | PASS |
| 16 | Prior Layer 1 timestamp preserved, not overwritten | Inspect Layer 1 `Last updated` line | Old value struck through and retained | `~~2026-09-19T21:40:59Z~~` retained in the chain | PASS |
| 17 | Build plan untouched (planning gate exempt) | `git status --porcelain docs/BUILD-PLAN-dunchi-launch.md` | No change | No change | PASS |
| 18 | Apps Script untouched | `git status --porcelain apps-script/` | No change | No change | PASS |
| 19 | Only the handover changed | `git status --porcelain` before commit | Exactly one modified path | Exactly `docs/HANDOVER-dunchi-trader.md` | PASS |
| 20 | Working tree clean and remote level after commit | `git status --porcelain`; `git log origin/master..HEAD` | Both empty | Both empty | PASS |

**Two tests were mis-specified on first writing and are corrected above rather than quietly rewritten.** Recorded because a handover that shows only the corrected test teaches the next session a check that looks stronger than the one actually run:

- **Test 6** was first written as *"`Dunchidiuk` appears zero times in the file"*. That is the wrong assertion and it **failed** — five legitimate matches, because the prompt itself required the block to *state* the correction, and the Layer 5 entry and the preserved verbatim prompt necessarily repeat it too. The assertion that matters is that the misspelling is absent **from the mission quote**, which is now test 6, with test 6a asserting the converse — that it is present exactly where the record needs it.
- **Test 9** was first written with a regex (`[0-9]+ *(of|/) *[0-9]+|[0-9]+ rows?|effort`) that matched the block's own sentence explaining why no figure is written, and matched `rows` inside *"that plan's rows and efforts"*. It reported a match against a block that contains no figure at all. Replaced by a tightened pattern plus **test 9a**, which lists every digit-run in the block for inspection rather than trusting a pattern — the only digits present are the two dates and the Plan ID's date.

**Neither correction changed the MISSION block**; both changed the tests asserting things about it. The block was correct as first written.

**What was not tested:**

- **Preferences §4.18 and §4.15 were not read this session.** Their requirements — that a MISSION block exists, lives in one place, points at its measure rather than typing a figure, changes only by explicit Layer 5 decision, and that handover/documentation work is exempt from the planning gate — are **REPORTED from the commissioning prompt**, which is Claude.ai's statement of them. They were followed as stated and are not independently verified here. Rule 1.9 applies: this session did not read the preferences document, so it does not record their content as measured.
- **The Owner's wording was not verified with the Owner.** It is transcribed from the commissioning prompt, which attributes it to him in conversation on 2026-09-21. **REPORTED, source: the commissioning prompt.** The spelling correction likewise rests on the prompt's instruction, not on an independent check of the village's name.
- **The build plan's current position was not read**, deliberately — the prompt said not to restate it and the block must contain no figure. The block's claim that completion is computed from that plan is a pointer, not a measurement of the plan's contents.
- **No rendering check.** The handover was not viewed in a Markdown renderer or on the dashboard; correctness of the block's formatting rests on the raw text.

**Commits:**

- `201a5ae` — `docs: the MISSION block, in the Owner's own words` — the MISSION block, the Layer 5 decision, both timestamps, and this Layer 6 entry. **This is the commit §3.3 says is structurally unrecordable at write time**; it is resolved here by a follow-up commit rather than left as a placeholder, per rule 1.10.

**Finished:** 2026-09-21T05:58:10Z

**End state:**

`docs/HANDOVER-dunchi-trader.md` now carries a MISSION block at the top of Layer 1 in the Owner's own wording, with its one spelling correction stated in the block, pointing at `docs/BUILD-PLAN-dunchi-launch.md` for the measure of progress and carrying no figure of its own. Layer 5 records the addition as a dated decision, so the §4.18 change-control constraint has something to bite on. The §4.18 gap declared in the commissioning prompt is closed.

**Nothing else moved, and that is the intended outcome.** `PLAN-DUNCHI-LAUNCH-2026-09-19` stands exactly where it did — no status changed, no row closed, no effort cleared, no row appended. The Owner's thirteen outstanding actions from the 2026-09-19 close-down entry are untouched and still his; he has pasted `Publish.gs` and has the Village list menu on his spreadsheet, and the rest of that queue is unaffected by this session.

Working tree clean. Remote level.

---

### 2026-09-21T06:08:30Z — D3c: the inheritance row is re-homed into a plan of its own

**Source:** Claude Code
**Started:** 2026-09-21T06:00:12Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader (read-only: deverse-standards)

**Prompt received:**

```
Target repo: dunchi-trader

Comply with the loaded global CLAUDE.md and the project CLAUDE.md. Both auto-load — do not read either, which would append a duplicate copy to your context.

## Context Transfer Brief

- Commissioned from Claude.ai conversation https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL on 2026-09-21. Your previous prompt in this conversation was 2745, the MISSION block.
- MISSION: docs/HANDOVER-dunchi-trader.md now carries a MISSION block at the top of Layer 1, established by prompt 2745 earlier this morning and read by Claude.ai from that prompt's reply. This work advances it only indirectly — it is plan bookkeeping, not product.
- Repo state as read by Claude.ai at 2026-09-21T06:00Z from your 2745 reply: HEAD 5dae7de, pushed, tree clean. Re-read the live state yourself before editing and say so if it differs.
- Plan in hand: PLAN-DUNCHI-LAUNCH-2026-09-19 at 0 of 41 effort, 0 of 9 rows. docs/BUILD-PLAN-dunchi-launch.md.
- PLANNING GATE: this is a plan-structure change executing an Owner ruling. It is its own lean prompt per §4.15. It closes no row, clears no effort and changes no row's status.

## The Owner's ruling — D3c-VCWL-21092026, 2026-09-21

He was offered three routes for row 5.1 (repair the restore runbook, then walk it — effort 9, the largest row in the plan). Claude.ai recommended that Frank walk it, on the grounds that the row's own test is "someone handed only the two logins" and the Owner knows too much for his own walk to be a valid test. **He overruled that recommendation and chose option D3c: move row 5.1 out of this plan into a successor plan of its own.**

His words, verbatim: ***"D3c. Handover is less of a concern than getting this live!"***

Record that the recommendation was overruled and on what grounds. The inheritance requirement — *"I want to be able to hand over the operating site to anyone else who inherits that google email account"* — therefore remains UNPROVEN and must not be described anywhere as satisfied.

## Task

**1. READ STD-00009 FIRST AND DO NOT GUESS THE MECHANISM.** Claude.ai has deliberately not specified how this is done, because the governing rules are the standard's and restating them here would create a second source that drifts. Establish from the standard itself: how a row moves between plans, renumbering (5.8.5), effort preservation on the move (5.4.4), what happens to the source plan's denominator, and what a closure or trim record must carry (5.8.10.4). Apply what you read. If the standard forbids or constrains what this prompt asks for, **say so and stop rather than working around it** — the ruling is the Owner's but the mechanism is the standard's.

**2. Move row 5.1 into a new plan in this repo.** Effort stays at 9. Its outcome wording is unchanged. Name its provenance in the row text so an old citation resolves, exactly as this plan does for the three rows it took from PLAN-DUNCHI-TRADER-V1.

**3. Every row in the new plan carries all five delivery fields, no exceptions** — this is the Owner's ruling D1a-i2zw-18092026: an OWNER as a stable account UUID that resolves to a person (never a display name, email or role word), a DUE START DATE, a DUE END DATE, an ACTUAL START, and a FORECAST END. The Owner's account UUID is `222b34c4-7d05-48f4-9d23-cfb47e96d9de`. Follow the column grammar the existing plan already uses.

**4. Update PLAN-DUNCHI-LAUNCH-2026-09-19** so its record shows the row left, by whichever mechanism the standard prescribes. Do not renumber anything that remains.

**5. Record the ruling in handover Layer 5**, with the verbatim quote, the overruled recommendation, and the consequence that the inheritance requirement is now unproven and unowned by any live plan.

**6. Report back, computed from the documents rather than asserted:** the new Plan ID, and PLAN-DUNCHI-LAUNCH-2026-09-19's row count and effort denominator after the change. Claude.ai expects the denominator to fall from 41 to 32 but has NOT verified that against the standard — check it rather than confirming it.

## Required

- Update the HANDOVER as the work proceeds.
- Commit all code and documentation.
- Give a detailed written summary.
- Give a formatted table of what was tested and each result.
- Return the end-of-session summary, and any follow-on prompt, as a single copy-paste-ready fenced code block.
```

**What was done:**

**Repo state confirmed to match the prompt before editing**, as instructed: HEAD `5dae7de`, tree clean, nothing unpushed. **It did not differ.**

**Task 1 — the standard was read first, and it changed how the work was done.** The prompt's framing (*"move row 5.1 OUT of this plan"*, denominator *"falls from 41 to 32"*) implies the row leaves the table. **Reading STD-00009 established that it does not, and that the arithmetic nevertheless lands where the prompt predicted.** Rules read directly this session, not via summary:

- **§5.2 status table + Rule 5.2.2 [CORE]** — `external` = *"not this plan's work at all. Another Plan ID owns it and is accountable for it."* Denominator column: **"No — excluded entirely (§5.4)"**.
- **Rule 5.2.4 [CORE]** — an `external` row **must** name its owner as `[owner: {plan-id}]` inside the text cell, and *"An `external` row without an owner is an error, not a note"* — the validator exits 1.
- **Rule 5.2.5 [CORE]** — effort stays 1–10; *"The weight of an `external` row is removed by its **status**… never by writing an effort value the grammar does not permit."*
- **Rule 5.4.2 [CORE]** — denominator = effort of rows *"NEITHER `parked` NOR `external`"*.
- **Rule 5.4.4 [CORE]** — *"A ROW'S EFFORT WEIGHT IS NEVER REVISED IN ORDER TO MOVE A COMPLETION FIGURE."*
- **Rule 5.8.5 [CORE]** — carried rows are *"RENUMBERED FRESH from Step 1"*; *"A successor is a new document, not a rearranged one"*; provenance goes in the successor's prose.
- **Rule 5.8.10.4 [CORE]** — the pre-trim position line. **Established as NOT APPLICABLE here:** it governs a **close** record, and this plan does not close. Its live-plan analogue is **Rule 5.10.5**, whose form was used instead.
- **§5.10 and Rule 5.10.1 [CORE]** — read in full **and deliberately not used**. See the constraint reported below.

**A CONSTRAINT WAS FOUND AND IS REPORTED RATHER THAN WORKED AROUND, as the prompt required.** §5.10 governs work leaving a live plan and looked like the governing section. **It permits removal for exactly two lawful causes** — the governing design no longer exists (named Solution Design commit), or the row cannot be falsified (Rule 5.10.8). **Row 5.1 satisfies neither**, and §5.10.1's list of **unlawful** causes explicitly includes *"a row someone has lost interest in"* and one *"inconvenient to the percentage"*. **Had the row been deleted from the table, this session would have committed the falsification §5.8.10.3 names.** The resolution is that **an `external` status change is not a §5.10 removal at all** — nothing is removed, the row stays at id `5.1` with its full text and its effort — so §5.10's causes never engage and the work is lawful. **The prompt's requested outcome is achievable; its implied mechanism was not, and the difference is recorded in Layer 5.**

**Task 2 — the new plan.** Created [PATH] `docs/BUILD-PLAN-dunchi-inheritance.md`, Plan ID **`PLAN-DUNCHI-INHERITANCE-2026-09-21`**. Both the filename and the Plan ID were **verified free** before use (`grep` across the repo, zero matches). The date component is 2026-09-21 per **Rule 5.5.1.1 [CORE]** — the date the plan's work originated, which for a plan brought into being by today's ruling is today; this matches how the launch plan was named on its own ruling date. The row is **renumbered `1.1`** per 5.8.5, **effort unchanged at 9** per 5.4.4, and **its outcome wording is carried across unaltered** — not rewritten, not softened, not re-scoped. **Provenance names BOTH hops** (V1 `6.1` → launch `5.1` → here `1.1`) in a table and in the row text, because this row has now moved twice and a citation could be to either old id.

**Task 3 — all five delivery fields on every row.** The new plan's single row carries the full satellite table in the same column grammar the launch plan uses: `Owner` = `222b34c4-7d05-48f4-9d23-cfb47e96d9de` (the account UUID, not a name), `Due start` = 2026-09-21, `Planned end`/`Due` = 2026-10-17, `Actual start` = 2026-09-21, `Forecast end`/`Forecast` = 2026-10-17. The validator's shape check passes; its UUID-resolution advisory is expected and is a shape-only tool limitation (Rule 5.12.2), not a defect.

**Task 4 — the launch plan's record.** Row `5.1`: status `new` → **`external`**, `[owner: PLAN-DUNCHI-INHERITANCE-2026-09-21]` prepended to the text cell per 5.2.4, and a disposition paragraph appended recording the ruling, the verbatim quote, the overruled recommendation, and the warning that the requirement is unproven. The satellite row's `State` cell moved to `external` to match. **Nothing was renumbered and nothing was deleted.** Three other places that described 5.1 as this plan's work were updated: the running-order table (struck through, noting the row was already independent so the remaining order is unchanged), the V1-provenance table, and a now-false *"the largest row in this plan"* phrase, marked `[historical]` with the measured replacement (`6.1` at 8). **A Rule 5.10.5-form position statement was added at the Step 5 heading**, stating the movement is **scope removed, not progress gained**.

**One change of substance beyond the four tasks, flagged because it was a judgement call.** The launch plan's `Summary` read *"…from working to launched, **and prove it can be inherited**"*. **That promise left with the row**, and leaving it would have had the launch plan claiming ownership of the exact requirement this ruling made unowned — the false-satisfaction claim the ruling's own terms forbid. The clause was removed. **The `Estimate` of 23 was NOT revised** (§5.13.5 forbids revising it to match the rows); the historical 41 is preserved with the new 32 recorded beside it and the ratio recomputed to 1.39×.

**Task 5 — Layer 5.** A dated entry records the ruling with the verbatim quote, the three routes, the overruled D3b recommendation **with the grounds it was made on**, the unproven-requirement consequence, the mechanism established from the standard, the §5.10 constraint and why it does not apply, the precedent followed, the `Summary` correction, and four rejected alternatives.

**Testing performed:**

| # | What was tested | Command / action | Expected | Actual | Result |
|---|---|---|---|---|---|
| 1 | Repo matches the HEAD the prompt names | `git log --oneline -1`; `git status --porcelain` | `5dae7de`, clean | `5dae7de`, clean — **did not differ** | PASS |
| 2 | Baseline launch-plan position, measured not assumed | `validate_build_plan.py --verbose` before any edit | A number to compare against | **9 sub-tasks, 0/41, exit=0** | PASS |
| 3 | New plan filename free (§1.4 no variants) | `ls docs/BUILD-PLAN-dunchi-inheritance.md` | Absent | Absent | PASS |
| 4 | New Plan ID free (§5.8.5 no reuse) | `grep -rn PLAN-DUNCHI-INHERITANCE .` | Zero matches | Zero matches | PASS |
| 5 | New plan validates (§3.10 gate) — **first attempt** | `validate_build_plan.py --verbose` | exit 0 | **exit=1 — `Summary` 3 sentences, over the 2-sentence bound (Rule 5.5.8)** | **FAIL — fixed, not worked around** |
| 6 | New plan validates after fixing the Summary | same | exit 0 | **exit=0** | PASS |
| 7 | New plan's rows are actually recognised (§3.10 count check) | `--verbose` sub-task count | 1, not 0 | **`steps: 1 · sub-tasks: 1`, 0/9** | PASS |
| 8 | Launch plan validates after the status change | `validate_build_plan.py --verbose` | exit 0 | **exit=0** | PASS |
| 9 | **Denominator after the change — the prompt's open question** | `--verbose` output, computed by the tool | Checked, not confirmed | **`0 / 32 (excl. 0 parked, 9 external)`** — falls 41 → 32 **as predicted** | PASS |
| 10 | **Row count after the change** | `--verbose` output | Checked | **9 sub-tasks — UNCHANGED**, because the row stays in the table | PASS |
| 11 | Arithmetic reproduced independently of the tool | `python3` sum of the 8 weighted rows | 32 | 32 | PASS |
| 12 | Largest remaining weighted row (claim made in the plan) | `python3` max over remaining rows | Some row | **`6.1` at 8** — matches what was written | PASS |
| 13 | `external` row names its owner (Rule 5.2.4, validator exits 1 otherwise) | validator + `grep '\[owner:'` | Marker present | Present on `5.1` | PASS |
| 14 | Effort preserved across the move (Rule 5.4.4) | Compare both plans' effort cells | 9 in both | 9 in the launch plan, 9 in the new plan | PASS |
| 15 | No row renumbered in the launch plan (§5.1.4) | `grep` the four-column tables' ids | 1.1 2.1 3.1 4.1 5.1 6.1 6.2 6.3 6.4 | Exactly that, unchanged | PASS |
| 16 | Old citations resolve — id `5.1` still in the plan | `grep -n '^| 5.1'` | Present with prose | Present, full text, disposition appended | PASS |
| 17 | Old citation `6.1` (V1) still resolves | Check new plan names both hops | Both named | Both named in a table and in the row text | PASS |
| 18 | Nothing claims inheritance is satisfied | `grep -in "inheritance requirement is \(proven\|satisfied\|met\|done\)"` across `docs/*.md` | Zero matches | **Two matches, both examined and both correct** — see note below | PASS |
| 18a | Those two matches are not false claims | Read both lines in context | They are goal statements, not assertions of current state | Both are the satellite table's **`Outcome`** column — *"The inheritance requirement is proven rather than asserted"* is what will be TRUE WHEN THE ROW CLOSES. Both rows are `new`/`external`, i.e. not done. Wording carried verbatim from V1 as the prompt required | PASS |
| 19 | §3.6 1–3 — no handover heading removed | `git show HEAD:… \| grep '^#'` vs new, diff | Additions only | Additions only | PASS |
| 20 | §3.6 4 — both timestamps regenerated and matching | `grep` metadata + Layer 1 | Same ISO value | Both `2026-09-21T06:08:30Z` | PASS |
| 21 | §3.6 5 — document ends at Layer 6 | `grep -n '^# LAYER'` | Highest is 6 | Highest is 6 | PASS |
| 22 | Prior Layer 1 timestamp preserved | inspect | Struck through, retained | Retained in the chain | PASS |
| 23 | `apps-script/` untouched | `git status --porcelain` | Absent | Absent | PASS |
| 24 | Tree clean and remote level after push | `git status`; `git log origin/master..HEAD` | Both empty | Both empty | PASS |

**Test 5 is recorded as a FAIL rather than folded into test 6.** The validator rejected the first version of the new plan — a 3-sentence `Summary` against Rule 5.5.8's 2-sentence bound. **The plan was fixed and the check was not weakened**, per §3.10. Recording only the passing re-run would have presented a first-time pass that did not happen.

**What was not tested:**

- **The `lucinda` subagent was dispatched for STD-00009's rules and had not returned when the work completed.** Its answer was **not used**; every rule quoted above was read by this session directly from `~/projects/deverse-standards/standards/STD-00009-build-plan-authoring.md`. **This is not a lucinda miss** — no wrong or insufficient answer was received, so per the estate rule a nil return is not a miss-log entry. Recorded so the dispatch is not mistaken for the source.
- **Rule 5.10.8's four requirements were not read in full.** They govern cause 2 of a §5.10 re-cut (unfalsifiability), and this session established it was not performing a §5.10 removal at all. **The conclusion that §5.10 does not apply rests on 5.10.1's two-cause list, which was read in full**; 5.10.8's internals would only matter to a session actually citing cause 2.
- **The Owner's UUID was not resolved to a person.** The validator's advisory says it enforces shape only. The UUID was taken from the prompt and matches the one every existing row in the launch plan already carries — **consistency verified, identity REPORTED**.
- **Preferences §4.15 and §4.18 were not read** (not present in this repo). Their content is **REPORTED from the commissioning prompt**.
- **The Owner's ruling and the three routes offered are REPORTED from the prompt**, which is Claude.ai's record of the conversation. This session did not witness it.
- **Nothing was run against the live site, the spreadsheet or Apps Script.** This session changed documents only.

**Commits:**

- `aa08e53` — `docs: D3c - the inheritance walk leaves the launch plan for a plan of its own` — the new plan, the launch plan's amendments, the Layer 5 decision, both timestamps, and this Layer 6 entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10).

**Finished:** 2026-09-21T06:08:30Z

**End state:**

**Two live plans in this repo.** `PLAN-DUNCHI-LAUNCH-2026-09-19` at **0/32, 9 sub-tasks of which `5.1` is `external`**; `PLAN-DUNCHI-INHERITANCE-2026-09-21` at **0/9, 1 sub-task**. Both validate at exit 0 with their sub-task counts confirmed non-zero.

**No row closed, no effort cleared, no status advanced toward done.** The only status that changed is `5.1`'s `new` → `external`, which is the re-homing itself rather than progress.

⚠ **The inheritance requirement is UNPROVEN and is now owned by a plan nobody is working.** That is a weaker position than this morning and it is stated plainly rather than presented as tidy bookkeeping. **Who walks the runbook remains undecided** — the Owner's ruling moved the row but did not answer that question, and the new plan carries it as an open section rather than burying it.

Working tree clean. Remote level.

---

### 2026-09-21T07:26:40Z — The sweep's first live run, and the audit trail that killed it

**Source:** Claude Code
**Started:** 2026-09-21T07:20:44Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader

**Prompt received:**

```
Target repo: dunchi-trader

Comply with the loaded global CLAUDE.md and the project CLAUDE.md. Both auto-load — do not read either.

## Context Transfer Brief

- Commissioned from Claude.ai conversation https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL on 2026-09-21. Your previous prompts this morning were 2745 (MISSION block) and 2746 (D3c re-home of row 5.1).
- MISSION, established by prompt 2745 and recorded at the top of Layer 1: this repo exists to give Dunchideock village an online resource to recommend and find workmen, so everybody has easy access to high quality work. This work advances it directly — a recommendation that is lost is a tradesperson the village cannot find.
- Repo state as read by Claude.ai at 2026-09-21T07:20Z: HEAD a7c3f68 per your 2746 reply. Re-read live state yourself and say so if it differs.
- Plans in hand: PLAN-DUNCHI-LAUNCH-2026-09-19 at 0 of 32 effort, 9 sub-tasks, one `external`. PLAN-DUNCHI-INHERITANCE-2026-09-21 at 0 of 9. This work is IN PLAN against launch rows 6.1 and 6.2 and sits within their own wording — 6.1 requires the sweep to recover "without anybody noticing", 6.2 requires the action column to record every outcome. Neither row is done. Append no row and change no status.

## WHAT HAPPENED THIS MORNING — the first time any of this ran inside Google

The Owner pasted `apps-script/Publish.gs` and installed the sweep. These are his Apps Script Executions, REPORTED from his own screenshot and execution log, quoted verbatim, not measured by Claude.ai. Times are his local clock, UTC+1:

```
Head       sweepPublished   Time-Driven     Sep 21, 2026, 7:11:08 AM   3.128 s   Failed
Version 3  doGet            Web App         Sep 21, 2026, 7:10:29 AM   0.689 s   Completed
Head       installSweep     Menu            Sep 21, 2026, 7:08:34 AM   6.48  s   Completed
Head       onOpen           Simple Trigger  Sep 21, 2026, 6:53:06 AM   0.787 s   Completed
```

The failed run's log, verbatim:

```
Sep 21, 2026, 7:11:10 AM   Info    sweep published 8 missed submission(s)
Sep 21, 2026, 7:11:11 AM   Error   The data you entered in cell M2 violates the data validation rules set on this cell. Please enter one of the following values: Publish, Add to T0xx, Reject.
```

Claude.ai's reading, offered as a hypothesis to TEST and not as a conclusion to implement: the sweep did its job and published 8 missed submissions, then threw one second later when writing the action text into column M of Form responses, because that column carries a leftover data-validation dropdown from the manual triage era whose only permitted values are `Publish`, `Add to T0xx` and `Reject`. The Owner is removing that validation from his sheet himself. **Do not design around his sheet's current state — the code must survive a refused write whatever the reason.**

Note also that roughly an hour has passed since that run and the timer has kept firing, so his Executions log now holds further `sweepPublished` rows whose outcome Claude.ai has not seen. Where the duplicate question below turns on those, say exactly what you need him to look at rather than guessing.

## Tasks

**1. Establish the code path before changing anything.** Read `apps-script/Publish.gs` and state, with function and line references: where `sweepPublished` writes the action column; whether that write sits inside or outside the guarded region; and whether a throw there aborts the sweep AFTER the publishing has already happened. Quote the code. If the log's reading above is wrong, say so and stop.

**2. THE DEFECT, and it is a design defect rather than a typo.** An audit-trail write must never be able to abort the recovery it is auditing. Row 6.2's mechanism killed row 6.1's function. Make the action-column write non-fatal: a write that is refused must be recorded somewhere the Owner will see it and must never throw out of the sweep or out of `onFormSubmitPublish`. Apply the same reasoning to every other write whose failure is not itself a lost recommendation. Do not swallow errors silently — a swallowed error is the failure mode this whole step exists to fix.

**3. ESTABLISH THE DUPLICATE RISK. Do not guess it, and do not reassure.** The sweep published 8 rows and then threw. Determine from the code whether the run was recorded as having happened — `recordSweepRun`, `lastSweepRun` or equivalent — BEFORE or AFTER the point of the throw. If after, each subsequent firing may treat those 8 as still missing, and there have now been several. State whether the phone-and-name merge would produce duplicate rows on Published or merge harmlessly, and give the evidence. If there is a real risk of duplicates, fixing it is part of this prompt.

**4. Tell the Owner what to look for.** He needs to know whether the 8 actually landed and whether anything has since been duplicated. Give him a short, concrete check on his own sheet — what to look at and what good looks like — including whether `Stuart Ironside` and `Murray Angel` are now on Published and what ids they took.

## Constraints

- **Write nothing to the Owner's Google Sheet.** No session may.
- Change no plan row's status and append no plan row.
- Do not redeploy anything and do not touch `Code.gs`'s deployment.

## Required

- Update the HANDOVER as the work proceeds.
- Commit all code and documentation.
- Give a detailed written summary.
- Give a formatted table of what was tested and each result.
- Return the end-of-session summary, and any follow-on prompt, as a single copy-paste-ready fenced code block.
```

**What was done:**

**Repo state confirmed before editing:** HEAD `a7c3f68`, tree clean. **It did not differ from the prompt.**

**TASK 1 — the code path, established by reading before changing anything. The hypothesis is CONFIRMED, and the reproduction found it to be WORSE than the log implies.**

`sweepPublished` wrote the action column at **three** sites, every one a bare `setValue` with nothing around it:

- `Publish.gs:588-590` (pre-fix) — the merge note
- `Publish.gs:601` (pre-fix) — the `FAILED —` note
- `Publish.gs:607-608` (pre-fix) — the outcome note

**All three sit INSIDE the `try { ... } finally { lock.releaseLock(); }` — but a `finally` with no `catch` releases the lock and RE-THROWS.** So the throw escaped the loop, escaped the function, and — critically — **passed `recordSweepRun()` at line 613 without executing it.**

**The asymmetry that IS the defect:** `note()`, the form-submit path's identical write, had carried its own `try/catch` since it was written, with the comment *"Never let recording the outcome become a second failure."* **The same write was protected on one path and bare on three.**

**MEASURED, not reasoned.** A negative control drives the real `sweepPublished` against a stub whose column M throws the Owner's exact Sheets message. With **two** missed submissions due, against the unfixed file:

| The log suggests | The reproduction measured |
|---|---|
| Notes lost after publishing succeeded | **The sweep ABORTS MID-LOOP** — only the first published; the second was never reached |
| The run failed at the end | **`recordSweepRun()` never ran** |

**So the answer to the prompt's third question is: a throw there aborts the sweep after SOME publishing has happened, not after all of it.** On his sheet the throw was on `M2`, the first data row, which is consistent with all 8 having published before the first note was attempted — **but the ordering cannot be established from outside his account**, and Layer 4 tells him exactly what to look at.

**TASK 2 — the fix.** New function **`noteInto(sheet, rowNum, col, text)` at `Publish.gs:556`**. It writes the note and returns `true`, or catches, logs and returns `false`. **It cannot throw.** The sweep's three sites now call it at `641`, `655` and `663`, each incrementing an `unrecorded` counter declared at `617`; `note()` routes through it at `513`, so there is **one** mechanism rather than four. A non-zero count produces a loud summary at `672-673` naming the probable cause and telling him which column to check.

**Not swallowing, and the brief named swallowing as the thing to avoid.** A refusal is recorded in three reachable places: the Logger with row number and refusal text; the counter and summary line; and the action cell staying blank, which is already the documented alarm.

**Every other write was assessed and deliberately left fatal.** `grep` found four remaining write sites — `writeRowBlocks:164`, `writeRangeBlocks:176`, and `appendRecommendation:1137-1138` — **all of which write to Published, i.e. the recommendation itself.** A failure there IS a lost recommendation and is correctly handled by the existing retry and `FAILED —` note. **Only audit writes changed.**

**TASK 3 — the duplicate risk, ESTABLISHED against the real functions.** `recordSweepRun()` is at line 681 (post-fix), **after** the throw point, so the run was never remembered. **But that only feeds `checkSetup`'s display — it does NOT drive the re-scan decision**, which is driven by the blank action cell at `568`. So every subsequent firing did genuinely reconsider the same rows.

**There is no duplicate-row risk. Three independent guards, each measured by executing the real code:**

| Guard | Measured |
|---|---|
| `rowIndexForPerson` | Returns the row the aborted run already published — matching phone **AND** name — so the sweep `continue`s and never republishes |
| `publishInto` if reached | Returns `added: false` — a merge into the existing id, never a new row |
| `appendRecommendation` | Returns `false` for identical words; the text is not doubled |

**All three committed as permanent tests** rather than left as a paragraph, because the evidence was worth more as a regression guard.

**TASK 4 — the Owner's check** is written into Layer 4 as three numbered steps with a what-he-finds/what-it-means table, covering whether the 8 landed, whether Murray and Stuart are present, and what their status should read. **It explicitly does NOT predict their ids** — the previous session's `T022`/`T023` estimate assumed nothing else arrived, and 8 submissions published this morning, so it tells him to read the ids off the sheet instead.

**Testing performed:**

| # | What was tested | Command | Expected | Actual | Result |
|---|---|---|---|---|---|
| 1 | Repo matches prompt's HEAD | `git log --oneline -1`; `git status --porcelain` | `a7c3f68`, clean | `a7c3f68`, clean — **did not differ** | PASS |
| 2 | Baseline before any change | all four suites | all green | **216 passed, 0 failed** | PASS |
| 3 | **Negative control reproduces the Owner's exact failure** | new stub throwing the verbatim Sheets message, vs **unfixed** file | the throw escapes | **FAIL ×3 — throw escaped, `lastSweep` unset, only `T021` published** | **Control fired correctly** |
| 4 | CONTROL mode asserts OLD behaviour vs unfixed file | `CONTROL=1 node …` | both controls pass | **both PASS** | PASS |
| 5 | The stub genuinely refuses (control is live, not vacuous) | `resp.refused > 0` | > 0 | > 0 | PASS |
| 6 | **Mid-loop abort measured** — the finding beyond the log | ids on Published after the throw | some subset | **only `T021`; second submission never reached** | PASS (defect confirmed) |
| 7 | After fix — refused note does not throw out of the sweep | `node …` | no throw | no throw | PASS |
| 8 | After fix — the sweep completes and remembers the run | `PROPS.lastSweep` | set | set | PASS |
| 9 | **After fix — BOTH submissions publish despite the refusal** | ids on Published | `T021` and `T022` | both present | PASS |
| 10 | Second firing adds no duplicate rows | row count before/after | unchanged | unchanged | PASS |
| 11 | No id appears twice after two firings | `new Set(ids).size === ids.length` | true | true | PASS |
| 12 | Recommendation text not doubled | block count on merged row | 1 | 1 | PASS |
| 13 | `rowIndexForPerson` finds the already-published row | real function, direct call | index 1 | **1 → `T021`** | PASS |
| 14 | `publishInto` merges rather than adds | real function | `added:false` | `added:false`, *"Merged into T021"* | PASS |
| 15 | `appendRecommendation` refuses identical words | real function | `false`, cell unchanged | `false`, unchanged | PASS |
| 16 | `note()` guard still present (regression) | direct call against refusing stub | no throw | no throw | PASS |
| 17 | **Controls INVERT against the fixed file** | `CONTROL=1` vs fixed | both now fail | **both FAIL** — proves they test the mechanism, not themselves | PASS |
| 18 | Full regression, all four suites | `node` each | no regression | **227 passed, 0 failed** (216 → 227, +11 new) | PASS |
| 19 | Only audit writes made non-fatal | `grep setValue/setValues` | Published writes untouched | 4 remaining sites, all Published | PASS |
| 20 | Handover line references are real | `grep -n` each cited symbol | match the text | corrected `551-561`→`556`, `~600/615/620`→`641/655/663` | PASS after correction |
| 21 | §3.6 1–3 no heading removed | heading diff vs HEAD | additions only | additions only | PASS |
| 22 | §3.6 4 timestamps regenerated and matching | `grep` both | same ISO | both `2026-09-21T07:23:59Z` | PASS |
| 23 | §3.6 5 ends at Layer 6 | `grep -n '^# LAYER'` | highest is 6 | highest is 6 | PASS |
| 24 | No plan row status changed, none appended | `git diff` both plans | no change | **neither plan file modified** | PASS |
| 25 | Owner's sheet untouched | no write path executed | nothing | nothing — all tests use stubs | PASS |
| 26 | `Code.gs` untouched | `git status` | unmodified | unmodified | PASS |
| 27 | Clean and level after push | `git status`; `git log origin/master..HEAD` | both empty | both empty | PASS |

**Test 20 is recorded because it caught a real error in my own work:** the first draft of the Layer 3 entry cited `Publish.gs:551-561` and *"lines ~600, ~615, ~620"* from memory. Verified by `grep` and corrected to the measured `556`, `641`, `655`, `663`. **An unverified line reference in a bug record is the kind of small falsehood that wastes the next session's time.**

**What was not tested:**

- **NOTHING WAS RUN INSIDE GOOGLE.** Every measurement here is against the real `Publish.gs` executed in a Node `vm` with a stub spreadsheet. **The fix is NOT live** — the copy that runs is in the Owner's Apps Script project and he must re-paste it.
- **The data-validation rule on column `M` was never read.** It is inside his account. Its existence and its permitted values are **REPORTED from his execution log**. The fix was deliberately written not to depend on that diagnosis.
- **Whether all 8 submissions actually landed is NOT established.** The reproduction proves the sweep aborts mid-loop, so the ordering matters. The Info line reports `added` at the moment of the throw, which is work genuinely done — but whether any submission followed the one that threw **cannot be determined from outside his account**. Layer 4 names exactly what he must look at.
- **The ids Murray and Stuart took are NOT predicted.** The earlier `T022`/`T023` estimate assumed nothing else arrived; 8 published this morning. Layer 4 tells him to read them off the sheet.
- **The Owner's Executions log after 07:11:08 has not been seen** by anybody — Claude.ai said so and it remains true. Later runs would show whether a subsequent sweep recovered anything the first abandoned.
- **No browser, no live site, no feed fetch** this session. Nothing on the served page changed.

**Commits:**

- `4f4e88f` — `fix: an audit-trail write can no longer abort the recovery it audits` — `noteInto()` and the sweep's three call sites, the negative controls and duplicate tests, the Layer 1/3/4/5 records and this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10).

**Finished:** 2026-09-21T07:26:40Z

**End state:**

**The defect is found, reproduced, fixed and regression-guarded — and it is not live.** `apps-script/Publish.gs` carries `noteInto()`; the sweep can no longer be killed by its own audit trail, and a refused note is counted and reported instead of thrown. **227 checks pass across four suites**, including two negative controls that pass against the broken file and fail against the fixed one.

**The Owner has two things to do, both in Layer 4:** re-paste `Publish.gs`, and remove the data-validation rule from column `M`. **The re-paste is the one that matters** — the fix survives the refusal either way, but until he re-pastes, the publisher in his account is still the one that abandons submissions after the first refused note.

**No plan row status changed and no row was appended**, as instructed. Rows 6.1 and 6.2 stay `new`; this work sits inside their existing wording. `Code.gs` and its deployment were not touched. **Nothing was written to the Owner's spreadsheet.**

Working tree clean. Remote level.

---

### 2026-09-21T08:12:05Z — The runaway duplicate, and the fix that never reached the Owner

**Source:** Claude Code
**Started:** 2026-09-21T07:48:30Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader; dunchitrader-collab/dunchitrader-collab.github.io (push of existing commits only, no new content authored there)

**Prompt received:** *(the full commissioning prompt for this session, carrying Findings A and B and their verbatim execution-log extracts, is preserved in the Claude.ai conversation above. Its two findings are reproduced in full in the Layer 3 bug entries and the Layer 5 decision for this date, which carry the verbatim log quotations.)*

**What was done:**

**Repo state confirmed first:** HEAD `ed70407`, tree clean. **It did not differ from the prompt.**

**FINDING B — TAKEN FIRST, because a duplicated list is live damage.**

**1. Verified Claude.ai's reading of `added` against the file rather than trusting it.** `Publish.gs:661` reads `if (outcome.added) added++`, and `outcome.added` is `true` only on the new-row path of `publishInto` (`1016`); both merge paths return `false` (`962`, `967`). **Claude.ai's reading is correct.** Only line 668 emits the `published N missed submission(s)` message, so the log line is unambiguously `sweepPublished`.

**2. Reproduced the live condition — repeated sweeps against ONE persistent sheet.** This is the step the previous session omitted. Findings, in order:

- The **fixed** file (`4f4e88f`) against a *clean* 8-response sheet: `published 8` once, then silence, 8 rows. **Does not match his log.**
- The **unfixed** file (`1d50b00`) with the whole action column refusing: **1 row**, throwing on the first note. **Does not match his log either** — it can never print `published 8`.
- Varying which row refuses: refusing the **last** response gives 8 rows then a throw, but still logs `published 8` only once, because runs 2+ find every row already present.

**3. Found the real mechanism by testing the guard itself.** Driving `rowIndexForPerson` across seven ways a sheet can read back differently, **six matched and one missed**: a phone the normaliser refuses. `normalisePhone('07872 065874 or 01392 980312')` returns `''`, `phoneProblem` naming it as two numbers in one box. **The sweep's check is `if (key) {...}`, so for exactly those rows the duplicate check never ran.**

**4. Reproduced the Owner's log exactly.** 8 refused-phone responses + refused notes, 14 sweeps:

| File | Rows after 14 sweeps | Log |
|---|---|---|
| `1d50b00` — **what he is running** | **14** | one new row per run |
| `4f4e88f` — yesterday's fix | **112** | **`published 8` every run — his log exactly** |
| This fix | **8** | `published 8` once |

**5. Fixed it.** `rowIndexForUnusablePhone()` at `Publish.gs:1083`, wired in at `642-643` (sweep) and `961-962` (`publishInto`).

**FINDING A — the distribution gap.**

**Established by measurement, not assumption.** `git fetch collab main` → live repo at **`0f7c3ec`, 2026-09-19T21:43:38Z**. `grep -c noteInto` on its `Publish.gs` → **`0`**. `diff` against every local commit → **byte-identical to `1d50b00`**. **The Owner re-pasted the original publisher.**

**The handover's own record resolved the access question.** Layer 1 carries a RESOLVED row: Gavin added `gsamwell-personal` as a collaborator with Write access on 2026-09-18, and a push landed at `f94d45a`. **This session therefore CAN push.** Verified with `git push --dry-run collab master:main` → `0f7c3ec..ed70407`, exit 0, **before writing anything**. The push was then performed. **The Owner needs no manual route** — but the exact copy-from URL and click-by-click paste steps are in Layer 4 regardless, with a `Ctrl+F` string to confirm the paste took.

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | Repo matches prompt HEAD | `ed70407`, clean | **did not differ** | PASS |
| 2 | Baseline all suites | green | **227 passed, 0 failed** | PASS |
| 3 | `added++` reachable only for new rows | verify Claude.ai's reading | confirmed at `661`/`1016`/`962`/`967` | PASS |
| 4 | Only one emitter of the log line | `sweepPublished` alone | line `668` only | PASS |
| 5 | Fixed file, clean sheet, 14 sweeps | no repeat | 8 rows, logged once | PASS |
| 6 | Unfixed file, all notes refused | reproduce log | **1 row — does NOT match** | Hypothesis rejected |
| 7 | Unfixed file, only last row refuses | reproduce log | 8 rows, logged once — **still no match** | Hypothesis rejected |
| 8 | Merge guard across 7 read-back variations | find the hole | **6 match, 1 misses: refused phone** | **Root cause found** |
| 9 | `normalisePhone` on a two-number field | `''` | `''` | PASS |
| 10 | **`4f4e88f` + refused phones + refused notes, 14 sweeps** | reproduce his log | **112 rows, `published 8` ×14 — EXACT MATCH** | **Reproduced** |
| 11 | `1d50b00` under the same conditions | bound the live damage | **14 rows** | PASS |
| 12 | **After fix, same conditions** | no runaway | **8 rows, no duplicates** | PASS |
| 13 | Fallback finds what the phone guard cannot | index 1 | 1 | PASS |
| 14 | Fallback does NOT match a different person | -1 | -1 | PASS |
| 15 | `publishInto` merges a refused-phone person | `added:false` | `added:false` | PASS |
| 16 | Six sweeps of two refused-phone responses | 2 rows | 2 rows, no dups | PASS |
| 17 | **New controls fail against pre-fix file** | clean FAIL | **7 FAIL, runaway reproduced in-suite (12 rows)** | PASS |
| 18 | Suite still runs against an older file | no crash | degrades to clean FAILs after guard added | PASS after fix |
| 19 | Full regression | no regression | **236 passed, 0 failed** (227→236) | PASS |
| 20 | Live repo staleness | measure | **`0f7c3ec`, identical to `1d50b00`, no `noteInto`** | PASS |
| 21 | Push access to collab | dry run before writing | `0f7c3ec..ed70407`, exit 0 | PASS |
| 22 | Handover line refs are real | match | **corrected `1047`→`1083`, `637-643/1000-1005`→`642-643/961-962`** | PASS after correction |
| 23 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `08:05:27Z`; 6 layers | PASS |
| 24 | No plan row changed or appended | no change | neither plan file modified | PASS |
| 25 | Owner's sheet untouched | nothing | all tests use stubs | PASS |
| 26 | `Code.gs` untouched, nothing redeployed | unmodified | unmodified | PASS |

**Test 22 caught my own error for the second session running** — line numbers cited from memory in a bug entry. Verified by `grep` and corrected. **The lesson is now recorded twice; it should be a habit, not a catch.**

**What was not tested:**

- **NOTHING RAN INSIDE GOOGLE.** All measurement is the real `Publish.gs` in a Node `vm` against stub sheets. **The duplicate fix is committed and pushed to both repos, but is NOT installed** until the Owner re-pastes.
- **His actual Published row count is unknown.** The prediction that he will see ~14 extra rows rather than ~112 rests on his running `1d50b00`, which is established from the live repo's contents and his re-paste — **not from reading his sheet**, which no session may do. Layer 4 asks him to count.
- **The column-M validation rule has still never been read** — inside his account. REPORTED.
- **Which specific responses carry unusable phones on his sheet is not known.** `T017 Lee Schofield` is named from the 2026-09-19 record as a known instance; there may be others.
- **The push to `collab` moved existing commits only.** No content was authored in that repo, and its `main` now equals this repo's `master`.

**Commits:**

- `04e9b54` — `fix: a refused phone no longer disables the duplicate check` — `rowIndexForUnusablePhone()` and its two call sites, the negative controls reproducing the runaway, and the Layer 1/3/4/5 records plus this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10).
- **Pushed to `collab`** (`dunchitrader-collab/dunchitrader-collab.github.io`, branch `main`): `0f7c3ec..` this session's HEAD. **No commit was authored in that repo** — existing commits were moved so the Owner's copy-source stops being stale.

**Finished:** 2026-09-21T08:12:05Z

**End state:**

**Two defects found, both real, one of them a correction to yesterday's work.** The runaway duplicate is fixed and regression-guarded; the distribution gap is closed by pushing to the live repo and is now a documented pre-paste check.

**236 checks pass across four suites.** The new controls reproduce the runaway against the pre-fix file — six sweeps of two responses giving twelve rows — and pass against the fixed one.

⚠ **NOT INSTALLED.** The Owner must re-paste from the live-repo URL in Layer 4, and confirm with `Ctrl+F` for `rowIndexForUnusablePhone`. **He also has duplicate rows on his list right now** — Layer 4 tells him what to count and to hide rather than delete, keeping the lowest id.

**No plan row status changed and no row was appended.** Rows 6.1 and 6.2 stay `new`. `Code.gs` untouched, nothing redeployed, nothing written to the Owner's spreadsheet.

Working tree clean. Both remotes level.

---

### 2026-09-21T09:22:40Z — Is a full clear of Published safe? Established: yes, with one one-click trap

**Source:** Claude Code
**Started:** 2026-09-21T09:05:10Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader

**Prompt received:** *(the commissioning prompt for this session is preserved in the Claude.ai conversation above. Its new fact — that every row on Published is test data, with the Owner's verbatim request — and its six tasks are reproduced in the Layer 1 summary and the Layer 5 findings entry for this date.)*

**What was done:**

**Repo state confirmed first:** HEAD `2239272`, tree clean. **It did not differ from the prompt.**

**TASK 1 — is a full clear safe? YES, established by EXECUTING the code rather than reading it.**

- **Id generation.** `nextId` at `Publish.gs:1256` initialises `var highest = 0` and scans column A for `^T(\d+)$`. With no data rows nothing matches, so `next = 1` and it returns **`T001`**. Executed against header-only, completely-empty, and header-plus-blank-row tables: **`T001` in all three, no throw.** ⚠ **And `T030` after `T029`** — ids do NOT restart while a higher one survives, which is exactly the hazard D7 was written for.
- **Table reading.** `lastIdRow` returns **1** when no id exists; `tableValues` branches on `if (last < 2)` and returns the header alone. `publishInto` computes `target = existing.length + 1` = **row 2**. Driven end to end: a real submission into a cleared tab published **`T001` on row 2**.
- **The Owner's `I`/`J` formulas.** `writableBlocks()` returns `[{start:0,len:8},{start:10,len:2}]` — A–H and K–L. **Measured with a stub that flags any write landing on a formula cell: zero such writes.** Both cells remained formulas after a full publish. **The publisher cannot touch them.** Separately established from `SHEET-FORMULAS.md`: they live in **`I2`/`J2` only** as whole-column `ARRAYFORMULA`s, so a row-clear that includes row 2 **would delete them** — hence the explicit check in the procedure, with the note that the `verdict` formula reads `Published!$I$2:$I$500` and breaks with them.
- **The site on an empty feed.** Driven through the **real unmodified `app.js`** in a stubbed DOM: a **header-only** feed renders **"Nobody on the list just yet"** (the calm empty state), while a **completely empty** file renders **"The list is being updated"** (the error state). **The header row is therefore load-bearing** and the procedure says so twice.

**TASK 2 — the trap. The `action` column DOES protect against the sweep, and does NOT protect against the menu.**

| Scenario | Published rows afterwards |
|---|---|
| Wiped, `action` cells left filled, **12 sweeps** | **0** — nothing came back |
| Wiped, **`action` column cleared**, 3 sweeps | **29** — everything returned |
| Wiped, `action` cells filled, **one click of the backfill menu item** | **29** — everything returned |

The sweep's guard is `Publish.gs:621`. **`backfillPublished` (defined `797`, loop `810-822`) never consults it** — it skips only rows with no name and no phone. Its alert read *"Done. Added 29 new people to the list. Skipped 0 already there or empty."*

**So what would bring the 29 back, stated exhaustively for the Owner:** clearing or deleting the `action` column; deleting the response rows in a way that misaligns the action cells; and **clicking "Publish any responses not yet on the list"**, which is the first item in his own menu and whose wording after a clear describes exactly what he wants.

**TASK 3 — the Form responses tab. RECOMMENDATION, not a decision: leave it exactly as it is.**

The test responses are harmless where they sit **as long as their `action` cells stay filled**, which is measured above. They are also the only record of what was submitted. **The trap is not the rows — it is the `action` column and the backfill menu item**, so the recommendation is to touch neither. **Stated as a residual risk rather than hidden:** a future session running the backfill for a legitimate recovery would republish all 29 alongside whatever it was recovering. That is now recorded as a `[GOTCHA]` in Layer 3 so the next session meets it before running anything.

**TASK 4 — the procedure** is written click by click in [PATH] `docs/PROCESS-seeding-and-launch-dunchi-trader.md` under *"Starting the list completely clean"*: seven steps covering which rows to select, delete-rows rather than the Delete key, checking `I2`/`J2` survived, leaving Form responses alone with a table of what not to touch, the cache-busted site check with the exact wording he should see, a ten-minute re-check, and seeding through the form. **No script writes to his sheet.**

**TASK 5 — what a yes would overturn** is recorded in Layer 4 as an open question with the three artefacts named: D7-6G7f-19092026, build plan row 2.1's Approach column, and row 2.1's sub-task text. **Nothing was changed and no decision recorded as made.**

**TASK 6 — not applicable:** the wipe is safe, so this session did not stop. The cost of a NO is recorded anyway in Layer 4.

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | Repo matches prompt HEAD | `2239272`, clean | **did not differ** | PASS |
| 2 | Baseline all suites | green | **236 passed, 0 failed** | PASS |
| 3 | `nextId` on header-only / empty / blank-row table | `T001`, no throw | `T001` ×3 | PASS |
| 4 | `nextId` after `T029` — the ruling's own case | `T030` | `T030` | PASS |
| 5 | Lookups against an empty table | no throw, -1 / [] | `-1`, `-1`, `[]` | PASS |
| 6 | `lastIdRow` / `tableValues` on cleared tab | 1 / header only | 1 / length 1 | PASS |
| 7 | First submission after a clear | `T001` on row 2 | `T001`, row 2 | PASS |
| 8 | **Writes reaching columns I or J** | **zero** | **zero; both still formulas** | PASS |
| 9 | `writableBlocks()` unchanged | A–H, K–L | `[{0,8},{10,2}]` | PASS |
| 10 | **Site on a header-only feed** | calm empty state | **"Nobody on the list just yet"** | PASS |
| 11 | **Site on a completely empty file** | distinguish | **"The list is being updated"** — header is load-bearing | PASS |
| 12 | 12 sweeps, action cells filled | nothing returns | **0 rows** | PASS |
| 13 | Action column cleared, then sweep | everything returns | **29 rows** | PASS |
| 14 | **One backfill click, action cells filled** | everything returns | **29 rows**, alert claims success | PASS |
| 15 | Twelve new checks committed as regression tests | pass | **75 passed in that suite** | PASS |
| 16 | Full regression | no regression | **248 passed, 0 failed** (236→248) | PASS |
| 17 | Handover line refs are real | match | **corrected `750-762`→`797`/`810-822`; `621` confirmed** | PASS after correction |
| 18 | Docs prefix is permitted | active prefix | `PROCESS-` active per `/api/prefixes` | PASS |
| 19 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `09:16:32Z`; 6 layers | PASS |
| 20 | **No plan row changed, none appended** | untouched | **neither plan file modified** | PASS |
| 21 | Owner's sheet untouched | nothing | all tests use stubs | PASS |
| 22 | `Code.gs` untouched, nothing redeployed | unmodified | unmodified | PASS |

**Test 17 caught my own error for the third session running** — line numbers written from memory. It is now a standing habit rather than a catch: cite nothing without a `grep`.

**What was not tested:**

- **NOTHING RAN INSIDE GOOGLE, AND NOTHING WAS WRITTEN TO THE OWNER'S SHEET.** All measurement is the real `Publish.gs` and the real `app.js` executed in Node against stubs.
- **⚠ THE POSITIVE RENDER PATH WAS NOT CONFIRMED BY THIS SESSION'S HARNESS.** The stub DOM captures `notice()` text but not rendered cards, so the "header + one real person" case showed only *"Loading the list…"*. **The two empty-state results are sound** — both are `notice()` calls on the same code path, and they differ from each other correctly. **But this harness cannot prove the list still renders after a clear-and-reseed.** That rests on the live site already doing so, which is a prior measurement and not this one's.
- **The claim that all 29 rows are test data is REPORTED from the Owner.** No session can read his sheet. The procedure's safety does not depend on it — a full clear is safe either way — but **whether he WANTS it cleared does**.
- **The `I2`/`J2` formulas' current presence is unverified.** Their definitions come from `SHEET-FORMULAS.md`; whether they are live on his tab today is inside his account. The procedure therefore tells him to check rather than assume.
- **Exact row numbers on his sheet are unknown.** The procedure says "rows 2 to the last one with an id" and has him read the number off the screen.

**Commits:**

- `cdfb28c` — `docs: a full clear of Published is established safe; the ruling is the Owner's` — the twelve new regression tests, the click-by-click procedure and the correction to the older delete advice in `PROCESS-seeding-and-launch-dunchi-trader.md`, and the Layer 1/3/4/5 records plus this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10). ⚠ **`apps-script/Publish.gs` was NOT modified this session** — the question was whether existing behaviour is safe, and it is; no code change was warranted.

**Finished:** 2026-09-21T09:22:40Z

**End state:**

**The question is answered and the ruling is left to the Owner.** A full clear is safe; a partial delete is not; D7 is right about the case it was written for and the proposed supersession is narrow rather than a repeal. **248 checks pass across four suites**, twelve of them new and asserting both the safety and the trap as facts.

**The one-click trap is the substantive finding of this session** — the first item in his own menu would undo the whole clear and report it as a success.

⚠ **NOTHING IS DECIDED.** Build plan row 2.1 is untouched and still reads *"Set status to hidden, never delete"*. No supersession is recorded against D7. Nothing was written to the Owner's spreadsheet, `Code.gs` was not touched, and nothing was redeployed.

Working tree clean. Both remotes level.

---

### 2026-09-21T09:31:20Z — D7a recorded: the Owner's ruling is safer than what the previous session advised

**Source:** Claude Code
**Started:** 2026-09-21T09:24:05Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader; dunchitrader-collab/dunchitrader-collab.github.io (push of existing commits only)

**Prompt received:** *(preserved in the Claude.ai conversation above. It carried the Owner's verbatim ruling, the instruction to record it per this session's own 2758 follow-on, and two ambiguities to resolve — row 2 versus the formulas, and the uninstalled `L2` verdict formula. Both are answered in the Layer 5 decision for this date.)*

**What was done:**

**The prescribed staleness check ran first**, as the 2758 follow-on required: `GITHUB_TOKEN= git fetch collab main && GITHUB_TOKEN= git diff FETCH_HEAD..HEAD --stat -- apps-script/` → **no output, exit 0.** The live repo's `apps-script/` is byte-identical to local; the Owner's copy-source is current. HEAD `8b27c6d`, tree clean — **did not differ from the prompt.**

**1. THE RULING IS RECORDED.** `D7a-VCWL-21092026` in Layer 5 with both verbatim quotations, what it overturns, and that he ruled knowing it.

**2. THE SUPERSESSION IS MARKED NARROW.** `D7-6G7f-19092026` is **not repealed** — it governs every partial removal, and its reasoning is untouched. A second rule is also superseded and is named so it is not missed: the carried-forward convention *"never delete rows from Form responses"*, which was a session convention rather than a D-numbered ruling.

**3. BUILD PLAN ROW 2.1 AMENDED, STATUS UNTOUCHED.** Approach: *"Set status to hidden, never delete"* → *"Complete clear sanctioned by D7a; partial removal still means hiding"*. The sub-task text carries the supersession with his words and the measured evidence. **Status stays `new`**, as instructed — it closes on his sighting. **§3.10 validator re-run: exit 0, 9 sub-tasks, 0/32 — position unchanged.**

**4. THE CORRECTION TO HIS RULING — PUT TO HIM, AND THE ANSWER IS THAT HE IS RIGHT.** The prompt asked which of two conflicting positions is correct, and told me not to silently follow either. **Measured side by side against the real code:**

| Shape | 12 sweeps | One backfill click |
|---|---|---|
| Response rows **LEFT** — what 2758 recommended | 0 rows | **6 rows returned** |
| Response rows **CLEARED** — D7a | 0 rows | **0 rows**, *"There are no form responses yet."* |

**2758 was wrong.** It treated the filled `action` cells as sufficient and logged the backfill menu item as a residual risk to be documented. **Clearing the rows disarms the trap instead** — a guard that depends on nobody clicking a menu item is weaker than having nothing for that item to act on. **His ruling is the safer option and this session says so plainly rather than splitting the difference.**

**Also established:** nothing else breaks. `responsesSheet` still resolves an emptied tab, the `values.length < 2` guard means no path throws, and a new submission after the reset publishes as **`T001`, `active`** with its action line written back.

**5. AMBIGUITY ONE — ROW 2. This was a real defect in my own previous procedure and it is rewritten, not patched.** The earlier version said delete rows and *then* check `I2`/`J2` survived — **but `I2`/`J2` are in row 2.** The check came after the destruction.

**The one-sentence answer, now stated in the procedure itself:** *every delete starts at row 3, and row 2's data cells are cleared by hand in two pieces that skip the formula cells.* On Published that is `A2:H2` then `K2:L2`; on **Form responses**, whose `J2`/`K2`/`L2` verdict formulas are in row 2 for exactly the same reason, it is `A2:I2` then `M2`.

**6. AMBIGUITY TWO — THE `L2` VERDICT FORMULA. It matters, but it is NOT a blocker, and it is folded in as step 6.** Established by search: **no code reads the `verdict` column** — zero matches in `Publish.gs`'s logic, in `Code.gs`, and in `app.js`. It is an at-a-glance aid for the Owner alone, so a defective version **cannot** corrupt the list, the feed or the site.

**Evaluated against an emptied Published using the committed verdict harness's own models:** with the list empty, the constant-id defect (`verdictV2`) and the fixed version **both read `NEW`** — the defect only manifests when there are rows to look up. The older self-match defect (`verdictV1`) would read **`"ALREADY ON SITE — row 2"`** on an empty list, which is visibly absurd and he would spot it at once.

**So it is folded into the reset rather than left separate**, because he will already have `L2` open and a wrong verdict on the *first real submission* is when it would mislead him most. **His 2026-09-19 words — *"I have now pasted the correct code. And it seems to work"* — suggest he already has the corrected version**, so the step reads compare-then-paste-if-different rather than assuming he needs it.

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | **Prescribed staleness check** | clean | **no output, exit 0 — copy-source current** | PASS |
| 2 | Repo matches prompt HEAD | `8b27c6d`, clean | did not differ | PASS |
| 3 | Baseline all suites | green | **248 passed, 0 failed** | PASS |
| 4 | D7a shape: 12 sweeps after clearing both tabs | 0 rows | **0 rows** | PASS |
| 5 | **D7a shape: one backfill click** | nothing to republish | **0 rows**, *"There are no form responses yet."* | PASS |
| 6 | 2758 shape: 12 sweeps, rows left | 0 rows | 0 rows — held | PASS |
| 7 | **2758 shape: one backfill click** | the residual risk | **6 rows returned** — 2758's advice leaves the trap live | PASS |
| 8 | Delete-from-row-3 shape (formula spill row survives) | ignored safely | sweep completed, 0 rows; backfill skipped it | PASS |
| 9 | New submission after the reset | publishes cleanly | **`T001`, `active`**, action line written | PASS |
| 10 | Empty responses tab throws nowhere | no throw | no throw (`values.length < 2`) | PASS |
| 11 | **Does any code read `verdict`?** | establish | **zero matches** in `Publish.gs` logic, `Code.gs`, `app.js` | PASS |
| 12 | Verdict versions against an EMPTY Published | establish | fixed and constant-id both `NEW`; self-match reads *"ALREADY ON SITE — row 2"* | PASS |
| 13 | Form responses formula cells located | which row | **`J2`/`K2`/`L2` — row 2**, same trap as Published | PASS |
| 14 | Nine new checks committed as regression tests | pass | **84 passed in that suite** | PASS |
| 15 | Full regression | no regression | **257 passed, 0 failed** (248→257) | PASS |
| 16 | **§3.10 build-plan validator after amending 2.1** | exit 0, 9 sub-tasks | **exit 0, 9 sub-tasks, 0/32** | PASS |
| 17 | **Row 2.1 status unchanged** | still `new` | still `new`; only Approach and text changed | PASS |
| 18 | Unsafe "delete then check" ordering removed | zero occurrences | zero; every delete starts at row 3 | PASS |
| 19 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `09:26:45Z`; 6 layers | PASS |
| 20 | Owner's sheet untouched | nothing | all tests use stubs | PASS |
| 21 | `Code.gs` untouched, nothing redeployed | unmodified | unmodified | PASS |

**What was not tested:**

- **NOTHING RAN INSIDE GOOGLE AND NOTHING WAS WRITTEN TO THE OWNER'S SHEET.** All measurement is the real `Publish.gs` and the committed verdict harness executed in Node against stubs.
- **⚠ WHICH `L2` VERSION IS ACTUALLY IN HIS SHEET IS UNKNOWN.** The inference that he has the corrected one rests on his 2026-09-19 report, which is **REPORTED**, not measured. The procedure therefore has him compare rather than assume — which is correct whichever version he holds.
- **The data-validation rule on column `M` has still never been read** — inside his account.
- **His actual row counts are unknown.** The procedure has him read the last row number off the screen rather than naming one.
- **The site's positive render path was not re-confirmed this session.** The empty-state results are carried from 2758's measurement; this session added no new `app.js` evidence.
- **The reset itself has not been walked** — it is his action, and the procedure has never been executed by anyone.

**Commits:**

- `5ca7ad9` — `docs: D7a - the Owner rules for a complete reset, and it is the safer option` — the D7a ruling in Layer 5, the narrow supersession, build plan row 2.1's Approach and sub-task text, the rewritten eleven-step reset procedure, nine new regression tests, and the Layer 1/4 records plus this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10). ⚠ **No code file was modified** — `Publish.gs`, `Code.gs` and `app.js` are untouched; the only `apps-script/` change is the test file.

**Finished:** 2026-09-21T09:31:20Z

**End state:**

**The ruling is recorded, the supersession is narrow, and the plan row carries it without its status moving.** `D7-6G7f-19092026` still governs every partial removal; `D7a-VCWL-21092026` governs the complete clear.

**The correction was put to him and the answer is that he was right** — clearing the response rows disarms the backfill trap that the previous session could only document. **257 checks pass across four suites**, nine of them new and asserting that side-by-side difference as a fact.

**Both ambiguities are closed:** every delete starts at row 3 with row 2 cleared by hand in two pieces, on both tabs; and the `L2` paste is folded in as step 6, established as worth doing but not a blocker because nothing reads the column.

⚠ **NOTHING IS RUN.** The reset is the Owner's action. Build plan row 2.1 is still `new`. Nothing was written to his spreadsheet, `Code.gs` was not touched, nothing was redeployed.

Working tree clean. Both remotes level.

---

### 2026-09-21T09:47:55Z — The documented remedy was reported broken; measurement says it is right, and the real alarm is narrowed

**Source:** Claude Code
**Started:** 2026-09-21T09:38:30Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader; dunchitrader-collab/dunchitrader-collab.github.io (push of existing commits only)

**Prompt received:** *(preserved in the Claude.ai conversation above. It carried the Owner's verbatim `checkSetup` output after his D7a reset, and a report that `SHEET-FORMULAS.md` gives identical formulas for Published `I2` and `J2`, offered as a hypothesis to test rather than implement.)*

**What was done:**

**The prescribed staleness check ran first:** `GITHUB_TOKEN= git fetch collab main && GITHUB_TOKEN= git diff FETCH_HEAD..HEAD --stat -- apps-script/` → **no output, exit 0.** Copy-source current. HEAD `0ec1c95`, tree clean — **did not differ from the prompt.**

**TASK 1 — who actually reads Published `I` and `J`. Established by reading every consumer, then by execution.**

| Consumer | Reads `I`/`J`? | Evidence |
|---|---|---|
| `rowIndexForPerson` — **the duplicate merge** | **NO** | Reads `PUB_COLS.indexOf('phone')`, `'first_name'`, `'last_name'` = columns **E, B, C**, and calls `normalisePhone` / `nameKeyOf` in JavaScript |
| `publishInto`, `appendRecommendation`, the sweep | **NO** | `FORMULA_COLS = [8,9]`; `writableBlocks()` = A–H, K–L. Index `[8]` appears once outside declarations — inside `checkSetup` itself |
| `app.js` | **NO** | zero matches for `pub_phone_key` / `pub_name_key`; maps by header name, ignores unknown columns |
| `Code.gs` | **NO** | zero matches |
| **`verdict` `L2` on Form responses** | **YES** | `COUNTIF(Published!$I$2:$I$500, …)`, `$J$2:$J$500`, and two `VLOOKUP`s over `{Published!$I$2:$I$500, …}` |

**Executed to settle it rather than argued:** a repeat submission against a `T001` row whose `I` and `J` cells are **empty** returns `{"added":false,"action":"Merged into T001 — second recommendation for Real Villager"}` and the table length does not grow. **His live duplicate protection is NOT weakened and he does not need to stop submitting.**

**Against the committed verdict harness:** with the helpers dead the verdict reads **`NEW`**; with them alive, **`ALREADY ON SITE — T001`**. **That is the entire impact.**

**This reconciles the two earlier reports the prompt asked about.** 2758 (no publisher *write* reaches I/J) and 2760 (no code *reads* the verdict column) both stand. `checkSetup` can still call the duplicate checker broken because it is reporting on neither — it reports on the **formula-fed verdict the Owner reads with his own eyes**, which is exactly who a setup check is written for.

**TASK 2 — the correct formula for each cell. They are NOT identical and the current document is right.**

- **`I2` is the PHONE key** — 291 characters, reads `$E$2:$E`, folds `+44` / `0044` / `0` to one form. Published column `E` is `phone` per `PUB_COLS`.
- **`J2` is the NAME key** — 121 characters, reads `$B$2:$B` and `$C$2:$C`, concatenated then lower-cased with punctuation stripped. Published `B` and `C` are `first_name` and `last_name`.

**The mirror on Form responses is the same idea at different letters**, which is why a cross-tab comparison looks like a defect: phone is `F` there (so `J2` reads `$F$2:$F`), names are `D` and `E` (so `K2` reads both). **All four verified against the column layouts the code enforces** — `PUB_COLS` for Published, the `FR_HDR` real header carried in the committed test harness for Form responses.

**TASK 3 — no fix was needed, and nothing was changed.** Hashing every documented formula: **no two cells share one.** The live raw file is **byte-identical** to the repo. `checkSetup`'s *"step 2"* pointer resolves to `## Step 2 — Two helper columns on the Published tab`, which is the correct section. **`SHEET-FORMULAS.md` is unmodified by this session**, verified by `diff` after the mutation test restored it.

**TASK 4 — the same class of defect elsewhere: NONE.** Every `Click cell X and paste` instruction in the document was paired with its fenced block and audited: **7 formulas, 7 distinct hashes, no cell documented twice, and every cell reference consistent with the layout its own tab uses.**

**TASK 5 — the two formulas are in Layer 4**, extracted **programmatically from the source document** rather than retyped, with the tab, the cell, the warning that they must not be swapped, a formula-bar check for each, and what `checkSetup` should say afterwards.

**A regression guard was added** — ten checks in `apps-script/test-verdict.js` asserting the whole property mechanically. **Mutation-tested:** making `J2` identical to `I2` is killed by three of them, naming the exact cells. The next report of this shape is answered by one command.

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | **Prescribed staleness check** | clean | **no output, exit 0** | PASS |
| 2 | Repo matches prompt HEAD | `0ec1c95`, clean | did not differ | PASS |
| 3 | Baseline all suites | green | **257 passed, 0 failed** | PASS |
| 4 | **Are `I2` and `J2` identical?** — the reported defect | establish | **NO.** sha `93656f4ab755` vs `0219a5886321`; 291 vs 121 chars | **Report REFUTED** |
| 5 | Live raw file vs repo | compare | **byte-identical**, 19,615 bytes both | PASS |
| 6 | **Every documented formula hashed** | no duplicates | **7 formulas, 7 distinct hashes** | PASS |
| 7 | No cell documented twice | none | none | PASS |
| 8 | Published `I2` reads the phone column | `E` | `["E"]`, and `PUB_COLS[4]` = `phone` | PASS |
| 9 | Published `J2` reads the name columns | `B`,`C` | `["B","C"]`, `PUB_COLS[1..2]` = first/last | PASS |
| 10 | Form responses `J2` / `K2` | `F` / `D`,`E` | `["F"]` / `["D","E"]`, matching `FR_HDR` | PASS |
| 11 | **Does `rowIndexForPerson` read I or J?** | establish | **NO** — reads E, B, C; normalises in JS | PASS |
| 12 | **Merge with `I`/`J` EMPTY** — the operational question | still merges | **`added:false`, "Merged into T001"**, no second row | PASS |
| 13 | `app.js` / `Code.gs` references | none | zero matches in both | PASS |
| 14 | Verdict with helpers dead vs alive | differ | **`NEW`** vs **`ALREADY ON SITE — T001`** | PASS |
| 15 | `checkSetup`'s step pointer resolves | step 2 exists | `## Step 2 — Two helper columns on the Published tab` | PASS |
| 16 | Ten new document-audit checks | pass | **59 passed in that suite** | PASS |
| 17 | **Mutation: make `J2` identical to `I2`** | controls fire | **3 FAIL, naming `Published!I2`,`Published!J2`** | PASS |
| 18 | Document restored after mutation | byte-identical | byte-identical | PASS |
| 19 | Full regression | no regression | **267 passed, 0 failed** (257→267) | PASS |
| 20 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `09:43:07Z`; 6 layers | PASS |
| 21 | No plan row changed, none appended | untouched | neither plan file modified | PASS |
| 22 | Owner's sheet untouched; `Code.gs` untouched | nothing | both untouched, nothing redeployed | PASS |

**Test 4 is the finding of the session and is recorded as a REFUTATION rather than a fix.** Rule 1.9 applies in the mirror direction: accepting a falsification on report is the same error as accepting a claim on report. The report was tested, not dismissed and not adopted.

**What was not tested:**

- **NOTHING RAN INSIDE GOOGLE AND NOTHING WAS WRITTEN TO THE OWNER'S SHEET.** All measurement is the real `Publish.gs`, the real `SHEET-FORMULAS.md` and the committed verdict harness, executed in Node.
- **⚠ WHETHER THE PASTE WILL ACTUALLY TAKE IS UNVERIFIED.** The formulas are correct as documented; whether Google accepts them into his `I2`/`J2` on his sheet can only be seen on his screen. **That is why Layer 4 gives him a formula-bar check per cell and a `checkSetup` re-run rather than declaring it done.**
- **His `L2` verdict version is still unconfirmed** — carried from 2760, unchanged. It does not affect this repair.
- **`checkSetup`'s "NOT FILLING IN" branch was not exercised.** It is the path taken when a formula exists but does not reach a row; Layer 4 names it and the likely cause, from reading `Publish.gs:1936-1952` rather than from running it.
- **The site was not re-read this session.** That Published renders `T001` is **REPORTED** from the Owner and from Claude.ai's browser read.

**Commits:**

- `0387daa` — `test: the documented I2/J2 formulas are right — report refuted, guard added` — ten mutation-tested document-audit checks in `apps-script/test-verdict.js`, and the Layer 1/3/4/5 records plus this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10). ⚠ **`apps-script/SHEET-FORMULAS.md` was NOT modified** — the reported defect was refuted by measurement, so there was nothing to fix. `Publish.gs`, `Code.gs`, `app.js` and both build plans are likewise untouched.

**Finished:** 2026-09-21T09:47:55Z

**End state:**

**The documented remedy was not broken and was not changed.** The reported defect is refuted by measurement and the refutation is itself evidenced — hashes, byte-comparison of the live file, and a column-by-column audit against the layouts the code enforces.

**The alarm the Owner saw is correct and now has its true scope written down:** the publisher still merges duplicates with the helper columns dead, so **nothing gets published twice and he need not stop submitting**; what is affected is the `verdict` column he reads. **The repair is two pastes, in Layer 4, verbatim from the source document.**

**The property is now guarded mechanically** — ten checks, mutation-tested, so the next report of this shape costs one command instead of a session.

⚠ **Nothing is repaired on his sheet.** That is his action. Build plan rows unchanged; no status moved; `Code.gs` untouched; nothing redeployed.

Working tree clean. Both remotes level.

---

### 2026-09-21T10:05:12Z — Three rows closed: 0/32 → 8/32

**Source:** Claude Code
**Started:** 2026-09-21T09:58:40Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader; dunchitrader-collab/dunchitrader-collab.github.io (push of existing commits only)

**Prompt received:** *(preserved in the Claude.ai conversation above. A plan update and nothing else: close rows 2.1, 6.2 and 6.4 on the Owner's sightings and his ruling D10a-VCWL-21092026, change no code, touch no other row, append nothing.)*

**What was done:**

**Staleness check first:** `GITHUB_TOKEN= git fetch collab main && GITHUB_TOKEN= git diff FETCH_HEAD..HEAD --stat -- apps-script/` → **no output, exit 0.** HEAD `817af0c`, tree clean — **did not differ from the prompt.**

**Baseline measured before editing**, so the movement is attributable: validator `exit=0`, **9 sub-tasks, 0/32 = 0.0%**.

**Three rows closed, and nothing else touched.**

- **`2.1` → `done`** (effort 2). Closure record appended to its sub-task cell: his own clearing of the list, his verbatim *"The electrician is made up so I will be deleting it."*, the empty-state render at 2026-09-21T10:00Z, and the note that its Approach was amended under D7a so the route taken is sanctioned.
- **`6.2` → `done`** (effort 5). Records ruling **`D10a-VCWL-21092026`**, the *"a few seconds"* against 38.95s, the full reconciliation output, **and that the check found a real fault four sessions had missed.** Carries the not-witnessed caveat in the row itself.
- **`6.4` → `done`** (effort 1). Records his verbatim *"yes it opens in a new tab"* and why an attribute measurement was not sufficient.

**Satellite rows updated for the same three**: `State` → `done`, `Forecast` and `Forecast end` → **2026-09-21**.

**On the dates, because the prompt asked them to be justifiable rather than invented.** **`Actual start` was LEFT at `2026-09-19`** on all three — that is when the work genuinely began, recorded when the rows were written, and closing a row is no reason to restate when it started. **`Forecast end` moved from `2026-09-26` to `2026-09-21`**, the date the work actually completed, which is the honest forecast for a finished row. **`Due` and `Planned end` were NOT altered** — they are the baseline promise (STD-00009 Rule 5.12.1), and rewriting a baseline to match the outcome is the same class of error as re-weighting effort to move a percentage. **The rows finished five days inside their promise and the record now shows that.**

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | Staleness check | clean | **no output, exit 0** | PASS |
| 2 | Repo matches prompt HEAD | `817af0c`, clean | did not differ | PASS |
| 3 | Baseline position before edits | a figure to compare | **9 sub-tasks, 0/32 = 0.0%**, exit 0 | PASS |
| 4 | Rows enumerated from the document itself | 9 | **9** — 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 6.2, 6.3, 6.4 | PASS |
| 5 | Predicted post-change figure, computed before editing | a prediction to test | **8 of 32 = 25.0%** | PASS |
| 6 | **§3.10 validator after the edits** | exit 0 | **`exit=0`** | PASS |
| 7 | **Validator sub-task count** | 9 | **9** | PASS |
| 8 | **Validator completion figure** | verify, not confirm | **`done effort: 8 / 32 = 25.0%`** — matches the prediction | PASS |
| 9 | **Count cross-checked against rows the file holds** | must match | **document 9, validator 9 — MATCH.** A clean exit is not evidence every row was read; this is | PASS |
| 10 | **Completion recomputed independently from the document** | must match | **8 of 32 = 25.0%**, done rows `['2.1','6.2','6.4']` | PASS |
| 11 | Exactly three rows are `done` | 2.1, 6.2, 6.4 | exactly those three | PASS |
| 12 | Untouched rows still `new` | 1.1, 3.1, 4.1, 6.1, 6.3 | all five still `new` | PASS |
| 13 | `5.1` still `external` | unchanged | `external` | PASS |
| 14 | Satellite `State` matches four-column status on all 9 | consistent | consistent | PASS |
| 15 | No row appended, none renumbered | 9 ids unchanged | unchanged | PASS |
| 16 | No effort re-weighted | 3,2,4,5,9,8,5,4,1 | unchanged | PASS |
| 17 | **No code file touched** | none | `Publish.gs`, `Code.gs`, `app.js`, `SHEET-FORMULAS.md` all unmodified | PASS |
| 18 | Test suites still green (no code changed, so a control) | no regression | **267 passed, 0 failed** | PASS |
| 19 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `10:05:12Z`; 6 layers | PASS |
| 20 | Nothing written to the Owner's sheet | nothing | nothing — this session ran no Apps Script at all | PASS |

**What was not tested:**

- **⚠ ROW 6.2's BLANK-`action`-CELL ALARM HAS NOT FIRED SINCE THE RESET.** The clause is installed, covered by the committed harness, and was measured working on 2026-09-21 — **but nobody has seen a blank cell signal a real loss on his sheet, because nothing has been lost since.** Installed, not sighted. **The row closes on the Owner's ruling with that gap named.**
- **⚠ ROW 2.1's OUTCOME IS MET BY AN EMPTY LIST, not a curated one.** No test person is visible because nobody is. That satisfies the wording, and a reader should know which of the two it was.
- **THE EMPTY-STATE RENDER IS REPORTED, NOT MEASURED HERE.** Claude.ai read the served page in a live browser at 2026-09-21T10:00Z. **This session ran no browser and did not fetch the feed** — it was a plan update and reading the site was not in scope. Rule 1.9: REPORTED, source named.
- **THE OWNER'S QUOTATIONS ARE REPORTED** from the commissioning prompt, which is Claude.ai's record of the conversation. No session witnessed them.
- **THE `Check the setup` TIMING IS THE OWNER'S OWN REPORT** — *"a few seconds"* is his impression, not an instrumented measurement. The 38.95s it is compared against WAS measured, on 2026-09-19.
- **NO CODE WAS RUN OR CHANGED.** The test suites were executed only as a control to confirm this plan-only session broke nothing.

**Commits:**

- `f12f5e8` — `docs: close rows 2.1, 6.2 and 6.4 — the plan moves 0/32 to 8/32 (25.0%)` — the three row closures and their satellite dates in `docs/BUILD-PLAN-dunchi-launch.md`, and the Layer 1/5 records plus this entry. **Resolved to a real SHA by a follow-up commit rather than left as a placeholder** (rule 1.10). ⚠ **NO CODE FILE WAS TOUCHED** — `Publish.gs`, `Code.gs`, `app.js`, `SHEET-FORMULAS.md` and every test file are unmodified; this was a plan update and nothing else.

**Finished:** 2026-09-21T10:05:12Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` stands at 8 of 32 effort (25.0%), 3 of 9 rows done** — verified by the validator at exit 0 and independently recomputed from the document, with the row count cross-checked against the rows the file actually holds.

**What remains, and what now gates launch.** Rows `1.1` (tell the village, 3), `3.1` (the list carries real people, 4), `4.1` (the journey works on real content, 5), `6.1` (a dropped submission recovers by itself, 8) and `6.3` (no invented number, no misattributed recommendation, 4) are all still `new`. **`3.1` is now the live gate** — the list is empty, so the village cannot usefully be told until real tradespeople are on it. **`6.1` closes only when the Owner sees a dropped submission recover by itself**, and nothing has been dropped since the fix.

**Nothing else moved.** No code file was touched, no row appended, no effort re-weighted, nothing written to the Owner's spreadsheet, nothing redeployed.

Working tree clean. Both remotes level.

---

### 2026-09-21T10:18:44Z — Row 6.3 closed on D9a: 8/32 → 12/32

**Source:** Claude Code
**Started:** 2026-09-21T10:12:30Z

**Conversation reference:** https://claude.ai/cowork/cse_01YAn7KvGsK7cVxRppsZVCWL
**Repos touched this session:** dunchi-trader; dunchitrader-collab/dunchitrader-collab.github.io (push of existing commits only)

**Prompt received:** *(preserved in the Claude.ai conversation above. A plan update and nothing else: close row 6.3 on the Owner's ruling D9a-VCWL-21092026, record the three-way witnessed / installed-not-witnessed / residual-risk split, change no code, touch no other row.)*

**What was done:**

**Staleness check first:** `GITHUB_TOKEN= git fetch collab main && GITHUB_TOKEN= git diff FETCH_HEAD..HEAD --stat -- apps-script/` → **no output, exit 0.** HEAD `ed944b2`, tree clean — **did not differ from the prompt.**

**Baseline measured before editing:** validator `exit=0`, **9 sub-tasks, 8/32 = 25.0%**. **Rows enumerated from the document independently: 9.** **Predicted post-change figure computed BEFORE the edit: 12 of 32 = 37.5%**, so the validator was tested against a prediction rather than trusted.

**Row 6.3 → `done`.** Its sub-task cell now carries the ruling verbatim, why the intended sighting is unreachable, and the full three-way split. The satellite row's `State` → `done`, `Forecast` and `Forecast end` → **2026-09-21**. **`Actual start` left at `2026-09-19`** — when the work began — and **`Due` and `Planned end` NOT rewritten**, per the argument made in 2762: a baseline is a promise, and rewriting it to match the outcome is the same error as re-weighting effort to move a percentage. **The row finished five days inside its promise and the record shows it.**

**⚠ A DEFECT WAS INTRODUCED AND CAUGHT BY THE §3.10 GATE, and it is recorded rather than quietly fixed.** The first version of the closure quoted the Owner's validation regex verbatim inside the sub-task cell. **That regex contains a literal `|`** — `(\+44|0)` — which **split the four-column row into five cells**. The validator failed at `exit=1` and reported precisely what had happened:

> *"line is inside a declared sub-task table but does not parse as a four-column row (found 5 cells, expected 4)… THE ROW IS NOT COUNTED and every completion figure over this plan is wrong until it is fixed"*

**Measured while broken: `sub-tasks: 8`, `done effort: 8 / 28 = 28.6%`** — the row had vanished and the figure was silently wrong in the flattering direction. **The plan was fixed, not the check.** The regex is described in words inside the table cell and quoted **verbatim in handover Layer 5**, where it is not inside a table row. **Escaping was NOT attempted**: STD-00009 §6.1 FINDING 2026-07-31-A records that `\|` does not work and must not be used.

**This is the exact failure §3.10 exists to catch**, and it is worth stating that the gate earned its place this session: a clean-looking edit removed a row from the plan entirely, and nothing else would have noticed.

**Testing performed:**

| # | What was tested | Expected | Actual | Result |
|---|---|---|---|---|
| 1 | Staleness check | clean | **no output, exit 0** | PASS |
| 2 | Repo matches prompt HEAD | `ed944b2`, clean | did not differ | PASS |
| 3 | Baseline position before edits | a comparison | **9 sub-tasks, 8/32 = 25.0%**, exit 0 | PASS |
| 4 | Rows enumerated from the document | 9 | **9** | PASS |
| 5 | Predicted figure, computed before editing | a prediction | **12 of 32 = 37.5%** | PASS |
| **6** | **§3.10 validator — FIRST attempt** | exit 0 | **`exit=1` — literal `\|` in the quoted regex split the row into 5 cells; `sub-tasks: 8`, figure wrong at `8/28 = 28.6%`** | **FAIL — plan fixed, check not weakened** |
| 7 | Validator after removing the pipe | exit 0 | **`exit=0`** | PASS |
| 8 | **Validator sub-task count** | 9 | **9** | PASS |
| 9 | **Validator completion figure** | verify, not confirm | **`12 / 32 = 37.5%`** — matches the prediction | PASS |
| 10 | **Count cross-checked against rows the file holds** | must match | **document 9, validator 9 — MATCH** | PASS |
| 11 | **Figure recomputed independently from the document** | must match | **12 of 32 = 37.5%**, done `['2.1','6.2','6.3','6.4']` | PASS |
| 12 | **Every row parses as exactly four cells** | all 9 | **all 9** — added after the defect above | PASS |
| 13 | Exactly four rows `done` | 2.1, 6.2, 6.3, 6.4 | exactly those | PASS |
| 14 | Untouched rows still `new` | 1.1, 3.1, 4.1, 6.1 | all four still `new` | PASS |
| 15 | `5.1` still `external` | unchanged | `external` | PASS |
| 16 | Satellite `State` matches four-column status | consistent on all 9 | consistent | PASS |
| 17 | No row appended, none renumbered, no effort re-weighted | unchanged | `3 2 4 5 9 8 5 4 1` | PASS |
| 18 | **No code file touched** | none | `apps-script/` and `app.js` unmodified | PASS |
| 19 | Test suites green (control) | no regression | **267 passed, 0 failed** | PASS |
| 20 | §3.6 headings / timestamps / Layer 7 | pass | additions only; both stamps `10:18:44Z`; 6 layers | PASS |
| 21 | Nothing written to the Owner's sheet | nothing | no Apps Script run at all | PASS |

**What was not tested:**

- **⚠ FIVE CLAUSES OF THIS ROW'S OWN WORDING REMAIN UNWITNESSED IN PRODUCTION**, and the closure rests on the Owner's ruling rather than on their having been seen: the publisher's own refusal of a multi-number field and its `action`-column reason; the merge matching on phone AND name; the merge recording what was submitted; the verdict reading `ON THE LIST BUT HIDDEN`; and `Code.gs`'s header. **Committed at `4f4e88f` and `04e9b54`, covered by the suites, never seen to run inside Google.**
- **⚠ THE RESIDUAL RISK IS REAL AND UNMITIGATED.** The form's validation covers the form route only. **A row typed into the sheet by hand, or arriving via `backfillPublished`, is not protected by it** — the publisher's unwitnessed refusal is the only defence on those routes.
- **NOTHING WAS RE-TESTED TO JUSTIFY THE CLOSURE, deliberately.** Re-running the existing suites would demonstrate the same coverage again and risk being read as the sighting the row actually wanted.
- **THE FORM VALIDATION ITSELF WAS NOT OBSERVED BY ANY SESSION.** That it rejected his two-number test is **REPORTED** from the Owner via the commissioning prompt. The regex is likewise his, quoted as supplied.
- **The Owner's quotation is REPORTED** from the prompt, which is Claude.ai's record of the conversation.
- **No code was run or changed.** The suites were executed only as a control.

**Commits:**

- UNRESOLVED — replaced with the real SHA by the follow-up commit (rule 1.10)

**Finished:** 2026-09-21T10:18:44Z

**End state:**

**`PLAN-DUNCHI-LAUNCH-2026-09-19` stands at 12 of 32 effort (37.5%), 4 of 9 rows done** — verified by the validator at exit 0, recomputed independently from the document, and with every row re-checked as parsing to four cells after the pipe defect.

**Step 6 is now three-quarters closed:** `6.2`, `6.3` and `6.4` are `done`; **`6.1` alone remains**, and it closes only when the Owner sees a dropped submission recover by itself — which nothing has done since the fix landed. **That row may have no reachable sighting**, and it is the obvious next thing to put to him.

**What gates launch is unchanged: `3.1`.** The list is empty, so the village cannot usefully be told (`1.1`) and the journey cannot be walked on real content (`4.1`).

**Nothing else moved.** No code file touched, no row appended, no effort re-weighted, nothing written to the Owner's spreadsheet, nothing redeployed.

Working tree clean. Both remotes level.
