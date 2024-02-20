export class student_question_bank
{
QuestionBank_Id:number;
Student_Id:number;
Question_Id:number;
Chosen_Option:number;
correct_Option:number=0;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

