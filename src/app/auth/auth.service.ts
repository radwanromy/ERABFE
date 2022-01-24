import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { PostInfo } from './post-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:9099/api/auth/signin';
  private signupUrl = 'http://localhost:9099/api/auth/signup';
  private postUrl = 'http://localhost:9099/api/posts/add';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
     let cred = {
    usernameOrEmail: credentials.usernameOrEmail, 
    password: credentials.password
};
    console.log(" credentials:",cred);
    return this.http.post<any>(this.loginUrl, cred, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<any> {
    return this.http.post<any>(this.signupUrl, info, httpOptions);
  }

  post(info: PostInfo): Observable<any> {
    return this.http.post<any>(this.postUrl, info,httpOptions);
  }
}
