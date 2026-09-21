# Filling the list, and launching it

This is for Gavin. It is the last thing between a working website and a website
worth opening.

Everything here happens inside your Google spreadsheet. Nothing here needs code,
and nothing here can break the website — the site can only *read* the Published
tab, so the worst that a mistake can do is show the wrong person until you fix
the row.

**You need to be signed in as `dunchitrader@gmail.com`.**

There are four parts:

1. Filling the list with real tradespeople
2. The trades to cover
3. Two warnings about publishing, and the five-minute wait
4. The message to post in the village group — **a draft, not yet approved**

---

## 1. Filling the list

### Where it goes

Everything the village sees lives on **one tab: `Published`**. That tab is the
whole website. If somebody is not on it, they are not on the site.

The other tab, `Form responses`, is where villagers' suggestions land. **Nobody
ever sees that tab**, and you no longer copy anything out of it by hand.

**Submissions publish themselves.** ~~You read it, decide, and copy the good ones
across to `Published` yourself.~~ SUPERSEDED 2026-09-18 — a script adds each new
response to `Published` automatically. Two kinds arrive with `status` set to
`hidden` instead of `active`, so they are on the tab but off the website until
you look: a telephone number that is not eleven digits, or an email address or
web link in any box.

**A number already on the list is not one of them.** Somebody recommending a
tradesperson you already have is a *second recommendation*, not a duplicate — so
their words and name are added to that person's existing row, and no second row
appears.

**So the thing that keeps the site tidy is your sweep, not a gate.** Nothing
waits for your approval any more. Open `Published` when it suits you, read down
it, and overwrite anything that looks wrong — that is the whole job, and it is
quicker in batch than one row at a time. The `verdict` column on the
`Form responses` tab is the view to scan while you do it.

**Stated plainly, because it is the consequence:** the form is open to anyone
with the link, and what it collects now reaches the live site without a person
in between. The two checks above and your sweep are what stand in the way of
something wrong being visible for a while.

**Seeding the list is still a hand job**, and the rest of this section is about
that: the automatic publisher handles what villagers send in from now on, but it
cannot invent the twelve to fifteen people you need before launch.

### The eight columns, in this order

The `Published` tab must have exactly these eight headings in row 1, in exactly
this order and spelling:

```
id    first_name    last_name    business    phone    trade    extra_trade    status
```

Plus, further right: **I** and **J** hold the duplicate checker's working
columns, and **K** `recommendations` and **L** `recommended_by` hold the
villagers' own words and their names. You do not type in K and L — the script
fills them in, and adds each new recommendation underneath the last.

Here is what goes in each one.

| Column | What to put | Example |
|---|---|---|
| `id` | A code you give each person. See below. | `T005` |
| `first_name` | Their first name. | `Sarah` |
| `last_name` | Their surname. | `Endacott` |
| `business` | Their business name. **Leave it empty if they do not trade under one.** | `Endacott Gardening` |
| `phone` | The number to ring. Spaces are fine and help readability. | `07825 736940` |
| `trade` | What they do. One trade only. | `Gardener` |
| `extra_trade` | A second trade, if they do two. Otherwise leave empty. | `Tree Surgeon` |
| `status` | `active` to show them. See below. | `active` |
| `recommendations` (K) | The villagers' own words. **Leave it empty** — filled in automatically. Several are separated by a blank line. | `Fixed the gate, no fuss` |
| `recommended_by` (L) | Who said it, in the same order. An empty name shows as "a villager". | `Mary` |

A few things that matter more than they look:

- **`business` can be empty** and the card still works — it simply shows the
  person's name and their trade. Two of the current test rows are like that.
- **`phone` is what the big green Call button dials.** Get it wrong and a
  villager rings a stranger. Check every single one.
- **Spaces in the phone number are good.** The site is careful never to split a
  number across a line mid-digit, and the spaces help it break in sensible
  places for someone reading at the largest text size.

### The `id`, and why it must never change

Give each person a code: `T005`, `T006`, `T007`, and so on, going up by one.

**Start at `T005`.** `T001` to `T004` are already used by the four test people
currently on the list — you will be removing those, but their numbers stay used.

**Once you give somebody an id, never change it and never reuse it.** When a
villager taps "I recommend them too", their recommendation is filed against the
id, not the name. Change the id and you silently move every recommendation that
person has earned onto somebody else, or onto nobody. Nothing will look broken.
That is what makes it worth being careful about.

Safe to change at any time: name, business, phone, trade, status. Never the id.

### `status` — how to hide somebody without deleting them

The site shows a person **only** when `status` is exactly `active`.

Anything else in that box hides them: `hidden`, `paused`, `left`, or even
leaving it empty. They stay in your spreadsheet with all their details and their
id intact; they just stop appearing on the website within about five minutes.

This is how you handle a tradesperson who retires, moves away, gets too busy, or
asks to come off the list. **Set `status` to `hidden` rather than deleting the
row.** If they come back, set it to `active` again and their recommendations are
still attached, because the id never moved.

### Somebody who does two trades

Put the first in `trade` and the second in `extra_trade`. **One row, not two.**

They will then appear under *both* headings on the website — but they are still
one person, counted once, with one set of recommendations. If you gave them two
rows instead they would become two separate people who each have to be
recommended separately, which is not what you want.

If someone genuinely does three or more, pick the two they are most likely to be
called for.

### Starting the list completely clean — the full reset

> **Added 2026-09-21. Replaces the first version of this section written earlier
> the same day, which told you to delete rows and *then* check whether your
> formulas survived — by which time they would already be gone.** The order
> below is deliberate and it protects them.
>
> **Owner's ruling D7a-VCWL-21092026**, his words: ***"I am going to do D7a. It
> feels cleaner"***. Both tabs are cleared, so they agree with each other and
> ids restart at `T001`.
>
> ⚠ **This overturns the earlier rule "hide, never delete" — but only for a
> COMPLETE clear.** If you ever want to take just a few people off the list,
> go back to hiding them. See "Why this is safe" at the end.

**Before you start.** About fifteen minutes, on a computer — not a phone.
Nothing is urgent. If you stop half way the site simply shows an empty list.

---

#### ⚠ THE ONE THING TO UNDERSTAND FIRST — row 2 holds your formulas

Your formulas do not sit in a column. **Each one sits in a single cell in row 2
and fills its own column downwards by itself.**

| Tab | Cells holding formulas |
|---|---|
| **Published** | `I2` and `J2` |
| **Form responses** | `J2`, `K2` and `L2` |

**So if you delete row 2, you delete the formulas.** That is why every delete
below starts at **row 3**, and row 2 is cleared by hand afterwards — a different
action that leaves the formula cells alone.

**One more thing, and it is the opposite trap:** when you clear row 2 by hand,
select **only the columns that hold data** and never the formula cells. On
Published that is **A2 to H2** and then **K2 to L2**. On Form responses it is
**A2 to I2** and then **M2**.

---

#### Step 1 — Published: find your last row

Open the spreadsheet and click the **Published** tab.

Scroll down and find the **last row that has an id in column A** (`T001`,
`T014`, and so on). **Write that number down.** Say it is row 30.

---

#### Step 2 — Published: delete rows 3 to the last one

Click row number **3** in the grey margin. Scroll down, hold **Shift**, click
the last row number (30). Right-click in the blue and choose
**Delete rows 3 - 30**.

**Row 2 is still there, still full of data.** That is correct — leave it.

---

#### Step 3 — Published: clear row 2 by hand, in two pieces

**First piece.** Click cell **`A2`**, hold **Shift**, click cell **`H2`**.
Eight cells are selected. Press **Delete**.

**Second piece.** Click cell **`K2`**, hold **Shift**, click cell **`L2`**.
Press **Delete**.

⚠ **Do not touch `I2` or `J2`.** Skipping straight from H to K is the whole
point of doing it in two pieces.

---

#### Step 4 — Published: confirm the formulas are alive

Click **`I2`** and look at the formula bar at the top. **You should see a long
formula beginning `=ARRAYFORMULA(`.** Click **`J2`** and check the same.

- **Both show a formula** — good, carry on.
- **Either is empty** — you caught it. Open `apps-script/SHEET-FORMULAS.md`,
  find the Published helper columns, and paste `I2` then `J2` back.

---

#### Step 5 — Form responses: the same three moves

Click the **Form responses 1** tab.

1. Find the **last row with anything in it** and write the number down.
2. Click row **3**, Shift-click the last row, right-click, **Delete rows**.
3. Clear row 2 in two pieces: **`A2` to `I2`**, press Delete; then **`M2`**
   on its own, press Delete.
4. Check **`J2`**, **`K2`** and **`L2`** each still show `=ARRAYFORMULA(` in
   the formula bar.

⚠ **`M2` is the `action` column and it must be emptied along with the rest.**
That is safe here *because the data rows are going too* — with no responses left
there is nothing for the system to re-publish.

---

#### Step 6 — While you are in row 2, fix the verdict formula

**Do this now, because you are already in the right place and it is one paste.**

Click **`L2`** on Form responses and compare what the formula bar shows against
the `L2` formula in `apps-script/SHEET-FORMULAS.md`.

- **If it matches** — nothing to do.
- **If it differs, paste the one from that file over it.** An older version had
  a fault that made it report somebody was already on the site when they were
  not.

**Why now and not later:** nothing reads this column except you, so it cannot
break the list either way — but a wrong verdict on the first real submission is
exactly the moment it would mislead you most.

---

#### Step 7 — Check the data validation on column M is gone

Still on Form responses, click the **`M`** column heading, then
**Data → Data validation**. **If a rule is listed, remove it.**

That rule only allowed the words `Publish`, `Add to T0xx` and `Reject`, and the
system writes plain sentences there. While it is in place the `action` column
stays blank and you lose the record of what happened to each submission.

---

#### Step 8 — ⚠ THE MENU ITEM YOU MUST NEVER TOUCH

In the **Village list** menu, the first item reads
**"Publish any responses not yet on the list"**.

**Never click it.** After a reset the list *is* empty, so its wording sounds
exactly like what you want — and it would put every old response back and then
tell you it had "Added 29 new people to the list."

**You will not need it again.** New submissions publish themselves, and the
automatic five-minute check catches anything missed.

---

#### Step 9 — Wait five minutes, then look at the site

Publishing to the website takes about five minutes.

Open **`https://dunchitrader-collab.github.io/?x=1`** — the `?x=1` makes sure
you are not seeing a saved copy.

**What you should see:**

> **Nobody on the list just yet**
> The list is being put together. Please look again in a day or two.
> If you know a good tradesperson, you can add them using the button at the
> bottom of this page.

**That is correct.** A calm message, with the "add someone" button still
working underneath.

**If you see "The list is being updated" instead**, row 1 was deleted. Put the
eight column names back in row 1 — they are listed in section 1 of this
document, in order, starting at `A1`.

---

#### Step 10 — Ten minutes later, check nothing came back

Look at **Published** again. **It should still be empty below the header.**

If rows have appeared, the backfill menu item was clicked. Nothing is lost —
set those rows' `status` to `hidden` and they will drop off the site.

---

#### Step 11 — Seed the real people through the form

**Ask your testers to submit the real tradespeople through the form**, not by
typing into the spreadsheet. Each one then travels the same route a villager
would, which proves the route as well as filling the list.

**The first real person will be `T001`**, and numbering runs on from there.

---

#### Why this is safe, and when it would not be

Ids are handed out by taking the highest one already on the list and adding one.
**Delete the highest id and the next submission takes that number back**,
inheriting any recommendation still filed against the old holder. That is why
the standing rule is "hide, never delete".

**A full clear escapes that, and this is the whole argument: if nothing
survives, there is nothing left to inherit a reused id.**

| What you do | Safe? | Why |
|---|---|---|
| Clear **every** data row on **both** tabs | **Yes** | Nothing survives; ids restart at `T001` |
| Delete **some** rows, including the highest id | **NO** | The next submission reuses that id |
| Set rows to `hidden` | **Yes, always** | Nothing is removed, so no id is freed |

**So: all of it, or none of it.** To take a few people off later, hide them.

**Clearing the Form responses rows as well is what makes this safer than
clearing Published alone.** With the responses gone there is nothing for that
first menu item to put back, so the trap in step 8 cannot fire at all.


### Removing the four test people before launch

`T001` to `T004` are test rows — "Duckers Plumber", "Test Sparky", "Another
Roofer" and a hidden "Hidden Person". **They must be gone from the site before
you post the link.** A villager who rings `01392 123456` and gets nobody will not
come back.

You have two safe ways to do it. Both are fine:

**Either — set them to `hidden`.** Change `status` on all four rows from
`active` to `hidden`. They vanish from the site in about five minutes and stay in
your spreadsheet as a record. This is the gentler option and the one to use if
you are unsure.

**Or — delete the four rows outright.** Select rows and delete them in the normal
spreadsheet way. This is also safe, with one rule: **do not renumber anybody
after deleting.** Leave the gap. Your first real person is `T005` whether or not
`T001` to `T004` still exist. Ids are allowed to have gaps; what they must never
have is reuse.

> ⚠ **CORRECTION, 2026-09-21 — the "or delete them" option above is only safe
> while the deleted rows are NOT the highest ids on the list.** `T001`–`T004`
> were the lowest four when this was written, which is why it held. **Deleting
> the HIGHEST id frees that number for reuse**, and the next submission would
> inherit any recommendation filed against the old holder. If in doubt, **hide
> instead of deleting** — that is always safe. To clear the list completely,
> use the full-clear procedure above, which is safe for the opposite reason:
> nothing survives to inherit anything.

Do **not** overwrite a test row by typing a real person's details on top of it.
That keeps the old id on a new person, and that id has test recommendations
attached to it.

### How many people, and why

Aim for **12 to 15 people across at least 6 different trades** before you post
the link.

That is not an arbitrary number. A list with four names on it gets opened once,
looks empty, and never gets opened again — and you only get one chance at a first
impression with this audience. Twelve across six trades is enough that most
people who look will find something useful on their first visit.

The website is checked against this before launch: build plan row 7.2 does not
pass until the live list genuinely carries at least 12 tradespeople across at
least 6 trades.

Where to find them: people you and neighbours have actually used, the suggestions
already sitting in the `Form responses` tab, and the village chat. They do not
have to live in Dunchideock — tradespeople from surrounding parishes absolutely
count. The list is *for* Dunchideock, not *only from* it.

---

## 2. The trades to cover

These are the everyday village trades to aim at. You do not need all of them, but
the more of these you cover, the more often somebody finds what they need:

- Gardener
- Handyman
- Carpenter / Joiner
- Plasterer
- Painter & Decorator
- Tree Surgeon
- Fencing
- Groundworks / Drainage
- Window Cleaner
- Cleaner
- Logs / Firewood
- Oil / LPG Supplier
- Pest Control

Plus the ones already on the site today:

- Plumber
- Electrician
- Heating
- Roofer

**Spell each trade the same way every time.** The website groups people by
exactly what is typed in the `trade` box, so `Gardener` and `gardener` and
`Garderner` would become three separate headings with one person under each.
Copy and paste from this list rather than retyping, and you cannot go wrong.

---

## 3. Publishing — the wait, and two warnings

### It takes about five minutes

When you change the spreadsheet, the website does **not** update straight away.
Google republishes the list roughly every five minutes.

So: make your change, wait five minutes, then reload the website. If you reload
instantly and see the old list, nothing is wrong and nothing needs fixing. This
catches everybody out once.

### Warning 1 — never click "Stop publishing"

In `File → Share → Publish to web` there is a **Stop publishing** button.

**Clicking it takes the website down immediately.** Not slowly, and not
partially — the site loses its list and every villager sees a "the list is being
updated" message instead of the tradespeople.

There is no reason to ever click it. If you want somebody off the site, set their
`status` to `hidden` (see above).

### Warning 2 — renaming the Published tab is safe; deleting it is not

**Renaming** the `Published` tab is completely safe. The link Google publishes is
tied to the tab itself, not to its name.

**Deleting** it — even if you immediately make a new tab with the same name and
the same contents — permanently breaks the published link. The website would then
be pointing at something that no longer exists, and fixing it means republishing
and changing the address inside the site's code.

So: rename freely, never delete. If you want to start the list again, delete the
*rows* and keep the *tab*.

---

## 4. The launch message

> ## ⚠️ DRAFT — AWAITING YOUR APPROVAL. DO NOT POST YET.
>
> **This message must not go into the village WhatsApp group until build plan
> step 7 has passed.** Step 7 is the final check: the whole journey tested on a
> real phone and a computer against the real list, and the live list confirmed to
> carry at least 12 tradespeople across at least 6 trades.
>
> Posting it before then means sending the village to a list with four test
> people on it. The link is the one thing you cannot un-send.
>
> The words below are a draft for you to approve or change. They are yours — say
> it however sounds like you.

---

Dunchideock — there is now a simple list of local tradespeople that people in the village have recommended:

https://dunchitrader-collab.github.io

Tap the kind of job you need — plumber, electrician, roofer and so on — and you will see who has been recommended, with a large Call button to ring them straight from your phone. There is a button at the top to make the writing bigger.

It is a list of recommendations from neighbours. It is not a review site: no stars, no scores, no complaints, no prices, and nobody has paid to be on it.

If someone has done good work for you and they are not on the list, send me their name and number and I will add them.

---

### Before you post it

- [ ] The four test people (`T001`–`T004`) are gone from the live site
- [ ] At least 12 tradespeople across at least 6 trades are showing
- [ ] You have opened the site on your own phone and rung one number to check it
      actually dials the right person
- [ ] You have pressed the largest **A** and the list still reads properly
- [ ] Build plan step 7 has passed

---

## If something looks wrong

| What you see | What it means |
|---|---|
| Your change has not appeared | Wait five minutes and reload. This is normal. |
| Somebody is missing from the site | Their `status` is not exactly `active`, or their `trade` is spelled differently from the heading you are looking under. |
| A trade heading is missing entirely | Nobody `active` has that trade. Empty trades are hidden on purpose. |
| Somebody appears under two headings | That is correct if they have an `extra_trade`. They are still one person, counted once. |
| *"The list is being updated"* on the site | The site cannot read the list. Check you have not clicked **Stop publishing**. |
| *"Nobody on the list just yet"* | The site is reading the list fine, but no row is `active`. |

Anything else, or if a villager reports a problem, the full technical record is
in `docs/HANDOVER-dunchi-trader.md` and the rebuild instructions are in
`docs/RESTORE-dunchi-trader.md`.

---

## Where the other instructions are

This document is about **filling the list for the first time and launching it**.
Once that is done, the day-to-day jobs live elsewhere, so there is only ever one
set of instructions for each thing:

| What you want to do | Where it is |
|---|---|
| Add, change or remove one tradesperson, day to day | **`README.md`** |
| Edit the words on the website | **`README.md`** |
| Set up the recommend button, or redeploy it | **`apps-script/DEPLOY.md`** |
| Make the spreadsheet flag duplicates | **`apps-script/SHEET-FORMULAS.md`** |
| Rebuild everything from nothing, or move it to new accounts | **`docs/RESTORE-dunchi-trader.md`** |
