import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthserviceService } from './authservice.service';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', loadChildren: () => (import('./home/home.module').then(m => m.HomeModule)) },
  // tslint:disable-next-line: max-line-length
  { path: 'dashboard', loadChildren: () => (import('./dashboard/dashboard.module').then(m => m.DashboardModule)), canActivate: [AuthserviceService]},
  // tslint:disable-next-line: max-line-length
  { path: 'adashboard', loadChildren: () => (import('./adashboard/adashboard.module').then(m => m.AdashboardModule)), canActivate: [AuthserviceService]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
