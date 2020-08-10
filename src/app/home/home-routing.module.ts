import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AregisterModule } from './aregister/aregister.module';


const routes: Routes = [
  { path : '', component : HomeComponent},
  { path: 'login', loadChildren: () => (import('./login/login.module').then(m => m.LoginModule))},
  { path: 'register', loadChildren: () => (import('./register/register.module').then(m => m.RegisterModule))},
  { path: 'register/:data', loadChildren: () => (import('./register/register.module').then(m => m.RegisterModule))},
  // tslint:disable-next-line: max-line-length
  { path: 'uforgotpassword', loadChildren: () => (import('./uforgotpassword/uforgotpassword.module').then(m => m.UforgotpasswordModule))},
  { path: 'aforgotpassword', loadChildren: () => (import('./aforgotpassword/aforgotpassword.module').then(m => m.AforgotpasswordModule))},
  { path: 'alogin', loadChildren: () => (import('./alogin/alogin.module').then(m => m.AloginModule))},
  { path: 'aregister', loadChildren: () => (import('./aregister/aregister.module').then(m => AregisterModule))},
  { path: 'aregister/:data', loadChildren: () => (import('./aregister/aregister.module').then(m => AregisterModule))},
  { path: 'about', loadChildren: () => (import('./about/about.module').then(m => m.AboutModule))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
