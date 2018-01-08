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
            if (curTable[index][0] == user) {
                return curTable[index][1];
            }
        }
        throw new Error(user + " is not valid user");
    };
    Users.prototype.get_user_privileges = function (user) {
        // this after checking valid user from this.valid_user_role
        // return the prileges from this.validate_roles()
        var role = this.validate_user_role(user);
        return this.validate_role_privileges(role);
    };
    Users.prototype.user_insert = function (user, role) {
        // insert one row
        // write code of validation
        var validRolePrivileges = {};
        validRolePrivileges = this.validate_role_privileges(role); //returns error if not valid role
        if (validRolePrivileges == {}) {
            throw new Error(role + " invalid role");
        }
        else {
            _super.prototype.user_insert.call(this, user, role);
        }
    };
    Users.prototype.user_update = function (newUser, NewRole, oldUser) {
        // updates one row
        // write code of validation        
        _super.prototype.user_update.call(this, newUser, NewRole, oldUser);
    };
    Users.prototype.user_delete = function (user) {
        // delets one row
        // write code of validatation
        _super.prototype.user_delete.call(this, user);
    };
    return Users;
}(roles.Roles));
exports.Users = Users;
//# sourceMappingURL=users.js.map