import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // data: any;
  emai: any;
  param: any;
  submitted = false;
  profileForm = this.fb.group({
    uimg: [''],
    f_name: ['', Validators.required],
    l_name: ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    did: ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(8)]],
  });

  otpForm = this.fb.group({
    emails : ['', [Validators.required, Validators.email]],
    otp: ['', Validators.required]
  });

   // tslint:disable-next-line: max-line-length
   constructor(private fb: FormBuilder, private toast: ToastrService, private cookie: CookieService, private route: ActivatedRoute, private router: Router, private service: AuthService) { }


   onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('uimg').setValue(file);
    }
  }
  //  tslint:disable-next-line: semicolon

  get f_name() {return this.profileForm.get('f_name')}
   // tslint:disable-next-line: semicolon
  get l_name() {return this.profileForm.get('l_name')}
   // tslint:disable-next-line: semicolon
  get email() {return this.profileForm.get('email')}

  get did() {return this.profileForm.get('did')}
   // tslint:disable-next-line: semicolon
  get password() {return this.profileForm.get('password')}

  // tslint:disable-next-line: adjacent-overload-signatures
  get emails() {return this.otpForm.get('emails'); }
  // tslint:disable-next-line: semicolon
 get otp() {return this.otpForm.get('otp'); }

 onSubmitotp(){
   this.submitted = true;
   if (this.otpForm.invalid){
    this.otpForm.get('emails').markAsTouched();
   }else{
     this.service.checkotp({
      email: this.otpForm.value.emails,
      otp: this.otpForm.value.otp
     }).subscribe((res) => {
       this.toast.success(res.sucess, res.message);
       if (res.sucess == true){
        this.router.navigate([`${'/uforgotpassword'}`]);
       }else{
        this.toast.error('Please Enter Valid OTP');
       }
     });
   }
 }

onSubmit() {
  this.submitted = true;
  // tslint:disable-next-line: whitespace
  if(this.profileForm.invalid)
  // tslint:disable-next-line: one-line
  {
    this.profileForm.get('uimg').markAsTouched();
    this.profileForm.get('f_name').markAsTouched();
    this.profileForm.get('l_name').markAsTouched();
    this.profileForm.get('email').markAsTouched();
    this.profileForm.get('did').markAsTouched();
    this.profileForm.get('password').markAsTouched();
    // tslint:disable-next-line: one-line
  }else{
    const formData = new FormData();
    formData.append('uimg', this.profileForm.get('uimg').value);
    formData.append('f_name', this.profileForm.get('f_name').value);
    formData.append('l_name', this.profileForm.get('l_name').value);
    formData.append('email', this.profileForm.get('email').value);
    formData.append('did', this.profileForm.get('did').value);
    formData.append('password', this.profileForm.get('password').value);
    this.service.postUser(formData).subscribe((res) => {
        this.showtoasterdf(res);
      });
  }
}
showtoasterdf(res) {
  // tslint:disable-next-line: whitespace
  if(res.sucess) {
    this.toast.success(res.sucess, res.message);
    this.router.navigate([`${'/login'}`]);
  // tslint:disable-next-line: one-line
  }else{
    this.toast.warning(res.sucess, res.message);
  }
  }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('data');
    this.emai = this.cookie.get('email');
  }

}
