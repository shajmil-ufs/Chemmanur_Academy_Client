// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { assignGuard } from './modules/auth/guards/assign.guard';
import { isAdminGuard } from './modules/auth/guards/is-admin.guard';



const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth",
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
    canActivate:[assignGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard,isAdminGuard],
  } 

  // {
  //   path: "user",
  //   loadChildren: () =>
  //     import("./modules/users/user-layout/user-layout.module").then(
  //       (m) => m.UserLayoutModule
  //     ),
  //   canActivate: [AuthGuard,IsUserGuard],

  // },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
