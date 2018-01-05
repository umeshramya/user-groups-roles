"use strict";
/*
This file  declares the previliges of softwere
These are to be set by softwere developers

Admin user is defualt person to asign privilges

Each privileges has name of privilegs with asigend array
asigned array has first value as defult value and second value as discription of privilege
*/
Object.defineProperty(exports, "__esModule", { value: true });
const access = require("./access");
class Privileges extends access.Access {
    constructor(jsonFolderPath = "./json") {
        super(jsonFolderPath);
    }
    set_previleges(previleges, type) {
    }
}
exports.Privileges = Privileges;
//# sourceMappingURL=privileges.js.map