import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDuration'
})
export class CalcDurationPipe implements PipeTransform {

  transform(timeInSeconds: number, duration: number): number {
    return timeInSeconds + duration;
  }

}
