/** 
 * Office Service
 * Module dependencies.
 */

var restService = require('./rest/service'),
    restUrls = require('./rest/urls'),
    util = require("../util/util"),
    config = require('../../config/config'),
    requireUtil = require("util"),
    header = config.restUrl.contentType,
    properties = require("../controllers/properties"),
    log = require('../util/logger').logger("office-service");

exports.VnCVerificationList = function(params, token, callback) {
    log.debug("VnCVerificationList : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.office.vnCVerificationList, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.verifyCadre = function(params, token, callback) {
    log.debug("verifyCadre : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.office.verifyVnC, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.rejectVnC = function(params, token, callback) {
    log.debug("rejectVnC : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    restService.builbArgs(restUrls.office.rejectVnC, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.viewUserInfo = function(params, token, callback) {
    log.debug("viewUserInfo : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    var path = requireUtil.format(restUrls.office.viewUserInfo.path, params.userId);
    var url = {
        path: path,
        method: restUrls.office.viewUserInfo.method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
