import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





import { presentations } from 'src/app/Model/presentations';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { presentations_Service } from '../../services/presentations.Service';
import { MatDialog } from '@angular/material/dialog';
import { department_Service } from '../../services/department.Service';
import { environment } from 'src/environments/environment';

@Component({
selector: 'app-presentations',
templateUrl: './presentations.component.html',
styleUrls: ['./presentations.component.scss']
})
export class presentationsComponent implements OnInit {
presentations_Data:presentations[]
department_Data: any=[];
page: number = 1;
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
this.Clr_presentations();
this.Search_department()

this.Search_presentations();
this.Entry_View=false;
}
Create_New()
{
this.Entry_View = true;
this.Clr_presentations();
}
Close_Click()
{
this.Entry_View = false;
this.Search_presentations();

}
trackByFn(index, item) 
{
return index;
}

 Clr_presentations()
 {
this.presentations_.PPT_ID=0;
this.presentations_.Name="";
this.presentations_.Path="";
this.presentations_.File_Name="";
this.presentations_.file=null;
this.presentations_.Department_Id=0;
this.presentations_.Delete_Status="";


this.page=1

}
Search_presentations()
{
this.issLoading=true;
this.presentations_Service_.Search_presentations('').subscribe(Rows => {
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
;
 });
}
Delete_presentations(presentations_Id,index)
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
this.presentations_Service_.Delete_presentations(presentations_Id).subscribe(Delete_status => {
if(Delete_status[0][0].presentations_Id_>0){
this.presentations_Data.splice(this.EditIndex, 1);
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

Save_presentations(){
  const requiredFields = ['Name','Department_Id', ];
  this.issLoading=true;
  for (const field of requiredFields) {
    if (!this.presentations_[field]) {
      
      this.openDialog(`${field.replace(/_/g, ' ')} is required`,'3');

      return;
    }
  }
    console.log('this.presentations_.file: ', this.presentations_.file);
     if (!this.fileChanged &&this.presentations_.PPT_ID  ) {   //for edit if image is there then no need to upload to s3
        this.save();
    } else if (!this.presentations_.file) {
        const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Document', Type: '3' } });
    } else {
        this.upload();
    }
}

save()
{
this.issLoading=true;
console.log('this.presentations_: ', this.presentations_);
this.presentations_Service_.Save_presentations(this.presentations_).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].PPT_ID_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.fileChanged=false
this.Close_Click()
this.Clr_presentations()
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
Edit_presentations(presentations_e:presentations,index)
{
  this.page=1

this.Entry_View=true;

this.presentations_=presentations_e;
this.presentations_=Object.assign({},presentations_e);
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
;
 });
}
handleFileInput(event: any): void {
  this.fileChanged = true;
  const file = event.target.files[0]; 
  if (file) {
      if (file.size > 5 * 1024 * 1024) { // Check if file size exceeds 5 MB


        const dialogRef = this.dialogBox.open(DialogBox_Component, {
          panelClass: 'dialogbox-class',
          data: {Message: 'File size exceeds 5 MB. Please select a smaller file.',Type: "3" }
        });
          alert();
          this.fileChanged = false;

      } else {
          this.presentations_.File_Name = file.name;
          this.presentations_.file = file;
          console.log(file);
      }
  }
}

  upload(){
    this.issLoading=true
    
      this.presentations_Service_.uploadFile(  this.presentations_.file,this.presentations_.Department_Id).then(
        res=>{
            console.log('res: ', res);
            if(res){

                this.presentations_.Path =res['key']
                console.log('res: ', res);
                this.save()
            }
        }
    )

}


afterLoadComplete(pdfData: any) {
  console.log('pdfData: ', pdfData);
  this.totalPages = pdfData.numPages;
  this.isLoaded = true;
}

nextPage() {
  this.page++;
}

prevPage() {
  this.page--;
}
openDialog(message: string, type: string) {
  console.log('type: ', type);
  console.log('message: ', message);
 
  const dialogRef = this.dialogBox.open(DialogBox_Component, {
        panelClass: 'dialogbox-class',
        data: {Message: message,Type: type }
      });
    }
}

