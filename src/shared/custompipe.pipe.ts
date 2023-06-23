import { Pipe, PipeTransform } from '@angular/core';

//decoratoe class
@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value:number): number {
    return value * value * value;
  }

}
