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

    constructor (){
        super();        
    }

    get_user_role(user:string){
        // this return the role of the users
        let users = this.read_users();
        return users[user];
    }


    get_user_privileges(user:string){
        // this gets privileges for spcified user from roles of 
        let _role:string = this.get_user_role(user);//extract role of user
        let _privileges:any = this.read_roles()[_role];
        return _privileges;
    }


    insret_user(user:string, role:string){

        // validate to check existing role
        this.read_roles();
        if (isUndefined (this.read_roles()[role])){
            throw new Error(role + " role is not valid");
        }
        // prevent duplicate entry user.json
        if(isUndefined(this.read_users[user])){
            super.insret_user(user, role);
            this.read_users();
        }else{
            throw new Error(user + " is  duplicate user not allowed");
        }

        

    }

    


}







