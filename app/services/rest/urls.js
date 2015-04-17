module.exports = {
    user: {
        myProfile: {
            path: "myprofile/%s/",
            method: "POST"
        },
        updateProfile: {
            path: "updateProfile/%s/",
            method: "POST"
        },
        authenticate: {
            path: "authenticate",
            method: "POST"
        },
        isUserExist: {
            path: "user/usernameexists/%s/",
            method: "GET"
        },
        isMobileExist: {
            path: "user/mobileexists/%s/",
            method: "GET"
        },
        isMailExist: {
            path: "user/emailexists/%s/",
            method: "GET"
        },
        usersList: {
            path: "search/users",
            method: "GET"
        },
        userTypes: {
            path: "lookup/usertype/",
            method: "GET"
        },
        viewUser: {
            path: "user/%s/requestDetails",
            method: "GET"
        },
        resetPassord: {
            path: "user/resetpassword/%s/",
            method: "GET"
        },
        createTask: {
            path: "user/%s/",
            method: "POST"
        },
        editTask: {
            path: "user/%s/",
            method: "POST"
        },
        deleteTask: {
            path: "user/%s/",
            method: "POST"
        },
        getTask: {
            path: "user/%s/",
            method: "POST"
        },
        viewTask: {
            path: "user/%s/",
            method: "POST"
        },
        viewTasks: {
            path: "user/%s/",
            method: "POST"
        },
        getRole: {
            path: "roles/%s/",
            method: "GET"
        },
        deactivateRole: {
            path: "roles/%s/",
            method: "DELETE"
        },
        getRoles: {
            path: "roles",
            method: "GET"
        },
        saveRole: {
            path: "roles",
            method: "POST"
        },
        updateRole: {
            path: "roles/%s/",
            method: "PUT"
        },
        getPrivileges: {
            path: "lookup/privileges",
            method: "GET"
        }
    },
    office: {
        savePersonalInf: {
            path: "user/",
            method: "POST"
        },
        saveWorkInf: {
            path: "user/%s/workinfo",
            method: "PUT"
        },
        saveVoterInf: {
            path: "user/%s/voter",
            method: "POST"
        },
        saveResidentialAddress: {
            path: "user/%s/postaladdress",
            method: "POST"
        },
        saveVolunteer: {
            path: "user/%s/volunteer",
            method: "POST"
        },
        saveFamily: {
            path: "user/%s/relation",
            method: "POST"
        },
        saveCadre: {
            path: "user/%s/cadre",
            method: "POST"
        },
        vnCVerificationList: {
            path: "user/vnc",
            method: "POST"
        },
        verifyVnC: {
            path: "user/approval",
            method: "POST"
        },
        rejectVnC: {
            path: "user/reject",
            method: "POST"
        },
        viewUserInfo: {
            path: "userinfo/%s/getuserinformation",
            method: "GET"
        }
    },
    citizen: {
        viewCitizen: {
            path: "user/%s/requestDetails",
            method: "GET"
        },
        savePersonalInf: {
            path: "user/registration/self/",
            method: "POST"
        },
        editPersonalInf: {
            path: "user/%s/",
            method: "PUT"
        },
        deletePersonalInf: {
            path: "user/%s/",
            method: "DELETE"
        },
        getPersonalInf: {
            path: "user/%s/",
            method: "GET"
        },
        selfEditPersonalInf: {
            path: "user/registration/self/%s/",
            method: "PUT"
        },
        selfGetPersonalInf: {
            path: "user/registration/self/%s/",
            method: "GET"
        },
        saveWorkInf: {
            path: "user/registration/self/%s/workinfo",
            method: "PUT"
        },
        editWorkInf: {
            path: "user/%s/workinfo",
            method: "PUT"
        },
        getWorkInf: {
            path: "user/%s/workinfo",
            method: "GET"
        },
        selfEditWorkInf: {
            path: "user/registration/self/%s/workinfo",
            method: "PUT"
        },
        selfGetWorkInf: {
            path: "user/registration/self/%s/workinfo",
            method: "GET"
        },
        saveVoterInf: {
            path: "user/registration/self/%s/voter",
            method: "POST"
        },
        editVoterInf: {
            path: "user/%s/voter",
            method: "PUT"
        },
        getVoterInf: {
            path: "user/%s/voter",
            method: "GET"
        },
        deleteVoterInf: {
            path: "user/%s/voter",
            method: "DELETE"
        },
        selfEditVoterInf: {
            path: "user/registration/self/%s/voter",
            method: "PUT"
        },
        selfGetVoterInf: {
            path: "user/registration/self/%s/voter",
            method: "GET"
        },
        getVoterInfByText: {
            path: "lookup/%s/constituency",
            method: "GET"
        },
        saveResidentialAddress: {
            path: "user/registration/self/%s/postaladdress",
            method: "POST"
        },
        editResidentialAddress: {
            path: "user/%s/postaladdress",
            method: "PUT"
        },
        getResidentialAddress: {
            path: "user/%s/postaladdress",
            method: "GET"
        },
        delete: {
            path: "user/%s/",
            method: "DELETE"
        },
        selfEditResidentialAddress: {
            path: "user/registration/self/%s/postaladdress",
            method: "PUT"
        },
        selfGetResidentialAddress: {
            path: "user/registration/self/%s/postaladdress",
            method: "GET"
        },
        saveFamily: {
            path: "user/registration/self/%s/relation",
            method: "POST"
        },
        editFamily: {
            path: "user/%s/relation",
            method: "PUT"
        },
        getFamily: {
            path: "user/%s/relation",
            method: "GET"
        },
        deleteFamily: {
            path: "user/%s/relation",
            method: "DELETE"
        },
        selfEditFamily: {
            path: "user/registration/self/%s/relation",
            method: "PUT"
        },
        selfGetFamily: {
            path: "user/registration/self/%s/relation",
            method: "GET"
        },
        occupations: {
            path: "lookup/occupation/",
            method: "GET"
        },
        addressByPincode: {
            path: "lookup/address/%s/",
            method: "GET"
        },
        qualifications: {
            path: "lookup/qualification/",
            method: "GET"
        },
        careerAspirations: {
            path: "lookup/careeraspirations",
            method: "GET"
        },
        skillGaps: {
            path: "lookup/skillgaps",
            method: "GET"
        },
        completeRegistration: {
            path: "user/registration/self/%s/completeregistration",
            method: "POST"
        },
        quickRegistration: {
            path: "user/registration/self/quickreg",
            method: "POST"
        }
    },
    volunteer: {
        save: {
            path: "user/%s/volunteer",
            method: "POST"
        },
        edit: {
            path: "user/%s/volunteer",
            method: "PUT"
        },
        get: {
            path: "user/%s/volunteer",
            method: "GET"
        },
        delete: {
            path: "user/%s/volunteer",
            method: "DELETE"
        },
        areasIntrestedToVolunteer: {
            path: "lookup/interestedarea/",
            method: "GET"
        },
        category: {
            path: "lookup/volunteercategory/",
            method: "GET"
        },
        leads: {
            path: "lookup/volunteerleads",
            method: "GET"
        },
        isVolunteerIdExist: {
            path: "user/volunteercodeexists/%s",
            method: "GET"
        },
        performanceGrades: {
            path: "lookup/performancegrades",
            method: "GET"
        },
        volunteerSheet: {
            path: "user/%s/volunteerSheet",
            method: "GET"
        }
    },
    cadre: {
        save: {
            path: "user/%s/cadre",
            method: "POST"
        },
        edit: {
            path: "user/%s/cadre",
            method: "PUT"
        },
        get: {
            path: "user/%s/cadre",
            method: "GET"
        },
        delete: {
            path: "user/%s/cadre",
            method: "DELETE"
        },
        responsibityInParty: {
            path: "partypositions/",
            method: "POST"
        },
        partyPositions: {
            path: "lookup/partyposition/",
            method: "GET"
        },
        bloodGroups: {
            path: "lookup/bloodgroup",
            method: "GET"
        },
        cadreWorksheet: {
            path: "user/%s/cadreWorksheet",
            method: "GET"
        },
        isPartyMemberShipIdExist: {
            path: "user/partymemberidexists/%s",
            method: "GET"
        }
    }
};
