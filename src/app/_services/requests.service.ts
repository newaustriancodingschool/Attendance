import { Injectable } from '@angular/core';
import { FunctionsService } from './_functions/functions.service';

@Injectable()
export class RequestsService {
  constructor(private funs: FunctionsService) {  }

  getPeople(userID=''){
      return this.funs.makeRequest('people/'+userID, 'Get');
  }
  getCheckin(checkinID=''){
    return this.funs.makeRequest('checkins/'+checkinID, 'Get');
  }
  
}
