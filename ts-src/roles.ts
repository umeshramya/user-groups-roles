/*
This files declares the roles of softwere roles are declared by  Admin user by defualt

this inherit privileges class

*/ 
import * as privileges from "./privileges";


export class Roles extends privileges.Privileges{
    constructor (){
        super();
    }

    insert_role(role:string, privileges={}){
        // this validate the roles to added

        // check for asigened privileges
        // all privilege are to be added while declering roles
        // if some privilesge are not added then defult privilegs will added
        this.read_privileges();

        // check for undeclered privileges
        



    }
}