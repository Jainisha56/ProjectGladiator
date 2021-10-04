import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';


@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  clicked=false;
  adminlogin:FormGroup = new FormGroup(
    {
      AdminEmail:new FormControl('',Validators.required),
      Adminpassword:new FormControl('',Validators.required)
    }
  )
  InUse!:boolean 

  Admincredentials()
  {
     console.log(this.adminlogin.value)
     console.log(this.adminlogin.value)
     this.adminloginloan.alogin(this.adminlogin.value).subscribe( (res:any) => {
     
     // console.log("Success")
      console.log(res["Success"]);
      console.log(res)

      if(res["Success"]==true)
      {

        sessionStorage.setItem('AdminEmail',this.adminlogin.controls.AdminEmail.value)
        console.log(this.adminlogin.controls.AdminEmail.value)
      this.adminloginloan.subjecta.next(true)
      console.log('login successful!')
      this.router.navigateByUrl('/admin-dash')
      
    }
    else if (res["Success"]==false){
      console.log('login failed!')
      this.InUse= false;
    }
    });
     
  }

  constructor(private adminloginloan:LoanService,private router:Router) { }

  ngOnInit(): void {
  }

  get AdminEmail()
  {
    return this.adminlogin.get("AdminEmail")
  }
  get Adminpassword()
  {
    return this.adminlogin.get("Adminpassword")
  }


}
