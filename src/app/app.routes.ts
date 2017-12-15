import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// Pages components
import { CpComponent } from './components/cp/cp.component';
import { LoginComponent } from './components/login/login.component';
import { AdhomeComponent } from './components/cp/ad-home/adhome.component';
import { HomeComponent } from './components/home/home.component';
import { ClientcheckinComponent } from './components/home/clientcheckin/clientcheckin.component';

import { AdParticipantsInfoComponent } from './components/cp/ad-participants-info/ad-participants-info.component';
import { AdCheckinInfoComponent } from './components/cp/ad-checkin-info/ad-checkin-info.component';
import { AdOverviewComponent } from './components/cp/ad-overview/ad-overview.component';

let myTitle:string = 'Attendance-';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: ClientcheckinComponent, data: { title: myTitle+' Home Page'} }
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: CpComponent, children: [
    {path: '', component: AdhomeComponent, data: { title: myTitle+' Admin-Panel'}},
    {path: 'overview', component: AdOverviewComponent, data: { title: myTitle+' Overview'} },
    {path: 'checkin', component: AdCheckinInfoComponent, data: { title: myTitle+' checkin'} },
    {path: 'participants', component: AdParticipantsInfoComponent, data: { title: myTitle+' articipants'} }
  ]}
];

export const APP_ROUTES_PROVIDER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
