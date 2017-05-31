import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound1.component.scss']
})
export class PagenotfoundComponent implements OnInit {
  pagenotfound = Math.floor(Math.random() * (4.9-1)+1);
  constructor() { }

  ngOnInit() {
  }

}
