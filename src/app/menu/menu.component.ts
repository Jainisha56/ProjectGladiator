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
  logo="assets/logo.png";
  logo1="assets/logo1.png";
  logo2="assets/logo2.png";
  logo3="assets/logo3.png";
  //Home = ['/', { outlets: {
   // 'outlet-main': ['Home']
    // 'outlet-b': ['page-green'],
    // 'outlet-c': ['page-blue']
  //}}];
  // AboutUs = ['/', { outlets: {
  //   'outlet-main': ['About Us']
  // }}];
  // EMICalculator= ['/', { outlets: {
  //   'outlet-main': ['EMI Calculator']
  // }}];
  // Applyloan= ['/', { outlets: {
  //   'outlet-main': ['Apply Loan']
  // }}];
  // Register= ['/', { outlets: {
  //   'outlet-main': ['Register']
  // }}];
  // Login= ['/', { outlets: {
  //   'outlet-main': ['Login']
  // }}];

  // Forgotpass= ['/', { outlets: {
  //   'outlet-main': ['forgotpassword']
  // }}];

  // Changepass= ['/', { outlets: {
  //   'outlet-main': ['changepassword']
  // }}];


  // Userdashboard= ['/', { outlets: {
  //   'outlet-main': ['user-dash']
  // }}];
  // Userloanhistory= ['/', { outlets: {
  //   'outlet-main': ['loan-history']
  // }}];
  // Userloansettings= ['/', { outlets: {
  //   'outlet-main': ['user-settings']
  // }}];

  
  // Admindashboard= ['/', { outlets: {
  //   'outlet-main': ['admin-dash']
  // }}];
  // Adminvehicle= ['/', { outlets: {
  //   'outlet-main': ['vehicles']
  // }}];
  // Adminloanapplication= ['/', { outlets: {
  //   'outlet-main': ['loan-Applications']
  // }}];
  // Adminapprovedloan= ['/', { outlets: {
  //   'outlet-main': ['approved-loans']
  // }}];
  // Adminrejectedloan= ['/', { outlets: {
  //   'outlet-main': ['rejected-list']
  // }}];
 
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
    this.router.navigateByUrl("Home") 
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
    this.router.navigateByUrl("Home") 
  } 

}
