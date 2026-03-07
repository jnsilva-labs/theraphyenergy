# SEO Overhaul Design

## Goal

Upgrade the site so it can rank more effectively for:

- tarot readings miami
- spiritual healing miami
- astrology guidance

Primary audience is Miami locals, with worldwide/remote optimization as secondary support.

## Current Constraint

The site is a client-rendered React SPA. On initial fetch, multiple routes return the same default HTML title and description. That limits the reliability of route-level metadata, canonical tags, and content visibility for crawlers.

## Approved Direction

1. Move the site to statically prerendered route output while preserving the current design and URLs.
2. Add route-specific metadata and structured data.
3. Strengthen keyword targeting and local intent in titles, descriptions, headings, and internal linking.
4. Replace the static sitemap with generated output based on real routes.

## Architecture

- Add a server render entry for the existing React app using `StaticRouter`.
- Generate static HTML for all primary routes and service detail pages during build.
- Keep the client app for hydration/navigation.
- Remove the catch-all SPA rewrite once real route HTML exists.

## SEO Upgrades

- Homepage: target tarot readings + spiritual healing in Miami
- Services hub: target the broader service cluster and internal linking
- Tarot service page: primary page for tarot readings miami
- Healing-oriented service page: support spiritual healing miami
- Astrology guidance service page: primary page for astrology guidance
- Add LocalBusiness / ProfessionalService schema
- Add FAQ schema
- Add Breadcrumb schema on service pages
- Add route-specific canonicals, Open Graph, and Twitter metadata
- Add noindex on 404

## Verification

- Confirm each route returns distinct prerendered HTML on direct fetch
- Confirm `/api/forms` still resolves to the Vercel function
- Confirm sitemap contains the real route set
- Confirm production build succeeds
