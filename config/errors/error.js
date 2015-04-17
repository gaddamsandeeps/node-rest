var _ = require('lodash');

// Load app configuration

// _.assign combines the two objects into a bigger object.
module.exports = _.assign(
    require(__dirname + '/../../config/errors/error-messages.js')
);
