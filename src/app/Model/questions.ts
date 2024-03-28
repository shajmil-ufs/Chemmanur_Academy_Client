export class questions
{
Question_Id:number=0;
Question_Text:string='';
Option1:string='';
Option2:string='';
Option3:string='';
Option4:string='';
Correct_Answer:number=0;
Department_Id:number=0;
Delete_Status:any=0;
Rationales:string='';
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

