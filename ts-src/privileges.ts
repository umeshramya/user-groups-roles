import * as access from "./access";
import { error } from "util";

export class Privileges extends access.Access{

    constructor(dbPath:string="./json"){
        super(dbPath);
    }
    validate_privilege(privilege:string){
         //returns the index at 0 with table row as array at 1
        // else it retrns false clearing for new insert
        if (privilege == ""){
            throw new Error ("Privilege can be empty");
        }
        let curTable:any = this.get_privilege_table();
        for (let index = 0; index < curTable.length; index++) {
            if (curTable[index][0] == privilege){
                return [index, curTable[index]];//returns the index at 0 with table row as array at 1
            }
        }
        return false;// this suggest this privilege is not found 

    }
    privilege_insert(privilege:string, description:string, defualt:string){
        if ((privilege == "") || (description == "") || (defualt == "")){
            throw new Error ( "all fields are compulsory");
        }
        // insert one row
        let checkInsert:any = this.validate_privilege(privilege);
        if (checkInsert == false){
            // false suggest this privilege is not found in table
            super.privilege_insert(privilege, description, defualt);

        }else{
            throw new Error(privilege + " invalid duplicate privilege");
        }
     

    }

    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge){
        //update one privalage
        // write code of validation
    //    || (newDefualt == "") || (oldPrivalge == "")
        if(((newPrivilege == "") || (newDescription == "")) && ((newDefualt == "") || (oldPrivalge == ""))){
            throw new Error ("all fields are compulsory");
        }
        let checkUpdate:any = this.validate_privilege(newPrivilege);        
        if (checkUpdate == false){
            super.privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge);
        }else{
            throw new Error (newPrivilege + " invalid duplicate new privilege");
        }
      
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