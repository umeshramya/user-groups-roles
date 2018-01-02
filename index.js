"use strict";
exports.__esModule = true;
var fs = require("fs");
var UserGroupRole = /** @class */ (function () {
    function UserGroupRole() {
        this.privileges = fs.readFileSync("privileges.json");
        this.users = fs.readFileSync("users.json");
        this.roles = fs.readFileSync("roles.json");
        this.privileges = JSON.parse(this.privileges);
        this.users = JSON.parse(this.users);
        this.roles = JSON.parse(this.roles);
    }
    UserGroupRole.prototype.get_user_roles = function (user) {
        // this return the role of the users
        return this.users[user];
    };
    UserGroupRole.prototype.get_user_privileges = function (user) {
        // this gets privileges for each role of 
        var _role = this.get_user_roles(user);
        var _privileges = this.roles[_role];
        console.log(_privileges);
    };
    UserGroupRole.prototype.set_user_roles = function (user) {
        // here add user to user.json file wwith roles
        // this is dicided by admin and descendent
    };
    UserGroupRole.prototype.set_roles = function (role) {
        // get previleges from privilegs json and set it 
        // this is dicided by admin and descendent
    };
    UserGroupRole.prototype.set_previleges = function (previleges, type) {
        // this is created by the progrmer of the softwere
        // this has no acces to admin and descendents
        // only programer place
        /*
        =============================================================
        preveleges can be set inside the progrme and assigned here
        rather  then writing in JSON
        ======================================================
        */
    };
    return UserGroupRole;
}());
exports.UserGroupRole = UserGroupRole;
var cur = new UserGroupRole();
cur.get_user_privileges('umeshbilagi');
cur.get_user_privileges('ramya');
