$ultragoal "Harden this project with meaningful tests, QA checks, and verification workflows.

PLACEHOLDERS

- Scope: {{WHOLE_PROJECT_OR_SPECIFIC_AREA}}
- Priority flows: {{CRITICAL_USER_FLOWS}}
- Test depth: {{SMOKE / BALANCED / THOROUGH}}
- Include e2e/browser tests: {{YES_NO_AUTO}}
- Autonomy level: high.

MISSION

Improve test coverage and QA confidence for the project without creating brittle or low-value tests.

Focus on critical product behavior, regression-prone areas, and verification commands that future agents and developers can run.

DISCOVERY

Inspect:

- package manager and scripts
- existing test framework
- existing test patterns
- app architecture
- critical user flows
- API endpoints
- data models
- auth/permissions
- frontend routes and components
- known TODOs or fragile areas
- CI/deployment config if present

TEST STRATEGY

Create or update TEST_PLAN.md with:

- testing goals
- critical flows
- existing coverage summary
- test gaps
- proposed unit tests
- proposed integration tests
- proposed e2e/smoke tests
- manual QA checklist
- commands to run
- known limitations

TEST IMPLEMENTATION RULES

Add tests that verify real behavior.

Prefer:

- stable public interfaces
- user-visible behavior
- API contracts
- validation boundaries
- permission boundaries
- important state transitions
- regression tests for known risks

Avoid:

- snapshot-only tests with low signal
- brittle implementation-detail tests
- testing framework internals
- over-mocking the behavior under test
- huge tests that are impossible to debug

FRONTEND TESTING

If frontend exists, cover:

- primary navigation
- core forms
- loading states
- empty states
- error states
- validation
- disabled states
- success states
- responsive layout smoke checks where feasible
- accessibility basics for primary controls

Use browser/e2e smoke tests if the app has critical user flows and tooling is available or easy to add.

BACKEND/API TESTING

If backend/API exists, cover:

- happy path endpoints
- validation errors
- auth required
- permission denied
- not found
- persistence behavior
- idempotency where relevant
- external service adapter mocks

DATABASE TESTING

If database exists, cover:

- model/schema assumptions
- migrations if feasible
- seed/demo data path
- important queries
- not-found and empty states

QA HARDENING

Create QA_CHECKLIST.md with:

- smoke test path
- user-flow checklist
- browser/device checklist
- API checklist
- security-sensitive checklist
- regression checklist
- release-blocker checklist

VERIFICATION COMMANDS

Add or improve scripts where appropriate:

- lint
- typecheck
- build
- test
- test:unit
- test:integration
- test:e2e
- smoke

Do not invent scripts that do not work.
Verify scripts after adding them.

EXECUTION

Implement the highest-value tests first.
Run targeted tests as you add them.
Fix failing tests if the product behavior is wrong.
If existing behavior is intentionally different from expected, document the decision.

FINAL QA PASS

Run:

- lint/typecheck/build as applicable
- test suites added or changed
- smoke/e2e if applicable
- manual/browser QA checklist where applicable

FINAL REPORT

Create QA_HARDENING_REPORT.md with:

- coverage added
- test files changed
- commands run
- results
- remaining test gaps
- flaky or risky areas
- recommended next tests

Do not claim quality improved unless verification commands pass or failures are clearly documented as pre-existing/blocking."
