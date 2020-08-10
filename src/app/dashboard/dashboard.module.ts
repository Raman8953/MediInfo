import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VmedicineComponent } from './vmedicine/vmedicine.component';
import { InmedicineComponent } from './inmedicine/inmedicine.component';
import { UmedicineComponent } from './umedicine/umedicine.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VuserComponent } from './vuser/vuser.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, UserComponent, FeedbackComponent, VmedicineComponent, InmedicineComponent, UmedicineComponent, VuserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
