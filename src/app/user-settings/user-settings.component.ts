import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  constructor(private settingservice:LoanService,private router:Router) { }

  sendemailsession!:any
  ngOnInit(): void {
  }

  filldetails()
  {
    this.sendemailsession = sessionStorage.getItem('Email') 
    this.router.navigate(['/Personaldetails/',{sendmail:this.sendemailsession}])

  }
}
