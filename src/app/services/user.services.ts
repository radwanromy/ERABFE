import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:9099/api/auth/user';
  private pmUrl = 'http://localhost:9099/api/auth/pm';
  private adminUrl = 'http://localhost:9099/api/auth/admin';
  
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  postEmployee(data: any){
    return this.http.post<any>("http://localhost:9099/api/posts/", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getPosts(){
    console.log("inside get emp sevice")
     console.log(this.http.get<any>("http://localhost:9099/api/posts/"));
    return this.http.get<any>("http://localhost:9099/api/posts/")
    .pipe(map((res: any) => {
      console.log("res",res)
      return res;
    }))
  }

  updateEmployee(data: any, id: number){
    return this.http.put<any>("http://localhost:9099/api/posts/"+id, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteEmployee(id: number){
    return this.http.delete<any>("http://localhost:8088/api/posts/"+id)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getByIdRelease(id : number){
    return this.http.get("http://localhost:9099/api/posts/"+id);   
  }


}
