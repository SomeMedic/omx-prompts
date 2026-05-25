# Security Policy

This repository contains prompts and documentation, not executable application code.

Still, security matters because these prompts can instruct agents to work with real codebases, credentials, deployments, APIs, and user data.

## Supported Versions

The latest version on `main` is the supported version.

## Reporting Security Issues

If you notice a prompt pattern that could encourage unsafe behavior, please open an issue or contact the repository owner.

Examples of security-relevant prompt issues:

- encourages committing secrets
- encourages production actions without approval
- encourages bypassing authentication or permissions
- encourages destructive file or database operations
- encourages ignoring test failures around auth, payments, PII, uploads, or webhooks
- fails to distinguish mock/local integration from real production integration

## Prompt Safety Principles

Prompts in this repository should:

- ask before destructive actions
- ask before production deployment or real-world side effects
- avoid committing secrets
- document missing credentials instead of faking completion
- create safe local/mock modes for external integrations
- require security-sensitive review for auth, permissions, PII, payments, uploads, webhooks, and admin features
- avoid overclaiming security completion

## Scope

This policy covers prompt and documentation content in this repository.

It does not cover OpenAI Codex, oh-my-codex, GitHub, or downstream projects that use these prompts.
