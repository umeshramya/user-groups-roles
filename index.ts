import * as fs from  "fs";
import * as path from "path";

export type privilege_type = {
                bool:1,
                int:2,
                string:3,
                date:4
            }

export class UserGroupRole{
    private privileges:any  = fs.readFileSync("privileges.json");    
    private users:any = fs.readFileSync("users.json");
    private roles:any = fs.readFileSync("roles.json");

    constructor (){
        this.privileges = JSON.parse(this.privileges);
        this.users      = JSON.parse(this.users);
        this.roles      = JSON.parse(this.roles);
    }

    get_user_roles(user){
        // this return the role of the users
        return this.users[user];
    }

    get_user_privileges(user){
        // this gets privileges for each role of 
        let _role:string = this.get_user_roles(user);
        let _privileges:any = this.roles[_role];
        console.log(_privileges);
    }

    set_user_roles(user){
        // here add user to user.json file wwith roles
        // this is dicided by admin and descendent

    }

    set_roles(role){
        // get previleges from privilegs json and set it 
        // this is dicided by admin and descendent
    }


    set_previleges(previleges:string, type:privilege_type){
        // this is created by the progrmer of the softwere
        // this has no acces to admin and descendents
        // only programer place
        /*
        =============================================================
        preveleges can be set inside the progrme and assigned here 
        rather  then writing in JSON
        ======================================================
        */ 

    }
}

let cur = new UserGroupRole();
cur.get_user_privileges('umeshbilagi');
cur.get_user_privileges('ramya');





