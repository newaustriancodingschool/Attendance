import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// Pages components
import { CpComponent } from './components/cp/cp.component';
import { ReportsComponent } from './components/cp/reports/reports.component';
import { AdhomeComponent } from './components/cp/adhome/adhome.component';

let myTitle:string = 'Attendance-';

const APP_ROUTES: Routes = [ 
  {path: 'admin', component: CpComponent, children: [
    {path: '', component: AdhomeComponent, data: { title: 'Admin-Panel'}},
    {path: 'reports', component: ReportsComponent, data: { title: 'Admin-Reports'}},
  ]}
];

export const APP_ROUTES_PROVIDER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
