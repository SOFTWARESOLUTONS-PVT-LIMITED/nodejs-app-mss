const sonarqubeScanner = require('sonar-scanner');

sonar-scanner({
  serverUrl: 'http://34.116.206.130:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.http://34.116.206.130projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'a5c51557120d935b5b880e80b9cfbbf6c1473cb3',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
