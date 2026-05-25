$ultragoal "Implement or repair an external API integration safely and completely.

PLACEHOLDERS

- Integration name: {{INTEGRATION_NAME}}
- API docs/source: {{API_DOCS_PATH_OR_URL_OR_LOCAL_NOTES}}
- Credentials available: {{YES_NO}}
- Required product behavior: {{REQUIRED_BEHAVIOR}}
- Mock/local mode required: {{YES}}
- Autonomy level: high but safe.

MISSION

Build a robust integration with {{INTEGRATION_NAME}}, including configuration, client/service layer, error handling, tests, local-safe mock mode, documentation, and verification.

Do not expose secrets.
Do not call paid or production-impacting endpoints unless explicitly allowed.
Do not silently fake production completion if credentials are missing.

DISCOVERY

Inspect:

- existing integrations
- API client patterns
- env var conventions
- service boundaries
- error handling
- tests
- docs
- frontend/backend flows that use the integration

DESIGN

Create INTEGRATION_PLAN.md with:

- integration purpose
- required endpoints/actions
- auth/credential requirements
- local/mock strategy
- service/client design
- data mapping
- error handling
- retry/rate-limit considerations
- security considerations
- test plan

IMPLEMENTATION RULES

Create a clear boundary:

- client module
- service wrapper
- types/contracts
- configuration
- mock adapter or local fake
- tests

Handle:

- missing credentials
- invalid credentials where safely detectable
- API errors
- network failures
- rate limits where relevant
- malformed responses
- timeouts if framework supports it
- logging without secrets

CONFIGURATION

Document env vars in `.env.example` and README/docs:

- required variables
- optional variables
- local mock mode variables
- how to obtain credentials, if safely describable

TESTING

Add tests for:

- successful mapping
- missing config
- API error response
- network/client failure
- mock/local mode
- product flow using integration if feasible

If real credentials are unavailable:

- verify mock mode
- verify config validation
- verify adapter boundaries
- document real API verification as blocked

SECURITY

Check:

- no secrets committed
- no secrets logged
- env vars used correctly
- API responses sanitized where needed
- user-controlled input validated before external calls
- webhook signatures if integration uses webhooks

VERIFICATION

Run:

- targeted integration tests
- lint/typecheck/build
- related product smoke tests

FINAL REPORT

Create INTEGRATION_REPORT.md with:

- what was implemented
- config/env vars
- local mock behavior
- tests
- verification commands
- blocked real-service checks if any
- security notes

Only claim production integration complete if real credentials and safe verification were available."
