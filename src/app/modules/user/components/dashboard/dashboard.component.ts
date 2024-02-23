import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eligibility_Criteria } from 'src/app/Model/eligibility_criteria';
import { student_exams } from 'src/app/Model/student_exams';
import { Eligibility_CriteriaService } from 'src/app/modules/admin/services/eligibility_criteria.Service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {




  eligibilityCriterias: Eligibility_Criteria[];
  eligibilityCriteria: Eligibility_Criteria = new Eligibility_Criteria();

  student_exams: student_exams[];
  student_exams_: any;

  eligibilityCriteriaNameSearch: string;
  Entry_View = true;
  editIndex: number;
  totalEntries: number;
  isLoading = false;
  Student_Id_: number;
  Eligibility_Name:string;
  Eligibility_Id:number;

  constructor(
    private eligibilityCriteriaService: Eligibility_CriteriaService,
    private route: ActivatedRoute,
    private router: Router,
    // public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.Student_Id_=298;
    this.pageLoad();
  }

  pageLoad() {
    this.isLoading = true;
    this.Student_Exam_Eligibility_Check();
    this.searcheligibilityCriteria()
  }


  cleareligibilityCriteria() {
    this.eligibilityCriteria.Eligibility_Criteria_Id = 0;
    this.eligibilityCriteria.Minimum_No_Of_Exam = 0;
    this.eligibilityCriteria.Minimum_No_Of_Pass = 0;
    this.eligibilityCriteria.Average_Mark = 0;
  }

  Student_Exam_Eligibility_Check() {
    this.isLoading = true;
    debugger
    this.eligibilityCriteriaService.Student_Exam_Eligibility_Check(this.Student_Id_).subscribe(
      
      (data: any[]) => {
        debugger
        console.log('data: ', data[0]);
        this.student_exams = data[0];
        this.student_exams_=this.student_exams[0];
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
  searcheligibilityCriteria() {
    this.isLoading = true;
    debugger
    this.eligibilityCriteriaService.Search_Eligibility_Criteria('').subscribe(
      
      (data: any[]) => {
        debugger
        console.log('data: ', data[0]);
        this.eligibilityCriterias = data[0];
        this.eligibilityCriteria= this.eligibilityCriterias[0];

        this.Check_Eligibility();
       
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  Check_Eligibility()
  {

    debugger
   if( this.student_exams_.StudentAverage_Mark >= this.eligibilityCriteria.Average_Mark &&
      this.student_exams_.No_Of_Exam >= this.eligibilityCriteria.Minimum_No_Of_Exam 
      //  && this.student_exams_.StudentAverage_Mark >= this.eligibilityCriteria.Average_Mark 
       )
   {
    this.Eligibility_Id =1;
    this.Eligibility_Name ="You are eligible for the attendant exam"
   }
   else
   {
    this.Eligibility_Id =2;
    this.Eligibility_Name ="You are not eligible for the attendant exam"
   }

  }
 

 


 





}
