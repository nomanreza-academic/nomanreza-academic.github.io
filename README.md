# Mohammad Ali Noman Reza — Academic Portfolio

A responsive, static academic website. No paid hosting, build tools, backend, or JavaScript framework is required.

## Preview locally

Open `index.html` in a web browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish for free with GitHub Pages

1. Create a GitHub account if you do not have one.
2. Create a public repository named `<your-username>.github.io` to publish at the root, or any other repository for a project-site URL.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the repository's main branch.
4. In repository **Settings → Pages**, select **Deploy from a branch**, `main`, and `/(root)`. Save.
5. When deployment completes, visit `https://<your-username>.github.io/` (or the relevant project-site path).

## Add a personal domain later

1. Buy a domain from a registrar of your choice.
2. In **Settings → Pages → Custom domain**, enter the domain (e.g. `www.example.com`).
3. Configure the DNS records per GitHub's **current official Pages custom domain documentation**. For `www`, this normally involves a CNAME record pointed at `<your-username>.github.io`; apex domains require suitable address records. Do not use placeholder IP addresses.
4. Allow DNS verification / certificate issuance and enable **Enforce HTTPS** once available.
5. Update canonical / social URLs when your permanent domain is chosen.

## Details requiring owner verification

- Current position, employer, academic title and institutional affiliation.
- Whether the PhD degree has been awarded, and the official date.
- Other degrees, institutions, dates, honors.
- Teaching experience, courses, supervision, academic service.
- Current 2026 status of thesis Papers II and III (their status here is based **only** on the 2025 thesis).
- Preferred public email, Google Scholar, ORCID, LinkedIn, CV PDF, headshot.
- Optional: full list of publications, conference presentations, grants, awards, projects and downloadable thesis.

**Important:** Placeholder text is intentionally visible, not invented. Replace it before announcing this as a complete professional profile.

## Source notes

- `/mnt/data/Synopsis final.pdf`: title/author/institution on PDF p. 1; list of papers on PDF p. 10; research summary on PDF pp. 11–12.
- `/mnt/data/PhD thesis final.pptx`: title and affiliation on slide 1; research objectives and results on slides 6–35.
- DOI links come directly from the attached thesis; journal statuses have **not** been checked on the live web.
- Original uploaded PDF and PPTX are **not included in this website package**. The site uses an original CSS/SVG abstract illustration rather than reproducing thesis slides.

## Customize

- Content: `index.html`
- Layout/colors/mobile styles: `styles.css`
- Navigation interactions: `script.js`
- Icon: `assets/favicon.svg`

## Accessibility and privacy

- Includes semantic landmarks, keyboard-visible focus, skip link, reduced-motion support, responsive navigation, and readable contrast.
- No analytics, tracking cookies, newsletter signup, or contact form.
- Google Fonts is loaded from a third-party CDN; replace/remove the font import in `styles.css` if you want no third-party requests.
