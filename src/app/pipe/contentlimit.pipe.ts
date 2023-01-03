import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentlimit'
})
export class ContentlimitPipe implements PipeTransform {

  transform(value: any, limit: number): any {

    if(value.length>limit){
      value = value.substring(0,limit);  
      value = value +'...';
    }
    
    

  

    return value;
  }

}
