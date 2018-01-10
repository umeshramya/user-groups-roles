import * as privileges from "./privileges";
import { CRUD } from "crud-json-array";

export class Roles extends privileges.Privileges{

    constructor(dbPath:string="./json"){
        super(dbPath);
    }

    get_role_privileges(role:string){
        // this code validates role and returns privileges of the role 
        // it throws error if role is not found
        let crutTable:any[]= this.get_roles_table();//
        let privileges:{};
        for (let index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role){
                privileges = crutTable[index][1];
            }
        }        
        throw new Error(role + " is not a valid role")
    }

    validate_role(role:string){
        // this check for duplicate roles entry
        // return the role if found or return flase if not found
        let crutTable = this.get_roles_table();
        for (let index = 0; index < crutTable.length; index++) {
            if(crutTable[index][0] == role){
                return [index, [crutTable[index]]];
            }
            
        }
        return false // this will allow new role entry
    }  
 


    role_insert(role:string, privileges:any[]){
        // insert one row
       /*
        author : [
                ["create_voucher",  true],
                [edit_voucher",  false],
                ["delete_voucher",  true],
                ["change_date", 0]
                ]
        */ 
        if (role == ""){
            throw new Error("role field is compulsory");// role can nor be empty
        }
        if (privileges.length ==0){
            throw new Error ("Privileges can not be empty")// privileges can not be empty
        } 

        // check for valid role to prevent duplicate enty
        if(this.validate_role(role) != false){
            throw new Error (role + " this is duplicate entry, suggested to use update for modifications");
        }
        // check valid privilegess
        let validPrivilege:any;
        for (let index = 0; index < privileges.length; index++) {
           validPrivilege = this.validate_single_privilege(privileges[index][0]);
           if(validPrivilege == false){
               throw new Error (validPrivilege + " is invalid privilege");
           }
            
        }      
    
        super.role_insert(role, privileges);
    }



    role_update(newRole:string, newPrivileges:any[], oldRole:string){
        // updates one row
        if (newRole === ""){
            throw new Error("newRole can not be empty");//checking empty newRole   
        }

        if(newPrivileges.length == 0){
            throw new Error("newPrevileges cannot zero length array");//checking for zero length newPrivileges
        }

        if(oldRole === ""){
            throw new Error("oldRole can not empty");//checking for empty old role
        }

        // check for valid newPrivilages



        super.role_update(newRole, newPrivileges, oldRole);

    }


    role_delete(role:string){
        // deletes single row
       super.role_delete(role);

    }


    
}