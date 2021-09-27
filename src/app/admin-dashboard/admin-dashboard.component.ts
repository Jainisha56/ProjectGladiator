import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  NoofRejectedLoans : number = 4;
  NoofPendingApplications : number = 4;
  NoofUserRegistraions : number = 306;
  NoofVehicles : number = 100;
  NoofApprovedLoans : number =20;
  constructor() { }

  ngOnInit(): void {
  }

}
