rem reference: https://cli.vuejs.org/guide/deployment.html#github-pages

cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Lohsini/qsticker_website  master:gh-pages
cd ../