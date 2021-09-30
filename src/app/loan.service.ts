import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from, Observable } from 'rxjs'; 
import { LoanApplications } from './classes/LoanApplications';
import { LoanProfile } from './classes/LoanProfile';
import { user } from './classes/user';
import { Vehicles } from './classes/Vehicles';

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
  getByEmail(email:string): Observable<user> {
    return this.httpClient.get<user>(this.apiServer + '/Userdetails/email/' + email)
  }
  getVehicles(): Observable<Vehicles[]> {
    return this.httpClient.get<Vehicles[]>(this.apiServer + '/VehicleDetails/')
  }
  addVehicles(email:any ,vehicle: any): Observable<Vehicles> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.post<Vehicles>(this.apiServer + '/VehicleDetails/email/'+ email, JSON.stringify(vehicle), this.httpOptions)
  }
  addLoanApplication(email:any ,application: any): Observable<LoanApplications> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.post<LoanApplications>(this.apiServer + '/LoanApplications/email/'+ email, JSON.stringify(application), this.httpOptions)
  }
  getRejectedList(): Observable<LoanApplications[]> {
    return this.httpClient.get<LoanApplications[]>(this.apiServer + '/LoanApplications/rejected')
  }

  getPendingAppList(): Observable<LoanApplications[]> {
    return this.httpClient.get<LoanApplications[]>(this.apiServer + '/LoanApplications/pending')
  }

  getApprovedList(): Observable<LoanProfile[]> {
    return this.httpClient.get<LoanProfile[]>(this.apiServer + '/LoanProfiles/approved')
  }

  getApprovedHistory(email:any): Observable<LoanProfile[]> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.get<LoanProfile[]>(this.apiServer + '/LoanProfiles/email/'+ email)
  }

  getPendingHistory(email:any): Observable<LoanApplications[]> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.get<LoanApplications[]>(this.apiServer + '/LoanApplications/Pendingemail/'+ email)
  }

  getRejectedHistory(email:any): Observable<LoanApplications[]> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.get<LoanApplications[]>(this.apiServer + '/LoanApplications/Rejectedemail/'+ email)
  }

  getApplicationDetails(id:number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/LoanApplications/accept/' + id)
  }
  AcceptedLoan(loan: any): Observable<LoanProfile> {
    return this.httpClient.post<LoanProfile>(this.apiServer + '/LoanProfiles', JSON.stringify(loan), this.httpOptions)
  }
  AcceptApplication(id: number ): Observable<LoanApplications> {
    console.log("hi")
    return this.httpClient.put<LoanApplications>(this.apiServer + '/LoanApplications/AcceptApp/' + id , this.httpOptions)
  }
  RejectApplication(id: number ): Observable<LoanApplications> {
    console.log("hi")
    return this.httpClient.put<LoanApplications>(this.apiServer + '/LoanApplications/RejectApp/' + id , this.httpOptions)
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
