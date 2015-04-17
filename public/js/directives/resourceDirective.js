'use strict';

define(['directives/directiveModule'], function(directiveModule) {
    directiveModule.directive('resourceDirective', ["registerService",
        function(registerService) {

            return {
                restrict: "A",
                scope: true,
                link: function(scope, elem, attrs) {

                 var self;
                 resetStatus();   

                    function availableSuccessCb(resp,userAvailableMsg,userNotAvailableMsg) {
                        $(self).next(".loader-container").remove();                           
                    
						if (resp.status == "success") {
						   if(resp.data.status){
								$(self).closest(".row").addClass("error-field");
								$(self).after("<span class='status-message error-state'>"+userNotAvailableMsg+"</span>");   
						   }
						   else{
							   $(self).closest(".row").removeClass("error-field");
								$(self).after("<span class='status-message'>"+userAvailableMsg+"</span>");
						   }                               

                        } else {
                            $(self).closest(".row").addClass("error-field");
                          $(self).after("<span class='status-message error-state'>Something went wrong. Please try again.</span>");                               
                        }
                    }

                    function resetStatus(){

                        $(elem).closest(".row").find(".loader-container").remove();
                        $(elem).closest(".row").find(".status-message").remove();
                        $(elem).closest(".row").removeClass("error-field");    

                    }


                    $(elem).on("blur",".loader-input", function() {
                    	
                        self = this;
                        resetStatus();
						var userInput = $(elem).find(".loader-input").val().trim();
						if(userInput){
							$(this).after("<span class='loader-container'><img src='images/cds-loader.gif'></span>");
								var inputName = $(elem).find(".loader-input").data("inputname");
								
								var userAvailableMsg,
									userNotAvailableMsg;

								if (inputName == "userName") {
									userAvailableMsg="Username is available.";
									userNotAvailableMsg = "Username not available";
									registerService.checkUserNameExists(userInput, availableSuccessCb, userAvailableMsg,userNotAvailableMsg);
								} else if (inputName == "mobileNumber") {
									userAvailableMsg="Mobile Number is available for registration.";
									userNotAvailableMsg = "Mobile Number is not available for registration.";
									registerService.checkMobileNoExists(userInput, availableSuccessCb,userAvailableMsg,userNotAvailableMsg);
								} else {
									userAvailableMsg="Email is available for registration.";
									userNotAvailableMsg = "Email is not available for registration.";
									registerService.checkEmailExists(userInput, availableSuccessCb,userAvailableMsg,userNotAvailableMsg);
								}
							
								$("#submitPersonalInfo").on("click", function(){
									resetStatus();
								});
						}


                    });


                }
            }
        }
    ]);

});