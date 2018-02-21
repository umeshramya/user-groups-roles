"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*class for implimanting users*/
var roles = require("./roles");
var util_1 = require("util");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    Users.prototype.validate_user_role = function (user) {
        // this validates the from the tabel and returns role if found or throw error
        var curTable = this.get_users_table();
        for (var index = 0; index < curTable.length; index++) {
            if (curTable[index][0] === user) {
                return curTable[index][1];
            }
        }
        throw (user + " is not valid user");
    };
    Users.prototype.validate_user = function (user) {
        // this checks for presence of user it returns the user row if present else returns false
        // this is useful for inserting if false then insert
        // if not false can be used for updating
        var curTable = this.get_users_table();
        for (var index = 0; index < curTable.length; index++) {
            if (curTable[index][0] === user) {
                return [index, curTable[index]];
            }
        }
        return false;
    };
    Users.prototype.get_user_privileges = function (user) {
        // this is for getting privileges for given user
        //get role of the user
        var role = this.validate_user(user)[1][1];
        // get the declered privileges of roles got
        var privileges = this.get_role_privilegs(role)[1];
        //add undeclerred privileges on the fly for just showing with defulat values
        var allPrivileges = this.get_all_prvileges();
        // return the privileges
        var curPrivilege;
        var curDefualt;
        for (var index = 0; index < privileges.length; index++) {
            curPrivilege = privileges[index][0];
            curDefualt = privileges[index][1];
            for (var i = 0; i < allPrivileges.length; i++) {
                if (allPrivileges[i][0] === curPrivilege) {
                    allPrivileges[i][1] = curDefualt;
                }
            }
        }
        return allPrivileges;
    };
    Users.prototype.user_insert = function (user, role) {
        // insert one row
        if (util_1.isUndefined(user) || user === "") {
            throw ("user field cann be empty");
        }
        if (util_1.isUndefined(role) || role === "") {
            throw ("role field can not empty");
        }
        // validate user 
        if (this.validate_user(user) != false) {
            throw ("duplicate user is not allowed");
        }
        // check for valid role to asign only valid entry
        if (this.validate_role(role) == false) {
            throw (role + "  duplicate role entry not allowed");
        }
        _super.prototype.user_insert.call(this, user, role);
    };
    Users.prototype.user_update = function (newUser, newRole, oldUser) {
        // updates one row
        // check for empty newUser
        if (util_1.isUndefined(newUser) || newUser === "") {
            throw ("newRole can not empty");
        }
        // check for empty newRole
        if (util_1.isUndefined(newRole) || newRole === "") {
            throw ("newRole can not be empty");
        }
        // check for empty oldUser
        if (util_1.isUndefined(oldUser) || oldUser === "") {
            throw ("oldUser can notbe empty");
        }
        // check for valid new user (to prvent duplicate) i.e if return is false;
        if (this.validate_user(newUser) != false && newUser != oldUser) {
            throw (newUser + " duplicate newUser is invalid");
        }
        // check for valid newRole (aloow only which prsent in roles.json);
        if (this.validate_role(newRole) == false) {
            throw (newRole + " is invalid role");
        }
        _super.prototype.user_update.call(this, newUser, newRole, oldUser);
    };
    Users.prototype.user_delete = function (user) {
        // delets one row
        // write code of validatation
        _super.prototype.user_delete.call(this, user);
    };
    return Users;
}(roles.Roles));
exports.Users = Users;
