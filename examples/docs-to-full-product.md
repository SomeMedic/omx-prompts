# Example: Documentation To Full Product

Use this when `./docs` already contains a PRD, flows, acceptance criteria, or technical requirements.

Recommended prompt:

```text
universal-codex-product-development-prompt.md
```

Filled placeholders:

```text
- Project name: Vendor Portal
- Project type: SAAS
- Main documentation source: ./docs
- Preferred stack: AUTO_DECIDE
- Target users: vendors and internal operations managers
- Business goal: let vendors manage profiles, documents, invoices, and support requests without emailing operations
- Non-negotiable constraints: must support role-based access, document upload, audit-friendly status history, and responsive desktop/mobile UI
- Timeline expectation: days
- Autonomy level: maximum
```

Expected Codex/OMX behavior:

- read all documentation
- resolve conflicts in DECISIONS.md
- create requirement traceability
- create/update PRD, DESIGN, ARCHITECTURE, IMPLEMENTATION_PLAN, TEST_PLAN
- build the product
- test and verify
- run UltraQA
- create FINAL_REPORT.md

Tip:

Commit the docs before starting:

```bash
git add docs
git commit -m "Add product documentation"
```
