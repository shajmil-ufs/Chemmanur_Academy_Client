export class student
{
Student_Id:number;
Student_Name:string;
Password:string;
Phone_Number:string;
Email:string;
Address:string;
City:string;
State:string;
Zip_Code:string;
Carousel_Id:number;
Expiry_Account_Date:string;
Created_On:any;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

