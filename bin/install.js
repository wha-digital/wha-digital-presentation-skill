#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, '..');
const sourceDir = join(packageRoot, 'skill', 'wha-digital-presentation');
const targetDir = join(homedir(), '.agents', 'skills', 'wha-digital-presentation');

if (!existsSync(sourceDir)) {
  console.error('Bundled skill directory is missing:', sourceDir);
  process.exit(1);
}

mkdirSync(dirname(targetDir), { recursive: true });
cpSync(sourceDir, targetDir, { recursive: true, force: true });

console.log('Installed WHA Digital presentation skill to:');
console.log(targetDir);
console.log('Restart Codex to load the updated skill list.');
