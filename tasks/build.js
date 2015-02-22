'use strict';
module.exports = function(grunt) {
    grunt.registerTask('build', 'My "build" task description.', function() {
        grunt.log.writeln('Currently running the "build" task.');
        grunt.task.run(
            'copy',
            'clean:build',
            'browserify:build',
            'less:build',
            'jade'
        );
    });
};
