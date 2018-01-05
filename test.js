var curUserMod = require("./index");

var curUser = new curUserMod.UserGroupRole();


console.log(curUser.get_user_privileges("umeshbilagi"));
 
curUser.get_user_privileges("umeshbilagi")
// curUser.insret_user("Arunkumar ", "doctor");

curUser.insert_role("receptionist", {"alter" : false});












