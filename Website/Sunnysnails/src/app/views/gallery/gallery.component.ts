import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public first: string = "painting-fingernails-nail-polish-hearts-valentine-37553.jpeg";

  constructor() {
  }

  ngOnInit() {
  }
}
