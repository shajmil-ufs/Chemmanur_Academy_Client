import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_types_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_types(user_types_)
{
return this.http.post(environment.BasePath +'user_types/Save_user_types/',user_types_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_types(user_types_Name):Observable<any>
{
var Search_Data={'user_types_Name':user_types_Name}
 return this.http.get(environment.BasePath +'user_types/Search_user_types/',{params:Search_Data});}
Delete_user_types(user_types_Id)
{
 return this.http.get(environment.BasePath +'user_types/Delete_user_types/'+user_types_Id);}
Get_user_types(user_types_Id)
{
 return this.http.get(environment.BasePath +'user_types/Get_user_types/'+user_types_Id);}
}

