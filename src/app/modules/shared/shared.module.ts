import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { TypeHeadSelectComponent } from './type-head-select/type-head-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DialogBox_Component } from './components/DialogBox/DialogBox.component';
import { RouterModule } from '@angular/router';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    ErrorMessageComponent,
    TypeHeadSelectComponent,
    NavbarComponent,
    DialogBox_Component,
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forChild([]),
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,HttpClientModule,FormsModule, 



  ],
  exports:[
    ErrorMessageComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    TypeHeadSelectComponent,
    MatInputModule,
    NavbarComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,HttpClientModule,FormsModule,MatDialogModule,DialogBox_Component

  ]
})
export class SharedModule { }
