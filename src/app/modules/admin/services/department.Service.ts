import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class department_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_department(department_)

{
return this.http.post(environment.BasePath +'department/Save_department/',department_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_department(department_Name):Observable<any>
{
var Search_Data={'department_Name':department_Name}
 return this.http.get(environment.BasePath +'department/Search_department/',{params:Search_Data});}
Delete_department(department_Id)
{
 return this.http.get(environment.BasePath +'department/Delete_department/'+department_Id);}
Get_department(department_Id)
{
 return this.http.get(environment.BasePath +'department/Get_department/'+department_Id);}
}

