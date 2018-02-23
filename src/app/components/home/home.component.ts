import { Component, OnInit, HostListener } from '@angular/core';

import { AuthService } from '../../_services/auth.service';
import { FunctionsService } from '../../_services/_functions/functions.service';

import { GlobalDataService } from '../../_services/globaldata.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FunctionsService, AuthService ]
})
export class HomeComponent implements OnInit {
  guest: string = 'Student';
  config: any = {};
  isLoaded: boolean = true;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private auth: AuthService, public gs: GlobalDataService) { }

  ngOnInit() {
    this.config = [
      {isAdmin: !this.isAdmin, routerLink: "login", fontawesome: 'fa fa-sign-in', caption: 'Login'},
      {isAdmin: this.isAdmin, routerLink: ",admin", fontawesome: 'fa fa-unlock', caption: 'Admin Panel'},
      {isAdmin: this.isAdmin, routerLink: "", fontawesome: 'fa fa-sign-out', caption: 'Log Out'}
    ];
    this.isLoggedIn = this.auth.getCashedOf('token');
    if (this.isLoggedIn) {
      this.isAdmin = true;
      this.config[0].isAdmin = !this.isAdmin;
      this.config[1].isAdmin = this.isAdmin;
      this.config[2].isAdmin = this.isAdmin;
    }
  }
}
