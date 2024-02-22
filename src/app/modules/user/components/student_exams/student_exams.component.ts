import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { student_exams_Service } from 'src/app/modules/admin/services/student_exams.Service';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';
import { student_exams } from 'src/app/Model/student_exams';
import { department } from 'src/app/Model/department';
import { department_Service } from 'src/app/modules/admin/services/department.Service';
import { ExamService } from 'src/app/modules/admin/services/exam';
import { Exam as ExamType } from 'src/app/Model/exam';
import { student_question_bank } from 'src/app/Model/student_question_bank';

@Component({
selector: 'app-student_exams',
templateUrl: './student_exams.component.html',
styleUrls: ['./student_exams.component.css']
})
export class student_examsComponent implements OnInit {
student_exams_Data:student_exams[]
student_exams_:student_exams= new student_exams();
currentQuestionIndex: number = 0;
chosenOptions: { questionId: number, chosenOption: number }[] = [];


student_exams_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
student_exams_Edit:boolean;
student_exams_Save:boolean;
student_exams_Delete:boolean;
myInnerHeight: number;
department_Data:department[]
examTypes: ExamType[];
examType: ExamType = new ExamType();
    selectedDept: number=0;
constructor(public student_exams_Service_:student_exams_Service,    private examTypeService: ExamService,public department_Service_:department_Service,  private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
ngOnInit() 
{
// this.Permissions = Get_Page_Permission(15);
// if(this.Permissions==undefined || this.Permissions==null)
// {
// localStorage.removeItem('token');
// this.router.navigateByUrl('/auth/login');
// }
// else
// {
// this.student_exams_Edit=this.Permissions.Edit;
// this.student_exams_Save=this.Permissions.Save;
// this.student_exams_Delete=this.Permissions.Delete;
// this.Page_Load()
// }




this.Page_Load()
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_student_exams();
this.Search_department();
this.searchExamType();
this.Entry_View=false;
}
searchExamType() {
    this.issLoading = true;
    this.examTypeService.search_ExamType('').subscribe(
      (data: any[]) => {
        console.log('data: ', data[0]);
        this.examTypes = data[0];
        if (this.examTypes.length === 0) {
          this.issLoading = false;
        }
        this.issLoading = false;
      },
      (error) => {
        this.issLoading = false;
      }
    );
  }
Create_New()
{
this.Entry_View = true;
this.Clr_student_exams();
}
Close_Click()
{
  this.student_exams_.Exam_Id=0
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_student_exams()
 {
this.student_exams_.Student_Exam_Id=0;
this.student_exams_.Student_Id=0;
this.student_exams_.Exam_Id=0;
this.student_exams_.Start_Time="";
this.student_exams_.End_Time="";
this.student_exams_.Mark_Obtained=0;
this.student_exams_.Total_Marks=0;

}


Save_student_exams()
{
  const studentIdFromLocalStorage = localStorage.getItem('Student_Id');
  if (studentIdFromLocalStorage !== null) {
      this.student_exams_.Student_Id = parseInt(studentIdFromLocalStorage);
  }
  
let payload={
  Student_Id: this.student_exams_.Student_Id ,
  Exam_Id: this.student_exams_.Exam_Id,
  Dept_Id: this.student_exams_.Dept_Id,
  chosenOptions:this.chosenOptions
}
this.issLoading=true;
this.student_exams_Service_.Save_student_exams(payload).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].studentExamId)>0)
{
  this.student_exams_.Student_Exam_Id=Number(Save_status[0].studentExamId)

  this.student_exams_.Mark_Obtained=Number(Save_status[0].Mark_Obtained);
  this.student_exams_.Total_Marks=Number(Save_status[0].Total_Marks);
  this.student_exams_.passed=Number(Save_status[0].passed);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
}


Search_department()
{
this.issLoading=true;
this.department_Service_.Search_department('').subscribe(Rows => {
 this.department_Data=Rows[0];
this.Total_Entries=this.department_Data.length;
if(this.department_Data.length==0)
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Error Occured',Type:"2"}});
 });
}
ShowQuestion(dept_Id){
    console.log('dept_Id: ', dept_Id);
    this.student_exams_.Student_Exam_Id=0
    this.selectedDept=dept_Id
    this.student_exams_.Dept_Id=dept_Id

this.Search_student_exams_questions()
}
Search_student_exams_questions(){
this.currentQuestionIndex=0
  this.chosenOptions=[]
    // call chemmanur.Search_student_exams_questions(1, 1);
    this.issLoading=true;
    console.log('this.student_exams_.Exam_Id: ', this.student_exams_.Exam_Id);
    console.log('this.selectedDept: ', this.selectedDept);
    this.student_exams_Service_.Search_student_exams_questions(this.student_exams_.Exam_Id,this.selectedDept).subscribe(Rows => {
     this.student_exams_Data=Rows[0];
    this.Total_Entries=this.student_exams_Data.length;
    if(this.student_exams_Data.length==0)
    {
    this.issLoading=false;
    const dialogRef = this.dialogBox.open
    ( DialogBox_Component, {panelClass:'Dialogbox-Class'
    ,data:{Message:'No Details Found',Type:"3"}});
    }
    this.issLoading=false;
    this.Entry_View=true
     },
     Rows => { 
    this.issLoading=false;
    const dialogRef = this.dialogBox.open
    ( DialogBox_Component, {panelClass:'Dialogbox-Class'
    ,data:{Message:'Error Occured',Type:"2"}});
     });
}
isOptionCorrect(optionNumber: number): boolean {
  return true;
}

isOptionChosen(optionNumber: number): boolean {
  return true;
}
selectOption(chosenOption: number) {
  // Save the selected option to the array of objects
  const questionId = this.student_exams_Data[this.currentQuestionIndex]['Question_Id'];
  const index = this.chosenOptions.findIndex(option => option.questionId === questionId);

  if (index !== -1) {
    // If the question already exists in the array, update the chosen option
    this.chosenOptions[index].chosenOption = chosenOption;
  } else {
    // If the question does not exist in the array, add it
    this.chosenOptions.push({ questionId, chosenOption });
  }
}
isOptionSelected(optionIndex: number,questionId): boolean {
  const selectedOption = this.chosenOptions.find(option => option.questionId === questionId);
  return selectedOption?.chosenOption === optionIndex;
}


getBarStyles(): any {
  const percentage = (this.student_exams_.Mark_Obtained / this.student_exams_.Total_Marks) * 100;
  console.log('percentage: ', percentage);
  return percentage;
}

}

