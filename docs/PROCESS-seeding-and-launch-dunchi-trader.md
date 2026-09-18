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
