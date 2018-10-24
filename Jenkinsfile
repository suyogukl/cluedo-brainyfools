pipeline {
  agent any
  stages {
    stage('manual input') {
      steps {
        input(message: 'something', id: 'input1', ok: 'ok', submitter: 'submitter', submitterParameter: 'sp')
      }
    }
  }
}