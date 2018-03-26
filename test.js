var user = require("./index");


user.createNewPrivileges(["/article", "POST"], "article", false);
user.createNewPrivileges(["/article", "GET"], "access article", false);
user.createNewPrivileges(["/article", "PUT"], "edit article", false);
user.createNewPrivileges(["/article", "DELETE"], "delete article", false);
user.createNewPrivileges('voucher_create',"creates the voucher", false);

user.createNewRole("admin");
user.createNewRole("editor");
user.createNewRole("author");
user.createNewRole("contributor");
user.createNewRole("subscriber");

// console.log(user.getAllPrivileges());
// console.log(user.getAllRoles());
user.addPrivilegeToRole("admin", ["/article", "POST"], true);
user.addPrivilegeToRole("admin", ["/article", "GET"], true);
user.addPrivilegeToRole("admin", ["/article", "PUT"], true);
user.addPrivilegeToRole("admin", ["/article", "DELETE"], true);
user.addPrivilegeToRole('admin', 'voucher_create', true);

user.addPrivilegeToRole("editor", ["/article", "POST"], true);
user.addPrivilegeToRole("editor", ["/article", "GET"], true);
user.addPrivilegeToRole("editor", ["/article", "PUT"], true);
user.addPrivilegeToRole("editor", ["/article", "DELETE"], true);

user.addPrivilegeToRole("author", ["/article", "POST"], true);
user.addPrivilegeToRole("author", ["/article", "GET"], true);
user.addPrivilegeToRole("author", ["/article", "PUT"], true);
user.addPrivilegeToRole("author", ["/article", "DELETE"], false);


user.addPrivilegeToRole("contributor", ["/article", "POST"], true);
user.addPrivilegeToRole("contributor", ["/article", "GET"], true);
user.addPrivilegeToRole("contributor", ["/article", "PUT"], false);
user.addPrivilegeToRole("contributor", ["/article", "DELETE"], false);

user.addPrivilegeToRole("subscriber", ["/article", "POST"], false);
user.addPrivilegeToRole("subscriber", ["/article", "GET"], true);
user.addPrivilegeToRole("subscriber", ["/article", "PUT"], false);
user.addPrivilegeToRole("subscriber", ["/article", "DELETE"], false);

console.log(user.getRolePrivileges("admin"));
