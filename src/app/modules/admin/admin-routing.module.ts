import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { departmentComponent } from './components/department/department.component';
import { questionsComponent } from './components/questions/questions.component';
import { studentComponent } from './components/student/student.component';
import { presentationsComponent } from './components/presentations/presentations.component';
import { ExamTypesComponent } from './components/exam-types/exam-types.component';
import { Eligibility_CriteriaComponent } from './components/eligibility_criteria/eligibility_criteria.component';
import { BannerComponent } from './components/banner/banner.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "student",
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
      {
        path: "department",
component:departmentComponent
      },
      { 
        path: "question",
component:questionsComponent
      },
      {
        path: "student",
component:studentComponent
      },
      {
        path: "presentations",
component:presentationsComponent
      },
      {
        path: "exam_types",
component:ExamTypesComponent
      },

      {
        path: "eligibility_criteria",
component:Eligibility_CriteriaComponent
      },
      {
        path: "Banner",
component:BannerComponent
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
