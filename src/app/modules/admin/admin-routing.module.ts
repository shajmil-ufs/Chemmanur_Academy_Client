import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dash",
  },
  {
    path:'',
    component:AdminComponent,
    children: [
      {
        path: "dash",
component:AddUserComponent
      },
      {
        path: "exam",
component:AddUserComponent
      },
  
      // {
      //   path: "dash",
      //   loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      // },
  
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
