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
https://docs.google.com/spreadsheets/d/e/2PACX-1vSJA1...../pub?gid=1583719737&single=true&output=csv
```

Keep it somewhere — you need it in step 6.

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
design/wireframe-dunchi-trader.html
apps-script/Code.gs
apps-script/DEPLOY.md
apps-script/SHEET-FORMULAS.md
docs/
README.md
```

**`.nojekyll` is easy to miss and the site misbehaves without it.** It is an
empty file whose only job is to stop GitHub processing the pages before serving
them. To create it in the browser: **Add file → Create new file**, type
`.nojekyll` as the name, leave the contents empty, and commit.

Then switch the website on:

1. In the repository click **Settings**, then **Pages** in the left menu.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set the branch to **main** and the folder to **/ (root)**. Click **Save**.
4. Wait two or three minutes.

**You should now have:** your site loading at
`https://<account>.github.io`. It will say *"The list is being updated"*,
because it does not yet know where the list is. That is step 6.

---

## Step 6 — Point the website at your list

1. Open `app.js` in the repository and click the pencil icon.
2. Press **Ctrl+F** and search for `var FEED`.
3. Replace the address between the quotation marks with the one you copied in
   step 2. Keep the quotation marks and the semicolon.
4. Click **Commit changes**.
5. Wait a minute or two and reload the website.

**You should now have:** a working site. With nothing on the Published tab yet
it will say *"Nobody on the list just yet"* — which is the correct message for
an empty list, and proves it is reading the spreadsheet properly.

Add one test person to the Published tab, wait five minutes, and they should
appear. Once you have seen that, the site is rebuilt.

---

## Step 7 — The recommend button

This is optional. The site works fully without it; villagers just cannot add
their own recommendations.

Follow **`apps-script/DEPLOY.md`** in the repository. In short: paste
`apps-script/Code.gs` into **Extensions → Apps Script**, deploy it as a web app
with **Execute as: Me** and **Who has access: Anyone**, copy the `/exec`
address, and paste it into the `VOTES_ENDPOINT` line of `app.js`.

**You should now have:** a recommendation made on a phone appearing as a new
row on the Votes tab within a few seconds.

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
- [ ] The form can be filled in **without signing in to Google**.
- [ ] A form answer appears on the Form responses tab.
- [ ] If you did step 7: a recommendation from a phone reaches the Votes tab.

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
