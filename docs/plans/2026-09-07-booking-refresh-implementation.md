# Consultation experience implementation plan

**Goal:** Implement the approved audit recommendations with a distinctive, readable consultation journey and restrained GSAP motion.

**Architecture:** Preserve React/Vite prerendering and existing English URLs. Add explicit Spanish equivalents, a deterministic service finder, compact service-aware booking, and preparation resources. Keep external scheduling optional until a real provider URL is supplied. No invented credentials, prices, or testimonials.

**Tech stack:** React, TypeScript, Vite, React Router, existing bilingual content, GSAP ScrollTrigger.

## Independent implementation units

- [x] SEO/localization: App.tsx, entry-server.tsx, lib/i18n.ts, useSiteContent.ts, components/SEO.tsx, LanguageToggle.tsx, lib/seo.ts, scripts/prerender.mjs. URL controls language; add localized links and metadata; export LocaleContent; omit placeholder social schema. Verify static Spanish pages and reciprocal alternates.
- [x] Booking: pages/Booking.tsx and Contact.tsx, components/ServiceCard.tsx, pages/ServiceDetail.tsx. Validate query service, explicit unsure path, compact form and optional details, accessible errors, preparation links, retain request semantics. Verify invalid selection and error handling.
- [x] Finder/resources: new SessionFinder.tsx, Preparation.tsx, Resources.tsx, resource content. Bilingual service choices with explained recommendations, printable service-specific preparation, helpful existing-information-based resources without fabricated authorship. Communicate route interfaces to SEO agent.
- [x] Main visual integration: rewrite Home.tsx using existing portrait/assets, import scoped refresh stylesheet, simplify Nav and improve keyboard behavior. GSAP reveals, subtle scroll-linked ornament, no scroll hijacking, SSR content visible and reduced-motion fallback. Convert internal links to locale-aware component.
- [x] Verification: production build, TypeScript, generated HTML metadata/link checks, desktop and mobile browser journey, review by an independent agent. Fix findings before completion.

## Rollout dependencies

Calendar provider URL and availability, public prices, verified credentials/social links, testimonial provenance, analytics ownership and mailing-list provider require real client data. Expose only functional configured integrations. Document remaining dependencies rather than simulate scheduling or subscriptions.

## Acceptance

Readable at 320/390/768/1280px; no clipped headlines; correct session carried into booking; finder navigable by keyboard; Spanish direct URLs render Spanish content and metadata; preparation links work; booking never claims a confirmed appointment; errors preserve inputs and are announced; reduced motion and failed animation loading leave content accessible. Build and TypeScript pass.
