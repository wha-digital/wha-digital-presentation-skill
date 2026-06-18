#!/usr/bin/env bash
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO"

if [ ! -d skills ]; then
  echo "error: skills directory not found" >&2
  exit 1
fi

find skills -name SKILL.md -type f \
  -not -path '*/node_modules/*' \
  -not -path '*/deprecated/*' \
  -not -path '*/in-progress/*' \
  -not -path '*/personal/*' \
  | sed 's|^\./||' \
  | sort
