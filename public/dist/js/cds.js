/*global define*/
'use strict';

define(['angular','uiRouter','uiRouterStyles','angularRoute','services/serviceLoader','services/appUrlService','services/cdsService','directives/directiveLoader','controllers/controllerLoader','angularAnimate','angularResource','ngDialog',"ngStorage"], function (angular) {
    var app = angular.module('CDSHOME', ['ngRoute','serviceModule','directiveModule',"controllerModule",'ngAnimate','ngResource','ui.router','uiRouterStyles','ngDialog','ngStorage']);
    return app;
});
;/*global define*/
'use strict';

define(['app','uiRouter','angularRoute'], function (app) {


app.run(["$rootScope", "$sessionStorage","$state","$location","roleService","cdsService",function($rootScope, $sessionStorage,$state,$location,roleService,cdsService){

       $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){           
                

           var checkUserSession = cdsService.getUserSession();			
			checkUserSession
			.success(function(resp){					                                                    
                         
                  if(resp.status == "success"){  
                   
                    cdsService.userAuthenticated = true;
					cdsService.user = resp.data.user;
					var userRole = "citizen";                    
                    var privilegeStateArray = roleService.getPrivilegeStateArray(cdsService.user.privileges);                  
				    var isValidModule = roleService.checkValidModule(toState.name,privilegeStateArray);
                                 
				if(toState.secured && !isValidModule || toState.name == "root.signin"){                					 
					 event.preventDefault();
                     $state.go("auth.dashboard");                      
			     }  
             }else{                
                if(toState.secured){
                    event.preventDefault();                                    
                     $state.go("root.signin");                    
                }              
             }	
            })
	
        });

}]);

app.config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider
    .otherwise('/');
    

    /*****Non authenticated views*****/



    $stateProvider
    .state('root',{        
         abstract: true,
         url : "",
         views: {
            'header': {
                templateUrl: 'views/nonauth/common/header.html'
            },
            'footer': {
                templateUrl: 'views/nonauth/common/footer.html'                
            }
        }
    })

    /*Page id : CDS1*/

    .state('root.home',{
        url: '/',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/home.html',
                controller : "homeController as homeCtrl"                
            }
             
        },
        secured : false
    })
    .state('root.signin',{
        url: '/signin',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/signin.html',
                controller : "signinController as signinCtrl"
            }
        },
        secured : false
    })
    .state('root.knowyourmp',{
        url: '/knowyourmp',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/knowyourmp.html'
            }
        },
        secured : false
    })
        .state('root.parliament',{
        url: '/parliament',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/parliament.html'
            }
        },
        secured : false
    })
        .state('root.aboutconstituency',{
        url: '/aboutconstituency',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/aboutconstituency.html'
            }
        },
        secured : false
    })
        .state('root.vision',{
        url: '/vision',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/vision.html'
            }
        },
        secured : false
    })
        .state('root.initiatives',{
        url: '/initiatives',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/initiatives.html'
            }
        },
        secured : false
    })
        .state('root.gallery',{
        url: '/gallery',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/gallery.html'
            }
        },
        secured : false
    })
        .state('root.contactus',{
        url: '/contactus',
        views: {           
            'content@': {
                templateUrl: 'views/nonauth/contactus.html'
            }
        },
        secured : false
    })
    .state('auth',{        
         abstract: true,
         url : "",
         views: {
            'header': {
                templateUrl: 'views/auth/common/header.html'
            },
            'footer': {
                templateUrl: 'views/auth/common/footer.html'                
            }
        }
    })
    .state('auth.dashboard',{        
         url : "/dashboard",
         views: {
            'content@': {
                templateUrl: 'views/auth/dashboard.html'
            }
        },
        secured : true
    })
    .state('auth.register', {
        url: '/register',
        views: {
            'content@': {
                templateUrl: 'views/auth/register/register.html',
                controller : "leftNavController as leftNavCtrl"
            }
        },
         secured : true
    })
    .state('auth.register.personal', {
        url: '/personal',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/personal.html',
                controller : "personalController as personalCtrl"
            }
        },
         secured : true
    })
    .state('auth.register.voter', {
        url: '/voter',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/voter.html',
                controller : "voterController as voterCtrl"
            }
        },
         secured : true
    })
    .state('auth.register.address', {
        url: '/address',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/address.html',
                controller : "addressController as addressCtrl"
            }
        },
         secured : true
    }) 
    .state('auth.register.volunteer', {
        url: '/volunteer',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/volunteer.html',
                controller : "volunteerController as volunteerCtrl"
            }
        },
         secured : true
    })    
    .state('auth.register.family', {
        url: '/family',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/family.html',
                controller : "familyController as familyCtrl"
            }
        },
         secured : true
    })    
    .state('auth.register.cadre', {
        url: '/cadre',
        views: {
            'formSubsection': {
                templateUrl: 'views/auth/register/subsection/cadre.html',
                controller : "cadreController as cadreCtrl"
            }
        },
         secured : true
    })
    .state('auth.register.work',{
        url: '/work',
        views:{
            'formSubsection':{
                templateUrl:'views/auth/register/subsection/work.html',
                controller: "workController as workCtrl"
            }
        },
         secured : true
        
    })
    .state('auth.list', {
        url: '/list',
        views: {
            'content@': {
                templateUrl: 'views/auth/list/list.html',
                controller : "listController as listCtrl"                
            },
        },
         secured : true
 
    })
    .state('auth.viewMember',{
        url : "/user/view/:id",
        views: {
            'content@': {
                templateUrl: 'views/auth/list/view-member.html',
                controller : "viewController as viewCtrl"                
            }
        },
         secured : true

    })


});

});
;/*global require*/
'use strict';

require.config({
	baseUrl : "js",
	paths: {

		"app" : "app",
		"config" : "config",
		/*Services, Controllers & directives*/		 		 		 
		 "angular": 'lib/angular',
		'angularRoute' : 'lib/angular-route',
		'angularAnimate' : 'lib/angular-animate',
		'angularResource' : 'lib/angular-resource',
		"services":"services",
		"directives":"directives",
		"controllers":"controllers",
		"uiRouter": "lib/angular-ui-router",
		"jquery" : "lib/min/jquery-1.11.2.min",
		"underscore" : "lib/min/underscore-min",
		"ngDialog" : "lib/ngDialog",
		"validation":"lib/validation",
		"formValidation":"lib/formValidation",
		"core" : "lib/jqueryui/core",
        "widget": "lib/jqueryui/widget",
        "tooltip" : "lib/jqueryui/tooltip",
        "autocomplete" :"lib/jqueryui/autocomplete",
        "datepicker" : "lib/jqueryui/datepicker",
        "position" : "lib/jqueryui/position",
        "inputTooltip" : "lib/inputTooltip",
		"menu" :"lib/jqueryui/menu",
		"uiRouterStyles" : "lib/ui-router-styles",
		"validators" :"lib/validators",
		"errorMessages" : "lib/errorMessages",
		"ngStorage" : "lib/ngStorage",
		/*Foundation*/		
		"slick" : "lib/slick"
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angularAnimate' : {
			exports : 'angular-animate',
			deps : ['angular']
		},
		'angularResource' : {
			exports : 'resource',
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
		},
		'uiRouter':{
            deps: ['angular']
        },
		'underscore' : {
            exports : '_'
		},
		'ngDialog' : {
			deps : ['angular']
		},
		'ngStorage' : {
			deps : ['angular']
		},
		"foundation" : {
			deps : ["jquery"]
		},
		"slick" : {
			deps:["jquery"]
		},
		"uiRouterStyles" : {
			deps :["angular"]
		}
	}
});

require(['angular','app',"config"], function (angular) {		
	angular.bootstrap(document, ['CDSHOME']);
});
