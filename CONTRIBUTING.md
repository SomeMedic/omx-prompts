# Contributing

Thanks for helping improve OMX Prompts.

This repository is a prompt library for serious Codex + oh-my-codex workflows. Contributions are welcome when they make prompts more useful, more reliable, more specific, or easier to apply in real projects.

## Good Contributions

Good contributions include:

- better prompt wording
- new task-specific prompts
- filled examples
- clearer placeholders
- stronger verification steps
- safer autonomy rules
- better QA/security/performance instructions
- real-world showcase reports
- typo and clarity fixes
- README improvements

## Prompt Quality Bar

Prompts should be:

- paste-ready
- explicit about mission and scope
- clear about when to ask the user
- clear about when to act autonomously
- grounded in local repository inspection
- specific about documentation artifacts
- specific about verification commands
- specific about final reports and evidence
- safe around credentials, production, destructive actions, and external side effects

Avoid prompts that:

- only say "build this"
- encourage fake completion
- skip tests and verification
- ask too many routine questions
- assume production credentials exist
- make destructive changes without approval
- use vague quality bars like "make it nice" without concrete checks

## File Naming

Use clear names:

```text
omx-<task>-prompt.md
```

Examples:

```text
omx-accessibility-audit-prompt.md
omx-ci-cd-prompt.md
omx-design-system-prompt.md
```

Templates and docs can use descriptive names:

```text
AGENTS.template.md
README.md
ROADMAP.md
```

## Prompt Structure

Most prompts should include:

1. OMX launch command, usually `$ultragoal`.
2. Placeholders.
3. Mission.
4. Discovery phase.
5. Planning or artifact requirements.
6. Implementation rules.
7. Testing and verification.
8. QA/security/performance checks when relevant.
9. Final report requirements.
10. Completion criteria.

## Example Contribution Flow

1. Fork or branch the repository.
2. Add or edit prompt files.
3. Update `README.md` if a new prompt is added.
4. Add an example under `examples/` if helpful.
5. Open a pull request explaining the use case.

## Pull Request Checklist

- [ ] The prompt is paste-ready.
- [ ] Placeholders are obvious.
- [ ] The prompt says when to ask the user.
- [ ] The prompt says when to proceed autonomously.
- [ ] Verification steps are included.
- [ ] Safety rules are included.
- [ ] The README is updated if needed.
- [ ] Examples are added or updated if useful.

## Style

Keep wording direct and operational.

These are not marketing prompts. They are working instructions for coding agents.
