import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ListData } from '../model/list.model';




@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

private todolist:ListData[]=[
  new ListData('title of task','Task Descriptions data','active'),
  new ListData('tasker2','wewazxc','completed'),
  new ListData('task3','zzzz','active')
];



todolistChange = new Subject<ListData[]>();



getList(){
  return this.todolist.slice();
}


getSpecificList(index:number){
  return this.todolist[index];
}

addList(list:ListData){
  this.todolist.push(list);
  this.todolistChange.next(this.todolist.slice());
}

statusListActive(index:number){
  this.todolist[index].status='completed';
  this.todolistChange.next(this.todolist.slice());
  
}

statusListComplete(index:number){
  this.todolist[index].status='active';
  this.todolistChange.next(this.todolist.slice());
  
}

updateList(listindex:number, list:ListData){
//get the index number then add the list
this.todolist[listindex]=list;
this.todolistChange.next(this.todolist.slice());
}

removeList(index:number){
   this.todolist.splice(index,1);
    this.todolistChange.next(this.todolist.slice());
}




}
