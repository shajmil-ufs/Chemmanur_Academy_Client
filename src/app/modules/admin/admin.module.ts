import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';

import { AdminComponent } from './admin.component';
import { departmentComponent } from './components/department/department.component';
import { questionsComponent } from './components/questions/questions.component';
import { studentComponent } from './components/student/student.component';
import { presentationsComponent } from './components/presentations/presentations.component';
import { ExamTypesComponent } from './components/exam-types/exam-types.component';

@NgModule({
  declarations: [
    AddUserComponent,departmentComponent,
    AdminComponent,questionsComponent,
    studentComponent,presentationsComponent, ExamTypesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,

 
  ],
})
export class AdminModule { }
