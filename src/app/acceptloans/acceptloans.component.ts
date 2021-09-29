import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acceptloans',
  templateUrl: './acceptloans.component.html',
  styleUrls: ['./acceptloans.component.css']
})
export class AcceptloansComponent implements OnInit {
 
  accept:FormGroup = new FormGroup(
    {
      Username:new FormControl(),
salary:new FormControl(),
vehiclename:new FormControl(),
amount:new FormControl(),
intrest:new FormControl(),
duration:new FormControl(),
emi:new FormControl(),
loanstart_date:new FormControl(),
loanend_date:new FormControl()
   }
  )
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  
}
}
