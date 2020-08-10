import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdashboardRoutingModule } from './adashboard-routing.module';
import { AdashboardComponent } from './adashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdashboardComponent, HeaderComponent, FooterComponent, UserComponent, MedicineComponent, FeedbackComponent],
  imports: [
    CommonModule,
    AdashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdashboardModule { }
