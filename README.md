## DEVOPS PRAC 

### docker code 

1.	Clone the repository using the following command:

git clone https://github.com/docker/getting-started-app.git

```

# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install --production

CMD ["node", "src/index.js"]

EXPOSE 3000

```


cd /path/to/getting-started-app

Build the image:

docker build -t getting-started .

docker run -dp 127.0.0.1:3000:3000 getting-started






### Docker command 

docker pull redis

docker build -t <image_name> [source_path] [host_path]

docker start <image_name>

docker run <image_name>

docker stop

docker ps

docker images

docker push <image_name>

docker pull image_name: Pull an image or a repository from a registry.

docker run [OPTIONS] IMAGE [COMMAND] [ARG...]: Create a container from an image.

docker ps [OPTIONS]: List all the containers.

docker start [OPTIONS] CONTAINER [CONTAINER...]: Start one or more running containers.

docker stop [OPTIONS] CONTAINER [CONTAINER...]: Stop one or more running containers.

docker push [OPTIONS] NAME[:TAG]: Upload an image to a registry.




### jenkins pipeline 

```
pipeline { 
    agent any 
    stages { 
        stage ('Build') {
            steps { 
                echo 'Running build phase...'

            }
        }
        stage('Test'){
            steps{
                echo "Testing the project.."
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying..."
            }
        }

    }
}
```

```
pipeline {
    agent any 
    environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
        APP_NAME = 'jenkins-react-deploy'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                 bat 'npm install bootstrap'  
                bat 'npm install'  
            }
        }
        stage('Build') {
            steps {
                   bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app'
            }
        }
    }
}
```

### git 


git --version

git config --global user.name ""

git config --global user.email ""

git init

git status

git add ""

git commit -m ""

git status --short

git log

git branch ""

git checkout ""

git merge ""

git branch -d "" 


### to perform branching of any web application on git


To perform branching in a Git repository for a web application, you can follow these steps:

Create a New Branch:
Open a terminal or Git command line and navigate to your web application's repository. Use the following command to create a new branch:

bash
Copy code

git checkout -b new-branch-name
Replace new-branch-name with a meaningful name for your branch. This will create a new branch and switch to it.

Make Changes:
Make the necessary changes to your web application in this new branch. You can add, edit, or delete files as needed.

Stage and Commit Changes:
After making changes, stage the files for the commit using:

bash

Copy code

git add .
This stages all changes. You can also specify individual files to stage.

Then, commit the changes with a descriptive message:

bash
Copy code

git commit -m "Add feature XYZ"
Push the Branch:
To share your branch and its changes with others or to deploy changes to a web server, push the branch to the remote repository (like GitHub, GitLab, or Bitbucket):

bash
Copy code

git push origin new-branch-name
Replace new-branch-name with your branch's name.

Create a Pull Request (Optional):
If you're working in a collaborative environment, you can create a pull request on platforms like GitHub. This allows team members to review your changes before merging them into the main branch.

Merge or Deploy:
Once your changes have been reviewed (if applicable), you can merge the branch into the main branch or deployment branch. You can use the following commands to merge your branch locally:

bash
Copy code

git checkout main  # Switch to the main branch
git merge new-branch-name  # Merge the new branch into the main branch
Delete the Branch (Optional):
After merging or deploying your changes, you may choose to delete the branch:

bash
Copy code
git branch -d new-branch-name
The branch is now merged into the main branch, and the changes are reflected in the web application.

These steps should help you manage branching for your web application in a Git repository.



## ADEVOPS 

### Terraform 

```
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

### LAMBDA 

```
def lambda_handler(event, context):
    print("FIRST LAMBDA FUNCTION")
    if event['planet'] == 'Earth':
        return 'Moon'
    elif event['planet'] == 'Sun':
        return 'Not a planet'
    else:
        return 'No need'
```
