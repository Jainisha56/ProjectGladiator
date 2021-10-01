import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from, Observable } from 'rxjs'; 
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { Bankdetails } from './classes/bankdetails';
import { Employmentdetails } from './classes/employmentdetails';
import { Loanoffers } from './classes/loanoffers';
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
  
  getByEmail(email:string): Observable<user> {
    return this.httpClient.get<user>(this.apiServer + '/Userdetails/email/' + email)
  }

  receiveduserStatus():Observable<boolean>
  {
    return this.subjectu.asObservable();
  }
  receivedadminStatus():Observable<boolean>
  {
    return this.subjecta.asObservable();
  }

  addVehicles(email:any ,vehicle: any): Observable<Vehicles> {
    email = sessionStorage.getItem('Email')
    return this.httpClient.post<Vehicles>(this.apiServer + '/VehicleDetails/email/'+ email, JSON.stringify(vehicle), this.httpOptions)
  }


  bankdetails(details : any, Email : any): Observable<Bankdetails> {
    Email = sessionStorage.getItem('Email');
    console.log("hi")
    return this.httpClient.post<Bankdetails>(this.apiServer + '/BankDetails/bankdetails/'+Email, JSON.stringify(details), this.httpOptions)
  } 

  employmentdetails(details : any, Email : any) : Observable<Employmentdetails>
  {
    Email = sessionStorage.getItem('Email');
    console.log("hi")
    return this.httpClient.post<Employmentdetails>(this.apiServer + '/EmploymentDetails/employmentdetails/'+Email, JSON.stringify(details), this.httpOptions)
  }


  loan1 : Loanoffers = {
    loanid : 1,
    loansname: 'New Car Loan',
    loanvehicle : 'four wheeler',
    loanamount: 1500000,
    loanrate: 3.5,
    loantenuremonths: 48,
    loanemiamount: Math.floor(this.calculateEmi(1500000, 3.5, 48)),
    processingfee: 2599,
  }
  
  loan2 : Loanoffers = {
    loanid : 2,
    loansname: 'New Bike Loan',
    loanvehicle : 'two wheeler',
    loanamount: 300000,
    loanrate: 6,
    loantenuremonths: 24,
    loanemiamount: Math.floor(this.calculateEmi(300000, 6 , 24)) ,
    processingfee: 999,
    
  }

  loan3 : Loanoffers = {
    loanid : 3,
    loansname: 'Smart Buy Back Car Loan',
    loanvehicle : 'four wheeler',
    loanamount: 2500000,
    loanrate: 8.5,
    loantenuremonths: 60,
    loanemiamount: Math.floor(this.calculateEmi(2500000, 8.5 , 5)) ,
    processingfee: 3999,
  }

  loan4 : Loanoffers = {
    loanid : 4,
    loansname: 'Smart Buy Back Scooter Loan',
    loanvehicle : 'two wheeler',
    loanamount: 150000,
    loanrate: 6.5,
    loantenuremonths: 24,
    loanemiamount: Math.floor(this.calculateEmi(150000, 6.5 , 24)) ,
    processingfee: 899,
  }

  loan5 : Loanoffers = {
    loanid : 5,
    loansname: 'Business Vehicle Four Wheeler Loan',
    loanvehicle : 'four wheeler',
    loanamount: 1000000,
    loanrate: 5,
    loantenuremonths: 48,
    loanemiamount: Math.floor(this.calculateEmi(1000000, 5 , 48)) ,
    processingfee: 1199, 
  }
  
  loan6 : Loanoffers = {
    loanid : 6,
    loansname: 'Business Vehicle Two Wheeler Loan',
    loanvehicle : 'two wheeler',
    loanamount: 200000,
    loanrate: 3,
    loantenuremonths: 48,
    loanemiamount: Math.floor(this.calculateEmi(200000, 5 , 48)) ,
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
