/** 
 * Volunteer Service
 * Module dependencies.
 */

var restService = require('./rest/service'),
    restUrls = require('./rest/urls'),
    config = require('../../config/config'),
    header = config.restUrl.contentType,
    requireUtil = require("util"),
    properties = require("../controllers/properties"),
    log = require('../util/logger').logger("volunteer-service");


exports.save = function(params, token, orgId, callback) {
    log.debug("save : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;
    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveVolunteer.path, params.userId);
        method = restUrls.office.saveVolunteer.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        ath = requireUtil.format(restUrls.volunteer.save.path, params.userId);
        method = restUrls.volunteer.save.method;
    }

    //build url path     
    var url = {
        path: path,
        method: method
    };

    //remove userid from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.edit = function(params, token, callback) {
    log.debug("edit : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.volunteer.edit.path, params.userId);
    var url = {
        path: path,
        method: restUrls.volunteer.edit.method
    };

    //remove userid from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.get = function(params, token, callback) {
    log.debug("get : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.volunteer.get.path, params.userId);
    var url = {
        path: path,
        method: restUrls.volunteer.get.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.delete = function(params, token, callback) {
    log.debug("delete : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.volunteer.delete.path, params.userId);
    var url = {
        path: path,
        method: restUrls.volunteer.delete.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isVolunteerIdExist = function(params, orgId, callback) {
    log.debug("isVolunteerIdExist : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.volunteer.isVolunteerIdExist.path, params.volunteerId);
    var url = {
        path: path,
        method: restUrls.volunteer.isVolunteerIdExist.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.performanceGrades = function(params, orgId, callback) {
    log.debug("performanceGrades : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.volunteer.performanceGrades, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.areasIntrestedToVolunteer = function(params, orgId, callback) {
    log.debug("areasIntrestedToVolunteer : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.volunteer.areasIntrestedToVolunteer, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.volunteerCategory = function(params, orgId, callback) {
    log.debug("volunteerCategory : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.volunteer.category, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.volunteerLeads = function(params, orgId, callback) {
    log.debug("volunteerLeads : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.volunteer.leads, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.volunteerSheet = function(params, token, callback) {
    log.debug("volunteerSheet : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.volunteer.volunteerSheet.path, params.volunteerId);
    var url = {
        path: path,
        method: restUrls.volunteer.volunteerSheet.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
