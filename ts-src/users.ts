/*class for implimanting users*/
import * as roles from "./roles"

export class Users extends roles.Roles{
    constructor(dbPath:string="./json"){
        super(dbPath);
    }

    validate_user_role(user:string){
        // this validates the from the tabel and returns role if found or throw error
        let curTable:any[] = this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
            if(curTable[index][0]===user){
                return curTable[index][1];
            }        
        }
        throw new Error(user + " is not valid user");
    }

    validate_user(user:string){
        // this checks for presence of user it returns the user row if present else returns false
        // this is useful for inserting if false then insert
        // if not false can be used for updating
        let curTable:any=this.get_users_table();
        for (let index = 0; index < curTable.length; index++) {
           if(curTable[index][0] === user){
               return [index, curTable[index]];
           }
            
        }
        return false;
    }

    get_user_privileges(user:string){
        // this is for getting privileges for given user
        //get role of the user

        // get the declered privileges of roles got

        //add undeclerred privileges on the fly for just showing with defulat values

        // return the privileges


    }


    user_insert(user:string, role:string){
        // insert one row
        if(user === ""){
            throw new Error("user field cann be empty");
        }

        if(role === ""){
            throw new Error ("role field can not empty");
        }

        // validate user 
        if (this.validate_user(user)!= false){
            throw new Error("duplicate user is not allowed");
        }

        // check for valid role to prevent duplicate enty
        if(this.validate_role(role) != false){
        throw new Error (role + "  duplicate role entry not allowed");
        } 
        super.user_insert(user,role);
    
        
    }


    user_update(newUser:string, newRole:string, oldUser:string){
        // updates one row
        // check for empty newUser
        if(newUser === ""){
            throw new Error("newRole can not empty");
        }
        // check for empty newRole
        if(newRole === ""){
            throw new Error ("newRole can not be empty");
        }
        // check for empty oldUser
        if(oldUser === ""){
            throw new Error ("oldUser can notbe empty");
        }

        // check for valid new user (to prvent duplicate) i.e if return is false;
        if(this.validate_user(newUser) != false){ 
            throw new Error (newUser + " duplicate newUser is invalid");
        }

        // check for valid newRole (aloow only which prsent in roles.json);
        if(this.validate_role(newRole) == false){
            throw new Error (newRole + " is invalid role");
        }

        super.user_update(newUser, newRole, oldUser);
    }

    user_delete(user){
        // delets one row
        // write code of validatation

        super.user_delete(user);
    }

}