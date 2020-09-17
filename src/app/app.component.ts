import { Component } from '@angular/core';

import { Link } from "./link";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  links: Link[] = [
    {text:'Dashboard', url:'/dashboard'},
    {text:'Heroes', url:'/heroes'}
  ]
  activeLink:Link = this.links[0];
}
