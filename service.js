var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var Service = require('node-windows').Service,
    EventLogger = require('node-windows').EventLogger,
    config = require("./config/config"),
    log = new EventLogger('CDS');

// Create a new service object
var svc = new Service({
    name: config.appname,
    description: config.appname + " " + config.app.description,
    script: require('path').join(__dirname, 'app.js')
});

//svc.user.domain = 'mydomain.local';
//svc.user.account = 'username';
//svc.user.password = 'password';

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
    log.info(config.appname + " Tool Service installed.");
    console.log(config.appname + " Tool Service installed.");
    svc.start();
});

svc.on('alreadyinstalled', function() {
    log.info(config.appname + " Tool Service already installed.");
    console.log(config.appname + " Tool Service already installed.");
});

svc.on('invalidinstallation', function() {
    log.info(config.appname + " Tool Service invalid installation.");
    console.log(config.appname + " Tool Service invalid installation.");
});

svc.on('uninstall', function() {
    log.info(config.appname + " Tool Service uninstalled.");
    console.log(config.appname + " Tool Service uninstalled.");
});

svc.on('start', function() {
    log.info(config.appname + " Tool Service started.");
    console.log(config.appname + " Tool Service started.");
});

svc.on('stop', function() {
    log.info(config.appname + " Tool Service stopped.");
    console.log(config.appname + " Tool Service stopped.");
});

svc.on('error ', function() {
    log.error(config.appname + " Tool Service has an error.");
    console.log(config.appname + " Tool Service has an error.");
});

var args = process.argv.slice(2)[0];
if (args === 'install') {
    svc.install();
} else if (args === 'uninstall') {
    svc.uninstall();
} else if (args === 'start') {
    console.log(svc)
    svc.start();
} else if (args === 'stop') {
    svc.stop();
} else {
    console.log("Please pass action as argument like install/uninstall/start/stop");
}
