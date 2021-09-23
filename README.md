# KSEA_WEB

# SETUP
## INSTALLATION SETUP

1. clone the project with the command
```
git clone https://github.com/ksea-cal/ksea-web.git
```
2. cd into the KSEA_web folder
```
cd ksea-web
```
3. check that you have node on your computer
```
node -v
```
if you don't have node, download as it says on this link
```
https://treehouse.github.io/installation-guides/mac/node-mac.html
```
4. download the necessary libraries with
```
npm install
```
8. make sure everything works
```
npm start
```

#GENERALS
## RUNNING
1. start backend server
```
https://github.com/ksea-cal/ksea-web-api
```
2. start react
```
npm start
```

## GIT
1. create a new git branch (start from master branch)
```
git checkout -b [BRANCH NAME]
```

2. time to time, rebase from master
```
git checkout master
git pull
git checkout [BRANCH NAME]
git rebase master
```

3. push to remote branch
```
git add .
git commit -am [YOUR COMMIT MESSAGE]
git push origin [BRANCH NAME]
```

4. go to the github repo and create a PR request


## FORMATTING

1. Commit messages
- Use [github commit message guideline](https://gist.github.com/develar/273e2eb938792cf5f86451fbac2bcd51) for formatting commit messages.