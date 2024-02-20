import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    
    UserRoutingModule,
    SharedModule
  ],
  providers:[CommonModule]
})
export class UserModule { }
