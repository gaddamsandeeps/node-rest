
'use strict';

define(['directives/directiveModule','datepicker'], function (directiveModule) {
	directiveModule.directive('dob', ["cdsService",function(cdsService){	
		var age;
		return {	
			restrict: "A",
			scope:{
				dob :'=' 
			},		
			link: function(scope, elem, attrs) {
						
				$(elem).datepicker({
                    dateFormat:'dd/mm/yy',
					yearRange: "-100:+0",
					changeMonth: true,
					changeYear: true,
                    onSelect:function (date) {					
                    	scope.dob = date;                    	
						var selectedDate =$(elem).val().split('/'), 
							birthDate = new Date(selectedDate[2],selectedDate[1],selectedDate[0]),
							today = new Date(),
							diff =  today - birthDate,
							age = Math.floor(diff/31536000000);								
							cdsService.age = age;													                		
                    }
                });
				$("#ui-datepicker-div").addClass("datePickerCustom");
			}
		}		
	}]);
	
});

