$ultragoal "Redesign and apply a new frontend design system to this existing application.

PLACEHOLDERS

- Desired design style: {{DESIRED_STYLE_DESCRIPTION_OR_REFERENCE_APPS}}
- Product/domain: {{PRODUCT_DOMAIN_OR_AUTO_DETECT}}
- Target users: {{TARGET_USERS_OR_AUTO_DETECT}}
- Frontend app path: {{FRONTEND_PATH_OR_AUTO_DETECT}}
- Preserve brand constraints: {{BRAND_COLORS_LOGOS_TYPOGRAPHY_OR_NONE}}
- Must preserve behavior: {{YES}}
- Autonomy level: high.

PRIMARY MISSION

Create a polished, coherent, production-quality frontend redesign and apply it to the existing application without breaking product behavior.

The goal is not to make a decorative mockup.
The goal is to ship the redesign into the real frontend codebase.

DESIGN INPUT

Use the desired style as creative direction:

{{DESIRED_STYLE_DESCRIPTION_OR_REFERENCE_APPS}}

If reference apps are named, infer their relevant qualities:

- layout density
- navigation style
- color behavior
- typography feel
- spacing
- component shape
- interaction style
- information hierarchy
- empty/loading/error state treatment
- motion restraint or expressiveness

Do not copy trademarked assets, logos, text, or exact proprietary designs.
Translate the style into an original design system appropriate for this product.

DISCOVERY

Before editing:

1. Identify the frontend framework, routes, components, styling system, package manager, and design dependencies.
2. Inspect existing UI screens, layouts, navigation, forms, tables, dashboards, modals, and responsive behavior.
3. Identify primary user flows and screens that must be preserved.
4. Identify shared components and styling entry points.
5. Identify any existing design tokens, theme files, Tailwind config, CSS variables, component library, or UI kit.
6. Identify test/build/lint commands.
7. If a dev server is needed, plan to run it and verify in browser after changes.

DESIGN ARTIFACTS

Create or update DESIGN.md with:

- design goals
- interpretation of the desired style
- product-specific design principles
- color palette
- typography scale
- spacing scale
- radius and border rules
- elevation/shadow rules
- icon usage
- component inventory
- screen-by-screen redesign plan
- responsive behavior
- loading/empty/error/success states
- accessibility considerations
- visual QA checklist

Create or update DECISIONS.md with:

- style interpretation decisions
- tradeoffs
- rejected approaches
- assumptions
- constraints discovered in the codebase

REDESIGN IMPLEMENTATION RULES

Apply the redesign in code.

Preserve:

- existing routes
- existing data flow
- existing business logic
- existing API calls
- existing auth behavior
- existing form behavior
- existing tests unless they are styling-specific and legitimately need updates

Improve:

- visual hierarchy
- spacing
- typography
- color usage
- component consistency
- responsive layout
- empty/loading/error states
- table and form usability
- navigation clarity
- button/icon affordances
- accessibility labels
- focus states
- hover/active states

Do not:

- replace the app with a landing page
- hide unfinished behavior behind pretty surfaces
- remove important controls
- break primary flows
- introduce fake data where real data exists
- create nested cards inside cards
- let text overlap or overflow
- make the whole app a one-color theme
- overuse gradients or decorative blobs
- add heavy dependencies without clear need

STYLE SYSTEM REQUIREMENTS

Prefer a central design system:

- CSS variables, theme tokens, Tailwind theme, or equivalent local pattern
- reusable component primitives where appropriate
- consistent buttons, inputs, cards, panels, navigation, tables, tabs, modals, toasts, badges, empty states
- predictable spacing and typography
- responsive constraints for fixed-format UI

If the app already has a component system, extend it.
If not, create the smallest useful system without over-abstracting.

DOMAIN-SPECIFIC GUIDANCE

If this is SaaS, CRM, admin, operations, analytics, healthcare, finance, logistics, or internal tooling:

- prioritize dense but readable information
- avoid oversized hero sections
- avoid marketing-style layouts
- use clear navigation and scanning patterns
- make repeated workflows efficient
- make tables, filters, forms, and status indicators excellent

If this is consumer, creator, marketplace, education, travel, wellness, or media:

- prioritize clarity, warmth, conversion, and delightful flow
- keep content hierarchy strong
- make mobile screens excellent

If this is a game or creative tool:

- prioritize interaction feedback, state clarity, and expressive visuals
- verify the primary loop visually and interactively

RESPONSIVE REQUIREMENTS

Verify key screens at:

- mobile width
- tablet width if relevant
- desktop width
- wide desktop if relevant

Ensure:

- no overlapping UI
- no clipped text
- no unusable controls
- navigation remains reachable
- modals fit
- forms remain usable
- tables/cards have responsive alternatives

ACCESSIBILITY REQUIREMENTS

Improve where feasible:

- semantic HTML
- labels for inputs
- accessible button names
- focus visibility
- keyboard navigation for primary actions
- contrast
- error messages associated with fields
- reduced ambiguity in icon-only controls

VERIFICATION

Run:

- install if needed
- lint
- typecheck
- build
- existing tests
- frontend smoke checks
- browser verification of primary screens

If tests fail because of legitimate design changes, update tests carefully.
If tests fail because behavior broke, fix behavior.

VISUAL QA

Before final completion:

1. Open the app locally.
2. Inspect primary screens.
3. Check mobile and desktop.
4. Check loading/empty/error states if reachable.
5. Check forms, buttons, navigation, modals, and tables.
6. Fix visual defects.
7. Repeat until the UI is coherent and usable.

FINAL OUTPUT

Create REDESIGN_REPORT.md with:

- style interpretation
- files changed
- design system summary
- screen-by-screen changes
- verification commands
- browser/visual QA results
- known limitations
- recommended next design improvements

Completion requires working code, not only a design plan.
Do not stop until the redesign is implemented, verified, and documented."
