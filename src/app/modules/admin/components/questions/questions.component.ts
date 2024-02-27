import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

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
arrayBuffer:any;
Display_File_Name_:string;
file:File;
value = 50;
formType:string='bulk'
issLoading: boolean;
Permissions: any;
questions_Edit:boolean;
questions_Save:boolean;
questions_Delete:boolean;
myInnerHeight: number;
    department_Data: any=[];
    questions_Array: any=[];
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
// this.questions_.Question_Id=0;
// this.questions_.Question_Text="";
// this.questions_.Option1="";
// this.questions_.Option2="";
// this.questions_.Option3="";
// this.questions_.Option4="";
// this.questions_.Correct_Answer=0;
// this.questions_.Department_Id=0;
// this.questions_.Delete_Status="";
// this.questions_.Answer_Description="";
this.questions_Array=[]
this.questions_Array.push(new questions())

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
;
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
Save_questions()
{
let dialogRef;
if (this.formType === 'bulk') {
    if (!this.questions_Array[0].Department_Id) {
      this.openDialog('Department is required');
      return;
    }
  } else {
    const requiredFields = ['Question_Text', 'Option1', 'Option2', 'Option3', 'Option4', 'Correct_Answer', 'Department_Id'];
  
    for (const field of requiredFields) {
      if (!this.questions_Array[0][field]) {
        this.openDialog(`${field.replace('_', ' ')} is required`);
        return;
      }
    }
  }
  
this.issLoading=true;
this.questions_Service_.Save_questions(this.questions_Array).subscribe(Save_status => {
Save_status=Save_status[0];
if(Number(Save_status[0].Question_Id_)>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Close_Click()
}
else{

}
this.issLoading=false;
 },
 Rows => { 

this.issLoading=false;
 });
 this.Clr_questions()

}
Edit_questions(questions_e:questions,index)
{
  this.questions_Array=[]
  this.formType='individual'
this.Entry_View=true;
this.questions_Array[0]=questions_e
this.questions_=questions_e;
this.questions_=Object.assign({},questions_e);
// this.Close_Click()
// this.Clr_questions()
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
incomingfile(event) {
  this.issLoading=true;

    this.file=event.target.files[0];
    
    this.Display_File_Name_ = this.file.name;
    
    this.Upload();
    }
    Upload() 
    {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
    
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.questions_Array=(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        this.questions_Array.sort();
        this.issLoading=false;
        console.log('   this.questions_Array: ',    this.questions_Array);
    }
    fileReader.readAsArrayBuffer(this.file);
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

