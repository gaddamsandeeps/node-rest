
'use strict';

define(['controllers/controllerModule','jquery','slick'], function (controllerModule,$,slick) {

	 controllerModule.controller('homeController', ['$state','$http',"appUrlService","cdsService",'$scope','registerService','$sessionStorage', function($state,$http,appUrls,cdsService,$scope,registerService,$sessionStorage){		

	 		$(document).ready(function(){
			  	var slider = $('#home-carousel').slick({
			      dots: true,
				  infinite: true,
				  speed: 500,
				  fade: true,
				  cssEase: 'linear',
				  autoplay:true,
				  autoplaySpeed : 1500,				 				 
			  	})
			  	.on("mouseout",function(){			  		
			  	 	slider.slick('slickPlay');			 
			  	}) ;

			  	$('#home-carousel img').css("width","100%");
			});
		


	}]);

});

