import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { questions } from 'src/app/Model/questions';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { questions_Service } from '../../services/questions.Service';
import { department_Service } from '../../services/department.Service';
@Component({
selector: 'app-questions',
templateUrl: './questions.component.html',
styleUrls: ['./questions.component.css']
})
export class questionsComponent implements OnInit {
questions_Data:questions[]
questions_:questions= new questions();
questions_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
questions_Edit:boolean;
questions_Save:boolean;
questions_Delete:boolean;
myInnerHeight: number;
    department_Data: any=[];
constructor(public questions_Service_:questions_Service,public department_Service_:department_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
// this.questions_Edit=this.Permissions.Edit;
// this.questions_Save=this.Permissions.Save;
// this.questions_Delete=this.Permissions.Delete;
// this.Page_Load()
// }
this.Page_Load()
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_questions();
this.Search_department()
this.Search_questions();

this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_questions();
}
Close_Click()
{
this.Entry_View = false;
    this.Search_questions()
}
trackByFn(index, item) 
{
return index;
}

 Clr_questions()
 {
this.questions_.Question_Id=0;
this.questions_.Question_Text="";
this.questions_.Option1="";
this.questions_.Option2="";
this.questions_.Option3="";
this.questions_.Option4="";
this.questions_.Correct_Answer=0;
this.questions_.Department_Id=0;
this.questions_.Delete_Status="";
this.questions_.Answer_Description="";

}
Search_questions()
{
this.issLoading=true;
this.questions_Service_.Search_questions('').subscribe(Rows => {
 this.questions_Data=Rows[0];
this.Total_Entries=this.questions_Data.length;
if(this.questions_Data.length==0)
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
Delete_questions(questions_Id,index)
{
    this.EditIndex=index

const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.questions_Service_.Delete_questions(questions_Id).subscribe(Delete_status => {
if(Delete_status[0][0].questions_Id_>0){
this.questions_Data.splice(this.EditIndex, 1);
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Deleted',Type: "false"}});
}
else
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Error Occured',Type:"2"}});
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
 });

}
Save_questions()
{
this.issLoading=true;
this.questions_Service_.Save_questions(this.questions_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Question_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Close_Click()
this.Clr_questions()
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
Edit_questions(questions_e:questions,index)
{
this.Entry_View=true;
this.questions_=questions_e;
this.questions_=Object.assign({},questions_e);
this.Close_Click()
this.Clr_questions()
}
Search_department()
{
this.issLoading=true;
this.department_Service_.Search_department('').subscribe(Rows => {
 this.department_Data=Rows[0];
 this.issLoading=false;
 },
 Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Error Occured',Type:"2"}});
 });
}
}

