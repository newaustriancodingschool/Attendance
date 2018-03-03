import { Component, HostListener } from '@angular/core';
import { AuthService } from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService) {
    // window.addEventListener("beforeunload", (e) => {
    //   this.auth.clearCash();
    // });
  }
}
