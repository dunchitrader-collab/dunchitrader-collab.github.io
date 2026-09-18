# Turning on the "I recommend them too" button

Follow these steps once. They take about ten minutes.

Until you do, the button on the website still works, but a recommendation only
stays on the villager's own phone and disappears when they close the page. The
page says so honestly — it does not pretend the recommendation was sent.

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

1. Go to:
   <https://github.com/dunchitrader-collab/dunchitrader-collab.github.io/edit/main/app.js>
   (sign in as **dunchitrader-collab** if it asks).
2. Press **Ctrl+F** and search for: `VOTES_ENDPOINT`
3. You are looking for this line, near the top:

```js
  var VOTES_ENDPOINT = "";
```

4. Paste your copied URL between the two quotation marks, so it reads like this
   — your URL will be much longer:

```js
  var VOTES_ENDPOINT = "https://script.google.com/macros/s/AKfy..../exec";
```

Keep the quotation marks and the semicolon exactly as they are.

5. Scroll to the bottom, click the green **Commit changes** button, then
   **Commit changes** again in the box that appears.

Wait about a minute for the website to update.

---

## Step 5 — Check it worked

1. Open <https://dunchitrader-collab.github.io> on your phone.
2. Tap a trade, then tap **I recommend them too** on somebody's card.
3. Put a few words in the second box and tap **Add my recommendation**.
4. Go back to the spreadsheet and look at the **Votes** tab.

A new row should appear with the time, the trader's ID, the name, and the words.

If it does, you are finished.

**If nothing appears**, check these in order:
- Is the tab named exactly `Votes`?
- In step 3, was "Who has access" set to **Anyone** and not "Only myself"?
- In step 4, did the URL end in `/exec`, and are the quotation marks still there?

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
