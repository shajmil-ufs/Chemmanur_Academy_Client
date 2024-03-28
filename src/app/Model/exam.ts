
export class Exam {
    Exam_Id: number; 
  Exam_Name: string; 
  Department_Id: number;
  Pass_Mark: number; 
  No_of_Questions: number; 
  Duration: number;

  
    constructor(values: Object = {})  
    {
    Object.assign(this, values) 
    }
  }
  