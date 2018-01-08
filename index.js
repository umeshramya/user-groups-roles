"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imp = require("./ts-src/users");
class UserGroupsRoles extends imp.Users {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
}
exports.UserGroupsRoles = UserGroupsRoles;
//# sourceMappingURL=index.js.map