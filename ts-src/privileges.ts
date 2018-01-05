/*
This file  declares the previliges of softwere 
These are to be set by softwere developers

Admin user is defualt person to asign privilges

Each privileges has name of privilegs with asigend array
asigned array has first value as defult value and second value as discription of privilege
*/ 

import * as access from "./access";

export type privilege_type = {
    bool:1,
    int:2,
    string:3,
    date:4
}

export class Privileges extends access.Access{
    constructor(){
        super();
    }

    set_previleges(previleges:string, type:privilege_type){


    }
}