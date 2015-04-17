
'use strict';

define(['services/serviceModule'], function (serviceModule) {
	serviceModule.factory('cdsService', ['$http',"appUrlService",function($http, appUrlService){	
		
		var age,
			isRegistered,
			userId;
		
		return {
			age:age,
			setUserId:function(val){
				userId = val;
			},
			getUserId:function(){
				return userId;
			},
			getUserSession : function(){
				return $http.get(appUrlService.getUserSession);				
			}
			
			
		};
	}]);
});

