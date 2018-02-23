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

// Interface
import { Participant, AdminCheckin } from '../../../_interfaces/interfaces.interface';

declare var window: any, $: any;
@Component({
  selector: 'app-ad-time-update',
  templateUrl: './ad-time-update.component.html',
  styleUrls: ['./ad-time-update.component.css'],
  providers: [ RequestsService, FormsService ]
})
export class AdTimeUpdateComponent implements OnInit {
  // Show data picker in a format of 'YYYY-MM';
  dataPickerFormat: string = 'YYYY-MM';
  // Participant model
  peopleDate: Array<Participant>;
  // Related to the time
  participantTimes: Array<AdminCheckin>;
  isLoading: boolean = false;

  // current date
  currentDate: string = window.moment(new Date()).format('YYYY-MM');
  
  // Update time form group
  updateTimeForm: FormGroup;

  // New time picker format
  newPickerFormat: string = 'YYYY-MM-DD HH:mm';
  newUpdateForm = {
    newPickeTime: window.moment(new Date()).utc().format(),
    participantAuto: false,
    participantId: null,
    participantIndex: null
  };
  isUpdating: boolean = false;

  constructor(private fs: FormsService, private req: RequestsService, private funs: FunctionsService) { }

  ngOnInit() {
    this.updateTimeForm = this.fs.group([
      {key: 'uid', defaultValue: '', validators: [ValidatorsService.required()]},
      {key: 'date', defaultValue: this.currentDate, validators: [ValidatorsService.required()] }
    ]);
    this.req.getPeople('').subscribe(
      res => {
          this.isLoading = true;
          this.peopleDate = res.json()._embedded.people;
      },
      err => {
          this.funs.showErrorNote(err.json());
      });
  }

  getDatapickerDate(e) {
    this.updateTimeForm = this.fs.update(this.updateTimeForm, [{key: 'date', defaultValue: e.format('YYYY-MM')}]);
  }

  // Bring participants time of a specific month.
  bringParticipantTime(data, isValid) {
    if (isValid) {
      this.isLoading = false;
      this.req.getParticipantTimes(data.uid, data.date).subscribe(
        res => {
            this.participantTimes = res.json();
            this.isLoading = true;
        },
        err => {
            this.funs.showErrorNote(err.json());
        });
    }
  }

  pickedNewDate(e: any) {
    this.newUpdateForm.newPickeTime = e.format();
  }
  openModal(participantInfo: AdminCheckin, index: number) {
    this.newUpdateForm.participantAuto = participantInfo.auto;
    this.newUpdateForm.participantId = participantInfo.id;
    this.newUpdateForm.participantIndex = index;
  }
  updateTime() {
    let payload = {
      time: window.moment(this.newUpdateForm.newPickeTime).utc().format(),
      auto: this.newUpdateForm.participantAuto
    };
    this.isUpdating = true;
    this.req.updateParticipantTime(this.newUpdateForm.participantId, payload). subscribe(
      res => {
          this.isUpdating = false;
          this.funs.showSuccessNote('Participant check in time has been successfully updated!');
          this.participantTimes[this.newUpdateForm.participantIndex] = res.json();
          $('#callModal').modal('hide');
      },
      err => {
          this.funs.showErrorNote(err.json());
      });
  }
}
