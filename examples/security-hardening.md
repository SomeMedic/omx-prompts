# Example: Security Review And Hardening

Use this when the project touches auth, permissions, payments, PII, file uploads, webhooks, admin features, or external APIs.

Recommended prompt:

```text
omx-security-review-hardening-prompt.md
```

Filled placeholders:

```text
- Scope: WHOLE_PROJECT
- Sensitive areas: AUTH, PERMISSIONS, FILE_UPLOADS, API, AUTO_DETECT
- Apply fixes: YES_FOR_SAFE_FIXES
- Autonomy level: high but cautious
```

Expected Codex/OMX behavior:

- inspect sensitive paths
- create SECURITY_REVIEW.md
- create SECURITY_HARDENING_PLAN.md
- fix safe local issues
- add tests where feasible
- run verification
- create SECURITY_REPORT.md

Important:

The prompt should not claim the whole project is secure. It should claim only what was reviewed, fixed, and verified.
