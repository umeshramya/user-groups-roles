var curUserMod = require("./index");

var curUser = new curUserMod.UserGroupRole();
// displaying all users 
console.log("\n\n=========  ALL USERS  ================");
console.log(curUser.read_memory_users());

// displaying all roles
console.log("\n\n=========  ALL ROLES  =================");
console.log(curUser.read_memory_roles());

// displaying all privileges
console.log("\n\n=========  ALL PRIVILEGES  =============");
console.log(curUser.read_memory_privileges());

// displaying all users with roles
console.log("\n\n=========  DISPLAYING ALL USERS WITH ROLES ===============");
console.log( curUser.read_file_users());


// displaying role of specified user
console.log("\n\n========= DISPLAYING ROLE OF SPECIFIED USER 'umeshbilagi  ==============");
console.log(curUser.get_user_role("umeshbilagi"));


// displaying privileges of single user 
console.log("\n\n========= DISPLAYING PRIVILEGES OF SINGLE USER 'umeshbilagi'");
console.log(curUser.get_user_privileges("umeshbilagi"));


 
// inserting new user with a role
console.log("\n\n======== NEW USER IS BEING INSERTED ===========");
curUser.insert_user("Pradyu", "admin");

// var priv = curUser.read_privileges();
// console.log(priv);