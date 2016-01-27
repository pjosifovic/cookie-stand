module.exports = function(grunt) {

// Configure task(s)
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  clean: ['js/script.min.js'],

  uglify: {
    build: {
      src: 'js/*.js',
      dest: 'js/script.min.js'
    },
    dev: {
      options: {
        beautify: false,
        mangle: false,
        compress: false,
        preserveComments: 'all'
      },
      src: 'js/*.js',
      dest: 'js/script.min.js'
    }
  },

  watch: {
    js: {
      files: ['js/*.js'],
      tasks: ['uglify:dev']
    }
  }


});

// Load the plugins
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');


// Register task(s)
grunt.registerTask('default',['uglify:dev']);
grunt.registerTask('build',['uglify:build']);
};
