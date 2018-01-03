import * as fs from "fs";
import * as access from "./access";
import { exists } from "fs";



export type privilege_type = {
                bool:1,
                int:2,
                string:3,
                date:4
            }

export class UserGroupRole extends access.Access{


    constructor (){
        super();
        // code to create new folder by name json if not exist
        if (!fs.existsSync("json")){
            fs.mkdirSync("json");
        }

        // code to create users.json if not exist
        if(!fs.existsSync("json/users.json")){
            var createStream = fs.createWriteStream("json/users.json");
                createStream.end();
        }

        // code to create roles.json if not exist
        if(!fs.existsSync("json/roles.json")){
            var createStream = fs.createWriteStream("json/roles.json");
                createStream.end();
        }
        
        // code to create privileges.json if exist
        if(!fs.existsSync("json/privileges.json")){
            var createStream = fs.createWriteStream("json/privileges.json");
                createStream.end();
        }
    }

    get_user_roles(user:string){
        // this return the role of the users
        return this.users[user];
    }

    get_user_privileges(user:string){
        // this gets privileges for each role of 
        let _role:string = this.get_user_roles(user);
        let _privileges:any = this.roles[_role];
        return _privileges;
    }

    set_user_roles(user:string){
        // here add user to user.json file wwith roles
        // this is dicided by admin and descendent

    }

    set_roles(role:string){
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







