import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_status_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_status(user_status_)
{
return this.http.post(environment.BasePath +'user_status/Save_user_status/',user_status_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_status(user_status_Name):Observable<any>
{
var Search_Data={'user_status_Name':user_status_Name}
 return this.http.get(environment.BasePath +'user_status/Search_user_status/',{params:Search_Data});}
Delete_user_status(user_status_Id)
{
 return this.http.get(environment.BasePath +'user_status/Delete_user_status/'+user_status_Id);}
Get_user_status(user_status_Id)
{
 return this.http.get(environment.BasePath +'user_status/Get_user_status/'+user_status_Id);}
}

