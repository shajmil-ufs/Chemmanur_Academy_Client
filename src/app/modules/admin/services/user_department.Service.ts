import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_department_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_department(user_department_)
{
return this.http.post(environment.BasePath +'user_department/Save_user_department/',user_department_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_department(user_department_Name):Observable<any>
{
var Search_Data={'user_department_Name':user_department_Name}
 return this.http.get(environment.BasePath +'user_department/Search_user_department/',{params:Search_Data});}
Delete_user_department(user_department_Id)
{
 return this.http.get(environment.BasePath +'user_department/Delete_user_department/'+user_department_Id);}
Get_user_department(user_department_Id)
{
 return this.http.get(environment.BasePath +'user_department/Get_user_department/'+user_department_Id);}
}

