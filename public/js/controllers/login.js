'use strict';

define(['MyApp'], function(MyApp) {

	var loginCtrl = ['$scope', '$rootScope', '$http', '$location',
		function($scope, $rootScope, $http, $location) {
			$rootScope.loginHide=true;
			$rootScope.Title = '登录';
			$rootScope.login = function(user) {
				$http({
					method: 'post',
					url: 'http://192.168.3.3:8888/login',
					withCredentials: true,
//					headers: {
//						'Content-Type': 'application/json'
//					},
					data: user
				}).then(function successCallback(result) {
						console.log(result);
						if(result.data['mode'] === '1') {
							$rootScope.loginHide = false;
							$location.path("/");
							$rootScope.isHide = true;
							$rootScope.isShow = true;
							$rootScope.loginUser = result.data['username'];
						} else {
							alert(data.data['state']);
						}
					},
					function errorCallback(err) {
						console.log(err);
					});

			};
		}
	];
	return loginCtrl;
});