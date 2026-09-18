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
