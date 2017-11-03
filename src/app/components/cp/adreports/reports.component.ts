import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms';
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';
import "rxjs/Rx";

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
// import { AuthService } from '../../../_services/auth.service';
import { FormsService , ValidatorsService } from '../../../_services/_functions/forms';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var Chart:any, $:any, window:any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [FunctionsService, RequestsService, FormsService]
})
export class ReportsComponent implements OnInit {
  
  peopleReportLoaded:boolean = false;
  checkInReportLoaded:boolean = false;
  peopleDate:any;
  checkinsData:any;

  updatePersonData: FormGroup;
  updateRowID: number;
  checkinDate:any;
  
  constructor(private fs: FormsService, private gs: GlobalDataService, private funs:FunctionsService , private ar: ActivatedRoute, private router: Router, private req:RequestsService) { }
  
  ngOnInit() {
    this.updatePersonData = this.fs.group([
        {"key":"id", "defaultValue":"-1"},
        {"key":"name", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"email", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"slackHandle", "defaultValue":""},
        {"key":"uid", "defaultValue":"", "validators":[ValidatorsService.required()]}
    ]);
    this.req.getPeople().subscribe(res => {
            this.peopleDate = res.json()._embedded.people;
            this.gs.pushDate('peopleData', this.peopleDate);
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

  updatePersonInfo(data, index){
      $('#myModalLabel').text('Update user info');
      this.updateRowID = index;
      this.updatePersonData = this.fs.update(this.updatePersonData, [
            {"key":"id", "defaultValue":data.id},    
            {"key":"name", "defaultValue":data.name},
            {"key":"email", "defaultValue":data.email},
            {"key":"slackHandle", "defaultValue":data.slackHandle},
            {"key":"uid", "defaultValue":data.uid}
        ]);
  }
  sendNewPersonInfo(values, isValid){
      if(isValid){
          $('#updateUSerInfo').modal('hide');
          this.req.updateStudentInfo(values).subscribe(
              (res)=>{
                  let newPersonData = res.json();
                  this.peopleDate[this.updateRowID] = newPersonData;
              },
              (err)=>{
                this.funs.notify({
                    type: 'danger',
                    icon: 'fa fa-exclamation-triangle',
                    title: 'Errer',
                    message: err.json().message
                });
              });
      }

  }
  
}





