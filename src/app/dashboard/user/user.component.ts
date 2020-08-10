import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  f_name: any;
  // tslint:disable-next-line: variable-name
  uimg: any;
  // tslint:disable-next-line: variable-name
  l_name: any;
  email: any;
  password: any;

  profileForm = this.fb.group({
    uimg: ['']
  });

  // tslint:disable-next-line: max-line-length
  constructor(private toast: ToastrService, private router: Router,  private fb: FormBuilder, private route: Router, private service: AuthService, private cookie: CookieService) { }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('uimg').setValue(file);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('uimg', this.profileForm.get('uimg').value);
    console.log(formData)
    this.service.update_user(formData).subscribe((res) => {
      this.router.navigate([`${'/dashboard/user'}`]);
      this.showtoasterdf(res);
    });
  }

  showtoasterdf(res) {
    // tslint:disable-next-line: whitespace
    if(res.sucess) {
      this.toast.success(res.sucess, res.message);
    // tslint:disable-next-line: one-line
    }else{
      this.toast.warning(res.sucess, res.message);
    }
    }
  ngOnInit(): void {
this.service.getUser().subscribe((res) => {
  this.uimg = res.data.uimg;
  this.f_name = res.data.f_name;
  this.l_name = res.data.l_name;
  this.email = res.data.email;
  this.password = res.data.password;
});
}
}
