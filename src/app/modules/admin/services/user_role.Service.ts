import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_role_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_role(user_role_)
{
return this.http.post(environment.BasePath +'user_role/Save_user_role/',user_role_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_role(user_role_Name):Observable<any>
{
var Search_Data={'user_role_Name':user_role_Name}
 return this.http.get(environment.BasePath +'user_role/Search_user_role/',{params:Search_Data});}
Delete_user_role(user_role_Id)
{
 return this.http.get(environment.BasePath +'user_role/Delete_user_role/'+user_role_Id);}
Get_user_role(user_role_Id)
{
 return this.http.get(environment.BasePath +'user_role/Get_user_role/'+user_role_Id);}
}

