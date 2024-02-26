import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { student_question_bankComponent } from './components/student_question_bank/student_question_bank.component';
import { StudentpresentationsComponent } from './components/student-presentations/student_presentations.component';
import { student_examsComponent } from './components/student_exams/student_exams.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    UserComponent,
    student_question_bankComponent,StudentpresentationsComponent,student_examsComponent,DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers:[CommonModule]
})
export class UserModule { }
