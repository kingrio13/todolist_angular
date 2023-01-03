import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ListData } from 'src/app/model/list.model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private listService:ListsService,
  ) { }

  editmode:boolean=false;
  id:number;
  list:ListData;
  listForm:FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = + params['id'];
      this.editmode=params['id'] !=null;
      this.initForm();
    });
  }

initForm(){
  let ltitle="", ldesc="";

  if(this.editmode){

        const lists=this.listService.getSpecificList(this.id);
        console.log("mike",lists);
      
        ltitle = lists.title;
        ldesc = lists.description;
       
  }

   
  this.listForm = new FormGroup({
    'ltitle':new FormControl(ltitle, Validators.required),
    'ldesc':new FormControl(ldesc, Validators.required)
});

  
}

onSubmit(){

  const list = new ListData(
    this.listForm.value['ltitle'],
    this.listForm.value['ldesc'],
    'active'
);

  if(this.editmode){
      this.listService.updateList(this.id,list);
    }
  else{       
      this.listService.addList(list);
  }


  
  this.router.navigate(['/todo']);

}


onCancel(){  
    this.router.navigate(['/todo']);
}


}
