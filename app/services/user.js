/** 
 * User Service
 * Module dependencies.
 */

var restService = require('./rest/service'),
    restUrls = require('./rest/urls'),
    util = require("../util/util"),
    config = require('../../config/config'),
    header = config.restUrl.contentType,
    requireUtil = require("util"),
    properties = require("../controllers/properties"),
    log = require('../util/logger').logger("user-service");

exports.authenticate = function(params, callback) {
    log.debug("authenticate : " + (JSON.stringify(params)));
    restService.builbArgs(restUrls.user.authenticate, params, header, function(args) {
        restService.makecall(args, callback);
    });
};

exports.myProfile = function(params, token, callback) {
    log.debug("myProfile : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.myProfile.path, params.userId);
    var url = {
        path: path,
        method: restUrls.user.myProfile.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.updateProfile = function(params, token, callback) {
    log.debug("updateProfile : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.updateProfile.path, params.userId);
    var url = {
        path: path,
        method: restUrls.user.updateProfile.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewUser = function(params, token, callback) {
    log.debug("viewUser : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.viewUser.path, params.userId);
    var url = {
        path: path,
        method: restUrls.user.viewUser.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.resetPassword = function(params, token, callback) {
    log.debug("resetPassword : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    var path = requireUtil.format(restUrls.user.resetPassord.path, params.userId);
    var url = {
        path: path,
        method: restUrls.user.resetPassord.method
    };

    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isUserExist = function(params, token, callback) {
    log.debug("isUserExist : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.user.isUserExist.path, params.userId);
    var url = {
        path: path,
        method: restUrls.user.isUserExist.method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isMobileExist = function(params, token, callback) {
    log.debug("isMobileExist : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.user.isMobileExist.path, params.mobileNo);
    var url = {
        path: path,
        method: restUrls.user.isMobileExist.method
    };

    //remove userId from params
    delete params.mobileNo;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isMailExist = function(params, token, callback) {
    log.debug("isMailExist : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.user.isMailExist.path, params.mail);
    var url = {
        path: path,
        method: restUrls.user.isMailExist.method
    };

    //remove userId from params
    delete params.mail;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.userTypes = function(params, orgId, callback) {
    log.debug("userTypes : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.user.userTypes, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.usersList = function(params, token, callback) {
    log.debug("usersList : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.usersList, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.createTask = function(params, token, callback) {
    log.debug("createTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.createTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editTask = function(params, token, callback) {
    log.debug("editTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.editTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteTask = function(params, token, callback) {
    log.debug("deleteTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.deleteTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getTask = function(params, token, callback) {
    log.debug("getTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.getTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewTask = function(params, token, callback) {
    log.debug("viewTask : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.viewTask, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewTasks = function(params, token, callback) {
    log.debug("viewTasks : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.viewTasks, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getRole = function(params, token, callback) {
    log.debug("getRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.getRole.path, params.id);
    var url = {
        path: path,
        method: restUrls.user.getRole.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deactivateRole = function(params, token, callback) {
    log.debug("deactivateRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.user.deactivateRole.path, params.id);
    var url = {
        path: path,
        method: restUrls.user.deactivateRole.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getRoles = function(params, token, callback) {
    log.debug("getRoles : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.getRoles, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveRole = function(params, token, callback) {
    log.debug("saveRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.saveRole, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.updateRole = function(params, token, callback) {
    log.debug("updateRole : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.user.updateRole, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getPrivileges = function(token, callback) {
    log.debug("getPrivileges : " + (JSON.stringify(params)));
    var headers = header;
    headers[properties.token] = token;

    restService.builbArgs(restUrls.user.getPrivileges, headers, function(args) {
        restService.makecall(args, callback);
    });
};
