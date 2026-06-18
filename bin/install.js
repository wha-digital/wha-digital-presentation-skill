#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const skillName = 'wha-digital-presentation';
const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, '..');
const sourceDir = join(packageRoot, 'skill', skillName);
const codexHome = process.env.CODEX_HOME || join(homedir(), '.codex');
const targetDirs = [
  join(homedir(), '.agents', 'skills', skillName),
  join(codexHome, 'skills', skillName),
];

if (!existsSync(sourceDir)) {
  console.error('Bundled skill directory is missing:', sourceDir);
  process.exit(1);
}

const installedDirs = [];
for (const targetDir of [...new Set(targetDirs.map((dir) => resolve(dir)))]) {
  mkdirSync(dirname(targetDir), { recursive: true });
  cpSync(sourceDir, targetDir, { recursive: true, force: true });
  installedDirs.push(targetDir);
}

console.log('Installed WHA Digital presentation skill to:');
for (const dir of installedDirs) {
  console.log('- ' + dir);
}
console.log('Restart your agent or Codex session to load the updated skill list.');
