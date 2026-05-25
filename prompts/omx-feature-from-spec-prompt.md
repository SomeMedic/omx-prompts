$ultragoal "Implement a complete feature from specification in this existing project.

PLACEHOLDERS

- Feature name: {{FEATURE_NAME}}
- Feature specification source: {{FEATURE_SPEC_PATH_OR_TEXT}}
- Product area: {{PRODUCT_AREA}}
- Required user-facing behavior: {{REQUIRED_BEHAVIOR}}
- Non-goals: {{NON_GOALS}}
- Autonomy level: high.

MISSION

Implement {{FEATURE_NAME}} end to end according to the specification.

This includes product interpretation, design/UX if user-facing, architecture, implementation, tests, QA, documentation, and final verification.

Do not stop with only a plan.
Do not implement a partial skeleton unless blocked by a true blocker.

DISCOVERY

Before implementation:

1. Inspect the feature specification.
2. Inspect nearby code and existing patterns.
3. Identify frontend, backend, database, API, auth, and test areas touched.
4. Identify existing components, hooks, services, models, DTOs, routes, controllers, stores, schemas, or utilities to reuse.
5. Identify package scripts and verification commands.
6. Identify acceptance criteria and edge cases.
7. Identify possible regressions.

PRODUCT CLARITY

Create or update FEATURE_PLAN.md with:

- feature summary
- users and use cases
- in-scope behavior
- out-of-scope behavior
- acceptance criteria
- UX states
- data requirements
- API/contracts if applicable
- test plan
- rollout or migration notes if applicable

If the feature is small, keep FEATURE_PLAN.md concise.
If the feature is broad, make it detailed enough for independent verification.

IMPLEMENTATION RULES

Follow existing project conventions.
Prefer local helpers and framework-native patterns.
Avoid speculative abstractions.
Keep changes scoped to the feature.
Preserve unrelated user changes.
Do not silently change existing behavior outside the feature unless required, and document any intentional behavior changes.

If frontend is involved:

- implement real UI states
- preserve existing design language unless the spec requests redesign
- handle loading, empty, error, success, disabled, and validation states
- ensure responsive behavior
- prevent text overflow and overlapping UI
- verify primary flow in browser

If backend/API is involved:

- validate inputs
- handle errors intentionally
- add or update API contracts
- enforce permissions if relevant
- update data models/migrations if needed
- test success and failure paths

If database changes are involved:

- create migrations using local patterns
- consider existing data
- add seed/demo data if useful
- document migration steps
- test migration or schema behavior if feasible

TESTING

Add or update tests for:

- core happy path
- important unhappy paths
- validation
- permissions if relevant
- integration boundaries
- UI behavior if frontend is involved
- regression risk areas

Run the smallest relevant checks after each major change.
Run broader verification before final completion.

QA PASS

Run an adversarial QA pass:

- missing edge cases
- broken navigation
- stale state
- invalid inputs
- permission bypasses
- API error handling
- empty data
- loading states
- mobile layout if frontend
- regression against adjacent features

Fix issues found.

FINAL VERIFICATION

Before finishing:

- reconcile implementation against the feature spec
- run lint/typecheck/build/tests where applicable
- run browser/API smoke verification where applicable
- update docs if setup, commands, env vars, routes, or usage changed

FINAL REPORT

Create FEATURE_REPORT.md with:

- what was implemented
- files changed by area
- acceptance criteria status
- verification commands and results
- QA findings and fixes
- known limitations
- follow-up recommendations

Only claim completion when the feature works end to end and verification evidence exists."
