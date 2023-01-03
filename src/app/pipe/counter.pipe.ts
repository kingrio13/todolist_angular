import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: any, statusCounter: string): any {


   if(value>1){
      statusCounter=value + ' Tasks Left';
   } else if(value==0){
      statusCounter='Congratulations!, No Task Left';
   } else{
    statusCounter=value + ' Task Left';
   }    

    return statusCounter;
  }

}
