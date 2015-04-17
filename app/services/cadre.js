/** 
 * Citizen Service
 * Module dependencies.
 */

var restService = require('./rest/service'),
    restUrls = require('./rest/urls'),
    config = require('../../config/config'),
    header = config.restUrl.contentType,
    requireUtil = require("util"),
    properties = require("../controllers/properties"),
    log = require('../util/logger').logger("cadre-service");


exports.save = function(params, token, orgId, callback) {
    log.debug("save : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveCadre.path, params.userId);
        method = restUrls.office.saveCadre.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.cadre.save.path, params.userId);
        method = restUrls.cadre.save.method;
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
    var path = requireUtil.format(restUrls.cadre.edit.path, params.userId);
    var url = {
        path: path,
        method: restUrls.cadre.edit.method
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
    var path = requireUtil.format(restUrls.cadre.get.path, params.userId);
    var url = {
        path: path,
        method: restUrls.cadre.get.method
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
    var path = requireUtil.format(restUrls.cadre.delete.path, params.userId);
    var url = {
        path: path,
        method: restUrls.cadre.delete.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.partyPositions = function(params, orgId, callback) {
    log.debug("partyPositions : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.cadre.partyPositions, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.bloodGroups = function(params, orgId, callback) {
    log.debug("bloodGroups : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.cadre.bloodGroups, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.isPartyMemberShipIdExist = function(params, orgId, callback) {
    log.debug("isPartyMemberShipIdExist : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.cadre.isPartyMemberShipIdExist.path, params.partyMemberShipId);
    var url = {
        path: path,
        method: restUrls.cadre.isPartyMemberShipIdExist.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.cadreWorksheet = function(params, token, callback) {
    log.debug("cadreWorksheet : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.cadre.cadreWorksheet.path, params.userId);
    var url = {
        path: path,
        method: restUrls.cadre.cadreWorksheet.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
