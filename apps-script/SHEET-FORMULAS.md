# Making the spreadsheet check for duplicates itself

This adds four columns to the **Form responses** tab so that, when somebody
recommends a tradesperson, the sheet tells you in plain English whether you
have seen that person before — and gives you one box to tick to decide what
happens.

You only do this once. It takes about five minutes.

Sign in as **dunchitrader@gmail.com** and open the spreadsheet:
<https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit>

Go to the **Form responses** tab (the messy one that fills up by itself).

---

## What the columns are

Your form answers currently run from column **A** to column **J**. The four new
columns go in **K, L, M and N**, just to the right of them.

| Column | Name | What it is for |
|---|---|---|
| K | `phone_key` | The phone number with all the spaces and brackets taken out, so two ways of writing the same number match |
| L | `name_key` | The name squashed to plain letters, so capitals and spaces do not matter |
| M | `verdict` | **The one you actually read.** Plain English: is this person new or not? |
| N | `action` | A dropdown: what you have decided to do |

K and L are working columns. You can hide them once it all works — right-click
the column letter and choose **Hide column**.

---

## Step 1 — Put the headings in

Click cell **K1** and paste this one line. It fills K1 to N1:

```
phone_key	name_key	verdict	action
```

---

## Step 2 — Paste the three formulas

Click cell **K2** and paste this:

```
=ARRAYFORMULA(IF(E2:E="","",IF(LEFT(REGEXREPLACE(TO_TEXT(E2:E),"\D",""),2)="44","0"&MID(REGEXREPLACE(TO_TEXT(E2:E),"\D",""),3,50),REGEXREPLACE(TO_TEXT(E2:E),"\D",""))))
```

Click cell **L2** and paste this:

```
=ARRAYFORMULA(IF(D2:D="","",LOWER(REGEXREPLACE(TO_TEXT(D2:D)&TO_TEXT(J2:J),"[^A-Za-z0-9]",""))))
```

Click cell **M2** and paste this:

```
=ARRAYFORMULA(IF(E2:E="","",IF((REGEXMATCH(LOWER(TRIM(TO_TEXT(J2:J))),"^not ?known$"))+(LEN(TRIM(TO_TEXT(G2:G)))<15),"CHECK THIS",IF(COUNTIF(Published!$E$2:$E,K2:K)>0,"ALREADY ON SITE — row "&MATCH(K2:K,Published!$E$2:$E,0)+1,IF(COUNTIF(ArrayFormula(LOWER(REGEXREPLACE(Published!$B$2:$B&Published!$C$2:$C,"[^A-Za-z0-9]",""))),L2:L)>0,"SAME NAME, DIFFERENT NUMBER","NEW")))))
```

Each one fills its whole column downwards on its own. You do not copy them
down, and you do not touch them again when a new answer arrives.

**If M shows an error** it is almost always because the Published tab's phone
numbers are written with spaces. Fix that by making Published column E hold the
number exactly as it should appear, then see the note at the bottom.

---

## Step 3 — Add the dropdown

1. Click the letter **N** at the top of column N to select the whole column.
2. Menu: **Data → Data validation → Add rule**.
3. Under **Criteria** choose **Dropdown**.
4. Type these three options, clicking **Add another item** between each:
   - `Publish`
   - `Add to T0xx`
   - `Reject`
5. Click **Done**.

---

## What the verdicts mean

| What column M says | What it means | What to do |
|---|---|---|
| **NEW** | That phone number has never been on the list | Choose **Publish**. Add them to the Published tab with the next free ID. |
| **ALREADY ON SITE — row 12** | Same number, so the same person | Choose **Add to T0xx**. Their words become a second recommendation for somebody already listed. |
| **SAME NAME, DIFFERENT NUMBER** | Same name, new number — probably they changed mobile | Have a look. Usually you update the number on the existing row. |
| **CHECK THIS** | Either the surname says "Not Known", or they wrote barely anything | Have a look. You may need to ask on the village chat who it is. |

Nothing at all reaches the website until you pick something in column N and
copy the row across to the **Published** tab yourself. The website only ever
reads the Published tab.

---

## The one rule that must never be broken

When you add somebody to the **Published** tab, give them the next ID in the
list — `T001`, `T002`, `T003` and so on.

**Never change an ID once it has been given out**, and never reuse one. The
recommendations villagers add from the website are filed against the ID, so
changing it quietly detaches every recommendation that person has.

---

## A note on the Published phone numbers

The verdict formula compares the tidied-up number from the form against
**column E of the Published tab**. For that comparison to work, the Published
numbers need tidying the same way.

The simplest approach: keep Published column E readable for villagers
(`07825 736940`), and add one hidden working column on Published — say column
**J** — with this in **J2**:

```
=ARRAYFORMULA(IF(E2:E="","",IF(LEFT(REGEXREPLACE(TO_TEXT(E2:E),"\D",""),2)="44","0"&MID(REGEXREPLACE(TO_TEXT(E2:E),"\D",""),3,50),REGEXREPLACE(TO_TEXT(E2:E),"\D",""))))
```

Then in the verdict formula above, change both `Published!$E$2:$E` to
`Published!$J$2:$J`. Hide column J afterwards.

This does not affect the website at all — it reads Published by column *name*,
so an extra column is safe, and the site ignores anything it does not recognise.
