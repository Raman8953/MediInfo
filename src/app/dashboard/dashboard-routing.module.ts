import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InmedicineComponent } from './inmedicine/inmedicine.component';
import { UmedicineComponent } from './umedicine/umedicine.component';
import { VmedicineComponent } from './vmedicine/vmedicine.component';
import { VuserComponent } from './vuser/vuser.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'vuser', component: VuserComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'inmedicine', component: InmedicineComponent},
  { path: 'umedicine/:id', component: InmedicineComponent},
  { path: 'vmedicine', component: VmedicineComponent},
  { path: 'vmedicine/:id', component: VmedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
