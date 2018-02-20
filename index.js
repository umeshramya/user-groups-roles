"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imp = require("./js-dist/users");
class UserGroupsRoles extends imp.Users {
    constructor(dbPath = "./json") {
        super(dbPath);
    }

    // privileges

    privilege_insert(curPrivilege, curDescription,curDefualt){
        super.privilege_insert(curPrivilege, curDescription,curDefualt);
    }

    privilege_update(newPrivilege, newDescription, newDefualt,oldPrivilege){
        super.privilege_update(newPrivilege, newDescription, newDefualt,oldPrivilege);
    }

    privilege_delete(privilege){
        super.privilege_delete(privilege);
        
    }

    //roles

    role_insert(role,privileges){
        super.role_insert(role,privileges);
    }
    role_update(newRole, newPrivileges, oldRole){
        super.role_update(newRole, newPrivileges, oldRole);
    }
    role_delete(role){
        super.role_delete(role);
    }

    // users
    user_insert(user, role){
        super.user_insert(user, role);

    }
    user_update(newUser, newRole, oldUser){
        super.user_update(newUser, newRole, oldUser);

    }

    user_delete(user){
        super.user_delete(user)

    }
    get_user_privileges(user){
        super.get_user_privileges(user);
    }
}
exports.UserGroupsRoles = UserGroupsRoles;

