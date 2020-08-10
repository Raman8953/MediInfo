import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdashboardComponent } from './adashboard.component';
import { UserComponent } from './user/user.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from '../home/about/about.component';


const routes: Routes = [
  { path: '', component: AdashboardComponent},
  { path: 'user', component: UserComponent},
  { path: 'medicine', component: MedicineComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: ':id', component: AdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdashboardRoutingModule { }
