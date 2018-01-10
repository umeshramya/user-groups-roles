"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*class for implimanting users*/
const roles = require("./roles");
class Users extends roles.Roles {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    validate_user_role(user) {
        // this validates the from the tabel and returns role if found or throw error
        let curTable = this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
            if (curTable[index][0] == user) {
                return curTable[index][1];
            }
        }
        throw new Error(user + " is not valid user");
    }
    get_user_privileges(user) {
        // this after checking valid user from this.valid_user_role
        // return the prileges from this.validate_roles()
        let role = this.validate_user_role(user);
        return this.get_role_privileges(role);
    }
    user_insert(user, role) {
        // insert one row
        // write code of validation
        let validRolePrivileges;
        validRolePrivileges = this.get_role_privileges(role); //returns error if not valid role
        if (validRolePrivileges == {}) {
            throw new Error(role + " invalid role");
        }
        else {
            super.user_insert(user, role);
        }
    }
    user_update(newUser, NewRole, oldUser) {
        // updates one row
        // write code of validation        
        super.user_update(newUser, NewRole, oldUser);
    }
    user_delete(user) {
        // delets one row
        // write code of validatation
        super.user_delete(user);
    }
}
exports.Users = Users;
