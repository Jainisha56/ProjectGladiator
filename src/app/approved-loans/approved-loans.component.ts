import { Component, OnInit } from '@angular/core';
import { Approved } from '../approved';

@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.component.html',
  styleUrls: ['./approved-loans.component.css']
})
export class ApprovedLoansComponent implements OnInit {

  ApprovedList : Approved[] =[
    {UserName:"Aasim" , AnnualSalary:150000 , VehicleName:"Maruthi baleno" ,Amount:300000 ,interest:13,duration:24,EMI:12500},
    {UserName:"BP" , AnnualSalary:50000 ,VehicleName:"TVS Jupiter",Amount:45000 ,interest:14,duration:36,EMI:2700},
    {UserName:"Harsha" , AnnualSalary:200000 ,VehicleName:"Toyoto Glanza" ,Amount:400000 ,interest:12,duration:24,EMI:12500},
    {UserName:"Kunal" , AnnualSalary:150000 ,VehicleName:"Maruthi baleno" ,Amount:350000 ,interest:13,duration:48,EMI:10500}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
