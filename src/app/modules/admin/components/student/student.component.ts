import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';






import { MatDialog } from '@angular/material/dialog';
import { student } from 'src/app/Model/student';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { student_Service } from '../../services/student.Service';
@Component({
selector: 'app-student',
templateUrl: './student.component.html',
styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {
student_Data:student[]
student_:student= new student();
student_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
student_Edit:boolean;
student_Save:boolean;
student_Delete:boolean;
myInnerHeight: number;
    passwordVisible: boolean=false;
constructor(public student_Service_:student_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
// this.student_Edit=this.Permissions.Edit;
// this.student_Save=this.Permissions.Save;
// this.student_Delete=this.Permissions.Delete;
// this.Page_Load()
// }
this.Page_Load()

}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_student();
this.Search_student();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_student();
}
Close_Click()
{
this.Entry_View = false;
this.Search_student();
}
trackByFn(index, item) 
{
return index;
}

 Clr_student()
 {
this.student_.Student_Id=0;
this.student_.Student_Name="";
this.student_.Password="";
this.student_.Phone_Number="";
this.student_.Email="";
this.student_.Address="";
this.student_.City="";
this.student_.State="";
this.student_.Zip_Code="";
this.student_.Carousel_Id=0;
this.student_.Expiry_Account_Date="";


}
Search_student()
{
this.issLoading=true;
this.student_Service_.Search_student('').subscribe(Rows => {
 this.student_Data=Rows[0];
this.Total_Entries=this.student_Data.length;
if(this.student_Data.length==0)
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
Delete_student(student_Id,index)
{
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.student_Service_.Delete_student(student_Id).subscribe(Delete_status => {
if(Delete_status[0][0].student_Id_>0){
this.student_Data.splice(this.EditIndex, 1);
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
Save_student()
{
  const requiredFields = ['Student_Name', 'Password', 'Phone_Number', 'Email', 'Address',  'State','Expiry_Account_Date'];
  
  for (const field of requiredFields) {
    if (!this.student_[field]) {
      this.openDialog(`${field.replace('_', ' ')} is required`);
      return;
    }
  }
this.issLoading=true;
this.student_Service_.Save_student(this.student_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].student_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Clr_student()
this.Close_Click()
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
Edit_student(student_e:student,index)
{
this.Entry_View=true;
this.student_=student_e;
this.student_=Object.assign({},student_e);
}
togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  openDialog(message: string): void {
    const dialogRef = this.dialogBox.open(DialogBox_Component, {
      panelClass: 'Dialogbox-Class',
      data: { Message: message, Type: '3' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

