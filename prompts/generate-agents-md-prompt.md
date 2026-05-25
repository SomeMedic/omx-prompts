$ultragoal "Create a project-specific AGENTS.md for this repository.

MISSION

Inspect the local repository and generate an AGENTS.md file that gives Codex, OMX workflows, and delegated agents precise operating instructions for this project.

Do not implement product features.
Do not refactor unrelated code.
Do not change source files except AGENTS.md and, if useful, a short supporting notes file named AGENTS_CONTEXT.md.

DISCOVERY

Before writing AGENTS.md:

1. Inspect README.md, docs, package files, configuration files, tests, source tree, and existing project conventions.
2. Determine the project type: frontend, backend, fullstack, CLI, library, mobile app, game, data pipeline, or other.
3. Identify the stack, package manager, framework, test runner, linter, formatter, build commands, and dev server commands.
4. Identify important directories and ownership boundaries.
5. Identify risky areas: auth, payments, PII, migrations, file uploads, permissions, external APIs, background jobs, production deployment, destructive operations.
6. Identify how work should be verified locally.
7. Identify any existing agent guidance files and preserve useful instructions.

OUTPUT REQUIREMENTS

Create AGENTS.md with these sections:

- Project Overview
- Source Of Truth
- Autonomy Policy
- True Blockers
- Definition Of Done
- Repository Map
- Stack And Tooling
- Common Commands
- Development Workflow
- Testing And Verification
- Frontend Standards, if applicable
- Backend/API Standards, if applicable
- Database/Migration Standards, if applicable
- Security Standards
- Performance Standards, if applicable
- Documentation Standards
- Team Role Expectations For OMX
- Final Report Expectations

AUTONOMY POLICY TO INCLUDE

The generated AGENTS.md must tell agents:

- do not ask routine questions
- inspect local context before asking the user
- make reversible decisions and document them
- ask only for true blockers
- preserve unrelated user changes
- do not report success without evidence
- do not stop at planning for implementation tasks
- run verification and fix local failures when feasible

TRUE BLOCKERS TO INCLUDE

Ask the user only for:

- missing paid API credentials
- destructive actions outside the project directory
- production deployment or external real-world side effects
- irreversible product/business decisions
- legal/compliance choices not inferable from docs
- two architecture choices with serious long-term consequences and no clear winner
- missing external information that cannot be inferred or mocked safely

DEFINITION OF DONE TO INCLUDE

The generated AGENTS.md must define completion as:

- requirements implemented or explicitly blocked
- code follows local patterns
- critical flows verified
- lint/typecheck/build/tests pass where applicable
- UI/browser checks completed for frontend work
- API checks completed for backend work
- security-sensitive areas reviewed
- no placeholder-only features or dead primary actions remain
- final report includes evidence for broad work

COMMAND DISCOVERY

Do not invent commands if package scripts already exist.
Prefer repository scripts over ad hoc commands.
If commands are missing, document likely commands separately as recommendations, not facts.

SAFETY

Do not overwrite existing valuable AGENTS.md content without preserving it.
If AGENTS.md exists, merge and improve it.
If AGENTS.md is confusing or contradictory, preserve it in a backup section or summarize what changed.

FINAL RESPONSE

After writing AGENTS.md, summarize:

- file created or updated
- key project-specific commands discovered
- main risky areas encoded
- any assumptions made
- any gaps that still need user confirmation"
