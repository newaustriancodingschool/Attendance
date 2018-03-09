import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { HumanizetimePipe } from '../../../_services/humanizetime.pipe';

// Interfaces
import { ClientCheckin } from '../../../_interfaces/interfaces.interface';

declare var $: any, window: any;
@Component({
  selector: 'app-clientcheckin',
  templateUrl: './clientcheckin.component.html',
  styleUrls: ['./clientcheckin.component.css'],
  providers: [ RequestsService ]
})
export class ClientcheckinComponent implements OnInit, OnDestroy {
  // isLoaded: Boolean = false;
  checkerSummary: any;
  iteration: any;
  updateCounter: number = 10;
  table: any;
  isRefreshing: boolean = false;
  constructor(
    private AR: ActivatedRoute,
    private router: Router,
    private funs: FunctionsService,
    private req: RequestsService
  ) { }

  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
    this.table = $('#participant-check-in').DataTable({
        responsive: false,
        pageLength: 50,
        order: [ [1, 'desc'], [2, 'asc'] ],
        columns: [
          { title: 'Status', data: 'checkedIn' },
          { title: 'Last activity', data: 'lastDuration' },
          { title: 'Name', data: 'name' },
          { title: 'Attendance per week', data: 'weekDuration' }
        ],
        columnDefs: [
          {
            className: 'checkerStatus',
            render: (data, type) => {
                      if (type === 'display' || type === 'filter') {
                        return (data) ? `<div class="active"
                        style="width: 18px;
                        height: 18px;
                        margin: auto;
                        border: 1px solid green;
                        background: greenyellow;
                        border-radius: 50%;"></div>` : `<div class="notActive"
                        style="width: 18px;
                        height: 18px;
                        margin: auto;
                        border: 1px solid black;
                        background: #333;
                        border-radius: 50%;"></div>`;
                      }
                      return data;
                  },
            targets: 0
          },
          {
            render: (data, type) => {
            if (type === 'display' || type === 'filter') {
              if (data) {
                  return window.moment.duration(data).humanize();
                }
                return 'Never';
              }
              return data;
            },
            targets: 1
          },
          {
            render: (data, type) => {
              data = Math.floor(window.moment.duration(data).asHours());
              if (type === 'display' || type === 'filter') {
                switch (true) {
                  case ( data >= 40 ):
                    return `<img width="20px" height="20px" src="./assets/img/emojis/Relieved_Emoji.png">`;
                  case ( data >= 45 ):
                    return `<img width="20px" height="20px" src="./assets/img/emojis/Smiling_Face_Emoji_with_Blushed_Cheeks.png">`;
                  case ( data >= 48 ):
                    return `<img width="20px" height="20px" src="./assets/img/emojis/Heart_Eyes_Emoji.png">`;
                  case ( data >= 50 ):
                    return `<img width="20px" height="20px" src="./assets/img/emojis/Hushed_Face_Emoji.png">`;
                  default:
                    return data + ' Hour(s)';
                }
              }
              return data;
            },
            targets: 3
        }]

    });
    this.checkerStatus();
    // this.Update();
  }
  ngOnDestroy() {
    // clearInterval(this.iteration);
    this.table.destroy();
  }
  checkerStatus() {
    this.isRefreshing = true;
    this.req.getCheckerInfo().subscribe(
      (res) => {
        this.isRefreshing = false;
        this.DrawTable(res);
      },
      err => {
        this.router.navigate(['login']);
        this.funs.notify({
            type: 'danger',
            icon: 'fa fa-exclamation-triangle',
            title: 'Error',
            message: 'Something went wrong!'
        });
      });
  }
  DrawTable(arrObjects) {
    // tslint:disable-next-line:prefer-const
    for (let id in arrObjects) {
      if (arrObjects[id]['lastDuration']) {
        arrObjects[id]['lastDuration'] = window.moment.duration( arrObjects[id]['lastDuration'] ).asMilliseconds();
      }
    }
    this.table.clear().draw();
    this.table.rows.add(arrObjects); // Add new data
    this.table.columns.adjust().draw(); // Redraw the DataTable
  }
  Update() {
    // this.iteration = setInterval( () => {
    //   if (this.updateCounter === 0) {
    //     this.updateCounter = 10;
        this.checkerStatus();
    //   } else {
    //     this.updateCounter--;
    //   }
    // }, 1000);
  }

}
