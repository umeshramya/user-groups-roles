import * as privileges from "./privileges";

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

        
        throw new Error(role + " ins not a valid role")
    }



    


    role_insert(role:string, privileges:{}){
        // insert one row
        if (role == ""){
            throw new Error("role field is compulsory");

        }        
        super.role_insert(role, privileges);
    }
    role_update(newRole:string, newPrivileges:{}, oldRole:string){
        // updates one row
        super.role_update(newRole, newPrivileges, oldRole);

    }


    role_delete(role:string){
        // deletes single row
       super.role_delete(role);

    }


    
}