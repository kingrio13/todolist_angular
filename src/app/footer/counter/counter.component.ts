import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/list/lists.service';
import { ListData } from 'src/app/model/list.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  constructor(private listService:ListsService) { }

  numtask:number;
  statusCounter:'';
  task:string='task';
  todolists:ListData[]=[];


  ngOnInit(): void {
    this.numtask=this.listService.getList().filter(x=> x.status=='active').length;
    
    this.listService.todolistChange.subscribe(
      (todolist)=>{   
       this.numtask=this.numtask=this.listService.getList().filter(x=> x.status=='active').length;
      }
    )

    
    
  
  }

}
