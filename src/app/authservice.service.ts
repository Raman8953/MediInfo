import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router, private cookieService: CookieService,  private toastr: ToastrService) { }
  showSuccess(data: any) {
    this.toastr.success(data);
  }
  showError(data: any) {
    this.toastr.error(data);
  }
  // toaster service call
    canActivate(): any {
      if (this.cookieService.get('Authorization')){
        return true;
      }
      else{
        this.router.navigateByUrl('/login');
        this.showError('login first');
        return false;
      }
    }
}
