import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import "rxjs/Rx";

import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
// import { AuthService } from '../../../_services/auth.service';
import { FormsService , ValidatorsService } from '../../../_services/_functions/forms';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var $: any, window: any;
@Component({
  selector: 'app-ad-participants-info',
  templateUrl: './ad-participants-info.component.html',
  styleUrls: ['./ad-participants-info.component.css'],
  providers: [FunctionsService, RequestsService, FormsService]
})
export class AdParticipantsInfoComponent implements OnInit {

  peopleReportLoaded:boolean = false;
  peopleDate:any;

  updatePersonData: FormGroup;
  updateRowID: number;
  fieldsAreReady: boolean = false
  formArray: Array<any>;
  constructor(
    private fs: FormsService,
    private gs: GlobalDataService,
    private funs:FunctionsService,
    private ar: ActivatedRoute,
    private router: Router,
    private req:RequestsService) { }

  ngOnInit() {
    this.formArray = [
        {"key":"id", "defaultValue":"-1"},
        {"key":"name", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"email", "defaultValue":"", "validators":[ValidatorsService.required()] },
        {"key":"slackHandle", "defaultValue":""},
        {"key":"uid", "defaultValue":"", "validators":[ValidatorsService.required()]}
    ]
    this.updatePersonData = this.fs.group(this.formArray);
    // this.updatePersonData = this.fs.addField(this.updatePersonData, "anothor", [ {"defaultValue":"", "validators":[ValidatorsService.required()]} ] );
    this.fieldsAreReady = true;

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
  }


  updatePersonInfo(data, index) {
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
  sendNewPersonInfo(values, isValid) {
      if (isValid) {
        $('#updateUSerInfo').modal('hide');
        this.req.updateStudentInfo(values).subscribe(
            (res) => {
                let newPersonData = res.json();
                this.peopleDate[this.updateRowID] = newPersonData;
            },
            (err) => {
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
