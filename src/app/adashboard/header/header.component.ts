import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any;
  constructor(private cookie: CookieService, private route: Router, private toastr: ToastrService, private service: AuthService) { }

  showSuccess(data: any) {
    this.toastr.success(data);
  }
  showError(data: any) {
    this.toastr.error(data);
  }
  // toaster service call
    logout(){
      this.cookie.deleteAll();
      this.showSuccess('logout successfull');
      this.route.navigateByUrl('/');
    }

  ngOnInit(): void {
    this.service.getAdmin().subscribe((res) => {
      this.data = res.data;
    });
  }

}
