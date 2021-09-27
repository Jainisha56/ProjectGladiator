import { Component, OnInit } from '@angular/core';

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

  twittercheck="location.href='https://twitter.com/gee_thika'"
  twitterl="https://twitter.com/gee_thika";
  fbl="https://www.facebook.com/geethika.tiruveedula/";
  instal="https://www.instagram.com/tiruveedulageethika/";
  linkedinl="https://www.linkedin.com/in/tiruveedula-geethika-24a8b31a7/";
  ytl="youtube.com/c/TiruveedulaGeethika";
  locationl="assets/location.html";

  //society="assets/5.png";
  constructor() { }

  ngOnInit(): void {
  }
  

}
