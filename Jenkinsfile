pipeline {
  agent any
  stages {
    stage('manual input') {
      steps {
        input(message: 'something', id: 'input1', ok: 'ok', submitter: 'submitter', parameters { password(name: ‘PASSWORD’, defaultValue: ‘SECRET’, description: ‘A secret password’) })
      }
      steps {
        echo "Hello, ${PASSWORD}, got it"
      }
    }
  }
}
