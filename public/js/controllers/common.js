'use strict';
define(['MyApp'], function(MyApp) {
	MyApp.factory('myFactory', function() {
		var _artist = '';
		var service = {};
		service.getArtist = function() {
			return _artist;
		}
		return service;
	});
});