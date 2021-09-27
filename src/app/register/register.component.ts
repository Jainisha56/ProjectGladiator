import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Personaldetails:FormGroup = new FormGroup(
    {
      FirstName:new FormControl(),
      LastName:new FormControl(),
      Age:new FormControl(),
      Gender:new FormControl(),
      MobileNo:new FormControl(),
      Emailid:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Password:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required]),
      Address: new FormControl(),
      State:new FormControl(),
      City:new FormControl(),
      Pincode:new FormControl()
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  Userregistrationdetails()
  {
     console.log(this.Personaldetails.value)
  }

  get Firstname()
  {
    return this.Personaldetails.get("Firstname")
  }
  get Lastname()
  {
    return this.Personaldetails.get("Lastname")
  }
  get Age()
  {
    return this.Personaldetails.get("Age")
  }
  get Gender()
  {
    return this.Personaldetails.get("Gender")
  }
  get MobileNo()
  {
    return this.Personaldetails.get("MobileNo")
  }
  get Emailid()
  {
    return this.Personaldetails.get("Emailid")
  }
  get Password()
  {
    return this.Personaldetails.get("Password")
  }


}
