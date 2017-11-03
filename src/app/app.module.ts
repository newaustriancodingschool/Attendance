import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';

// Normal pages
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Global services to store data
import { GlobalDataService } from './_services/globaldata.service';

// Admin Page Components
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/adreports/reports.component';
import { AdhomeComponent } from './components/cp/adhome/adhome.component';
import { TolocaltimePipe } from './_services/tolocaltime.pipe';
import { CheckattendencePipe } from './_services/checkattendence.pipe';
import { HumanizetimePipe } from './_services/humanizetime.pipe';
import { ClientcheckinComponent } from './components/home/clientcheckin/clientcheckin.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    CpComponent,
    ReportsComponent,
    AdhomeComponent,
    TolocaltimePipe,
    CheckattendencePipe,
    HumanizetimePipe,
    HomeComponent,
    ClientcheckinComponent
  ],
  imports: [
    APP_ROUTES_PROVIDER,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ GlobalDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
