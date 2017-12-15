import { Component, EventEmitter, OnInit, Input, Output, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any, moment: any, window: any;
@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() classid;
  @Output() onDatePickerChange = new EventEmitter<any>();
  dp: any;
  constructor() { }

  ngOnInit() {  }
  ngAfterViewInit(){
    this.dp = $('#'+this.classid+'-datepicker').datetimepicker({
      format: 'YYYY-MM',
      viewMode: 'months',
      defaultDate: window.moment(new Date()).format('YYYY-MM')
    });
    this.dp.on("dp.hide", (e)=>{
      this.onDatePickerChange.emit(e.date);
    });
  }
  ngOnDestroy() {
    this.dp.data('DateTimePicker').destroy();
  }

}
