/**
 * Module dependencies.
 */

exports.render = function(req, res, next) {
    res.render('index.html', {
        msg: "Welcome",
        greeting: req.i18n.__("greeting")
    });
};

exports.officehome = function(req, res, next) {
    res.json(req.user);
};

exports.postrequest = function(req, res, next) {
    res.render('external/post-request.html', {});
};
exports.register = function(req, res, next) {
    res.render('external/register.html', {});
};
exports.dashboard = function(req, res, next) {
    res.render('external/dashboard.html', {});
};
exports.forgotpwd = function(req, res, next) {
    res.render('external/forgot-password.html', {});
};
exports.register = function(req, res, next) {
    res.render('register.html', {});
};
