// form specific.


//To map validation functions[public] to validate-key which in return 
//generates additional function with name of Validate-key  on methods object in validation module.

define(['validation'], function(validation) {

    return {
		spouseFirstName:{
			required:true,
			minCharacters:5,
			maxCharacters:16,
			key_error_msgs:true
		},
		spouseLastName:{
			required:true,
			minCharacters:5,
			maxCharacters:16,
			key_error_msgs:true
		},
		marriageDate:{
			required:false,
			key_error_msgs:true
		},
		spouseEducation:{
			required:true,			
			key_error_msgs:true
		},
		childEducation:{
			required:true,			
			key_error_msgs:true
		}        		
    }

});