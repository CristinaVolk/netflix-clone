import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return `${value.substring(0, length)}...`;
  }

}
