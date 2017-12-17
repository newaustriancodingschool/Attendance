import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

// Services
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { FormsService , ValidatorsService } from '../../../_services/_functions/forms';
import { GlobalDataService } from '../../../_services/globaldata.service';

// Pipes
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';
// import "rxjs/Rx";

declare var $: any;
@Component({
  selector: 'app-ad-checkin-info',
  templateUrl: './ad-checkin-info.component.html',
  styleUrls: ['./ad-checkin-info.component.css'],
  providers: [ RequestsService ]
})
export class AdCheckinInfoComponent implements OnInit {
  checkInReportLoaded:boolean = false;
  checkinsData:any;

  checkinDate:any;
  fieldsAreReady: boolean = false
  formArray: Array<any>;
  constructor(
    private AR: ActivatedRoute,
    private gs: GlobalDataService,
    private funs: FunctionsService,
    private ar: ActivatedRoute,
    private router: Router,
    private req:RequestsService ) { }
  
  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
    this.fieldsAreReady = true;
    this.req.getCheckin().subscribe(res => {
            this.checkinsData = res.json()._embedded.checkins;
            this.gs.pushDate('checkinsData', this.checkinsData);
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
