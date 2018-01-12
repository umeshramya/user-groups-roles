import * as crud from "crud-json-array";
import { Privileges } from "./privileges";

let crudPrivileges  = new crud.CRUD(); //instance of class for privileges.json
let crudRoles       = new crud.CRUD(); //instance of class for roles.json
let crudUsers       = new crud.CRUD(); //instance of class for users.json


export class Access{

    constructor(dbPath:string="./json"){
        crudPrivileges.create_database(dbPath);
        crudPrivileges.create_table('privileges', ["privilege", "description", "defualt"]);

        crudRoles.create_database(dbPath);
        crudRoles.create_table("roles", ["role", "privileges"]);

        crudUsers.create_database(dbPath);
        crudUsers.create_table('users', ['user', 'role']);       
        
    }

    /*
    =============
    user.json CRUD
    =============
    */ 
   protected user_insert(user:string, role:string){
        // insert one row
        crudUsers.insert_one_row([user,role]);
    }

    protected user_update(newUser:string, NewRole:string, oldUser:string){
        // updates one row
        crudUsers.update_one_row([newUser, NewRole],[0, oldUser]);
    }


    protected get_users_table(){
        return crudUsers.read_table_in_memory();
    }

    protected user_delete(user:string){
        // delets one row
        crudUsers.delete_one_row([0, user]);
    }
    protected users_full_table_update(curTable:any[]){
        // this updates the privileges.json in one short
        crudUsers.write_full_table_in_bulk(curTable);
    }

    /*
        ================
        roles.json CRUD
        ================
    */ 

    protected role_insert(role:string, privileges:any[]){
        // insert one row
        crudRoles.insert_one_row([role, privileges])

    }
    protected role_update(newRole:string, newPrivileges:any[], oldRole:string){
        // updates one row
        crudRoles.update_one_row([newRole, newPrivileges],[0,oldRole]);

    }
    protected get_roles_table(){
        // returns in memory table of roles.json
        return crudRoles.read_table_in_memory();

    }

    protected role_delete(role:string){
        // deletes single row
        crudRoles.delete_one_row([0, role]);

    }
    protected roles_full_table_update(curTable:any[]){
        // this updates the privileges.json in one short
        crudRoles.write_full_table_in_bulk(curTable);
    }

    /*
        =====================
        privileges.json CRUD
        =====================
    */ 
    protected privilege_insert(privilege:string, description:string, defualt:string){
        // insert one row
        crudPrivileges.insert_one_row([privilege, description, defualt]);
    }

    protected privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge){
        //update one privalage
        crudPrivileges.update_one_row([newPrivilege, newDescription, newDefualt], [0, oldPrivalge] );
    }

    protected get_privilege_table(){
        // gets privileges.json table from memory
        return crudPrivileges.read_table_in_memory();
        
    }

    protected privilege_delete(privilege:string){
        // deletes one privilege
        crudPrivileges.delete_one_row([0,privilege]);
    }

    protected privileges_full_table_update(curTable:any[]){
        // this updates the privileges.json in one short
        crudPrivileges.write_full_table_in_bulk(curTable);
        
    }

}