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
<<<<<<< HEAD
  }

  // For Participant time update.
  getParticipantTimes(uid: string, date: string) {
    return this.funs.makeRequest(`checks/${uid}/${date}`, 'Get');
=======
>>>>>>> 996e5ad61bc8760405315df1509e68e2418dc848
  }
  getCheckin(checkinID=''){
    return this.funs.makeRequest('checkins/search/findByOrderByTimeDesc/' + checkinID + '?projection=log', 'Get');
  }
  updateStudentInfo(data){
    return this.funs.makeRequest('people/' + data.id, 'Put', data);
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
  // Update Participant Time
  updateParticipantTime(id: number , UpdatecheckinData: any) {
    return this.funs.makeRequest('checkins/' + id + '?projection=log', 'Patch', UpdatecheckinData);
  }
}
