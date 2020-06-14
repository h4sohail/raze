import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  skipLinkPath: string;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.skipLinkPath = `${this.location.path()}#mainContent`;
  }

  isResultRoute() {
    return this.router.url === '/result';
  }

}
