import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotpwdComponent } from '../forgotpwd/forgotpwd.component';
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  getemail!:any
change:FormGroup = new FormGroup(
    {
      UserPassword:new FormControl('',[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"),Validators.required]),
      cnfpwd:new FormControl('',[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"),Validators.required]),
      //UserEmail:new FormControl()
     }
    //{validators:this.passwordMatchValidator}
  )

  constructor(private changepassservice:LoanService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  //   this.changepassservice.getByEmail(this.route.snapshot.params['mail']).subscribe((data)=>
  //   this.change=new FormGroup({
  //     UserEmail:new FormControl(data["User_Email"])
  //   })
  // )
  //this.getemail = this.route.snapshot.params['mail']
  //console.log(this.route.snapshot.params['mail'])
  // constructor(routeParams: RouteParams){
  //   let myPassedData: any = routeParams.params;
  //   console.log(myPassedData.someProperty); #Prints "SomeValue"
  // }
  console.log("hi")
    this.route.paramMap.subscribe(data=>{console.log(data)
    this.getemail=data.get('mail')})
}

  get UserPassword()
  {
    return this.change.get("UserPassword")
  }
  get cnfpwd()
  {
    return this.change.get("cnfpwd")
  }

  reset(){
    console.log(this.change.value)
    console.log(this.getemail)
    
      this.changepassservice.changepwd(this.getemail,this.change.value).subscribe((data)=>
        console.log(data,"Password changed Successfully")
      )
      this.router.navigateByUrl('/Home') 
  }

  passwordMatchValidator(frm: FormGroup){
    return frm.controls['UserPassword'].value === frm.controls['cnfpwd'].value ? null: {'mismatch':true};
  }

}