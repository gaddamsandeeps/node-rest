
'use strict';

define(['controllers/controllerModule'], function (controllerModule) {

	controllerModule.controller('SecondModalCtrl', ['ngDialog', function ( ngDialog ) {
		this.closeSecond = function () {
			ngDialog.close();
		};
	}]);

	 controllerModule.controller('listController', ["$http",'userDetailsService','userTypeService','ngDialog','$scope',"$sessionStorage","$state", function($http,userDetailsService, userTypeService, ngDialog, $scope,$sessionStorage,$state){
		

		this.minAge = 18;
		this.maxAge = 50;
	 	this.filter = false;
	 	this.showImage= true;
	 	this.selected = {};
	 	var that = this;
 		
	  	this.showFilter = function(){
			console.log("get log");
			this.filter = !this.filter;
		}

		this.render = function(){
			 userDetailsService.get({ q: "", page:1 }, function(resObj) { 
				that.userList = resObj.data.searchResults;
			});

			 userTypeService.query ({}, function(resObj){			 					
				that.userTypes = resObj.data;

			}); 
		};
		this.search = function(){
			
			if(typeof this.searchQ == "undefined" || this.searchQ == "") return;
			this.selectedGender = this.selectedUserTypes = false;
			this.minAge = this.maxAge = "";			
			
			userDetailsService.get({ q: this.searchQ, page:1 }, function(resObj) { 
				that.userList = resObj.data.searchResults;
				
			});

		};
		this.getSelectedFromObject = function(obj){
			
			if(obj){
			var keys = Object.keys(obj);
		
		var filtered = keys.filter(function(key) {
			    return obj[key]
			});

			return filtered;
		}else{
			return "";
		}

	}

		this.filterSearch = function(){

			// if(typeof this.searchQ == "undefined" || this.searchQ == "") return;

			console.log("add loader");
			
			var filterObj = {
				q:this.searchQ,
				page : 1
			};
			
			(this.minAge !== "") ? filterObj.minAge = this.minAge : false;
			(this.maxAge !== "") ? filterObj.maxAge = this.maxAge: false;
			
			if(typeof this.selectedUserTypes !== undefined){
				var str = this.getSelectedFromObject(this.selectedUserTypes).toString();
				
				console.log(str);

				(str) ? filterObj.userType = str : false;
			}
			

			if(typeof this.selectedGender !== undefined){

				console.log(this.selectedGender);

				var str = this.getSelectedFromObject(this.selectedGender).toString();
				(str) ? filterObj.gender = str : "";
			}


			userDetailsService.get(filterObj, function(resObj) { 
				

				that.userList = resObj.data.searchResults;
				console.log(resObj);

				//that.filteredWith();
				console.log("remove Loader");
			}); 

		};

		this.resetSerach = function(){
			this.selectedUserTypes = [];
			this.selectedGender = [];
		}	


		$scope.closeDeleteOverlay = function () {
			ngDialog.close();
		};

		$scope.initiateDelete = function(){
			ngDialog.close();

		};



		this.confirmDelete = function(obj){
			ngDialog.open({ template: 'views/common/confirmOverlay.html', className: 'ngdialog-theme-plain', scope : $scope });
		};
		






		this.filteredWith = function(){			

			this.selectedFilter = [];
			var minMaxAge = [];
			var selectedUserTypes = this.selectedUserTypes;
			var keys = Object.keys(this.selectedUserTypes);
			var selectedUserFilter = this.userTypes.filter(function(user) {
				if(keys.indexOf(user.userTypeId) != -1 && selectedUserTypes[user.userTypeId]){
					return true;
				}
			});

			var selectedGender = this.getSelectedFromObject(this.selectedGender);



			selectedUserFilter = selectedUserFilter.map(function(user){

				return {"filterName":user.userTypeName,"filterObj":function(){	

					that.selectedUserTypes[user.userTypeId] = false;	
					that.filterSearch();

				}};

			});
			console.log(selectedUserFilter);

			selectedGender = selectedGender.map(function(gender){

				return {"filterName":that.getGender(gender),"filterObj":function(){	

					that.selectedGender[gender] = false;	
					that.filterSearch();

				}};

			});
			console.log(selectedGender);
			
			if(this.minAge !== "" && this.maxAge !== "") {
				minMaxAge.push({"filterName":"Age "+this.minAge + " to " + this.maxAge, "filterObj":function(){	
					console.log("minAge");
					that.minAge = that.maxAge = "";
					that.filterSearch();

				}});
			}
			
			this.selectedFilter = this.selectedFilter.concat(selectedUserFilter, selectedGender, minMaxAge);

			
		};






		this.getGender = function(gender){
			return gender === 'M' ? "Male" : "Female";
		};

		this.removeSelectedFilter = function(opt){
			
		}



		this.enableDisableOption = function(){	



						
				var selectedUsers = this.getSelectedFromObject(this.selectedUsers);
				// disable edit button 
				this.disableEdit = (selectedUsers.length > 1) ? "grey" : ""; 
		}

		this.render();


		this.editCurrentUser = function(){

			var selectedUsers = this.getSelectedFromObject(this.selectedUsers);
			
			

			if(selectedUsers.length == 1){
				var currentUserId = selectedUsers[0];
				createSession("edit");				
				$sessionStorage.cds.contextObj.userId = currentUserId;
				$state.go('root.register.personal');
				
			}else{
				console.log("please select only one user");
			}			
		}


		this.createNewUser = function(){
			createSession("create");
			$state.go('root.register.personal');
		};






		function createSession(mode){
				
				$sessionStorage.cds = {};
				$sessionStorage.cds.contextObj= {}
				$sessionStorage.cds.contextObj.mode = mode;

			}

		function clearSession(){
				$sessionStorage.cds ={};
			}


















	}]);

	

});

