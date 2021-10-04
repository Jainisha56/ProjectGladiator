import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loanoffers } from '../classes/loanoffers';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['./loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  constructor(public service : LoanService, public router : Router, public route : ActivatedRoute) { }

  vhtype : any
  vhid : any
  clicked=false;

  ngOnInit(): void {

    this.route.paramMap.subscribe(data=>{console.log(data)
      this.vhtype = data.get('vhtype');
    });

    if (this.vhtype=="Two wheeler") {
      this.useroffers = this.service.TwoWheelerOffers;
      console.log(this.useroffers);
    }
    else if( this.vhtype == "Four wheeler")
    {
      this.useroffers = this.service.FourWheelerOffers;
      console.log(this.useroffers);
    }

  }


  useroffers : Loanoffers[] = []

  // userselectedloan !: Loanoffers
  
  setvehid(id : any)
  {
    this.vhid = id;
  }


  selectLoan(loanone: any)
  {
    this.router.navigate(['/user-tabs/', {loan:this.vhid}]);
  }
 
}
