import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    let resultArray=[];
    let tempSortName=[];
    for(let item of value){
      tempSortName.push(item.name);
    }
    tempSortName.sort();
    console.log(tempSortName);

    for (let name of tempSortName){
      for (let item of value){
        console.log(item.name);
        console.log(name);
        if(item.name ==name)
        
        resultArray.push(item);
      }
    }
    return resultArray;
  }
    
}


