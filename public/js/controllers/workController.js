
'use strict';

define(['controllers/controllerModule','formValidation','validators/workValidators','errorMessages/workErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	 controllerModule.controller('workController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){		

		var self = this;
        var sessionObj = $sessionStorage.cds.contextObj;

         if (sessionObj.mode == "edit") {
                handleUserEdit();
           	} else {
                handleUserCreation();
           }


		this.age = cdsService.age;
		this.gender = cdsService.gender;		
		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#workRegistrationForm", validationMap, errorJson, config);
		
		registerService.getOccupationOptions(function(resp){				
			$scope.occupationOptions = resp.data;			
		});
		
		registerService.getCareerAspirationOptions(function(resp){				
			$scope.careerAspirationOptions = resp.data;			
		});
		registerService.getSkillGapsOptions(function(resp){				
			$scope.skillGapsOptions = resp.data;			
		});
		
		this.save = function(){
			
			if(formStack.isValid){								
				self.user.userId = cdsService.getUserId();				
				$http({
					method: "post",
					url: appUrls.saveWorkInfo,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.voter');
				}).error(function(data, status, headers, config){
					console.log("failed");
					$state.go('root.register.voter');	

				});
			} 
		}

		 function handleUserEdit() {		 	
                var currentUserId = sessionObj.userId;
           		registerService.getWorkInfo(currentUserId, function(resp) {
                    
           			console.log(resp.data);
                    self.user = resp.data;                    
                });
            }


            function handleUserCreation() {

            	


            }

            function responseParser(resp) {



            }



	}]);

});

