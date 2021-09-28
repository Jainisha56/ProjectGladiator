import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  public emiData: FormGroup;


  amount:any;
  rate:any;
  month: any;

  show : boolean = false
 

  monthlyPayment: any;
  TotalPayment: any;
  totalInterest: any;
  monthlyInterest: any;
  temp: any;


  constructor(
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute

  ) { 

    this.emiData = this.formBuilder.group({
      amount: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      rate: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      year: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
    });

  }

 
  getCalculation() {
    console.log(this.emiData.value);

    this.amount = this.emiData.controls['amount'].value;
    this.month = this.emiData.controls['year'].value*12;
    this. rate =  this.emiData.controls['rate'].value / 100 /12;
    this.monthlyInterest = Math.pow(this.rate + 1, this.month);
    this.monthlyPayment = Math.round((this.amount * this.rate * this.monthlyInterest) / (this.monthlyInterest - 1));
    this.TotalPayment = Math.round(this.amount * this.monthlyInterest);
    this.totalInterest = Math.round(this.TotalPayment - this.amount);
    this.show = true
  }

  ngOnInit(): void {
  }

}
