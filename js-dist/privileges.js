"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access = require("./access");
const util_1 = require("util");
class Privileges extends access.Access {
    constructor(dbPath = "./json") {
        super(dbPath);
    }
    get_all_prvileges() {
        // this return the array of all privileges and defualt value without discription
        let curTable = this.get_privilege_table();
        let retunPrivileges = [];
        for (let index = 1; index < curTable.length; index++) {
            retunPrivileges[index - 1] = [curTable[index][0], curTable[index][2]];
        }
        return retunPrivileges;
    }
    validate_single_privilege(privilege) {
        //returns the index at 0 with table row as array at 1
        // else it retrns false clearing for new insert
        if (util_1.isUndefined(privilege) || privilege == "") {
            throw new Error("Privilege can be empty");
        }
        let curTable = this.get_privilege_table();
        for (let index = 0; index < curTable.length; index++) {
            if (curTable[index][0] == privilege) {
                return [index, curTable[index]]; //returns the index at 0 with table row as array at 1
            }
        }
        return false; // this suggest this privilege is not found 
    }
    privilege_insert(curPrivilege, curDescription, curDefualt) {
        if (util_1.isUndefined(curPrivilege) || curPrivilege == "") {
            throw new Error("privilege field is  compulsory");
        }
        if (util_1.isUndefined(curDescription) || curDescription == "") {
            throw new Error("description field is  compulsory");
        }
        if ((curDefualt == true) || (curDefualt == false)) {
            // pass 
        }
        else {
            if (util_1.isUndefined(curDefualt) || curDefualt != "") {
                throw new Error("defualt field is  compulsory");
            }
        }
        // insert one row
        let checkInsert = this.validate_single_privilege(curPrivilege);
        if (checkInsert == false) {
            // false suggest this privilege is not found in table
            super.privilege_insert(curPrivilege, curDescription, curDefualt);
        }
        else {
            throw new Error(curPrivilege + " invalid duplicate privilege");
        }
    }
    privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge) {
        //update one privalage
        // write code of validation
        if (util_1.isUndefined(newPrivilege) || newPrivilege === "") {
            throw new Error("newPrivilege field is compulsory");
        }
        if (util_1.isUndefined(newDescription) || newDescription === "") {
            throw new Error("newDescription field is compulsory");
        }
        if (util_1.isUndefined(newDefualt) || newDefualt === "") {
            throw new Error("newDefualt field is compulsory");
        }
        if (util_1.isUndefined(oldPrivalge) || oldPrivalge === "") {
            throw new Error("oldPrivalge field is compulsory");
        }
        let checkUpdate = this.validate_single_privilege(newPrivilege);
        if ((checkUpdate != false && newPrivilege == oldPrivalge) || (newPrivilege != oldPrivalge)) {
            super.privilege_update(newPrivilege, newDescription, newDefualt, oldPrivalge);
        }
        else {
            throw new Error(newPrivilege + " invalid duplicate new privilege");
        }
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
