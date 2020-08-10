import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AregisterComponent } from './aregister.component';


const routes: Routes = [
  { path: '', component: AregisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AregisterRoutingModule { }
