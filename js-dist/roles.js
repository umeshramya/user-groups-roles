"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
This files declares the roles of softwere roles are declared by  Admin user by defualt

this inherit privileges class

*/
const privileges = require("./privileges");
class Roles extends privileges.Privileges {
    constructor(jsonFolderPath = "./json") {
        super(jsonFolderPath);
    }
    get_role_privileges(role) {
        // this return privileges of specifed role
        let privilages = this.read_memory_roles()[role];
        return privilages;
    }
    insert_role(role, privileges = {}) {
        // this validate the roles to added
        // check for asigened privileges
        // all privilege are to be added while declering roles
        // if some privilesge are not added then defult privilegs will added
        let privilages = this.read_memory_privileges();
        // check for undeclered privileges
    }
}
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map