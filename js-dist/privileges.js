"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var access = require("./access");
var util_1 = require("util");
var Privileges = /** @class */ (function (_super) {
    __extends(Privileges, _super);
    function Privileges(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    Privileges.prototype.get_all_prvileges = function () {
        // this return the array of all privileges and defualt value without discription
        var curTable = this.get_privilege_table();
        var retunPrivileges = [];
        for (var index = 1; index < curTable.length; index++) {
            retunPrivileges[index - 1] = [curTable[index][0], curTable[index][2]];
        }
        return retunPrivileges;
    };
    Privileges.prototype.validate_single_privilege = function (privilege) {
        //returns the index at 0 with table row as array at 1
        // else it retrns false clearing for new insert
        if (util_1.isUndefined(privilege) || privilege == "") {
            throw ("Privilege can be empty");
        }
        var curTable = this.get_privilege_table();
        for (var index = 0; index < curTable.length; index++) {
            if (curTable[index][0] == privilege) {
                return [index, curTable[index]]; //returns the index at 0 with table row as array at 1
            }
        }
        return false; // this suggest this privilege is not found 
    };
    Privileges.prototype.privilege_insert = function (curPrivilege, curDescription, curDefualt) {
        if (util_1.isUndefined(curPrivilege) || curPrivilege == "") {
            throw ("privilege field is  compulsory");
        }
        if (util_1.isUndefined(curDescription) || curDescription == "") {
            throw ("description field is  compulsory");
        }
        if ((curDefualt == true) || (curDefualt == false)) {
            // pass 
        }
        else {
            if (util_1.isUndefined(curDefualt) || curDefualt != "") {
                throw ("defualt field is  compulsory");
            }
        }
        // insert one row
        var checkInsert = this.validate_single_privilege(curPrivilege);
        if (checkInsert == false) {
            // false suggest this privilege is not found in table
            _super.prototype.privilege_insert.call(this, curPrivilege, curDescription, curDefualt);
        }
    };
    Privileges.prototype.privilege_update = function (newPrivilege, newDescription, newDefualt, oldPrivalge) {
        //update one privalage
        // write code of validation
        if (util_1.isUndefined(newPrivilege) || newPrivilege === "") {
            throw ("newPrivilege field is compulsory");
        }
        if (util_1.isUndefined(newDescription) || newDescription === "") {
            throw ("newDescription field is compulsory");
        }
        if (util_1.isUndefined(newDefualt) || newDefualt === "") {
            throw ("newDefualt field is compulsory");
        }
        if (util_1.isUndefined(oldPrivalge) || oldPrivalge === "") {
            throw ("oldPrivalge field is compulsory");
        }
        var checkUpdate = this.validate_single_privilege(newPrivilege);
        if ((checkUpdate != false && newPrivilege == oldPrivalge) || (newPrivilege != oldPrivalge)) {
            _super.prototype.privilege_update.call(this, newPrivilege, newDescription, newDefualt, oldPrivalge);
        }
        else {
            throw (newPrivilege + " invalid duplicate new privilege");
        }
        //code to update roles.json table i.e replace oldPrvivlege by newPrivilege  
        var privilegeRoles = this.cascade_update_privileges_of_roles_table_by_privilege_table_update(newPrivilege, oldPrivalge);
        //push this curTable to role.json file in one short.
        this.roles_full_table_update(privilegeRoles);
    };
    Privileges.prototype.cascade_update_privileges_of_roles_table_by_privilege_table_update = function (newPrivilege, oldPrvivlege) {
        // this update the role table privileges in case of change in privileges names by privileges.json update
        // similer casacading effect
        if (util_1.isUndefined(newPrivilege) || newPrivilege === "") {
            throw ("newPrivileges can not be empty");
        }
        if (util_1.isUndefined(oldPrvivlege) || oldPrvivlege === "") {
            throw ("oldPrivileges can not be empty");
        }
        var curTable = this.get_roles_table();
        for (var index = 1; index < curTable.length; index++) {
            for (var i = 0; i < curTable[index][1].length; i++) {
                if (curTable[index][1][i][0] == oldPrvivlege) {
                    curTable[index][1][i][0] = newPrivilege;
                }
            }
        }
        return curTable;
    };
    Privileges.prototype.cascade_delete_prevent_privilege_table_by_role_table = function (privilege) {
        // this prevents delete of privilege  privilegs.json in case the privilege is used in roles.json 
        if (util_1.isUndefined(privilege) || privilege === "") {
            throw ("oldPrivileges can not be empty");
        }
        var curTable = this.get_roles_table();
        for (var index = 1; index < curTable.length; index++) {
            for (var i = 0; i < curTable[index][1].length; i++) {
                if (curTable[index][1][i][0] == privilege) {
                    throw (privilege + " is used in roles.json not allowed");
                }
            }
        }
        return true;
    };
    Privileges.prototype.privilege_delete = function (privilege) {
        // deletes one privilege
        // write code of validation
        // cascade prevent delte in case privilege is used in roles.json table
        var deletePrvilege = this.cascade_delete_prevent_privilege_table_by_role_table(privilege);
        if (util_1.isUndefined(privilege) || privilege == "") {
            throw ("Privilege name not given");
        }
        _super.prototype.privilege_delete.call(this, privilege);
    };
    return Privileges;
}(access.Access));
exports.Privileges = Privileges;
