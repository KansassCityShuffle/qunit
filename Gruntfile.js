module.exports = function(grunt) {

  grunt.initConfig({
      uglify: 
      {
        options: 
        {
          separator: ';'
        },
        dist: 
        {
          src: ['js/checkParity.js', 'js/sayHello.js'],
          dest: 'dist/built.js'
        }
      },

      watch: 
      {
        all: 
        {
          options: { livereload: true },
          files: ['js/*.js'],
        },
        scripts: 
        {
          files: 'js/*.js', 
          tasks: ['uglify:dist']
        },

        files: ['tests/*.js', 'html/*.html', 'js/*.js'],
        tasks: ['qunit']
      },

      qunit_junit: 
      {
        all: ['html/*.html']
      },

      qunit: 
      { 
        all: ['html/*.html']
      }

    });
  

  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-qunit-junit');

  grunt.registerTask('default', ['uglify:dist', 'qunit_junit', 'qunit']);
};