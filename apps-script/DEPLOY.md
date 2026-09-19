# Turning on the "I recommend them too" button

Follow these steps once. They take about ten minutes.

**START AT STEP 14.** That is the current state of this document as at
2026-09-19: steps 1 to 4 were done on 2026-09-18, and the button then stopped
working. The cause has since been measured — the deployment is not running
`Code.gs` at all — and **step 14 both explains it and puts it right**. It also
records the one other thing that changed: a recommendation from the website now
goes to the tradesperson's own row on the **Published** tab rather than to the
Votes tab, which nothing ever read.

Steps 1 to 13 are kept in full, unaltered, so the site can be rebuilt from
nothing if it is ever needed. Read them in order for a rebuild; for today, go
to step 14.

> **Where steps 1 to 13 say "Votes tab", that is history rather than
> instruction.** Creating it (step 1) is harmless and a rebuild may as well keep
> doing it, but nothing reads or writes it any more. Step 14 is the authority on
> where a recommendation lands.

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

---

## Step 14 — ONE TRIP TO THE LAPTOP: the recommend button AND the verdict column

**2026-09-19. Do this one before any of the others.** It fixes **two separate
faults** and they are deliberately bundled into a single sitting, because both
need a computer and neither can be done from a phone.

**The two faults, and they are unrelated to each other:**

| | What is wrong | Where it is fixed |
|---|---|---|
| **A** | The recommend button does nothing. The address is alive but the script behind it is not `Code.gs`. | Part A below — paste `Code.gs`, redeploy |
| **B** | The `verdict` column matches every row against **itself**, so a stranger reads `ALREADY ON SITE — row 15` on row 15. | Part B below — paste one new formula |

**You confirmed fault A yourself on 2026-09-19**, on your phone, by opening the
`/exec` address and getting *"Script function not found: doGet"*. That matched
what had already been measured from the server, so the cause is not in doubt.

**Do Part A first, then Part B.** They do not depend on each other, but A is the
one that leaves the site short of a working feature, and B is a five-second
paste once you are already in the spreadsheet.

---

# Part A — the recommend button

### What is actually wrong, and it is not what anybody guessed

You redeployed `Code.gs` on 2026-09-18 and the button still produced no row, so
five possible causes were written down. **None of them was it.** The real cause
was measured on 2026-09-19 by sending a recommendation to the address the
website uses and reading what came back:

> **Script function not found: doPost**

Google says the same for `doGet`. In plain English: **the address is alive, but
the script sitting behind it is not `Code.gs` at all.** When you redeployed,
the deployment picked up a version of the project that does not contain that
file's two entry points — most likely the editor was showing a different file
at the time. Nothing you can see from the outside says so, which is why it took
a direct test to find.

**You can check this yourself in ten seconds**, and you should, both now and
after you fix it. Open this address in any browser:

<https://script.google.com/macros/s/AKfycbzvTvZK0QW3YiIOyX3q73-xme3G7AnFEooov3VQugoazt7PU8C9_TewsEsT_rLZT1Tl/exec>

- **Broken** looks like a Google error page reading *"Script function not found:
  doGet"*.
- **Working** looks like one plain sentence: *"This address only accepts
  recommendations sent by the Dunchideock village suppliers website."*

That one line is the whole test. If you see the sentence, the deployment is
running the right script.

### The other thing that changed — where recommendations now go

They used to be added to the **Votes** tab. **Nothing ever read that tab.** The
website reads exactly one thing — the published Published tab — so a villager
who tapped *"I recommend them too"*, typed a few words and was thanked had those
words land somewhere no neighbour would ever see them.

From now on a recommendation from the website is added to **that person's own
row on the Published tab**, in columns **K** and **L** — the same two columns a
second form submission fills in, using the same piece of the script. So the two
ways of recommending somebody now do the same thing and end up in the same
place.

**The Votes tab is left exactly as it is.** Nothing reads it, nothing writes to
it, and nothing deletes it. You can leave it there or remove it later; it makes
no difference either way.

**What the website can and cannot do to your list, now that it writes to
Published.** It is worth being precise, because this is the one part of the
system a stranger can reach:

| It can | It cannot |
|---|---|
| Add words to somebody **already on the list** | Add a new person |
| Add the villager's name next to those words | Assign or re-use an ID |
| — | Change a name, telephone number, trade or status |
| — | Touch your two helper formulas in **I** and **J** |
| — | Reach anybody whose row is `hidden` |

If somebody posts to an ID that is not on the list, or one that is hidden, it is
refused and **nothing is written**. So the worst anybody can do from outside is
add unwanted words to a card, which you delete from column K in one edit. That
is the same thing they could already do by filling in the Google Form — it is no
wider a door than the one that is already open.

### Putting it right

1. Open the spreadsheet → **Extensions → Apps Script**.
2. **Look at the file list on the left.** You should see **two** files:
   **`Code.gs`** and **`Publish.gs`**. If `Publish.gs` is missing, do Part 2
   step 6 first — the recommend endpoint now shares a piece of it and will
   refuse to run without it.
3. Click **`Code.gs`**. Check the tab at the top says `Code.gs` and not
   `Publish.gs` — getting this wrong is the most likely thing that went wrong
   last time.
4. Select everything in it (**Ctrl+A**) and delete it.
5. Open `apps-script/Code.gs` in the site's GitHub repository, click
   **Copy raw file**, and paste it in. **Ctrl+S** to save.
6. **Before deploying, prove the right file is there.** Press **Ctrl+F** in the
   editor and search for `doPost`. It must be found. If it is not, you are
   looking at the wrong file — go back to step 3.
7. Click **Deploy → Manage deployments**.
8. Click the **pencil icon** on the existing deployment.
9. Set **Version** to **New version**. Click **Deploy**.

> **Step 9 is the one that matters, and it is the same warning as step 11.**
> Editing the existing deployment keeps the same `/exec` address, which is the
> one built into the website. Choosing **New deployment** would give you a
> different address, the website would carry on posting to the old one, and the
> button would stop working with nothing on screen to tell you. If you do it by
> accident, send the new address across to be put into the code.

### Checking it worked

**Do the browser check first** — open the `/exec` address above. If you get the
plain sentence rather than an error page, the deployment is right. That alone
tells you more than the old test did, because it fails visibly.

Then the real test:

1. Open <https://dunchitrader-collab.github.io/?x=1> on your phone. **The `?x=1`
   matters** — it forces the phone to fetch a fresh copy rather than the one it
   remembers.
2. Tap a trade, then tap a tradesperson's **I recommend them too**.
3. Type your name and a few words — **seven characters is enough**, *"Fixed
   gate"* is fine.
4. Tap **Add my recommendation**.
5. Open the **Published** tab and find that person's row. **Columns K and L**
   should now carry your words and your name. If they already had words from
   somebody else, yours is added underneath with a blank line between.
6. Wait about five minutes and reload the website. Your words should be on that
   person's card, with your name under them.

> **Step 5 is the proof, not step 6.** The website thanks the villager whether or
> not the recommendation was saved — Google's reply comes back sealed and the
> page is not allowed to open it. That was measured, not assumed. The spreadsheet
> is where you look. Step 6 just confirms the five-minute republishing is doing
> its job as well.

---

# Part B — the verdict column

**Still at the laptop. This is one paste and takes about thirty seconds.**

### What is wrong

You typed the two test rows into Form Responses and both came back saying
somebody was already on the site when neither was:

- row **15** — `Test Nine`, `07999 888777` — read **`ALREADY ON SITE — row 15`**
- row **16** — `Bob Samwell`, `07999 111222` — read **`ALREADY ON SITE — row 16`**

**Each row named its own row number.** That is the giveaway: the formula was
comparing each row against the Form Responses tab itself instead of against the
Published list, so every row found itself and reported where it found it. The
number looked plausible, which is why nothing seemed obviously broken.

**The first thing you saw was not a fault.** With the experience box left blank
both rows said `CHECK THIS`, and that is the rule working correctly — an empty
box is zero characters, which is under seven. **The instruction to leave it
blank was wrong**, and it sent you looking at the wrong thing first. Always put
a real sentence in the experience box when testing.

### Putting it right

1. Open the spreadsheet and go to the **Form responses** tab.
2. Click cell **`L2`** — the top of the `verdict` column, the row directly under
   the heading.
3. Select everything in it and delete it.
4. Paste this in, and press **Enter**:

```
=ARRAYFORMULA(LET(digits, REGEXREPLACE(TO_TEXT($F$2:$F),"\D",""),pk, IF(digits="","",IF(LEFT(digits,4)="0044","0"&MID(digits,5,50),IF(LEFT(digits,2)="44","0"&MID(digits,3,50),digits))),nk, LOWER(REGEXREPLACE(TO_TEXT($D$2:$D)&TO_TEXT($E$2:$E),"[^A-Za-z0-9]","")),flag, (REGEXMATCH(LOWER(TRIM(TO_TEXT($E$2:$E))),"^not ?known$"))+(REGEXMATCH(LOWER(TRIM(TO_TEXT($G$2:$G))),"^not ?known$"))+(LEN(TRIM(TO_TEXT($H$2:$H)))<7),hitP, IF(pk="",0,COUNTIF(Published!$I$2:$I$500,pk)),hitN, IF(nk="",0,COUNTIF(Published!$J$2:$J$500,nk)),IF($F$2:$F="","",IF(flag,"CHECK THIS",IF(pk="","CHECK THIS",IF(hitP>0,"ALREADY ON SITE — "&IFERROR(INDEX(Published!$A$2:$A$500,MATCH(pk,Published!$I$2:$I$500,0)),"?"),IF(hitN>0,"SAME NAME, DIFFERENT NUMBER","NEW")))))))
```

**That is the whole of Part B.** You do not paste it down the column; it fills
the column itself. Columns `J` and `K` stay exactly as they are.

> **If it says `#NAME?`** the `LET` word was not recognised — that happens only
> on very old spreadsheets. Say so and a longer version without `LET` will be
> sent across; it does the same thing.

### Checking Part B worked — and this you CAN do from your phone afterwards

Look down column **L**. Three things should now be true:

1. **No verdict anywhere says "row" followed by a number.** They now name the
   person's **ID** instead — `ALREADY ON SITE — T014`. If you still see a row
   number, the paste did not take.
2. **Row 15 should read `ALREADY ON SITE — T014`** and **row 16 should read
   `ALREADY ON SITE — T015`**.

> **This is not the same expectation you were given before, and the reason is
> worth knowing.** Those two test rows have **already published themselves** —
> they are now `T014 Test Nine` and `T015 Bob Samwell` on your Published tab,
> added automatically by the publisher when you typed them in. So
> `ALREADY ON SITE` is the *correct* answer for both of them now. They can no
> longer produce `NEW`, because they are genuinely on the list.

3. **`SAME NAME, DIFFERENT NUMBER` has still not been seen**, and neither test
   row can produce it. To see it, type **one more row** into Form Responses
   columns C to H:

| C trade | D first | E last | F phone | G business | H experience |
|---|---|---|---|---|---|
| Plumber | Duckers | Plumber | `07700 900123` | *(blank)* | Came out on a Sunday evening |

**Expected: `SAME NAME, DIFFERENT NUMBER`.** It clashes with **`T001 Duckers
Plumber`**, who is on the site on `07825 736940` — same name, different number,
which is exactly the case. The number `07700 900123` was checked against your
live list and belongs to nobody.

> **This row will publish itself as a new person**, because that is what the
> publisher does with a number it has not seen. Once you have read the verdict,
> set that person's `status` to `hidden` on the Published tab so they do not
> appear on the site. Do not delete the row — hiding keeps the ID retired.

### The four verdicts — and an honest note about `NEW`

Three of the four you can see today:

| Verdict | Which row shows it |
|---|---|
| `CHECK THIS` | the two test rows with the experience box blank, 2026-09-19 |
| `ALREADY ON SITE — T0xx` | rows 15 and 16, once Part B is pasted |
| `SAME NAME, DIFFERENT NUMBER` | the `Duckers Plumber` / `07700 900123` row above |

**`NEW` is a different matter, and it is worth understanding rather than
hunting for.** Checked against your live list on 2026-09-19: **every single
response on your Form responses tab has already been published**, so every one
of them correctly reads `ALREADY ON SITE`. None can say `NEW`.

That is not a fault — it is automatic publishing working. A submission arrives,
the publisher adds that person to the site within seconds, and from then on the
number IS on the list. **`NEW` is the verdict a row holds only in the moments
between the form being submitted and the publisher running.** It is real, it is
correct, and it is nearly always over before you look.

**So you will see `NEW` the next time somebody genuinely new is recommended and
you happen to open the sheet quickly** — or never, which is fine. The verdict
column earns its keep on the other three. Do not type a row specially to chase
it; a row typed to produce `NEW` publishes itself and stops being `NEW` while
you are still looking at it.
