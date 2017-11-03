import { Component, OnInit, OnDestroy } from '@angular/core';
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';

@Component({
  selector: 'app-clientcheckin',
  templateUrl: './clientcheckin.component.html',
  styleUrls: ['./clientcheckin.component.css'],
  providers: [ FunctionsService, RequestsService ]
})
export class ClientcheckinComponent implements OnInit,OnDestroy {
  isLoaded:boolean = false;
  checkerSummary:any;
  iteration:any;
  constructor(private funs: FunctionsService, private req: RequestsService) { }

  ngOnInit() {
    this.checkerStatus();
    this.iteration = setInterval( this.checkerStatus.bind(this), 10000);
  }
  checkerStatus(){
    this.req.getCheckerInfo().subscribe(
      res=>{
        var respond = res.json();
        respond.sort(function(x, y) {
            // true values first
            return (x.checkedIn === y.checkedIn)? 0 : x.checkedIn? -1 : 1;
            // false values first
            // return (x === y)? 0 : x? 1 : -1;
        });
        this.checkerSummary = respond;
      },
      err=>{
        this.funs.notify({
            type: 'danger',
            icon: 'fa fa-exclamation-triangle',
            title: 'Errer',
            message: "Somthing went wrong!"
        });
      });
  }
  ngOnDestroy(){
    clearInterval(this.iteration);
  }

}
