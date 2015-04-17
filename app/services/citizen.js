/** 
 * Citizen Service
 * Module dependencies.
 */

var restService = require('./rest/service'),
    restUrls = require('./rest/urls'),
    util = require("../util/util"),
    requireUtil = require("util"),
    config = require('../../config/config'),
    header = config.restUrl.contentType,
    util = require('../util/util'),
    errors = require('../../config/errors/error'),
    properties = require("../controllers/properties"),
    log = require('../util/logger').logger("citizen-service");

exports.savePersonalInf = function(params, token, orgId, callback) {
    log.debug("savePersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    var url;

    if (token) {
        headers[properties.token] = token;
        url = restUrls.office.savePersonalInf;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        url = restUrls.citizen.savePersonalInf;
    }

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editPersonalInf = function(params, token, orgId, callback) {
    log.debug("editPersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.editPersonalInf.path, params.loginId);
        method = restUrls.citizen.editPersonalInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfEditPersonalInf.path, params.loginId);
        method = restUrls.citizen.selfEditPersonalInf.method;
    }

    //build url path
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getPersonalInf = function(params, token, orgId, callback) {
    log.debug("getPersonalInf : " + (JSON.stringify(params)));
    var headers = header;
    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.getPersonalInf.path, params.loginId);
        method = restUrls.citizen.getPersonalInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfGetPersonalInf.path, params.loginId);
        method = restUrls.citizen.selfGetPersonalInf.method;
    }

    //build url path
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deletePersonalinf = function(params, token, callback) {
    log.debug("deletePersonalinf : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.deletePersonalinf.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.deletePersonalinf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveWorkInf = function(params, token, orgId, callback) {
    log.debug("saveWorkInf : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveWorkInf.path, params.userId);
        method = restUrls.office.saveWorkInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.saveWorkInf.path, params.userId);
        method = restUrls.citizen.saveWorkInf.method;
    }

    //build url path
    var url = {
        path: path,
        method: method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editWorkInf = function(params, token, orgId, callback) {
    log.debug("editWorkInf : " + (JSON.stringify(params)));
    var headers = header;

    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.editWorkInf.path, params.userId);
        method = restUrls.citizen.editWorkInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfEditWorkInf.path, params.userId);
        method = restUrls.citizen.selfEditWorkInf.method;
    }

    //build url path
    var url = {
        path: path,
        method: method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getWorkInf = function(params, token, callback) {
    log.debug("getWorkInf : " + (JSON.stringify(params)));
    var headers = header;
    var headers = header;

    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.getWorkInf.path, params.userId);
        method = restUrls.citizen.getWorkInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfGetWorkInf.path, params.userId);
        method = restUrls.citizen.selfGetWorkInf.method;
    }

    //build url path
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveVoterInf = function(params, token, orgId, callback) {
    log.debug("saveVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveVoterInf.path, params.userId);
        method = restUrls.office.saveVoterInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.saveVoterInf.path, params.userId);
        method = restUrls.citizen.saveVoterInf.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    //remove userId from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editVoterInf = function(params, token, callback) {
    log.debug("editVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.editVoterInf.path, params.userId);
        method = restUrls.citizen.editVoterInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfEditVoterInf.path, params.userId);
        method = restUrls.citizen.selfEditVoterInf.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    //remove userid from params
    delete params.userId;

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getVoterInf = function(params, token, callback) {
    log.debug("getVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.getVoterInf.path, params.userId);
        method = restUrls.citizen.getVoterInf.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfGetVoterInf.path, params.userId);
        method = restUrls.citizen.selfGetVoterInf.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};


exports.getVoterInfByText = function(params, orgId, callback) {
    log.debug("getVoterInfByText : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.citizen.getVoterInfByText.path, params.q);
    var url = {
        path: path,
        method: restUrls.citizen.getVoterInfByText.method
    };


    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteVoterInf = function(params, token, callback) {
    log.debug("deleteVoterInf : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.deleteVoterInf.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.deleteVoterInf.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveResidentialAddress = function(params, token, orgId, callback) {
    log.debug("saveResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveResidentialAddress.path, params[0].userId);
        method = restUrls.office.saveResidentialAddress.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.saveResidentialAddress.path, params[0].userId);
        method = restUrls.citizen.saveResidentialAddress.method;
    }

    //build url path    
    var url = {
        path: path,
        method: restUrls.citizen.saveResidentialAddress.method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editResidentialAddress = function(params, token, callback) {
    log.debug("editResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.saveResidentialAddress.path, params[0].userId);
        method = restUrls.citizen.saveResidentialAddress.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfEditResidentialAddress.path, params[0].userId);
        method = restUrls.citizen.selfEditResidentialAddress.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getResidentialAddress = function(params, token, callback) {
    log.debug("getResidentialAddress : " + (JSON.stringify(params)));
    var headers = header;
    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.getResidentialAddress.path, params[0].userId);
        method = restUrls.citizen.getResidentialAddress.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfGetResidentialAddress.path, params[0].userId);
        method = restUrls.citizen.selfGetResidentialAddress.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getAddressByPincode = function(params, orgId, callback) {
    log.debug("getAddressByPincode : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.citizen.addressByPincode.path, params.q);

    var url = {
        path: path,
        method: restUrls.citizen.addressByPincode.method
    };


    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.saveFamily = function(params, token, orgId, callback) {
    log.debug("saveFamily : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.office.saveFamily.path, params[0].userId);
        method = restUrls.office.saveFamily.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.saveFamily.path, params[0].userId);
        method = restUrls.citizen.saveFamily.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.editFamily = function(params, token, callback) {
    log.debug("editFamily : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.editFamily.path, params[0].userId);
        method = restUrls.citizen.editFamily.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfEditFamily.path, params[0].userId);
        method = restUrls.citizen.selfEditFamily.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    //remove userid from params
    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getFamily = function(params, token, callback) {
    log.debug("getFamily : " + (JSON.stringify(params)));
    var headers = header;
    var path, method;

    if (token) {
        headers[properties.token] = token;
        path = requireUtil.format(restUrls.citizen.getFamily.path, params[0].userId);
        method = restUrls.citizen.getFamily.method;
    } else if (orgId) {
        headers[properties.orgid] = orgId;
        path = requireUtil.format(restUrls.citizen.selfGetFamily.path, params[0].userId);
        method = restUrls.citizen.selfGetFamily.method;
    }

    //build url path    
    var url = {
        path: path,
        method: method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.deleteFamily = function(params, token, callback) {
    log.debug("deleteFamily : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.deleteFamily.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.deleteFamily.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.completeRegistration = function(params, orgId, callback) {
    log.debug("completeRegistration : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    //build url path
    var path = requireUtil.format(restUrls.citizen.completeRegistration.path, params.q);

    var url = {
        path: path,
        method: restUrls.citizen.completeRegistration.method
    };

    params.splice(0, 1);

    restService.builbArgs(url, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.quickRegistration = function(params, orgId, callback) {
    log.debug("quickRegistration : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.quickRegistration, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};
exports.getQualifications = function(params, orgId, callback) {
    log.debug("getQualifications : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.qualifications, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.getOccupations = function(params, orgId, callback) {
    log.debug("getOccupations : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.occupations, params, headers, function(args) {
        restService.makecall(args, callback);
    });
};

//delete citizen
exports.delete = function(params, token, callback) {
    log.debug("delete : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.delete.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.delete.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

//view citizen
exports.viewCitizen = function(params, token, callback) {
    log.debug("viewCitizen : " + (JSON.stringify(params)));
    var headers = header;
    if (token)
        headers[properties.token] = token;

    //build url path
    var path = requireUtil.format(restUrls.citizen.viewCitizen.path, params.userId);
    var url = {
        path: path,
        method: restUrls.citizen.viewCitizen.method
    };

    restService.builbArgs(url, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.careerAspirations = function(params, orgId, callback) {
    log.debug("careerAspirations : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.careerAspirations, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};

exports.skillGaps = function(params, orgId, callback) {
    log.debug("skillGaps : " + (JSON.stringify(params)));
    var headers = header;
    if (orgId)
        headers[properties.orgId] = orgId;

    restService.builbArgs(restUrls.citizen.skillGaps, null, headers, function(args) {
        restService.makecall(args, callback);
    });
};
