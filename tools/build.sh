#!/usr/bin/env bash
# Regenerates the files derived from the page: PDFs per language, the link preview image and the touch icon.
# Run after editing content.js: tools/build.sh
set -euo pipefail

cd "$(dirname "$0")/.."
CHROME=${CHROME:-$(command -v google-chrome || command -v chromium || command -v chromium-browser)}
run() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=6000 "$@" 2>/dev/null; }

for lang in en ru es; do
  run --no-pdf-header-footer --print-to-pdf="resume-$lang.pdf" "file://$PWD/index.html?lang=$lang"
  echo "resume-$lang.pdf"
done

run --window-size=1200,630 --screenshot=og.png "file://$PWD/tools/og.html"
echo "og.png"

run --window-size=180,180 --default-background-color=0e7a5cff --screenshot=apple-touch-icon.png "file://$PWD/favicon.svg"
echo "apple-touch-icon.png"
