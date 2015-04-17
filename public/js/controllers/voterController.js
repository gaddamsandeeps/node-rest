
'use strict';

define(['controllers/controllerModule','formValidation','validators/voterValidators','errorMessages/voterErrors'], function (controllerModule,formValidation,validationMap,errorJson) {

	controllerModule.controller('voterController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){
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
            runCallBack : false
        };
		var formStack = formValidation.init("#voterRegistrationForm", validationMap, errorJson, config);
		
		this.save = function(){
			self.user.userId = cdsService.getUserId();
			if(formStack.isValid){								

				$http({
					method: "post",
					url: appUrls.saveVoterInfo,
					data: self.user	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.address');
				}).error(function(data, status, headers, config){
					console.log("failed");
					$state.go('root.register.address');	

				});
			} 
		}

		 function handleUserEdit() {
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getVoterInfo(currentUserId, function(resp) {
                    self.user = resp.data;

                });
            }


            function handleUserCreation() {




            }

            function responseParser(resp) {



            }






		
	}]);

});

