git commands

1. git branch - shows list of branches
2. How to create branch
   a. git branch BRANCH_NAME - creates new branch
   b. git checkout BRANCH_NAME - navigates to newly created branch
   OR
   git checkout -b BRANCH_NAME
3. How to push changes to branch
   a. git add FILE_NAME - adds FILE_NAME to staging area
   b. git add . - add all modified files to staging area
   c. git commit -m "RELATIVE_COMMIT_MESSAGE"
   d. git push origin BRANCH_NAME
4. Merging to master branch
   a. git checkout main
   b. git merge BRANCH_NAME
