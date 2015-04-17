'use strict';
define(['controllers/controllerModule'], function (controllerModule) {

	 controllerModule.controller('leftNavController', ['$http','$location',"cdsService",'$rootScope', function($http,$location,cdsService,$rootScope){
		var self =this;
		this.items = [
			{path: '/register/personal', title: 'Personal'},
			{path: '/register/work', title:'Work Information'},
			{path: '/register/voter', title: 'Voter Information'},
			{path: '/register/address', title:'Residential Address'},
			{path: '/register/volunteer',title:'Volunteer'},
			{path:'/register/family',title:'Family'},
			{path:'/register/cadre',title:'Cadre Information'}
		];
		
		this.isActive = function(item){
			if (item.path == $location.path()) {				
				return true;
			}
			return false;
		},		
		
		$rootScope.$on('$locationChangeSuccess', function(){			
			//self.isRegistered = cdsService.isRegistered;		
			
		});
	}]);

});

