// form specific.


//To map validation functions[public] to validate-key which in return 
//generates additional function with name of Validate-key  on methods object in validation module.

define(['validation'], function(validation) {

    return {
        signupFirstName: {
            required : true,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
           
        },
        signupMiddleName: {
            required : false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
          
        },
		signupLastName: {
            required : true,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
          
        },
        userName : {
            required : true,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
        },
		dob:{
            required : true,
			date:true,
			key_error_msgs:true
		},     
		aadharId:{
            required : false,
			minCharacters: 5,
			key_error_msgs:true
		},
        userMobile:{
            required : true,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true     
        },
        userPhone:{
            required : false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true                 
        },
        userEmail: {
            required : false,
            email: true,
            key_error_msgs: false
        },
        skypeId:{
            required : false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true                
        },
		userQualification:{
			required:false,			
			key_error_msgs:true
		}
    }

});