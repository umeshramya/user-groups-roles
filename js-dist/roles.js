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
var privileges = require("./privileges");
var util_1 = require("util");
var Roles = /** @class */ (function (_super) {
    __extends(Roles, _super);
    function Roles(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    Roles.prototype.validate_role = function (role) {
        // this check for duplicate roles entry
        // return the role if found or return false if not found
        var crutTable = this.get_roles_table();
        for (var index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                return [index, crutTable[index]];
            }
        }
        return false; // this will allow new role entry
    };
    Roles.prototype.validate_privileges = function (privileges) {
        // this validate array of privileges
        // throws error if privilege is not declered in privileges.json table
        var validPrivilege;
        for (var index = 0; index < privileges.length; index++) {
            validPrivilege = this.validate_single_privilege(privileges[index][0]);
            if (validPrivilege == false) {
                throw (validPrivilege + " is invalid privilege");
            }
        }
    };
    Roles.prototype.get_role_privilegs = function (role) {
        // this return the array of privileges declered for roles.json
        // return false if role is nor found
        var crutTable = this.get_roles_table();
        for (var index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                return crutTable[index];
            }
        }
        return false;
    };
    Roles.prototype.role_insert = function (role, privileges) {
        // insert one row
        /*
         author : [
                 ["create_voucher",  true],
                 [edit_voucher",  false],
                 ["delete_voucher",  true],
                 ["change_date", 0]
                 ]
         */
        if (util_1.isUndefined(role) || role == "") {
            throw ("role field is compulsory"); // role can nor be empty
        }
        if (util_1.isUndefined(privileges) || privileges.length == 0) {
            throw ("Privileges can not be empty"); // privileges can not be empty
        }
        // check for valid role to prevent duplicate enty
        if (this.validate_role(role) != false) {
            throw (role + " this is duplicate entry, suggested to use update for modifications");
        }
        // check valid privileges
        this.validate_privileges(privileges);
        _super.prototype.role_insert.call(this, role, privileges);
    };
    Roles.prototype.role_update = function (newRole, newPrivileges, oldRole) {
        // updates one row
        if (util_1.isUndefined(newRole) || newRole === "") {
            throw ("newRole can not be empty"); //checking empty newRole   
        }
        if (util_1.isUndefined(newPrivileges) || newPrivileges.length == 0) {
            throw ("newPrevileges cannot zero length array"); //checking for zero length newPrivileges
        }
        if (util_1.isUndefined(oldRole) || oldRole === "") {
            throw ("oldRole can not empty"); //checking for empty old role
        }
        // validate newRole (prvents duplicate role)
        // check for valid role to prevent duplicate enty
        if ((this.validate_role(newRole) != false) && (newRole != oldRole)) {
            throw (newRole + " this is duplicate entry not allowed");
        }
        // check valid privileges
        this.validate_privileges(newPrivileges);
        // check for valid newPrivilages
        _super.prototype.role_update.call(this, newRole, newPrivileges, oldRole);
        // update users.json roles by changes in roles.json role names
        var userRolesTable = this.cascade_update_roles_of_users_table_by_roles_table_update(newRole, oldRole);
        this.users_full_table_update(userRolesTable);
    };
    Roles.prototype.cascade_update_roles_of_users_table_by_roles_table_update = function (newRole, oldRole) {
        // this updates users.json table for roles updateing in roles.json
        // cascading effect
        if (util_1.isUndefined(newRole) || newRole == "") {
            throw ("newRole can not be empty");
        }
        if (util_1.isUndefined(oldRole) || oldRole == "") {
            throw ("oldRole can not be empty");
        }
        var curTable = this.get_users_table();
        for (var index = 0; index < curTable.length; index++) {
            if (curTable[index][1] == oldRole) {
                curTable[index][1] = newRole;
            }
        }
        return curTable;
    };
    Roles.prototype.cascade_delete_prevent_role_table_by_user_table = function (role) {
        // this prevents the delete roles in case the role is present in user table
        if (util_1.isUndefined(role) || role == "") {
            throw ("role can not be empty");
        }
        var curTable = this.get_users_table();
        for (var index = 0; index < curTable.length; index++) {
            if (curTable[index][1] == role) {
                throw (role + " is used in user.json table so not allowed");
            }
        }
        return true;
    };
    Roles.prototype.role_delete = function (role) {
        // deletes single row
        // code to prevent delete in case role is present in users.json 
        // cascade prevent delete
        var deleteRow = this.cascade_delete_prevent_role_table_by_user_table(role);
        if (util_1.isUndefined(role) || role == "") {
            throw ("role can not be empty");
        }
        _super.prototype.role_delete.call(this, role);
    };
    return Roles;
}(privileges.Privileges));
exports.Roles = Roles;
