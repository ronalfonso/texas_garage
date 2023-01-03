import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];


  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Home',
            routerLink: '/',
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Service',
            routerLink: '/fileupload',
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Gallery',
            routerLink: '/fileupload',
            routerLinkActiveOptions: { exact: true }
          },
          {
            label: 'Service Areas',
            routerLink: '/fileupload',
            routerLinkActiveOptions: { exact: true }
          },

          {
            label: 'Brands',
            routerLink: '/fileupload',
            routerLinkActiveOptions: { exact: true }
          }
        ]
      }
    ];
  }


}
