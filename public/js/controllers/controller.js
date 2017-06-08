'use strict';

//var controllerFirst = angular.module('controllerFirst',[]);

//controllerFirst.controller('mainCtrl',['$scope','$http',
//	function($scope,$http){
//		$scope.qushuju = function(){
//			$http({
//				method:'get',
//				url:'/qushuju'
//			}).then(function successCallback(data){
//				console.log(data);
//			}),function errorCallback(err){
//				console.log(err);
//			};
//		};
//}]);
//
//
//
//controllerFirst.controller('loginCtrl',['$scope','$http',
//	function($scope,$http){
//	$scope.submit=function(User){
//		$http({
//			method:'get',
//			url:'data/user.json'
//		}).then(function successCallback(response){
//			var userName = response.data.user[0]['username'];
//			var passWord = response.data.user[0]['password'];
//			if(User.Name == userName&&User.PassWord == passWord){
//				console.log('跳转并保持登陆状态');
//				if(typeof(Storage)!=="undefined"){
//					localStorage.sitename=response.data.user[0]['username'];
//					localStorage.sitepassword=response.data.user[0]['password'];
//				}else{
//					alert('对不起，您的浏览器不支持 web 存储。');
////					document.getElementById("result").innerHTML="对不起，您的浏览器不支持 web 存储。";
//				}
//			}else{
//				console.log('登陆失败，保持当前页面');
//			}
//		}),function errorCallback(response){
//			console.log('请求失败');
//		};
//	};
//}]);
