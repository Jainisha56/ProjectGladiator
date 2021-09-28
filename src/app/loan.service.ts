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

  public subject=new Subject<boolean>();
  
  register(registeruser: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/register/', JSON.stringify(registeruser), this.httpOptions)
  }

  login(loginuser: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/login/', JSON.stringify(loginuser), this.httpOptions)
  }
  forgotpassword(forgotpwd: any): Observable<user> {
    return this.httpClient.post<user>(this.apiServer + '/Userdetails/forgotpassword/', JSON.stringify(forgotpwd), this.httpOptions)
  }

  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
}
