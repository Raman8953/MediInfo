import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uforgotpassword',
  templateUrl: './uforgotpassword.component.html',
  styleUrls: ['./uforgotpassword.component.css']
})
export class UforgotpasswordComponent implements OnInit {
  emai: any;
  submitted = false;
  otpForm = this.fb.group({
    password : ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword : ['', [Validators.required, Validators.minLength(8)]],
  });


  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private toast: ToastrService, private cookie: CookieService, private route: ActivatedRoute, private router: Router, private service: AuthService) { }

  get password() {return this.otpForm.get('password'); }
  // tslint:disable-next-line: semicolon
 get confirmpassword() {return this.otpForm.get('confirmpassword'); }

 onSubmitotp(){
  this.submitted = true;
  if (this.otpForm.invalid){
   this.otpForm.get('password').markAsTouched();
   this.otpForm.get('confirmpassword').markAsTouched();
  }else{
    if(this.otpForm.value.password === this.otpForm.value.confirmpassword){
      this.service.chgpass({
        email: this.emai,
        password: this.otpForm.value.password,
        confirmpassword: this.otpForm.value.confirmpassword
       }).subscribe((res) => {
         this.toast.success(res.sucess, res.message);
         this.cookie.deleteAll();
         this.router.navigate([`${'/login'}`]);
       });
    }else{
      this.toast.error('Password Not Matched');
    }
  }
}
  ngOnInit(): void {
    this.emai = this.cookie.get('email');
  }

}
