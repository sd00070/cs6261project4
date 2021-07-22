pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm i'
            }
        }
        stage('test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build --tag testimage .'
                sh 'docker run -d -v $WORKSPACE:/app -p 4200:4200 --name testcontainer testimage'
                sh 'sleep 30s'
                sh '$WORKSPACE/node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
            post {
                always {
                    sh 'docker stop testcontainer || true'
                    sh 'docker rm testcontainer || true'
                    sh 'docker rmi testimage || true'
                }
            }
        }
        stage('deploy') {
            steps {
                sh 'docker stop deploymentcontainer || true'
                sh 'docker rm deploymentcontainer || true'
                sh 'docker rmi deploymentimage || true'
                sh 'docker build --tag deploymentimage .'
                sh 'docker run -dv $WORKSPACE:/app -p 5000:4200 --name deploymentcontainer deploymentimage'
            }
        }
    }
}
