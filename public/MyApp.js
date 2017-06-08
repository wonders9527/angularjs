

define(['angular'], function(angular) {
	return angular.module('MyApp', ['ngRoute']);
});

//define(['angular'], function (angular ) {
//
//return angular.module('app', []);
//});
//var MyApp = angular.module('MyApp',['ngRoute','controllerFirst']);
//
//MyApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
//	$routeProvider.
//		when('/',{templateUrl:'templates/main.html',controller:'mainCtrl'}).
//		when('/main',{templateUrl:'templates/main.html',controller:'mainCtrl'}).
//		when('/login',{templateUrl:'templates/login.html',controller:'loginCtrl'}).
//		otherwise({redirectTo:'/'});
//}]);