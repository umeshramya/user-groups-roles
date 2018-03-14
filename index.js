var privileges =[];
var roles = [];

var setPrivileges = (name, description, defaultValue)=>{
    // this sets the privileges
    privileges.push = {
        name : name,
        description : description,
        defualt : defaultValue
    }


}

var getPrivileges = (privilege) => {
    //returns the privilege
    // search using keys in thsis arry of privileges
}

var createRole = (role, ...privilege) => {
    // this creats the new role
    var curPrivileges=[];
    for (let index = 0; index < privilege.length; index++) {
        curPrivileges[index] = privilege
    }
    roles.push = {
        role : curPrivileges
    }

}

var getRolePrivileges = (role) => {
    // this returns thes privileges for current role
}

var validateRole = (role) => {
    // this is middleware 
}