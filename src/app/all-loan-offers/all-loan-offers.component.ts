import { Component, OnInit } from '@angular/core';
import { Loanoffers } from '../classes/loanoffers';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-all-loan-offers',
  templateUrl: './all-loan-offers.component.html',
  styleUrls: ['./all-loan-offers.component.css']
})
export class AllLoanOffersComponent implements OnInit {


  alloffers : Loanoffers[] = []


  constructor(public service : LoanService) { }


  ngOnInit(): void {
    this.alloffers = this.service.AllLoanOffers;
  }

}
