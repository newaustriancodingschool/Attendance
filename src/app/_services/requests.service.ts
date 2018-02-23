import { Injectable } from '@angular/core';
import { FunctionsService } from './_functions/functions.service';

@Injectable()
export class RequestsService {
  constructor(private funs: FunctionsService) {  }
  // Admin http requests
  getPeople(userID: string =''){
      return this.funs.makeRequest('people/'+userID+'?size='+75, 'Get');
  }
  // Admin http requests for deleting participant
  changeParticipantStatus(uid: string) {
      return this.funs.makeRequest(`people/${uid}/toggle`, 'Put');
  }
  getCheckin(checkinID=''){
    return this.funs.makeRequest('checkins/search/findByOrderByTimeDesc/'+checkinID+'?projection=log', 'Get');
  }
  updateStudentInfo(data){
    return this.funs.makeRequest('people/'+data.id, 'Put', data);
  }
  deleteParticipant(uid: string) {
    return this.funs.makeRequest('people/' + uid + '/delete', 'Delete');
  }
  // client http requests
  getCheckerInfo() {
    return this.funs.makeRequest('public/summary', 'Get');
  }

  // Overview end-point request
  getOverviewInfo(date: string) {
    return this.funs.makeRequest('overview/' + date, 'Get');
  }
}
