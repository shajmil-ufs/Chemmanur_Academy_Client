import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class questions_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_questions(questions_)
{
return this.http.post(environment.BasePath +'questions/Save_questions/',questions_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_questions(questions_Name):Observable<any>
{
var Search_Data={'questions_Name':questions_Name}
 return this.http.get(environment.BasePath +'questions/Search_questions/',{params:Search_Data});}
Delete_questions(questions_Id)
{
 return this.http.get(environment.BasePath +'questions/Delete_questions/'+questions_Id);}
Get_questions(questions_Id)
{
 return this.http.get(environment.BasePath +'questions/Get_questions/'+questions_Id);}
}

