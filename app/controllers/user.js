/** 
 * User Controller
 * Module dependencies.
 */
var userService = require('../services/user'),
    log = require('../util/logger').logger("user-controller");

exports.login = function(req, res, next) {
    log.debug("login");
    if (!req.user) {
        res.render('login.html', {
            title: 'Login',
            message: req.flash('error'),
            greeting: req.i18n.__("greeting")
        });
    } else {
        res.redirect('/success');
    }
};

exports.myProfile = function(req, res, next) {
    log.debug("myProfile : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.myProfile(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.updateProfile = function(req, res, next) {
    log.debug("updateProfile : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.updateProfile(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.authenticate = function(params, callback) {
    log.debug("authenticate : logging user : " + params.loginId);
    userService.authenticate(params, callback);
};

exports.resetPassword = function(req, res, next) {
    log.debug("resetPassword : logged user - " + req.user);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.resetPassword(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewUser = function(req, res, next) {
    log.debug("viewUser : logged user - " + req.user.data.userName);
    var userId = req.param("userId");
    var token = req.user ? req.user.data.token : null;

    userService.viewUser({
        userId: userId
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};


exports.getUserToken = function(user) {
    return user ? user.token : null;
};

exports.isUserExist = function(req, res, next) {
    log.debug("isUserExist : userName - " + req.param("userName"));

    var userName = req.param('userName');
    var orgId = req.param("orgId");

    userService.isUserExist({
        userId: userName
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isMobileExist = function(req, res, next) {
    log.debug("isMobileExist : mobileNumber - " + req.param("mobileNumber"));

    var mobileNumber = req.param('mobileNumber');
    var orgId = req.param("orgId");

    userService.isMobileExist({
        mobileNo: mobileNumber
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.isMailExist = function(req, res, next) {
    log.debug("isMailExist : email - " + req.param("email"));

    var email = req.param('email');
    var orgId = req.param("orgId");

    userService.isMailExist({
        mail: email
    }, orgId, function(resp) {
        res.json(resp);
    });
};

exports.userTypes = function(req, res, next) {
    log.debug("userTypes : orgId - " + req.param("orgId"));
    var orgId = req.param("orgId");

    userService.userTypes(null, orgId, function(resp) {
        res.json(resp);
    });
};

exports.usersList = function(req, res, next) {
    log.debug("usersList : logged user - " + req.user.data.userName);
    var params = req.query;
    params.limit = req.param("limit");

    var token = req.user ? req.user.data.token : null;

    userService.usersList(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.createTask = function(req, res, next) {
    log.debug("createTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.createTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.editTask = function(req, res, next) {
    log.debug("editTask : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.editTask(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deleteTask = function(req, res, next) {
    log.debug("deleteTask : logged user - " + req.user.data.userName);
    var tid = req.param("id");
    var token = req.user ? req.user.data.token : null;

    userService.deleteTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getTask = function(req, res, next) {
    log.debug("getTask : logged user - " + req.user.data.userName);
    var tid = req.param("id");
    var token = req.user ? req.user.data.token : null;

    userService.getTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewTask = function(req, res, next) {
    log.debug("viewTask : logged user - " + req.user.data.userName);
    var tid = req.param("id");
    var token = req.user ? req.user.data.token : null;

    userService.viewTask({
        id: tid
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.viewTasks = function(req, res, next) {
    log.debug("viewTasks : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.viewTasks(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

//roles
exports.getRole = function(req, res, next) {
    log.debug("getRole : logged user - " + req.user.data.userName);
    var id = req.param("id");
    var token = req.user ? req.user.data.token : null;

    userService.getRole({
        id: id
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.deactivateRole = function(req, res, next) {
    log.debug("deactivateRole : logged user - " + req.user.data.userName);
    var id = req.param("id");
    var token = req.user ? req.user.data.token : null;

    userService.deactivateRole({
        id: id
    }, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getRoles = function(req, res, next) {
    log.debug("getRoles : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    userService.getRoles(null, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.saveRole = function(req, res, next) {
    log.debug("saveRole : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.saveRole(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.updateRole = function(req, res, next) {
    log.debug("updateRole : logged user - " + req.user.data.userName);
    var params = req.body;
    var token = req.user ? req.user.data.token : null;

    userService.updateRole(params, token, function(resp) {
        req.resp = resp;
        next();
    });
};

exports.getPrivileges = function(req, res, next) {
    log.debug("getPrivileges : logged user - " + req.user.data.userName);
    var token = req.user ? req.user.data.token : null;

    userService.getPrivileges(token, function(resp) {
        req.resp = resp;
        next();
    });
};

/**
 * Logout
 */
exports.signout = function(req, res, next) {
    req.logout();
    res.redirect('/');
};

/**
 * User Data
 */
exports.getUserFromSession = function(req, res, next) {
    var user = req.user;

    //remove non accesible data for browser
    delete user.token;
    res.json(user);
};
