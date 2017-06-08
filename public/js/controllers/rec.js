'use strict';

define(['MyApp'], function(MyApp) {

	var recCtrl = ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
		$rootScope.Title = '推荐';
	}];

	return recCtrl;
});