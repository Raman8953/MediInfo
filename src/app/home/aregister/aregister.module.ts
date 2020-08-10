import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AregisterRoutingModule } from './aregister-routing.module';
import { AregisterComponent } from './aregister.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AregisterComponent],
  imports: [
    CommonModule,
    AregisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class AregisterModule { }
