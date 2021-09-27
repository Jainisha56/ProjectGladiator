import { Component, OnInit } from '@angular/core';
import { Rejected } from '../rejected';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.css']
})
export class RejectedListComponent implements OnInit {

  RejectedList : Rejected[] =[
    {UserName:"Aasim" , AnnualSalary:150000 , VehicleName:"Maruthi baleno" ,Amount:300000 ,interest:13,duration:24},
    {UserName:"BP" , AnnualSalary:50000 ,VehicleName:"TVS Jupiter",Amount:45000 ,interest:14,duration:36},
    {UserName:"Harsha" , AnnualSalary:200000 ,VehicleName:"Toyoto Glanza" ,Amount:400000 ,interest:12,duration:24},
    {UserName:"Kunal" , AnnualSalary:150000 ,VehicleName:"Maruthi baleno" ,Amount:350000 ,interest:13,duration:48}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
