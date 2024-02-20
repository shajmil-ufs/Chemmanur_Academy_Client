import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class user_details_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_user_details(user_details_)
{
return this.http.post(environment.BasePath +'user_details/Save_user_details/',user_details_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_user_details(user_details_Name):Observable<any>
{
var Search_Data={'user_details_Name':user_details_Name}
 return this.http.get(environment.BasePath +'user_details/Search_user_details/',{params:Search_Data});}
Delete_user_details(user_details_Id)
{
 return this.http.get(environment.BasePath +'user_details/Delete_user_details/'+user_details_Id);}
Get_user_details(user_details_Id)
{
 return this.http.get(environment.BasePath +'user_details/Get_user_details/'+user_details_Id);}
}

