import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class student_answers_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_student_answers(student_answers_)
{
return this.http.post(environment.BasePath +'student_answers/Save_student_answers/',student_answers_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_student_answers(student_answers_Name):Observable<any>
{
var Search_Data={'student_answers_Name':student_answers_Name}
 return this.http.get(environment.BasePath +'student_answers/Search_student_answers/',{params:Search_Data});}
Delete_student_answers(student_answers_Id)
{
 return this.http.get(environment.BasePath +'student_answers/Delete_student_answers/'+student_answers_Id);}
Get_student_answers(student_answers_Id)
{
 return this.http.get(environment.BasePath +'student_answers/Get_student_answers/'+student_answers_Id);}
}

