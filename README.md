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

### git 

git init 

git config --global user.name 'username'

git config --global user.email 'email' 

git add remote origin <repo_link>

git branch -M main

git add <file>

git commit -M 'message'

git push 
