# user-groups-roles
## Under Development
This module is meant for creating user, groups or roles and privileges.

#### To install use this command
**npm i user-groups-roles**

### users
Users are created from the other modules are used in this module. This module does not need a password. This also does not authenticate users. software developers are required to pass authenticated users to this module.
users are assigned a role or group. from this role user inherit privileges

### roles or groups
Roles and groups are used interchangeably
Roles are declared by the admins. By default, these roles are added, admin, editor, author, contributor, a subscriber. Admin has the power to create new kind of roles by using privileges.
***Note admin user and admin roles or groups are not the same***.
The admin user is supreme. he has all powers even above admin roles or groups.

### privileges
These are created by a software developer, not by admin. Admin user can not create new privileges, but by default, he has the power to assign existing privileges(i.e created by software developer