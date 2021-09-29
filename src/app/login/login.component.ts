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
  userlogin:FormGroup = new FormGroup(
    {
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Userpassword:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required])
    }
  )
  AdminLogin= ['/', { outlets: {
    'outlet-main': ['Alogin']
  }}];

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
      console.log('registration failed!')
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
