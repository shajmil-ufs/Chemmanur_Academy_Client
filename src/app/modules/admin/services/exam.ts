import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  save_ExamType(examType: any): Observable<any> {
    return this.http.post(environment.BasePath + 'exam/save_ExamType', examType);
  }

  search_ExamType(examTypeName: string): Observable<any> {
    return this.http.get(environment.BasePath + 'exam/search_ExamType', { params: { examTypeName } });
  }

  delete_ExamType(examTypeId: number): Observable<any> {
    return this.http.get(environment.BasePath + 'exam/delete_ExamType/' + examTypeId);
  }

  get_ExamType(examTypeId: number): Observable<any> {
    return this.http.get(environment.BasePath + 'exam/get_ExamType/' + examTypeId);
  }
}
