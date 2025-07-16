import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'new'
})
export class NewPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let values = value.split('');
    return values[0][0] + values[9][0];
  }

}
