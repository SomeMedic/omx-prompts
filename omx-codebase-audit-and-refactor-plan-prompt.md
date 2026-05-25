$ultragoal "Audit this codebase and produce a prioritized refactor and quality-improvement plan, then apply only approved safe improvements if explicitly requested.

PLACEHOLDERS

- Audit scope: {{WHOLE_REPO_OR_SPECIFIC_AREA}}
- Main concern: {{MAINTAINABILITY / BUGS / ARCHITECTURE / TECH_DEBT / UX / TESTS / PERFORMANCE / SECURITY / ALL}}
- Apply fixes now: {{NO_BY_DEFAULT}}
- Risk tolerance: {{LOW / MEDIUM / HIGH}}

MISSION

Perform a thorough codebase audit focused on practical product and engineering quality.

By default, produce a plan and do not perform broad refactors.
If Apply fixes now is YES, only apply safe, scoped, high-confidence improvements with verification.

DISCOVERY

Inspect:

- repository structure
- package manager and scripts
- framework conventions
- main app entry points
- routing
- data flow
- API boundaries
- state management
- database/model layer
- tests
- error handling
- auth/security-sensitive code
- performance-sensitive paths
- build/deployment config
- documentation

AUDIT DIMENSIONS

Assess:

- architecture clarity
- module boundaries
- duplication
- dead code
- overly complex files/functions
- inconsistent patterns
- weak typing
- fragile state management
- poor error handling
- missing validation
- missing tests
- flaky tests
- build/lint/typecheck issues
- dependency risk
- UI inconsistencies if frontend exists
- security-sensitive gaps
- performance hazards
- onboarding/documentation gaps

EVIDENCE REQUIREMENTS

Each finding should include:

- title
- severity: P0/P1/P2/P3
- category
- affected files
- concrete evidence
- user/product impact
- recommended fix
- estimated effort
- verification method

Avoid vague findings.
Do not list style preferences as defects unless they cause real maintenance or product risk.

OUTPUT FILES

Create CODEBASE_AUDIT.md with:

- executive summary
- top risks
- prioritized findings
- quick wins
- deeper refactors
- test gaps
- security-sensitive gaps
- performance concerns
- documentation gaps
- recommended sequencing

Create REFACTOR_PLAN.md with:

- goals
- non-goals
- milestones
- step-by-step safe refactor path
- blast radius per step
- required tests per step
- rollback strategy
- verification commands

CREATE A SCORECARD

Add a scorecard with:

- architecture
- maintainability
- test coverage
- developer experience
- frontend UX quality if applicable
- backend/API robustness if applicable
- security posture
- performance posture
- documentation
- release readiness

Use 1-5 scores and explain each score briefly.

IF APPLY FIXES NOW IS YES

Apply only improvements that are:

- clearly beneficial
- low-risk
- locally verifiable
- not broad rewrites
- not behavior-changing unless required to fix a bug

Examples:

- remove dead imports
- fix obvious lint/type errors
- add missing error handling around a narrow path
- add focused tests around risky behavior
- extract tiny repeated helper only when duplication is meaningful
- improve docs for discovered commands

Do not:

- redesign architecture wholesale
- rename large directories
- change public APIs without a migration path
- change business logic without tests
- perform cosmetic churn

VERIFICATION

Run available checks:

- lint
- typecheck
- build
- tests
- targeted tests for touched areas

If checks fail before any changes, document baseline failures separately from introduced failures.

FINAL RESPONSE

Summarize:

- audit files created
- top 5 risks
- whether fixes were applied
- verification commands and results
- recommended next action"
