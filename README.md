# user-groups-roles
![verson](https://img.shields.io/badge/version-2.0.4-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)


This module is meant for creating user, groups or roles and privileges.

#### To install use this command
**npm i user-groups-roles**

## Usage

### create previleges
for creating privileges use createNewPrivileges method this has three arguments name of privilege description of privilege and defualt value for privilege

### get all privileges
use getAllPrivileges method to all privileges

### create roles 
create new role with method createNewRole. this method has one argument i.e name of role.

### get all roles
use getAllRoles to get all roles

### add privileges to roles
use  addPrivilegeToRole method to add privileges to roles. This has three arguments. role , privilege and value(value of privilege against defulat value in createNewPrivileges method)

### get role privileges with this method 
To get all privileges with value for a role use getRolePrivileges. This method accepts one argument i.e role. This method first gets set privileges for a role and further add up all privileges next in same array. So developer has to accept first come first privilege for the role.


## get value for given privilege and role for route 
role is role, url is route , method is GET, POST, PUT and DELETE
getRoleRoutePrivilegeValue = (role, url, method)

## get value for privilge and role inside bussiness logic
getRolePrivilegeValue = (role, curprivilege)

```

createNewPrivileges("create user", "This creats the new", false);
createNewPrivileges("delete user", "this deletes the ", false);
//privilege can be array  like createNewPrivileges(["/create_user", "POST"], "This creats the new", false);

createNewRole("admin");
createNewRole("editor");

console.log(getAllPrivileges());//outputs all privileges
console.log(getAllRoles());// outputs all roles

addPrivilegeToRole("admin","create user", true);
addPrivilegeToRole("admin", "delete user", true);


console.log(getRolePrivileges("admin"));

````
