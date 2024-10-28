# GitHub Commands List

## GIT basics

    git clone repo'sURL     This command will clone the remote repo to your local storage
    git add .       This command will inititalize the push command
    git commit -m "your message"        This is the second step of push command
    git push --set-upstream origin branch       This will set the head of your local branch to the origin (use this first time)
    git push        This is usual push command once the head is set
    git fetch       This command will check for any changes is the head tracking branch and update the local repo
    git branch branch_name      This command will create a new branch
    git checkout branch_name    This command will take you to branch_Name repo
    git branch                  This command will let you know where you are in the repo tree
    git status                  This command will let you know the status of your current branch
    git merge branch_Name       This command will add branch_Name to the current branch. After the merge you need to git commit and git push to update the remote repo.

## Git
    - Make sure you've installed git.
    - Download VsCode and connect your git account.

## Making your own Branch
    - Create a separate branch from the main branch so that you can work on the project yourself.
    - This is so that you don't mess with the main branch before confirming/testing any of the changes.
    - Create a new branch in your VsCode Terminal using->
        - git checkout -b <new-branch-name>
        - You can name it anything but try to name the branch with your name.
    - Push the branch to remote->
        - git push origin <your-branch-name>

## Pushing File(s) to the remote GitHub Repository
    - First add all the files to the staging area.
    - You can stage all your changes using this command->
        - git add .
    - Commit your changes using->
        - git commit 
            -- But if you wanna add a personalized message to keep track of changes use->
        - git commit -m "Your commit message here"
    - Finally, push all your files to the remote git repository->
        - git push origin <your-branch-name>
    - You can also push to other branches. But please make a pull request if you're going to do that so you don't mess
      with the main project file(s).
    - Pull Request(s)? Check the topic at the end!

## Verify your changes
    - Make sure you've committed and pushed the files.
    - You can use this command to do so->
        - git status

## Other Git Commands
    - Check your current git branch using->
        - git branch
    - List all the remote branches->
        - git branch -r
    - Check another branch and the file(s) in that branch->
        - git checkout <branch-name>

## Merging (Scary!!! Not so much don't worry)
    - 1. Switch to the main branch.
        - git checkout main
    - 2. Pull from main- Update your main with any recent changes.
        - git pull origin main
    - 3. Merge your branch into main.
        - git merge <your-branch-name>
    - 4. Push the merged branch onto the remote repository.
        - git push origin main

## Pull Request?
    - A pull request is proposal to merge a set of changes from one branch into another.
    - You can create a pull request, which you can do from the github website. 
    - Collaborators and your team members discuss the changes and verify your code before merging the two branches.

## Feel free to add any other details you want to in this file!
