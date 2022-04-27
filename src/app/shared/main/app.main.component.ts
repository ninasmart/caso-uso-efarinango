import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
  styleUrls: ['./app.main.component.scss'],
})
export class AppMainComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
  }
}
