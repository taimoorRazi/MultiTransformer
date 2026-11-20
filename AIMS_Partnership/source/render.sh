#!/bin/bash
# usage: render.sh [res]
set -e
cd "$(dirname "$0")"
node build.js deck.pptx | tail -3
rm -f deck.pdf; python /root/.claude/skills/synced/44bb93d3-00f6-48ae-b11b-164de6fabfa4_ceba4cb3-c707-49fd-9b25-185e5aac143c/pptx/scripts/office/soffice.py --headless --convert-to pdf deck.pptx >/dev/null 2>&1
rm -rf r && mkdir r && pdftoppm -jpeg -r ${1:-60} deck.pdf r/s
ls r | wc -l
