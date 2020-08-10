import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data: any;
  cname: any;
  feedbackForm = this.fb.group({
    c_name: [''],
    c_email: [''],
    feed : ['', Validators.required]
  });

  // tslint:disable-next-line: max-line-length
  constructor(public service: AuthService, private router: Router, private fb: FormBuilder, private toast: ToastrService, private cookie: CookieService) { }

  get c_name() {return this.feedbackForm.get('c_name'); }

  get c_email() {return this.feedbackForm.get('c_email'); }

  get feed() {return this.feedbackForm.get('feed'); }

  onSubmit(){
    if ( this.feedbackForm.get('feed').invalid) {
          this.feedbackForm.get('feed').markAsTouched();
        } else {
        this.service.post_feed({
        c_name: this.feedbackForm.value.c_name,
        c_email: this.feedbackForm.value.email,
        feed: this.feedbackForm.value.feed
        }).subscribe((res) => {
            this.toast.success(res.message);
            this.router.navigate([`${'/adashboard'}`]);
        });
      }
  }
  ngOnInit(): void {
    this.service.getAdmin().subscribe((res) => {
      console.log(res.data);
      this.data = res.data;
      this.cname = this.data.f_name + ' ' + this.data.l_name;
    });
  }

}
