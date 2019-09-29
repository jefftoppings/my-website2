import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems: MenuItem[] = [
    {text: 'Home', route: '/home'},
    {text: 'Projects', route: '/projects'},
    {text: 'Work Experience', route: '/experience'},
    {text: 'Contact', route: '/contact'}
    ];

  constructor() { }

  ngOnInit() {
  }
}
