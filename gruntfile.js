module.exports = function(grunt) {

// Configure task(s)
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  //Compressing js files for FINAl grunt build
  uglify: {
    build: {
      src: 'js/*.js',
      dest: 'js/script.min.js'
    },
    //Compressing js files during dev
    dev: {
      options: {
        beautify: true,
        mangle: false,
        compress: false,
        preserveComments: 'all'
      },
      src: 'js/*.js',
      dest: 'js/script.min.js'
    }
  }

  // Watch tasks
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

// Register task(s)
grunt.registerTask('default',['uglify:dev']);
grunt.registerTask('build',['uglify:build']);
};
