import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// Pages components
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/adreports/reports.component';
import { LoginComponent } from './components/login/login.component';
import { AdhomeComponent } from './components/cp/adhome/adhome.component';
import { HomeComponent } from './components/home/home.component';
import { ClientcheckinComponent } from './components/home/clientcheckin/clientcheckin.component';

let myTitle:string = 'Attendance-';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: ClientcheckinComponent, data: { title: 'Home Page'} }
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: CpComponent, children: [
    {path: '', component: AdhomeComponent, data: { title: 'Admin-Panel'}},
    {path: 'reports', component: ReportsComponent, data: { title: 'Admin-Reports'}},
  ]}
];

export const APP_ROUTES_PROVIDER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
