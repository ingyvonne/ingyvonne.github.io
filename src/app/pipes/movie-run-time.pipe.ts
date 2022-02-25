import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieRunTime'
})
export class MovieRunTimePipe implements PipeTransform {

  transform(runtime: number): string {
    const hour = Math.trunc(runtime / 60);
    const minutes = (runtime % 60);
    if (minutes < 10) {
      return hour + 'h 0' + minutes + 'm';
    } else {
      return hour + 'h ' + minutes + 'm';
    }
  }

}
