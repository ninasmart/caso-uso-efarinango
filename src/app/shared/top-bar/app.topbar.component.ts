import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.scss'],
})
export class AppTopbarComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
