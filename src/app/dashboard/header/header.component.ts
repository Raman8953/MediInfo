import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private cookie: CookieService, private route: Router, private toastr: ToastrService) { }

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
  }

}
