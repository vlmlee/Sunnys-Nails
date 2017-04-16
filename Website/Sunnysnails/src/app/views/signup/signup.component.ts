import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subscribe(jsonp: Jsonp) {
    let email: string = "";
    let url: string = "https://corollari.us15.list-manage.com/subscribe/post?u=82fdd1fcf014d1d9dcf89965e&id=e3459dd217&subscribe=Subscribe&EMAIL=" + email + "&c=JSONP_CALLBACK";
    jsonp.request(url, { method: 'Get' });
  }
}
