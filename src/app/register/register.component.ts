import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../classes/user';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register!:user
  InUse:boolean = false
  clicked=false;
  Personaldetails:FormGroup = new FormGroup(
    {
      UserFirstName:new FormControl('',Validators.required),
      UserLastName:new FormControl(),
      UserDoB:new FormControl('',Validators.required),
      Usergender:new FormControl('',Validators.required),
      UserPhoneNum:new FormControl('',[Validators.pattern("[0-9]{10}"), Validators.required]),
      UserEmail:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Userpassword:new FormControl('',[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"),Validators.required]),
      cnfpwd:new FormControl('',[Validators.required])
      
    }
  )
  // cnfpwd: any;

  constructor(private registerloan:LoanService,private router:Router) { }

  ngOnInit(): void {
  }


  Userregistrationdetails()
  {
    console.log(this.Personaldetails.value)
   
    if(this.Userpassword?.value === this.cnfpwd?.value)
    {
      console.log(this.Personaldetails.value)
      this.registerloan.register(this.Personaldetails.value).subscribe( (res:any) => {
        console.log(res["Success"]);
        console.log(res)
  
        if(res["Success"]==true){
        console.log('User created!')
        this.router.navigateByUrl('Login')
      }
      else if (res["Success"]==false){
        console.log('registration failed!')
        this.InUse= true;
      }
      });
    }
    else{
      alert("New Password and confirm password does not match. Try again.")
      
    }
     
     
  }

  get UserFirstName()
  {
    return this.Personaldetails.get("UserFirstName")
  }
  get UserLastName()
  {
    return this.Personaldetails.get("UserLastName")
  }
  get UserDoB()
  {
    return this.Personaldetails.get("UserDoB")
  }
  get Usergender()
  {
    return this.Personaldetails.get("Usergender")
  }
  get UserPhoneNum()
  {
    return this.Personaldetails.get("UserPhoneNum")
  }
  get UserEmail()
  {
    return this.Personaldetails.get("UserEmail")
  }
  get Userpassword()
  {
    return this.Personaldetails.get("Userpassword")
  }
  get cnfpwd()
  {
    return this.Personaldetails.get("cnfpwd");
  }

}
