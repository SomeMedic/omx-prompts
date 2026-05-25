# Prompt Selection Guide

Use this guide when you are not sure which prompt to paste into Codex.

## Choose By Starting State

| Starting state | Best prompt |
|---|---|
| Empty folder and vague idea | `omx-super-universal-autonomous-delivery-prompt.md` |
| Empty folder but detailed docs exist | `universal-codex-product-development-prompt.md` |
| Existing app and clear feature spec | `omx-feature-from-spec-prompt.md` |
| Existing app but task is broad or unclear | `omx-super-universal-autonomous-delivery-prompt.md` |
| Existing frontend needs redesign | `omx-frontend-redesign-apply-prompt.md` |
| External API or service integration | `omx-api-integration-prompt.md` |
| Database/schema/migration work | `omx-database-data-model-prompt.md` |
| Bug | `omx-bugfix-root-cause-prompt.md` |
| Low confidence in quality | `omx-test-and-qa-hardening-prompt.md` |
| Security-sensitive review | `omx-security-review-hardening-prompt.md` |
| Slow app or endpoint | `omx-performance-optimization-prompt.md` |
| Preparing for production-like local readiness | `omx-production-hardening-prompt.md` |
| Preparing a release candidate | `omx-release-readiness-prompt.md` |
| Docs are missing or stale | `omx-docs-onboarding-runbook-prompt.md` |
| Rough product idea needs PRD | `omx-product-discovery-prd-prompt.md` |
| Need codebase audit | `omx-codebase-audit-and-refactor-plan-prompt.md` |

## If Unsure

Use:

```text
omx-super-universal-autonomous-delivery-prompt.md
```

It detects the project state and routes the work.

## Combining Prompts

For a large project, a useful sequence is:

1. `omx-super-universal-autonomous-delivery-prompt.md`
2. `omx-test-and-qa-hardening-prompt.md`
3. `omx-security-review-hardening-prompt.md`
4. `omx-production-hardening-prompt.md`
5. `omx-release-readiness-prompt.md`

For frontend-heavy apps:

1. `universal-codex-product-development-prompt.md`
2. `omx-frontend-redesign-apply-prompt.md`
3. `omx-test-and-qa-hardening-prompt.md`

For integrations:

1. `omx-api-integration-prompt.md`
2. `omx-security-review-hardening-prompt.md`
3. `omx-test-and-qa-hardening-prompt.md`
