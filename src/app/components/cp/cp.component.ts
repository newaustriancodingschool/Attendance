import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { FunctionsService } from '../../_services/_functions/functions.service';
import { RequestsService } from '../../_services/requests.service';
// import { AuthService } from '../../_services/auth.service';
// import { GlobalDataService } from '../../_services/globaldata.service';

declare var $:any;
@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css'],
  providers: [ FunctionsService, RequestsService ]
})
export class CpComponent implements OnInit {
  navBar: any;
  burgger: any;
  bg: any;

  isLoaded: boolean= true;
  userData: any;
  

  constructor(private req: RequestsService, private funs: FunctionsService, private router: Router) { }

  ngOnInit() {
    this.navBar = $('.navbar .navigation .hamburger a');
    this.burgger = $('.navbar .navigation .fixed-menu');
    this.bg = $('.navbar .bg-brightness');
  }

  @HostListener('document:click', ['$event'])
  onClick(e) {
    e.stopPropagation();
    let el = $(e.target || e.touches[0].target);    
    if (el.is('.navigation .hamburger a i') || el.is('.navigation .hamburger a')) {
      if (!this.burgger.hasClass('in')) {
        this.showMenu();
        return false;
      } else if (this.burgger.hasClass('in')) {
        this.hide();
        return false;
      }
    } else {
      if (el.closest('.fixed-menu').is('.fixed-menu')) {
        if (el.is('.dropdown') || el.closest('.dropdown').is('.dropdown')) {
          let menu = el.closest('.dropdown');
          menu.find(' > .triangle').toggleClass('collapseList');
          if (menu.next().is('.menu-list')) menu.next().slideToggle();
          return false;
        }else{
          this.hide();
        }
      } else {
        this.hide();
      }
    }
  }
  showMenu() {
    this.burgger.removeClass('out').addClass('in');
    this.bg.fadeTo(300, 0.6);
    $('body').css({margin: '0', height: "100%", overflow: "hidden"});
  }
  hide() {
    this.burgger.removeClass('in').addClass('out');
    this.bg.fadeOut(300);
    $('body').css({margin: '0', height: "auto", overflow: "auto"});
  }
}
