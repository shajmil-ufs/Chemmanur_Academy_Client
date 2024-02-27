import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




// import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { MatDialog } from '@angular/material/dialog';
import { student_question_bank } from 'src/app/Model/student_question_bank';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { student_question_bank_Service } from 'src/app/modules/admin/services/student_question_bank.Service';
import { department_Service } from 'src/app/modules/admin/services/department.Service';
import { department } from 'src/app/Model/department';


@Component({
selector: 'app-student_question_bank',
templateUrl: './student_question_bank.component.html',
styleUrls: ['./student_question_bank.component.css']
})
export class student_question_bankComponent implements OnInit {
student_question_bank_Data:student_question_bank[]
student_question_bank_:student_question_bank= new student_question_bank();
student_question_bank_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
student_question_bank_Edit:boolean;
student_question_bank_Save:boolean;
student_question_bank_Delete:boolean;
myInnerHeight: number;
department_Data:department[]
    selectedDept: number=0;

constructor(public student_question_bank_Service_:student_question_bank_Service,public department_Service_:department_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { 


    
}
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
// this.student_question_bank_Edit=this.Permissions.Edit;
// this.student_question_bank_Save=this.Permissions.Save;
// this.student_question_bank_Delete=this.Permissions.Delete;
// this.Page_Load()
// }
this.Page_Load()
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_student_question_bank();
this.Search_department();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_student_question_bank();
}
Close_Click()
{
    this.selectedDept=0
this.Entry_View = false;
}
trackByFn(index, item) 
{
return index;
}

 Clr_student_question_bank()
 {
this.student_question_bank_.QuestionBank_Id=0;
this.student_question_bank_.Student_Id=0;
this.student_question_bank_.Question_Id=0;
this.student_question_bank_.Chosen_Option=0;
this.student_question_bank_.correct_Option=0;

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
;
 });
}
Search_student_question_bank(dept_Id)
{
this.issLoading=true;
this.student_question_bank_Service_.Search_student_question_bank_By_DeptId(dept_Id).subscribe(Rows => {
 this.student_question_bank_Data=Rows[0];
 console.log('this.student_question_bank_Data: ', this.student_question_bank_Data);
this.Total_Entries=this.student_question_bank_Data.length;
if(this.student_question_bank_Data.length==0)
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Questions Found',Type:"3"}});
this.Entry_View =false
return

}
this.student_question_bank_.Question_Id=this.student_question_bank_Data[0].Question_Id
this.issLoading=false;
this.Entry_View =true

 },
 Rows => { 
this.issLoading=false;
;
 });
}
Delete_student_question_bank(student_question_bank_Id,index)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.student_question_bank_Service_.Delete_student_question_bank(student_question_bank_Id).subscribe(Delete_status => {
if(Delete_status[0][0].student_question_bank_Id_>0){
this.student_question_bank_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type: "false"}});
}
else
{
this.issLoading=false;
;
}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
;
 });
}
 });
}
Save_student_question_bank()
{
    
    const studentIdFromLocalStorage = localStorage.getItem('Student_Id');
    if (studentIdFromLocalStorage !== null) {
        this.student_question_bank_.Student_Id = parseInt(studentIdFromLocalStorage);
    }
    console.log('this.student_question_bank_: ', this.student_question_bank_);
this.issLoading=true;
this.student_question_bank_Service_.Save_student_question_bank(this.student_question_bank_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].QuestionBank_Id_)>0)
{
    this.student_question_bank_.QuestionBank_Id=Save_status[0].QuestionBank_Id_
    this.student_question_bank_.correct_Option=Save_status[0].Correct_Answer
   
    // this.Search_student_question_bank(this.selectedDept)
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
}
else{

}
this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
 });
}
Edit_student_question_bank(student_question_bank_e:student_question_bank,index)
{
this.Entry_View=true;
this.student_question_bank_=student_question_bank_e;
this.student_question_bank_=Object.assign({},student_question_bank_e);
}
ShowQuestion(dept_Id){
    this.selectedDept=dept_Id
    console.log('dept_Id: ', dept_Id);
    this.Clr_student_question_bank();

this.Search_student_question_bank(dept_Id)
}
isOptionCorrect(optionNumber: number): boolean {
    return this.student_question_bank_.correct_Option === optionNumber;
  }
  
  isOptionChosen(optionNumber: number): boolean {
    return this.student_question_bank_.Chosen_Option === optionNumber &&this.student_question_bank_.QuestionBank_Id>0  &&  this.student_question_bank_.correct_Option != optionNumber ;
  }
  
}

