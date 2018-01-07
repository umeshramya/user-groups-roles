import * as imp from "./ts-src/users";

export class UserGroupsRoles extends imp.Users{
    constructor(dbPath:string="./json"){
        super(dbPath);
    }
}