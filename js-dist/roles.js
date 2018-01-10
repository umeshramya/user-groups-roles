"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const privileges = require("./privileges");
class Roles extends privileges.Privileges {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    get_role_privileges(role) {
        // this code validates role and returns privileges of the role 
        // it throws error if role is not found
        let crutTable = this.get_roles_table(); //
        let privileges;
        for (let index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                privileges = crutTable[index][1];
            }
        }
        throw new Error(role + " is not a valid role");
    }
    validate_role(role) {
        // this check for duplicate roles entry
        // return the role if found or return flase if not found
        let crutTable = this.get_roles_table();
        for (let index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                return [index, [crutTable[index]]];
            }
        }
        return false; // this will allow new role entry
    }
    role_insert(role, privileges) {
        // insert one row
        /*
         author : [
                 ["create_voucher",  true],
                 [edit_voucher",  false],
                 ["delete_voucher",  true],
                 ["change_date", 0]
                 ]
         */
        if (role == "") {
            throw new Error("role field is compulsory"); // role can nor be empty
        }
        if (privileges.length == 0) {
            throw new Error("Privileges can not be empty"); // privileges can not be empty
        }
        // check for valid role to prevent duplicate enty
        if (this.validate_role(role) != false) {
            throw new Error(role + " this is duplicate entry suggested update for modifications");
        }
        // check valid privilege
        let validPrivilege;
        for (let index = 0; index < privileges.length; index++) {
            validPrivilege = this.validate_single_privilege(privileges[index][0]);
            if (validPrivilege == false) {
                throw new Error(validPrivilege + " is invalid privilege");
            }
        }
        super.role_insert(role, privileges);
    }
    role_update(newRole, newPrivileges, oldRole) {
        // updates one row
        super.role_update(newRole, newPrivileges, oldRole);
    }
    role_delete(role) {
        // deletes single row
        super.role_delete(role);
    }
}
exports.Roles = Roles;
