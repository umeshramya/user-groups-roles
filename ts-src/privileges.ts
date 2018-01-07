import * as access from "./access";

export class Privileges extends access.Access{

    constructor(dbpath:string="./json"){
        super(dbpath);
    }
    
}