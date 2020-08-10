import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  profileForm = this.fb.group({
    email : ['', Validators.required],
    password : ['', Validators.required],
  });
  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private router: Router, private service: AuthService, private toast: ToastrService, private cookie: CookieService) { }

  get email() {return this.profileForm.get('email'); }
  get password() {return this.profileForm.get('password'); }

  addCookie(data: any) {
    this.cookie.set('Authorization', data );
  }
  getCookie() {
    return this.cookie.get('Authorization');
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.get('email').markAsTouched();
      this.profileForm.get('password').markAsTouched();
    // tslint:disable-next-line: one-line
    }else{
      this.service.loginAdmin({
        email: this.profileForm.value.email,
        password: this.profileForm.value.password
      }).subscribe((res) => {
        this.addCookie(res.token);
        this.cookie.set('id', res.data);
        this.showtoasterdf(res);
      });
    }
  }
  showtoasterdf(res) {
    // tslint:disable-next-line: whitespace
    if(res.sucess) {
      this.toast.success(res.sucess, res.message);
      this.router.navigate([`${'/adashboard'}`]);
    // tslint:disable-next-line: one-line
    }else{
      this.toast.warning(res.sucess, res.message);
    }
  }

  frgpass() {
    // tslint:disable-next-line: whitespace
    if(this.email.invalid) {
     this.toast.info('Please Enter Email');
    // tslint:disable-next-line: one-line
    }else{
      this.service.aforgot({email: this.profileForm.value.email}).subscribe((res) => {
        this.addCookie(res.data.email);
        this.cookie.set('email', res.data.email);
        if (res){
          this.toast.success(res.sucess, res.message);
          this.router.navigate([`${'/aregister/' + res.data.email}`]);
        }else{
          this.toast.error(res.sucess, res.message);
        }
      });
    }
  }
  ngOnInit() {
  }

}
