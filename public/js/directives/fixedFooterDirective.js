
'use strict';

define(['directives/directiveModule','jquery'], function (directiveModule,$) {
	directiveModule.directive('fixedFooterDirective', ["$location","$rootScope", function($location, $rootScope){	
		
		return {	
			restrict: "A",			
			link: function(scope, elem, attrs) {				
				function setFixedFooter(){
					var sectionHt = $('#appSection').height()+20; 
					var ctWindowHt = $(window).height();
					if (sectionHt+100<=ctWindowHt){ 
					    $(elem).css('top', ctWindowHt-40+'px');
					    $(elem).css({'display':'block', "position" : "absolute","width" : "100%"});
					}else{
					    
					    $(elem).css({'display':'block', "position" : "relative", "width" : "100%","top":"0"});
					}
				}	
				setFixedFooter();
			 	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){   
			 		setFixedFooter();
				});
			}
		}		
	}]);
	
});

