import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class student_question_bank_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_student_question_bank(student_question_bank_)
{
return this.http.post(environment.BasePath +'student_question_bank/Save_student_question_bank/',student_question_bank_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_student_question_bank(student_question_bank_Name):Observable<any>
{
var Search_Data={'student_question_bank_Name':student_question_bank_Name}
 return this.http.get(environment.BasePath +'student_question_bank/Search_student_question_bank/',{params:Search_Data});}
Search_student_question_bank_By_DeptId(department_id,Qstn_Id):Observable<any>
{
var Search_Data={'department_id':department_id,

'Question_Id':Qstn_Id
}
 return this.http.get(environment.BasePath +'student_question_bank/Search_student_question_bank_By_DeptId/',{params:Search_Data});}
Delete_student_question_bank(student_question_bank_Id)
{
 return this.http.get(environment.BasePath +'student_question_bank/Delete_student_question_bank/'+student_question_bank_Id);}
Get_student_question_bank(student_question_bank_Id)
{
 return this.http.get(environment.BasePath +'student_question_bank/Get_student_question_bank/'+student_question_bank_Id);}
}

