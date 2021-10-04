import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filesupload',
  templateUrl: './filesupload.component.html',
  styleUrls: ['./filesupload.component.css']
})
export class FilesuploadComponent implements OnInit {

  selectedFile!:File;
  Ename!:any;
  clicked=false;
  files:FormGroup = new FormGroup(
    {
      Aadhaar:new FormControl('',[Validators.required]),
      PanCard:new FormControl('',[Validators.required]),
      Photo:new FormControl('',[Validators.required]),
      SalarySlip:new FormControl('',[Validators.required])
   }
  )

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
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
   
  }

}
