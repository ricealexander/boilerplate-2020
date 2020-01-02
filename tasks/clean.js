const shell   = require('shelljs')
const project = require('../project')

const { distribution } = project.paths

module.exports = grunt => {
  grunt.registerTask('clean', `Remove the ${distribution} folder`, () => {
    shell.rm('-rf', distribution)
  })
}
