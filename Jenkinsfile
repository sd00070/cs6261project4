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
                sh 'ng e2e'
            }
        }
        stage('deploy') {
            echo 'Deploy stage not implemented'
        }
    }
}