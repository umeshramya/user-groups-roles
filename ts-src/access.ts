import * as fs from "fs";
import * as path from "path";

export class Access{
// // below code is commentted beciase it has absulte path to inside node module
//     protected privileges:any  = fs.readFileSync(path.join(__dirname, "json/privileges.json"));    
//     protected users:any = fs.readFileSync(path.join(__dirname, "json/users.json"));
//     protected roles:any = fs.readFileSync(path.join(__dirname, "json/roles.json"));


// unlike above code below code has reletive path in to conjumer project
    protected privileges:any  = fs.readFileSync("json/privileges.json");    
    protected users:any = fs.readFileSync("./json/users.json");
    protected roles:any = fs.readFileSync("./json/roles.json");
    

    constructor (){
        this.privileges = JSON.parse(this.privileges);
        this.users      = JSON.parse(this.users);
        this.roles      = JSON.parse(this.roles);
    }
}