export class AuthLoginInfo {
    user_name: string;
    password: string;

    constructor(username: string, password: string) {
        this.user_name = username;
        this.password = password;
    }
}
