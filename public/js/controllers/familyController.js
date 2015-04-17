define(['controllers/controllerModule','formValidation','validators/familyValidators','errorMessages/familyErrors','jquery'], function (controllerModule,formValidation,validationMap,errorJson,$) {

	controllerModule.controller('familyController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){
		var self = this;

		  var sessionObj = $sessionStorage.cds.contextObj;


            if (sessionObj.mode == "edit") {
                handleUserEdit();
            } else {
                handleUserCreation();
            }
            



		var config = {
            initiate :false,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		
		registerService.getEducationOptions(function(resp){				
			$scope.educationOptions = resp.data;			
		});
		var formStack = formValidation.init("#familyRegistrationForm", validationMap, errorJson, config);
		
		this.save = function(){
			
			var requestObj = [];
			if(self.user.spouse) {
				self.user.spouse.relationType = "Wife";
				self.user.spouse.citizenId = cdsService.getUserId();
			}
			if(self.user.child) {				
				self.user.child.relationType = "Kid";
				self.user.child.citizenId = cdsService.getUserId();				
			}
			requestObj[0] = {};			
			requestObj[0]['userId'] = cdsService.getUserId();
			requestObj[1] = angular.copy(self.user.spouse);		
			
			requestObj[2] = angular.copy(self.user.child);
			
			if(formStack.isValid){								

				$http({
					method: "post",
					url: appUrls.saveFamily,
					data: requestObj
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.cadre');
				}).error(function(data, status, headers, config){
					

				});
			} 
		}


		  function handleUserEdit() {
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getFamilyInfo(currentUserId, function(resp) {
                    self.user = resp.data;
                    //responseParser()
                    console.log(resp.data);

                });
            }


            function handleUserCreation() {




            }

            function responseParser(resp) {

            	var modelObj = resp


            }







	}]);

});

