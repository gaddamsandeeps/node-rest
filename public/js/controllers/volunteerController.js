define(['controllers/controllerModule','formValidation','validators/volunteerValidators','errorMessages/volunteerErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	 controllerModule.controller('volunteerController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService","$sessionStorage", function($state,$http,appUrls,$scope,registerService,cdsService,$sessionStorage){
		var self = this;

		 var sessionObj = $sessionStorage.cds.contextObj;


            if (sessionObj.mode == "edit") {
                handleUserEdit();
            } else {
                handleUserCreation();
            }



		var config = {
            initiate :true,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#volunteerRegistrationForm", validationMap, errorJson, config);
		
		registerService.getInterestedAreasOptions(function(resp){				
			$scope.interestedAreasOptions = resp.data;			
		});
		registerService.getVolunteerCategoryOptions(function(resp){				
			$scope.volunteerCategoryOptions = resp.data;			
		});
		registerService.getLeadOptions(function(resp){				
			$scope.leadOptions = resp.data;			
		});
		registerService.getPerformanceGradeOptions(function(resp){				
			$scope.performanceGradeOptions = resp.data;			
		});
		
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			var requestObj = {};
			requestObj = angular.copy(self.user);
			requestObj.volunteerInterestedAreas =[];
			requestObj.volunteerInterestedAreas[0]= angular.copy(self.user.volunteerInterestedAreas);
			
			
			console.log(requestObj);
			if(formStack.isValid){								

				$http({
					method: "post",
					url: appUrls.saveVolunteer,
					data: requestObj	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.family');
				}).error(function(data, status, headers, config){
					console.log("failed");
					$state.go('root.register.family');	

				});
			} 
		};

		   function handleUserEdit() {
                self.user = {};
                self.user.volunteerInterestedAreas = {};
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getVolunteerInfo(currentUserId, function(resp) {
                  
                  self.user.volunteer = resp.data;
                  //self.user.volunteerInterestedAreas.interestId = resp.data.volunteerInterestedAreas[0].interestId;
                  
                });
            }


            function handleUserCreation() {




            }

            function responseParser(resp) {



            }



	}]);

});

