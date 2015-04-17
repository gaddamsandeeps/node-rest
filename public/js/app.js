/*global define*/
'use strict';

define(['angular','uiRouter','uiRouterStyles','angularRoute','services/serviceLoader','services/appUrlService','services/cdsService','directives/directiveLoader','controllers/controllerLoader','angularAnimate','angularResource','ngDialog',"ngStorage"], function (angular) {
    var app = angular.module('CDSHOME', ['ngRoute','serviceModule','directiveModule',"controllerModule",'ngAnimate','ngResource','ui.router','uiRouterStyles','ngDialog','ngStorage']);
    return app;
});
