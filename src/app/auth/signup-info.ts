export class SignUpInfo {
    name: any;
    username: any;
    email: any;
    roles: any[];
    password: any;

    constructor(name: any, username: any, email: any, password: any) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles= ['user'];
    }
}
