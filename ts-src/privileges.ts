import * as access from "./access";
import { error, isUndefined } from "util";

export class Privileges extends access.Access{

    constructor(dbPath:string="./json"){
        super(dbPath);
    }
    get_all_prvileges(){
        // this return the array of all privileges and defualt value without discription
        let curTable:any = this.get_privilege_table();
        let retunPrivileges:any[]=[];
        for (let index = 1; index < curTable.length; index++) {
            retunPrivileges[index-1] = [curTable[index][0], curTable[index][2]];
            
  
        }
        return retunPrivileges;
    }


    validate_single_privilege(privilege:string){
         //returns the index at 0 with table row as array at 1
        // else it retrns false clearing for new insert
        if (isUndefined(privilege) || privilege == ""){
            throw  ("Privilege can be empty");
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
        
        if (isUndefined(curPrivilege) ||  curPrivilege == ""){// check  are privilege field
            throw  ( "privilege field is  compulsory");
        }

        if (isUndefined(curDescription) || curDescription == ""){// check for description field
            throw  ( "description field is  compulsory");
        }
        if ((curDefualt == true) || (curDefualt == false)) {// check for defualt field
            // pass 
        }else{
            if (isUndefined(curDefualt) || curDefualt != ""){
                throw  ( "defualt field is  compulsory");
            }
            
        }

        // insert one row
        let checkInsert:any = this.validate_single_privilege(curPrivilege);
        if (checkInsert == false){
            // false suggest this privilege is not found in table
            super.privilege_insert(curPrivilege, curDescription, curDefualt);

        }
        
     

    }

    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge){
        //update one privalage
        // write code of validation
        if(isUndefined(newPrivilege) ||  newPrivilege === ""){// check newPrivilege field
            throw  ("newPrivilege field is compulsory");
        }
        if(isUndefined(newDescription) || newDescription === ""){// check for new description field
            throw  ("newDescription field is compulsory");
        }
        if( isUndefined(newDefualt) || newDefualt ===""){// check for newDedualt field
            throw  ("newDefualt field is compulsory");
        }
        if(isUndefined(oldPrivalge) || oldPrivalge === ""){//check for old
            throw  ("oldPrivalge field is compulsory");
        }

        


        let checkUpdate:any = this.validate_single_privilege(newPrivilege);        
        if ((checkUpdate != false && newPrivilege == oldPrivalge) ||(newPrivilege != oldPrivalge)){
            super.privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge);
        }else{
            throw  (newPrivilege + " invalid duplicate new privilege");
        }
        //code to update roles.json table i.e replace oldPrvivlege by newPrivilege  
        let privilegeRoles = this.cascade_update_privileges_of_roles_table_by_privilege_table_update(newPrivilege, oldPrivalge);
        //push this curTable to role.json file in one short.
        this.roles_full_table_update(privilegeRoles);
        
      
    }


    protected cascade_update_privileges_of_roles_table_by_privilege_table_update(newPrivilege:string, oldPrvivlege:string){
        // this update the role table privileges in case of change in privileges names by privileges.json update
        // similer casacading effect
        if(isUndefined(newPrivilege) || newPrivilege === ""){
            throw ("newPrivileges can not be empty");
        }

        if (isUndefined(oldPrvivlege) || oldPrvivlege === ""){
            throw ("oldPrivileges can not be empty");
        }

        let curTable:any = this.get_roles_table();
        for (let index = 1; index < curTable.length; index++) {
            for (let i = 0; i < curTable[index][1].length; i++) {
                if(curTable[index][1][i][0] == oldPrvivlege){
                    curTable[index][1][i][0] = newPrivilege;
                    
                }
            }
        }
        
        return curTable;

    }


    protected cascade_delete_prevent_privilege_table_by_role_table(privilege:string){
        // this prevents delete of privilege  privilegs.json in case the privilege is used in roles.json 


        if (isUndefined(privilege) || privilege === ""){
            throw ("oldPrivileges can not be empty");
        }

        let curTable:any = this.get_roles_table();
        for (let index = 1; index < curTable.length; index++) {
            for (let i = 0; i < curTable[index][1].length; i++) {
                if(curTable[index][1][i][0] == privilege){
                    throw (privilege + " is used in roles.json not allowed");
                    
                }
            }
        }
        
        return true;

    }

    privilege_delete(privilege:string){
        // deletes one privilege
        // write code of validation
        // cascade prevent delte in case privilege is used in roles.json table
        let deletePrvilege = this.cascade_delete_prevent_privilege_table_by_role_table(privilege);
        if(isUndefined(privilege)  || privilege == ""){
            throw  ("Privilege name not given");
        }
        super.privilege_delete(privilege);
    }
}