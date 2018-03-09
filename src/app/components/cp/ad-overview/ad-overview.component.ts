import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Pipes
import { TolocaltimePipe } from '../../../_services/tolocaltime.pipe';
import { CheckattendencePipe } from '../../../_services/checkattendence.pipe';
import { TextBoldPipe } from '../../../_pipes/text-bold.pipe';

// Services
import { FunctionsService } from '../../../_services/_functions/functions.service';
import { RequestsService } from '../../../_services/requests.service';
import { GlobalDataService } from '../../../_services/globaldata.service';

declare var $: any, window: any;
@Component({
  selector: 'app-ad-overview',
  templateUrl: './ad-overview.component.html',
  styleUrls: ['./ad-overview.component.css'],
  providers: [ RequestsService ]
})
export class AdOverviewComponent implements OnInit {

  isOverviewLoaded: boolean = false;
  currentMonth: string = window.moment(new Date()).format('YYYY-MM');
  overviewData: any;
  classid: string = 'months';
  dataPickerFormat: string = 'YYYY-MM';
  constructor(
    private AR: ActivatedRoute,
    public gs: GlobalDataService,
    private funs: FunctionsService,
    private req: RequestsService
  ) { }

  ngOnInit() {
    this.funs.pageTitle( this.AR ); // Change page tab title
    this.getOverviewInfo(this.currentMonth);
  }

  getOverviewInfo(date: string) {
    this.isOverviewLoaded = false;
    this.req.getOverviewInfo(date).subscribe(
      res => {
        this.overviewData = res;
        this.isOverviewLoaded = true;
      },
      err => {
        this.funs.notify({
            type: 'danger',
            icon: 'fa fa-exclamation-triangle',
            title: 'Error',
            message: err.json()
        });
    });
  }

  getRecords(e) {
    this.getOverviewInfo( e.format('YYYY-MM') );
  }

  savePDF(e) {
    const pdf = new window.jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a3'}
    );
    const columns = [], rows = [];
    let rowObj,
    colLen = this.overviewData.columns.length;
    columns.push( {title: "ID", dataKey: "id"} );
    columns.push( {title: "Names", dataKey: "names"} );

    this.overviewData.columns.forEach( (element, i) => {
      columns.push( {title: element, dataKey: element} );
    });

    this.overviewData.attendance.forEach( (col, index) => {
      rowObj = {};
      rowObj['id'] = index + 1;
      rowObj['names'] = col.name;
      for (let n = 0; n < colLen; n++) {
        rowObj[ columns[n + 2]['dataKey'] ] = col.durations[n];
      }
      rows.push( rowObj );
    });

    pdf.autoTable(columns, rows, {
        styles: {
          theme: 'striped',
          fontSize: 10,
          overflow: 'linebreak',
          columnWidth: 'wrap'
        },
        columnStyles: {
          names: { columnWidth: 40, overflow: 'linebreak'}
        },
        margin: {top: 40},
        addPageContent: (data) => {
          pdf.text(
            "Attendance report for: " + this.overviewData.yearMonth,
            data.settings.margin.left + 27, 22);
          pdf.text(
            "Note: Default paper is A3 because of big table",
            data.settings.margin.left, 37);
          pdf.text("© Refugees{Code} " + window.moment(new Date).format('DD-MMM-YYYY'),
          data.settings.margin.left,
          pdf.internal.pageSize.height - 10);
        },
        createdCell: (cell, data) => {
          cell.styles.halign  = 'right';
          if (data.column.dataKey.indexOf('w') > -1 ) {
             cell.styles.fillColor = [41, 128, 168];
             cell.styles.textColor = [255, 255, 255];
             cell.styles.fontStyle  = 'bold';
          }
      }
    });
    const img = new Image;
    img.src = './assets/img/logo/logo.png';
    img.onload = () => {
      pdf.addImage(img, 'PNG', 11, 11, 27, 20);
      pdf.save('attendance(RC)-' + this.overviewData.yearMonth + '.pdf');
    };
    return false;
  }

}
