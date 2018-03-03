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
  @Input() dateFormat: string;
  @Input() startDate: any = null;
  dp: any;
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.startDate = this.startDate ? this.startDate : (new Date());
    this.dp = $('#' + this.classid + '-datepicker').datetimepicker({
      format: this.dateFormat,
      viewMode: 'months',
      defaultDate: window.moment(this.startDate).format('YYYY-MM-DD HH:mm')
    });
    this.dp.on("dp.hide", (e) => {
      this.onDatePickerChange.emit(e.date);
    });
  }
  ngOnDestroy() {
    this.dp.data('DateTimePicker').destroy();
  }

}
