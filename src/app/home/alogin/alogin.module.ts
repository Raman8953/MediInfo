import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AloginRoutingModule } from './alogin-routing.module';
import { AloginComponent } from './alogin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AloginComponent],
  imports: [
    CommonModule,
    AloginRoutingModule,
    ReactiveFormsModule
  ]
})
export class AloginModule { }
