import * as access from "./access";
import { error } from "util";

export class Privileges extends access.Access{

    constructor(dbpath:string="./json"){
        super(dbpath);
    }

    privilege_insert(privilege:string, description:string, defualt:string){
        // insert one row

        // write code of validation
        if ((privilege == "") || (description == "") || (defualt == "")){
            throw new Error ( "all fields are compulsory");
        }
        super.privilege_insert(privilege, description, defualt);
    }

    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge){
        //update one privalage
        // write code of validation
        if((newPrivilege == "") || (newDescription == "") || (newDefualt == "") || (oldPrivalge == "")){
            throw new Error ("all fields are compulsory");
        }
       super.privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge);
    }



    privilege_delete(privilege:string){
        // deletes one privilege
        // write code of validation
        if(privilege == ""){
            throw new Error ("Privilege name not given");
        }
        super.privilege_delete(privilege);
    }
}