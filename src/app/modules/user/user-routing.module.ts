import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { student_question_bankComponent } from './components/student_question_bank/student_question_bank.component';
import { StudentpresentationsComponent } from './components/student-presentations/student_presentations.component';

const routes: Routes = [ {
  path: "",
  pathMatch: "full",
  redirectTo: "dash",
},
{
  path:'',
  component:UserComponent,
  children: [
    {
      path: "dash",
component:DashboardComponent
    },
    {
      path: "question_bank",
component:student_question_bankComponent
    },
    {
      path: "ppt",
component:StudentpresentationsComponent
    },
 

    // {
    //   path: "dash",
    //   loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    // },

   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
