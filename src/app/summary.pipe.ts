import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(description: string, args?: any): any {
    if (!description) {
      return null;
    }
    return description.substr(0, 150) + '...';
  }

}
