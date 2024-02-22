export class student_exams
{
Student_Exam_Id:number;
Student_Id:number;
Dept_Id:number;
Exam_Id:number;
Start_Time:string;
End_Time:string;
Mark_Obtained:number;
Total_Marks:number;
passed:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

