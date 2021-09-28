import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  
forgot:FormGroup = new FormGroup(
    {
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      
   }
  )

 otp:FormGroup=new FormGroup(
   {
    OTP:new FormControl()
   }
 ) 
  InUse!: boolean;


 emailsubmit()
  {
     console.log(this.forgot.value)
     this.forgotpass.forgotpassword(this.forgot.value).subscribe( (res:any) => {
      
     // console.log("Success")
      //sessionStorage.setItem('Email',this.userlogin.controls.Email.value)
     // console.log(this.userlogin.controls.Email.value)
      console.log(res["Success"]);
      console.log(res)

      if(res["Success"]==true)
      {
      console.log('Email sent')
      
      
    }
    else if (res["Success"]==false)
    {
      console.log('Email unavailable')
      this.InUse= false;
    }
    });


  }
  otpsubmit()
  {
     console.log(this.otp.value)
  }

  constructor(private forgotpass:LoanService,private router:Router) { }

  ngOnInit(): void {
  }

  get UserEmail()
  {
    return this.forgot.get("UserEmail")
  }
  get OTP(){
    return this.forgot.get("otp")
  }

}