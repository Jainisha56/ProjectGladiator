import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Loanoffers } from '../classes/loanoffers';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-quotes',
  templateUrl: './loan-quotes.component.html',
  styleUrls: ['./loan-quotes.component.css']
})
export class LoanQuotesComponent implements OnInit {
  loan !: any
  id !: any
  lamount!: number
  lrate !: number
  lduration !: number
  lfee !: number
  lname !: string
  lmonthlyemi !: number

  LoanQuotesForm !: FormGroup

  constructor(public service: LoanService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      console.log(data)
      this.id = data.get('loan');
    });

    this.loan = this.service.AllLoanOffers;

    for (var i = 0; i < 6; i++) {

      if (
        this.service.AllLoanOffers[i].loanid == this.id
      ) {
        this.lname = this.service.AllLoanOffers[i].loansname
        this.lamount = this.service.AllLoanOffers[i].loanamount
        this.lrate = this.service.AllLoanOffers[i].loanrate
        this.lduration = this.service.AllLoanOffers[i].loantenuremonths
        this.lfee = this.service.AllLoanOffers[i].processingfee
        this.lmonthlyemi = this.service.calculateEmi(this.lamount, this.lrate, this.lduration)

        this.LoanQuotesForm = new FormGroup(
          {
            loanamount: new FormControl(this.lamount),
            loanrate: new FormControl(this.lrate),
            loanduration: new FormControl(this.lduration),
            loanemi: new FormControl(this.lmonthlyemi),
            loanfee: new FormControl(this.lfee),
            vehiclename: new FormControl('')
          }
        )
        this.LoanQuotesForm.controls['loanamount'].disable();
        this.LoanQuotesForm.controls['loanrate'].disable();
        this.LoanQuotesForm.controls['loanduration'].disable();
        this.LoanQuotesForm.controls['loanemi'].disable();
        this.LoanQuotesForm.controls['loanfee'].disable();
        this.LoanQuotesForm.controls['vehiclename'].disable();

      }

    }

  }
}
