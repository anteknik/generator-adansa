'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(chalk.green('\n.............DD88888888888888888,............\n' +
        '...........:888888888888888888888,...........\n' +
        '..........+88888888888888888888888+..........\n' +
        '.........,8888888888888888888888888..........\n' +
        '.........888888888888...888888888888.........\n' +
        '.......,88888887..D88...88Z..88888888,.......\n' +
        '.......8888888,...888...88D...=8888888.......\n' +
        '......D888888,..$8888...88887...8888888......\n' +
        '.....Z888888$..I88888...88888:..88888888,....\n' +
        '....D8888888...888888...88888D..,88888888....\n' +
        '....88888888,..888888..,888888...88888888....\n' +
        '....88888888,..8888888$888888D..,88888888....\n' +
        '....88888888I..Z8888888888888+..888888888....\n' +
        '.....Z8888888...O888888888888..,88888888.....\n' +
        '......88888888...,88888888D...,88888888......\n' +
        '.......88888888=.....?I+.....I88888888.......\n' +
        '.......,88888888D7.........ZD88888888,.......\n' +
        '.........888888888888888888888888888.........\n' +
        '.........,8888888888888888888888888..........\n' +
        '..........+88888888888888888888888+..........\n' +
        '...........,888888888888888888888:...........\n' +
        '.............DD888888888888888DD.............\n' +
        chalk.red('\nSpring Boot Authorization Server yo Generator\n\n'
	)));

    var prompts = [
      { type: 'input', name: 'projectName', message: 'What\'s the name of the project?', default: 'MyProject' },
      { type: 'input', name: 'projectAuthor', message: 'Project author?', default: 'John Doe' },
      { type: 'input', name: 'projectWebsite', message: 'Project website?', default: 'localhost' },
      { type: 'input', name: 'projectEmail', message: 'Author\'s email?', default: 'john.doe@localhost' },
      { type: 'input', name: 'packageName', message: 'What is your default Java package name?',
          validate: function (input) {
                if (/^([a-z_]{1}[a-z0-9_]*(\.[a-z_]{1}[a-z0-9_]*)*)$/.test(input)) return true;
                return 'The package name you have provided is not a valid Java package name.'; 
            },
            default: 'com.mycompany.myapp'
      }
    ];

    this.prompt(prompts, function (props) {
      this.properties               = props;
      this.properties.generatorName = this.pkg.name;

      done();
    }.bind(this));
  },

  writing: {

    app: function () {

      var underscoreParams        = { evaluate: /\<\%([\s\S]+?)\%\>/g, interpolate: /\<\%\=([\s\S]+?)\%\>/g, escape: /\<-([\s\S]+?)\>/g };
      var baseProjectPath         = 'base-project/';
      //var genericTemplateFiles    = ['_package.json' , '_pom.xml']
      var genericCopyFiles        = ['_pom.xml'];
      var packagePath             = this.properties.packageName.replace(/\./g, '/');
      var javaSrcPath             = baseProjectPath + 'src/main/java/'
      var javaSrcTestPath         = baseProjectPath + 'src/test/java/'
      var javaPath                = 'src/main/java/' + packagePath + '/';
      var javaTestPath            = 'src/test/java/' + packagePath + '/';

      //for (var f in genericTemplateFiles)
        //this.template(baseProjectPath + genericTemplateFiles[f], genericTemplateFiles[f].substr(1,500), this, underscoreParams);
      for (var t in genericCopyFiles)
        this.copy(baseProjectPath + genericCopyFiles[t], genericCopyFiles[t].substr(1,500), this, underscoreParams);      
      
	  this.directory(baseProjectPath + 'src/main/resources/', 'src/main/resources/');     
      this.directory(baseProjectPath + 'src/main/java/package/', 'src/main/java/' + packagePath + '/');
      this.directory(baseProjectPath + 'src/test/java/package/', 'src/test/java/' + packagePath + '/');
    },
    projectfiles: function () { }
  }  
});