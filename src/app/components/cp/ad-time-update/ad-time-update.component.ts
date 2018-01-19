import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Pipes
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import { TextBoldPipe } from '../../../_pipes/text-bold.pipe';

// Services
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { FormsService, ValidatorsService } from '../../../_services/_functions/forms';

declare var window: any;
@Component({
  selector: 'app-ad-time-update',
  templateUrl: './ad-time-update.component.html',
  styleUrls: ['./ad-time-update.component.css'],
  providers: [ RequestsService, FormsService ]
})
export class AdTimeUpdateComponent implements OnInit {
  isParticipantNamesLoaded: boolean = false;
  peopleDate: Array<any>;
  classid: string = 'date-picker';
  currentDate: string = window.moment(new Date()).format('YYYY-MM-DD');
  dataPickerFormat: string = 'YYYY-MM-DD';
  updateTimeForm: FormGroup;
  constructor(private fs: FormsService, private req: RequestsService, private funs: FunctionsService) { }

  ngOnInit() {
    this.updateTimeForm = this.fs.group([
      {key: 'id', defaultValue: '-1', validators: [ValidatorsService.required()]},
      {key: 'date', defaultValue: this.currentDate, validators: [ValidatorsService.required()] }
    ]);
    this.req.getPeople('').subscribe(
      res => {
          // this.funs.showSuccessNote('Participant status changed successfully!');
          this.isParticipantNamesLoaded = true;
          this.peopleDate = res.json()._embedded.people;
          console.log(this.peopleDate);
      },
      err => {
          this.funs.showErrorNote(err.json());
      });
  }
  getParticipants(e) {
    this.updateTimeForm = this.fs.update(this.updateTimeForm, {date: e.format('YYYY-MM-DD')});
  }

  updateTime(data, isValid) {
    console.log(data);
    if (isValid) {

    }
  }
}
