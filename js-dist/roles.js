"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
This files declares the roles of softwere roles are declared by  Admin user by defualt

this inherit privileges class

*/
const privileges = require("./privileges");
class Roles extends privileges.Privileges {
    constructor() {
        super();
    }
    insert_role(role, privileges = {}) {
        // this validate the roles to added
        // check for asigened privileges
        // all privilege are to be added while declering roles
        // if some privilesge are not added then defult privilegs will added
        this.read_privileges();
        // check for undeclered privileges
        console.log(privileges[0]);
    }
}
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map