import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin-login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [  
  {
    path: "",
    pathMatch: "full",
    redirectTo: "admin",
  },{
  path: 'admin',
  component: LoginComponent
},
{
  path: 'user',
  component: UserLoginComponent
},
{
  path: 'forget-password/:token',
  component: ForgetPasswordComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthRoutingModule { }
