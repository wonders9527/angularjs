'use strict';

define(['MyApp'], function(MyApp) {

	var newestCtrl = ['$scope','$rootScope','$http','$location', function($scope,$rootScope,$http,$location) {
		$rootScope.Title='最新';
	}];

	return newestCtrl;
});