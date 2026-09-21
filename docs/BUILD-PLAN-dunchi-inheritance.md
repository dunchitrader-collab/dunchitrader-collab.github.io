# BUILD PLAN — dunchi-inheritance

**Plan ID:** PLAN-DUNCHI-INHERITANCE-2026-09-21

| Field | Value |
|---|---|
| **Plan ID** | `PLAN-DUNCHI-INHERITANCE-2026-09-21` |
| **Primary repo** | `dunchi-trader` |
| **Live repo** | `dunchitrader-collab/dunchitrader-collab.github.io` |
| **Created** | `2026-09-21` |
| **Estimate** | 9 |
| **Summary** | Prove that somebody handed only the two account logins can rebuild the Dunchideock village trades directory from nothing. The runbook exists but is known broken and has never been walked, so this plan repairs it and then establishes by walking that it works. |

---

## WHY THIS PLAN EXISTS AS A PLAN OF ITS OWN

**Owner's ruling [DECISION] `D3c-VCWL-21092026`, 2026-09-21. His words, verbatim:**

> ***"D3c. Handover is less of a concern than getting this live!"***

He was offered three routes for the inheritance row, which sat in
`PLAN-DUNCHI-LAUNCH-2026-09-19` as row `5.1` at effort **9 — the largest row in that plan**:

| Route | What it was |
|---|---|
| D3a | Repair the runbook, then **he** walks it |
| D3b | Repair the runbook, then **Frank** walks it — **Claude.ai's recommendation** |
| **D3c** | **Move the row out of the launch plan into a successor plan of its own — CHOSEN** |

**Claude.ai recommended D3b and the Owner OVERRULED it.** The recommendation's grounds are
recorded here rather than summarised away, because a recommendation that is overruled is only
useful if a later reader can see what was argued: the row's own acceptance test is *"someone
handed only the two logins"*, and **the Owner knows too much about this system for his own walk
to be a valid test of it** — he would supply from memory whatever the runbook fails to say, which
is precisely the defect class the walk exists to find. Frank walking it was the way to get a real
test. **The Owner's ruling does not dispute that reasoning; it reprioritises against it.** Getting
the directory live is worth more to him right now than proving it can be handed on.

**⚠ THE INHERITANCE REQUIREMENT IS THEREFORE UNPROVEN, AND NOTHING MAY DESCRIBE IT AS SATISFIED.**
It is the Owner's own clause of the Requirement as stated:

> "I want to be able to hand over the operating site to anyone else who inherits that google
> email account"

**It is the only clause of that Requirement still unmet.** Moving it into this plan changes who
owns it and when it will be looked at. **It does not advance it by one step**, and this plan's
percentage standing at 0% is the honest reading of that.

---

## HOW THIS ROW ARRIVED — PROVENANCE, SO AN OLD CITATION RESOLVES

This row has moved twice. **Both hops are named here** so that a reader following a citation from
a commit message, a handover entry or a prompt lands on something rather than nothing:

| Plan | Row id there | Status left behind |
|---|---|---|
| `PLAN-DUNCHI-TRADER-V1` (archived) | `6.1` | `external`, text preserved in full |
| `PLAN-DUNCHI-LAUNCH-2026-09-19` (live) | `5.1` | `external`, text preserved in full |
| **`PLAN-DUNCHI-INHERITANCE-2026-09-21`** (this plan) | **`1.1`** | **owns the work** |

**The row is RENUMBERED FRESH to `1.1`** per STD-00009 Rule 5.8.5 [CORE] — *"A successor is a new
document, not a rearranged one."* Its old ids stay with the plans that held them. **Its effort is
UNCHANGED at 9** per Rule 5.4.4 [CORE]: re-weighting a row on the way across would move a
percentage without changing any work, which that rule names as falsification of the completion
ring rather than maintenance of the plan.

**The outcome wording is unchanged.** It is carried across as it stood, not rewritten, not
softened, and not re-scoped to something easier to finish.

---

## REQUIREMENT AS STATED

The following is the project owner's own wording, carried verbatim. It is not paraphrased at
any layer of this plan, and any sub-task that conflicts with it is wrong.

> "I want to be able to hand over the operating site to anyone else who inherits that google
> email account"

> "Nothing on this site must touch deverse. Everything must be registered to the dunchitrader
> email"

---

## HOW TO READ THIS PLAN

**A row is an OUTCOME, not a task.** The test each row must pass: could the owner look at the
result and say *"yes, that is delivered"*?

- **Sub-tasks are numbered `{step}.{n}`. Numbering is append-only.**
- **Status** is one of `new`, `to-do`, `done`, `blocked`, `parked`, `descoped`, `external`.
- **Effort** is an integer 1–10, where 10 is the most work.

---

## Step 1 — The site can be inherited

| # | Status | Sub-task | Effort |
|---|---|---|---|
| 1.1 | new | Someone handed only the two account logins can rebuild the site from nothing. **The row is not "walk the runbook" but "MAKE IT WALKABLE, THEN ESTABLISH IT WORKS"**, because three defects are already measured and recorded in handover Layer 4: **step 4** tells the walker to create a GitHub repository whose name is the live site's, so GitHub refuses it and **the walk stops dead**; **steps 7 and 8** delegate to `apps-script/DEPLOY.md` and `apps-script/SHEET-FORMULAS.md`, both of which **open the LIVE spreadsheet by its hard-coded id**; and **there is no cleanup section**, so a rehearsal leaves a second spreadsheet, a second form and **a second public village directory on the internet**. Done when `docs/RESTORE-dunchi-trader.md` can be followed against a **throwaway parallel copy** without touching any live artefact, it names throwaway names for every artefact it creates, it carries a cleanup section covering the public ones, **and somebody has then walked it end to end with the two logins alone** and taken the throwaway copy down afterwards. Any step needing anything else is a defect to fix, not a footnote to add. **MOVED FROM `PLAN-DUNCHI-LAUNCH-2026-09-19` row `5.1` on 2026-09-21 under the Owner's ruling D3c-VCWL-21092026, effort unchanged at 9**, which had in turn **MOVED FROM `PLAN-DUNCHI-TRADER-V1` row `6.1`** under D10-6G7f-19092026. **It answers the Owner's own requirement *"I want to be able to hand over the operating site to anyone else who inherits that google email account"*, which is the only clause of the Requirement as stated that remains unproven.** ⚠ **The runbook was repaired on 2026-09-19 at commit `3453b78` — five faults fixed — but repairing is not walking, and this row closes on the WALK.** | 9 |

| # | Human | Machine | Outcome | Approach | State | Due | Forecast | Owner | Depends on | Pinned start | Due start | Planned end | Actual start | Forecast end |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1.1 | When Gavin hands the directory to whoever takes it on and walks away, they can run it without him. | Repair the runbook, then walk it against a throwaway copy | The inheritance requirement is proven rather than asserted | Fix the three measured defects, then verify by rebuilding | new | 2026-10-17 | 2026-10-17 | 222b34c4-7d05-48f4-9d23-cfb47e96d9de |  |  | 2026-09-21 | 2026-10-17 | 2026-09-21 | 2026-10-17 |

---

## WHO WALKS IT REMAINS OPEN

**The Owner's ruling moved the row. It did not decide who walks it**, and that question is the
one thing standing between this plan and a closed row.

**The argument that made it a question is recorded above** and is not repeated here: the Owner's
own walk is the weakest available test of a runbook written for somebody who knows nothing. When
this plan is next picked up, that is the decision to put to him — **not whether the work matters,
which he has not disputed, but who can credibly perform it.**
