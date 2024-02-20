import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
