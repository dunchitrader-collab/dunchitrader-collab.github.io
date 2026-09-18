# Turning on the "I recommend them too" button

Follow these steps once. They take about ten minutes.

**Steps 1 to 4 are already done** — you did 1 to 3 on 2026-09-18, and step 4 was
done for you in the website's code the same day. What is left is step 5: placing
one recommendation from your phone and checking it arrives in the Votes tab. The
whole document is kept so the site can be rebuilt from nothing if it is ever
needed.

Until the button is working, a recommendation only stays on the villager's own
phone and disappears when they close the page. The page says so honestly — it
does not pretend the recommendation was sent.

**You must be signed in as `dunchitrader@gmail.com` for all of this.** That
account owns the spreadsheet. If you are signed in as anybody else it will not
work, and it would tie the site to somebody else's account, which is exactly
what this project avoids.

---

## Step 1 — Add the Votes tab

1. Open the spreadsheet:
   <https://docs.google.com/spreadsheets/d/1j9SVNJG9Zf_iFtl6OrsrcVom5SY13sOiv3vt58jcprc/edit>
2. At the bottom of the screen, click the **+** to add a new tab.
3. Double-click the new tab's name and rename it to exactly: **Votes**
   (capital V, no spaces, no "s" missing — the script looks for that exact word).
4. Click cell **A1** and paste this line in. It will fill A1 to D1:

```
When	Trader ID	Name	What they said
```

That is the whole tab. The script fills the rest in as villagers use the site.

---

## Step 2 — Paste in the script

1. Still in the spreadsheet, click **Extensions** in the menu bar, then
   **Apps Script**. A new tab opens in your browser.
2. You will see a small code window with something like `function myFunction() {}`
   in it. Click anywhere in that window, select everything (**Ctrl+A**, or
   **Cmd+A** on a Mac) and delete it.
3. Open the file `apps-script/Code.gs` in the site's GitHub repository, click
   the **Copy raw file** button, and paste the whole thing into that empty window.
4. Click the **save** icon (the floppy disk), or press **Ctrl+S**.

---

## Step 3 — Publish it

1. At the top right, click the blue **Deploy** button, then **New deployment**.
2. Click the small gear icon next to "Select type" and choose **Web app**.
3. Fill the boxes in like this:
   - **Description**: `Village suppliers votes`
   - **Execute as**: **Me (dunchitrader@gmail.com)**
   - **Who has access**: **Anyone**
4. Click **Deploy**.

**About "Anyone".** That is deliberate and it is safe here. Villagers do not
have logins, so the website has to be able to reach this without one. The script
can only add a row to the Votes tab — it cannot read anything, cannot change or
delete anything, and cannot touch the list of tradespeople. The worst anybody
could do is put rubbish in the Votes tab, which only you look at.

5. Google will ask you to authorise it, because it is your own new script.
   Click **Authorise access**, choose the **dunchitrader** account, and when
   the "Google hasn't verified this app" warning appears click **Advanced**,
   then **Go to (project name)**, then **Allow**. That warning is normal for a
   script you wrote yourself.

6. When it finishes you will see a **Web app URL** ending in `/exec`.
   Click **Copy**. Keep that browser tab open until step 4 is done.

---

## Step 4 — Tell the website where to send them

**This step is already done. You do not need to do anything here.**

On 2026-09-18 you sent your Web app URL across, and it was put into the website's
code and published to both copies of the site. It went live in the change marked
`4d67c15`, and the live website was checked afterwards to confirm it really is
serving that URL and not an older file.

So if you have just finished step 3 and your URL is on your clipboard, there is
nothing to paste. Go straight on to step 5 and check it works.

**Please do not edit `app.js` on the GitHub website by hand.** An earlier version
of these instructions asked you to, and that turned out to be a mistake worth
explaining. The site lives in **two** GitHub repositories that are kept identical:

- `gsamwell-lang/dunchi-trader` — where changes are made
- `dunchitrader-collab/dunchitrader-collab.github.io` — the live site you own

Editing the live one by hand changes one copy and not the other. The two then
disagree, and the next ordinary update would quietly wipe your change out and put
the site back to having no endpoint — with nothing obviously broken to warn you.
Changes are made in the first repository and pushed to both, so the two never
drift apart.

**If you ever redeploy the script and get a NEW `/exec` URL** — which happens if
you create a *new deployment* rather than updating the existing one — the website
will still be pointing at the old one. Send the new URL across to be put into the
code the same way. Do not paste it into the live repository yourself.

---

## Step 5 — Check it worked

1. Open <https://dunchitrader-collab.github.io> on your phone.
2. Tap a trade, then tap **I recommend them too** on somebody's card.
3. Put a few words in the second box and tap **Add my recommendation**.
4. Go back to the spreadsheet and look at the **Votes** tab.

A new row should appear with the time, the trader's ID, the name, and the words.

If it does, you are finished.

**Important — the page cannot tell you whether it worked.** It will thank the
villager either way. That is not a fault and it is not laziness: the reply from
Google comes back sealed, and the website is not allowed to open it. This was
measured on 2026-09-18 rather than assumed. So **the Votes tab is the only
proof**. Always check the spreadsheet, never the thank-you message.

**If nothing appears**, check these in order:
- Is the tab named exactly `Votes`?
- In step 3, was "Who has access" set to **Anyone** and not "Only myself"?
- Did you create a **new deployment** at some point after 2026-09-18? If so its
  URL is different from the one in the website's code, and the new one needs to
  be sent across — see the note at the end of step 4.
- Wait a moment and refresh the spreadsheet; the row is not always instant.

---

## If you ever need to switch it off

Open **Extensions → Apps Script → Deploy → Manage deployments**, and either
delete the deployment or click **Archive**. The website carries on working
normally; only the recommend button stops. You can also delete any unwanted
rows straight from the Votes tab, the same way you would in any spreadsheet.

---

## Changing the script later

Edit `apps-script/Code.gs` in the repository so the change is kept, paste the
new version into the Apps Script editor, save, then **Deploy → Manage
deployments → the pencil icon → Version: New version → Deploy**. The URL stays
the same, so you do not have to change `app.js` again.

---
---

# Part 2 — Publishing recommendations automatically

Everything above switches on the **recommend button** on the website. This
second part switches on **automatic publishing**: a villager fills in the form,
and the tradesperson appears on the site by themselves, without you copying
anything across.

It is kept in this same document because it is the same job from your side —
pasting a script into the same spreadsheet — and having two documents that both
say "open Extensions → Apps Script" is how they drift apart.

**These are two separate scripts and they stay separate.** `Code.gs` is the one
the website talks to and it can only add rows to Votes. `Publish.gs` is this
one; it is never given a web address, nothing on the internet can reach it, and
it can only add rows to Published. Neither can do the other's job, which is
deliberate.

Allow about ten minutes.

---

## What changes when you switch this on

**Before:** a recommendation landed on the Form responses tab and sat there
until you copied it across to Published yourself.

**After:** a recommendation lands on Form responses *and* adds itself to
Published, so the village can see it within about five minutes.

**Two kinds of submission do NOT go live.** They are still added to Published
so nothing is lost, but with `status` set to `hidden`, which keeps them off the
website until you look at them:

1. **No usable telephone number** — anything that is not eleven digits once
   spaces and brackets are removed. A mistyped number is worse than no number,
   because a villager rings a stranger.
2. **An email address or a web link in any box.** A villager has no reason to
   type either; somebody advertising does.

**A telephone number already on the list is NOT one of them** (changed
2026-09-18). Somebody recommending a tradesperson you already have is a *second
recommendation*, which is the whole point of the site. Their words and their name
are added to that person's existing row, underneath the ones already there. No
second row appears, and nothing of theirs is lost.

Everything else publishes itself with `status` `active`.

**Your job becomes a sweep rather than an approval.** Open the Published tab
when it suits you, look down it, and overwrite anything messy — a name in the
wrong box, a trade spelled oddly, a business left blank. You are editing plain
text, and nothing will rewrite what you type.

---

## Step 6 — Paste in the publisher

1. Open the spreadsheet and click **Extensions → Apps Script**.
2. At the top left of the file list, click the **+** next to "Files", choose
   **Script**, and name it exactly: **Publish**
3. Delete the `function myFunction() {}` that appears in the new file.
4. Open `apps-script/Publish.gs` in the site's GitHub repository, click
   **Copy raw file**, and paste the whole thing into that empty file.
5. Click the **save** icon, or press **Ctrl+S**.

**You should now have:** two files in the list on the left — `Code.gs` and
`Publish.gs`. Leave `Code.gs` exactly as it is.

---

## Step 7 — Switch on automatic publishing

This is the part that makes it happen by itself.

1. In the Apps Script editor, click the **clock icon** in the left-hand bar
   (**Triggers**).
2. Click **+ Add Trigger** at the bottom right.
3. Set the four boxes like this:
   - **Choose which function to run**: `onFormSubmitPublish`
   - **Choose which deployment should run**: `Head`
   - **Select event source**: `From spreadsheet`
   - **Select event type**: `On form submit`
4. Click **Save**. Google will ask you to authorise it again — the same
   **Advanced → Go to (project name) → Allow** as before.

**You should now have:** one trigger listed, showing `onFormSubmitPublish` and
`On form submit`.

> **It must be "On form submit", not "On edit".** On edit fires every time
> anybody types anything in the spreadsheet, including you tidying it, and
> would try to publish the same rows over and over.

---

## Step 8 — Bring across the responses already sitting there

Anything submitted before today is on the Form responses tab but not on
Published. This brings them across in one go.

1. Go back to the **spreadsheet** tab in your browser and reload the page.
2. A new menu appears in the menu bar: **Village list**.
3. Click **Village list → Publish any responses not yet on the list**.
4. Authorise it if asked.

**You should now have:** a small box telling you how many people were added,
and those people on the Published tab with the next free IDs.

> **It is safe to click twice.** It matches on the telephone number, so
> anybody already on the list is skipped rather than added again. If you click
> it a second time it will say it added 0 and skipped the rest.

---

## Step 9 — Check it is working

1. Click **Village list → Check the setup**. It should say the Published tab
   was found, the Form responses tab was found, and **Automatic publishing:
   ON**.
2. Fill in the form yourself, on your phone, with a made-up name and a real
   eleven-digit number.
3. Look at the **Published** tab. A new row should appear within a few seconds,
   with the next ID and `status` `active`.
4. Wait five minutes and open the website. They should be on it.
5. Delete your test row's details by setting its `status` to `hidden`, or
   overwrite the row when you seed the list properly.

**If no row appears**, check these in order:
- Is the trigger listed under the clock icon, and does it say **On form
  submit**?
- Does the Published tab still have its eight headings in row 1?
- Click **Village list → Check the setup** and read what it says.

---

## If you ever need to switch automatic publishing off

Click the **clock icon** in the Apps Script editor, find the
`onFormSubmitPublish` trigger, click the three dots beside it and choose
**Delete trigger**.

Everything else carries on working: the website, the recommend button, and the
form. Recommendations go back to sitting on the Form responses tab until you
copy them across yourself. Nothing already on Published is affected, and you
can switch it back on later by adding the trigger again.

---

## One thing worth knowing

**Never delete a row from the Published tab — set its `status` to `hidden`
instead.** IDs are worked out from the highest one already in the list, so
deleting the last row can let its number be given to somebody else, and every
recommendation filed against that number would follow it to the wrong person.
Hiding a row keeps the number safely used up. This is the same rule as in
`README.md`, and it matters more now that IDs are handed out automatically.

---

## Step 10 — Two more columns on the Published tab

Added 2026-09-18. The publisher now carries the villager's own words and their
name through to the site, so a listing shows *why* a neighbour recommended
somebody rather than just a phone number.

The form already promises this. It asks for the villager's name *"so a fellow
villager might reach out to you if they have any questions"* — which only makes
sense if the name appears on the site. Until today nothing carried it there.

1. Go to the **Published** tab.
2. Your columns run `id` to `status` in **A**–**H**, and the two helper columns
   from the duplicate checker sit in **I** and **J**.
3. Click cell **K1** and paste this one line. It fills K1 and L1:

```
recommendations	recommended_by
```

That is all. **Leave K and L empty** — the publisher fills them in.

**You should now have:** twelve headings across row 1, and nothing under K and L
until the next recommendation arrives.

> **What goes in them.** `recommendations` holds the villager's words and
> `recommended_by` holds their name. When several people recommend the same
> tradesperson, each one is added underneath the last with a blank line between,
> and the names line up in the same order. If somebody left the name question
> blank it shows as *"a villager"*, the same as on the website.

---

## Step 11 — Update the recommend endpoint

**Only needed if you already did Part 1.** If you have not deployed the votes
endpoint yet, ignore this — you will get the corrected version when you do.

A recommendation of seven to fourteen characters — *"Fixed gate"* — was being
accepted by the website and then quietly thrown away by the endpoint, because
that script still required fifteen. The website could not tell you, because
Google's reply comes back sealed. The repository is fixed; your deployed copy
is not until you do this.

1. Open the spreadsheet → **Extensions → Apps Script**.
2. Click **`Code.gs`** in the file list on the left.
3. Select everything in it (**Ctrl+A**) and delete it.
4. Open `apps-script/Code.gs` in the site's GitHub repository, click
   **Copy raw file**, and paste it in. **Ctrl+S** to save.
5. Click **Deploy → Manage deployments**.
6. Click the **pencil icon** on the existing deployment.
7. Set **Version** to **New version**. Click **Deploy**.

> **Step 7 is the one that matters.** Editing the existing deployment keeps the
> same `/exec` address, which is the one built into the website. Choosing
> **New deployment** instead would give you a different address, the website
> would carry on posting to the old one, and the recommend button would stop
> working with nothing on screen to tell you — the reply is sealed either way.
> If you do it by accident, send the new address across to be put into the code.

**You should now have:** the same deployment, a higher version number, and short
recommendations reaching the Votes tab.

---

## Step 12 — If the list looks empty when it should not

**Read this if you submitted the form, the script says it ran, and nothing
appeared.** That happened on 2026-09-18 and it was our fault, not yours.

### What went wrong

Your duplicate-check formulas in columns **I** and **J** cover the whole
column, all the way to the bottom of the sheet. They show nothing in the empty
rows, but as far as a script is concerned every one of those rows has something
in it. So when the publisher added a new person "at the end", the end was **row
1001**, not row 5.

**Nothing was lost.** Those people are in your Published tab, complete and
correct, about a thousand rows below the others — which from where you are
sitting looks exactly like nothing happened.

### Putting it right — three steps

1. **Re-paste the publisher.**
   **Extensions → Apps Script** → click **`Publish.gs`** → select everything
   (**Ctrl+A**) and delete it → open `apps-script/Publish.gs` in GitHub, click
   **Copy raw file**, paste it in → **Ctrl+S**.

2. **Reload the spreadsheet**, then click
   **Village list → Repair the list (move stray rows back up)**.

   It tells you how many people it moved. **Every ID stays exactly as it was** —
   a person's ID is how their recommendations are filed, so it never changes,
   even though the row moves. If there is nothing to fix it says so and does
   nothing. If it finds something it does not understand it stops and tells you
   rather than guessing.

3. **Check it.** Click **Village list → Check the setup**. You should see how
   many people are on the list, the last ID in use, and
   **"Stranded rows below the list: none. Good."**

Then submit the form once more from your phone. The new row should appear
directly under the others, and on the website about five minutes later.

### If it happens again

**Village list → Check the setup** is the thing to click. It now tells you in
plain words whether anything is stranded and on which row. A script that
finishes without complaining is not proof that anything happened — the check is.

---

## Step 13 — Putting right the three faults of 2026-09-18

Three things were wrong with the rows already in your sheet. **All three are
repaired by the same menu item**, and nothing is lost.

### What was wrong

**1. Telephone numbers had lost their leading zero.** This is the serious one.
Google stored `07887988959` as a *number*, and numbers do not start with a zero,
so it kept `7887988959`. The website builds the **Call** button from that
column — so tapping Call would have dialled a wrong number, with nothing on
screen to say so. Six of your eight numbers were affected. The two that survived
were the two you had typed with a space in them, which Google could not read as
a number.

**2. Six people were listed twice.** The same fault as before: the script could
not see the existing rows, so it added everybody again.

**3. Two trade names did not match the website's list** — "Gas Engineer" and
"Car Mechanic" rather than "Boiler & heating" and "Car mechanic". They would
each have made a tile of their own.

### Putting it right

1. **Re-paste the publisher.** **Extensions → Apps Script** → click
   **`Publish.gs`** → select everything (**Ctrl+A**), delete → open
   `apps-script/Publish.gs` in GitHub → **Copy raw file** → paste → **Ctrl+S**.

2. **Reload the spreadsheet**, then click **Village list → Check the setup**.
   Read what it says before changing anything: it lists how many duplicates
   there are, which telephone numbers look wrong, and which trades are not on
   the list.

3. Click **Village list → Repair the list (move stray rows back up)**. It moves
   stray rows up, removes duplicates, puts the zeros back and corrects the trade
   names, then tells you exactly what it did.

4. Click **Village list → Check the setup** again. It should now say
   *"Duplicate rows: none"*, *"Telephone numbers: all look right"* and
   *"Trade names: all match the website's list"*.

5. **Check one number by eye** on the Published tab against the form response it
   came from, then tap Call on the website to be certain.

### What it does and does not do

- **It never changes an ID.** When it removes a duplicate it keeps the *earliest*
  ID for that person and moves the later row's recommendation onto it. The
  removed ID is **retired** and never given to anybody else.
- **Two different people sharing one telephone number are both kept.** You have
  exactly that — Ben Franks and John Pilkington on the same number — and it
  reports it rather than deleting one of them.
- **Where two rows disagree** on trade or status, it keeps the earlier row's
  version and *tells you*, rather than quietly choosing.
- **A telephone number it cannot work out is left alone and reported**, so you
  can retype it. It will only restore a missing zero to a ten-digit number,
  because that is the only case with one possible answer.

> **Helen Smith's number is one of those.** It reads `78853335434`, which is the
> mistyped twelve-digit number with its zero eaten. Putting the zero back would
> just give a twelve-digit number that is still wrong, so the repair refuses it
> and says so. Her row is `hidden` either way. **Retype it from her original form
> answer when you get a moment.**
