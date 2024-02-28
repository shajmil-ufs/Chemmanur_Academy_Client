import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DialogBox_Component } from 'src/app/modules/shared/components/DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  token: string;
  tokenValid: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  id: any;
  type: any;

  constructor(private route: ActivatedRoute,public router: Router, private authService_:AuthService,    public dialog: MatDialog) { }

  ngOnInit(): void {
    // Extract token from the URL
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('id: ', this.id);
      this.type = params['type'];
      console.log('type: ', this.type);
    });

    this.route.params.subscribe(params => {
      this.token = params['token'];
      console.log('  this.token : ',   this.token );
    });
  }

  async forgetPassword() {

    if (this.newPassword === this.confirmPassword) {
      let payload={
       token: this.token,
       password: this.newPassword,
       userType:this.type,
       user_Id: this.id
      }
    let result=  await this.authService_.forgetPassword(payload)
    if(result) {
      console.log('result: ', result);

      const dialogRef = this.dialog.open
      ( DialogBox_Component, {panelClass:'Dialogbox-Class'
      ,data:{Message:'password Changed',Type:"False"}});
      console.log('this.type: ', this.type);
if(this.type==1){

  this.router.navigateByUrl("/auth/admin")
}else{

  
  this.router.navigateByUrl("/auth/user")
}


    }

    } else {
      const dialogRef = this.dialog.open
      ( DialogBox_Component, {panelClass:'Dialogbox-Class'
      ,data:{Message:'No Details Found',Type:"3"}});
      // Handle error (e.g., show error message)
    }
  }
}
