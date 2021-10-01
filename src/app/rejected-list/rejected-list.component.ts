import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.css']
})
export class RejectedListComponent implements OnInit {

  RejectedList :  Array<any> = []
  constructor( public Service : LoanService) { }

  ngOnInit(): void {
    console.log("Rejected List");
    this.Service.getRejectedList().subscribe((data) =>{
      this.RejectedList =data;
    console.log(data)
    })  
  }

}
