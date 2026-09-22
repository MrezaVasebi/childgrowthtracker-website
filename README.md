# Child Growth Analyst Website

Public website for **Child Growth Analyst**, a child-growth tracking application
from Pacifica Analytic.

The website contains product information, support resources, legal documents,
and account-deletion instructions. Its content is static and does not require a
database, user authentication, or application secrets.

## Pages

| Route             | Purpose                                                       |
| ----------------- | ------------------------------------------------------------- |
| `/`               | Product landing page, features, usage steps, and availability |
| `/privacy`        | Privacy Policy                                                |
| `/terms`          | Terms of Use                                                  |
| `/support`        | Frequently asked questions and support contact                |
| `/delete-account` | Account-deletion instructions and retention details           |

## Technology

- React 19
- Vinext
- Vite
- TypeScript
- Cloudflare development and deployment tooling

## Requirements

- Node.js 22.13 or newer
- npm

Check your installed versions:

```bash
node --version
npm --version
```

## Install dependencies

From the website project directory:

```bash
cd /Users/mreza/Projects/React/childgrowthtracker-website
npm install
```

For a clean, reproducible installation in CI or after cloning the repository,
use:

```bash
npm ci
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open the local address printed in the terminal, normally:

```text
http://localhost:3000
```

Stop the server with `Control + C`.

## Validate changes

Run all project checks before publishing:

```bash
npm run format
npm run lint
npm run build
```

To run the completed production build locally:

```bash
npm run start
```

## Available scripts

| Command          | Description                                     |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Starts the local development server             |
| `npm run format` | Formats project files                           |
| `npm run lint`   | Checks the source code for lint errors          |
| `npm run build`  | Creates the production build                    |
| `npm run start`  | Runs the production build locally with Wrangler |

## Project structure

```text
app/
  page.tsx                  Landing page
  layout.tsx                Shared HTML layout and metadata
  globals.css               Global and responsive styles
  privacy/page.tsx          Privacy Policy
  terms/page.tsx            Terms of Use
  support/page.tsx          Support page
  delete-account/page.tsx   Account-deletion page
components/
  site-header.tsx           Sticky and active site navigation
  site-shell.tsx            Shared footer and legal-page layout
public/
  app-icon.png              Application icon
  growth-analysis.jpg       Landing-page artwork
```

## Updating website content

- Edit the landing-page content in `app/page.tsx`.
- Edit legal text in `app/privacy/page.tsx` and `app/terms/page.tsx`.
- Edit support information in `app/support/page.tsx`.
- Edit deletion instructions in `app/delete-account/page.tsx`.
- Edit shared navigation, footer content, and the support email in
  `components/site-shell.tsx` and `components/site-header.tsx`.
- Edit colors, spacing, typography, and responsive behavior in
  `app/globals.css`.
- Store public images and icons in `public/`.

The current support address is
[`support@childgrowthanalyst.com`](mailto:support@childgrowthanalyst.com).

## Publishing checklist

Before publishing a new version:

1. Review the Privacy Policy, Terms of Use, Support, and Delete Account pages.
2. Confirm the support email and company information are correct.
3. Run formatting, linting, and the production build.
4. Test every route directly, including on a mobile-sized screen.
5. Confirm all navigation, email, Privacy, Support, and deletion links work.
6. Publish the reviewed source from the production branch.
7. Verify every public HTTPS URL after deployment.

Because this website is used for mobile-store compliance, `/privacy`,
`/support`, and `/delete-account` must remain publicly accessible without a
login.

## Contact

Child Growth Analyst is provided by **Pacifica Analytic**.

For support, email
[`support@childgrowthanalyst.com`](mailto:support@childgrowthanalyst.com).
