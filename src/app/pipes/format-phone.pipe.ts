import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return   value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6, 10);
  }

}
