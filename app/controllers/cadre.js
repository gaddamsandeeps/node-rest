/** 
 * Cadre Controller
 * Module dependencies.
 */

var cadreService = require('../services/cadre'),
    util = require('../util/util'),
    log = require('../util/logger').logger("cadre-controller");

exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;
    var orgId = req.param("orgId");

    cadreService.save(params, token, orgId, function(resp) {
        res.json(resp);
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    cadreService.edit(params, token, function(resp) {
        res.json(resp);
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var userId = req.param("userId");
    var token = req.user ? req.user.data.token : null;

    cadreService.get({
        userId: userId
    }, token, function(resp) {
        res.json(resp);
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + req.user.data.userName);
    var userId = req.param("userId");
    var token = req.user ? req.user.data.token : null;

    cadreService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.partyPositions = function(req, res, next) {
    log.debug("partyPositions : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");
    cadreService.partyPositions(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.bloodGroups = function(req, res, next) {
    log.debug("bloodGroups : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    cadreService.bloodGroups(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isPartyMemberShipIdExist = function(req, res, next) {
    log.debug("isPartyMemberShipIdExist : orgId - " + req.param("orgId"));
    var partyMemberShipId = req.param("partyMemberShipId");
    var orgId = req.param("orgId");

    cadreService.isPartyMemberShipIdExist({
        partyMemberShipId: partyMemberShipId
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.cadreWorksheet = function(req, res, next) {
    log.debug("cadreWorksheet : logged user - " + req.user.data.userName + " cadre id - " + req.param("userId"));
    var userId = req.param("userId");
    var token = req.user ? req.user.data.token : null;

    cadreService.cadreWorksheet({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};
