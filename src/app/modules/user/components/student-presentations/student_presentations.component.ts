import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





import { presentations } from 'src/app/Model/presentations';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';


import { environment } from 'src/environments/environment';
import { department_Service } from 'src/app/modules/admin/services/department.Service';
import { presentations_Service } from 'src/app/modules/admin/services/presentations.Service';

@Component({
selector: 'app-presentations',
templateUrl: './student_presentations.component.html',
styleUrls: ['./student_presentations.component.scss']
})
export class StudentpresentationsComponent implements OnInit {
presentations_Data:presentations[]
department_Data: any=[];
page: number = 1;
selectedDept: number = 0;
totalPages: number;
isLoaded: boolean = false;
presentations_:presentations= new presentations();
presentations_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
presentations_Edit:boolean;
presentations_Save:boolean;
presentations_Delete:boolean;
myInnerHeight: number;
filepath:any=''
    fileChanged: boolean=false;
  pdfPreview: boolean=false;
  selectedpdf:any=''
constructor(public presentations_Service_:presentations_Service,public department_Service_:department_Service,  private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { 
    this.filepath=environment.FilePath
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
// this.presentations_Edit=this.Permissions.Edit;
// this.presentations_Save=this.Permissions.Save;
// this.presentations_Delete=this.Permissions.Delete;
// this.Page_Load()
// }

this.Page_Load()
}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Search_department()

// this.Search_presentations();
this.Entry_View=false;
}

Close_Click()
{
this.Entry_View = false;

}
trackByFn(index, item) 
{
return index;
}


Search_presentations()
{
this.issLoading=true;
this.presentations_Service_.Get_presentations_By_DeptId(this.selectedDept).subscribe(Rows => {
 this.presentations_Data=Rows[0];
this.Total_Entries=this.presentations_Data.length;
if(this.presentations_Data.length==0)
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




viewPPT(dept_Id){
  console.log('dept_Id: ', dept_Id);
this.selectedDept=dept_Id
this.Entry_View=true
// // Minimum tests required
// const minTestsAttended = 30;
// const minTestsPassed = 19;

// // Total tests attended and passed
// const totalTestsAttended = 60;
// const totalTestsPassed = 40;

// // Calculate the percentage of minimum tests attended required with minimum tests passed required
// const minPercentage = (minTestsPassed / minTestsAttended) * 100;
// console.log('minPercentage: ', minPercentage);

// // Calculate the percentage of total tests attended with total tests passed
// const totalPercentage = (totalTestsPassed / totalTestsAttended) * 100;
// console.log('totalPercentage: ', totalPercentage);

// // Check if the percentage falls within the required range
// if (totalPercentage >= minPercentage) {
//   console.log("You are eligible for entry to the main exam.");
// } else {
//   console.log("You are not eligible for entry to the main exam.");
// }

this.Search_presentations()
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




afterLoadComplete(pdfData: any) {
  this.totalPages = pdfData.numPages;
  this.isLoaded = true;
}

nextPage() {
  this.page++;
}

prevPage() {
  this.page--;
}
ShowpdfPreview(pdf){
  this.page=1
  this.totalPages=1
  this.pdfPreview=true
  this.selectedpdf=pdf
}
  
}

