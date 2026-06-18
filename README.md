# WHA Digital Skills

Agent skills for WHA Digital workflows.

## Layout

Skills live under `skills/`, grouped into buckets:

- `presentation/` - executive and management presentation workflows

Each skill is its own directory containing a `SKILL.md` with YAML frontmatter and any bundled scripts, references, or assets.

## Install

### With `npx skills` (Recommended - works for every agent)

```bash
npx skills add wha-digital/wha-digital-presentation-skill --all
```

To list skills before installing:

```bash
npx skills add wha-digital/wha-digital-presentation-skill --list
```

### Alternative - local checkout

From this repository, list every `SKILL.md`:

```bash
./scripts/list-skills.sh
```

Install from the local checkout with `npx skills`:

```bash
npx skills add . --all
```

## Reference

### Presentation

- [wha-digital-presentation](skills/presentation/wha-digital-presentation/SKILL.md) - Create or edit executive-ready WHA Digital PowerPoint decks, especially CTO and management presentations about cloud cost comparison, migration options, architecture decisions, HA/DR, monitoring, backup, and production readiness.
