import * as privileges from "./privileges";

export class Roles extends privileges.Privileges{

    constructor(dbpath:string="./json"){
        super(dbpath);
    }

    
}