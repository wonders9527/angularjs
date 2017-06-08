'use strict';
define(['MyApp'], function(MyApp) {
	var regCtrl = ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
		$rootScope.Title='注册';
		$scope.reg = function(user) {
			$http({
				method: 'post',
				url: 'http://192.168.3.3:8888/reg',
				data: user
			}).then(function successCallback(result) {
					alert(result.data);
				},
				function errorCallback(err) {
					console.log(err);
				});
		};
	}];

	return regCtrl;
});