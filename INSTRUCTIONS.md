# Universal Codex + OMX Product Development Prompt

Use this template when you want Codex with oh-my-codex (OMX) to build a product from scratch from documentation, with product management, design, architecture, implementation, QA, verification, and repeated fix loops.

The intended launch style is one prompt, started from the project root:

```bash
cd /path/to/project
codex
```

Then open `universal-codex-product-development-prompt.md`, replace the placeholders, and paste that prompt into Codex.

## Recommended Project Structure

Before launching, prepare the project folder like this:

```text
my-project/
  docs/
    00-product-brief.md
    01-prd.md
    02-user-flows.md
    03-design-requirements.md
    04-technical-requirements.md
    05-acceptance-criteria.md
    06-test-plan.md
  AGENTS.md
```

The documentation does not have to use these exact names, but Codex performs better when the source of truth is explicit.

## Fill These Placeholders

Replace these values before launching:

```text
{{PROJECT_NAME}} = The product name
{{PROJECT_TYPE}} = WEB_APP / SAAS / INTERNAL_TOOL / API / CLI / MOBILE_APP / GAME / OTHER
{{DOCS_PATH}} = ./docs
{{STACK_PREFERENCE}} = AUTO_DECIDE or a specific stack
{{TARGET_USERS}} = Who will use the product
{{BUSINESS_GOAL}} = What the product must achieve
{{NON_NEGOTIABLE_CONSTRAINTS}} = Hard constraints, if any
{{AUTONOMY_LEVEL}} = high / very high / maximum
{{TIMELINE_EXPECTATION}} = hours / days / no strict limit
```

## Suggested AGENTS.md Contract

If your project does not have an `AGENTS.md`, create one with something like this:

```md
# Project Instructions

Build the product using ./docs as the source of truth.

Do not ask the user routine questions. Make reasonable reversible decisions yourself, document them in DECISIONS.md, and keep working.

Ask the user only for true blockers:
- missing paid API credentials
- destructive actions outside the project directory
- production deployment or external real-world side effects
- irreversible business decisions
- legal/compliance decisions not inferable from docs
- two architecture choices with serious long-term consequences and no clear winner

Definition of Done:
- every documented requirement is implemented or explicitly marked blocked
- PRD.md, DESIGN.md, ARCHITECTURE.md, TEST_PLAN.md, DECISIONS.md, and FINAL_REPORT.md exist
- lint/typecheck/build/tests pass where applicable
- critical user flows work end to end
- frontend flows are browser-verified where applicable
- QA and security-sensitive review have been performed
- no fake buttons, dead links, placeholder-only screens, or TODO-only features remain
- FINAL_REPORT.md includes verification evidence and requirement traceability
```


## Shorter One-Line Launch Variant

Use this when your project already has strong `docs/` and `AGENTS.md`:

```text
$ultragoal "Develop {{PROJECT_NAME}} from scratch using {{DOCS_PATH}} and AGENTS.md as the source of truth. Use Team mode internally with product-manager, designer, architect, developers, test-engineer, QA, verifier, and security-reviewer as needed. Create PRD.md, DESIGN.md, ARCHITECTURE.md, IMPLEMENTATION_PLAN.md, TEST_PLAN.md, DECISIONS.md, implement the product, run tests/build/browser checks, use UltraQA, fix failures, reconcile every requirement, and produce FINAL_REPORT.md with evidence. Ask me only for true blockers."
```

## Pre-Launch Checklist

- [ ] Project is opened from the correct root directory.
- [ ] `omx doctor` passes or has no critical failures.
- [ ] Documentation is inside `./docs` or the prompt points to the right docs folder.
- [ ] `AGENTS.md` defines Definition of Done and true blocker rules.
- [ ] External credentials are either available or explicitly allowed to be mocked locally.
- [ ] Git repo is initialized.
- [ ] Initial docs are committed or otherwise backed up.
- [ ] You are comfortable letting Codex make reversible implementation decisions.

## Practical Notes

- Use `$ultragoal` as the main durable owner for long autonomous work.
- Tell `$ultragoal` explicitly to use Team mode, Ralph-style loops, and UltraQA when appropriate.
- For very large products, expect multiple hours or days and check progress through generated artifacts and reports.
- The better the acceptance criteria, the less steering the agent will need.
- The final report is part of the deliverable. If there is no evidence, the product is not done.
