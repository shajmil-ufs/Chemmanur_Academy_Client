export class department
{
Department_Id:number;
Department_Name:string;
Description:string;
Delete_Status:any;
Image_Path:string;
Image_Name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

