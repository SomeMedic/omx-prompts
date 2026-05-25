# Prompt Selection Guide

Use this guide when you are not sure which prompt to paste into Codex.

## Choose By Starting State

| Starting state | Best prompt |
|---|---|
| Empty folder and vague idea | `prompts/omx-super-universal-autonomous-delivery-prompt.md` |
| Empty folder but detailed docs exist | `prompts/universal-codex-product-development-prompt.md` |
| Existing app and clear feature spec | `prompts/omx-feature-from-spec-prompt.md` |
| Existing app but task is broad or unclear | `prompts/omx-super-universal-autonomous-delivery-prompt.md` |
| Existing frontend needs redesign | `prompts/omx-frontend-redesign-apply-prompt.md` |
| External API or service integration | `prompts/omx-api-integration-prompt.md` |
| Database/schema/migration work | `prompts/omx-database-data-model-prompt.md` |
| Bug | `prompts/omx-bugfix-root-cause-prompt.md` |
| Low confidence in quality | `prompts/omx-test-and-qa-hardening-prompt.md` |
| Security-sensitive review | `prompts/omx-security-review-hardening-prompt.md` |
| Slow app or endpoint | `prompts/omx-performance-optimization-prompt.md` |
| Preparing for production-like local readiness | `prompts/omx-production-hardening-prompt.md` |
| Preparing a release candidate | `prompts/omx-release-readiness-prompt.md` |
| Docs are missing or stale | `prompts/omx-docs-onboarding-runbook-prompt.md` |
| Rough product idea needs PRD | `prompts/omx-product-discovery-prd-prompt.md` |
| Need codebase audit | `prompts/omx-codebase-audit-and-refactor-plan-prompt.md` |

## If Unsure

Use:

```text
prompts/omx-super-universal-autonomous-delivery-prompt.md
```

It detects the project state and routes the work.

## Combining Prompts

For a large project, a useful sequence is:

1. `prompts/omx-super-universal-autonomous-delivery-prompt.md`
2. `prompts/omx-test-and-qa-hardening-prompt.md`
3. `prompts/omx-security-review-hardening-prompt.md`
4. `prompts/omx-production-hardening-prompt.md`
5. `prompts/omx-release-readiness-prompt.md`

For frontend-heavy apps:

1. `prompts/universal-codex-product-development-prompt.md`
2. `prompts/omx-frontend-redesign-apply-prompt.md`
3. `prompts/omx-test-and-qa-hardening-prompt.md`

For integrations:

1. `prompts/omx-api-integration-prompt.md`
2. `prompts/omx-security-review-hardening-prompt.md`
3. `prompts/omx-test-and-qa-hardening-prompt.md`
