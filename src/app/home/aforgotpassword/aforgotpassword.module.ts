import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AforgotpasswordRoutingModule } from './aforgotpassword-routing.module';
import { AforgotpasswordComponent } from './aforgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AforgotpasswordComponent],
  imports: [
    CommonModule,
    AforgotpasswordRoutingModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class AforgotpasswordModule { }
