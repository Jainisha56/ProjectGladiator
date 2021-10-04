import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
/* 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} */

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectedFile!:File;
  clicked=false;
  Ename!:any;
  getemail!:any

  files:FormGroup = new FormGroup(
    {
      Aadhaar:new FormControl('',[Validators.required]),
      PanCard:new FormControl('',[Validators.required]),
      Photo:new FormControl('',[Validators.required]),
      SalarySlip:new FormControl('',[Validators.required])
   }
  )


  loan !: any
  id !: any
  lamount!: number
  lrate !: number
  lduration !: number
  lfee !: number
  lname !: string
  lmonthlyemi !: number

  vid:any
  uid:any
  vname:any

  LoanQuotesForm !: FormGroup

  get Aadhaar()
  {
    return this.files.get("Aadhaar")
  }

  onFileChange(event:any) {
    this.Ename = sessionStorage.getItem('Email')
    console.log(this.Ename);
    this.selectedFile = <File>event.target.files[0];
    console.log('hi')
    console.log(event)
  }

  private apiServer ="http://localhost:63751/api";

  onUpload(){
  console.log(this.Ename);
    const filedata = new FormData();
    console.log("insideupload")
    filedata.append('image',this.selectedFile, this.selectedFile.name);
    this.http.post(this.apiServer+'/UserDetails/file/' + this.Ename, filedata)
      .subscribe(res => {
        console.log(res);
      })
    // this.docsuploaded("abtn", "aicon")
    // this.docsuploaded("pbtn", "picon")
    // this.docsuploaded("psbtn", "psicon")
    // this.docsuploaded("sbtn", "sicon")

  }
  ApplyLoan()
  {
    this.LoanQuotesForm = new FormGroup(
      {
        Amount: new FormControl(this.lamount),
        Interest: new FormControl(this.lrate),
        Duration: new FormControl(this.lduration),
        loanemi: new FormControl(this.lmonthlyemi),
        loanfee: new FormControl(this.lfee),
        vehicleName: new FormControl(this.vname),
        VehicleId: new FormControl(this.vid),
        UserRefId:new FormControl(this.uid)
      }
    )
    console.log(this.LoanQuotesForm.value)
     this.service.addLoanApplication(this.LoanQuotesForm.value).subscribe((res:any)=>{
     
     console.log(res)
     console.log(res["Success"]);
    //  console.log(res)

     if(res["Success"]==true){
       
      console.log("application added in table")
      this.sendapplicationmail()
     }
     else{
       console.log("application not addded")
       alert("Application not submitted due to network issues")

     }
     }
     )
    //  
  }

  docsuploaded(btnid : any, spanid : any)
  {
    // var x = <HTMLInputElement> document.getElementById(btnid)
    var submitbtn = <HTMLInputElement> document.getElementById(btnid);
      submitbtn.style.display = "none"
      
      var element = <HTMLInputElement> document.getElementById(spanid);
      element.style.display = "block"
      // element.src="../../assets/icons8-checked-40.png";
  }
  
  disappear()
  {
    var submitbtn = <HTMLInputElement> document.getElementById("docsubmit");
      submitbtn.style.display = "none"
      var element = <HTMLInputElement> document.getElementById("loanquotestext");
      element.style.display = "block"
      
  }

  sendapplicationmail()
  {
    this.service.loanconfirmmail(this.vname,this.LoanQuotesForm.value).subscribe((res:any)=>{
      console.log("Email Sent")
      console.log(res)
    })
    alert("Application submitted !")

    this.router.navigateByUrl('/loan-history');
    
  }

  constructor(public service: LoanService, public route: ActivatedRoute,private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getemail = sessionStorage.getItem("Email")
    console.log(this.getemail)
   
    if(this.getemail===null)
    this.router.navigateByUrl('/Home');

    this.service.getVehicleByEmail(this.getemail).subscribe((data)=>{
    //console.log(data["userFirstName"])
    //console.log(data.userFirstName)
    console.log(data)
    this.uid = data[0].userId
    this.vid = data[0].vehicleId
    this.vname = data[0].vehicleName
   }
   /*   this.LoanQuotesForm=new FormGroup(
      {
        vehicleName: new FormControl(data.vehicleName),
        vehicleId: new FormControl(data['vehicleId']),  
        userId:new FormControl(data['userId'])
      }  
    
    ) */
    )

    this.route.paramMap.subscribe(data => {
      console.log(data)
      this.id = data.get('loan');
    });

    this.loan = this.service.AllLoanOffers;

    for (var i = 0; i < 6; i++) {

      if (
        this.service.AllLoanOffers[i].loanid == this.id
      ) {
        this.lname = this.service.AllLoanOffers[i].loansname
        this.lamount = this.service.AllLoanOffers[i].loanamount
        this.lrate = this.service.AllLoanOffers[i].loanrate
        this.lduration = this.service.AllLoanOffers[i].loantenuremonths
        this.lfee = this.service.AllLoanOffers[i].processingfee
        this.lmonthlyemi = this.service.calculateEmi(this.lamount, this.lrate, this.lduration)

        this.LoanQuotesForm = new FormGroup(
          {
            Amount: new FormControl(this.lamount),
            Interest: new FormControl(this.lrate),
            Duration: new FormControl(this.lduration),
            loanemi: new FormControl(this.lmonthlyemi),
            loanfee: new FormControl(this.lfee),
            vehicleName: new FormControl(this.vname),
            VehicleId: new FormControl(this.vid),
            UserRefId:new FormControl(this.uid)
          }
        )
        this.LoanQuotesForm.controls['Amount'].disable();
        this.LoanQuotesForm.controls['Interest'].disable();
        this.LoanQuotesForm.controls['Duration'].disable();
        this.LoanQuotesForm.controls['loanemi'].disable();
        this.LoanQuotesForm.controls['loanfee'].disable();
        this.LoanQuotesForm.controls['vehicleName'].disable();

      }

    }

  }

}
