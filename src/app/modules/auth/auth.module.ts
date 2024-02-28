import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';



import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './admin-login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserLoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    
  ],providers: [
      ],
})
export class AuthModule { }
