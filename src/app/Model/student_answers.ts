export class student_answers
{
Answer_Id:number;
Student_Exam_Id:number;
Question_Id:number;
Selected_Option:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

