# UI/UX direction and customer feature roadmap

Date: September 7, 2026. Status: proposed direction for review; no UI implementation in this document. Based on Home, Services, ServiceDetail, Booking, shared components, styles, and bilingual content. Browser verification is covered by the main audit.

Confirmed business priority: more consultation bookings. Optimize the service-to-request journey first; evaluate resource and retention features by how they support that goal.

## Recommendation: a warm, personal studio experience

Keep the paper, forest, muted rose, and restrained sacred geometry that give the site its identity. Introduce clearer typography, real practitioner photography earlier in the journey, and service choices organized around what visitors want help exploring. Make the primary conversion a clear session request until actual scheduling is integrated.

Three possible approaches:

| Approach | Benefit | Tradeoff |
| --- | --- | --- |
| Polish the current design | Smallest scope: repair clipping, booking continuity, reading size, and form feedback | The long service timeline and decorative density remain |
| Personal studio experience — recommended | Stronger practitioner connection and easier service selection while retaining the brand | Requires homepage and service hierarchy changes and client review of copy/images |
| Interactive customer hub | Adds ongoing resources, scheduling, and repeat engagement | More content upkeep, provider dependencies, and operational work; build after the core journey is reliable |

## Problems supported by the code

1. **The main headline cannot wrap above 720px.** `src/styles/global.css` sets `.hero-title { white-space: nowrap; }`; a long uppercase title plus ornaments exceeds the available width. Both body and app shell hide horizontal overflow. Allow wrapping at all widths, set an intentional readable line length, and keep decoration outside the text flow.
2. **Choosing a service is discarded.** Home, ServiceCard, and ServiceDetail all link to bare `/booking`, while Booking initializes the first service. Carry a validated service slug into booking and show its title, duration, format, and existing inquiry-based pricing language before the form. Invalid slugs should fall back to an explicit choice; “help me choose” should not silently select Tarot.
3. **New visitors must pass seven alternating service cards before “Start Here.”** That CTA then leads to the same generic booking form. Put short service-choice assistance near the top and make the full collection available through Services.
4. **Practical decision information appears late.** Service format, duration, and pricing are below lengthy detail sections. Place these alongside the first service CTA; preserve the existing “Investment shared upon inquiry” until the client supplies approved pricing.
5. **The booking form follows a large hero and separate ritual section.** Place the selected-service summary and form near the top; use a compact adjacent “What happens next” panel. Existing `booking.whatNextSteps` copy is not rendered, including the stated response window; confirm that window operationally before displaying it.
6. **Body and UI text use the same expressive serif.** `--font-sans` points to Cormorant Garamond even though Source Sans 3 is loaded. Use Source Sans 3 for forms, navigation, metadata, and body text; retain expressive headings. Several mobile rules reduce text to 0.6–0.8rem; prioritize readable body text and sufficiently sized controls.
7. **Form validation is visual only.** Booking errors are not linked to inputs with `aria-describedby` or `aria-invalid`, and invalid submission does not move focus to an error summary or first invalid field. Add accessible error associations and an announced submission failure. The booking disclaimer remains English in Spanish mode.
8. **The final homepage CTA promises booking but presents only newsletter signup.** Offer the booking action directly; position email updates as a distinct secondary choice with a concrete, client-approved content promise.

## Proposed page structure

**Homepage:** compact navigation → readable service/location proposition and real practitioner image → primary “Request a session” and secondary “Help me choose” → three visitor intentions linking to relevant services → short introduction to Adriana → comparable service overview → how a session request works → approved client reflections → focused FAQ → direct booking CTA and separate updates signup.

Intent labels must describe preferences such as reflection, patterns, or ongoing coaching, not diagnose visitors or imply guaranteed treatment outcomes. Preserve access to all seven services and all existing service URLs.

**Service page:** service name and grounded description → format, duration, inquiry-based price → request action → what happens, who it is for, preparation, and boundaries → related services chosen by relevant tags instead of simply the first three in the array.

**Booking:** selected service with change control → concise labeled form → optional background fields → next-step expectations and relevant policies → submitted request confirmation. Preserve entered values after failures; prevent repeat submissions while pending. Keep the current request flow usable if future scheduling tools fail.

Acceptance checks: no cropped text or horizontal overflow at 320, 390, 768, 1024, and 1440px; keyboard completion with announced errors; English and Spanish layouts; reduced-motion behavior; selected service retained from every booking CTA; inquiry success and failure verified without contacting real customers; maintain existing indexed routes.

## Three phased customer features

### Phase 1 — Help me choose

A short optional selector asks about session preference, preferred format, and whether the visitor wants a one-time conversation or ongoing support. Explain one or two relevant services and link directly to their details or a preselected request form. Always allow skipping and “I'm not sure.” This is navigation assistance, not a clinical assessment.

Use transparent rules derived from existing service metadata; no AI provider or account required. Keep answers in component memory and do not send free-form personal disclosures to analytics. The client must validate the service matching rules. Tradeoff: small implementation and upkeep burden, but only useful if service distinctions are clear. Measure selector completion and subsequent booking starts using aggregate events, without answer text.

### Phase 2 — Scheduling and preparation companion

Connect an owner-approved scheduling provider with timezone display, availability, rescheduling, and reminders. Give each service a preparation page and show the correct link in confirmation. Keep the existing inquiry route for visitors who need help choosing.

Dependencies: real availability, approved prices if collecting payment, cancellation policy, delivery ownership, and tested provider confirmation. Show “confirmed” only after confirmed scheduling, not after an inquiry. Tradeoff: reduces scheduling back-and-forth but introduces fees and third-party reliability/accessibility concerns. Measure request-to-confirmed-session conversion and support questions before and after launch.

### Phase 3 — A small practitioner-authored resource library

Publish useful, service-specific pieces: what to expect from a first tarot session, how to prepare questions, remote-session preparation, and reflection prompts after a session. Provide relevant internal links and optional saved/downloadable prompts without requiring an account. Create both language versions where the practice can maintain them.

Dependencies: Adriana's authorship/review, an editing workflow, and a realistic publishing commitment. Use existing service topics, descriptive titles, and substantive original answers; avoid mass-produced location pages or unsupported health claims. Tradeoff: supports discovery and repeat visits but requires sustained editorial work. Measure qualified search visits, resource-to-service navigation, and repeat engagement, not page count.

Defer an account-based journal, membership, or AI spiritual-advice chatbot until repeat customer demand is established. These add sensitive-data handling and ongoing support work that the current request-based site does not need to deliver the proposed improvements.

## Client decisions needed before larger implementation

- Choose the visual approach; recommended option is the personal studio experience.
- Define how successful consultation bookings will be counted: submitted requests and practitioner-confirmed appointments should remain separate funnel stages.
- Confirm authentic images, approved claims and testimonials, response time, location/remote availability, and whether pricing can be public.
- Establish who will maintain scheduling and publish resources.

These are proposed designs and product hypotheses, not claims that conversion or search ranking gains have already been measured.
