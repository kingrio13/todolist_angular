import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ListData } from '../model/list.model';
import { ListsService } from './lists.service';



import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private ListService:ListsService,
    private route:ActivatedRoute,
    private router:Router,
    ) { }

  faPen=faPen;
  faTrash=faTrash;
  filterStatus='';
  edit_active:boolean=false;
  page_status:string='all';
  todolists:ListData[]=[];
  pagetitle:string;
  

  ngOnInit(): void {

  this.page_status=this.route.snapshot.url[0].path;    



  if(this.page_status==='completed'){
    //completed 
    this.filterStatus='completed';
    this.pagetitle='Completed Todo List';
  }
  else if(this.page_status==='active'){
    //active
    this.filterStatus='active';
    this.pagetitle='All Active List';
   
  }else{
    //all
    this.filterStatus='';
    this.pagetitle = 'Complete and Active List';
  }

  this.todolists = this.ListService.getList();  
  this.ListService.todolistChange.subscribe(
    (todolist)=>{this.todolists = todolist}
  )






  }

  onStatus(i:number, event:any){
    
    
    if(event.target.checked){
      event.target.classList.add('ischecked');
      event.target.nextElementSibling.classList.add('ischecked');
      event.target.nextElementSibling.nextElementSibling.classList.add('ischecked');
      this.ListService.statusListActive(i);
    }
    else{
      console.log('unchecked');
      event.target.className="";
      event.target.nextElementSibling.className="";
      event.target.nextElementSibling.nextElementSibling.className="";
      this.ListService.statusListComplete(i);
    }

    
  }

  onEdit(i:number){


    this.router.navigate(['todo/'+i+'/edit']);
  
    //console.log(this.ListService.getSpecificList(i));

  }



  onDelete(i:number){
    this.ListService.removeList(i);
  }





}
