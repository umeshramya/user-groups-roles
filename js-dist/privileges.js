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
var Privileges = /** @class */ (function (_super) {
    __extends(Privileges, _super);
    function Privileges(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    Privileges.prototype.privilege_insert = function (privilege, description, defualt) {
        // insert one row
        // write code of validation
        if ((privilege == "") || (description == "") || (defualt == "")) {
            throw new Error("all fields are compulsory");
        }
        _super.prototype.privilege_insert.call(this, privilege, description, defualt);
    };
    Privileges.prototype.privilege_update = function (newPrivilege, newDescription, newDefualt, oldPrivalge) {
        //update one privalage
        // write code of validation
        if ((newPrivilege == "") || (newDescription == "") || (newDefualt == "") || (oldPrivalge == "")) {
            throw new Error("all fields are compulsory");
        }
        _super.prototype.privilege_update.call(this, newPrivilege, newDescription, newDefualt, oldPrivalge);
    };
    Privileges.prototype.privilege_delete = function (privilege) {
        // deletes one privilege
        // write code of validation
        if (privilege == "") {
            throw new Error("Privilege name not given");
        }
        _super.prototype.privilege_delete.call(this, privilege);
    };
    return Privileges;
}(access.Access));
exports.Privileges = Privileges;
//# sourceMappingURL=privileges.js.map