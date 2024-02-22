import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class student_exams_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_student_exams(student_exams_)
{
return this.http.post(environment.BasePath +'student_exams/Save_student_exams/',student_exams_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_student_exams(student_exams_Name):Observable<any>
{
var Search_Data={'student_exams_Name':student_exams_Name}
 return this.http.get(environment.BasePath +'student_exams/Search_student_exams/',{params:Search_Data});}
Delete_student_exams(student_exams_Id)
{
 return this.http.get(environment.BasePath +'student_exams/Delete_student_exams/'+student_exams_Id);}
Get_student_exams(student_exams_Id)
{
 return this.http.get(environment.BasePath +'student_exams/Get_student_exams/'+student_exams_Id);}
 Search_student_exams_questions(dept_Id,exam_type)
 {
  return this.http.get(environment.BasePath +'student_exams/Search_student_exams_questions/'+exam_type+'/'+dept_Id);
 
 }
}

