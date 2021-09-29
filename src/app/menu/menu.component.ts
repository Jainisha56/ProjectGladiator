import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  messageuser:boolean=false;
  messageadmin:boolean=false;
  checkuser!:any
  Home = ['/', { outlets: {
    'outlet-main': ['Home']
    // 'outlet-b': ['page-green'],
    // 'outlet-c': ['page-blue']
  }}];
  AboutUs = ['/', { outlets: {
    'outlet-main': ['About Us']
  }}];
  EMICalculator= ['/', { outlets: {
    'outlet-main': ['EMI Calculator']
  }}];
  Applyloan= ['/', { outlets: {
    'outlet-main': ['Apply Loan']
  }}];
  Register= ['/', { outlets: {
    'outlet-main': ['Register']
  }}];
  Login= ['/', { outlets: {
    'outlet-main': ['Login']
  }}];


  Userdashboard= ['/', { outlets: {
    'outlet-udash': ['user-dash']
  }}];
  Userloanhistory= ['/', { outlets: {
    'outlet-udash': ['loan-history']
  }}];
  Userloansettings= ['/', { outlets: {
    'outlet-udash': ['user-settings']
  }}];

  
  Admindashboard= ['/', { outlets: {
    'outlet-adash': ['admin-dash']
  }}];
  Adminvehicle= ['/', { outlets: {
    'outlet-adash': ['vehicles']
  }}];
  Adminloanapplication= ['/', { outlets: {
    'outlet-adash': ['loan-Applications']
  }}];
  Adminapprovedloan= ['/', { outlets: {
    'outlet-adash': ['approved-loans']
  }}];
  Adminrejectedloan= ['/', { outlets: {
    'outlet-adash': ['rejected-list']
  }}];





 
  constructor(private menuservice:LoanService,private router:Router) { }

  ngOnInit(): void {
    // this.checkuser = sessionStorage.getItem('Email')
    // if(this.checkuser==null)
    // {
    //   this.router.navigate(['Home']);
    // }
    this.menuservice.receiveduserStatus().subscribe((datauser)=>{
    this.messageuser=datauser;
      });
    this.menuservice.receivedadminStatus().subscribe((dataadmin)=>{
    this.messageadmin=dataadmin;
        });
  }
  logoutuser()
  {
    console.log("hi");
    sessionStorage.removeItem('Email');
    sessionStorage.clear();
    console.log(sessionStorage.getItem('Email'))
    this.menuservice.subjectu.next(false);
    //this.message=false;
    //this.ngOnInit()
    //this.router.navigateByUrl("") 
  } 
  logoutadmin()
  {
    console.log("hi2");
    sessionStorage.removeItem('AdminEmail');
    sessionStorage.clear();
    console.log(sessionStorage.getItem('AdminEmail'))
    this.menuservice.subjecta.next(false);
    //this.message=false;
    //this.ngOnInit()
    //this.router.navigateByUrl("") 
  } 

}
