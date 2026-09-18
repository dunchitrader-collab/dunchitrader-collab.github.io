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
=ARRAYFORMULA(IF($F$2:$F="","",IF((REGEXMATCH(LOWER(TRIM(TO_TEXT($E$2:$E))),"^not ?known$"))+(REGEXMATCH(LOWER(TRIM(TO_TEXT($G$2:$G))),"^not ?known$"))+(LEN(TRIM(TO_TEXT($H$2:$H)))<15),"CHECK THIS",IF(COUNTIF(Published!$I$2:$I,$J$2:$J)>0,"ALREADY ON SITE — row "&IFERROR(MATCH($J$2:$J,Published!$I$2:$I,0)+1,""),IF(COUNTIF(Published!$J$2:$J,$K$2:$K)>0,"SAME NAME, DIFFERENT NUMBER","NEW")))))
```

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
| **NEW** | That phone number has never been on the list | Choose **Publish**. Add them to the Published tab with the next free ID. |
| **ALREADY ON SITE — row 12** | Same number, so the same person | Choose **Add to T0xx**. Their words become a second recommendation for somebody already listed. |
| **SAME NAME, DIFFERENT NUMBER** | Same name, new number — probably they changed mobile | Have a look. Usually you update the number on the existing row. |
| **CHECK THIS** | The last name or the business says "Not Known", or they wrote barely anything | Have a look. You may need to ask on the village chat who it is. |

**CHECK THIS beats everything else.** If a row would be both `CHECK THIS` and
`ALREADY ON SITE`, it says `CHECK THIS`, because a row you need to look at
matters more than a row you can file automatically.

Nothing at all reaches the website until you pick something in column M and copy
the row across to the **Published** tab yourself. The website only ever reads
the Published tab.

---

## Two things these formulas cannot do

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
| A `#REF!` or `#N/A` error | Usually a tab name typed differently. The formulas expect the tab to be called exactly `Published`. |
| The column does not fill downwards | The formula was pasted into the wrong cell. Each one must go in row **2** of its column, not row 1. |
| Verdicts stop partway down the sheet | Something has been typed into a cell in that column further down, blocking the array. Clear anything below the formula cell. |
