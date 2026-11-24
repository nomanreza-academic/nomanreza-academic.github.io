# One-time installation

Back up your repository. Extract the update ZIP and copy all files and folders into the root of your local repository, replacing matching files. Include hidden `.pages.yml` and folders beginning with `_`. Commit and push to the existing publishing branch. GitHub Settings → Pages should use Deploy from a branch, main / root (or your existing publishing branch). Jekyll must be enabled: do not add `.nojekyll`. Check Actions for successful build. Visit /Tech/.

# Publish future articles

Open https://app.pagescms.org/, select the repository, refresh its configuration, choose Tech Blog and create an entry. Enter title, date, category, summary, image and article body. Save. GitHub Pages builds the article and listing automatically. Keep filenames unique and stable after publication. Images can be uploaded via Photos. Use Markdown code blocks for commands. The first article is in `_tech/galaxy-watch-poco-f7.md`.

If using GitHub web upload, ensure all folders and hidden files are included; otherwise use GitHub Desktop. No existing files need to be deleted.
