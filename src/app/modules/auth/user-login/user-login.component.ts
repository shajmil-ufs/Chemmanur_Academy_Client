
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  loginForm: FormGroup;
  isLoading: boolean=false;
  
  constructor(
    public fb: FormBuilder, public router: Router,private authService_:AuthService
  ) {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: ['',],
      password: ['',]
    })
   
     
  }
  async login(){
    this.isLoading = true;
console.log('this.loginForm: ', this.loginForm);
      const success = await this.authService_.User_Login_Check(this.loginForm.value);
      console.log('success: ', success);
      if (success) 
      {
        console.log('success.token: ', success.token);
        localStorage.setItem("Access_Token", success.token);
        localStorage.setItem("User_Type","2");
        console.log('localStorage: ', localStorage);

this.router.navigateByUrl("/user")
      }
  }
}
