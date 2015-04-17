define(['controllers/controllerModule','formValidation','validators/cadreValidators','errorMessages/cadreErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	controllerModule.controller('cadreController', ['$state','$http',"appUrlService",'$scope','registerService',"cdsService","$sessionStorage", function($state,$http,appUrls,$scope,registerService,cdsService,$sessionStorage){
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
		var formStack = formValidation.init("#cadreRegistrationForm", validationMap, errorJson, config);
		
		registerService.getPartyPositionsOptions(function(resp){				
			$scope.partyPositionsOptions = resp.data;			
		});
		registerService.getPerformanceGradeOptions(function(resp){				
			$scope.performanceGradeOptions = resp.data;			
		});
		
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			if(formStack.isValid){								

				$http({
					method: "post",
					url: appUrls.saveCadre,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.personal');
				}).error(function(data, status, headers, config){
					
				});
			} 
		}


		  function handleUserEdit() {
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getCadreInfo(currentUserId, function(resp) {
                    self.user = resp.data;

                });
            }


            function handleUserCreation() {




            }

            function responseParser(resp) {



            }




	}]);

});

