import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { S3 } from 'aws-sdk';

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
Get_presentations_By_DeptId(dept_Id)
{
 return this.http.get(environment.BasePath +'presentations/Get_presentations_By_DeptId/'+dept_Id);}



 uploadFile(file,deptId) {
    return new Promise((resolve, reject) => {
      const contentType = file.type;
      const currentDate = new Date();
const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, "").replace("T", "");

const key = `chemmanur/presentation/${formattedDate}_${file.name}`;

      const bucket = new S3({
        accessKeyId: " AKIAX37YDYI4ACBOVVMU",
        secretAccessKey: "PVGwH9UVVzRdLvHylXqjcF5IZilV1Z0dTQR2rpRb",
        region: "us-east-2",
      });

      const params = {
        Bucket: "ufsnabeelphotoalbum",
        Key: key,
        Body: file,
        ACL: "public-read",
        ContentType: contentType,
      };

      bucket.upload(params, function (err, data) {
        if (err) {
          console.log("There was an error uploading your file: ", err);
          reject(err);
        } else {
          console.log("Successfully uploaded file.", data);
          resolve(data);
        }
      });
    });
  }

}


