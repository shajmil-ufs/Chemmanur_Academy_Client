import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
providedIn: 'root'
})
export class carousel_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
Save_carousel(carousel_)
{
return this.http.post(environment.BasePath +'carousel/Save_carousel/',carousel_);}
private extractData(res: Response)
{
let body = res;
return body || { };
}
Search_carousel(carousel_Name):Observable<any>
{
var Search_Data={'carousel_Name':carousel_Name}
 return this.http.get(environment.BasePath +'carousel/Search_carousel/',{params:Search_Data});}
Delete_carousel(carousel_Id)
{
 return this.http.get(environment.BasePath +'carousel/Delete_carousel/'+carousel_Id);}
Get_carousel(carousel_Id)
{
 return this.http.get(environment.BasePath +'carousel/Get_carousel/'+carousel_Id);}
}

