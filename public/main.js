/**
* Created by Charles on 2014/11/14.
*/
require.config({
    //定义基础路径，其他的path等路径是基于基础路径进行引入的。如果不配置，默认为引入requireJS页面所在的位置
    //baseUrl:"../framework",

    //requirejs默认对文件进行js扩展名处理，如果加上js或者以http、https开头，则不处理
    paths:{
        //定义组件名称，以及组件js所在的路径
        jquery:"js/framework/jquery-3.1.1.min",
        angular:"js/framework/angular-1.6.4/angular",
        'angular-route':"js/framework/angular-1.6.4/angular-route",
        bootstrap:"js/framework/bootstrap/js/bootstrap"
    },
    //
    shim:{
      "angular":{exports: "angular"},
      'angular-route' : {deps:['angular']},
      'bootstrap': {deps:['jquery']}
    },
    priority: [
        "angular"
    ]
});

require(["angular",
		 "MyApp",
		 "js/controllers/index",
		 "angular-route",
		 "jquery",
		 "bootstrap",
		 "route"
],function(angular,MyApp){
    //angularjs 启动
    angular.bootstrap(document,['MyApp']);
});