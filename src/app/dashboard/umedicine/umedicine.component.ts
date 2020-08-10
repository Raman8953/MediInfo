import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-umedicine',
  templateUrl: './umedicine.component.html',
  styleUrls: ['./umedicine.component.css']
})
export class UmedicineComponent implements OnInit {
  data: any;
  myapp: any;

  constructor(private toast: ToastrService, private service: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.service.getmedicine().subscribe((res) => {
      this.data = res.data;
    });
  }

}
