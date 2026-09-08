# Consultation refresh: launch notes

## Implemented

- Portrait-led homepage with warm cream/forest palette, readable serif headings and sans-serif body/form copy.
- GSAP ScrollTrigger section reveals and a subtle scroll-linked geometry detail. Native scrolling remains intact; reduced-motion preference disables the effects. Content is visible before JavaScript and if motion loading fails.
- Early three-interest session finder; explained service suggestions, skip/unsure option, service-aware booking links.
- Compact bilingual booking and contact forms with accessible validation, optional background, timezone detection, preserved selection/draft through language changes, and honest request confirmation.
- Returning-client request path; optional external scheduling URL.
- Seven service-specific preparation guides, three practical session resources, printing, related-service links and visible breadcrumbs.
- Spanish URL equivalents, translated metadata, self canonicals, reciprocal hreflang and bilingual sitemap. Existing English URLs retained.
- False HTTP-success protection and API malformed-body/network-failure handling.

## Run and verify

`npm run dev` starts the development app. `npm run typecheck` checks TypeScript. `npm test` runs isolated mocked form/calendar tests without sending emails. `npm run build` generates static English/Spanish pages. `npm run preview` serves the production build, including extensionless directory routes via preview middleware.

## Configuration before launch

- Existing email delivery requires RESEND_API_KEY, FORM_TO_EMAIL and FORM_FROM_EMAIL on the deployment host. No real inquiry was sent during testing.
- Optional VITE_SCHEDULING_URL must be a public HTTPS booking page chosen by Adriana. Leave blank to retain request-only booking. This is a build-time setting: rebuild after changing it. The site opens the provider's page; availability, payments, reminders and cancellation rules are managed there.
- The newsletter remains an email request to Adriana, clearly labeled as such. Automated lists/sequences require a provider and subscription/consent workflow; no fictitious subscriber database was added.
- Public prices, practitioner training/credentials, social profiles, testimonial approval and the existing 1–2-business-day response commitment need client verification. Current quotes and practitioner claims are retained from existing content, not independently authenticated.
- No analytics provider is configured. Establish Search Console and booking funnel measurement with the client's chosen analytics setup. Never send inquiry contents or personal fields to analytics.
- New guides are general session preparation content, not presented as independently authored/reviewed by Adriana. Have her review before publishing.

## Further visual suggestions

Use a professionally lit portrait facing the camera for stronger personal connection, plus a small set of authentic studio/session photographs. The current design uses the client's existing portrait and service imagery. A short optional introduction video with captions could sit on About; avoid autoplay audio. Keep motion concentrated around section entrances and interactive choices, rather than adding scroll locking or animation to form controls.

## Deployment

Changes are local and reviewable. Production deployment and verification of external email/calendar systems have not been performed in this implementation pass.

## Verification recorded

TypeScript, mocked form/calendar tests, and production build pass. Generated-page validation checked 52 pages, 50 sitemap entries and 1,487 internal links. Browser checks covered desktop and narrow mobile layouts, finder-to-booking preselection, Spanish draft preservation, validation focus, Escape menu behavior, preparation navigation, and direct Spanish returning-client booking with no console errors after the preview routing fix. Real email delivery and external scheduling remain untested until configured.

## Visual blend refinement

User preferred more of the original design. Restored the centered multicolor sacred-geometry hero, original service headline, botanical atmosphere, double-line buttons, pastel staggered seven-service journey, rune dividers and dedicated practitioner portrait section. Retained the session finder, compact booking, guides, localization, SEO and accessible motion. The new portrait-led hero has been replaced by the original-style centered composition.

Confirmed visual preference: centered hero and animated sacred geometry are the user's favorite elements from the original build. Preserve them in future iterations; improve readability and conversion around them rather than replacing the overall composition. Blend verification: TypeScript, tests and build pass; desktop/mobile preview inspected with no console errors and no horizontal overflow at 390px.
