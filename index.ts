import * as imp from "./ts-src/users";

export class UserGroupsRoles extends imp.Users{
    constructor(dbPath:string="./json"){
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
        try {
            super.role_insert(role,privileges);
        } catch (error) {
            
            if (error == role + " this is duplicate entry, suggested to use update for modifications"){

            }else{
                throw (error);
            }
        }

        
    }
    role_update(newRole, newPrivileges, oldRole){
        super.role_update(newRole, newPrivileges, oldRole);
    }
    role_delete(role){
        super.role_delete(role);
    }

    // users
    user_insert(user, role){
        try {
            super.user_insert(user, role);
        } catch (error) {
            if (error == "duplicate user is not allowed"){

            }else{
                throw (error);
            }
        }
        

    }
    user_update(newUser, newRole, oldUser){
        super.user_update(newUser, newRole, oldUser);

    }

    user_delete(user){
        super.user_delete(user)

    }
}