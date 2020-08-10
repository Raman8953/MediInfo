import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AforgotpasswordComponent } from './aforgotpassword.component';


const routes: Routes = [
  { path: '', component: AforgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AforgotpasswordRoutingModule { }
