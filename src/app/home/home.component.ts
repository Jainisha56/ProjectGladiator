import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  card_1="assets/1card.jpg";
  card_2="assets/2card.jpg";
  card_3="assets/3card.jpg";
  card_4="assets/4card.jpg";
  slide_1="assets/5.jpg";
  slide_2="assets/4.jpg";
  slide_3="assets/6.jpg";
  digi="assets/Cal_2021.pdf";
  holiday="assets/holiday.pdf";
  cal="assets/cal.png";
  holi="assets/holiday.png";
  twitter="assets/twitter.png";
  fb="assets/fb.png";
  insta="assets/insta.png";
  linkedin="assets/linkedin.png";
  yt="assets/yt.png";
  call="assets/call.png";
  locate="assets/locate.png";
  img_4="assets/4img.jpg";
  img_5="assets/5img.png";
  img_6="assets/6img.png";
  img_11="assets/11.jpg";
  img_22="assets/22.jpg";
  loan="assets/loan.jpg";

  twittercheck="location.href='https://twitter.com/LTI_Global'"
  twitterl="https://twitter.com/LTI_Global";
  fbl="https://www.facebook.com/groups/518944236130991";
  instal="https://www.instagram.com/the.finance.magazine/";
  linkedinl="https://www.linkedin.com/company/l&t-infotech-limited.-vashi-navi-mumbai-400701/";
  ytl="https://www.youtube.com/user/LarsenToubroInfotech";
  locationl="assets/location.html";

  //society="assets/5.png";
  constructor() { }

  ngOnInit(): void {
  }
  
  

}
