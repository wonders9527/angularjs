'use strict';
define(['MyApp', 'angular'], function(MyApp, angular) {
	return MyApp.controller('indexCtrl', function($scope, $rootScope, $http, $location) {
//		$rootScope.qushuju = function() {
//			$http({
//				method: 'get',
//				url: 'http://192.168.3.3:8888/qushuju'
//			}).then(function successCallback(result) {
//				console.log(result);
//			}, function errorCallback(err) {
//				console.log(err);
//			});
//		}

		$http({
			method: 'get',
			url: 'http://192.168.3.3:8888/checkInfo',
			withCredentials: true
		}).then(function successCallback(result) {
				if(result.data['mode'] === '1') {
					$location.path("/");
					$scope.isHide = true;
					$scope.isShow = true;
					$scope.loginUser = result.data['username'];
				}
			},
			function errorCallback(err) {
				console.log(err);
			});
	});
});

//define(['MyApp'], function(MyApp) {
//	var indexCtrl = ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
//		$http({
//			method: 'get',
//			url: '/checkInfo',
//		}).then(function successCallback(result) {
//				if(result.data['mode'] === '1') {
//					$location.path("/");
//					$scope.isHide = true;
//					$scope.isShow = true;
//					$scope.loginUser = result.data['username'];
//				}
//			},
//			function errorCallback(err) {
//				console.log(err);
//			});
//	}];
//	return indexCtrl;
//});
//

//		$scope.$on('login', function(e, data) {
//			if(data.data['mode'] === '1') {
//				$location.path("/");
//				$scope.isHide = true;
//				$scope.isShow = true;
//				$scope.loginUser = data.data['username'];
//			} else {
//				alert(data.data['state']);
//			}
//		});
//		$scope.$on('logout', function(e, data) {
//			if(data.data['mode'] === '1') {
//				$scope.isHide = false;
//				$scope.isShow = false;
//				$scope.loginUser = '';
//			}
//		});