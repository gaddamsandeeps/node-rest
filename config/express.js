/**
 * Module dependencies.
 */
var express = require('express'),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    i18n = require('i18n-2'),
    path = require('path');
    
var config = require('./config');

module.exports = function(app, passport) {

    console.log('Initializing Express');

    app.set('showStackError', true);

    app.use(express.compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    //Setting the fav icon and static folder
    app.use(express.favicon());
    var pbc = path.normalize(__dirname + '/..') + '/public/';
    app.use(express.static(pbc));

    //Don't use logger for test env
    if (app.get('env') === 'development') {
        app.locals.pretty = true;
        app.use(express.logger('dev'));
    }

    //Set views path, template engine and default layout
    app.set('views', pbc + '/views');
    app.engine('html', require('ejs').renderFile);

    app.configure(function() {

        i18n.expressBind(app, {
            // setup some locales - other locales default to en silently
            locales: ['en', 'de'],
            // set the default locale
            defaultLocale: 'en',
            // set the cookie name
            cookieName: 'locale'
        });

        // set up the middleware
        app.use(function(req, res, next) {
            //req.i18n.setLocaleFromQuery();
            req.i18n.setLocaleFromCookie();
            next();
        });

        // request body parsing middleware should be above methodOverride
        app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.methodOverride());
        app.use(express.multipart());

        app.use(express.cookieParser());

        app.use(express.session({
            secret: config.session.key,
            cookie: {
                _expires: config.session.maxAge
            }
        }));

        //store sessions to mysql db using session store
        // app.use(session({
        //     key: config.session.cookieName,
        //     secret: config.session.key,
        //     store: sessionStore,
        //     resave: true,
        //     saveUninitialized: true
        // }))


        //connect flash for flash messages
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.appname));



        //use passport session
        app.use(passport.initialize());
        app.use(passport.session());

        //routes should be at the last
        app.use(app.router);

        //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            //Treat as 404
            if (~err.message.indexOf('not found')) return next();

            //Log it
            console.error(err.stack);

            //Error page
            res.status(500).render('500.html', {
                error: err.stack
            });
        });

        //Assume 404 since no middleware responded
        app.use(function(req, res, next) {
            res.status(404).render('404.html', {
                url: req.originalUrl,
                error: 'Not found'
            });
        });

    });
};
