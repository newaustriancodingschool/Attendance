import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { FormGroup } from '@angular/forms';
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { FormsService , ValidatorsService } from '../../../_services/_functions/forms';
import { GlobalDataService } from '../../../_services/globaldata.service';

// Interface model
import { Participant } from '../../../_interfaces/interfaces.interface';

declare var $: any, window: any;
@Component({
  selector: 'app-ad-participants-info',
  templateUrl: './ad-participants-info.component.html',
  styleUrls: ['./ad-participants-info.component.css'],
  providers: [ RequestsService, FormsService]
})
export class AdParticipantsInfoComponent implements OnInit {
    
    // Type of modal
    modalType: string;
  peopleReportLoaded:boolean = false;
  peopleDate: Array<Participant>;

  updatePersonData: FormGroup;
  updateRowID: number;
  fieldsAreReady: boolean = false
  formArray: Array<any>;
  isDisable: boolean = true;

    //   Related to delete section
    participantInfo: any;
  constructor(
    private AR: ActivatedRoute,
    private fs: FormsService,
    private gs: GlobalDataService,
    private funs:FunctionsService,
    private ar: ActivatedRoute,
    private router: Router,
    private req:RequestsService) { }

  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
    this.formArray = [
        {key: 'id', defaultValue: '-1'},
        {key: 'name', defaultValue: '', validators: [ValidatorsService.required()] },
        {key: 'email', defaultValue: '', validators: [ValidatorsService.required()] },
        {key: 'slackHandle', defaultValue: ''},
        {key: 'uid', defaultValue: '', validators: [ValidatorsService.required()]}
    ];
    this.updatePersonData = this.fs.group(this.formArray);
    this.fieldsAreReady = true;

    this.req.getPeople().subscribe(
    (res: any) => {
        this.peopleDate = res._embedded.people;
        this.gs.pushDate('peopleData', this.peopleDate);
        this.peopleReportLoaded = true;
    },
    err => {
        this.funs.notify({
            type: 'danger',
            icon: 'fa fa-exclamation-triangle',
            title: 'Errer',
            message: err
        });
    });
  }

  changePersonStatus(participantData: Participant, index: number) {
    this.req.changeParticipantStatus(participantData.uid).subscribe(
        (res: any) => {
            this.funs.showSuccessNote('Participant status changed successfully!');
            this.peopleDate[index] = res;
        },
        err => {
            this.funs.showErrorNote(err);
        }
    );
  }
  updatePersonInfo(participantData: Participant, index: number) {
      this.modalType = 'updateUserInfo';
      this.updateRowID = index;
      this.updatePersonData = this.fs.update(this.updatePersonData, [
            { key: 'id' , defaultValue: participantData.id},
            { key: 'name' , defaultValue: participantData.name},
            { key: 'email', defaultValue: participantData.email},
            { key: 'slackHandle', defaultValue: participantData.slackHandle},
            { key: 'uid', defaultValue: participantData.uid}
        ]);
  }
  sendNewPersonInfo(values: Participant, isValid) {
      if (isValid) {
        $('#updateUSerInfo').modal('hide');
        this.req.updateStudentInfo(values).subscribe(
            (res: any) => {
                let newPersonData = res;
                this.peopleDate[this.updateRowID] = newPersonData;
                $('#callModal').modal('hide');
            },
            err => {
                this.funs.showErrorNote(err);
        });
      }
  }

//   Related to delete section
  showConfirmDeleteMSG(participantData: Participant, index: number) {
    this.modalType = 'deleteUserInfo';
    this.participantInfo = participantData;
    this.participantInfo['index'] = index;
  }
  DeletePersonInfo() {
    this.req.deleteParticipant(this.participantInfo.uid).subscribe(
        res => {
            this.funs.showSuccessNote('Participant has been deleted successfully!');
            this.peopleDate.splice(this.participantInfo.index, 1);
            $('#callModal').modal('hide');
        },
        err => {
            this.funs.showErrorNote(err);
        });
  }

}
