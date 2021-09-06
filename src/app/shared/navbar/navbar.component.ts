import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toolbarColor = 'accent';
  opened: false;

  constructor() { }

  ngOnInit(): void {
  }

}
