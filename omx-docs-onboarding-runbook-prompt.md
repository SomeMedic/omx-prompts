$ultragoal "Create excellent developer documentation, onboarding docs, and operational runbooks for this project.

PLACEHOLDERS

- Audience: {{NEW_DEVELOPER / AI_AGENT / OPERATOR / PRODUCT_TEAM / ALL}}
- Scope: {{WHOLE_PROJECT_OR_SPECIFIC_APP}}
- Documentation depth: {{PRACTICAL / THOROUGH}}
- Autonomy level: high.

MISSION

Make this project easy for a new developer or AI agent to understand, run, test, modify, and troubleshoot.

Do not invent behavior.
Base documentation on the actual repository.

DISCOVERY

Inspect:

- README
- docs folder
- package files
- scripts
- environment variables
- app structure
- major modules
- tests
- API routes
- frontend routes
- database/migrations
- deployment config
- existing runbooks

DOCUMENTATION OUTPUT

Create or update:

- README.md
- docs/ONBOARDING.md
- docs/ARCHITECTURE.md or ARCHITECTURE.md
- docs/DEVELOPMENT.md
- docs/TESTING.md
- docs/TROUBLESHOOTING.md
- docs/RUNBOOK.md if operational behavior exists
- `.env.example` if env vars exist and it is missing

If the project already has equivalent files, update them instead of duplicating.

README REQUIREMENTS

README.md should include:

- what the project is
- who it is for
- current status
- tech stack
- prerequisites
- setup
- environment variables
- dev commands
- test commands
- build commands
- project structure
- common workflows
- troubleshooting links

ONBOARDING REQUIREMENTS

ONBOARDING.md should include:

- first 30 minutes
- first local run
- where key code lives
- how to make a safe change
- how to run checks
- how to understand failures
- common pitfalls
- glossary of project terms

ARCHITECTURE DOC REQUIREMENTS

Architecture docs should include:

- system overview
- module boundaries
- data flow
- API boundaries
- frontend/backend split
- auth/permissions if applicable
- database model if applicable
- external integrations
- important decisions
- known tradeoffs

DEVELOPMENT DOC REQUIREMENTS

Development docs should include:

- package manager
- scripts
- local environment setup
- coding conventions
- branch/change workflow if inferable
- how to add a feature
- how to add tests
- how to debug

TESTING DOC REQUIREMENTS

Testing docs should include:

- test frameworks
- commands
- what each suite covers
- how to run targeted tests
- how to add tests
- known gaps
- e2e/smoke instructions if applicable

TROUBLESHOOTING REQUIREMENTS

Troubleshooting docs should include:

- install failures
- env var failures
- port conflicts
- database issues
- build failures
- test failures
- auth/session issues if relevant
- external service issues if relevant

RUNBOOK REQUIREMENTS

If operational behavior exists, RUNBOOK.md should include:

- start/stop/restart
- health checks
- logs
- common incidents
- recovery steps
- backup/restore notes if relevant
- deployment notes if inferable

QUALITY RULES

Docs must be accurate to the repo.
Commands must be verified where feasible.
Do not include fake URLs or invented credentials.
Do not over-document obvious code internals.
Prefer practical steps and examples.

VERIFICATION

Run or validate:

- listed install command if feasible
- listed dev/build/test commands where feasible
- links to local files
- env var names against actual code usage

FINAL REPORT

Create DOCS_REPORT.md with:

- docs created/updated
- commands verified
- assumptions
- known gaps
- recommended next docs

Completion requires useful docs grounded in the actual repository."
