import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:9090/api/auth';
  private pmUrl = 'http://localhost:9090/api/auth';
  private adminUrl = 'http://localhost:9090/api/auth';
  
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
    return this.http.post<any>("http://localhost:8088/api/posts/", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:8088/api/posts/")
    .pipe(map((res: any) => {
      return res;
    }))
  }

  updateEmployee(data: any, id: number){
    return this.http.put<any>("http://localhost:8088/api/posts/"+id, data)
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
    return this.http.get("http://localhost:8088/api/posts/"+id);   
  }


}
