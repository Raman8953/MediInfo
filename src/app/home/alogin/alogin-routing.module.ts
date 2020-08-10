import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AloginComponent } from './alogin.component';
import { AdashboardModule } from 'src/app/adashboard/adashboard.module';
import { AdashboardComponent } from 'src/app/adashboard/adashboard.component';


const routes: Routes = [
  { path: '', component: AloginComponent},
  { path: 'adashboard', component: AdashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AloginRoutingModule { }
