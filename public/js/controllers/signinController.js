
'use strict';

define(['controllers/controllerModule','jquery'], function (controllerModule,$) {

	 controllerModule.controller('signinController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage',"roleService", function($state,$http,appUrlService,cdsService,$scope,registerService,$sessionStorage, roleService){		
	 	var self = this;
	 			
	 
		this.signin = function(){
			$http.post(appUrlService.signin, self.user)
			.success(function(resp){												
				if(resp.status == "success"){
					$state.go("auth.dashboard");	
				}else{					
					self.user={};
					console.log("invalid credentials")
				}				
			})
			.error(function(){
				
			});	
		}
		
	

	 	

	}]);

});

