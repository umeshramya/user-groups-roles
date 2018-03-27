const util = require("util");
var privileges =[];// holds the previlegs
var roles = [];// holds the roles
var rolePrivilege =[];// holds the role and concerned previlegs with value
// if in case a perticular 

var createNewPrivileges = (name, description, defaultValue)=>{
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
    for (let index = 0; index < privileges.length; index++) {
        if(privileges[index][0] == name){
            throw `${name} is duplicate privilege so not allowed`;
        }
        
    }
    privileges.push ( [
       name,
       description,
       defaultValue
    ]);
}
module.exports.createNewPrivileges = createNewPrivileges;

var getAllPrivileges = () => {
    return privileges;
}
module.exports.getAllPrivileges = getAllPrivileges;
/*
    ====================================================
    ====================================================
*/ 

var createNewRole = (role) =>{
    // creates new role
    if(util.isUndefined(role)){
        throw "role can not be empty";
    }
    for (let index = 0; index < roles.length; index++) {
        if(roles[index] == role){
            throw `${role} is duplicate role not allowed`
        }
    }

    roles.push(role);
}
module.exports.createNewRole =createNewRole;

var getAllRoles = () => {
    return roles;
}
module.exports.getAllRoles = getAllRoles;
/*
    ====================================================
    ====================================================
*/ 

var addPrivilegeToRole = (role, privilege, value)=>{
    // This method adds one privilege to single role i.e rolePrivilege array
    var checked = {};//this objects holds the status of method for checking
    checked.privilege = false;
    checked.role = false;

    for (let index = 0; index < privileges.length; index++) {
        //check privileges for valid privileg
        if(JSON.stringify(privileges[index][0]) == JSON.stringify(privilege)){
            checked.privilege = true;
            break;
        }
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
        rolePrivilege.push([
            role,
            privilege,
            value
        ]);
        return true
    }else{
        return false
    }
}
module.exports.addPrivilegeToRole = addPrivilegeToRole;
/*
    ====================================================
    ====================================================
*/ 
var getRolePrivileges = (role)=>{
    // this returns privileges for role
    //it sets defualt value in case a privileges
    var curPrivileges = [];
    //get privileges from set i.e from array rolePrivileges
    for (let index = 0; index < rolePrivilege.length; index++) {
        if(rolePrivilege[index][0] == role){
            curPrivileges.push(
                [
                    rolePrivilege[index][1], rolePrivilege[index][2]
                ]
            )
        }
        
    }

    // it adds all privieges and defualt value as later in array
    // while assessing first come first is accptable
    for (let i = 0; i < privileges.length; i++) {
        curPrivileges.push([
            privileges[i][0], privileges[i][2]
        ]);
        
    }

    return curPrivileges
}
module.exports.getRolePrivileges = getRolePrivileges;

/*
    =====================================================================
        below method for getting roles for given route and request method GET, POST, PUT and DELETE
    =====================================================================
*/ 
var getRoleRoutePrivilegeValue = (role, url, method)=>{
    // this method retuns the route value of the  privilege in case it is present 
   var privileges =  getRolePrivileges(role);
   for (let index = 0; index < privileges.length; index++) {
        if(url == privileges[index][0][0] && method == privileges[index][0][1]){
            return privileges[index][1]
            break;
        }
     
   }

} 
module.exports.getRoleRoutePrivilegeValue = getRoleRoutePrivilegeValue;

/*
    =====================================================================
        below method for getting roles for given curPrivilge used inside bussiness logic
    =====================================================================
*/ 

var getRolePrivilegeValue = (role, curprivilege)=>{
    // this method retuns method value other than route of the privilege used inside bussiness logic i.e model
   var privileges =  getRolePrivileges(role);
   for (let index = 0; index < privileges.length; index++) {
        if(curprivilege == privileges[index][0]){
            return privileges[index][1]
            break;
        }
     
   }

}

module.exports.getRolePrivilegeValue = getRolePrivilegeValue;



