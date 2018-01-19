import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ AuthService ]
})
export class NavbarComponent implements OnInit {
  @Input() user: string = '';
  @Input() config: any;
  navBar: any;
  burgger: any;
  bg: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.navBar = $('.navbar .navigation .hamburger a');
    this.burgger = $('.navbar .navigation .fixed-menu');
    this.bg = $('.navbar .bg-brightness');
  }

  logout(e) {
    this.auth.logout();
    return false;
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
