//#MODULE - Validation
//> Author: Sarfaraz Merchant
//> URL: http://confluence/display/WDS/Base+Validation+Library
//>
//> Create Date: <February 19, 2014>
//>
//##DESCRIPTION: Validate data
define([], function() {

    var keys,
        methods,
        validate,
        addMethod;

    keys = {
        NUMERIC: /^[0-9+]*$/,
        ALPHA_NUMERIC: /^[a-zA-Z0-9]*$/,
        US_ZIP_CODE: /^\d{5}(?:[-]\d{4})?$/,
        US_PHONE: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/,
        EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        US_CURRENCY: /^[$]?[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/,
        DATE: /^\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}$/
    };

    methods = {

        //###Method - isRequired(value)
        //Public method to check if passed value is empty.
        //
        //> parameters
        //>
        //+ *value* : *String* | *Object* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is not empty.
        required: function(value) {

            if (value) {
                if (typeof value === "string") {
                    return value.trim().length > 0;
                } else {
                    for (var prop in value) {
                        if (value.hasOwnProperty(prop)) {
                            return true;
                        }
                    }
                    return false;
                }
            }

            return false;
        },

        //###Method - isValidNumber(value)
        //Public method to check if passed value is a valid number.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid number.
        numeric: function(value) {

            if (!value) {
                return;
            }

            return !isNaN(value);
        },

        //###Method - isValidAlphaNumeric(value)
        //Public method to check if passed value is a valid alphanumeric.
        //> This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid alphanumeric.
        alphaNumeric: function(value) {
            return methods.regexMatch(value, keys.ALPHA_NUMERIC);
        },

        //###Method - isValidZipCode(value)
        //Public method to check if passed value is a valid USA zipcode.
        //This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid USA zipcode.
        zipCode: function(value) {
            return methods.regexMatch(value, keys.US_ZIP_CODE);
        },

        //###Method - isValidEmail(value)
        //Public method to check if passed value is a email.
        //This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid email.
        email: function(value) {
            return methods.regexMatch(value, keys.EMAIL);
        },

        //###Method - isValidUsCurrency(value)
        //Public method to check if passed value is a valid USA currency.
        //This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid US currency.
        usCurrency: function(value) {
            return methods.regexMatch(value, keys.US_CURRENCY);
        },

        //###Method - hasMinChars(value)
        //Public method to check if passed value has minimum characters.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //+ *length* : *Number* - Number specifing minimum number of characters
        //
        //> returns
        //>
        //+ A boolean. true if passed value has minimum number of characters.
        minCharacters: function(value, length) {
            if (typeof length === 'string') {
                length = Number(length);
            }

            if (isNaN(length) || !value) {
                return;
            }

            return (value.length >= length);
        },

        //###Method - hasMaxChars(value)
        //Public method to check if passed value is less than equal maximum characters.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //+ *length* : *Number* - Number specifing maximum number of characters.
        //
        //> returns
        //>
        //+ A boolean. true if passed value has minimum number of characters.
        maxCharacters: function(value, length) {
            if (typeof length === 'string') {
                length = Number(length);
            }

            if (isNaN(length) || !value) {
                return;
            }

            return (value.length <= length);
        },

        //###Method - isValidUsPhone(value)
        //Public method to check if passed value is a valid USA phone number.
        //This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid USA phone number.
        usPhone: function(value) {
            return methods.regexMatch(value, keys.US_PHONE);
        },

        //###Method - isValidDate(value)
        //Public method to check if passed value is a valid date.
        //This will internally call regexMatch method passing the pre-defined regex.
        //
        //> parameters
        //>
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid date.
        date: function(value) {
            return methods.regexMatch(value, keys.DATE);
        },

        //###Method - regexMatch(regex, value)
        //Public method to test passed value against the regex.
        //
        //> parameters
        //>
        //+ *regex* : *RegExp* - Regex pattern to test the value.
        //+ *value* : *String* - Value that needs to be checked.
        //
        //> returns
        //>
        //+ A boolean. true if passed value is a valid date.
        //+ undefined - If regex or value is blank or when not a valid regex
        regexMatch: function(value, regex) {
            if (typeof regex === 'string') {
                regex = new RegExp(regex);
            }

            if (!(regex instanceof RegExp) || !value) {
                return;
            }

            return regex.test(value);
        }
    };

    //###Method - validate(key, value, options)
    //Public method to test passed value.
    //
    //> parameters
    //>
    //+ *key* : *String* - Type of validation to be performed on the passed value. eg. 'numeric', 'date', etc...
    //+ *value* : *String* - Value that needs to be checked.
    //+ *options* : *Multi-typed* - Type of this parameters depends on what "key" is being passed. 
    //For example if key is "minCharacters" then type will number and if key is "regexMatch" then type will regex;
    //
    //> returns
    //>
    //+ A boolean. true if passed value is a valid date.
    //+ undefined - If regex or value is blank or when not a valid regex
    validate = function(key, value, options) {

        if (!key || !value) {
            return;
        }

        return methods[key].call(this, value, options);
    };

    //###Method - addMethod(methodName, methodFunction)
    //Public method to add validation methods.
    //
    //> parameters
    //>
    //+ *methodName* : *String* - Name of the method.
    //+ *methodFunction* : *Function* - Value that needs to be checked.
    //
    //> returns
    //>
    //+ A boolean. true if passed value is a valid date.
    //+ undefined - If methodName, methodFunction is undefined or methodName is not type of string or methodFunction is not type of 'function'
    addMethod = function(methodName, methodFunction) {
        if (!methodName || typeof methodName !== 'string' || !methodFunction || typeof methodFunction !== 'function' || methods[methodName] !== undefined) {
            return;
        }

        methods[methodName] = methodFunction;
    };

    return {
        validate: validate,
        addMethod: addMethod,
        isNotEmpty: methods.required,
        isValidNumber: methods.numeric,
        isValidAlphaNumeric: methods.alphaNumeric,
        isValidZipCode: methods.zipCode,
        isValidEmail: methods.email,
        isValidUsCurrency: methods.usCurrency,
        hasMinChars: methods.minCharacters,
        hasMaxChars: methods.maxCharacters,
        isValidUsPhone: methods.usPhone,
        isValidDate: methods.date,
        regexMatch: methods.regexMatch,
       
    };

});