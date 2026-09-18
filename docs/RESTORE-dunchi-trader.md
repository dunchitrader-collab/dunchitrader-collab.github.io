# Rebuilding Dunchideock Village Suppliers from nothing

This is the full instruction for building the whole thing again from scratch —
the form, the spreadsheet, the website and the recommend button — if it is all
lost, or if you are moving it to a different account.

**You need exactly two logins and nothing else:**

| Login | Used for |
|---|---|
| A Google account — currently `dunchitrader@gmail.com` | The form, the spreadsheet, the recommend script |
| A GitHub account — currently `dunchitrader-collab` | The website |

No payment card. No other person. No other service. If you reach a step that
seems to need something else, that is a fault in this document and it should be
fixed, not worked around.

Allow about an hour and a half.

> **This document was checked against the live site on 2026-09-18** and matches
> what is actually deployed on that date. If you are reading it much later and a
> screen does not look as described, trust the site and fix this document.
>
> **You are rebuilding something that currently exists and works.** The form, the
> spreadsheet, the website and the recommend button are all live today. This is
> the instruction for putting them back if they are lost, or for moving them to a
> different pair of accounts — not a description of work still to be done.

---

## Before you start

Have ready:
- A copy of the site's files. If GitHub still has them, that is your copy. If
  not, any backup of the repository will do.
- Your list of tradespeople, if you still have it. If not, the site can start
  empty and you can rebuild the list from the village chat.

Do the steps in order. Each one says what you should see when it has worked.

---

## Step 1 — The spreadsheet

1. Sign in to Google as the project account.
2. Go to <https://sheets.google.com> and click the **+** to make a blank
   spreadsheet.
3. Name it **Dunchideock Village Suppliers** (top left, where it says
   "Untitled spreadsheet").
4. Rename the first tab to **Published** — double-click the tab name at the
   bottom.
5. Click cell **A1** and paste this single line, which fills A1 to H1:

```
id	first_name	last_name	business	phone	trade	extra_trade	status
```

6. Add a second tab with the **+** at the bottom, and rename it **Votes**.
7. On the Votes tab, click **A1** and paste this line:

```
When	Trader ID	Name	What they said
```

**You should now have:** a spreadsheet with two tabs, Published and Votes, each
with a row of headings and nothing else.

> **The column headings on Published matter, and their order does not.** The
> website looks them up by name, so you may drag columns around later. But a
> misspelt heading means the website cannot find that column.

---

## Step 2 — Publish the list so the website can read it

1. In the spreadsheet, click the **Published** tab so it is the one showing.
2. Menu: **File → Share → Publish to web**.
3. In the box that appears:
   - Under **Link**, change **Entire document** to **Published** (the tab).
   - Change **Web page** to **Comma-separated values (.csv)**.
   - Open **Published content & settings** and make sure
     **Automatically republish when changes are made** is ticked.
4. Click **Publish**, then **OK**.
5. **Copy the address it gives you.** It is long and looks like this:

```
https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1...../pub?gid=1915382769&single=true&output=csv
```

Keep it somewhere — you need it in step 6.

> **Check the `gid=` number is the Published tab's, not another tab's.** This is
> the single easiest thing to get wrong, and it has already gone wrong once on
> this project: the address was published from the raw form-answers tab instead,
> so the website would have shown unreviewed submissions and villagers' email
> addresses. Publish with the **Published** tab selected, and if the address you
> get downloads anything other than your eight headings, you have the wrong tab.

**You should now have:** a web address that, pasted into a browser, downloads a
small file containing your headings.

> **Two warnings that matter for the life of this site.**
>
> **Never click "Stop publishing"** in that same box. The website goes blank
> straight away.
>
> **Never delete the Published tab.** That address points at a hidden internal
> number for the tab, not at its name. Renaming is safe; deleting and
> recreating is not, and it will break the site until you redo this step and
> step 6.

---

## Step 3 — The form villagers fill in

1. Go to <https://forms.google.com> and start a blank form.
2. Name it **Recommend a tradesperson**.
3. Add these questions:

| # | Question | Type | Required |
|---|---|---|---|
| 1 | What trade are you recommending? | **Multiple choice**, with the real "Other" option added at the bottom | Yes |
| 2 | What is their first name? | Short answer | Yes |
| 3 | What is their last name? | Short answer | Yes |
| 4 | What is their telephone number? | Short answer | Yes |
| 5 | What is their business called? (Optional) | Short answer | No |
| 6 | Please tell us what they did for you | Paragraph | Yes |
| 7 | Your name, so a neighbour can ask you about them | Short answer | No |

On question 3, add the help text: *If you don't know it then write 'Not Known'.*

On question 1, use **Multiple choice** and click **Add "Other"** at the bottom
of the option list. Do not use a dropdown — a dropdown cannot have a working
"Other", and the villager just gets the word with nowhere to type.

Trades to list: Plumber, Electrician, Gas Engineer, Oil Boiler Technician,
Roofer, General Builder, Chimney Sweep, Gardener, Handyman, Carpenter / Joiner,
Plasterer, Painter & Decorator, Tree Surgeon, Fencing, Groundworks / Drainage,
Window Cleaner, Cleaner, Logs / Firewood, Oil / LPG Supplier, Pest Control.

4. Add the two checks that give villagers a helpful message instead of a
   confusing one. On each question click the three dots, then
   **Response validation**:

   - **Question 4 (telephone)** — Regular expression, Matches,
     `^[\d\s\+\(\)\-]{10,20}$`, and set the custom error text to:
     *Please use numbers only, like 07825 736940 or 01392 833471.*
   - **Question 6 (what they did)** — Length, Minimum character count, `15`,
     and set the custom error text to:
     *Please write a few more words — what did they do for you?*

5. Click **Settings** at the top, open **Responses**, and make sure
   **Collect email addresses** is **switched off**. It forces villagers to sign
   in to Google, which stops older people at the very first step.

6. Go to the **Responses** tab at the top, click the green spreadsheet icon,
   choose **Select existing spreadsheet**, and pick the one from step 1. This
   adds a third tab, called "Form responses 1".

7. Click **Send**, choose the link icon, tick **Shorten URL**, and copy it.

**You should now have:** a form that villagers can fill in without signing in,
whose answers appear on a new tab in your spreadsheet.

**How to check it, with nothing but these two logins:** open the link you copied
in a private/incognito browser window, so you are not signed in to Google. The
form should open and let you answer without asking you to sign in. Submit one
test answer, then look at your spreadsheet — a new tab appears with your answer
on it. Delete that test answer's row afterwards if you like.

> **Two of the settings above cannot be confirmed from outside the account**, and
> that is expected rather than a fault: whether **Collect email addresses** is
> off, and whether the two response-validation rules saved correctly, are only
> visible to you while signed in and editing the form. The incognito test above
> proves the email setting indirectly — if it were on, the form would demand a
> sign-in. For the validation rules, type `abc` into the telephone box and two
> words into the last box; you should see your own custom messages rather than
> Google's *"Please enter a valid response"*.

---

## Step 4 — The website's home on GitHub

1. Sign in to GitHub as the project account.
2. Click **+** at the top right, then **New repository**.
3. **The name matters exactly.** It must be your username followed by
   `.github.io` — for the current account that is:

```
dunchitrader-collab.github.io
```

4. Set it to **Public**. GitHub does not serve free websites from private
   repositories, so this is required rather than a choice.
5. Tick **Add a README file** so the repository is not empty.
6. Click **Create repository**.

**You should now have:** an empty repository at
`https://github.com/<account>/<account>.github.io`.

> **Because it is public, no password, key or token may ever be put in these
> files.** The site does not need any: it reads a public address and writes
> through the script in step 7.

---

## Step 5 — Put the site's files in

If you have a copy of the files on a computer with git:

```
git clone https://github.com/<account>/<account>.github.io.git
cd <account>.github.io
# copy the site's files in here, then:
git add -A
git commit -m "restore the site"
git push
```

If you are working only in the browser, upload them instead: **Add file →
Upload files**, drag everything in, then **Commit changes**.

Either way the repository must end up containing:

```
index.html
style.css
app.js
.nojekyll                <- empty file, but it must exist
CLAUDE.md
README.md
design/wireframe-dunchi-trader.html
apps-script/Code.gs
apps-script/DEPLOY.md
apps-script/SHEET-FORMULAS.md
docs/HANDOVER-dunchi-trader.md
docs/BUILD-PLAN-dunchi-trader.md
docs/SOLUTION-DESIGN-dunchi-trader.md
docs/RESTORE-dunchi-trader.md
docs/PROCESS-seeding-and-launch-dunchi-trader.md
```

> **Copy the whole repository, do not pick files out of it.** Everything the
> site needs is plain text that is served exactly as it is written — there is
> nothing to build and nothing to generate. In particular the website's icon is
> drawn inside `index.html` itself rather than being a separate image file, so
> copying `index.html` brings the icon with it and there is no icon file to
> remember. If you copy the repository whole, you cannot miss anything.

**`.nojekyll` is easy to miss and the site misbehaves without it.** It is an
empty file whose only job is to stop GitHub processing the pages before serving
them. To create it in the browser: **Add file → Create new file**, type
`.nojekyll` as the name, leave the contents empty, and commit.

Then switch the website on:

1. In the repository click **Settings**, then **Pages** in the left menu.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set the branch to **main** and the folder to **/ (root)**. Click **Save**.
4. Wait two or three minutes.

**You should now have:** your site loading at `https://<account>.github.io`, with
the heading, the search box and the three **A** text-size buttons all showing.

Instead of a list of trades you will see one of these two messages, and **either
one is correct at this point**:

- *"The list will not load at the moment"* — the usual one. The copied `app.js`
  still points at the old spreadsheet, which no longer exists or is no longer
  published, so the site cannot reach any list.
- *"The list is being updated"* — if the old address still answers but no longer
  gives the right headings.

Both mean the same thing here: **the website is working, and it does not yet know
where your new list is.** That is step 6. What you must not see is a blank page
or a Google "404" page; either of those means the files or the Pages setting in
this step are wrong, not the list address.

---

## Step 6 — Point the website at your list

1. Open `app.js` in the repository and click the pencil icon.
2. Press **Ctrl+F** and search for `var FEED`.
3. Replace the address between the quotation marks with the one you copied in
   step 2. Keep the quotation marks and the semicolon.
4. Click **Commit changes**.
5. Wait a minute or two and reload the website.

**You should now have:** a working site. With only the headings on the Published
tab and nobody under them, it says *"Nobody on the list just yet"*.

**That message is the proof this step worked**, and it is worth understanding
why: it is a different message from the two in step 5. It means the website
reached your spreadsheet, read it successfully and found the headings it
expected — there is simply nobody on the list yet. If you still see *"The list
will not load at the moment"*, the address is wrong or the tab is not published.
If you see *"The list is being updated"*, the address works but points at the
wrong tab — go back to step 2 and check the `gid=` number.

Now add one test person to the Published tab, wait five minutes, and reload.
They should appear under their trade with a green **CALL** button.

**Once you have seen that, the website is rebuilt.** Steps 7 and 8 add the
recommend button and the duplicate checker.

> **Filling the list properly is a separate job** — how many people to add,
> which trades to cover, how the ids work and what to do before you share the
> link. That is in **`docs/PROCESS-seeding-and-launch-dunchi-trader.md`**, and it
> is not part of rebuilding. Get the site working first.

---

## Step 7 — The recommend button

This one is optional in the sense that the site works fully without it —
villagers just cannot add their own recommendations. Everything up to here is
the site; this is the extra.

Follow **`apps-script/DEPLOY.md`** in the repository and do **its steps 1, 2 and
3**: create the Votes tab, paste in `apps-script/Code.gs`, and deploy it as a web
app with **Execute as: Me** and **Who has access: Anyone**. Copy the `/exec`
address it gives you at the end.

> **Do not paste that address into `app.js` yourself.** `DEPLOY.md` step 4
> explains why in full, and it matters: the site normally lives in **two** GitHub
> repositories kept identical, and hand-editing one makes them disagree so the
> next ordinary update silently wipes the change out.
>
> **In a from-scratch rebuild you may well have only one repository**, and in
> that case editing `app.js` directly is fine — there is nothing for it to
> disagree with. Open `app.js`, find the line beginning `var VOTES_ENDPOINT =`,
> and put your new `/exec` address between the quotation marks, exactly as you
> did for `var FEED` in step 6. If you have restored both repositories, make the
> change in one and copy the same file to the other so they stay identical.

**You should now have:** a new row on the **Votes** tab each time somebody taps
**Add my recommendation** on the website.

> **Check the spreadsheet, never the website.** The page thanks the villager
> whether or not the recommendation was saved, and it is not being careless: the
> reply from Google comes back sealed and the website is not allowed to open it.
> This was measured on 2026-09-18, not assumed. **The Votes tab is the only
> proof.**
>
> So: open the site on your phone, tap a trade, tap **I recommend them too**,
> type a few words, tap **Add my recommendation** — then go to the spreadsheet
> and look at the Votes tab. A thank-you on the page tells you nothing on its
> own.
>
> If no row appears, the checks are in `DEPLOY.md` step 5.

---

## Step 8 — The duplicate checker

Also optional, and it saves a lot of squinting. Follow
**`apps-script/SHEET-FORMULAS.md`** to add four columns to the Form responses
tab. They tell you, in plain English, whether each new recommendation is a
person you already have.

---

## When you are finished

Check each of these:

- [ ] The website loads at its address on a phone and on a computer.
- [ ] Tapping a trade shows the people who do it.
- [ ] The green Call button dials the right number.
- [ ] Adding somebody to the Published tab shows them on the site within five
      minutes.
- [ ] Setting somebody's `status` to something other than `active` removes them.
- [ ] The form can be filled in **without signing in to Google** (test it in a
      private/incognito window).
- [ ] A form answer appears on the Form responses tab.
- [ ] If you did step 7: a recommendation made on a phone appears as a new row
      **on the Votes tab**. Judge this in the spreadsheet, never by the
      thank-you message on the page.

If every one of those worked using only the two logins, the rebuild is
complete and the site is genuinely inheritable.

---

## Things worth knowing while you work

**Changes take about five minutes.** Google republishes the list every few
minutes, so the website always lags a little behind the spreadsheet. This is
normal.

**IDs are given once and never changed.** `T001`, `T002`, and so on. Villagers'
recommendations are filed against the ID, so changing one detaches them.

**There is no build step and there must never be one.** The files in the
repository are exactly the files sent to people's phones. This is what lets
whoever inherits the site change a word in the browser and see it live.

**Nothing here costs money**, and nothing needs renewing. GitHub provides the
web address and the security certificate; Google provides the form and the
spreadsheet. There is no server to keep running and nothing to patch.

---

## Walk-through tick list

Tick each line when you have seen the thing it names.

1. [ ] **Spreadsheet** — two tabs, `Published` and `Votes`, each with one row of headings.
2. [ ] **Publish** — the copied address, pasted into a browser, downloads a file containing your eight headings.
3. [ ] **Form** — opens in a private window without asking you to sign in; a test answer lands on a new tab in the spreadsheet.
4. [ ] **Repository** — exists at `https://github.com/<account>/<account>.github.io` and is **Public**.
5. [ ] **Files and Pages** — the site loads at `https://<account>.github.io` showing the heading, search box and three **A** buttons, and says either *"The list will not load at the moment"* or *"The list is being updated"*.
6. [ ] **Point at the list** — the site now says *"Nobody on the list just yet"*; after adding one test person and waiting five minutes, that person appears under their trade with a green **CALL** button.
7. [ ] **Recommend button** (optional) — a recommendation made on a phone appears as a new row **on the Votes tab**. Check the spreadsheet, not the thank-you message.
8. [ ] **Duplicate checker** (optional) — the four extra columns on the Form responses tab show a verdict in plain English.
9. [ ] **Call button** — tapping **CALL** on a phone dials the right number.
10. [ ] **Removal** — setting somebody's `status` to anything other than `active` takes them off the site within five minutes.
11. [ ] **Two logins only** — you reached the end without needing any other account, password or payment.
