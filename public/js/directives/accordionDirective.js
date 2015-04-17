
'use strict';

define(['directives/directiveModule','accordion'], function (directiveModule) {
	directiveModule.directive('accordion', ["cdsService",function(cdsService){	
		
		return {	
			restrict: "E",				
			link: function(scope, elem, attrs) {
						
				$(elem).accordion({
                  
                });
				
			}
		}		
	}]);
	
});

