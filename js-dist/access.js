"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crud = require("crud-json-array");
var crudPrivileges = new crud.CRUD(); //instance of class for privileges.json
var crudRoles = new crud.CRUD(); //instance of class for roles.json
var crudUsers = new crud.CRUD(); //instance of class for users.json
var Access = /** @class */ (function () {
    function Access(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        crudPrivileges.create_database(dbPath);
        crudPrivileges.create_table('privileges.json', ["privilege", "description", "defualt"]);
        crudRoles.create_database(dbPath);
        crudRoles.create_table("roles.json", ["role", "privileges"]);
        crudUsers.create_database(dbPath);
        crudUsers.create_table('users.json', ['user', 'role']);
    }
    /*
    =============
    user.json CRUD
    =============
    */
    Access.prototype.user_insert = function (user, role) {
        // insert one row
        crudUsers.insert_one_row([user, role]);
    };
    Access.prototype.user_update = function (newUser, NewRole, oldUser) {
        // updates one row
        crudUsers.update_one_row([newUser, NewRole], [0, oldUser]);
    };
    Access.prototype.get_users_table = function () {
        return crudUsers.read_table_in_memory();
    };
    Access.prototype.user_delete = function (user) {
        // delets one row
        crudUsers.delete_one_row([0, user]);
    };
    /*
        ================
        roles.json CRUD
        ================
    */
    Access.prototype.role_insert = function (role, privileges) {
        // insert one row
        crudRoles.insert_one_row([role, privileges]);
    };
    Access.prototype.role_update = function (newRole, newPrivileges, oldRole) {
        // updates one row
        crudRoles.update_one_row([newRole, newPrivileges], [0, oldRole]);
    };
    Access.prototype.get_roles_table = function () {
        // returns in memory table of roles.json
        return crudRoles.read_table_in_memory();
    };
    Access.prototype.role_delete = function (role) {
        // deletes single row
        crudRoles.delete_one_row([0, role]);
    };
    /*
        =====================
        privileges.json CRUD
        =====================
    */
    Access.prototype.privilege_insert = function (privilege, description, defualt) {
        // insert one row
        crudPrivileges.insert_one_row([privilege, description, defualt]);
    };
    Access.prototype.privilege_update = function (newPrivilege, newDescription, newDefualt, oldPrivalge) {
        //update one privalage
        crudPrivileges.update_one_row([newPrivilege, newDescription, newDefualt], [0, oldPrivalge]);
    };
    Access.prototype.get_privilege_table = function () {
        // gets privileges.json table from memory
        return crudPrivileges.read_table_in_memory();
    };
    Access.prototype.privilege_delete = function (privilege) {
        // deletes one privilege
        crudPrivileges.delete_one_row([0, privilege]);
    };
    return Access;
}());
exports.Access = Access;
//# sourceMappingURL=access.js.map