#!/usr/bin/env sh

set -e

pnpm run docs:build

cd docs/.vitepress/dist

msg="自动部署"
git init
git add -A
git commit -m "${msg}"
git push -f git@github.com:wdonsong/wdonsong.github.io.git master:main

cd -
rm -rf docs/.vitepress/dist