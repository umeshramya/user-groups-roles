"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*class for implimanting users*/
const roles = require("./roles");
const util_1 = require("util");
class Users extends roles.Roles {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    validate_user_role(user) {
        // this validates the from the tabel and returns role if found or throw error
        let curTable = this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
            if (curTable[index][0] === user) {
                return curTable[index][1];
            }
        }
        throw (user + " is not valid user");
    }
    validate_user(user) {
        // this checks for presence of user it returns the user row if present else returns false
        // this is useful for inserting if false then insert
        // if not false can be used for updating
        let curTable = this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
            if (curTable[index][0] === user) {
                return [index, curTable[index]];
            }
        }
        return false;
    }
    get_user_privileges(user) {
        // this is for getting privileges for given user
        //get role of the user
        let role = this.validate_user(user)[1][1];
        // get the declered privileges of roles got
        let privileges = this.get_role_privilegs(role)[1];
        //add undeclerred privileges on the fly for just showing with defulat values
        let allPrivileges = this.get_all_prvileges();
        // return the privileges
        let curPrivilege;
        let curDefualt;
        for (let index = 0; index < privileges.length; index++) {
            curPrivilege = privileges[index][0];
            curDefualt = privileges[index][1];
            for (let i = 0; i < allPrivileges.length; i++) {
                if (allPrivileges[i][0] === curPrivilege) {
                    allPrivileges[i][1] = curDefualt;
                }
            }
        }
        return allPrivileges;
    }
    user_insert(user, role) {
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
            throw (role + "  invalid role");
        }
        super.user_insert(user, role);
    }
    user_update(newUser, newRole, oldUser) {
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
        super.user_update(newUser, newRole, oldUser);
    }
    user_delete(user) {
        // delets one row
        // write code of validatation
        super.user_delete(user);
    }
}
exports.Users = Users;
