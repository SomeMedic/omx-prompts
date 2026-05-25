$ultragoal "Diagnose and fix a bug using a root-cause-first workflow.

PLACEHOLDERS

- Bug summary: {{BUG_SUMMARY}}
- Observed behavior: {{OBSERVED_BEHAVIOR}}
- Expected behavior: {{EXPECTED_BEHAVIOR}}
- Reproduction steps: {{REPRO_STEPS_OR_UNKNOWN}}
- Affected area: {{AFFECTED_AREA_OR_AUTO_DETECT}}
- Error logs/screenshots: {{ERROR_CONTEXT_OR_NONE}}
- Risk tolerance: low.

MISSION

Find the real root cause of the bug, fix it, add regression coverage where feasible, and verify that the bug is fixed without introducing regressions.

Do not patch symptoms blindly.
Do not stop after speculation.

DISCOVERY

1. Reproduce or simulate the bug if possible.
2. Inspect relevant logs, errors, tests, routes, components, APIs, services, models, and data flow.
3. Trace the expected flow and actual flow.
4. Identify the smallest likely fault boundary.
5. Check recent related code and tests if available.
6. Identify adjacent features that could regress.

ROOT CAUSE DOCUMENT

Create BUGFIX_NOTES.md with:

- bug summary
- reproduction status
- expected behavior
- actual behavior
- investigation steps
- root cause
- affected files
- fix strategy
- regression test plan
- verification commands

If the bug cannot be reproduced, document the closest local reproduction or reasoning evidence.

FIX RULES

Make the smallest durable fix.
Prefer fixing the underlying invariant over adding scattered guards.
Preserve existing behavior outside the bug.
Avoid broad refactors.
Avoid hiding errors unless the product truly requires graceful fallback.
If the bug exposes weak validation, add validation at the correct boundary.
If the bug exposes a state synchronization issue, fix the state model rather than adding timing hacks.
If the bug exposes API contract drift, align the contract and tests.

TESTING

Add regression coverage where feasible:

- unit test for pure logic
- integration test for API/service behavior
- component test for UI behavior
- e2e or smoke test for critical user flow

If a test cannot be added, document why and provide a manual verification path.

VERIFICATION LOOP

1. Run targeted test or reproduction.
2. Apply fix.
3. Rerun targeted verification.
4. Run broader related checks.
5. Run lint/typecheck/build/tests as applicable.
6. Confirm adjacent flows still work.

QA CHECKS

Check:

- original reproduction
- nearby edge cases
- empty/null/invalid data
- permission/auth boundaries if relevant
- loading and error states if frontend
- stale state and navigation if frontend
- API error status if backend

FINAL REPORT

Create BUGFIX_REPORT.md with:

- root cause
- fix summary
- regression coverage added
- verification commands and results
- remaining risk
- follow-up recommendations

Only claim fixed when the original failure path is verified and regression risk is addressed."
