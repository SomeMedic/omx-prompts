# Example: Empty Folder To Complete Product

Use this when the folder has no code and no documentation yet.

Recommended prompt:

```text
omx-super-universal-autonomous-delivery-prompt.md
```

Filled placeholders:

```text
- Project or task name: Clinic Follow-Up Hub
- Initial goal or idea: Build a SaaS app that helps small clinics track patient follow-up tasks after visits.
- Desired outcome: FULL_PRODUCT
- Documentation path: AUTO_DETECT
- Existing project path: current directory
- Preferred stack: AUTO_DECIDE
- Target users: clinic owners, care coordinators, and front-desk staff
- Business/product goal: reduce missed follow-ups and give staff a clear daily queue
- Desired design style if frontend: calm clinical SaaS dashboard, dense but readable, clean forms, subtle color, high trust, not playful
- External services/integrations: UNKNOWN
- Autonomy level: maximum, except for true blockers
- Delivery standard: production-quality local completion with verification evidence
```

Expected Codex/OMX behavior:

- detect empty folder
- interview one question at a time if needed
- create PRD, DESIGN, ARCHITECTURE, TEST_PLAN, DECISIONS
- scaffold the app
- implement the product
- add tests
- run QA
- produce FINAL_REPORT.md

Useful follow-up instruction if Codex asks too many questions:

```text
Make reasonable product assumptions, document them in DECISIONS.md, and continue unless a true blocker appears.
```
