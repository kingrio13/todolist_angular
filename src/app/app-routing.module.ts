import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from './list/list.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';
import { ErrorMessageComponent } from './error-message/error-message.component';


const appRoutes:Routes=[
 {path:'', redirectTo:'/todo', pathMatch:'full'},
  {path:'create', component:ListEditComponent},
  {path:'todolist_angular', component:ListComponent},
   {path: 'todo', component: ListComponent,
    children: [
      {path: ':id', component: ListEditComponent,},
      {path: ':id/edit', component: ListEditComponent,},
    ]
  },

    {path: 'active', component: ListComponent,},
    {path: 'completed', component: ListComponent,},

  {path:'**', component:ErrorMessageComponent},

]


@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
