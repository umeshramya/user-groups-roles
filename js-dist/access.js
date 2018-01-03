"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Access {
    constructor() {
        // // below code is commentted beciase it has absulte path to inside node module
        //     protected privileges:any  = fs.readFileSync(path.join(__dirname, "json/privileges.json"));    
        //     protected users:any = fs.readFileSync(path.join(__dirname, "json/users.json"));
        //     protected roles:any = fs.readFileSync(path.join(__dirname, "json/roles.json"));
        // unlike above code below code has reletive path in to conjumer project
        this.privileges = fs.readFileSync("json/privileges.json");
        this.users = fs.readFileSync("./json/users.json");
        this.roles = fs.readFileSync("./json/roles.json");
        this.privileges = JSON.parse(this.privileges);
        this.users = JSON.parse(this.users);
        this.roles = JSON.parse(this.roles);
    }
}
exports.Access = Access;
//# sourceMappingURL=access.js.map