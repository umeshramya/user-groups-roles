"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles = require("./roles");
const util_1 = require("util");
class UserGroupRole extends roles.Roles {
    constructor() {
        super();
    }
    get_user_roles(user) {
        // this return the role of the users
        return this.users[user];
    }
    get_user_privileges(user) {
        // this gets privileges for each role of 
        let _role = this.get_user_roles(user);
        let _privileges = this.roles[_role];
        return _privileges;
    }
    insret_user(user, role) {
        // validate to check existing role
        this.read_roles();
        if (util_1.isUndefined(this.roles[role])) {
            throw new Error(role + " role is not valid");
        }
        // prevent duplicate entry user.json
        if (util_1.isUndefined(this.users[user])) {
            super.insret_user(user, role);
            this.read_users();
        }
        else {
            throw new Error(user + " is  duplicate user not allowed");
        }
    }
}
exports.UserGroupRole = UserGroupRole;
//# sourceMappingURL=users.js.map