export class questions
{
Question_Id:number;
Question_Text:string;
Option1:string;
Option2:string;
Option3:string;
Option4:string;
Correct_Answer:number;
Department_Id:number;
Delete_Status:any;
Answer_Description:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

