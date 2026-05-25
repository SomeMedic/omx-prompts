$ultragoal "Turn rough product notes and documentation into a complete PRD, acceptance criteria, and implementation-ready product plan.

PLACEHOLDERS

- Product name: {{PRODUCT_NAME}}
- Notes/docs source: {{DOCS_PATH_OR_NOTES}}
- Target users: {{TARGET_USERS_OR_UNKNOWN}}
- Business goal: {{BUSINESS_GOAL_OR_UNKNOWN}}
- Planning depth: {{BALANCED / THOROUGH}}
- Ask questions: {{ONLY_TRUE_BLOCKERS}}

MISSION

Read the available product documentation and create a high-quality product plan that is ready for design, architecture, implementation, and QA.

Do not implement code.
Focus on product clarity and execution readiness.

DISCOVERY

Inspect:

- docs
- README
- existing tickets/notes
- user flows
- acceptance criteria
- design notes
- API specs
- existing code if present
- competitors or references only if included locally

PRODUCT ANALYSIS

Identify:

- target users
- user problems
- jobs-to-be-done
- core workflows
- edge workflows
- business goals
- success metrics
- constraints
- assumptions
- dependencies
- risks
- open questions

ASKING POLICY

Ask the user only for true blockers.
If information is missing but inferable, make a reasonable assumption and document it.
If a product decision is irreversible or materially changes scope, ask.

OUTPUT FILES

Create PRD.md with:

- product overview
- problem statement
- target users
- user personas if useful
- jobs-to-be-done
- goals
- non-goals
- core user journeys
- feature requirements
- functional requirements
- non-functional requirements
- permissions/roles if relevant
- data requirements
- integrations
- analytics/success metrics if relevant
- acceptance criteria
- out-of-scope items
- assumptions
- open questions

Create ACCEPTANCE_CRITERIA.md with:

- testable criteria grouped by feature
- happy paths
- unhappy paths
- edge cases
- data states
- permissions
- responsive/UI states if frontend
- API behavior if backend

Create PRODUCT_PLAN.md with:

- milestones
- MVP scope
- post-MVP scope
- implementation sequence
- design tasks
- architecture tasks
- testing tasks
- QA tasks
- risks and mitigations
- recommended OMX execution path

Create REQUIREMENTS_TRACEABILITY.md with:

- requirement
- source
- priority
- implementation area
- verification method
- status

QUALITY BAR

Requirements must be specific and testable.
Replace vague language:

- fast -> target latency or interaction expectation
- intuitive -> concrete UX behavior
- secure -> concrete auth/permission/data requirements
- scalable -> expected data/user/load shape
- polished -> concrete UI states and acceptance criteria

DESIGN HANDOFF

Include enough detail for a designer agent:

- screens
- flows
- states
- component needs
- responsive behavior
- empty/loading/error states

ENGINEERING HANDOFF

Include enough detail for an architect/developer agent:

- entities
- APIs
- permissions
- integrations
- data lifecycle
- validation
- failure modes

QA HANDOFF

Include enough detail for QA:

- critical flows
- regression risks
- edge cases
- acceptance criteria
- smoke checklist

FINAL REPORT

Create PRODUCT_DISCOVERY_REPORT.md with:

- documents created
- key decisions
- assumptions
- unresolved blockers
- recommended next prompt/workflow

Do not proceed into implementation unless explicitly instructed."
