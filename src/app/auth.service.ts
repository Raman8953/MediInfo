import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'my-auth-token'
  })
};

const apps = 'http://localhost:4000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }
  // tslint:disable-next-line: whitespace
  id: any = this.cookieService.get('id');
  // mid: any = this.cookieService.get('mid');
  setHeader() {
    httpOptions.headers =
    httpOptions.headers.set('Authorization', this.cookieService.get('Authorization'));
  }

  // tslint:disable-next-line: member-ordering

  postUser(data: any): Observable<any> {
    return this.http.post<any>(`${apps}/auth/register`, data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${apps}/auth/login`, data);
  }
  getUser(): Observable<any> {
    this.setHeader();
    return this.http.get(`${apps}/users`, httpOptions);
  }
  getUsers(): Observable<any> {
    this.setHeader();
    return this.http.get(`${apps}/user`, httpOptions);
  }
  postAdmin(data: any): Observable<any> {
    return this.http.post<any>(`${apps}/auth/aregister`, data);
  }

  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>(`${apps}/auth/alogin`, data);
  }
  getAdmin(): Observable<any> {
    this.setHeader();
    return this.http.get(`${apps}/admin`, httpOptions);
  }

  deletemedicine(mid: any): Observable<any>{
    this.setHeader();
    // tslint:disable-next-line: whitespace
    return this.http.delete(`${apps}/medicine/delete/`+mid, httpOptions);
  }
  postmedicine(myApp: any): Observable<any>{
    this.setHeader();
    // tslint:disable-next-line: whitespace
    return this.http.post(`${apps}/medicine/`+this.id, myApp,httpOptions);
  }
  update_user(myApp: any): Observable<any>{
    this.setHeader();
    return this.http.put(`${apps}/user/update/`, myApp, httpOptions);
  }
  update_admin(myApp: any): Observable<any>{
    this.setHeader();
    return this.http.put(`${apps}/admin/update`, myApp, httpOptions);
  }
  getmedicine(): Observable<any>{
    this.setHeader();
    // tslint:disable-next-line: whitespace
    return this.http.get(`${apps}/medicines/`+this.id, httpOptions);
  }
  getmedicines(): Observable<any>{
    this.setHeader();
    // tslint:disable-next-line: whitespace
    return this.http.get(`${apps}/medicines`, httpOptions);
  }
  get_medicine_by_id(mid: any): Observable<any>{
    this.setHeader();
    // tslint:disable-next-line: whitespace
    return this.http.get(`${apps}/`+mid, httpOptions);
  }
  update_medicine(mid: any, data: any): Observable<any> {
    console.log(data);
    this.setHeader();
    return this.http.put(`${apps}/medicine/update/`+mid, data, httpOptions);
  }
  get_feed(): Observable<any> {
     this.setHeader();
     return this.http.get(`${apps}`, httpOptions);
  }
  post_feed(data: any): Observable<any> {
    this.setHeader();
    return this.http.post(`${apps}/feedback`, data, httpOptions);
  }
  forgot(data: any): Observable<any>{
    return this.http.post(`${apps}/forgot`, data);
  }
  checkotp(data: any): Observable<any>{
    return this.http.post(`${apps}/checkotp`, data);
  }
  chgpass(data: any): Observable<any>{
    return this.http.post(`${apps}/chgpass`, data);
  }
  aforgot(data: any): Observable<any>{
    return this.http.post(`${apps}/aforgot`, data);
  }
  acheckotp(data: any): Observable<any>{
    return this.http.post(`${apps}/acheckotp`, data);
  }
  achgpass(data: any): Observable<any>{
    return this.http.post(`${apps}/achgpass`, data);
  }
}
