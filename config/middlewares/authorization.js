/**
 * Generic require login routing middleware
 */
var errors = require('../errors/error'),
    util = require('../../app/util/util');

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        util.handleErrors(errors.session.expired, function(resp) {
            return res.json(resp);
        });
    } else {
        next();
    }
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        next();
    }
};

/**
 *  filter  the response b4 sending to user
 */
exports.filterResponse = function(req, res) {
    var resp = req.resp;
    req.resp = null;
    if (resp.data.errorCode === '40105') {
        util.handleErrors(errors.session.expired, function(resp) {
            return res.json(resp);
        });
    } else {
        res.json(resp);
    }

};
