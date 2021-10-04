import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  about="assets/about.jpg";
  about1="assets/about1.jpg";
  loan="assets/loan.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
