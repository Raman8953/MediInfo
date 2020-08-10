import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UforgotpasswordRoutingModule } from './uforgotpassword-routing.module';
import { UforgotpasswordComponent } from './uforgotpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [UforgotpasswordComponent],
  imports: [
    CommonModule,
    UforgotpasswordRoutingModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class UforgotpasswordModule { }
