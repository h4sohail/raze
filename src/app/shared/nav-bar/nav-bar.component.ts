import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SearchComponent } from '../../search/search.component';

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

  isSearchRoute() {
    return this.router.url === '/' || this.router.url === '/search';
  }

}
