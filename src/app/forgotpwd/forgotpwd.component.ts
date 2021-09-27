import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

forgot:FormGroup = new FormGroup(
    {
      Email:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      
         }
  )

 otp:FormGroup=new FormGroup(
   {
    OTP:new FormControl()
   }
 ) 


 emailsubmit()
  {
     console.log(this.forgot.value)
  }
  otpsubmit()
  {
     console.log(this.otp.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.forgot.get("Email")
  }
  get OTP(){
    return this.forgot.get("otp")
  }

}
