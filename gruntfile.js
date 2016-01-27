module.exports = function(grunt) {

// Configure task(s)
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    build: {
      src: 'js/*.js',
      dest: 'js/script.min.js'
    },
    dev: {
      options: {
        beaitify: true,
        mangle: false,
        compress: false,
        preserveComments: 'all'
      },
      src: 'js/*.js',
      dest: 'js/script.min.js'
    }
  }
});

// Load the plugins
grunt.loadNpmTasks('grunt-contrib-uglify');

// Register task(s)
grunt.registerTask('default',['uglify:dev', ]);
grunt.registerTask('build',['uglify:build', ]);
};
