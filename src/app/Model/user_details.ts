export class user_details
{
User_Details_Id:number;
User_Details_Name:string;
Password:string;
Phone_Number:string;
Email:string;
User_Type_Id:number;
User_Status_Id:number;
User_Role_Id:number;
Delete_Status:any;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

