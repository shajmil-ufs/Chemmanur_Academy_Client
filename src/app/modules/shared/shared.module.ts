import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { TypeHeadSelectComponent } from './type-head-select/type-head-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    TypeHeadSelectComponent,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    ErrorMessageComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    TypeHeadSelectComponent,
    MatInputModule,

  ]
})
export class SharedModule { }
