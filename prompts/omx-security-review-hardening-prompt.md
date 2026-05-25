$ultragoal "Perform a security review and hardening pass for this project.

PLACEHOLDERS

- Scope: {{WHOLE_PROJECT_OR_SPECIFIC_AREA}}
- Sensitive areas: {{AUTH / PAYMENTS / PII / FILE_UPLOADS / WEBHOOKS / ADMIN / API / AUTO_DETECT}}
- Apply fixes: {{YES_FOR_SAFE_FIXES}}
- Autonomy level: high but cautious.

MISSION

Review the project for practical security risks, fix safe local issues, add tests where feasible, and document remaining risks.

Do not perform destructive actions.
Do not contact production services.
Do not rotate real secrets unless explicitly instructed.

DISCOVERY

Inspect:

- auth implementation
- permission/role checks
- API routes
- input validation
- database queries
- file uploads/downloads
- webhooks
- payment flows
- external API clients
- environment variable usage
- logging
- error handling
- CORS/session/cookie config
- secrets in repository
- dependency risk where locally inspectable
- tests around security-sensitive paths

SECURITY REVIEW AREAS

Check:

- authentication bypass
- missing authorization
- role confusion
- insecure direct object references
- injection risks
- unsafe eval or command execution
- unsafe file path handling
- unvalidated uploads
- SSRF-like network behavior
- webhook signature verification
- payment/mock separation
- missing CSRF protection where relevant
- weak session/cookie settings where relevant
- CORS misconfiguration
- PII leakage
- sensitive logs
- secrets committed to files
- overbroad environment examples
- unsafe defaults
- missing rate limiting where relevant
- error messages leaking internals

OUTPUT FILES

Create SECURITY_REVIEW.md with:

- scope
- threat model summary
- sensitive assets
- trust boundaries
- findings
- severity
- evidence
- impact
- recommended fix
- verification method
- residual risk

Create SECURITY_HARDENING_PLAN.md with:

- prioritized fixes
- safe quick wins
- deeper fixes requiring product decisions
- tests to add
- deployment/config recommendations

FIX POLICY

If Apply fixes is YES, fix safe local issues such as:

- missing validation
- missing permission checks in obvious paths
- unsafe error handling
- unsafe environment examples
- secret-like values in examples
- missing webhook signature guard where local pattern exists
- missing tests around permissions
- insecure local defaults

Do not:

- change production credentials
- deploy
- alter auth architecture broadly without tests
- break existing users without migration path
- hide security issues by suppressing errors

TESTING

Add tests where feasible:

- unauthorized requests fail
- forbidden role cannot access resource
- user cannot access another user's resource
- invalid input rejected
- webhook signature required
- file path traversal blocked
- sensitive errors not exposed

VERIFICATION

Run:

- targeted security tests
- broader related tests
- lint/typecheck/build
- dependency audit only if available locally or approved

FINAL REPORT

Create SECURITY_REPORT.md with:

- fixes applied
- findings remaining
- tests added
- commands run
- residual risk
- actions requiring user/production owner

Do not claim the project is secure.
Claim only what was reviewed, fixed, and verified."
