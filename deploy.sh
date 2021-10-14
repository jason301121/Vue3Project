#!/usr/bin/env sh

set -e

npm run build

cd dist
git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/jason301121/Vue3Project.git master:gh-pages

cd -