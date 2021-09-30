import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanApplications } from '../classes/LoanApplications';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-quotes',
  templateUrl: './loan-quotes.component.html',
  styleUrls: ['./loan-quotes.component.css']
})
export class LoanQuotesComponent implements OnInit {

  loanApplication !: LoanApplications

  applyLoan:FormGroup = new FormGroup(
    {
Amount:new FormControl(''),
Interest:new FormControl(''),
Duration:new FormControl(''),
emi:new FormControl('')
   }
  )
  constructor(public applyservice : LoanService) { }

  ngOnInit(): void {
  }

  ApplicationDetails()
  {
    this.loanApplication =this.applyLoan.value
    console.log(this.loanApplication)
    this.applyservice.addLoanApplication( sessionStorage.getItem('Email') ,this.applyLoan.value).subscribe(res => {
      console.log(res)
      console.log('Vehicle details added!')
      // this.route.navigateByUrl('/Loan Offers')
    });
  }
  
}
