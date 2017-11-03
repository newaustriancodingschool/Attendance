import { Pipe, PipeTransform } from '@angular/core';

declare var window: any;
@Pipe({
  name: 'humanizetime'
})
export class HumanizetimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return window.moment.duration(value).humanize();
    }
    return 'Never';
  }

}
