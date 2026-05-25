# Example: External API Integration

Use this when a feature depends on Stripe, OpenAI, Google, email, storage, CRM, analytics, or any other external service.

Recommended prompt:

```text
omx-api-integration-prompt.md
```

Filled placeholders:

```text
- Integration name: Stripe Billing
- API docs/source: ./docs/integrations/stripe-billing.md
- Credentials available: NO
- Required product behavior: users can select a plan, start checkout, see billing status, and handle webhook-updated subscription state
- Mock/local mode required: YES
- Autonomy level: high but safe
```

Expected Codex/OMX behavior:

- inspect existing integration patterns
- create INTEGRATION_PLAN.md
- add env var documentation
- create client/adapter boundary
- implement local/mock mode if credentials are missing
- add tests for mapping, errors, and missing config
- document real-service verification as blocked if credentials are absent
- create INTEGRATION_REPORT.md

Important:

The correct behavior is not to fake production success. The correct behavior is a safe local implementation plus clear blocked real-service verification.
