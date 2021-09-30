import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-applications',
  templateUrl: './loan-applications.component.html',
  styleUrls: ['./loan-applications.component.css']
})
export class LoanApplicationsComponent implements OnInit {

  loanApp !: Array<any>
  constructor( 
    public PendingService : LoanService,
    private router:ActivatedRoute,
    private rou:Router) { }

  ngOnInit(): void {
    console.log("Pending List");
    this.PendingService.getPendingAppList().subscribe((data) =>{
      this.loanApp =data;
    console.log(data)
    })  
  }

  
  RejectApp(appid:number){
    
    this.PendingService.RejectApplication(appid).subscribe((data)=>
      console.log(data,"Application Rejected Successfully")
    )
    this.rou.navigateByUrl('rejected-list')
  }

}
