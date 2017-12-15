import { Component, OnInit } from '@angular/core';
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import "rxjs/Rx";

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var $: any, window: any;
@Component({
  selector: 'app-ad-overview',
  templateUrl: './ad-overview.component.html',
  styleUrls: ['./ad-overview.component.css'],
  providers: [ FunctionsService, RequestsService ]
})
export class AdOverviewComponent implements OnInit {
  
  isOverviewLoaded: boolean = false;
  currentMonth: string = window.moment(new Date()).format('YYYY-MM');
  overviewData: any;
  classid: string = 'months';
  isLoading: boolean = false;
  constructor(public gs: GlobalDataService, private funs: FunctionsService, private req: RequestsService) { }

  ngOnInit() {
    this.getOverviewInfo(this.currentMonth);
  }

  getOverviewInfo(date: string) {
    this.isLoading = true;
    this.req.getOverviewInfo(date).subscribe(
      res => {
        this.overviewData = res.json();
        this.isOverviewLoaded = true;
        this.isLoading = false;
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

  getRecords(e) {
    this.getOverviewInfo( e.format('YYYY-MM') );
  }

}
