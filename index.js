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
exports.__esModule = true;
var imp = require("./js-dist/users");
var UserGroupsRoles = /** @class */ (function (_super) {
    __extends(UserGroupsRoles, _super);
    function UserGroupsRoles(dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        return _super.call(this, dbPath) || this;
    }
    return UserGroupsRoles;
}(imp.Users));
exports.UserGroupsRoles = UserGroupsRoles;
