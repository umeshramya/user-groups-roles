/*class for implimanting users*/
import * as roles from "./roles"

export class Users extends roles.Roles{
    constructor(dbPath:string="./json"){
        super(dbPath);
    }

    validate_user_role(user:string){
        // this validates the from the tabel and returns role if found or throw error
        let curTable:any[] = this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
            if(curTable[index][0]==user){
                return curTable[index][1];
            }        
        }
        throw new Error(user + " is not valid user");
    }

    get_user_privileges(user:string){
        // this after checking valid user from this.valid_user_role
        // return the prileges from this.validate_roles()
        let role:string= this.validate_user_role(user);
        return this.get_role_privileges(role);
    }

    user_insert(user, role){
        // insert one row
        // write code of validation
        let validRolePrivileges:{} ={};
        validRolePrivileges = this.get_role_privileges(role);//returns error if not valid role
        if (validRolePrivileges == {}){
            throw new Error ( role + " invalid role");   
        }else{
            super.user_insert(user,role);
        }
        
    }

    user_update(newUser, NewRole, oldUser){
        // updates one row
        // write code of validation        

        super.user_update(newUser, NewRole, oldUser);
    }

    user_delete(user){
        // delets one row
        // write code of validatation

        super.user_delete(user);
    }

}