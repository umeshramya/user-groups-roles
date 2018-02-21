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
exports.__esModule = true;
var imp = require("./ts-src/users");
var UserGroupsRoles = /** @class */ (function (_super) {
    __extends(UserGroupsRoles, _super);
    function UserGroupsRoles(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    // privileges
    UserGroupsRoles.prototype.privilege_insert = function (curPrivilege, curDescription, curDefualt) {
        _super.prototype.privilege_insert.call(this, curPrivilege, curDescription, curDefualt);
    };
    UserGroupsRoles.prototype.privilege_update = function (newPrivilege, newDescription, newDefualt, oldPrivilege) {
        _super.prototype.privilege_update.call(this, newPrivilege, newDescription, newDefualt, oldPrivilege);
    };
    UserGroupsRoles.prototype.privilege_delete = function (privilege) {
        _super.prototype.privilege_delete.call(this, privilege);
    };
    //roles
    UserGroupsRoles.prototype.role_insert = function (role, privileges) {
        try {
            _super.prototype.role_insert.call(this, role, privileges);
        }
        catch (error) {
            if (error == role + " this is duplicate entry, suggested to use update for modifications") {
            }
            else {
                throw (error);
            }
        }
    };
    UserGroupsRoles.prototype.role_update = function (newRole, newPrivileges, oldRole) {
        _super.prototype.role_update.call(this, newRole, newPrivileges, oldRole);
    };
    UserGroupsRoles.prototype.role_delete = function (role) {
        _super.prototype.role_delete.call(this, role);
    };
    // users
    UserGroupsRoles.prototype.user_insert = function (user, role) {
        try {
            _super.prototype.user_insert.call(this, user, role);
        }
        catch (error) {
            if (error == "duplicate user is not allowed") {
            }
            else {
                throw (error);
            }
        }
    };
    UserGroupsRoles.prototype.user_update = function (newUser, newRole, oldUser) {
        _super.prototype.user_update.call(this, newUser, newRole, oldUser);
    };
    UserGroupsRoles.prototype.user_delete = function (user) {
        _super.prototype.user_delete.call(this, user);
    };
    return UserGroupsRoles;
}(imp.Users));
exports.UserGroupsRoles = UserGroupsRoles;
