import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { AppComponent } from './app.component';

// Admin Page Components
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/reports/reports.component';
import { AdhomeComponent } from './components/cp/adhome/adhome.component';
import { TolocaltimePipe } from './_services/tolocaltime.pipe';
import { CheckattendencePipe } from './_services/checkattendence.pipe';
import { HumanizetimePipe } from './_services/humanizetime.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CpComponent,
    ReportsComponent,
    AdhomeComponent,
    TolocaltimePipe,
    CheckattendencePipe,
    HumanizetimePipe
  ],
  imports: [
    APP_ROUTES_PROVIDER,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
