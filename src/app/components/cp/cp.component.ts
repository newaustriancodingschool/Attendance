import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { FunctionsService } from '../../_services/_functions/functions.service';
import { RequestsService } from '../../_services/requests.service';
import { AuthService } from '../../_services/auth.service';
import { GlobalDataService } from '../../_services/globaldata.service';

declare var $: any;
@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css'],
  providers: [ RequestsService, AuthService ]
})
export class CpComponent implements OnInit {
  navBar: any;
  burgger: any;
  bg: any;
  guest: string = 'Admin';
  config: any;
  
  constructor(
    private auth: AuthService,
    private req: RequestsService,
    private funs: FunctionsService,
    public gs: GlobalDataService,
    private router: Router) { }

  ngOnInit() {
    this.config = [
      {isAdmin: true, routerLink: ',admin', fontawesome: 'fa fa-tachometer', caption: 'Control Panel'},
      {isAdmin: true, routerLink: ',admin,timesupdate', fontawesome: 'fa fa-clock-o', caption: 'Time update'},
      {isAdmin: true, routerLink: ',admin,overview', fontawesome: 'fa fa-calendar', caption: 'Overview'},
      // {isAdmin: true, routerLink: ",admin,checkin", fontawesome: 'fa fa-check-square-o', caption: 'Check In'},
      {isAdmin: true, routerLink: ',admin,participants', fontawesome: 'fa fa-users', caption: 'Participants'},
      {isAdmin: true, routerLink: '', fontawesome: 'fa fa-sign-out', caption: 'Log Out'}
    ];
    this.navBar = $('.navbar .navigation .hamburger a');
    this.burgger = $('.navbar .navigation .fixed-menu');
    this.bg = $('.navbar .bg-brightness');
    this.funs.makeRequest("login", "Post").subscribe(
      res => {
        // Free play around
      },
      err => {
        this.router.navigate(['']);
      });
    if (this.auth.getCashedOf('token') && !this.gs.timer) {
      this.funs.showSuccessNote('You have only 30 minutes on admin page!');
      this.gs.timer = setTimeout( () => {
        this.auth.logout();
      }, 1800000);
    }
  }
  logout(e) {
    this.auth.logout();
    return false;
  }
}
