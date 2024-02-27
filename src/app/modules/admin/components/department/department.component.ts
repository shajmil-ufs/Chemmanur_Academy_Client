import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




import { department_Service } from '../../services/department.Service';
import { MatDialog } from '@angular/material/dialog';
import { department } from 'src/app/Model/department';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
@Component({
selector: 'app-department',
templateUrl: './department.component.html',
styleUrls: ['./department.component.css']
})
export class departmentComponent implements OnInit {
department_Data:department[]
department_:department= new department();
department_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
department_Edit:boolean;
department_Save:boolean;
department_Delete:boolean;
myInnerHeight: number;
constructor(public department_Service_:department_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
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
// this.department_Edit=this.Permissions.Edit;
// this.department_Save=this.Permissions.Save;
// this.department_Delete=this.Permissions.Delete;
// this.Page_Load()
// }
this.Page_Load()

}
Page_Load()
{
this.myInnerHeight = (window.innerHeight);
this.myInnerHeight = this.myInnerHeight - 200;
this.Clr_department();
this.Search_department();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_department();
}
Close_Click()
{
this.Entry_View = false;
this.Search_department();

}
trackByFn(index, item) 
{
return index;
}

 Clr_department()
 {
this.department_.Department_Id=0;
this.department_.Department_Name="";
this.department_.Description="";
this.department_.Delete_Status="";
this.department_.Image_Path="";
this.department_.Image_Name="";

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
Delete_department(department_Id,index)
{
    console.log('index: ', index);
    this.EditIndex=index
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Do you want to delete ?',Type:true,Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.issLoading=true;
this.department_Service_.Delete_department(department_Id).subscribe(Delete_status => {
if(Delete_status[0][0].department_Id_>0){
this.department_Data.splice(this.EditIndex, 1);
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
Save_department()
{
    const requiredFields = ['Department_Name'];
  
    for (const field of requiredFields) {
      if (!this.department_[field]) {
        this.openDialog(`${field.replace('_', ' ')} is required`);
        return;
      }
    }
    console.log('this.department_: ', this.department_);
this.issLoading=true;
this.department_Service_.Save_department(this.department_).subscribe(Save_status => {
Save_status=Save_status[0];

if(Number(Save_status[0].department_Id_)>0)
{
    this.Clr_department()
    this.Close_Click()
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
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
Edit_department(department_e:department,index)
{
this.Entry_View=true;
this.department_=department_e;
this.department_=Object.assign({},department_e);
this.Clr_department()
this.Close_Click()
}
handleImageUpload(event: any) {
    // Handle image upload logic here
    // For example, you can get the file from event.target.files and perform necessary operations
    const file = event.target.files[0];
    console.log('Uploaded file:', file);
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

