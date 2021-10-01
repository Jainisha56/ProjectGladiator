import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Employmentdetails } from '../classes/employmentdetails';
import { Bankdetails } from '../classes/bankdetails';
import { Vehicles } from '../classes/vehicles';


@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  userbankdetails !: Bankdetails
  userempdetails !: Employmentdetails
  vehicledetails !: Vehicles
  eligible : boolean = false


  VehicleDetailsForm : FormGroup = new FormGroup(
    {
      VehicleType:new FormControl('',Validators.required),
      VehicleModel:new FormControl('',Validators.required),
      VehicleName:new FormControl('',Validators.required),
      ManufactureYear:new FormControl('',Validators.required),
      ShowroomPrice:new FormControl('',Validators.required),
      OnRoadPrice:new FormControl('',Validators.required)
    }
  );

  BankDetailsForm : FormGroup = new FormGroup(
    {
      BankName:new FormControl('',Validators.required),
      BranchName:new FormControl('',Validators.required),
      IfscCode:new FormControl('',Validators.required),
      AccountType:new FormControl('',Validators.required),
      AccountNum:new FormControl('',Validators.required),
    }
  );

  EmploymentDetailsForm : FormGroup = new FormGroup(
    {
      TypeOfEmp:new FormControl('',Validators.required),
      AnnualSal:new FormControl('',Validators.required),
      ExistingEmi:new FormControl('',Validators.required),
      WorkExperience : new FormControl('',Validators.required)
    }
  )


  constructor(public service : LoanService, private router : ActivatedRoute, private route : Router) { }

  ngOnInit(): void {
    
  }

  VehicleDetails()
  {
    this.vehicledetails =this.VehicleDetailsForm.value
    console.log(this.vehicledetails)
    this.service.addVehicles( sessionStorage.getItem('Email') ,this.VehicleDetailsForm.value).subscribe(res => {
      console.log(res)
      console.log('Vehicle details added!')
      this.service.UserVehicleType = this.VehicleDetailsForm.controls['VehicleType'].value;
    console.log(this.service.UserVehicleType);
      // this.route.navigateByUrl('/Loan Offers')
    });
  }

  BankDetails()
  {
    this.userbankdetails =this.BankDetailsForm.value
    console.log(this.userbankdetails)
    this.service.bankdetails(this.BankDetailsForm.value, sessionStorage.getItem('Email')).subscribe(res => {
      console.log(res)
      console.log('Bank details added!')
      // this.route.navigateByUrl('/Loan Offers')
    });
  }

  EmploymentDetails()
  {
    this.userempdetails =this.EmploymentDetailsForm.value
    console.log(this.userempdetails)
    this.service.employmentdetails(this.EmploymentDetailsForm.value, sessionStorage.getItem('Email')).subscribe(res => {
      console.log(res)
      console.log('Employment details added!')
      // this.route.navigateByUrl('/Loan Offers')
    });
    this.eligible = true
  }

  vhtype :any
  CheckEligibility()
  {
    this.route.navigate(['/Loan Offers/', {vhtype:this.service.UserVehicleType}]); 
  }

}
