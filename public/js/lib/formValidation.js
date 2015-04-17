define(["jquery", "validation", "inputTooltip"], function($, validation, inputTooltip) {

    var glbVar = {},
        init
    evEmitter = $({});


    var defConf = {
        blurValidation: true,
        htmlValidation: false,
        submitValidForm: false,
        runCallBack: false,
        cb: function() {
            console.error("Default callback is executed");
        }
    };




    function getAppConf(userConfig) {
        return userConfig ? $.extend(defConf, userConfig) : defConf;
    }

    function returnFormObj(formHandler) {
        var formEl;
        if (typeof formHandler != "string" && !formHandler.jquery) {
            formEl = $(formHandler);
        } else if (formHandler.jquery) {
            formEl = formHandler;
        } else {
            formEl = $(formHandler).eq(0);
        }

        if (formEl.length > 0) {
            if (formEl.length === 1) {
                return formEl;
            } else {
                console.error("Duplicate id found with given form handler.");
                return;
            }
        } else {
            console.error("No element is found with given form handler");
            return;
        }
    }

    function getReqFields(formHandler) {
        var requiredFormFields = formHandler.find("[data-val]");
        if (requiredFormFields.length) {
            return requiredFormFields;
        } else {
            console.error("No form fields to be validated");
        }
    }


    function validateForm(formHandler, validatorMap, errorMap, config) {


        this.config = getAppConf(config)
        this.formEl = returnFormObj(formHandler);
        this.requiredFormFields = getReqFields(this.formEl);
        this.errorMap = errorMap;
        this.validatorMap = validatorMap;
        this.errorArray = [];
        this.invalidFieldsArray = [];
        this.invalidMethodsArray = [];
        this.reset = function() {
            this.invalidFieldsArray = [];
            this.invalidMethodsArray = [];
        }
    }


    function init(formSelector, validatorMap, errorMap, config) {


        if (!$(formSelector).length) {
            console.error("No root element found with given selector");
            return;
        }

        var formStack = {};
        formStack.isValid = true;

        if (config.initiate) {
            formStack = new validateForm(formSelector, validatorMap, errorMap, config);
            formStack.isValid = true;
            clearErrorClass(formStack);
            var wrapper = formStack.formEl.prop("tagName");

            if (wrapper === "FORM") {
                if (!formStack.config.htmlValidation) {
                    formStack.formEl.attr("novalidate", "novalidate");
                }

                formStack.formEl.off("submit").on("submit", function(ev) {
                    // To disable default form submit and invoke callback incase form is valid.
                    if (!formStack.config.submitValidForm) {
                        ev.preventDefault();
                    }
                    initiateValidation(formStack);
                    formStack.isValid = !formStack.invalidFieldsArray.length;
                    if (formStack.config.runCallBack && formStack.isValid) {
                        formStack.config.cb();
                    }

                    $(this).trigger("userFormSubmit");
                    return !!formStack.isValid;
                });

            } else {
                formStack.formEl.find("[data-submit]").off().on("click",
                    function(ev) {
                        ev.preventDefault();
                        initiateValidation(formStack);
                        formStack.isValid = !formStack.invalidFieldsArray.length;
                        if (formStack.config.runCallBack && formStack.isValid) {
                            formStack.config.cb();
                        }
                    });

            }

            if (formStack.config.blurValidation) {
                var blurRqFields = formStack.requiredFormFields;

                for (k = 0; k < blurRqFields.length; k++) {
                    $(blurRqFields[k]).off().on("blur", function() {


                        var singleFieldStack = new validateForm(formSelector, validatorMap, errorMap, config);

                        singleFieldStack.requiredFormFields = [this];
                        initiateValidation(singleFieldStack, true);
                    });
                }
            }
        } else {

            formStack.isValid = true;
            $(formSelector).off("submit").on("submit", function(ev) {
                if (!config.htmlValidation) {
                    $(formSelector).attr("novalidate", "novalidate");
                }
                if (config.runCallBack) {
                    config.cb ? config.cb() : console.error("Default callback is executed");
                }

                if (!config.submitValidForm) {
                    return false;
                }
            });
        }
        return formStack;

    }

    function initiateValidation(formStack, focusout) {
        formStack.reset();
        clearErrorClass(formStack, focusout);
        runValidation(formStack);
        generateErrorObj(formStack);
        if (formStack.invalidFieldsArray.length) {
            showError(formStack);
            addErrorClass(formStack, focusout);
        } else {
            clearErrorClass(formStack, focusout);

        }

    }


    function runValidation(formStack) {

        var vFields = formStack.requiredFormFields;
        var invalidFieldsArray = formStack.invalidFieldsArray;
        var invalidMethodsArray = formStack.invalidMethodsArray;



        for (i = 0; i < vFields.length; i++) {
            var fieldLevelValidator = 0;
            var validator = $(vFields[i]).data("val");
            var rulesObj = formStack.validatorMap[validator];
            var userVal = $(vFields[i]).val();
            var key_error_msg_flag = rulesObj["key_error_msgs"];
            var requireValidator = rulesObj["required"];
            var userValCheck = true;

            if (!requireValidator) {
                userValCheck = userVal ? true : false;
            }


            for (var key in rulesObj) {

                if (rulesObj.hasOwnProperty(key) && key !== "key_error_msgs" && userValCheck && rulesObj[key]) {
                    optionValue = rulesObj[key];
                    var isValid = validation.validate(key, userVal, optionValue);

                    if (!isValid) {
                        fieldLevelValidator++;
                        if (key_error_msg_flag) {
                            invalidMethodsArray.push(validator + "-" + key);
                        }
                    }
                }
            }

            if (fieldLevelValidator) {
                invalidFieldsArray.push($(vFields[i]));
            }

            if (fieldLevelValidator && !key_error_msg_flag) {
                invalidMethodsArray.push(validator);
            }
        }

        return {
            invalidMethodsArray: invalidMethodsArray,
            invalidFieldsArray: invalidFieldsArray
        }
    }



    function generateErrorObj(formStack) {
        var globalErrorObj, errorObjNode, errorKeyArray;

        globalErrorObj = {
            "errorMessages": {
                "fieldMessages": []
            }
        };

        var invalidFieldsArray = formStack.invalidFieldsArray;
        var invalidMethodsArray = formStack.invalidMethodsArray;



        if (invalidFieldsArray.length) {
            for (i = 0; i < invalidMethodsArray.length; i++) {
                errorKeyArray = invalidMethodsArray[i].split("-");

                if (errorKeyArray.length > 1) {
                    var methodName = errorKeyArray[0] + "-" + errorKeyArray[1];
                    var fieldDataVal = errorKeyArray[0];
                } else {
                    var methodName = errorKeyArray[0];
                    var fieldDataVal = errorKeyArray[0];
                }



                errorObjNode = {
                    "code": methodName,
                    "description": formStack.errorMap[methodName],
                    "fieldDataVal": fieldDataVal
                }
                globalErrorObj.errorMessages.fieldMessages.push(errorObjNode);
            }

        }
        formStack.globalErrorObj = globalErrorObj;
        return globalErrorObj;
    };


    function showError(formStack) {

        var errorFieldMessages = formStack.globalErrorObj.errorMessages.fieldMessages;
        var invalidMethodsArray = formStack.invalidMethodsArray;
        var invalidFieldsArray = formStack.invalidFieldsArray;
        var fieldHandler;

        if (invalidFieldsArray.length) {

            for (var j = 0; j < invalidFieldsArray.length; j++) {
                var fieldHandler = $(invalidFieldsArray[j]);
                var validator = invalidFieldsArray[j].attr("data-val");
                var interimArray = [];
                for (var k = 0; k < errorFieldMessages.length; k++) {
                    if (errorFieldMessages[k].fieldDataVal == validator) {
                        interimArray.push(errorFieldMessages[k]);
                    }
                }
                fieldHandler.closest(".row").find(".error-class>.error-content").html(interimArray[0].description);
            }

        }
    };

    function addErrorClass(formStack, focusout) {

        var formHandler = formStack.formEl;

        if (formStack.config.blurValidation && focusout) {
            var singleFieldHandler = $(formStack.requiredFormFields[0]);

            singleFieldHandler.closest('.row').addClass("error-field").removeClass("error-clear-border");
            singleFieldHandler.closest('.row').find(".error-icon").show();

        } else {

            var fieldsRef = formStack.invalidFieldsArray;

            $.each(fieldsRef, function(index, field) {
                field.closest('.row').addClass("error-field").removeClass("error-clear-border");
                field.closest('.row').find(".error-icon").show();
            });
        }

    }


    function clearErrorClass(formStack, focusout) {

        var formHandler = formStack.formEl;

        if (formStack.config.blurValidation && focusout) {
            var singleFieldHandler = $(formStack.requiredFormFields[0]);

            singleFieldHandler.closest('.row').removeClass("error-field");
            singleFieldHandler.closest('.row').find(".error-content").empty();
            singleFieldHandler.closest('.row').find(".error-icon").hide();
            singleFieldHandler.closest('.row').find("[data-val]").addClass("error-clear-border").removeClass("error-field");

        } else {
            formHandler.find(".error-content").empty();
            formHandler.find(".error-icon").hide();
            formHandler.find('.row.error-field').addClass("error-clear-border").removeClass("error-field");
        }

    };

    return {
        init: init
    };


});