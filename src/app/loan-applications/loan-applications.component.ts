import { Component, OnInit } from '@angular/core';
import { LoanApplication } from '../loan-application';

@Component({
  selector: 'app-loan-applications',
  templateUrl: './loan-applications.component.html',
  styleUrls: ['./loan-applications.component.css']
})
export class LoanApplicationsComponent implements OnInit {

  loanApp : LoanApplication[] =
  [
    {ApplicationId:1,UserName:"Aasim" , AnnualSalary:150000 ,ExistingEMI:false, VehicleName:"Maruthi baleno" ,Amount:300000 ,interest:13,duration:24},
    {ApplicationId:2,UserName:"BP" , AnnualSalary:50000 ,ExistingEMI:true,VehicleName:"TVS Jupiter",Amount:45000 ,interest:14,duration:36},
    {ApplicationId:3,UserName:"Harsha" , AnnualSalary:200000 ,ExistingEMI:false,VehicleName:"Toyoto Glanza" ,Amount:400000 ,interest:12,duration:24},
    {ApplicationId:4,UserName:"Kunal" , AnnualSalary:150000 ,ExistingEMI:true,VehicleName:"Maruthi baleno" ,Amount:350000 ,interest:13,duration:48},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
