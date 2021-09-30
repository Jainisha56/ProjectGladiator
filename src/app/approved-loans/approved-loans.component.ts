import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.component.html',
  styleUrls: ['./approved-loans.component.css']
})
export class ApprovedLoansComponent implements OnInit {

  day = new Date()
  ApprovedList !: Array<any>  
  constructor( public ApprovedService : LoanService) { }

  ngOnInit(): void {
    console.log("Approved List");
    this.ApprovedService.getApprovedList().subscribe((data) =>{
      this.ApprovedList =data;
    console.log(data)
    })  
  }
  //date  = datePipe.transform('2019-04-13T00:00:00', 'yyyy-MM-dd')
}
