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

**How long it takes, rechecked 2026-09-19 against the repaired document:**

- **Rebuilding — about an hour and a half**, unchanged. The repair added no work
  to a rebuild; step 7's instructions were moved into this document rather than
  added to, and a rebuilder was always going to follow them.
- **Rehearsing — allow TWO hours.** The extra half hour is the rehearsal
  preamble, substituting the throwaway names as you go, and the cleanup at the
  end. **None of it is optional** — the cleanup least of all, since skipping it
  leaves a second public village directory on the internet.

> **⚠ THIS DOCUMENT HAS NEVER BEEN WALKED. Read that before you rely on it.**
>
> It was **read against the live site on 2026-09-18** and **repaired on
> 2026-09-19** — five faults were found and fixed by reading, including three
> that made a rehearsal impossible or dangerous. **But nobody has yet followed it
> from step 1 to the end and built anything.** It is correct as far as reading
> can establish, and *reading is not proving*: this project has twice had a fix
> pass its own test and fail on the owner's screen.
>
> **So expect to find something.** If a screen does not look as described, or a
> step cannot be done as written, **that is a fault in this document** — trust
> what is in front of you, finish by working around it, and write down what you
> changed. The first walk is the test, and its job is to produce that list.
>
> **You are rebuilding something that currently exists and works.** The form, the
> spreadsheet, the website and the recommend button are all live today. This is
> the instruction for putting them back if they are lost, or for moving them to a
> different pair of accounts — not a description of work still to be done.

---

## ⚠️ FIRST — are you REBUILDING, or REHEARSING?

**These are two different jobs and this document does both, but you must decide
which before step 1.** Read this page once; it takes a minute and it is the
difference between a safe rehearsal and editing the live village directory by
accident.

| | **REBUILDING** | **REHEARSING** |
|---|---|---|
| Why | The real thing is lost, or you are moving it to different accounts | You want to prove this document works, while the real site carries on |
| What you end up with | The village directory, working | A throwaway copy you delete afterwards |
| Names to use | The real ones, exactly as written in each step | **The throwaway names in the table below** |
| Afterwards | Nothing to undo | **Follow "Cleaning up after a rehearsal" at the end. It matters.** |

**If you are REBUILDING, ignore the rest of this page and start at "Before you
start".** Every step is written for you already.

---

### If you are REHEARSING, use these names instead

Everything this document tells you to create, you create under a different name,
so that nothing you do can touch the live site. **Substitute as you go:**

| Step | Where it says… | You create… |
|---|---|---|
| 1 | Spreadsheet named **Dunchideock Village Suppliers** | **Dunchideock REHEARSAL — delete me** |
| 3 | Form named **Recommend a tradesperson** | **REHEARSAL form — delete me** |
| 4 | Repository named **`dunchitrader-collab.github.io`** | **`dunchi-rehearsal`** |

**The tab names inside the spreadsheet stay exactly as written** — `Published`,
and the form's own `Form responses 1`. The scripts look for those exact words, so
changing them would make the rehearsal fail for a reason that has nothing to do
with this document.

### The one thing that will look wrong and is not

**Your rehearsal website will live at a different kind of address.**

- A repository named exactly `<your-account>.github.io` is served at
  **`https://<your-account>.github.io`** — the bare address. That is the live
  site, and there can only be one of them per account.
- A repository named anything else — `dunchi-rehearsal`, say — is served at
  **`https://<your-account>.github.io/dunchi-rehearsal`**, with the repository
  name on the end.

**Both are real, working GitHub Pages websites.** The longer address is not a
failure, a fallback or a sign that something went wrong — it is simply how GitHub
names a site that is not the account's main one. **Wherever a step below says
your site should appear at `https://<account>.github.io`, read it as
`https://<account>.github.io/dunchi-rehearsal` throughout.**

> **Why you cannot just reuse the real name.** GitHub allows one repository of a
> given name per account, and `dunchitrader-collab.github.io` is taken — by the
> live site. If you try, GitHub refuses and the rehearsal stops at step 4 with no
> way forward. **This is the single thing that made this document unrehearsable
> until 2026-09-19.**

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

> **The Votes tab is no longer used, and steps 6 and 7 are optional.** Until
> 2026-09-19 a recommendation made on the website was added here; under the
> owner's ruling D1b it now goes to the tradesperson's own row on **Published**,
> columns K and L, because nothing ever read this tab. The steps are kept
> because the tab exists in the live spreadsheet and a rebuild that matches it
> is easier to compare against. **Skipping them breaks nothing.**

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
   - **Question 6 (what they did)** — Length, Minimum character count, **`7`**,
     and set the custom error text to:
     *Please add a word or two more — even "Fixed gate" is enough.*

> **Seven, not fifteen, and this document said fifteen until 2026-09-19.**
> Owner's ruling D4a, in his own words: *"I think we can change the check to 7
> characters. As they can't really put in a sentence without more than that
> 'Fixed Gate' is about as short as you can get."* The website, the recommend
> endpoint and the spreadsheet's own verdict column all enforce **seven**. A
> rebuild that set fifteen here would have turned away honest short answers the
> rest of the system accepts, and nothing would have flagged the disagreement.
> Found while repairing this document, not by anybody hitting it.

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
3. **The name.** Which name depends on which job you are doing — see the table at
   the top of this document.

   **REBUILDING — the name matters exactly.** It must be your username followed
   by `.github.io`, which for the current account is:

```
dunchitrader-collab.github.io
```

   **REHEARSING — use a different name**, because the one above already exists
   and GitHub will refuse it:

```
dunchi-rehearsal
```

   > **This is the step that used to stop a rehearsal dead**, before 2026-09-19.
   > Your rehearsal site will then live at
   > `https://<account>.github.io/dunchi-rehearsal` rather than at the bare
   > address — **that is correct and expected**, and the top of this document
   > explains why.

4. Set it to **Public**. GitHub does not serve free websites from private
   repositories, so this is required rather than a choice.
5. Tick **Add a README file** so the repository is not empty.
6. Click **Create repository**.

**You should now have:** an empty repository — at
`https://github.com/<account>/<account>.github.io` if rebuilding, or
`https://github.com/<account>/dunchi-rehearsal` if rehearsing.

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
apps-script/Publish.gs
apps-script/DEPLOY.md
apps-script/SHEET-FORMULAS.md
docs/HANDOVER-dunchi-trader.md
docs/BUILD-PLAN-dunchi-launch.md
docs/SOLUTION-DESIGN-dunchi-trader.md
docs/RESTORE-dunchi-trader.md
docs/PROCESS-seeding-and-launch-dunchi-trader.md
docs/archive/                            <- closed plans; history, not needed to run
```

> **Simplest rule: copy the whole repository.** The list above is what you get if
> you do. It is here so you can check nothing was missed, not so you can pick
> items out — see the note below.

> **`apps-script/Publish.gs` is easy to overlook and step 7 will fail without
> it.** The recommend endpoint shares a piece of it and refuses to run if it is
> absent. It was missing from this list until 2026-09-19.

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

**You should now have:** your site loading — at `https://<account>.github.io` if
rebuilding, or at **`https://<account>.github.io/dunchi-rehearsal`** if
rehearsing — with the heading, the search box and the three **A** text-size
buttons all showing.

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

> ~~Follow **`apps-script/DEPLOY.md`** in the repository and do **its steps 1, 2 and 3**.~~
> **SUPERSEDED 2026-09-19 — DO NOT DO THAT, and the reason matters.**
> `apps-script/DEPLOY.md` **opens the LIVE spreadsheet by its address** in its own
> step 1, and it now opens with *"START AT STEP 14"* because it was rewritten as
> the repair guide for the live site. Following it from here would either edit
> the real village directory or send you to a step that says to skip the steps
> you were sent for. **The instructions you need are written out below instead**,
> so this document no longer depends on it. `DEPLOY.md` is untouched and remains
> correct for its own job — repairing the live site.

**Everything below works on the spreadsheet YOU created in step 1** — the one you
have open. Nothing here names any other spreadsheet.

### 7a — Open the script editor on your own spreadsheet

1. Open **your** spreadsheet from step 1 (rehearsing: *Dunchideock REHEARSAL —
   delete me*).
2. Menu: **Extensions → Apps Script**. A new tab opens, titled with your
   spreadsheet's name. **Check that title** — it is how you know you are editing
   a script attached to your sheet and not to somebody else's.

### 7b — Paste in the publisher FIRST

**Order matters here.** `Code.gs` shares a piece of `Publish.gs` and refuses to
run without it, so the publisher goes in first.

3. In the file list on the left, click the default file (usually `Code.gs`).
   Select everything in it and delete it.
4. Rename that file to **`Publish.gs`** — click the three dots beside it, choose
   **Rename**.
5. Open `apps-script/Publish.gs` from the repository, click **Copy raw file**,
   paste it in, and press **Ctrl+S**.

### 7c — Add the endpoint

6. Click **+** beside *Files*, choose **Script**, and name it **`Code`** (Apps
   Script adds the `.gs` itself).
7. Open `apps-script/Code.gs` from the repository, **Copy raw file**, paste it
   in, **Ctrl+S**.
8. **Before deploying, prove the right file is open.** Press **Ctrl+F** and
   search for `doPost`. It must be found. If it is not, you are looking at
   `Publish.gs` — click `Code.gs` in the list first.

### 7d — Switch on automatic publishing

9. Still in the script editor, click the clock icon (**Triggers**) in the left
   margin, then **Add Trigger**.
10. Choose function **`onFormSubmitPublish`**, event source **From
    spreadsheet**, event type **On form submit**. Save, and grant the permissions
    Google asks for.

### 7e — Deploy the endpoint

11. **Deploy → New deployment**, choose type **Web app**.
12. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy** and
    grant permissions.
13. **Copy the `/exec` address** it shows you at the end.

> **On a REBUILD this is a New deployment, and that is correct.** The warning
> elsewhere in this project about never choosing "New deployment" applies to
> *updating an existing* endpoint, where a new one would issue a different
> address and silently break the live site. Here there is no existing deployment
> to update — you are creating the first one.

> **Then check the address before you go any further.** Open the `/exec` address
> in a browser. A working deployment answers with one plain sentence: *"This
> address only accepts recommendations sent by the Dunchideock village suppliers
> website."* A Google error page reading *"Script function not found: doGet"*
> means the deployment is not running `Code.gs` — go back and check which file
> was open in the editor when you deployed. **This exact failure happened on
> 2026-09-18 and went undiagnosed for a day**, because nothing else shows it.
> See DEPLOY.md step 14.

### 7f — Tell the website the address

14. In your repository, open `app.js` and click the pencil icon.
15. Find the line beginning `var VOTES_ENDPOINT =` and put your new `/exec`
    address between the quotation marks, exactly as you did for `var FEED` in
    step 6. Keep the quotation marks and the semicolon.
16. **Commit changes.**

> **One caution that applies to the LIVE site and not to a rebuild or a
> rehearsal.** The live site is kept in **two** GitHub repositories that must
> stay identical, so hand-editing `app.js` in one of them makes them disagree and
> the next ordinary update silently wipes the change out. **A rebuild or a
> rehearsal has only one repository**, so editing it directly is correct and
> there is nothing for it to disagree with. If you ever restore both, change one
> and copy the same file to the other.

**You should now have:** the villager's words in column **K** and their name in
column **L** of that tradesperson's own row on the **Published** tab, each time
somebody taps **Add my recommendation** on the website. Where the person already
had a recommendation, the new one is added underneath it with a blank line
between, and the names stay in the same order.

> ~~**Check the spreadsheet, never the website.**~~ SUPERSEDED 2026-09-19 — the
> advice stands, only the tab has changed. A recommendation used to be appended
> to the **Votes** tab; since the owner's ruling D1b it goes to **Published K and
> L** instead, because nothing ever read Votes and a villager's words landed
> where no neighbour would see them.
>
> **Check the spreadsheet, never the website.** The page thanks the villager
> whether or not the recommendation was saved, and it is not being careless: the
> reply from Google comes back sealed and the website is not allowed to open it.
> This was measured on 2026-09-18, not assumed. **Published columns K and L are
> the proof.** The card on the website is a second place to look, but only after
> the five-minute republishing lag, so the sheet is the quicker answer.

> **What the website can do to your list, stated plainly, because this endpoint
> is open to anyone who finds its address.** It can add words and a name to
> somebody **already on the list and visible**. It cannot add a person, cannot
> assign or re-use an ID, cannot change a name, telephone number, trade or
> status, cannot touch the helper formulas in columns I and J, and cannot reach a
> row that is `hidden`. An unknown or hidden ID is refused and nothing is
> written. That is the same door the Google Form already leaves open, and no
> wider.
>
> ⚠ **On wifi, not mobile data — the village has no mobile signal.**
> So: open the site on your phone, tap a trade, tap **I recommend them too**,
> type a few words, tap **Add my recommendation** — then go to the spreadsheet
> and look at **that person's row on the Published tab, columns K and L**. A
> thank-you on the page tells you nothing on its own.
>
> If nothing appears, the first check takes ten seconds: **open the `/exec`
> address in a browser** and see whether you get the plain sentence or a Google
> error page. An error page means the deployment is not running `Code.gs` — go
> back to 7c step 8 and confirm `doPost` is in the file you deployed.
> (`DEPLOY.md` step 14 covers the same failure on the live site, and is worth
> reading if you are repairing rather than rebuilding.)

---

## Step 8 — The duplicate checker

Also optional, and it saves a lot of squinting. It adds columns that tell you, in
plain English, whether each new recommendation is somebody you already have.

**Follow `apps-script/SHEET-FORMULAS.md` in the repository — but read this first:**

> **Ignore its opening two lines, which name a spreadsheet address.** That
> address is the **LIVE** village directory. It is correct for that document's
> own job — the owner repairing the real sheet — and wrong for you.
> **Work in the spreadsheet YOU created in step 1**, the one you have open.
> Everything else in that document is about columns and formulas and applies
> unchanged, because it names columns by letter and never by spreadsheet.

**Do its check first.** That document opens with a section headed *"FIRST — check
your sheet matches this layout"*, listing which question sits in which column. If
you built your form from step 3 above, it will match. **If it does not, stop and
fix the mismatch rather than editing the formulas** — a formula reading the wrong
column fills the sheet with confident nonsense and nothing errors.

**You should now have:** a `verdict` column on the Form responses tab reading
`NEW`, `ALREADY ON SITE — T0xx`, `SAME NAME, DIFFERENT NUMBER` or `CHECK THIS`
against each response.

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
- [ ] If you did step 7: a recommendation made on a phone appears in **columns
      K and L of that tradesperson's own row on the Published tab**. Judge this
      in the spreadsheet, never by the thank-you message on the page.

If every one of those worked using only the two logins, the rebuild is
complete and the site is genuinely inheritable.

---

## Cleaning up after a rehearsal

**Skip this and you have left a second village directory on the public internet.**
Not a draft, not a private copy — a real website, at a real address, that a search
engine can find and a villager can open. It will show whatever test people you
typed in, and it will sit there indefinitely because nothing expires.

**Two of the four things you made are PUBLIC. Do those first.**

### 1. Stop publishing the throwaway CSV — PUBLIC

1. Open your **rehearsal spreadsheet**.
2. **File → Share → Publish to web**.
3. Click **Stop publishing**, and confirm.

**Why first:** that address serves your sheet's contents to anybody who has it,
signed in or not. It keeps working after the spreadsheet is out of your Drive's
way but before it is truly deleted.

> **Make certain you are in the REHEARSAL spreadsheet.** Clicking *Stop
> publishing* on the live one takes the real village directory offline
> immediately. Check the name in the top-left corner before you click.

### 2. Delete the throwaway repository — PUBLIC

1. Go to the **`dunchi-rehearsal`** repository on GitHub.
2. **Settings**, scroll to the bottom, **Delete this repository**.
3. Type the name to confirm.

**Why:** while it exists, GitHub serves it at
`https://<your-account>.github.io/dunchi-rehearsal`. Deleting the repository
takes the website down with it.

> **Check the name twice.** Deleting `dunchitrader-collab.github.io` deletes the
> live village directory and its entire history. The one you want has the word
> **rehearsal** in it.

### 3. Delete the throwaway form — private, but it collects answers

1. Open your **rehearsal form** in Google Forms.
2. Three dots, top right → **Move to bin**.

**Why:** the form link still works while the form exists, and anybody you sent it
to during the rehearsal can keep submitting. Nobody but you sees the answers, but
they keep arriving.

### 4. Delete the throwaway spreadsheet — private

1. In **Google Drive**, find **Dunchideock REHEARSAL — delete me**.
2. Right-click → **Move to bin**.

**Why last:** deleting it does not stop the published address on its own, which
is why step 1 comes first. This also removes the Apps Script project attached to
it, and the web app deployment with it.

### Check you are finished

- [ ] The rehearsal CSV address, pasted into a browser, no longer downloads
      anything.
- [ ] `https://<your-account>.github.io/dunchi-rehearsal` shows GitHub's
      **404** page.
- [ ] **`https://<your-account>.github.io` — the LIVE site — still loads
      normally.** Check this one last and check it properly. It is the line that
      catches a cleanup done on the wrong copy.

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

**⚠️ THE VILLAGE HAS NO MOBILE SIGNAL. EVERYONE RELIES ON WIFI.** Recorded
2026-09-21 from the owner. This changes how you test, and it is not a fault to
be fixed:

- **Test on WIFI, not on mobile data.** A walkthrough done on 4G tests a
  condition no villager in Dunchideock is ever in. **Do not turn wifi off to
  test "properly"** — that advice was given once on this project and was wrong.
- **Tapping CALL only dials for somebody whose phone has wifi calling switched
  on.** Many villagers will not have it, and some will read the site on a phone
  and then walk to a landline in another room. **If CALL does nothing on your
  test phone, that is very likely your phone's wifi-calling setting and not a
  fault in the site.**
- **So the telephone number must be READABLE on the card without tapping
  anything.** For most of this village that is how the number actually gets
  used. **It is shown as plain text today and must stay that way** — never hide
  it behind the button, behind a hover, or behind an icon.

---

## Walk-through tick list

Tick each line when you have seen the thing it names.

1. [ ] **Spreadsheet** — the `Published` tab with one row of headings. (A second `Votes` tab exists in the live sheet but nothing reads or writes it any more — see step 1.)
2. [ ] **Publish** — the copied address, pasted into a browser, downloads a file containing your eight headings.
3. [ ] **Form** — opens in a private window without asking you to sign in; a test answer lands on a new tab in the spreadsheet.
4. [ ] **Repository** — exists and is **Public**. Rebuilding: `<account>.github.io`. Rehearsing: `dunchi-rehearsal`.
5. [ ] **Files and Pages** — the site loads showing the heading, search box and three **A** buttons, and says either *"The list will not load at the moment"* or *"The list is being updated"*. Rebuilding: at `https://<account>.github.io`. **Rehearsing: at `https://<account>.github.io/dunchi-rehearsal` — the longer address is correct, not a failure.**
6. [ ] **Point at the list** — the site now says *"Nobody on the list just yet"*; after adding one test person and waiting five minutes, that person appears under their trade with a green **CALL** button.
7. [ ] **Recommend button** (optional) — the `/exec` address opens in a browser showing one plain sentence rather than a Google error page; then a recommendation made on a phone appears in **columns K and L of that person's row on the Published tab**. Check the spreadsheet, not the thank-you message.
8. [ ] **Duplicate checker** (optional) — the four extra columns on the Form responses tab show a verdict in plain English.
9. [ ] **Call button** — the telephone number is **readable as text on the card without tapping anything** (this is how most of this village uses it — see *Things worth knowing*), and tapping **CALL** on a phone offers to dial the right number. ⚠ **Test on wifi, not mobile data — the village has no mobile signal.** If tapping does nothing, check your phone's **wifi calling** setting before recording a fault.
10. [ ] **Removal** — setting somebody's `status` to anything other than `active` takes them off the site within five minutes.
11. [ ] **Two logins only** — you reached the end without needing any other account, password or payment.
12. [ ] **REHEARSAL ONLY — cleaned up.** The rehearsal CSV address downloads nothing, `https://<account>.github.io/dunchi-rehearsal` shows a 404, the throwaway form and spreadsheet are in the bin, **and the LIVE site at `https://<account>.github.io` still loads normally.**
