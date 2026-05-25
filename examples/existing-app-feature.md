# Example: Existing App Feature

Use this when a project already exists and you need a complete feature implemented.

Recommended prompt:

```text
prompts/omx-feature-from-spec-prompt.md
```

Filled placeholders:

```text
- Feature name: Saved Searches
- Feature specification source: ./docs/features/saved-searches.md
- Product area: marketplace search and user dashboard
- Required user-facing behavior: users can save search filters, rename saved searches, delete them, and open a saved search from their dashboard
- Non-goals: email alerts and shared saved searches are out of scope
- Autonomy level: high
```

Expected Codex/OMX behavior:

- inspect existing architecture and patterns
- identify frontend/backend/data/test areas
- create FEATURE_PLAN.md
- implement the feature end to end
- add tests
- verify the flow
- create FEATURE_REPORT.md

Good acceptance criteria to include in your spec:

- user can save current filters from search results
- saved search appears in dashboard
- saved search can be renamed
- saved search can be deleted
- opening a saved search restores filters
- users cannot access another user's saved searches
