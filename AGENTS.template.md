# Project Agent Contract

This file is the operating contract for Codex, OMX workflows, and any delegated agents working in this repository.

## Source Of Truth

Use the local project documentation as the source of truth.

Primary sources:

- `./docs`
- `README.md`
- product briefs
- API specs
- design notes
- existing code and tests
- package scripts and framework conventions

If sources conflict, use this priority order:

1. explicit acceptance criteria
2. PRD or product requirements
3. user flows and UX requirements
4. technical requirements
5. existing code behavior
6. older or vague notes

Record conflicts and resolutions in `DECISIONS.md`.

## Autonomy Policy

Do not ask routine questions.

Make reasonable reversible decisions yourself, document them in `DECISIONS.md`, and continue working.

Ask the user only for true blockers:

- missing paid API credentials
- destructive actions outside the project directory
- production deployment or external real-world side effects
- irreversible business decisions
- legal/compliance decisions not inferable from docs
- two architecture choices with serious long-term consequences and no clear winner
- a requirement that cannot be satisfied without external access or unavailable information

If a feature depends on missing credentials or external services, create a safe local adapter/mock path, document the missing credential, and continue with everything that can be built locally.

## Definition Of Done

The work is not complete until all applicable gates pass:

- every documented requirement is implemented or explicitly marked blocked
- requirement traceability exists
- `PRD.md` exists or is updated
- `DESIGN.md` exists or is updated for frontend/UI work
- `ARCHITECTURE.md` exists or is updated for non-trivial implementation
- `IMPLEMENTATION_PLAN.md` exists or is updated for broad work
- `TEST_PLAN.md` exists or is updated
- `DECISIONS.md` contains assumptions and tradeoffs
- critical user flows work end to end
- local setup is documented
- lint passes where applicable
- typecheck passes where applicable
- build passes where applicable
- tests pass where applicable
- browser/UI checks pass for frontend work
- API checks pass for backend/API work
- QA pass has been performed
- security-sensitive review has been performed where relevant
- no fake buttons, dead links, placeholder-only screens, TODO-only features, or silent mock production flows remain
- `FINAL_REPORT.md` contains completion evidence

## Required Work Loop

For substantial work, use this loop:

1. inspect docs and repository context
2. identify requirements and acceptance criteria
3. create or update plan/design/architecture/test artifacts
4. implement the smallest coherent milestone
5. run the smallest relevant verification
6. fix failures
7. rerun broader verification
8. update documentation and decisions
9. repeat until all gates pass
10. reconcile final result against requirements

Do not stop after planning.
Do not stop after the first implementation attempt.
Do not report a failure without fixing it if a local fix is possible.

## Team Role Expectations

When using OMX Team mode, staff the work with roles appropriate to the task:

- product-manager: scope, acceptance criteria, requirement traceability
- project-manager: sequencing, dependency management, final assembly
- ux-researcher: user needs, jobs-to-be-done, UX risks
- designer / ux-designer: flows, screens, components, responsive states, visual system
- architect: architecture, data model, integration boundaries, technical risk
- frontend-developer: UI, routing, state, accessibility, responsive behavior
- backend-developer: APIs, persistence, auth, validation, services
- fullstack-developer / executor: cross-cutting implementation
- test-engineer: unit, integration, e2e, smoke, regression tests
- qa-tester: adversarial QA, edge cases, unhappy paths
- verifier: Definition of Done evidence
- security-reviewer: auth, secrets, permissions, injection, unsafe IO/network, PII
- performance-reviewer: latency, rendering, throughput, memory, startup, scale
- documentation-writer: README, runbooks, setup docs, final usage notes

The verifier should not accept completion without concrete evidence.

## Frontend Standards

If the product has a frontend:

- build the actual usable application as the first screen, not a marketing page unless explicitly requested
- follow existing design conventions if present
- make the UI domain-appropriate
- implement responsive desktop and mobile layouts
- include loading, empty, error, success, disabled, and validation states
- make primary flows keyboard-accessible where feasible
- prevent overlapping text and overflowing labels
- use icons for common actions where appropriate
- verify primary flows in a browser

For SaaS, CRM, dashboards, admin, and internal tools, prefer dense, calm, scannable, efficient interfaces over decorative landing-page layouts.

## Backend And API Standards

If the product has backend/API behavior:

- define clear API boundaries
- validate input
- return useful errors
- handle persistence intentionally
- document environment variables
- avoid leaking secrets
- test core endpoints and failure paths
- handle auth and permissions if required
- provide local development setup

## Security Standards

Treat auth, permissions, payments, PII, file uploads, webhooks, admin actions, and external integrations as security-sensitive.

Security review must check:

- secret handling
- environment variable usage
- auth bypasses
- role enforcement
- injection risks
- unsafe file operations
- unsafe network calls
- CORS/session/cookie behavior where relevant
- webhook verification where relevant
- payment/mock separation where relevant
- PII exposure
- logs leaking sensitive data

## Testing Standards

Discover and run available project checks:

- install dependencies
- lint
- format check
- typecheck
- build
- unit tests
- integration tests
- e2e tests
- smoke tests
- API checks
- browser checks

If no tests exist, add focused tests for critical behavior.

If a test cannot be added, document the gap in `TEST_PLAN.md` and `FINAL_REPORT.md`.

## Final Report

For broad work, create or update `FINAL_REPORT.md` with:

- summary of what was built
- implemented features
- architecture summary
- design summary
- commands run
- test results
- QA results
- security review summary where relevant
- requirement traceability
- known limitations
- blocked items
- local run instructions
- recommended next steps

Do not claim completion without evidence.
