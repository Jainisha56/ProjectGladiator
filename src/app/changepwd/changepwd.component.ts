import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

change:FormGroup = new FormGroup(
    {
      newpwd:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required]),
      cnfpwd:new FormControl('')
      
     }
    //{validators:this.passwordMatchValidator}
  )

  constructor() { }

  ngOnInit(): void {
  }

  get newpwd()
  {
    return this.change.get("newpwd")
  }
  get cnfpwd()
  {
    return this.change.get("cnfpwd")
  }

  reset(){
    console.log(this.change.value)
  }

  passwordMatchValidator(frm: FormGroup){
    return frm.controls['newpwd'].value === frm.controls['cnfpwd'].value ? null: {'mismatch':true};
  }

}