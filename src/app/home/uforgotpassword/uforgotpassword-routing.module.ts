import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UforgotpasswordComponent } from './uforgotpassword.component';

const routes: Routes = [
  { path : '', component: UforgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UforgotpasswordRoutingModule { }
