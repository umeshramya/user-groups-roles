# user-groups-roles
This module is meant for creating user, groups or roles and privileges.

#### To install use this command
**npm i user-groups-roles**

## Usage
```
var role = require("user-groups-roles");
var curRole = new   role.UserGroupsRoles("test");
// from above code test folder is creted inside your project with three files
// test/prvileges.json, test/roles.json, test/user.json

```
## CRUD operatation for privileges.json
```
/*
============================
 CRUD privileges.json
===========================
 */
// insert
curRole.privilege_insert("create_voucher", "permision to create new voucher", true);
curRole.privilege_insert("edit_voucher", "permission to modify voucher", false);
curRole.privilege_insert("delete_voucher", "permision to modify voucher", false);
curRole.privilege_insert("voucher_date","alter or delete voucher date 0 = no date range, -1 = 'can not modify date, more than 0 = number date range", 0);

// update
curRole.privilege_update("alter_voucher", "permission to alter existing voucher", true,"edit_voucher");

// delete
curRole.privilege_delete("delete_voucher")

// get all priviegs with description
curRole.get_privilege_table();

//get all privileges of from the table deducting descrptons
curRole.get_all_prvileges();

```
## CRUD opertation for roles.json
```

/*
======================
CRUD roles.json
=====================
*/ 

// insert 

curRole.role_insert("admin", [
    ["create_voucher", true],
    ["alter_voucher", true],
    ["delete_voucher", true],
    ["voucher_date", 0]

]);

curRole.role_insert("editor", [
    ["create_voucher", true],
    ["alter_voucher", true],
    ["delete_voucher", false],
    ["voucher_date", 30]

]);

curRole.role_insert("author", [
    ["create_voucher", true],
    ["alter_voucher", false],
    ["delete_voucher", false],
    ["voucher_date", -1]

]);

curRole.role_insert("contributor", [
    ["create_voucher", true],
    ["alter_voucher", false],
    ["delete_voucher", false],
    ["voucher_date", -1]

]);

// update

curRole.role_update("contributor", [
    ["create_voucher", false],
    ["alter_voucher", false],
    ["delete_voucher", false],
    ["voucher_date", -1]

], "contributor")


curRole.role_update("subscriber", [
    ["create_voucher", false],
    ["alter_voucher", false],
    ["delete_voucher", false],
    ["voucher_date", -1]

], "contributor")

// // delete
curRole.role_delete("contributor");

// get all role table
curRole.get_roles_table();

```


## CRUD operation for users.json
```


/*
=================
CRUD users.json
================
*/

// insert
curRole.user_insert("ramya", "admin");
curRole.user_insert("umeshbilagi", "editor");

// update
curRole.user_update("umeshbilagi", "subscriber", "umeshbilagi");
curRole.user_update("rajiv", "editor", "umeshbilagi");


// delete
curRole.user_delete("rajiv")

// get table

// get user privileges
curRole.get_user_privileges("umeshbilagi");


// get all users table
curRole.get_users_table();

```

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
#### example of prvileges table
```
{"array":[
        ["privilege","description","defualt"],
        ["create_voucher","This gives permsion to create voucher",true],
        ["delete_voucher","This gives permsion to delete voucher",true],
        ["alter_voucher","This allows altering the voucher",false]
    ]
    }

```

