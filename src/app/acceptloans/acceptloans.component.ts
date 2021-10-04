import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-acceptloans',
  templateUrl: './acceptloans.component.html',
  styleUrls: ['./acceptloans.component.css']
})
export class AcceptloansComponent implements OnInit {
  accept:FormGroup = new FormGroup(
    {
      Username:new FormControl(''),
salary:new FormControl(''),
vehiclename:new FormControl(''),
TotalAmount:new FormControl(''),
interest:new FormControl(''),
TotalInstallments:new FormControl(''),
emi:new FormControl(''),
//LoanStartDate:new FormControl(''),
//loanend_date:new FormControl(''),
VehicleId : new FormControl(),
LoanApplicationId : new FormControl(),
UserRefId : new FormControl() 
   }
  )
  constructor(private service:LoanService , private router:ActivatedRoute , private route:Router) { }


  
   AcceptList !: Array<any>
  ngOnInit(): void {
    console.log(this.router.snapshot.params['applicationid']);
     this.service.getApplicationDetails(this.router.snapshot.params['applicationid']).subscribe((data)=>
   // console.log(data[0])
      this.accept=new FormGroup({
      Username:new FormControl(data[0].userFirstName),
      salary:new FormControl(data[0].annualSal),
      vehiclename:new FormControl(data[0].vehicleName),
      TotalAmount:new FormControl(data[0].amount),
      interest:new FormControl(data[0].interest),
      TotalInstallments:new FormControl(data[0].duration),      
      emi:new FormControl(this.calculateEmi(data[0].amount,data[0].interest,data[0].duration)),
     // LoanStartDate:new FormControl(''),
      VehicleId:new FormControl(data[0].vehicleId),
      LoanApplicationId:new FormControl(data[0].applicationId),
      UserRefId:new FormControl(data[0].userId),

    })   
  ) 
  /* this.service.getApplicationDetails(this.router.snapshot.params['applicationid']).subscribe((data) =>{
    this.AcceptList =data;
  console.log(data)
  })   */
  }
  rate! :any
  calculateEmi(p : any , r : any, n : any)
  {
    this.rate = r/100/12
    return (p*this.rate* (Math.pow((1+this.rate), n))) / (Math.pow((1+this.rate),n-1) ) 
  }
  //month : Date = new Date(this.accept.controls['loanstart_date'].value)

 // calculateDate ( startdate : Date , n : any)
  //{
   // console.log(startdate.valueOf())
   // console.log(startdate.setUTCFullYear)
   // console.log(startdate.toLocaleDateString)
   // console.log(this.month)
  //}
  /* var eventStartTime = new Date(event.startTime);
  var eventEndTime = new Date(event.endTime);
  var duration = eventEndTime.valueOf() - eventStartTime.valueOf(); */
  AcceptApp(){
    //console.log(this.accept.controls['loanstart_date'].value)
   // this.accept.controls.loanend_date = new FormControl( this.calculateDate(this.accept.controls['LoanStartDate'].value , this.accept.controls['duration'].value))
    
    console.log(this.accept.value)
     this.service.AcceptedLoan(this.accept.value).subscribe(res => {
      console.log(res)
      console.log('Loan created!')
      this.Sendmail()
    //  this.route.navigateByUrl('approved-loans') 

    }); 

     this.service.AcceptApplication(this.router.snapshot.params['applicationid']).subscribe((data)=>
      console.log(data,"Application Accepted Successfully")
    )
    // this.route.navigateByUrl('approved-loans') 
   
  }

  Sendmail()
  {
    this.service.sendacceptancemail(this.router.snapshot.params['applicationid']).subscribe((data)=>
    console.log(data,"Email sent"))
    this.route.navigateByUrl('approved-loans') 
  }
}
