module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          files: {
            'css/style.css' : 'sass/style.scss'
          }
        }
      },
      watch: {
        all: {
          files: ['**/*.scss'],
          tasks: ['sass'],
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('s', 'sass');
  
  };