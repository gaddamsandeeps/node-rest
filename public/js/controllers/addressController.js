
'use strict';

define(['controllers/controllerModule','formValidation','validators/addressValidators','errorMessages/addressErrors'], function (controllerModule,formValidation,validationMap,errorJson) {

	 controllerModule.controller('addressController', ['$state','$http',"registerService","appUrlService","cdsService","$sessionStorage","$scope", function($state,$http,registerService,appUrls,cdsService,$sessionStorage,$scope){
		var self = this;

		/******Session manager****/

		var sessionObj = $sessionStorage.cds.contextObj;


            if (sessionObj.mode == "edit") {
                handleUserEdit();
            } else {
                handleUserCreation();
            }
            
        /**************************/    

		var config = {
            initiate :true,
            blurValidation: false,
            htmlValidation : false,
            submitValidForm : false,
            runCallBack : false,
        };
		var formStack = formValidation.init("#addressRegistrationForm", validationMap, errorJson, config);
		
			self.user={};
			//For resident country
			self.user.nriAddress = false;
			


		this.save = function(){
			
			if(self.nri) self.nri.nriCountry ="USA"; 

			var requestObj = [];
			
			requestObj[0]={};
			requestObj[0]['userId'] = cdsService.getUserId();
			requestObj[1] = angular.copy(self.user);			
			if(self.nri){
				requestObj[2] = angular.copy(self.nri);
			}

			if(formStack.isValid){								

				$http({
					method: "post",
					url: appUrls.saveresidentialaddress,
					data: requestObj	
				}).success(function(data, status, headers, config){
					console.log("success");
					$state.go('root.register.volunteer');
				}).error(function(data, status, headers, config){
					console.log("failed");
					$state.go('root.register.volunteer');	

				});
			} 
		}


		   function handleUserEdit() {
                self.showImage = false;
                var currentUserId = sessionObj.userId;
                registerService.getAddressInfo(currentUserId, function(resp) {
                    var htmlResponse = responseParser(resp.data);
                	console.log(htmlResponse);
                    self.user = htmlResponse;

                });
            }


            function handleUserCreation() {

            }

            function responseParser(resp) {
            	if(resp.length){
            		var modelObj = resp[0];            	
            		//External obj reference            		
            		$scope.voterNodeObj = angular.copy(modelObj.postalAddress);	            		
            		return modelObj;	
            	} 	            	
            }


	}]);

});

