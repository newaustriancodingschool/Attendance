import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'textBold'
})
export class TextBoldPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: any, args?: any): any {
    return /~/g.test(value) ? 
      this.sanitized.bypassSecurityTrustHtml(`<span style="font-weight: 700; font-size: 11px;">${value}</span>`) :
      `<span>${value}</span>`;
  }

}
