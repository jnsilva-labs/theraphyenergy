# Theraphy Energy: consultation booking and SEO audit

Reviewed September 7, 2026. Primary business goal confirmed by owner: more consultation bookings.

## Scope and evidence

Reviewed the local React/Vite codebase with an independent code-review agent, inspected the live homepage and booking journey at https://www.theraphyenergy.com on desktop and a 390 × 844 mobile viewport, and delegated production-build and TypeScript verification. A second agent prepared a UI and customer-feature direction.

This is an audit and proposed implementation scope. No production changes or live form submissions were made. Search Console, analytics, email delivery configuration, booking conversion rate, actual search rankings, and field Core Web Vitals were not available. Live robots/sitemap fetches were blocked by browser/network tooling; their local source/build implementation was reviewed, but production crawlability and HTTP status behavior are not certified.

## Recommendation

Preserve the warm paper, botanical imagery, and sacred geometry identity. Make it easier to read, easier to choose a session, and easier to request it. Put the human practitioner and practical session details ahead of repeated decoration. Prioritize qualified consultation requests over newsletter subscriptions or complex customer accounts.

## Findings and fixes

| Priority | Finding and evidence | Impact | Proposed change |
| --- | --- | --- | --- |
| High | Desktop homepage H1 is visibly clipped at 1280px; `src/styles/global.css:379` applies `white-space: nowrap`. | Main offer cannot be read in full. | Allow balanced wrapping, constrain line length, and verify intermediate widths as well as mobile. |
| High | Mobile booking intro occupies nearly the entire initial 844px viewport. `src/pages/Booking.tsx` uses the decorative `page-hero`. | Visitors must scroll past a large introduction to begin the task. | Give booking a compact introduction, clear response expectation, and selected-session summary immediately before the form. |
| High | Service CTAs navigate to bare `/booking`; `src/pages/Booking.tsx:31` initializes Tarot regardless of origin. See `ServiceCard.tsx:50`, `ServiceDetail.tsx:140,232`, and Home service cards. | People must repeat a decision and may request the wrong session. | Carry a validated service slug in the query string; show selected duration/format; keep selection editable. |
| High | `StartHereCTA.tsx:18` sends unsure newcomers to the full booking form. Guidance follows seven homepage service cards. | Visitors unfamiliar with modalities still have to choose unaided. | Move guidance earlier and offer a short preference-based session finder with an explicit “help me choose” path. |
| High | Homepage closing section says “Ready to begin?” and invites booking, but renders only newsletter signup. | Final action does not match the visitor's booking intent. | Add a prominent consultation-request action; give newsletter its own secondary context. |
| Medium | Required goals/time-zone fields plus optional experience/availability make booking feel like intake. Existing response-time copy in `siteConfig.ts:453` is not shown on the form. | Unclear effort and next steps can discourage requests. | Explain the request process, make optional detail visibly optional, prefill an editable time zone after hydration, show 1–2 business-day expectation if still accurate. Keep backend contract consistent. |
| Medium | Booking and contact validation lacks input/error associations and focus to the first invalid field. | Keyboard and assistive-technology users can miss errors. | Add `aria-invalid`, `aria-describedby`, a announced error summary and first-invalid-field focus; preserve entered data on failure. |
| Medium | `src/lib/i18n.ts:23–32` prefers static HTML language over stored language; metadata passed by pages remains English. | Spanish visitors can lose their choice and lack dedicated Spanish search landing pages. | Preserve SSR hydration correctness while restoring preference; create explicit Spanish routes, translated metadata and reciprocal language alternates in a separate SEO phase. |
| Medium | Local `siteConfig.ts:290–292` contains `instagram.com/yourhandle`; SEO schema includes it via `sameAs`. | Placeholder identity information weakens trust. | Omit unavailable social identity until the client supplies a verified URL. Footer currently does not render Instagram. |
| Medium | All services use “Investment shared upon inquiry”; practitioner biography is general. | Visitors cannot easily assess cost, fit, or experience. | Obtain approved prices/ranges, concrete training and experience, session process, and authentic testimonials with permission. Do not invent any of these. |
| Medium | Mobile buttons/filter labels use approximately 0.6–0.68rem in `global.css`; the body font variable uses a decorative serif. | Reading and scanning can be tiring. | Keep expressive serif headings; use the already loaded sans-serif for body/form copy; increase control-label readability and confirm focus/touch behavior. |
| Medium | TypeScript imports an unexported `LocaleContent` in `src/lib/seo.ts:1`. | Production bundling passes while a type check fails. | Export the existing type and include type checking in the verification workflow. |

## Recommended first implementation

1. Fix headline wrapping and establish clearer typography and spacing while retaining current colors and imagery.
2. Shorten the booking hero and show the request process and response expectation close to the form.
3. Add service-aware booking links everywhere, with safe fallback for unknown query values.
4. Place new-client guidance immediately after the hero. A small session finder asks about interests and preferred format, then offers an explained suggestion and links to compare services. It does not diagnose or prescribe treatment; it collects no health history and requires no email.
5. Add a true booking action at the bottom of the homepage; make newsletter secondary.
6. Improve form error accessibility and repair the baseline TypeScript issue.
7. Remove placeholder social schema and check route metadata; retain existing prerendering and canonical URLs.

Acceptance: no clipped titles at desktop/tablet/mobile sizes; booking form begins much earlier on mobile; all service entry points preselect correctly; users can change their selection; unknown service parameters recover gracefully; keyboard operation and error focus work; both existing languages remain usable; build and TypeScript pass. Test success/failure UI locally using controlled responses, without sending a real client inquiry.

## Customer features, ordered by booking value

| Feature | Customer benefit | Scope / dependency | Priority |
| --- | --- | --- | --- |
| Session finder + comparison | Helps first-time visitors understand their choices. | Small deterministic flow using existing service information; client reviews mappings. | First |
| Session preparation guide | Explains what to expect, remote setup, and questions to bring. | Service-specific content approved by Adriana; printable page can ship without accounts. | Next |
| Real availability and scheduling | Removes back-and-forth after the customer is ready. | Client chooses scheduling provider, availability, time-zone behavior, and cancellation/payment rules. | Next |
| Returning-client rebooking | Makes a familiar session easy to request again. | Simple rebooking entry point first; accounts only when there is demonstrated need. | Later |
| Authored educational journal in English and Spanish | Answers pre-booking questions and creates useful search landing pages. | Sustainable editorial ownership, sources and review dates; link each article to relevant services. | Next SEO phase |
| Email preparation sequence | Gives requested guidance before and after a session. | Actual mailing-list provider and consent/unsubscribe workflow; current newsletter endpoint only emails the owner. | Later |

Avoid starting with an AI spiritual adviser, diagnostic quiz, or full client portal. Their complexity is not justified by the current booking journey. Gift sessions/packages depend on confirmed pricing and fulfillment rules.

## SEO plan

### Keep the foundation

The application already produces static rendered English routes, unique page metadata, canonicals, a sitemap, a robots file, service/breadcrumb/business structured data, and a noindex 404 page. Do not rebuild these as if they were absent.

### Improve useful content and local trust

Use each service page to answer fit, session format, duration, process, preparation, pricing if approved, and how to request. Strengthen Adriana's biography with verified first-hand experience and training. Add contextual related-service links and visible breadcrumbs. Confirm Google Business Profile details and Search Console ownership with the client; no invented address or review markup. These priorities follow Google's [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Possible article briefs: “What to expect at your first tarot reading,” “How to prepare for a remote session,” and “Tarot readings and astrology guidance: what each session involves.” These are editorial hypotheses, not keyword-volume or ranking research.

### Give Spanish content its own URLs

Keep existing English URLs stable; add `/es/` equivalents with translated titles/descriptions, self-canonicals, reciprocal `hreflang`, and static output. Match visible content to the URL, and preserve the equivalent page on language change. Google's [localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) requires reciprocal references for linked language variants. Do not point Spanish canonicals to English pages.

### Validate deployment and measure outcomes

Verify production direct-route HTML, robots and sitemap availability, canonical host redirects, true 404 status, and structured data in the relevant tools. Measure real mobile LCP/INP/CLS before claiming a performance gain. Optimize shipped portrait/service image variants and font delivery based on measurements. Existing large unused source images should not be counted as downloaded page weight.

Track booking CTA clicks, finder completion, booking starts, successful requests, and confirmed consultations, segmented by source/device/language. Collect event names and coarse service identifiers, not form text or personal information. Baseline request completion and confirmed consultation rate before comparing changes; more clicks alone is not success.

## Verification recorded

- `npm run build`: passed (client build, SSR build, prerender).
- `./node_modules/.bin/tsc --noEmit`: failed with TS2459, `LocaleContent` not exported.
- No test or lint script configured.
- Browser: live desktop homepage and 390 × 844 homepage/booking inspected; no form submitted.
- Local preview available at http://127.0.0.1:5173/ during review.

## Open client inputs

Verified prices, current response-time commitment, practitioner credentials and testimonial approval, real social links, scheduling preference, and Search Console/analytics access. These are needed for factual content and integrations; layout and booking-navigation repairs do not depend on them.
