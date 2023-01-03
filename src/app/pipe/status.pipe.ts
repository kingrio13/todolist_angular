import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, filterStatus: string, propName:string): any {
    
    if (value.length===0 || filterStatus === ''){
      return value;
    }


    const resultArray=[];
    for( const list of value){
        if(list[propName] === filterStatus){
            resultArray.push(list);   
        }
    }
    return resultArray;
  }

}
