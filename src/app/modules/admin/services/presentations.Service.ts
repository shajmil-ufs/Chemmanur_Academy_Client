import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class presentations_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_presentations(presentations_)
{
return this.http.post(environment.BasePath +'presentations/Save_presentations/',presentations_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_presentations(presentations_Name):Observable<any>
{
var Search_Data={'presentations_Name':presentations_Name}
 return this.http.get(environment.BasePath +'presentations/Search_presentations/',{params:Search_Data});}
Delete_presentations(presentations_Id)
{
 return this.http.get(environment.BasePath +'presentations/Delete_presentations/'+presentations_Id);}
Get_presentations(presentations_Id)
{
 return this.http.get(environment.BasePath +'presentations/Get_presentations/'+presentations_Id);}
}

