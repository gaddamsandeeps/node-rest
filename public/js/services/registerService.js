define(['services/serviceModule', "services/appUrlService"], function(serviceModule, appUrlService) {

	serviceModule.factory('registerService', ['$http', 'appUrlService',
		function($http, appUrlService) {
			return {

				checkUserNameExists: function(userName, cb, userAvailableMsg,userNotAvailableMsg) {
					$http.get(appUrlService.getUserAvailability, {
						params: {
							userName: userName
						}
					}).success(function(data) {	
						cb(data,userAvailableMsg,userNotAvailableMsg);
					});
				},

				checkMobileNoExists: function(userMobile, cb,userAvailableMsg,userNotAvailableMsg) {

					$http.get(appUrlService.getMobileAvailability, {
						params: {
						mobileNumber: userMobile
						}
					}).success(function(data) {
						cb(data,userAvailableMsg,userNotAvailableMsg);
					});
				},

				checkEmailExists: function(email, cb,userAvailableMsg,userNotAvailableMsg) {
				 $http.get(appUrlService.getEmailAvailability, {
				  params: {
				   email: email
				  }
				 }).success(function(data) {
				  cb(data,userAvailableMsg,userNotAvailableMsg);
				 });
				},


				getEducationOptions: function(cb) {

				 $http.get(appUrlService.getEducationInfo, {


				 }).success(function(resp) {
				  cb(resp)
				 });
				},
				getOccupationOptions: function(cb) {
				 $http.get(appUrlService.getOccupationInfo, {

				 }).success(function(resp) {
				  cb(resp);
				 });
				},
				getInterestedAreasOptions: function(cb) {
				 $http.get(appUrlService.getInterestedAreasInfo, {

				 }).success(function(resp) {
				  cb(resp);
				  
				 });
				},
				getPartyPositionsOptions: function(cb) {
				 $http.get(appUrlService.getPartyPositionsInfo, {

				 }).success(function(resp) {
				  cb(resp);
				  
				 })
				},


				getAddress: function(userInput, cb) {

				 $http.get(appUrlService.getAddress, {
				  params: {
				   q: userInput
				  }
				 }).success(function(data) {
				  cb(data);
				 });
				},

				getConstituencyInfo: function(userInput, cb) {
				 $http.get(appUrlService.getConstituencyInfo, {
				  params: {
				   q: userInput
				  }
				 }).success(function(data) {
				  cb(data);
				 });

				},	
				getVolunteerCategoryOptions: function(cb) {
				 $http.get(appUrlService.getVolunteerCategoryInfo, {

				 }).success(function(resp) {
				  cb(resp);
				  
				 })
				},
				getLeadOptions:function(cb){
					 $http.get(appUrlService.getLeadInfo, {

					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getPerformanceGradeOptions:function(cb){
					 $http.get(appUrlService.getPerformanceGradeInfo, {

					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getCareerAspirationOptions:function(cb){
					 $http.get(appUrlService.getCareerAspirationInfo, {

					 }).success(function(resp) {
					  cb(resp);					
					 })
				},
				getSkillGapsOptions:function(cb){
					 $http.get(appUrlService.getSkillGapsInfo, {

					 }).success(function(resp) {
					  cb(resp);
					  
					 })
				},
				getPersonalInfo : function(userId, cb){
					 $http.get(appUrlService.getUserPersonalInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })		
				},
				getWorkInfo: function(userId, cb){				

					 $http.get(appUrlService.getUserWorkInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })
				},
				getVoterInfo: function(userId, cb){				

					 $http.get(appUrlService.getUserVoterInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })
				},
				getAddressInfo : function(userId, cb){
					 $http.get(appUrlService.getUserAddressInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getVolunteerInfo : function(userId, cb){
					 $http.get(appUrlService.getUserVolunteerInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getFamilyInfo : function(userId, cb){
					 $http.get(appUrlService.getUserFamilyInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })	
				},
				getCadreInfo : function(userId, cb){
					 $http.get(appUrlService.getUserCadreInfo, {
					 	params : {userId : userId}
					 }).success(function(resp) {
					  cb(resp);					  
					 })						
				}




   }

  }
 ]);


});