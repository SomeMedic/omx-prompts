$ultragoal "Improve performance using measurement-first optimization.

PLACEHOLDERS

- Scope: {{WHOLE_APP_OR_SPECIFIC_FLOW}}
- Performance goal: {{LATENCY / LOAD_TIME / RENDERING / THROUGHPUT / MEMORY / BUILD_TIME / DB_QUERIES}}
- Target metric: {{TARGET_METRIC_OR_INFER_AND_DOCUMENT}}
- User flow to optimize: {{CRITICAL_FLOW}}
- Risk tolerance: {{LOW / MEDIUM}}

MISSION

Measure, diagnose, optimize, and verify performance for the specified scope.

Do not perform speculative rewrites.
Do not optimize without before/after evidence when measurement is feasible.

DISCOVERY

Inspect:

- app architecture
- frontend rendering paths if applicable
- backend endpoints if applicable
- database queries if applicable
- bundle/build config if applicable
- caching strategy
- network calls
- expensive loops/computations
- startup paths
- existing performance tests or scripts
- package scripts and tooling

BASELINE

Create PERFORMANCE_BASELINE.md with:

- scope
- metric definitions
- baseline measurement method
- baseline results
- suspected bottlenecks
- constraints
- risks

If exact measurement tooling is unavailable, use the best local proxy and document limitations.

DIAGNOSIS

Look for:

- unnecessary re-renders
- expensive client computations
- oversized bundles
- blocking network waterfalls
- missing pagination
- inefficient queries
- N+1 queries
- missing indexes where applicable
- repeated serialization/deserialization
- slow startup imports
- synchronous heavy work
- unnecessary polling
- cache misses
- excessive test/build work

OPTIMIZATION POLICY

Prioritize:

1. correctness-preserving changes
2. low-risk high-impact bottlenecks
3. changes with measurable before/after evidence
4. maintainable improvements

Avoid:

- broad rewrites
- premature caching that risks stale data
- changing user-visible behavior without acceptance criteria
- adding complex infrastructure for small gains
- micro-optimizations with no measured impact

IMPLEMENTATION

For each optimization:

- state hypothesis
- implement change
- run targeted verification
- measure before/after
- check correctness
- document result

FRONTEND PERFORMANCE

If frontend:

- reduce unnecessary renders
- improve route loading if relevant
- optimize large lists/tables
- check image/media usage
- avoid layout shifts
- preserve accessibility
- verify mobile behavior

BACKEND PERFORMANCE

If backend:

- inspect hot endpoints
- reduce redundant work
- improve query patterns
- add pagination/limits if missing
- add caching only when invalidation is clear
- preserve API contracts
- test error paths

DATABASE PERFORMANCE

If database:

- check query shape
- check indexes where schema exists
- avoid N+1 patterns
- preserve migrations
- document any index/migration changes

VERIFICATION

Run:

- correctness tests
- targeted performance measurements
- lint/typecheck/build
- relevant e2e/smoke path

FINAL REPORT

Create PERFORMANCE_REPORT.md with:

- baseline
- bottlenecks found
- changes made
- before/after results
- commands/tools used
- correctness verification
- remaining bottlenecks
- next optimization candidates

Do not claim performance improved unless there is evidence or clearly documented proxy evidence."
