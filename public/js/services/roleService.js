'use strict';

define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('roleService', ['$http',
        function($http) {


            var roleStateMap = {
                "admin": [],
                "citizen": ["auth.dashboard", "auth.list"]
            }

            var privilegeMap = {

                "Home": "auth.dashboard",

                "Post Request": "auth.postRequest",

                "View Requests": "auth.viewRequest",

                "Citizen Detailed Sheet": "auth.citizenWorkSheet",

                "View Profile": "auth.viewProfile",

                "Edit/Update Profile": "auth.updateProfile",

                "Inbox": "auth.inbox",

                "Assigned tasks/Work Sheet": "auth.workSheet",

                "Manage Tasks": "auth.manageTasks",

                "View Calender": "auth.viewCalendar",

                "User List": "auth.list",

                "Create Task": "auth.createTask",

                "Allocate Task/Work": "auth.allocateTask",

                "Create Calander": "auth.createCalendar",

                "Create User": "auth.createUser",

                "Approve Volunteer/Cadre": "auth.approveCadreVolunteer",

                "Cadre Work Sheet": "auth.cadreWorksheet",

                "Tasks List": "auth.tasksList",

                "Update User": "auth.updateUser",

                "Delete User": "auth.deleteUser",

                "View User": "auth.viewUser",

                "Volunteer List": "auth.volunteerList",

                "Manage volunteers": "auth.manageVolunteers"
            };

            return {

                getInitialState: function(role) {

                    switch (role) {
                        case "admin":
                            return "admin";
                            break;

                        case "citizen":
                            return "citizen";
                            break;
                    }
                },

                checkValidModule: function(state, privilegeStateArray) {

                    for (var i = 0; i < privilegeStateArray.length; i++) {

                        if (privilegeStateArray[i] == state) {
                            return true;
                            break;
                        }
                    }

                    return;
                },


                getPrivilegeStateArray : function(privilegeArray){
                		var privilegeStateArray = [];
                		for(var i=0; i< privilegeArray.length; i++){

                			if(privilegeMap[privilegeArray[i].privilegeName]){
                				privilegeStateArray.push(privilegeMap[privilegeArray[i].privilegeName]);
                			}

	               		}
	               		return privilegeStateArray;
                }

            };
        }
    ]);
});