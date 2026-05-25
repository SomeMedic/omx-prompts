$ultragoal "Prepare this project for production-quality local readiness.

PLACEHOLDERS

- Scope: {{WHOLE_PROJECT_OR_SPECIFIC_APP}}
- Deployment target: {{VERCEL / RAILWAY / FLY / AWS / DOCKER / SELF_HOSTED / UNKNOWN}}
- Environment: {{DEV / STAGING / PROD_READY_LOCAL}}
- Apply safe fixes: {{YES}}
- Autonomy level: high but cautious.

MISSION

Harden the project so it is closer to production-ready: configuration, build, errors, logging, health checks, docs, tests, security-sensitive defaults, and local run reliability.

Do not deploy to production.
Do not perform destructive infrastructure actions.

DISCOVERY

Inspect:

- README and docs
- package scripts
- environment variable usage
- build config
- runtime config
- Docker/deployment files if any
- API health/startup behavior
- logging and errors
- auth/session config if any
- database setup/migrations
- tests
- CI config if any

READINESS ARTIFACTS

Create PRODUCTION_READINESS.md with:

- current readiness summary
- required env vars
- build/run commands
- deployment assumptions
- health checks
- database/migration notes
- security-sensitive settings
- logging/error handling notes
- operational risks
- readiness checklist

Create or update `.env.example` if applicable.
Create or update README setup instructions if missing or stale.

HARDENING AREAS

Improve safe local issues:

- missing env documentation
- brittle startup
- unclear scripts
- missing build command
- missing health endpoint if backend and appropriate
- weak error handling around startup/config
- unsafe default config
- logs that leak secrets
- missing local setup docs
- missing smoke test script if easy
- Docker/build docs if target suggests it

Do not:

- add heavy infrastructure unnecessarily
- change hosting provider assumptions without docs
- deploy
- rotate secrets
- run destructive migrations against production
- change public behavior without tests

CONFIGURATION

Ensure:

- required env vars are documented
- optional env vars are marked optional
- secrets are not committed
- local defaults are safe
- missing critical config fails clearly
- production-like assumptions are documented

BUILD AND STARTUP

Verify:

- install works
- build works
- app starts locally where feasible
- health/smoke path works
- common failure messages are understandable

TESTING

Run:

- lint
- typecheck
- build
- tests
- smoke/startup checks

If checks fail before changes, document baseline failure separately.
Fix local issues when feasible.

SECURITY-SENSITIVE READINESS

Review:

- secret handling
- env examples
- auth/session config
- CORS/cookies where relevant
- error exposure
- logs
- admin routes
- external service mocks vs real production usage

FINAL REPORT

Create PRODUCTION_HARDENING_REPORT.md with:

- hardening changes made
- commands run
- readiness checklist status
- remaining blockers
- deployment notes
- recommended next steps

Completion means locally production-shaped and documented, not actually deployed."
