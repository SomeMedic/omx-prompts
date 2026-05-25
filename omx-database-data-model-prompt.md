$ultragoal "Design, implement, and verify the data model for this project.

PLACEHOLDERS

- Scope: {{WHOLE_APP_OR_FEATURE}}
- Database/ORM: {{AUTO_DETECT_OR_SPECIFY}}
- Data requirements source: {{DOCS_PATH_OR_FEATURE_SPEC}}
- Migration policy: {{SAFE_LOCAL_ONLY}}
- Autonomy level: high but cautious.

MISSION

Create or improve the project's data model, schema, migrations, seed/demo data, validation assumptions, and data access patterns.

Do not run destructive production database operations.
Do not change data semantics without documenting the decision.

DISCOVERY

Inspect:

- docs and feature specs
- existing schema/migrations
- ORM models
- database clients
- repositories/services
- API DTOs/contracts
- validation schemas
- seed files
- tests
- env config
- local database setup

DATA MODEL ARTIFACTS

Create or update DATA_MODEL.md with:

- entities
- fields
- relationships
- constraints
- indexes
- lifecycle states
- ownership/tenant assumptions
- permissions implications
- migration notes
- seed/demo data notes
- open questions

Create or update DECISIONS.md with:

- schema decisions
- naming decisions
- normalization/denormalization tradeoffs
- index decisions
- migration assumptions

IMPLEMENTATION RULES

Follow existing ORM and migration conventions.
Prefer clear explicit schema over clever dynamic models.
Preserve existing data expectations.
Add migrations when required.
Add validation at correct boundaries.
Avoid broad data-layer rewrites unless necessary.
Keep changes scoped to the feature/data model.

RELATIONSHIPS AND CONSTRAINTS

Consider:

- one-to-many/many-to-many relationships
- required vs optional fields
- unique constraints
- foreign keys
- tenant/user ownership
- soft delete vs hard delete
- timestamps
- status enums
- auditability
- search/filter requirements
- pagination requirements

SEED AND LOCAL DATA

If useful, add safe local seed/demo data:

- enough data to exercise primary flows
- no real secrets or PII
- documented reset/setup path
- deterministic where possible

TESTING

Add or update tests for:

- model creation
- validation
- relationships
- permissions/ownership if relevant
- API persistence behavior
- migrations if feasible
- not-found and empty states

VERIFICATION

Run:

- migration generation/checks if applicable
- schema validation
- tests
- API smoke checks if applicable
- lint/typecheck/build

If local database access is unavailable, document the blocked verification and verify everything possible statically.

FINAL REPORT

Create DATA_MODEL_REPORT.md with:

- schema changes
- migrations
- seed data
- tests
- verification commands
- risks
- next steps

Only claim completion when data behavior is implemented and locally verified or clearly marked blocked."
