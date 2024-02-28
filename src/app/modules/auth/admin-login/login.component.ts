import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean=false;
  forget_password_view: boolean=false;
  
  constructor(
    public fb: FormBuilder, public router: Router,private authService_:AuthService,public dialog: MatDialog
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
        localStorage.setItem("User_Type", "1");
        
this.router.navigateByUrl("/admin")
      }
  }



  async Generate_forget_Password(){
    
    let payload={
      email:this.loginForm.value.email,
      userType:1
    }
    this.isLoading = true;
    const success = await this.authService_.Generate_forget_Password(payload);
    console.log('success: ', success);
    if(success)
    {
      this.isLoading=false
    
      const dialogRef = this.dialog.open
      ( DialogBox_Component, {panelClass:'Dialogbox-Class'
      ,data:{Message:'Email Sent',Type:"False"}});
    } 


}
}
