import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';

declare var $: any, window: any;
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
  updateCounter: number = 10;
  table: any;
  constructor(private router: Router, private funs: FunctionsService, private req: RequestsService) { }

  ngOnInit() {
    this.table = $('#participant-check-in').DataTable({
        responsive: true,
        pageLength: 50,
        order: [ [1, 'desc'], [2, 'asc'] ],
        columns: [
          { title: "#", data: "#" },
          { title: "Status", data: "checkedIn" },
          { title: "Duration", data: "lastDuration" },
          { title: "Name", data: "name" }
        ],
        columnDefs: [
          {
            className: "checkerStatus",
            render: (data, type) => {
                      if(type === 'display' || type === 'filter'){
                        return (data) ? `<div class="active"
                        style="width: 15px;
                        height: 15px;
                        border: 1px solid green;
                        background: greenyellow;
                        border-radius: 50%;"></div>` : `<div class="notActive" 
                        style="width: 15px;
                        height: 15px;
                        border: 1px solid black;
                        background: #333;
                        border-radius: 50%;"></div>`;
                      }
                      return data;
                  },
                targets: 1
              }, {
                render: (data, type) => {
                  if(type === 'display' || type === 'filter'){
                    if (data) {
                        return window.moment.duration(data).humanize();
                    }
                    return 'Never';
                  }
                  return data;
                },
                targets: 2
              }]

    });
    this.checkerStatus();
    this.startCounting();
  }
  checkerStatus(){
    this.req.getCheckerInfo().subscribe(
      res=>{
        var respond = res.json();
        // respond.sort(function(x, y) {
        //     // true values first
        //     return (x.checkedIn === y.checkedIn)? 0 : x.checkedIn? -1 : 1;
        //     // false values first
        //     // return (x.checkedIn === y.checkedIn)? 0 : x.checkedIn? 1 : -1;
        // });
        this.DrawTable(respond);
        
        // $('#participant-check-in').DataTable();
      },
      err=>{
        this.router.navigate(['login']);
        this.funs.notify({
            type: 'danger',
            icon: 'fa fa-exclamation-triangle',
            title: 'Errer',
            message: "Somthing went wrong!"
        });
      });
  }
  DrawTable(arrObjects: Array<any>){
    // let newArray = [];
    let index = 0;
    for (let id in arrObjects) {
      if(arrObjects[id]['lastDuration']){
        arrObjects[id]['lastDuration'] = window.moment.duration( arrObjects[id]['lastDuration'] ).asMilliseconds();
        arrObjects[id]['#'] = ++index;
      }
    }
    this.table.clear().draw();
    this.table.rows.add(arrObjects); // Add new data
    this.table.columns.adjust().draw(); // Redraw the DataTable
    
    // $('#participant-check-in').DataTable({
    //   data: arrObjects,
    //   columns: [
    //     {title: "Status", data: "checkedIn"},
    //     {title: "Duration", data: "lastDuration"},
    //     {title: "Name", data: "name"}
    //   ]
    // });
  }
  startCounting(){
    this.iteration = setInterval( ()=>{
      if(this.updateCounter == 0){
        this.updateCounter = 10;
        this.checkerStatus();
      }else{
        this.updateCounter--;
      }
    }, 1000);
  }
  ngOnDestroy(){
    clearInterval(this.iteration);
    this.table.destroy();
  }

}
