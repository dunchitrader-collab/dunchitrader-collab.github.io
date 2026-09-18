# Dunchideock Village Suppliers

A list of local tradespeople recommended by people in the village.

**The website:** <https://dunchitrader-collab.github.io>

A villager opens the link, taps the kind of work they need, and taps the big
green button to ring the person. That is the whole thing.

It is a list of **recommendations from neighbours**. It is deliberately not a
review site: there are no star ratings and no bad reviews.

> **Filling the list and launching it:** see
> **[`docs/PROCESS-seeding-and-launch-dunchi-trader.md`](docs/PROCESS-seeding-and-launch-dunchi-trader.md)**.
> It covers adding tradespeople to the spreadsheet, the trades to cover, the
> five-minute publishing wait and the two things never to click, and the draft
> message to post in the village group. Start there if the list is empty or thin.

---

## Who this page is for

Whoever looks after this site. You do not need to be technical and you do not
need to know anything about programming. If you can edit a spreadsheet on your
phone, you can run this.

**Everything is controlled by two logins:**

| Login | What it controls |
|---|---|
| `dunchitrader@gmail.com` | The form villagers fill in, and the spreadsheet holding the list |
| `dunchitrader-collab` on GitHub | The website itself |

Those two together are the whole system. Nobody else's account is needed for
any part of it, and nothing is paid for.

---

## How the list actually works

```
  A villager fills in the form
            |
            v
  It lands on the "Form responses" tab   <- the raw answers, only you see it
            |
            |   a script checks it and adds it by itself
            v
  It appears on the "Published" tab      <- the list the village sees
            |                                  active  = on the site
            |                                  hidden  = waiting for you
            v
  The website reads the Published tab and shows them
```

**Publishing is automatic.** You do not copy anything across. A villager fills
in the form and the tradesperson is on the site within about five minutes.

**Three kinds of submission wait for you instead of going live.** They are still
added, so nothing is lost, but with `status` set to `hidden`:

- the telephone number is not eleven digits, so it cannot be right;
- there is an email address or a web link in one of the boxes;
- that telephone number is already on the list.

**Your job is a sweep, not an approval.** Look down the Published tab when it
suits you and overwrite anything messy — a name in the wrong box, an odd
spelling, a blank business. You are editing plain text and nothing will rewrite
what you type. The `verdict` column on the Form responses tab is the view to
scan while you do it.

**The website can only read.** Nothing a villager does *on the site* can change,
add or delete anybody. The form is what adds people, and it does so through the
three checks above rather than through you.

The spreadsheet:
<https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit>

---

## Three things to know before you touch anything

These three catch people out. They are worth reading twice.

> ### 1. Changes take about five minutes to appear
>
> Edit the spreadsheet, then refresh the website, and you will probably still
> see the old version. **That is normal and nothing is broken.** Google
> re-publishes the list every few minutes. Have a cup of tea and look again.

> ### 2. Never click "Stop publishing"
>
> In the spreadsheet under **File → Share → Publish to web** there is a button
> marked **Stop publishing**. If you click it **the website goes blank
> immediately**, because it can no longer read the list. If you ever do it by
> accident, publish it again the same way and it will come back.

> ### 3. Never delete the "Published" tab
>
> **Renaming it is completely safe.** Deleting it and making a new one with the
> same name is not — the website finds that tab by a hidden internal number,
> not by its name, so a fresh tab is a different tab as far as the website is
> concerned, and the list stops loading.
>
> If you want to clear it out, delete the *rows*, not the tab.

---

## Adding a tradesperson

1. Open the spreadsheet and go to the **Published** tab.
2. Go to the first empty row at the bottom.
3. Fill in the columns:

| Column | What goes in it | Example |
|---|---|---|
| `id` | The next number in the list | `T014` |
| `first_name` | Their first name | `Richard` |
| `last_name` | Their surname | `Whitthorn` |
| `business` | Business name, if they have one. Leave empty if not. | `Whitthorn Plumbing` |
| `phone` | Their number, written so it is easy to read | `07825 736940` |
| `trade` | The kind of work they do | `Plumber` |
| `extra_trade` | A second kind of work, if they do one. Leave empty if not. | `Gas Engineer` |
| `status` | Type `active` | `active` |

4. Wait five minutes, then check the website.

### The one rule that must never be broken

**Give each person the next ID, and never change it afterwards.** `T001`,
`T002`, `T003`, and so on. Never reuse an ID from somebody you removed.

When villagers add their own recommendation from the website, it is filed
against that ID. Change the ID and you quietly detach every recommendation that
person has. Their name can change, their phone number can change, their trade
can change — the ID never does.

---

## Changing somebody's details

Find their row on the **Published** tab and type over it. Change the phone
number, the business, the trade, anything you like — **except the `id`**.

Five minutes later the website shows the new version.

---

## Taking somebody off the list

Find their row on the **Published** tab and change `status` from `active` to
anything else — `removed` is clear. They disappear from the website within five
minutes.

**Do not delete the row.** Keeping it means their ID is never reused, so any
recommendations attached to them stay attached. If somebody asks to be taken
off, this is all you need to do, and it takes about ten seconds.

---

## Changing the words on the website

You can edit the site itself in your web browser. Nothing needs installing.

1. Sign in to GitHub as **dunchitrader-collab**.
2. Go to
   <https://github.com/dunchitrader-collab/dunchitrader-collab.github.io>
3. Click the file you want to change, then the pencil icon.
4. Make the change, scroll down, click **Commit changes**.
5. Wait a minute and refresh the website.

**There is no build step, and there must never be one.** The files in that
repository are exactly the files sent to people's phones. Nothing is compiled
or generated. That is what makes it possible for someone non-technical to
change a word and see it live a minute later — and that is deliberate.

If anybody ever proposes a change needing a build step, a bundler, or an
`npm install`, the answer is no. The test is simple: *can whoever inherits this
still edit a file in the browser and see the result?* If not, it does not
belong here.

The empty file called `.nojekyll` is part of that. Without it GitHub processes
the files before serving them. **Do not delete it.**

| Path | What it is |
|---|---|
| `index.html` | The page |
| `style.css` | How it looks |
| `app.js` | How it behaves |
| `.nojekyll` | Stops GitHub altering the files. Do not delete. |
| `design/wireframe-dunchi-trader.html` | The agreed design the page was built from |
| `apps-script/` | The small script that saves villagers' recommendations, and how to set it up |
| `docs/PROCESS-seeding-and-launch-dunchi-trader.md` | **How to fill the list and launch it.** Written for whoever runs the site, not for a programmer. |
| `docs/` | The full records: how it was built, why, and how to rebuild it |

---

## The two repositories

| Repository | What it is for |
|---|---|
| `dunchitrader-collab/dunchitrader-collab.github.io` | **The live site.** This is the one the village sees, and the one an inheritor is handed. |
| `gsamwell-lang/dunchi-trader` | The working copy where changes are made first. |

Both hold the **same, complete source**. Neither is a stripped-down or
generated copy of the other.

**If the two ever disagree, the `dunchitrader-collab` one is right**, because
it is the one being served and the one that gets inherited.

---

## Publishing a change from a computer

Most of the time the browser method above is enough. If you are working from a
copy on a computer:

```
git add -A
git commit -m "describe what you changed"
git push origin master       # the working copy
git push collab master:main  # the live site
```

Two things about that second command:

- The live repository's branch is called **`main`**, and this one's is called
  **`master`**, which is why it reads `master:main`. Getting that the wrong
  way round will fail rather than do damage.
- It needs a login for the **dunchitrader-collab** GitHub account. A login for
  any other account can read that repository but cannot push to it.

If the `collab` remote is not yet set up in your checkout:

```
git remote add collab https://github.com/dunchitrader-collab/dunchitrader-collab.github.io.git
```

After pushing, wait a minute, then open <https://dunchitrader-collab.github.io>
and check the change is actually there.

If you edit directly in the browser instead, copy the same change back into the
working repository too, so the two do not drift apart.

---

## Turning on the recommend button

Villagers can add their own recommendation to somebody already on the list.

**This is switched on.** The small Google script behind it was deployed on
2026-09-18 and the website has been sending recommendations to it since. New
recommendations arrive as rows on the **Votes** tab of the spreadsheet.

**Check the Votes tab, not the website.** The page thanks the villager whether or
not the recommendation was saved — the reply from Google comes back sealed and
the website is not allowed to open it. That was measured, not assumed. So the
Votes tab is the only place that tells you the truth.

If you ever need to set it up again from scratch, or you redeploy the script and
get a new address, follow **`apps-script/DEPLOY.md`**.

To make the spreadsheet flag duplicate entries for you, follow
**`apps-script/SHEET-FORMULAS.md`**.

---

## If something looks wrong

| What you see | What it usually means |
|---|---|
| "The list is being updated" | The website cannot read the Published tab. Check it is still published, and that the tab was not deleted and recreated. |
| "Nobody on the list just yet" | The Published tab has no rows with `status` set to `active`. |
| "The list will not load at the moment" | Usually the internet connection. Try again shortly. |
| Your edit has not appeared | Wait five minutes. See warning 1. |

The website never shows a blank page. If a villager sees any of the messages
above, nothing has been lost and the list is safe.

---

## Rebuilding it all from nothing

If the spreadsheet is deleted, the website disappears, or you need to move the
whole thing to a different account, **`docs/RESTORE-dunchi-trader.md`** is the
step-by-step guide to building it again from scratch with only those two
logins.
