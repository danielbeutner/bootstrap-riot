'use strict';
module.exports = function(grunt) {
    grunt.registerTask('pre', 'My "pre" task description.', function() {
        grunt.log.writeln('Currently running the "pre" task.');
        grunt.task.run(
            'clean:pre',
            'riot',
            'concat'
        );
    });
};
