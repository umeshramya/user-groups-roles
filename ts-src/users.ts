import * as fs from "fs";
import * as roles from "./roles";

import { exists } from "fs";
import { WSAEAFNOSUPPORT } from "constants";
import { isUndefined } from "util";



export type privilege_type = {
                bool:1,
                int:2,
                string:3,
                date:4
            }

export class UserGroupRole extends roles.Roles{
    public Users:any;
    public Roles:any;
    public Privileges:any;

    constructor (jsonFolderPath:string= "./json"){
        super(jsonFolderPath); 
        this.Users= super.read_memory_users();
        this.Roles = super.read_memory_roles();
        this.Privileges = super.read_memory_privileges();       
    }

    get_user_role(user:string){
        // this return the role of the users
        let users = this.read_memory_users();
        return users[user];
    }


    get_user_privileges(user:string){
        // this gets privileges for spcified user from roles of 
        let role:string = this.get_user_role(user);//extract role of user
        let _privileges:any = this.get_role_privileges(role);
        return _privileges;
    }


    insert_user(user:string, role:string){
        // this code has be still rewritten fix the bug

        // validate to check existing role
        this.read_memory_roles();
        if (isUndefined (this.read_memory_roles()[role])){
            throw new Error(role + " role is not valid");
        }
        // prevent duplicate entry user.json

        if(isUndefined(this.read_memory_users()[user])){
            super.insert_user(user, role);
            this.read_memory_users();
        }else{
            throw new Error(user + " is  duplicate user not allowed");
        }

        

    }

    


}







