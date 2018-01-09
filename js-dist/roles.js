"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const privileges = require("./privileges");
class Roles extends privileges.Privileges {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    get_role_privileges(role) {
        // this code validates role and returns privileges of the role 
        // it throws error if role is not found
        let crutTable = this.get_roles_table(); //
        let privileges;
        for (let index = 0; index < crutTable.length; index++) {
            if (crutTable[index][0] == role) {
                privileges = crutTable[index][1];
            }
        }
        throw new Error(role + " ins not a valid role");
    }
    role_insert(role, privileges) {
        // insert one row
        if (role == "") {
            throw new Error("role field is compulsory");
        }
        super.role_insert(role, privileges);
    }
    role_update(newRole, newPrivileges, oldRole) {
        // updates one row
        super.role_update(newRole, newPrivileges, oldRole);
    }
    role_delete(role) {
        // deletes single row
        super.role_delete(role);
    }
}
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map