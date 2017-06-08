'use strict';
define(['MyApp'], function(MyApp) {
	var homeCtrl = ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
		$rootScope.Title='首页';
	}];

	return homeCtrl;
});