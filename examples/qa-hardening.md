# Example: QA And Test Hardening

Use this when a generated or existing project works superficially but needs stronger confidence.

Recommended prompt:

```text
omx-test-and-qa-hardening-prompt.md
```

Filled placeholders:

```text
- Scope: WHOLE_PROJECT
- Priority flows: login, dashboard loading, create/edit/delete project, search/filter, settings update
- Test depth: THOROUGH
- Include e2e/browser tests: AUTO
- Autonomy level: high
```

Expected Codex/OMX behavior:

- inspect existing test framework
- create/update TEST_PLAN.md
- add focused high-value tests
- add QA_CHECKLIST.md
- add or improve scripts
- run verification
- create QA_HARDENING_REPORT.md

Good use cases:

- before sharing an AI-built app
- before a demo
- before release readiness
- after a large feature implementation
