# Bhavya Parvathi Personal Branding Website

Production-ready personal portfolio for a cybersecurity-focused professional. The content is derived from the attached resume text only, with no invented employers, dates, metrics, tools, or contact details.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style primitives
- Framer Motion
- Lucide React
- next-themes for dark/light mode

## Content Strategy

The resume presents Bhavya as an early-career cybersecurity professional focused on:

- SOC-oriented thinking and alert triage
- Web/API security assessment
- Vulnerability assessment and offensive validation
- Structured reporting, remediation guidance, and risk communication
- Continuous learning toward modern defensive operations

The website intentionally avoids overclaiming production incident response, employer history, exact platforms, or quantitative outcomes because those details are not present in the source resume.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

Run TypeScript:

```bash
npm run type-check
```

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Deployment

The project is ready for Vercel or any Node-compatible host.

Recommended Vercel settings:

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output: Next.js default
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
- Optional contact variables: `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_LINKEDIN_URL`

`NEXT_PUBLIC_SITE_URL` is used by metadata, `robots.txt`, and `sitemap.xml`. If omitted, the app falls back to `https://bhavya-parvathi.dev`.

## SEO and Accessibility

Implemented:

- Static metadata and Open Graph images
- Twitter card metadata
- `robots.txt`
- `sitemap.xml`
- Person structured data
- Semantic sections and headings
- Accessible buttons and labels
- Keyboard-friendly links and controls
- Responsive dark and light themes

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  motion.tsx
  theme-provider.tsx
  theme-toggle.tsx
  ui/
lib/
  site-data.ts
  utils.ts
public/
  profile.jpg
  resume.pdf
  resume.txt
```

## Suggested Resume Improvements

- Add verified email, LinkedIn, GitHub, location, and portfolio links.
- Add education, dates, credential issuers, and certification completion dates.
- Add concrete tools only when accurate: SIEM, EDR, API testing, vulnerability scanning, scripting, cloud, ticketing, and reporting tools.
- Add measurable artifacts where provable: detections, rules, reports, findings, labs, or documented remediations.
- Link case-study artifacts or sanitized reports to strengthen recruiter trust.
