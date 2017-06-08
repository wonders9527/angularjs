'use strict';

define(['MyApp'], function(MyApp) {

	var logoutCtrl = ['$scope', '$rootScope', '$http','$location', function($scope, $rootScope, $http,$location) {
		$http({
			method: 'get',
			url: 'http://192.168.3.3:8888/logout',
			withCredentials: true
		}).then(function successCallback(result) {
				if(result.data['mode'] === '1') {
					$rootScope.isHide = false;
					$rootScope.isShow = false;
					$rootScope.loginUser = '';
					$location.path("/");
				}
			},
			function errorCallback(err) {
				console.log(err);
			});
	}];

	return logoutCtrl;
});