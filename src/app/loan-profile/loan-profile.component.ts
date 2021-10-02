import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-profile',
  templateUrl: './loan-profile.component.html',
  styleUrls: ['./loan-profile.component.css']
})
export class LoanProfileComponent implements OnInit {

  appstatus = "Pending"
  apprejstatus = "Rejected"
  loanHistory !: Array<any>  
  historyLength !: number
  
  pendinglist !: Array<any>
  pendingLength !: number

  rejectedlist !: Array<any>
  rejectedLength !: number

 /*  completedinstallments!:any
  currentdate!:any */
  constructor( public HistoryService : LoanService) { }

  ngOnInit(): void {
    console.log("Approved");
    this.HistoryService.getApprovedHistory(sessionStorage.getItem('Email')).subscribe((data) =>{
      this.loanHistory =data;
    console.log(data)
    this.historyLength = data.length;
    console.log(data.length)
   /*  this.currentdate = new Date()
    console.log(this.currentdate)
    this.completedinstallments=this.currentdate.valueOf()-data[0].loan_start_date.valueOf()
    console.log(this.completedinstallments) */
    
    })  

    console.log("Pending");
    this.HistoryService.getPendingHistory(sessionStorage.getItem('Email')).subscribe((data) =>{
      this.pendinglist =data;
    console.log(data)
    this.pendingLength = data.length;
    console.log(data.length)
    })  

    console.log("Rejected");
    this.HistoryService.getRejectedHistory(sessionStorage.getItem('Email')).subscribe((data) =>{
      this.rejectedlist =data;
    console.log(data)
    this.rejectedLength = data.length;
    console.log(data.length)
    }) 
  }

}
