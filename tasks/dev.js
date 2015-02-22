'use strict';
module.exports = function(grunt) {
    grunt.registerTask('dev', 'My "dev" task description.', function() {
        grunt.log.writeln('Currently running the "dev" task.');
        grunt.task.run(
            'build',
            'watch'
        );
    });
};
