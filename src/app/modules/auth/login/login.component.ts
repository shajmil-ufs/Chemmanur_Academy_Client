import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
      const success = await this.authService_.login(this.loginForm.value);
      console.log('success: ', success);
      if (success) 
      {
        console.log('success.token: ', success.token);
        localStorage.setItem("Access_Token", success.token);
        localStorage.setItem("User_Type", success[0]?.User_Type);
        console.log('localStorage: ', localStorage);
        success[0]?.User_Type==1?
this.router.navigateByUrl("/admin"):this.router.navigateByUrl("/user")
      }
  }
}
