import * as access from "./access";
import { error } from "util";

export class Privileges extends access.Access{

    constructor(dbPath:string="./json"){
        super(dbPath);
    }
    get_all_prvileges(){
        // this return the array of all privileges and defualt value without discription
        let curTable:any = this.get_privilege_table();
        let retunPrivileges:any[];
        for (let index = 1; index < curTable.length; index++) {
            retunPrivileges[index] = [curTable[index][0], curTable[index][2]];  
        }
        return retunPrivileges;
    }
    validate_single_privilege(privilege:string){
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
    privilege_insert(curPrivilege:string, curDescription:string, curDefualt:any){
        
        if ( curPrivilege == ""){// check  are privilege field
            throw new Error ( "privilege field is  compulsory");
        }

        if (curDescription == ""){// check for description field
            throw new Error ( "description field is  compulsory");
        }
        if ((curDefualt == true) || (curDefualt == false)) {// check for defualt field
            // pass 
        }else{
            if (curDefualt != ""){
                throw new Error ( "defualt field is  compulsory");
            }
            
        }

        // insert one row
        let checkInsert:any = this.validate_single_privilege(curPrivilege);
        if (checkInsert == false){
            // false suggest this privilege is not found in table
            super.privilege_insert(curPrivilege, curDescription, curDefualt);

        }else{
            throw new Error(curPrivilege + " invalid duplicate privilege");
        }
     

    }

    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge){
        //update one privalage
        // write code of validation
        if(newPrivilege == ""){// check newPrivilege field
            throw new Error ("newPrivilege field is compulsory");
        }
        if(newDescription == ""){// check for new description field
            throw new Error ("newDescription field is compulsory");
        }
        if( newDefualt ===""){// check for newDedualt field
            throw new Error ("newDefualt field is compulsory");
        }
        if(oldPrivalge == ""){//check for old
            throw new Error ("oldPrivalge field is compulsory");
        }

        


        let checkUpdate:any = this.validate_single_privilege(newPrivilege);        
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