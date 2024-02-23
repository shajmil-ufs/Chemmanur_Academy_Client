
export class Eligibility_Criteria {

Eligibility_Criteria_Id : number; 
Minimum_No_Of_Exam : number;  
Minimum_No_Of_Pass : number;  
Average_Mark : number; 


  
    constructor(values: Object = {})  
    {
    Object.assign(this, values) 
    }
  }
  