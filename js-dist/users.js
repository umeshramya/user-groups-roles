"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles = require("./roles");
const util_1 = require("util");
class UserGroupRole extends roles.Roles {
    constructor(jsonFolderPath = "./json") {
        super(jsonFolderPath);
        this.Users = super.read_memory_users();
        this.Roles = super.read_memory_roles();
        this.Privileges = super.read_memory_privileges();
    }
    get_user_role(user) {
        // this return the role of the users
        let users = this.read_memory_users();
        return users[user];
    }
    get_user_privileges(user) {
        // this gets privileges for spcified user from roles of 
        let role = this.get_user_role(user); //extract role of user
        let _privileges = this.get_role_privileges(role);
        return _privileges;
    }
    insert_user(user, role) {
        // this code has be still rewritten fix the bug
        // validate to check existing role
        this.read_memory_roles();
        if (util_1.isUndefined(this.read_memory_roles()[role])) {
            throw new Error(role + " role is not valid");
        }
        // prevent duplicate entry user.json
        if (util_1.isUndefined(this.read_memory_users()[user])) {
            super.insert_user(user, role);
            this.read_memory_users();
        }
        else {
            throw new Error(user + " is  duplicate user not allowed");
        }
    }
}
exports.UserGroupRole = UserGroupRole;
//# sourceMappingURL=users.js.map