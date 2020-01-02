// build:sass      × tasks/process-sass.js
// clean           × tasks/clean.js
// postprocess:css × tasks/post-process-css.js

module.exports = grunt => {
  grunt.loadTasks('./tasks')
  grunt.registerTask('default', ['clean', 'build:sass', 'postprocess:css'])
}
