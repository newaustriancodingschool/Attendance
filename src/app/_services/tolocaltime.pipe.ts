import { Pipe, PipeTransform } from '@angular/core';
declare var window:any;
@Pipe({
  name: 'tolocaltime'
})
export class TolocaltimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return window.moment(value).local().format("YYYY-MM-DD HH:mm:ss");
  }

}
