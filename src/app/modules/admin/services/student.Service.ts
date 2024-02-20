import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class student_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_student(student_)
{
return this.http.post(environment.BasePath +'student/Save_student/',student_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_student(student_Name):Observable<any>
{
var Search_Data={'student_Name':student_Name}
 return this.http.get(environment.BasePath +'student/Search_student/',{params:Search_Data});}
Delete_student(student_Id)
{
 return this.http.get(environment.BasePath +'student/Delete_student/'+student_Id);}
Get_student(student_Id)
{
 return this.http.get(environment.BasePath +'student/Get_student/'+student_Id);}
}

