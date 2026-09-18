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

**Three kinds of submission do NOT go live.** They are still added to Published
so nothing is lost, but with `status` set to `hidden`, which keeps them off the
website until you look at them:

1. **No usable telephone number** — anything that is not eleven digits once
   spaces and brackets are removed. A mistyped number is worse than no number,
   because a villager rings a stranger.
2. **An email address or a web link in any box.** A villager has no reason to
   type either; somebody advertising does.
3. **A telephone number already on the list.** The person is already there, so
   a second row would split their recommendations in two.

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
