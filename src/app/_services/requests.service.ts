import { Injectable } from '@angular/core';
import { FunctionsService } from './_functions/functions.service';

@Injectable()
export class RequestsService {
  constructor(private funs: FunctionsService) {  }
  // Admin http requests
  getPeople(userID=''){
      return this.funs.makeRequest('people/'+userID+'?size='+75, 'Get');
  }
  getCheckin(checkinID=''){
    return this.funs.makeRequest('checkins/'+checkinID+'?projection=log', 'Get');
  }
  updateStudentInfo(data){
    return this.funs.makeRequest('people/'+data.id, 'Put', data);
  }
  // client http requests
  getCheckerInfo(){
    return this.funs.makeRequest('public/summary', 'Get');
  }
  
}
