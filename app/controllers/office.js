/** 
 * Office Controller
 * Module dependencies.
 */
var officeService = require('../services/office'),
    log = require('../util/logger').logger("office-controller");

var citizenController = require('./citizen'),
    volunteerController = require('./volunteer'),
    cadreController = require('./cadre');

exports.VnCVerificationList = function(req, res, next) {
    log.debug("VnCVerificationList : logged user - " + req.user.data.userName + " selected user - " + req.param("userId") + " type : " + req.param("type"));
    var userId = req.param("userId");
    var type = req.param("type");
    var token = req.user ? req.user.data.token : null;

    officeService.VnCVerificationList({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.verifyVnC = function(req, res, next) {
    log.debug("verifyVnC : logged user - " + req.user.data.userName + " selected user - " + req.param("userId") + " type : " + req.param("type"));
    var userId = req.param("userId");
    var type = req.param("type");
    var token = req.user ? req.user.data.token : null;

    officeService.verifyVnC({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.rejectVnC = function(req, res, next) {
    log.debug("rejectVnC : logged user - " + req.user.data.userName + " selected user - " + req.param("userId"));
    var userId = req.param("userId");
    var type = req.param("type");
    var token = req.user ? req.user.data.token : null;

    officeService.rejectVnC({
        citizenId: userId,
        approvalType: type
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewUserInfo = function(req, res, next) {
    log.debug("rejectVnC : logged user - " + req.user.data.userName + " selected user - " + req.param("userId"));
    var userId = req.param("userId");
    var token = req.user ? req.user.data.token : null;

    officeService.viewUserInfo({
        citizenId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.savePersonalInf = citizenController.savePersonalInf;
exports.saveWorkInf = citizenController.saveWorkInf;
exports.saveVoterInf = citizenController.saveVoterInf;
exports.saveResidentialAddress = citizenController.saveResidentialAddress;
exports.saveFamily = citizenController.saveFamily;

exports.saveVolunteer = volunteerController.save;

exports.saveCadre = cadreController.save;
