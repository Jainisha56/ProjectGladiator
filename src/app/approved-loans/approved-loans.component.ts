import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.component.html',
  styleUrls: ['./approved-loans.component.css']
})
export class ApprovedLoansComponent implements OnInit {

  day = new Date()
  ApprovedList !: Array<any>  
  approvelistlen!:number;
  constructor( public ApprovedService : LoanService) { }

  ngOnInit(): void {
    console.log("Approved List");
    this.ApprovedService.getApprovedList().subscribe((data) =>{
      this.ApprovedList =data;
      this.approvelistlen=data.length;
    console.log(data)
    })  
  }
}
