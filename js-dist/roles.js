"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const privileges = require("./privileges");
class Roles extends privileges.Privileges {
    constructor(dbpath = "./json") {
        super(dbpath);
    }
}
exports.Roles = Roles;
//# sourceMappingURL=roles.js.map