#!/usr/bin/env bash
# Builds the private preview copy of the site into preview-dist/.
# Same site, with lighter video files so the preview loads fast.
# Needs ffmpeg for the video step (skipped if ffmpeg is missing).
set -e
cd "$(dirname "$0")/.."
npm run build:preview
# The preview host adds its own <html>/<head>/<body>, so keep only the inside.
node -e '
const fs=require("fs");const f="preview-dist/index.html";let s=fs.readFileSync(f,"utf8");
s=s.replace(/<!doctype html>\s*/i,"").replace(/<\/?html[^>]*>/gi,"").replace(/<\/?head>/gi,"").replace(/<\/?body>/gi,"").replace(/<meta charset[^>]*>\s*/i,"").replace(/<meta\s+name="viewport"[^>]*>\s*/is,"");
fs.writeFileSync(f,s.trim()+"\n");'
if command -v ffmpeg >/dev/null; then
  for v in public/media/*.mp4; do
    ffmpeg -y -v error -i "$v" -c:v libx264 -preset slow -crf 27 -maxrate 2.4M -bufsize 4.8M \
      -c:a aac -b:a 96k -movflags +faststart "preview-dist/media/$(basename "$v")"
  done
fi
echo "Preview ready in preview-dist/"
