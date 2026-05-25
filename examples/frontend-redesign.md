# Example: Frontend Redesign

Use this when the app works but the UI is weak, generic, inconsistent, or not aligned with the product.

Recommended prompt:

```text
prompts/omx-frontend-redesign-apply-prompt.md
```

Filled placeholders:

```text
- Desired design style: Linear-like calm SaaS interface with Stripe-level polish, dense dashboard ergonomics, subtle borders, restrained color, excellent empty/error/loading states, and compact navigation.
- Product/domain: B2B analytics dashboard
- Target users: account managers and operations leads
- Frontend app path: AUTO_DETECT
- Preserve brand constraints: use existing logo, keep primary blue as an accent only
- Must preserve behavior: YES
- Autonomy level: high
```

Expected Codex/OMX behavior:

- inspect routes, components, and styling system
- create/update DESIGN.md
- define tokens and component rules
- apply redesign in real code
- preserve existing behavior
- verify desktop and mobile
- create REDESIGN_REPORT.md

Style guidance that usually works well:

```text
Do not make a landing page. This is a work tool. Prioritize fast scanning, clear hierarchy, dense tables/forms, strong status indicators, and reliable responsive behavior.
```
