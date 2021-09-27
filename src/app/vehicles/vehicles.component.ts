import { Component, OnInit } from '@angular/core';
import { VehivleList } from '../vehivle-list';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle : VehivleList[] = [
    {VehicleId:10,VehicleType:"car", VehicleModel:"Maruthi Suzuki", VehicleName:"Baleno" ,ShowroomPrice:1300000 ,OnRoadPrice:1400000,ManufactureYear:"2018"},
    {VehicleId:10,VehicleType:"bike", VehicleModel:"Honda", VehicleName:"Shine" ,ShowroomPrice:90000 ,OnRoadPrice:95000,ManufactureYear:"2012"},
    {VehicleId:10,VehicleType:"car", VehicleModel:"Toyota", VehicleName:"Glanza" ,ShowroomPrice:1400000 ,OnRoadPrice:1350000,ManufactureYear:"2019"},
    {VehicleId:10,VehicleType:"bike", VehicleModel:"TVS", VehicleName:"Jupiter" ,ShowroomPrice:80000 ,OnRoadPrice:75000,ManufactureYear:"2015"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
