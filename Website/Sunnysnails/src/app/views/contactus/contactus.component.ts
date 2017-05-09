import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
    }, 1000);
  }

  initMap() {
    var nails = { lat: 42.1091478, lng: -87.9674743 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: nails,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true
    });
    var marker = new google.maps.Marker({
      position: nails,
      map: map
    });
  }
}
