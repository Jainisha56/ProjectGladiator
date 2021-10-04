import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from, Observable } from 'rxjs'; 
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { Bankdetails } from './classes/bankdetails';
import { Employmentdetails } from './classes/employmentdetails';
import { LoanApplications } from './classes/LoanApplications';
import { Loanoffers } from './classes/loanoffers';
import { LoanProfile } from './classes/LoanProfile';
import { user } from './classes/user';
import { Vehicles } from './classes/vehicles';

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
  
  public UserVehicleType : any
  
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

  getVehicles(): Observable<Vehicles[]> {
    return this.httpClient.get<Vehicles[]>(this.apiServer + '/VehicleDetails/')
  }

  getVehicleByEmail(email:string): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/VehicleDetails/vehicle/' + email)
   }

  addVehicles(email:any ,vehicle: any): Observable<Vehicles> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.post<Vehicles>(this.apiServer + '/VehicleDetails/email/'+ email, JSON.stringify(vehicle), this.httpOptions)
  }

  addLoanApplication(loanapp:any): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/LoanApplications/Addloan/', JSON.stringify(loanapp), this.httpOptions)
  }

  bankdetails(details : any, Email : any): Observable<Bankdetails> {
    Email = sessionStorage.getItem('Email');
    console.log("hi")
    return this.httpClient.post<Bankdetails>(this.apiServer + '/BankDetails/bankdetails/'+Email, JSON.stringify(details), this.httpOptions)
  } 

  loanconfirmmail(vname:any,details : any): Observable<any> {
    
    console.log("hi")
    return this.httpClient.post<any>(this.apiServer + '/LoanApplications/loanconfirmation/'+vname, JSON.stringify(details), this.httpOptions)
  }

  employmentdetails(details : any, Email : any) : Observable<Employmentdetails>
  {
    Email = sessionStorage.getItem('Email');
    console.log("hi")
    return this.httpClient.post<Employmentdetails>(this.apiServer + '/EmploymentDetails/employmentdetails/'+Email, JSON.stringify(details), this.httpOptions)
  }

   /*  addLoanApplication(email:any ,application: any): Observable<LoanApplications> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.post<LoanApplications>(this.apiServer + '/LoanApplications/email/'+ email, JSON.stringify(application), this.httpOptions)
  } */

  sendacceptancemail(id: number ): Observable<LoanApplications> {
    return this.httpClient.post<LoanApplications>(this.apiServer + '/LoanApplications/Acceptmail/' + id , this.httpOptions)
  }

  sendrejectedmail(id: number ): Observable<LoanApplications> {
    return this.httpClient.post<LoanApplications>(this.apiServer + '/LoanApplications/Rejectmail/' + id , this.httpOptions)
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






  loan1 : Loanoffers = {
    loanid : 1,
    loansname: 'New Car Loan',
    loanvehicle : 'four wheeler',
    loanamount: 1500000,
    loanrate: 13,
    loantenuremonths: 48,
    loanemiamount: Math.floor(this.calculateEmi(1500000, 13, 48)),
    processingfee: 2599,
  }
  
  loan2 : Loanoffers = {
    loanid : 2,
    loansname: 'New Bike Loan',
    loanvehicle : 'two wheeler',
    loanamount: 150000,
    loanrate: 14,
    loantenuremonths: 36,
    loanemiamount: Math.floor(this.calculateEmi(300000, 14 , 36)) ,
    processingfee: 999,
    
  }

  loan3 : Loanoffers = {
    loanid : 3,
    loansname: 'Smart Buy Back Car Loan',
    loanvehicle : 'four wheeler',
    loanamount: 2500000,
    loanrate: 11,
    loantenuremonths: 60,
    loanemiamount: Math.floor(this.calculateEmi(2500000, 11 , 60)) ,
    processingfee: 3999,
  }

  loan4 : Loanoffers = {
    loanid : 4,
    loansname: 'Smart Buy Back Scooter Loan',
    loanvehicle : 'two wheeler',
    loanamount: 100000,
    loanrate: 12,
    loantenuremonths: 24,
    loanemiamount: Math.floor(this.calculateEmi(100000, 12 , 24)) ,
    processingfee: 899,
  }

  loan5 : Loanoffers = {
    loanid : 5,
    loansname: 'Business Vehicle Four Wheeler Loan',
    loanvehicle : 'four wheeler',
    loanamount: 1000000,
    loanrate: 15,
    loantenuremonths: 48,
    loanemiamount: Math.floor(this.calculateEmi(1000000, 15 , 48)) ,
    processingfee: 1199, 
  }
  
  loan6 : Loanoffers = {
    loanid : 6,
    loansname: 'Business Vehicle Two Wheeler Loan',
    loanvehicle : 'two wheeler',
    loanamount: 50000,
    loanrate: 13,
    loantenuremonths: 12,
    loanemiamount: Math.floor(this.calculateEmi(50000, 13 , 12)) ,
    processingfee: 999,
    
  }

  AllLoanOffers: Loanoffers[] = [
   this.loan1,
    this.loan2,
    this.loan3,
    this.loan4,
    this.loan5,
    this.loan6
  ];
 
TwoWheelerOffers : Loanoffers[]=[this.loan2, this.loan4, this.loan6]

FourWheelerOffers : Loanoffers[] = [this.loan1, this.loan3, this.loan5]


rate :any
calculateEmi(p : any , r : any, n : any)
{
  this.rate = r/100/12
  return (p*this.rate* (Math.pow((1+this.rate), n))) / (Math.pow((1+this.rate),n-1) ) 
}

}
