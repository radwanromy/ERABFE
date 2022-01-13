import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: any) {
    window.sessionStorage.removeItem(TOKEN_KEY );
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY );
  }

  public saveUsername(username: any) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: any[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): any[] {
    this.roles = [];

    // if (sessionStorage.getItem(AUTHORITIES_KEY)) {
    //   JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach((authority: any) => {
    //   // JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach((authority: any) => {
    //     this.roles.push(authority);
    //   });
    // }

    return this.roles;
  }
}
