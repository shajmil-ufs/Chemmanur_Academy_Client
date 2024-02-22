import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class exam_questions_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_exam_questions(exam_questions_)
{
return this.http.post(environment.BasePath +'exam_questions/Save_exam_questions/',exam_questions_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_exam_questions(exam_questions_Name):Observable<any>
{
var Search_Data={'exam_questions_Name':exam_questions_Name}
 return this.http.get(environment.BasePath +'exam_questions/Search_exam_questions/',{params:Search_Data});}
Delete_exam_questions(exam_questions_Id)
{
 return this.http.get(environment.BasePath +'exam_questions/Delete_exam_questions/'+exam_questions_Id);}
Get_exam_questions(exam_questions_Id)
{
 return this.http.get(environment.BasePath +'exam_questions/Get_exam_questions/'+exam_questions_Id);}
}


