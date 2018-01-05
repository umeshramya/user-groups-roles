import * as fs from "fs";
import * as path from "path";

export class Access{
    //below code has reletive path in to conjumer project
    private jsonFolderPath:string;//for declaring folder name and path for json files

    private privilegesPath:string // this stores the path and filename of privileges.json
    private usersPath:string      // this holds the pith file name of users.json
    private rolesPath:string      // this hols the path and file name of roles.json


    private privileges:any;       // this holds the privileges.json data
    private users:any;            // this holds users.json data
    private roles:any;            // this holds roles.json data

    

    protected constructor (jsonFolderPath:string= "./json"){
        
        this.jsonFolderPath     = jsonFolderPath;  //asigning the folder name with path
        this.privilegesPath     = this.jsonFolderPath + "/privileges.json";
        this.usersPath          = this.jsonFolderPath + "/users.json";
        this.rolesPath          = this.jsonFolderPath + "/roles.json";
        /*
        ====================================================================
        */ 
        // code to create new folder by name json if not exist
        if (!fs.existsSync(this.jsonFolderPath )){
            fs.mkdirSync(this.jsonFolderPath );
        }

        // code to create users.json if not exist
        if(!fs.existsSync(this.usersPath)){
            var createStream = fs.createWriteStream(this.usersPath);
                createStream.end();
                fs.writeFileSync(this.usersPath, JSON.stringify({}));
        }

        // code to create roles.json if not exist
        if(!fs.existsSync(this.rolesPath)){
            var createStream = fs.createWriteStream(this.rolesPath);
                createStream.end();
                fs.writeFileSync(this.rolesPath, JSON.stringify({}));
        }
        
        // code to create privileges.json if exist
        if(!fs.existsSync(this.privilegesPath)){
            var createStream = fs.createWriteStream(this.privilegesPath);          
            createStream.end();
            fs.writeFileSync(this.privilegesPath,JSON.stringify({}));
        }

        /*
        ====================================================================
        */ 

        // read the json files an store them class wide variable
        // this.users, this.roles, this.privileges
        this.read_file_users();
        this.read_file_roles();
        this.read_file_privileges();
    }
    /*
        ============================
            Methods to read json files
        ============================
    */ 
    read_memory_users(){
        // returns the users from memory without going file
        return this.users;
    }

    read_memory_roles(){
        // returns the roles from memory without going file
        return this.roles;
    }
    read_memory_privileges(){
        // returns the privileges from memory without going file
        return this.privileges;
    }


    protected read_file_users(){
        // this read the users.json file
        this.users = fs.readFileSync(this.usersPath);     // asinging the users.json
        this.users = JSON.parse(this.users);
        return this.users
    }

    protected read_file_roles(){
        // this reads the roles.json file
        this.roles = fs.readFileSync(this.rolesPath);     // asigning the roles.json
        this.roles = JSON.parse(this.roles);
        return this.roles
    }

    protected read_file_privileges(){
        // reads the privilegs file
        this.privileges = fs.readFileSync(this.privilegesPath);  // asiging the privileges.json
        this.privileges = JSON.parse(this.privileges).privileges;
        return this.privileges
    }
        /*
            ======================================
                Methods to insert new recods
            ======================================
        */ 

    protected insert_user(users:string, role:string){
        // this writes the roles to users.json
        // check to prevent duplicate entry
        this.users[users] = role;
        fs.writeFileSync(this.usersPath, JSON.stringify(this.users));
    }

    protected  insert_role(role:string, privileges={}){
        // this writes roles to and asigned privileges to roles.json
        this.roles[role] = privileges;
        fs.writeFileSync(this.rolesPath, this.roles);
    }

    protected insert_privilege(privilege:string, value:any[]){
        // this writes privilges and value value is array of any
        // check existing privilage
        this.privileges[privilege] = value;
        fs.writeFileSync(this.privilegesPath, this.privileges);
    }


    /*
        ============================================================
            Methods to Update (modifying) existing records (modifying)
        ==============================================================
    */ 




    /*
        ==============================================
            Methods to delete records
        ==============================================
    */ 
}