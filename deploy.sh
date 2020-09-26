# #!/usr/bin/env sh
# Shell script for deployment on Bitbucket. Info: https://cli.vuejs.org/guide/deployment.html#bitbucket-cloud
# and https://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# Only for adding/setting a *new* origin (after fresh npm build wiped out local git info):
git remote add origin https://Unitymedia-Digital-Development@bitbucket.org/Unitymedia-Digital-Development/unitymedia-digital-development.bitbucket.io.git

# URL and repository must match, i.e.
# URL: https://unitymedia-digital-development.bitbucket.io
# repository name: Unitymedia-Digital-Development.bitbucket.io
# git push -f git@bitbucket.org:unitymedia-digital-development/unitymedia-digital-development.bitbucket.io.git master
git push -f origin master

# navigate back to previous directory
cd -
