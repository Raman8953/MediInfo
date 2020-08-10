import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AuthService, private cookie: CookieService, private toast: ToastrService, private route: Router) { }

  ngOnInit() {
  }

}
