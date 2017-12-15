import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';

// Framework components
import { DatetimepickerComponent } from './_framework/datetimepicker/datetimepicker.component';

// Normal pages
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Global services to store data
import { GlobalDataService } from './_services/globaldata.service';

// Pipes
import { CheckattendencePipe } from './_services/checkattendence.pipe';
import { HumanizetimePipe } from './_services/humanizetime.pipe';
import { TolocaltimePipe } from './_services/tolocaltime.pipe';

// Main pages
import { ClientcheckinComponent } from './components/home/clientcheckin/clientcheckin.component';

// Admin Page Components
import { CpComponent } from './components/cp/cp.component';

import { AdhomeComponent } from './components/cp/ad-home/adhome.component';
import { AdParticipantsInfoComponent } from './components/cp/ad-participants-info/ad-participants-info.component';
import { AdCheckinInfoComponent } from './components/cp/ad-checkin-info/ad-checkin-info.component';
import { AdOverviewComponent } from './components/cp/ad-overview/ad-overview.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    CpComponent,
    AdhomeComponent,
    TolocaltimePipe,
    CheckattendencePipe,
    HumanizetimePipe,
    HomeComponent,
    ClientcheckinComponent,
    AdParticipantsInfoComponent,
    AdCheckinInfoComponent,
    AdOverviewComponent,
    DatetimepickerComponent
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
