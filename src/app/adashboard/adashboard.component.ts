import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {
  id: any;
  param: any;
  data: any;
  // tslint:disable-next-line: variable-name
  f_name: any;
  // tslint:disable-next-line: variable-name
  l_name: any;
  email: any;
  password: any;
  aimgs: any;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private toast: ToastrService, private service: AuthService) { }

  profileForm = this.fb.group({
    aimg: ['']
  });

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('aimg').setValue(file);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('aimg', this.profileForm.get('aimg').value);
    console.log(formData);
    this.service.update_admin(formData).subscribe((res) => {
      this.router.navigate([`${'/adashboard/'+ this.id}`]);
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
    this.param = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: deprecation
    this.service.getAdmin().subscribe((res) => {
      console.log(res)
      this.id = res.data._id;
      this.aimgs = res.data.aimg;
      this.f_name = res.data.f_name;
      this.l_name = res.data.l_name;
      this.email = res.data.email;
      this.password = res.data.password;
    });
  }

}
