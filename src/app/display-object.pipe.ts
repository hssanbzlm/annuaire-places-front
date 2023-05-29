import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './Interfaces/category';
import { Country } from './Interfaces/country';

@Pipe({
  name: 'displayObject',
})
export class DisplayObjectPipe implements PipeTransform {
  transform(value: any): unknown {
    if (value instanceof Object) {
      if ('name' in (value as Category)) {
        return value.name;
      } else if ('name' in (value as Country)) {
        return value.name;
      }
    }

    return value;
  }
}
