git checkout gh-pages && 
git rebase main &&
ng build --output-path docs --base-href //cowin-helper/  &&
sed -i -e  's,//cowin-helper/,/cowin-helper/,g' docs/index.html &&
cp -a docs/index.html docs/404.html  &&
# find . ! -name 'docs' -type d -exec rm -rf {} +
git add ./docs  &&
git commit -m "Build on $(date '+%Y-%m-%d  %H:%M:%S')"  &&
git push -f &&
git checkout main
