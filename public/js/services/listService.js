
'use strict';

define(['services/serviceModule'], function (serviceModule) {



	serviceModule.factory('userDetailsService', ['$resource', function(resource){

			return resource('/user/usersList',{}, {'query': {isArray: false }});
		
	}]);

	serviceModule.factory('userTypeService', ['$resource', function(resource){

			return resource('/user/userTypes',{},{'query': {isArray: false }});
		
	}]);	

	/*
	angular.module('myApp.services').factory('Entry', function($resource) {
  		return $resource('/api/entries/:id'); // Note the full endpoint address
	}); 
*/

	serviceModule.factory('listUtilService', [ function(){

				
				return {

					initiateDelete : function(userMobile, cb,msg) {

					$http.get(appUrlService.deleteUser, {
						params: {
						mobileNumber: userMobile
						}
					}).success(function(data) {
						cb(data,msg);
					});
					}






				};




		
	}]);











});

