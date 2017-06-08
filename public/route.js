'use strict';
define(['MyApp', 'angular'],

	function(MyApp) {

		MyApp.config(['$routeProvider', '$controllerProvider', '$locationProvider',

			function($routeProvider, $controllerProvider, $locationProvider) {
				$routeProvider.
				when('/', {
					templateUrl:'./public/templates/home.html',
					controller: 'homeCtrl',
					// resolve用来在完成路由前处理一些事
					// 这里用来动态加载并注入相应的控制器
					resolve: {
						// ctrlRegister为我自己写的一个复用的函数，
						// 用于注入控制器。见第三部分
						delay: ctrlRegister('homeCtrl', ['./public/js/controllers/home.js'])
					}
				}).
				when('/home', {
					templateUrl: './public/templates/home.html',
					controller: 'homeCtrl',
					resolve: {
						delay: ctrlRegister('homeCtrl', ['./public/js/controllers/home.js'])
					}
				}).
				when('/login', {
					templateUrl: './public/templates/login.html',
					controller: 'loginCtrl',
					resolve: {
						delay: ctrlRegister('loginCtrl', ['./public/js/controllers/login.js'])
					}
				}).
				when('/logout', {
					templateUrl: './public/templates/home.html',
					controller: 'logoutCtrl',
					resolve: {
						delay: ctrlRegister('logoutCtrl', ['./public/js/controllers/logout.js'])
					}
				}).
				when('/reg', {
					templateUrl: './public/templates/reg.html',
					controller: 'regCtrl',
					resolve: {
						delay: ctrlRegister('regCtrl', ['./public/js/controllers/reg.js'])
					}
				}).
				when('/rec', {
					templateUrl: './public/templates/rec.html',
					controller: 'recCtrl',
					resolve: {
						delay: ctrlRegister('recCtrl', ['./public/js/controllers/rec.js'])
					}
				}).
				when('/newest', {
					templateUrl: './public/templates/newest.html',
					controller: 'newestCtrl',
					resolve: {
						delay: ctrlRegister('newestCtrl', ['./public/js/controllers/newest.js'])
					}
				}).
				otherwise({
					redirectTo: '/'
				});
				//干掉url中的！号
				$locationProvider.hashPrefix('');
				// 该函数接受两个参数
				// ctrlName，字符串类型，为该控制器的名字
				// ctrlModule，字符串数组类型，为要引入的控制器的相对地址
				// 调用例如 ctrlRegister('ListCtrl',['controllers/ListCtrl.js'])
				function ctrlRegister(ctrlName, ctrlModule) {
					return function($q) {
						var defer = $q.defer();
						// 加载该控制器，并将返回值赋给controller，返回值一般是一个控制器函数
						require(ctrlModule, function(controller) {
							// 将返回值注册为名称为ctrlName的控制器
							$controllerProvider.register(ctrlName, controller);
							defer.resolve();
						});
						// 完成注册
						return defer.promise;
					}
				}
			}
		]);

	});