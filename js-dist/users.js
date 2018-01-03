"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const access = require("./access");
class UserGroupRole extends access.Access {
    constructor() {
        super();
        // code to create new folder by name json if not exist
        if (!fs.existsSync("json")) {
            fs.mkdirSync("json");
        }
        // code to create users.json if not exist
        if (!fs.existsSync("json/users.json")) {
            var createStream = fs.createWriteStream("json/users.json");
            createStream.end();
        }
        // code to create roles.json if not exist
        if (!fs.existsSync("json/roles.json")) {
            var createStream = fs.createWriteStream("json/roles.json");
            createStream.end();
        }
        // code to create privileges.json if exist
        if (!fs.existsSync("json/privileges.json")) {
            var createStream = fs.createWriteStream("json/privileges.json");
            createStream.end();
        }
    }
    get_user_roles(user) {
        // this return the role of the users
        return this.users[user];
    }
    get_user_privileges(user) {
        // this gets privileges for each role of 
        let _role = this.get_user_roles(user);
        let _privileges = this.roles[_role];
        return _privileges;
    }
    set_user_roles(user) {
        // here add user to user.json file wwith roles
        // this is dicided by admin and descendent
    }
    set_roles(role) {
        // get previleges from privilegs json and set it 
        // this is dicided by admin and descendent
    }
    set_previleges(previleges, type) {
        // this is created by the progrmer of the softwere
        // this has no acces to admin and descendents
        // only programer place
        /*
        =============================================================
        preveleges can be set inside the progrme and assigned here
        rather  then writing in JSON
        ======================================================
        */
    }
}
exports.UserGroupRole = UserGroupRole;
//# sourceMappingURL=users.js.map