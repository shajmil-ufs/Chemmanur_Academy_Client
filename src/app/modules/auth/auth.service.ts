import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApi } from '../shared/services/_BaseApi.Service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: BaseApi) {
  }
  login(data){
    console.log('data: ', data);

    return this.http.post('Login/forgot-password',data);
  }
  User_Login_Check(data){
    console.log('data: ', data);

    return this.http.post('Login/User_Login_Check',data);
  }

}
