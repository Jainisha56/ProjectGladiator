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

  alertmsg!:boolean
  code!:number
  clicked=false;

forgot:FormGroup = new FormGroup(
    {
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      
   }
  )

 otp:FormGroup=new FormGroup(
   {
    OTP:new FormControl('',[Validators.required])
   }
 ) 
  InUse!: boolean;
   newemail!:string
  constructor(private forgotpass:LoanService,private router:Router) { }
 emailsubmit()
  {
     console.log(this.forgot.value)
     this.forgotpass.forgotpassword(this.forgot.value).subscribe( (res:any) => {
      
     // console.log("Success")
      //sessionStorage.setItem('Email',this.userlogin.controls.Email.value)
     // console.log(this.userlogin.controls.Email.value)
      console.log(res.status);
      console.log(res)
      this.code = res.rnum

      if(res.status==true)
      {
      console.log('Email sent')
      //console.log(this.otp.value)
      this.InUse=true
      
    }
    else if (res.status==false)
    {
      console.log('Email unavailable')
      this.InUse= false
    }
    });

   
  }
  otpsubmit()
  {
    console.log(this.otp.value)
    // this.forgotpass.forgotpassword(this.otp.value).subscribe( (res:any) => {
      
     // console.log("Success")
      //sessionStorage.setItem('Email',this.userlogin.controls.Email.value)
     // console.log(this.userlogin.controls.Email.value)
      console.log(this.code)
      //console.log(res.rnum)

     
      if(this.code==this.otp.controls['OTP'].value)
      {
        console.log(this.forgot.controls['UserEmail'].value)
        this.newemail=this.forgot.controls['UserEmail'].value
        this.router.navigate(['/Changepassword/',{mail:this.newemail}])
        //Router.navigate(['/myRoute',{someProperty:"SomeValue"}]
        //this.alertmsg=true
      }
      else
      {
        this.alertmsg=false
      }
    //});
  }

 

  ngOnInit(): void {
  }

  get UserEmail()
  {
    return this.forgot.get("UserEmail")
  }
  get OTP(){
    return this.forgot.get("OTP")
  }


}