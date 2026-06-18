# WHA Digital Presentation Skill

An npx installer for the WHA Digital presentation skill.

This skill helps create and edit executive-ready WHA Digital PowerPoint decks, especially CTO and management presentations about cloud cost comparison, migration options, architecture decisions, HA/DR, monitoring, backup, and production readiness.

## Install

Install directly from GitHub:

```bash
npx github:wha-digital/wha-digital-presentation-skill
```

After the package is published to npm, install with:

```bash
npx wha-digital-presentation-skill
```

The installer copies the skill to both common agent skill locations:

```text
~/.agents/skills/wha-digital-presentation
${CODEX_HOME:-~/.codex}/skills/wha-digital-presentation
```

If `CODEX_HOME` is set, the Codex install path uses that value. Otherwise it defaults to `~/.codex/skills/wha-digital-presentation`.

Restart your agent or Codex session after installation so the updated skill list is loaded.

## Package Contents

- `bin/install.js` - npx installer script
- `skill/wha-digital-presentation/SKILL.md` - bundled skill
- `LICENSE` - Apache-2.0 license

## Local Test

From this repository:

```bash
npm pack --dry-run
npx .
```

To test without modifying your real home directory:

```bash
HOME=/private/tmp/wha-skill-test CODEX_HOME=/private/tmp/wha-codex-test npx .
```

## Publish to npm

Log in once:

```bash
npm adduser
```

Publish publicly:

```bash
npm publish --access public
```
