import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

 
  vehicle : Array<any> = []
  
  constructor( public vehicleService : LoanService) { }

  ngOnInit(): void {
    console.log("Vehicles List");
    this.vehicleService.getVehicles().subscribe((data) =>{
      this.vehicle=data;
    console.log(data)
    })  
  }

}
