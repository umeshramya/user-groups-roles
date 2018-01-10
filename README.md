# user-groups-roles
## Under Development
This module is meant for creating user, groups or roles and privileges.

#### To install use this command
**npm i user-groups-roles**

## Usage
```
var role = require("user-groups-roles");
var curRole = new   role.UserGroupsRoles("test");
// from above code test folder is creted inside your project with three files
// test/prvileges.json, test/roles.json, user.json

```
## CRUD operatation for privilege.json


## CRUD opertation for roles.json


## CRUD operation for users.json

### users
Users are created from the other  modules are used in this module. This module does not need a password. This also does not authenticate users. software developers are required to pass authenticated users to this module.
users are assigned a role or group. from this role user inherit privileges
users are created by admins or new registritation process.

### roles or groups
Roles and groups are used interchangeably
Roles are declared by the admins. Admin has the power to create new kind of roles by using privileges. one can have admin roles.
***Note admin user and admin roles or groups are not the same***.
The admin user is supreme. he has all powers even above admin roles or groups.

#### example of  roles table
```
{
    "array" : [
        ["role","privileges"],
        ["admin", [["create_voucher", true], ["delete_voucher", true], ["edit_voucher", true]]],
        ["editor", [["create_voucher", true], ["delete_voucher", true], ["edit_voucher", false]]],
        ["author", [["create_voucher", true], ["delete_voucher", false], ["edit_voucher", false]]],
    ]
}
```

### privileges
These are created by a software developer, not by admin. Admin user can not create new privileges, but by default, he has the power to assign existing privileges(i.e created by software developer
#### exapmple of prvileges table
```
{"array":[
        ["privilege","description","defualt"],
        ["create_voucher","This gives permsion to create voucher",true],
        ["delete_voucher","This gives permsion to delete voucher",true],
        ["alter_voucher","This allows altering the voucher",false]
    ]
    }

```