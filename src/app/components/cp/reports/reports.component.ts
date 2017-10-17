import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';
import "rxjs/Rx";

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
// import { AuthService } from '../../../_services/auth.service';
// import { GlobalDataService } from '../../../_services/globaldata.service';

declare var Chart:any, $:any, window:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [FunctionsService, RequestsService]
})
export class ReportsComponent implements OnInit {
  
  peopleReportLoaded:boolean = false;
  checkInReportLoaded:boolean = false;
  peopleDate:any;
  checkinsData:any;
  checkinDate:any;
  
  constructor(private funs:FunctionsService , private ar: ActivatedRoute, private router: Router, private req:RequestsService) { }
  
  ngOnInit() {
    this.req.getPeople().subscribe(res => {
            this.peopleDate = res.json()._embedded.people;
            this.peopleReportLoaded = true;
        },
        err => {
            this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json()
            });
        });
    this.req.getCheckin().subscribe(res => {
            this.checkinsData = res.json()._embedded.checkins;
            console.log(this.checkinsData);
            this.checkInReportLoaded = true;
        },
        err => {
            this.funs.notify({
                type: 'danger',
                icon: 'fa fa-exclamation-triangle',
                title: 'Errer',
                message: err.json()
            });
        });
  }
  
}





