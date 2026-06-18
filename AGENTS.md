# Repository Instructions

## Purpose

This repository publishes WHA Digital agent skills through the `npx skills` installer.

Use the collection layout. Do not reintroduce a custom npm package installer unless the repository intentionally changes distribution strategy.

## Layout

- Skills live under `skills/<bucket>/<skill-name>/SKILL.md`.
- Keep each skill directory self-contained.
- Add scripts, references, and assets inside the relevant skill directory only when the skill needs them.
- Use `scripts/list-skills.sh` to list all skills in the repository.

## Skill Rules

- Every `SKILL.md` must start with YAML frontmatter.
- Required frontmatter fields are `name` and `description`.
- Keep skill names lowercase and hyphenated.
- Put trigger wording in `description`, not only in the body.
- Keep the body practical and concise.

## Validation

Before committing skill layout changes, run:

```bash
./scripts/list-skills.sh
npx skills add . --list
```

For an install test, use a temporary location or clean up generated local artifacts afterward:

```bash
npx skills add . --all --yes
```

The `skills` CLI may create `.agents/` and `skills-lock.json` in the project. These are ignored and should not be committed.

## Public Install Command

The README should advertise this install command:

```bash
npx skills add wha-digital/wha-digital-presentation-skill --all
```
