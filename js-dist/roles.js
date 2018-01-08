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
var Roles = /** @class */ (function (_super) {
    __extends(Roles, _super);
    function Roles(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    Roles.prototype.validate_role_privileges = function (role) {
        // this code validates role and returns privileges of the role 
        // it throws error if role is not found
        var crutTable = this.get_roles_table(); //
        var privileges;
        for (var index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                privileges = crutTable[index][1];
                return privileges;
            }
        }
        throw new Error(role + " ins not a valid role");
    };
    Roles.prototype.role_insert = function (role, privileges) {
        // insert one row
        _super.prototype.role_insert.call(this, role, privileges);
    };
    Roles.prototype.role_update = function (newRole, newPrivileges, oldRole) {
        // updates one row
        _super.prototype.role_update.call(this, newRole, newPrivileges, oldRole);
    };
    Roles.prototype.role_delete = function (role) {
        // deletes single row
        _super.prototype.role_delete.call(this, role);
    };
    return Roles;
}(privileges.Privileges));
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map