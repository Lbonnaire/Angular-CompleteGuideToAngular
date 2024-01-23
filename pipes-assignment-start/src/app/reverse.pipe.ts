import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string):  any{
    console.log(value);
    let newValue:string ='';
    for (let char of value){
      newValue=char+newValue;
    }
    return newValue;
  }

}
