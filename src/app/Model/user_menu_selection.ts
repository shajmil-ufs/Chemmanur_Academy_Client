export class user_menu_selection
{
User_Menu_Selection_Id:number;
Menu_Id:number;
User_Id:number;
IsEdit:number;
IsSave:number;
IsDelete:number;
IsView:number;
Menu_Status:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

