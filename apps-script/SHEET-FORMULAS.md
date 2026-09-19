# Making the spreadsheet check for duplicates itself

This adds four columns to the **Form responses** tab so that, when somebody
recommends a tradesperson, the sheet tells you in plain English whether you have
seen that person before — and gives you one box to tick to decide what happens.

You only do this once. It takes about ten minutes.

Sign in as **dunchitrader@gmail.com** and open the spreadsheet:
<https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit>

---

## ⚠️ FIRST — check your sheet matches this layout

**Do not skip this.** These formulas work by column letter, so if your form asks
its questions in a different order, every formula will read the wrong box and
fill the sheet with nonsense. That has already happened once on this project:
an earlier version of this document was written against a guessed layout and was
wrong in four places.

Go to the **Form responses** tab and read **row 1**, left to right. It should say:

| Column | The question in row 1 |
|---|---|
| **A** | Timestamp |
| **B** | Email Address |
| **C** | What Trade are you recommending? |
| **D** | What is their First name? |
| **E** | What is their Last name? |
| **F** | What is their telephone number? |
| **G** | What is their Business called? (Optional) |
| **H** | Please give a short amount of text to describe your experience… |
| **I** | Finally please give your name… |

**Column J should be empty.** That is where the new columns start.

**If your sheet matches, carry on to step 1.**

**If it does not match**, stop. Do not edit the formulas to fit unless you are
confident — it is easy to get one letter wrong and not notice for weeks. Note
which letter each question actually sits under and ask for the formulas to be
rewritten for your layout. The three things that matter most are **which column
holds the telephone number**, **which holds the last name**, and **which holds
the experience text** — those are the three the formulas read.

A common reason for a mismatch: adding, removing or reordering a question on the
form changes the columns here. **If you ever change the form, re-read row 1
before trusting these columns again.**

---

## What the new columns are

The four new columns go in **J, K, L and M**, immediately to the right of your
answers.

| Column | Name | What it is for |
|---|---|---|
| J | `phone_key` | The phone number with spaces, brackets and `+44` taken out, so two ways of writing the same number match |
| K | `name_key` | The name squashed to plain lower-case letters, so capitals, spaces and punctuation do not matter |
| L | `verdict` | **The one you actually read.** Plain English: is this person new or not? |
| M | `action` | A dropdown: what you have decided to do |

J and K are working columns. Once it all works you can hide them — right-click
the column letter and choose **Hide column**.

---

## Step 1 — Put the headings in

Click cell **J1** and paste this one line. It fills J1 to M1:

```
phone_key	name_key	verdict	action
```

---

## Step 2 — Two helper columns on the Published tab

The verdict compares the form's phone number and name against the people already
on the site, so the **Published** tab needs the same two keys. This keeps your
Published tab readable for humans — the phone stays written as `07825 736940` —
while giving the formula something tidy to compare against.

Go to the **Published** tab. Your columns there are `id`, `first_name`,
`last_name`, `business`, `phone`, `trade`, `extra_trade`, `status` in **A** to
**H**, so **I** and **J** are free.

Click cell **I1** and paste this one line:

```
pub_phone_key	pub_name_key
```

Click cell **I2** and paste this:

```
=ARRAYFORMULA(IF($E$2:$E="","",IF(LEFT(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),4)="0044","0"&MID(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),5,50),IF(LEFT(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),2)="44","0"&MID(REGEXREPLACE(TO_TEXT($E$2:$E),"\D",""),3,50),REGEXREPLACE(TO_TEXT($E$2:$E),"\D","")))))
```

Click cell **J2** and paste this:

```
=ARRAYFORMULA(IF(($B$2:$B="")*($C$2:$C="") ,"",LOWER(REGEXREPLACE(TO_TEXT($B$2:$B)&TO_TEXT($C$2:$C),"[^A-Za-z0-9]",""))))
```

Hide columns I and J afterwards if you like.

> **These two extra columns are safe and cannot break the website.** The site
> reads the Published tab by column *name*, not by position, and only looks at
> the eight names it knows. Anything else on that tab is ignored completely.

---

## ⚠️ BEFORE YOU EDIT ANY FORMULA ON THIS PAGE — which functions work per row

**This project has shipped the same class of bug twice in one day. Both times a
formula looked right, produced plausible answers, and was wrong.** Read this
before changing anything below.

Inside `ARRAYFORMULA`, some functions are run **once for every row** and some
are run **once for the whole column**, with that single answer copied down. The
second kind produces a column of identical values that looks like data.

| Works PER ROW inside `ARRAYFORMULA` | Runs ONCE and copies the answer down |
|---|---|
| `COUNTIF` | **`INDEX`** ← caused the 2026-09-19 bug |
| `MATCH` (returns the right position per row) | |
| `VLOOKUP` (accepts an array of search keys) | |
| `IF`, `IFERROR`, `LEN`, `TRIM`, `LOWER` | |
| `REGEXMATCH`, `REGEXREPLACE`, `LEFT`, `MID`, `TO_TEXT` | |

**`INDEX` is the one that bites.** It is not array-aware over its *position*
argument: hand it a list of positions and it reads only the **first** and
ignores the rest. `ARRAYFORMULA` cannot fix that — the limitation is inside
`INDEX` itself.

**That is exactly what went wrong.** `MATCH` did its job and found the right
row for every response. `INDEX` then threw all but the first away, so one ID
was stamped on every row.

**Do not use `INDEX` in any formula on this page.** To fetch a value from
another column, use `VLOOKUP`. Where the value you want sits to the **left** of
the column you are searching — as the ID in Published column `A` sits left of
the phone key in column `I` — build a virtual range with curly braces, putting
the search column first:

```
VLOOKUP(pk,{Published!$I$2:$I$500,Published!$A$2:$A$500},2,FALSE)
```

**How to spot this bug if it ever comes back:** look down the verdict column.
**If many rows show the same ID, it is broken** — different people cannot all
be the same person. One ID repeated is the signature.

---

## Step 3 — The three formulas on the Form responses tab

Go back to the **Form responses** tab. Paste these one at a time, into the exact
cell named above each one. Each fills its whole column downwards on its own —
you do not copy them down, and you do not touch them again when a new answer
arrives.

**Click cell `J2` and paste this:**

```
=ARRAYFORMULA(IF($F$2:$F="","",IF(LEFT(REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),4)="0044","0"&MID(REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),5,50),IF(LEFT(REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),2)="44","0"&MID(REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),3,50),REGEXREPLACE(TO_TEXT($F$2:$F),"\D","")))))
```

**Click cell `K2` and paste this:**

```
=ARRAYFORMULA(IF(($D$2:$D="")*($E$2:$E="") ,"",LOWER(REGEXREPLACE(TO_TEXT($D$2:$D)&TO_TEXT($E$2:$E),"[^A-Za-z0-9]",""))))
```

**Click cell `L2` and paste this:**

```
=ARRAYFORMULA(LET(digits, REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),pk, IF(digits="","",IF(LEFT(digits,4)="0044","0"&MID(digits,5,50),IF(LEFT(digits,2)="44","0"&MID(digits,3,50),digits))),nk, LOWER(REGEXREPLACE(TO_TEXT($D$2:$D)&TO_TEXT($E$2:$E),"[^A-Za-z0-9]","")),flag, (REGEXMATCH(LOWER(TRIM(TO_TEXT($E$2:$E))),"^not ?known$"))+(REGEXMATCH(LOWER(TRIM(TO_TEXT($G$2:$G))),"^not ?known$"))+(LEN(TRIM(TO_TEXT($H$2:$H)))<7),hitP, IF(pk="",0,COUNTIF(Published!$I$2:$I$500,pk)),hitN, IF(nk="",0,COUNTIF(Published!$J$2:$J$500,nk)),IF($F$2:$F="","",IF(flag,"CHECK THIS",IF(pk="","CHECK THIS",IF(hitP>0,IF(IFERROR(VLOOKUP(pk,{Published!$I$2:$I$500,Published!$H$2:$H$500},2,FALSE),"")="active","ALREADY ON SITE — ","ON THE LIST BUT HIDDEN — ")&IFERROR(VLOOKUP(pk,{Published!$I$2:$I$500,Published!$A$2:$A$500},2,FALSE),"?"),IF(hitN>0,"SAME NAME, DIFFERENT NUMBER","NEW")))))))
```

> **This formula was REPLACED THREE TIMES on 2026-09-19. Use only the version above.**
>
> **Third replacement, 2026-09-19 (evening).** It said `ALREADY ON SITE` for
> people who are **hidden** — and a hidden person is, by definition, not on the
> site. With most of the list hidden that reading was actively misleading. It
> now distinguishes the two:
>
> | What you see | What it means |
> |---|---|
> | `ALREADY ON SITE — T016` | On the list **and visible** to villagers |
> | `ON THE LIST BUT HIDDEN — T003` | On the list, **not visible** — needs your attention |
>
> It reads the `status` column the same way it reads the id, with a second
> `VLOOKUP` over a virtual `{key, status}` range. Nothing else changed.
>
> ~~`...IF(hitP>0,"ALREADY ON SITE — "&IFERROR(VLOOKUP(pk,{Published!$I$2:$I$500,Published!$A$2:$A$500},2,FALSE),"?")...`~~ — the version that could not tell the difference.
>
> **Second replacement, 2026-09-19 (afternoon).** The morning's version got the
> *branch* right on every row but printed **the same ID on all of them** — Gavin's
> screenshot showed about twelve consecutive rows all reading
> `ALREADY ON SITE — T005`. Cause: it used `INDEX(...,MATCH(...))`, and
> **`INDEX` does not work row-by-row inside `ARRAYFORMULA`** (see the warning
> box above). The lookup is now `VLOOKUP` over a `{...}` virtual range, which
> does. Nothing else about the formula changed — the branch logic, the
> precedence and every `CHECK THIS` case were confirmed correct by that same
> screenshot and were deliberately left alone.
>
> ~~`...IFERROR(INDEX(Published!$A$2:$A$500,MATCH(pk,Published!$I$2:$I$500,0)),"?")`~~ — the broken id lookup, kept so it is recognisable.
>
> **First replacement, 2026-09-19 (morning).** The version before that matched every row against **itself**.
> The previous version matched every row against **itself**, so a person nobody
> had ever heard of read `ALREADY ON SITE — row 15` on row 15 and
> `ALREADY ON SITE — row 16` on row 16 — each naming its own row number. Gavin
> measured exactly that on his phone. Nothing errored; the answers merely looked
> plausible, which is why it survived. See the handover Layer 3.
>
> **The superseded formula, kept so nobody reinstates it by accident:**
>
> ~~`=ARRAYFORMULA(IF($F$2:$F="","",IF((REGEXMATCH(LOWER(TRIM(TO_TEXT($E$2:$E))),"^not ?known$"))+(REGEXMATCH(LOWER(TRIM(TO_TEXT($G$2:$G))),"^not ?known$"))+(LEN(TRIM(TO_TEXT($H$2:$H)))<7),"CHECK THIS",IF(COUNTIF(Published!$I$2:$I,$J$2:$J)>0,"ALREADY ON SITE — row "&IFERROR(MATCH($J$2:$J,Published!$I$2:$I,0)+1,""),IF(COUNTIF(Published!$J$2:$J,$K$2:$K)>0,"SAME NAME, DIFFERENT NUMBER","NEW")))))`~~
>
> **What changed, and why each change matters:**
>
> 1. **The keys are worked out inside the formula, from the row's own boxes.**
>    The old one read them back out of columns `J` and `K` of this same tab —
>    so the formula contained live ranges pointing at its own tab, and a lookup
>    that should have searched **Published** could search those instead. It did.
>    Now there is no same-tab range for it to fall onto, so a row matching
>    itself is not something this formula can express.
> 2. **It says WHO, not WHERE.** `ALREADY ON SITE — T014` names the person, and
>    you can check it against the site in one glance. `— row 15` was a number
>    that looked right whether it was right or not, which is precisely how the
>    fault hid.
> 3. **The lookup stops at row 500 instead of running to the bottom.** Your two
>    helper columns on Published are array formulas covering the whole column,
>    so they quietly put an empty value in several hundred rows below your
>    people. An open-ended lookup counts those, and a row with an unreadable
>    telephone number would match one of them and read `ALREADY ON SITE`
>    against a blank. 500 is far above any village list this will ever hold.
> 4. **An unreadable telephone number now says `CHECK THIS`** rather than
>    falling through to `NEW`. The publisher hides such a row, so telling you it
>    is a clean new person would be untrue.

> **Columns `J` and `K` are still filled in and are still worth having** — they
> are what you look at when a verdict surprises you, and step 2's Published
> helpers are still required, because the lookup compares against them. The
> verdict simply no longer *reads* `J` and `K`; it works its own keys out.

---

## Step 4 — Add the dropdown

1. Click the letter **M** at the top of column M to select the whole column.
2. Menu: **Data → Data validation → Add rule**.
3. Under **Criteria** choose **Dropdown**.
4. Type these three options, clicking **Add another item** between each:
   - `Publish`
   - `Add to T0xx`
   - `Reject`
5. Click **Done**.

---

## What the verdicts mean

| What column L says | What it means | What to do |
|---|---|---|
| **NEW** | That phone number has never been on the list | Nothing to do — it has published itself. Glance at it during your sweep. |
| **ALREADY ON SITE — T012** | Same number, so the same person, **and they are visible on the site.** | Nothing to do — the publisher has already added their words to that person's row as a second recommendation. |
| **ON THE LIST BUT HIDDEN — T003** | Same person, but their row is `hidden`, so **no villager can see them.** | Look at that row. Usually the telephone number needs fixing; then set `status` to `active`. |
| **SAME NAME, DIFFERENT NUMBER** | Same name, new number — probably they changed mobile | Have a look. Usually you update the number on the existing row. |
| **CHECK THIS** | The last name or the business says "Not Known", the experience text is **under seven characters or empty**, or the telephone number has no digits in it at all | Have a look. You may need to ask on the village chat who it is. A row with an unusable number is `hidden` on the site until you retype it. |

> **Why seven and not more.** Seven is deliberately low. *"Fixed gate"* is a perfectly good
> answer for a small job, and a longer minimum would flag honest short replies as suspect and
> bury the rows that genuinely need your attention. Seven catches the accidental `ok`, `yes`
> or a stray keypress, and lets a real short answer through.

**CHECK THIS beats everything else.** If a row would be both `CHECK THIS` and
`ALREADY ON SITE`, it says `CHECK THIS`, because a row you need to look at
matters more than a row you can file automatically.

~~Nothing at all reaches the website until you pick something in column M and copy
the row across to the **Published** tab yourself.~~ **SUPERSEDED 2026-09-18 —
publishing is automatic.** A script adds each new response to the Published tab
by itself, and three kinds arrive there `hidden` rather than `active`: a
telephone number that is not eleven digits, an email address or web link in any
box, or a number already on the list. See `apps-script/DEPLOY.md` Part 2.

**So this tab is now a VIEW, not a gate.** Nothing waits for you here. The
`verdict` column is what you scan when you sweep the Published tab, and the
dropdown in column M is a note to yourself about what you decided. The website
only ever reads the Published tab.

---

## When a verdict is `CHECK THIS` because the experience box is empty

**This is a deliberate rule, not an accident, and it is written down here
because it caused a false alarm on 2026-09-19.** A blank experience box is zero
characters, which is fewer than seven, so the row reads `CHECK THIS`.

That is the right answer. An empty box means the villager told you nothing about
what the person did, and the whole point of the site is that it carries a
neighbour's words. `CHECK THIS` says *"look at this one"*, which is exactly
right for a row with no words in it.

**But it does mean a test row with the experience box left blank tells you
nothing about the other three verdicts**, because `CHECK THIS` wins before any
comparison against the list happens. If you are testing, always put a real
sentence in the experience box. On 2026-09-19 Gavin was told to leave it blank,
both test rows read `CHECK THIS`, and that looked like a fault when it was the
rule working correctly.

---

## Three things these formulas cannot do

Worth knowing so you are not surprised, rather than faults to fix:

**A name typed back to front will not match.** If the form says *Samwell* then
*Bob* while the site holds *Bob* / *Samwell*, the sheet sees two different
people and says `NEW`. Everything else about a name is handled — capitals,
extra spaces, apostrophes, hyphens, and a full name typed into the first-name
box with the last-name box left empty all match correctly.

**It compares against the site, not against other form answers.** If the same
person is recommended twice within an hour and is not on the site yet, both rows
say `NEW`. That is correct — neither of them is on the list — but you will spot
the pair by eye when you come to publish.

**Where two people share a telephone number, it names the first one.** You have
exactly that — Ben Franks (`T006`) and John Pilkington (`T011`) on
`07887800192` — so a new recommendation for either reads `ALREADY ON SITE —
T006`. The number genuinely is on the site, which is what the verdict says; it
simply cannot tell you which of the two the villager meant. Read the name in
column D and E of the response.

---

## The one rule that must never be broken

When you add somebody to the **Published** tab, give them the next ID in the
list — `T001`, `T002`, `T003` and so on.

**Never change an ID once it has been given out**, and never reuse one. The
recommendations villagers add from the website are filed against the ID, so
changing it quietly detaches every recommendation that person has.

---

## If something looks wrong

| What you see | What it usually means |
|---|---|
| Every verdict says `CHECK THIS` | The formula is reading the wrong column for the experience text. Re-read row 1 against the table at the top. |
| Every verdict says `NEW`, even for people already on the site | The Published helper columns in step 2 are missing, or the phone numbers on Published are in a column other than E. |
| A verdict says `ALREADY ON SITE — row 15` with a **row number** instead of an ID | You have the oldest formula. Re-paste the `L2` formula above — this is the first 2026-09-19 defect, where every row matched itself. |
| **Many rows all show the SAME ID** — a column of `ALREADY ON SITE — T005` | You have the morning's formula, which used `INDEX`. Re-paste the `L2` formula above. Different people cannot all be the same person, so one ID repeated down the column always means this. See the warning box before step 3. |
| `ALREADY ON SITE — ?` with a question mark | The number was found on Published but the ID could not be read from column A. Check that person's row has an ID. |
| Somebody near the very bottom of a long Published tab is not being found | The lookup stops at row 500. If the village list ever passes 500 people, ask for the three `$500` in the `L2` formula to be raised. |
| A `#REF!` or `#N/A` error | Usually a tab name typed differently. The formulas expect the tab to be called exactly `Published`. |
| The column does not fill downwards | The formula was pasted into the wrong cell. Each one must go in row **2** of its column, not row 1. |
| Verdicts stop partway down the sheet | Something has been typed into a cell in that column further down, blocking the array. Clear anything below the formula cell. |
