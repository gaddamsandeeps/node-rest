/*global require*/
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
