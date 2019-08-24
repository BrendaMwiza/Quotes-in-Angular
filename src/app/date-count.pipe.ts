import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todaysTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var day = Math.abs(value - todaysTime) 
    const daysSec = 86400;
    var sec = day*0.001; 
    var dayCount = sec/daysSec;

    if (dayCount >= 1 && value > todaysTime){
      return dayCount;
    }else{
      return dayCount;
    }
  }

}
