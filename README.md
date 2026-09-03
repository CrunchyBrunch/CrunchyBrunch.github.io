# Brooks Estadt — Engineering Portfolio

A static personal portfolio for structural-engineering recruiting, career fairs, and concise project case studies. The site keeps professional work sanitized while giving public personal software direct GitHub and demo links.

## Local development

Requirements:

- Node.js 22.13 or newer
- pnpm 11

Install and run:

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:3000/`.

Create the Sites-compatible production build:

```powershell
pnpm build
```

Create the static GitHub Pages export in `out/`:

```powershell
pnpm build:static
```

## Updating content

- Profile and link placeholders: `data/site.ts`
- Project cards and case studies: `data/projects.ts`
- Homepage sections: `app/page.tsx`
- Visual system: `app/globals.css`

Add the confirmed LinkedIn URL, contact email, and résumé path in `data/site.ts`. Keep the visible disabled states until each destination is real; the site intentionally avoids dead links.

## Résumé

When the current résumé is approved, place the PDF in `public/` (for example `public/brooks-estadt-resume.pdf`), set `resumePath` in `data/site.ts`, and replace the disabled résumé controls with links that use that value.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the static `out/` directory on every push to `main`.

1. Create a new repository for this portfolio. Do not reuse an engineering-tool repository.
2. Initialize this directory as that repository, commit, and push to `main`.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Run the **Deploy portfolio to GitHub Pages** workflow or push to `main`.
5. Review the generated Pages URL before sharing it.

The workflow supports both a user-site repository such as `CrunchyBrunch.github.io` and an ordinary project repository. It computes the required base path automatically.

## Custom domain

After purchasing and approving a domain:

1. Add an Actions repository variable named `CUSTOM_DOMAIN` with the bare domain, such as `brooksestadt.com`.
2. Add the DNS records GitHub Pages requests.
3. Run the deployment workflow again. It will build without a repository base path and create the required `CNAME` file.
4. Enable **Enforce HTTPS** in GitHub Pages after DNS verification succeeds.

Do not add a sample domain before it is owned.

## Publication safety

Before making the portfolio repository public:

- Do not copy source, project files, screenshots, calculations, employer templates, or internal documentation from the professional tools.
- Do not add the AISC Shapes Database or ASCE-derived reference content.
- Review every professional screenshot with the employer/owner before use.
- Keep client names, project numbers, addresses, network details, credentials, and local environment files out of the repository.
- Confirm the résumé, contact links, and social-preview public URL are current.

The case studies in `data/projects.ts` are intentionally qualitative and avoid invented performance metrics.
