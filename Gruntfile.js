'use strict';
module.exports = function(grunt) {

    // Init Grunt plugins
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Set development mode if there is no env var
    if(typeof process.env.NODE_ENV === 'undefined') {
        grunt.log.warn('Your environment is not set. Please export NODE_ENV to your preferred stage!\nYou will run into development mode now.');
        process.env.NODE_ENV = 'development';
    }

    // Vars
    var _ = require('lodash'),
        path = require('path'),
        taskFiles = grunt.file.expand('grunt/*.yaml'),    // Load all configuration
        packageInfo = grunt.file.readJSON('package.json'), // Load package info

        // Global configuration
        globalConfig = {
            nodeenv: process.env.NODE_ENV,
            pkg: packageInfo,
            meta: {
              banner:
                '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - built <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Made with me, myself and <%= pkg.author %>\n' +
                ' * Licensed <%= pkg.license %>\n' +
                ' */\n'
            }
        };

    // Show infos
    grunt.log.writeln(grunt.template.process(globalConfig.meta.banner, {data: globalConfig}));

    // Load all configurations for our tasks
    grunt.verbose.subhead('Task Configuration:');
    _.each(taskFiles, function  (file) {
        var taskName = path.basename(file, '.yaml'),
            taskCont = grunt.file.readYAML(file);
            grunt.verbose.ok('Reading task configuration: ' + taskName);
        globalConfig[taskName] = taskCont;
    });

    // Init configuration
    grunt.config.init(globalConfig);

    // Load all tasks in ./tasks
    grunt.task.loadTasks('tasks');
    // Register default task (the other tasks are in ./tasks)
    grunt.registerTask('default', 'The default task: dist', function() {
        grunt.log.writeln('Currently running the "dist" task.');
        grunt.task.run('dist');
    });
};
