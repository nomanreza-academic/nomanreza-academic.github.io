# Noman Reza — easy-to-edit academic website

This keeps your existing modern academic homepage and adds an editing dashboard through **Pages CMS**. Your site stays hosted free on GitHub Pages; Pages CMS edits the `data/*.json` files and commits them to GitHub.

## One-time installation

1. Open your repository: https://github.com/nomanreza-academic/nomanreza-academic.github.io
2. Upload **everything inside this ZIP**, not the parent folder or the ZIP itself. In the GitHub file upload page, drag the contents (including `data/` and `media/`) into the upload area. **The hidden `.pages.yml` file is essential**; on Windows you may need to turn on "Show hidden files" or upload it manually.
3. Verify the repository root contains `index.html`, `editable-content.js`, `.pages.yml`, and the `data` and `media` folders.
4. Wait for GitHub Pages deployment, and check https://nomanreza-academic.github.io/
5. Open https://app.pagescms.org/ and sign in using GitHub. Authorize/install the Pages CMS GitHub app **only for your website repository**, if offered. Choose `nomanreza-academic.github.io` on the `main` branch.
6. Open **Home page, photo and contact** to edit your introduction and photo; or open **Publications**, **Research**, **Education**, **Teaching** to edit/add rows. Save (or commit) changes. GitHub Pages will redeploy.

## Editing a publication

In Pages CMS open **Publications — add or remove**, add a new list item, fill `Year`, `Publication type`, `Journal`, `Title`, `Authors`, and `DOI or website link`, and save.

## Editing photo or CV

In **Home page, photo and contact**, use **Profile photo** to upload a JPG/PNG and **Academic CV PDF** to upload a PDF. These are referenced from `data/profile.json`. Ensure you explicitly save your edits.

## Important notes

- Please review your **public email**, CV details, DOI links, and teaching descriptions before publishing.
- A new Pages CMS edit changes the public GitHub repository; GitHub history lets you revert mistakes.
- The first visit may require GitHub app authorization. Pages CMS is a third-party service; grant only the repository access you need.
- The embedded original portrait remains a fallback in `index.html`, so the homepage should still show a photo if media fails to load.
- If you upload only `index.html` without `.pages.yml`, `editable-content.js`, and `data/`, the editing dashboard will not function.
- If you edit the HTML manually, you may need to change the content JSON too, because CMS data takes priority after page load.
