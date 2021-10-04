import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InUse!:boolean
  clicked=false;
  userlogin:FormGroup = new FormGroup(
    {
      UserEmail:new FormControl('',Validators.required),
      Userpassword:new FormControl('',Validators.required),
      // rememberMe: new FormControl(false)
    }
  )

 

  Usercredentials()
  {
     
     console.log(this.userlogin.value)
     this.loginloan.login(this.userlogin.value).subscribe( (res:any) => {
     
     // console.log("Success")
      console.log(res["Success"]);
      console.log(res)

      if(res["Success"]==true)
      {
        sessionStorage.setItem('Email',this.userlogin.controls.UserEmail.value)
        console.log(this.userlogin.controls.UserEmail.value)
      this.loginloan.subjectu.next(true)
      console.log('login successful!')
      this.router.navigateByUrl('/user-dash')
      
    }
    else if (res["Success"]==false){
      console.log('login failed!')
      this.InUse= false;
    }
    });
  }


  constructor(private loginloan:LoanService,private router:Router) { }

  ngOnInit(): void {
  }
  get  UserEmail()
  {
    return this.userlogin.get("UserEmail")
  }
  get Userpassword()
  {
    return this.userlogin.get("Userpassword")
  }

}
