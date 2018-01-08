"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access = require("./access");
class Privileges extends access.Access {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    privilege_insert(privilege, description, defualt) {
        // insert one row
        // write code of validation
        if ((privilege == "") || (description == "") || (defualt == "")) {
            throw new Error("all fields are compulsory");
        }
        super.privilege_insert(privilege, description, defualt);
    }
    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge) {
        //update one privalage
        // write code of validation
        if ((newPrivilege == "") || (newDescription == "") || (newDefualt == "") || (oldPrivalge == "")) {
            throw new Error("all fields are compulsory");
        }
        super.privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge);
    }
    privilege_delete(privilege) {
        // deletes one privilege
        // write code of validation
        if (privilege == "") {
            throw new Error("Privilege name not given");
        }
        super.privilege_delete(privilege);
    }
}
exports.Privileges = Privileges;
//# sourceMappingURL=privileges.js.map