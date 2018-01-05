var curUserMod = require("./index");

var curUser = new curUserMod.UserGroupRole();
// displaying all users with roles
console.log("\n\ndisplaying all users with roles");
console.log( curUser.read_users());

// displaying role of specified user
console.log("\n\ndisplaying role of specified user ie 'umeshbilagi'");
console.log(curUser.get_user_role("umeshbilagi"));


// displaying privileges of single user 
console.log("\n\ndisplaying privileges of sinlgle user ie 'umeshbilagi'");
console.log(curUser.get_user_privileges("umeshbilagi"));


 
// inserting new user with a role
console.log("\n\nNew user is being inserted")
curUser.insret_user("Varda ", "doctor");

// var priv = curUser.read_privileges();
// console.log(priv);












