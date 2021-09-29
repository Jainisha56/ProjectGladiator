import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent implements OnInit {

  public emiData: FormGroup;


  amount!:number;
  rate!:number;
  month!:number;

  show : boolean = false
 

  monthlyPayment!:number;
  TotalPayment!:number;
  totalInterest!:number;
  monthlyInterest!:number;
  temp!:number;

 
pieChartData : any
pieChartOptions : any
pieChartType : any
pieChartLegend : any
  pieChartLabels: any;


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
    this.shiftLeft()
     
   //--------------------------------pie
 this.pieChartOptions = {
  scaleShowVerticalLines : false,
  responsive : true
}

this.pieChartLabels = ['Principle', 'Interest']

    this.pieChartData = [ 
  {data : [this.amount, this.totalInterest] , label : 'Amount', backgroundColor : ["#d9534f", "#292b2c"]},
]
this.pieChartType = 'pie' as const

this.pieChartLegend = true
//----------------------------------pie



  }

 

  shiftLeft()
  {
   var x = document.getElementById("box1")
   x?.setAttribute("style", "float:left;font-size: x-large;font-weight:500;border-radius: 10px;padding: 10px;");
   x?.classList.add("animate__fadeInRight")
   var y = document.getElementById("chartContainer")
   y?.setAttribute("style", "display:block;height: 350px;width: 350px;")
   y?.classList.add("animate__fadeInUp")
  }

  
  ngOnInit(): void {
    
  }


}
