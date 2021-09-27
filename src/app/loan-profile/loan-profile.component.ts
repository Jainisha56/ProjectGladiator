import { Component, OnInit } from '@angular/core';
import { LoanProfile } from '../loan-profile';

@Component({
  selector: 'app-loan-profile',
  templateUrl: './loan-profile.component.html',
  styleUrls: ['./loan-profile.component.css']
})
export class LoanProfileComponent implements OnInit {

  loanHistory : LoanProfile[] =[
    {loanID:12 , VehicleName:"TVS Jupiter" , TotalAmount :90000 ,TotalInstallments:9 , CompletedInstallments : 3 ,RemainingAmount:60000,EMI:10000, LoanStartDate : new Date(2021/6/23), LoanEndDate:new Date(2021/6/23)}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
