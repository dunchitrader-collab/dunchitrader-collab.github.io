# Dunchideock Village Suppliers

A list of local tradespeople recommended by people in the village.

The site is being built. The full guide for whoever runs or inherits this site
is written later in the build; this file currently covers only how the code
gets from here to the live site.

---

## There is no build step

Every file in this repository is served to visitors **exactly as it is
committed**. Nothing is compiled, bundled or generated.

That means you can change a word on the site by editing a file here in the
GitHub web editor and clicking Commit. A minute or so later it is live.

It also means **nothing may be added that needs building** — no npm install,
no bundler, no framework that has to be compiled first. If a change would
stop a non-technical person editing a file in the browser and seeing the
result, it does not belong in this project.

The empty `.nojekyll` file at the root is part of this. Without it, GitHub
Pages runs the files through Jekyll before serving them, and what visitors
get is no longer what is committed. **Do not delete it.**

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

## Publishing a change to the live site

From a checkout of this repository:

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
and check the change is actually there. GitHub Pages takes a short while to
publish, so an immediate refresh may still show the old page.

---

## Editing the live site directly

You do not have to use git at all. Signed in as **dunchitrader-collab**, you
can open any file at
<https://github.com/dunchitrader-collab/dunchitrader-collab.github.io>, click
the pencil icon, make the change and click Commit. The site updates itself a
minute later.

If you do that, copy the same change back into the working repository too, so
the two do not drift apart.

---

## What is in here

| Path | What it is |
|---|---|
| `index.html` | The page itself. Currently a placeholder. |
| `style.css` | How the page looks. Currently a placeholder. |
| `app.js` | How the page behaves. Currently a placeholder. |
| `.nojekyll` | Stops GitHub Pages altering the files. Do not delete. |
| `design/wireframe-dunchi-trader.html` | The agreed design, reviewed and signed off. The real page is built from this. |
| `docs/` | The project's records: what it is, why it is built this way, what is still to do. |
