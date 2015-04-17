/** 
 * Volunteer Controller
 * Module dependencies.
 */

var volunteerService = require('../services/volunteer'),
    log = require('../util/logger').logger("volunteer-controller");


exports.save = function(req, res, next) {
    log.debug("save : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var orgId = req.param("orgId");
    var params = req.body;

    volunteerService.save(params, token, orgId, function(resp) {
        res.json(resp);
    });
};

exports.edit = function(req, res, next) {
    log.debug("edit : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var params = req.body;

    volunteerService.edit(params, token, function(resp) {
        res.json(resp);
    });
};

exports.get = function(req, res, next) {
    log.debug("get : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var userId = req.param("userId");

    volunteerService.get({
        userId: userId
    }, token, function(resp) {
        res.json(resp);
    });
};

exports.delete = function(req, res, next) {
    log.debug("delete : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var userId = req.param("userId");

    volunteerService.delete({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.areasIntrestedToVolunteer = function(req, res, next) {
    log.debug("areasIntrestedToVolunteer : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    volunteerService.areasIntrestedToVolunteer(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.volunteerCategory = function(req, res, next) {
    log.debug("volunteerCategory : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    volunteerService.volunteerCategory(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.volunteerLeads = function(req, res, next) {
    log.debug("volunteerLeads : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    volunteerService.volunteerLeads(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isVolunteerIdExist = function(req, res, next) {
    log.debug("isVolunteerIdExist : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    volunteerService.isVolunteerIdExist({
        volunteerId: volunteerId
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.performanceGrades = function(req, res, next) {
    log.debug("performanceGrades : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    volunteerService.performanceGrades(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.volunteerSheet = function(req, res, next) {
    log.debug("volunteerSheet : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;
    var volunteerId = req.param("volunteerId");

    volunteerService.volunteerSheet({
        volunteerId: volunteerId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};
