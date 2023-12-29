import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  City: string[] = ['Ernakulam', 'Thrissur', 'Alapuzha']; // Add your initial options here

  constructor(private formBuilder: FormBuilder) { }


ngOnInit(): void {
  
  this.signUpForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phoneCode: ['', Validators.required],
    phone: ['', Validators.required],
    city: new FormControl('', Validators.required),
    dob: [null, Validators.required],


  });
}

submit(){
  
  console.log(' this.signUpForm: ',  this.signUpForm.value);
}
}
