import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {


  adminlogin:FormGroup = new FormGroup(
    {
      Email:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Password:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required])
    }
  )

  Admincredentials()
  {
     console.log(this.adminlogin.value)
     
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.adminlogin.get("Email")
  }
  get Password()
  {
    return this.adminlogin.get("Password")
  }


}
