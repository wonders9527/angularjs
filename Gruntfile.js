/**
 * Created by Administrator on 2017/6/8.
 */
//包装函数
module.exports = function(grunt) {
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/main.js',
                dest: 'public/build/<%= pkg.name %>-<%=pkg.version%>.min.js'
            }
        },
        //jshint插件的配置信息
        jshint:{
            build:['Gruntfile.js','public/*.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        }
    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //告诉grunt，当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default', ['uglify','jshint']);
};

