import { isUndefined } from "util";

const util = require("util");

var privileges =[];// holds the previlegs
var roles = [];// holds the roles
var rolePrivilege =[];// holds the role and concerned previlegs with value
// if in case a perticular 

var createPrivileges = (name, description, defaultValue)=>{
    // this sets the privileges
    if(util.isUndefined(name)){
        throw "name is required";
    }
    if(util.isUndefined(description)){
        throw "Description is required";
    }

    if(util.isUndefined(defaultValue)){
        throw "Default value is required";
    }
    privileges.push ( [
       name,
       description,
       defaultValue
    ]);


}
var createNewRole = (role) =>{
    // creates new role
    roles.push(role);
}

var addPrivilegeToRole = (role, privilege, value)=>{
    // This method adds one privilege to single role i.e rolePrivilege array
    var checked = {};//this objects holds the status of method for checking
    for (let index = 0; index < privileges.length; index++) {
        //check privileges for valid privileg
        if(privileges[index][0] == name){
            checked.privilege = true;
            break;
        }
    for (let i = 0; i < roles.length; i++) {
        // check roles for vakid role
        if(roles[i] == role){
            checked.role = true
            break;
        }
    }
    // if both condition satisfy then set rolePrivileg array with new prievilegs with value
    if((checked.privilege == true) && (checked.role == true)){
        rolePrivilege.push({
            role   : role,
            privilege   : privilege,
            value   : value
        });
        return true
    }else{
        return false
    }

}




/*
    ====================================================
                            TESTS
    ====================================================
*/ 
createPrivileges("create", "get the secured route", false);

createPrivileges("delete", "post the secured route", false);
console.log(privileges);

createNewRole("admin");
createNewRole("editor");

console.log(roles);

