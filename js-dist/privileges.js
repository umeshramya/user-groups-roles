"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access = require("./access");
class Privileges extends access.Access {
    constructor(dbpath = "./json") {
        super(dbpath);
    }
}
exports.Privileges = Privileges;
//# sourceMappingURL=privileges.js.map