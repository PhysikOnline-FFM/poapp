import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent implements OnInit {
  clicked = false;
  text = '';

  constructor() { }

  ngOnInit() {
  }

}
