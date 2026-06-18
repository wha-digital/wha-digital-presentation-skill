# WHA Digital Skills

Public WHA Digital agent skills for shared engineering and presentation workflows.

This repository is installed with the cross-agent `skills` CLI, the same style as public skill collection repositories such as `thananon/9arm-skills`.

## Quick Install

Install all skills from this repository to supported agents:

```bash
npx skills add wha-digital/wha-digital-presentation-skill --all
```

List available skills before installing:

```bash
npx skills add wha-digital/wha-digital-presentation-skill --list
```

## Layout

Skills live under `skills/`, grouped into buckets:

- `presentation/` - executive and management presentation workflows

Each skill is its own directory containing a `SKILL.md` with YAML frontmatter and any bundled scripts, references, or assets.

Current layout:

```text
skills/
  presentation/
    wha-digital-presentation/
      SKILL.md
```

## Local Development

List every `SKILL.md` in the repo:

```bash
./scripts/list-skills.sh
```

Link all skills from this checkout into Claude's local skill directory:

```bash
./scripts/link-skills.sh
```

Validate local skill discovery:

```bash
npx skills add . --list
```

Install from the local checkout to all detected agents:

```bash
npx skills add . --all
```

For non-interactive local testing:

```bash
npx skills add . --all --yes
```

The `skills` CLI may create local `.agents/` and `skills-lock.json` files during project-local testing. They are ignored by git.

## Reference

### Presentation

- [wha-digital-presentation](skills/presentation/wha-digital-presentation/SKILL.md) - Create or edit executive-ready WHA Digital PowerPoint decks, especially CTO and management presentations about cloud cost comparison, migration options, architecture decisions, HA/DR, monitoring, backup, and production readiness.

## Maintenance

- Add new skills under `skills/<bucket>/<skill-name>/SKILL.md`.
- Keep `README.md` reference entries in sync with skill additions.
- Keep install instructions based on `npx skills add owner/repo`; this repository is not an npm package.
- Run `./scripts/list-skills.sh` and `npx skills add . --list` before committing changes.
- Use `./scripts/link-skills.sh` only for local symlink-based testing with Claude.
