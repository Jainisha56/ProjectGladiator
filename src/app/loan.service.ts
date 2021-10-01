import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from, Observable } from 'rxjs'; 
import { user } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiServer ="http://localhost:63751/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public subjectu=new Subject<boolean>();
  public subjecta=new Subject<boolean>();
  
  
  register(registeruser: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/register/', JSON.stringify(registeruser), this.httpOptions)
  }

  login(loginuser: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/login/', JSON.stringify(loginuser), this.httpOptions)
  }

  alogin(loginadmin: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/adminlogin/', JSON.stringify(loginadmin), this.httpOptions)
  }

  forgotpassword(forgotpwd: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/forgotpassword/', JSON.stringify(forgotpwd), this.httpOptions)
  }

  changepwd(Email:string,Password:string): Observable<user> {
    console.log("hi")
    return this.httpClient.put<user>(this.apiServer + '/Userdetails/changepwd/'+Email,JSON.stringify(Password), this.httpOptions)
  }
  getByEmail(email:string): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/Userdetails/email/' + email)
   }
  updateDetails(id:number,userprofile:any): Observable<user> {
    return this.httpClient.put<user>(this.apiServer + '/Userdetails/updateUser/' + id, JSON.stringify(userprofile), this.httpOptions)
  
  }


  receiveduserStatus():Observable<boolean>
  {
    return this.subjectu.asObservable();
  }
  receivedadminStatus():Observable<boolean>
  {
    return this.subjecta.asObservable();
  }
}
