import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Eligibility_CriteriaService {

  constructor(private http: HttpClient) { }

  Save_Eligibility_Criteria(eligibilityCriteria: any): Observable<any> {
    return this.http.post(environment.BasePath + 'Eligibility_Criteria/Save_Eligibility_Criteria', eligibilityCriteria);
  }

 
  Search_Eligibility_Criteria(Eligibility_Criteria_: string): Observable<any> {
    return this.http.get(environment.BasePath + 'Eligibility_Criteria/Search_Eligibility_Criteria', { params: { Eligibility_Criteria_ } });
  }

  Delete_Eligibility_Criteria(eligibilityCriteriaId: number): Observable<any> {
    return this.http.get(environment.BasePath + 'Eligibility_Criteria/Delete_Eligibility_Criteria/' + eligibilityCriteriaId);
  }

  Student_Exam_Eligibility_Check(Student_Id_: number): Observable<any> {
    return this.http.get(environment.BasePath + 'Eligibility_Criteria/Student_Exam_Eligibility_Check', { params: { Student_Id_ } });
  }

 
}
