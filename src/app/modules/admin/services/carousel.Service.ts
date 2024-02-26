import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { S3 } from 'aws-sdk';

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
 uploadFile(file) {
    return new Promise((resolve, reject) => {
      const contentType = file.type;

const key = `chemmanur/Banner/${file.name}`;

      const bucket = new S3({
        accessKeyId: " AKIAX37YDYI4ACBOVVMU",
        secretAccessKey: "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",
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

