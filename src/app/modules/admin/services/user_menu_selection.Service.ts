import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_menu_selection_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_menu_selection(user_menu_selection_)
{
return this.http.post(environment.BasePath +'user_menu_selection/Save_user_menu_selection/',user_menu_selection_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_menu_selection(user_menu_selection_Name):Observable<any>
{
var Search_Data={'user_menu_selection_Name':user_menu_selection_Name}
 return this.http.get(environment.BasePath +'user_menu_selection/Search_user_menu_selection/',{params:Search_Data});}
Delete_user_menu_selection(user_menu_selection_Id)
{
 return this.http.get(environment.BasePath +'user_menu_selection/Delete_user_menu_selection/'+user_menu_selection_Id);}
Get_user_menu_selection(user_menu_selection_Id)
{
 return this.http.get(environment.BasePath +'user_menu_selection/Get_user_menu_selection/'+user_menu_selection_Id);}
}

