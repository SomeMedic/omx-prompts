$ultragoal "Run a release-readiness review and prepare this project for a safe release candidate.

PLACEHOLDERS

- Release name/version: {{RELEASE_NAME_OR_VERSION}}
- Release scope: {{FEATURES_OR_WHOLE_PROJECT}}
- Target environment: {{STAGING / PRODUCTION / APP_STORE / INTERNAL}}
- Deployment action allowed: {{NO_BY_DEFAULT}}
- Autonomy level: high but release-safe.

MISSION

Evaluate whether this project is ready to release, fix safe local release blockers, and produce a release readiness report.

Do not deploy unless explicitly allowed.
Do not perform destructive production actions.

DISCOVERY

Inspect:

- recent changes if git history is available
- package scripts
- tests
- build
- docs
- env config
- migrations
- deployment config
- feature flags
- auth/security-sensitive areas
- known TODOs
- release notes if any

RELEASE READINESS CHECKLIST

Check:

- requirements complete
- build passes
- tests pass
- lint/typecheck pass
- smoke tests pass
- primary user flows work
- migrations are clear and safe if any
- environment variables documented
- external integrations configured or safely mocked
- no obvious secrets committed
- security-sensitive paths reviewed
- performance-sensitive paths acceptable
- docs updated
- rollback plan exists if applicable
- known limitations documented

OUTPUT FILES

Create RELEASE_READINESS.md with:

- release summary
- scope
- readiness status: READY / READY_WITH_RISKS / NOT_READY
- release blockers
- non-blocking risks
- verification commands
- test results
- manual QA checklist
- migration notes
- environment/config notes
- rollback notes
- go/no-go recommendation

Create RELEASE_NOTES.md with:

- highlights
- user-facing changes
- fixes
- technical changes
- known limitations
- upgrade/deployment notes

FIX POLICY

If safe release blockers are local and clear, fix them:

- broken build
- failing tests caused by current code
- missing env example
- stale README commands
- obvious smoke failure
- missing release notes
- minor UI release blockers

Do not:

- deploy
- run production migrations
- rotate secrets
- change release scope without documenting it
- rewrite major architecture during release prep

VERIFICATION

Run:

- install if needed
- lint
- typecheck
- build
- tests
- smoke/e2e checks if available
- browser/API checks for primary flows

If a command fails, determine whether it is:

- pre-existing
- introduced by release changes
- environmental
- a true release blocker

Document clearly.

GO/NO-GO DECISION

Use:

- READY: all critical gates pass, no unresolved blockers
- READY_WITH_RISKS: gates pass but known non-critical risks remain
- NOT_READY: critical blocker remains

FINAL RESPONSE

Summarize:

- readiness status
- blockers fixed
- blockers remaining
- verification evidence
- next action required before release"
