# Prompt Quality Checklist

Use this checklist when creating or reviewing prompts for this repository.

## Core

- [ ] The prompt is paste-ready.
- [ ] The prompt starts with the intended OMX command.
- [ ] The mission is clear.
- [ ] The placeholders are obvious.
- [ ] The prompt explains when to ask the user.
- [ ] The prompt explains when to proceed autonomously.
- [ ] The prompt requires local discovery before questions.
- [ ] The prompt avoids vague success criteria.

## Delivery

- [ ] The prompt has a discovery phase.
- [ ] The prompt has planning or artifact requirements.
- [ ] The prompt has implementation rules.
- [ ] The prompt has test requirements.
- [ ] The prompt has QA requirements where relevant.
- [ ] The prompt has final report requirements.
- [ ] The prompt defines completion evidence.

## Safety

- [ ] The prompt asks before destructive actions.
- [ ] The prompt asks before production deployment.
- [ ] The prompt handles missing credentials safely.
- [ ] The prompt avoids committing secrets.
- [ ] The prompt distinguishes local/mock mode from production completion.
- [ ] The prompt includes security-sensitive checks when relevant.

## Quality

- [ ] The prompt discourages fake buttons, dead links, and placeholder-only features.
- [ ] The prompt requires lint/typecheck/build/tests where applicable.
- [ ] The prompt requires browser/API checks where applicable.
- [ ] The prompt requires fix/verify loops.
- [ ] The prompt prevents overclaiming.
