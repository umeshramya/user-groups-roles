/*class for implimanting users*/
import * as roles from "./roles"

export class Users extends roles.Roles{
    constructor(dbpath:string="./json"){
        super(dbpath);
    }

    user_insert(user, role){
        // insert one row
        // write code of validation

        super.user_insert(user,role);
    }

    user_update(newUser, NewRole, oldUser){
        // updates one row
        // write code of validation        

        super.user_update(newUser, NewRole, oldUser);
    }

    user_delete(user){
        // delets one row
        // write code of validatation

        super.user_delete(user);
    }
}