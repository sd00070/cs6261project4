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
                sh 'docker system prune --all'
                sh 'docker build --tag testimage .'
                sh 'docker run -d -v $WORKSPACE:/app -p 4200:4200 --name testcontainer testimage'
                sh '$WORKSPACE/node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
            post {
                always {
                    sh 'docker rm testcontainer || true'
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'Deploy stage not implemented'
            }
        }
    }
}
