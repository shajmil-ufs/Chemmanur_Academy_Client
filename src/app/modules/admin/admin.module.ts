import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    AddUserComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,

 
  ]
})
export class AdminModule { }
