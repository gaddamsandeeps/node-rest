/** 
 * Routes
 * Module dependencies.
 */
var userController = require('../app/controllers/user'),
    citizenController = require('../app/controllers/citizen'),
    volunteerController = require('../app/controllers/volunteer'),
    officeController = require('../app/controllers/office'),
    cadreController = require('../app/controllers/cadre'),
    index = require('../app/controllers/index');

exports.init = function(app, passport, auth) {
    console.log('Initializing Routes');

    // User Routes    
    app.get('/login', userController.login);
    app.get('/signout', userController.signout);
    app.get('/success', auth.requiresLogin, auth.user.hasAuthorization, function(req, res) {
        index.officehome(req, res);
    });

    app.get('/user/getuserfromsession', auth.requiresLogin, userController.getUserFromSession);
    app.get('/user/isuserexist', userController.isUserExist);
    app.get('/user/ismobileexist', userController.isMobileExist);
    app.get('/user/isemailexist', userController.isMailExist);

    app.get('/user/userslist', auth.requiresLogin, userController.usersList, auth.filterResponse);
    app.get('/user/usertypes', userController.userTypes);

    app.get('/user/myprofile', auth.requiresLogin, userController.myProfile, auth.filterResponse);
    app.put('/user/updateprofile', auth.requiresLogin, userController.updateProfile, auth.filterResponse);

    app.get('/user/view', auth.requiresLogin, userController.viewUser, auth.filterResponse);
    app.get('/user/resetpassword', auth.requiresLogin, userController.resetPassword, auth.filterResponse);

    app.post('/user/createtask', auth.requiresLogin, userController.createTask, auth.filterResponse);
    app.put('/user/edittask', auth.requiresLogin, userController.editTask, auth.filterResponse);
    app.delete('/user/deletetask', auth.requiresLogin, userController.deleteTask, auth.filterResponse);
    app.get('/user/gettask', auth.requiresLogin, userController.getTask, auth.filterResponse);
    app.get('/user/viewtask', auth.requiresLogin, userController.viewTask, auth.filterResponse);
    app.get('/user/viewtasks', auth.requiresLogin, userController.viewTasks, auth.filterResponse);

    app.post('/user/viewrole', auth.requiresLogin, userController.getRole, auth.filterResponse);
    app.delete('/user/deactivaterole', auth.requiresLogin, userController.deactivateRole, auth.filterResponse);
    app.delete('/user/saverole', auth.requiresLogin, userController.saveRole, auth.filterResponse);
    app.put('/user/updaterole', auth.requiresLogin, userController.updateRole, auth.filterResponse);
    app.get('/user/viewroles', auth.requiresLogin, userController.getRoles, auth.filterResponse);
    app.get('/user/privileges', auth.requiresLogin, userController.getPrivileges, auth.filterResponse);

    //citizen routes   
    app.get('/citizen/qualifications', citizenController.getQualifications);
    app.get('/citizen/address', citizenController.getAddressByPincode);
    app.get('/citizen/occupations', citizenController.getOccupations);

    app.post('/citizen/self/savepersonalinf', citizenController.savePersonalInf);
    app.put('/citizen/editpersonalinf', auth.requiresLogin, citizenController.editPersonalInf, auth.filterResponse);
    app.get('/citizen/getpersonalinf', auth.requiresLogin, citizenController.getPersonalInf, auth.filterResponse);
    app.delete('/citizen/deletepersonalinf', auth.requiresLogin, citizenController.deletePersonalinf, auth.filterResponse);
    app.put('/citizen/self/editpersonalinf', citizenController.editPersonalInf);
    app.get('/citizen/self/getpersonalinf', citizenController.getPersonalInf);

    app.post('/citizen/self/saveworkinf', citizenController.saveWorkInf);
    app.put('/citizen/editworkinf', auth.requiresLogin, citizenController.editWorkInf, auth.filterResponse);
    app.get('/citizen/getworkinf', auth.requiresLogin, citizenController.getWorkInf, auth.filterResponse);
    app.put('/citizen/self/editworkinf', citizenController.editWorkInf);
    app.get('/citizen/self/getworkinf', citizenController.getWorkInf);

    app.post('/citizen/self/savevoterinf', citizenController.saveVoterInf);
    app.put('/citizen/editvoterinf', auth.requiresLogin, citizenController.editVoterInf, auth.filterResponse);
    app.get('/citizen/getvoterinf', auth.requiresLogin, citizenController.getVoterInf, auth.filterResponse);
    app.delete('/citizen/deletevoterinf', auth.requiresLogin, citizenController.deleteVoterInf, auth.filterResponse);
    app.put('/citizen/self/editvoterinf', citizenController.editVoterInf);
    app.get('/citizen/self/getvoterinf', citizenController.getVoterInf);

    app.post('/citizen/self/saveresidentialaddress', citizenController.saveResidentialAddress);
    app.put('/citizen/editresidentialaddress', auth.requiresLogin, citizenController.editResidentialAddress, auth.filterResponse);
    app.get('/citizen/getresidentialaddress', auth.requiresLogin, citizenController.getResidentialAddress, auth.filterResponse);
    app.put('/citizen/self/editresidentialaddress', citizenController.editResidentialAddress);
    app.get('/citizen/self/getresidentialaddress', citizenController.getResidentialAddress);

    app.post('/citizen/self/savefamily', citizenController.saveFamily);
    app.put('/citizen/editfamily', auth.requiresLogin, citizenController.editFamily, auth.filterResponse);
    app.get('/citizen/getfamily', auth.requiresLogin, citizenController.getFamily, auth.filterResponse);
    app.del('/citizen/deletefamily', auth.requiresLogin, citizenController.deleteFamily, auth.filterResponse);
    app.put('/citizen/self/editfamily', citizenController.editFamily);
    app.get('/citizen/self/getfamily', citizenController.getFamily);

    app.post('/citizen/self/completeregistration', citizenController.completeRegistration);
    app.post('/citizen/self/quickregistration', citizenController.quickRegistration);

    app.delete('/citizen/delete', auth.requiresLogin, citizenController.delete, auth.filterResponse);

    app.get('/citizen/viewcitizen', auth.requiresLogin, citizenController.viewCitizen, auth.filterResponse);
    app.get('/citizen/getvoterinfbytext', citizenController.getVoterInfByText);
    app.get('/citizen/careeraspirations', citizenController.careerAspirations);
    app.get('/citizen/skillgaps', citizenController.skillGaps);

    //volunteer routes
    app.get('/volunteer/interestedareastovolunteer', volunteerController.areasIntrestedToVolunteer);
    app.get('/volunteer/volunteercategory', volunteerController.volunteerCategory);
    app.get('/volunteer/volunteerleads', volunteerController.volunteerLeads);

    app.post('/volunteer/save', volunteerController.save);
    app.put('/volunteer/edit', auth.requiresLogin, volunteerController.edit, auth.filterResponse);
    app.get('/volunteer/get', auth.requiresLogin, volunteerController.get, auth.filterResponse);
    app.delete('/volunteer/delete', auth.requiresLogin, volunteerController.delete, auth.filterResponse);

    app.get('/volunteer/isvolunteeridexist', volunteerController.isVolunteerIdExist);
    app.get('/volunteer/performancegrades', volunteerController.performanceGrades);
    app.get('/volunteer/volunteersheet', auth.requiresLogin, volunteerController.volunteerSheet, auth.filterResponse);

    //cadre routes    
    app.get('/cadre/partypositions', cadreController.partyPositions);
    app.get('/cadre/bloodgroups', cadreController.bloodGroups);

    //app.post('/cadre/save', auth.requiresLogin, auth.user.hasAuthorization, cadreController.save);
    app.put('/cadre/edit', auth.requiresLogin, auth.user.hasAuthorization, cadreController.edit, auth.filterResponse);
    app.get('/cadre/get', auth.requiresLogin, auth.user.hasAuthorization, cadreController.get, auth.filterResponse);
    app.delete('/cadre/delete', auth.requiresLogin, auth.user.hasAuthorization, cadreController.delete, auth.filterResponse);

    app.get('/cadre/cadreWorksheet', auth.requiresLogin, auth.user.hasAuthorization, cadreController.cadreWorksheet, auth.filterResponse);
    app.get('/cadre/ispartymembershipidexist', auth.user.hasAuthorization);

    //office executive routes
    app.post('/office/executive/citizen/savepersonalinf', auth.requiresLogin, officeController.savePersonalInf, auth.filterResponse);
    app.post('/office/executive/citizen/saveworkinf', auth.requiresLogin, officeController.saveWorkInf, auth.filterResponse);
    app.post('/office/executive/citizen/savevoterinf', auth.requiresLogin, officeController.saveVoterInf, auth.filterResponse);
    app.post('/office/executive/citizen/saveresidentialaddress', auth.requiresLogin, officeController.saveResidentialAddress, auth.filterResponse);
    app.post('/office/executive/citizen/savefamily', auth.requiresLogin, officeController.saveFamily, auth.filterResponse);
    app.post('/office/executive/volunteer/save', auth.requiresLogin, officeController.saveVolunteer, auth.filterResponse);
    app.post('/office/executive/cadre/save', auth.requiresLogin, auth.user.hasAuthorization, officeController.saveCadre, auth.filterResponse);

    app.put('/office/manager/vnc/verify', auth.requiresLogin, auth.user.hasAuthorization, officeController.verifyVnC, auth.filterResponse);
    app.put('/office/manager/vnc/reject', auth.requiresLogin, auth.user.hasAuthorization, officeController.rejectVnC, auth.filterResponse);
    app.put('/office/manager/vnc/verificationlist', auth.requiresLogin, auth.user.hasAuthorization, officeController.VnCVerificationList, auth.filterResponse);
    app.get('/office/manager/viewuserinfo', auth.requiresLogin, auth.user.hasAuthorization, officeController.viewUserInfo, auth.filterResponse);


    /* External routes */
    app.get('/postrequest', index.postrequest);
    app.get('/register', index.register);
    app.get('/userdashboard', index.dashboard);
    app.get('/forgotpswd', index.forgotpwd);

    // Setting the local strategy route
    //LOGIN SERVICE
    app.post('/signin',
        passport.authenticate('local', {
            successRedirect: '/success',
            failureRedirect: '/',
            failureFlash: 'failure message...'
        }));

    // Home route
    app.get('/', index.render);
    app.get('/register', index.register);


    app.get('/setlocale/:locale', function(req, res) {
        res.cookie('locale', req.params.locale);
        req.i18n.setLocaleFromCookie();

        res.redirect('/');

    });

};
