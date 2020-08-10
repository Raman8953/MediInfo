import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 data: any;

  constructor(private route: ActivatedRoute, private service: AuthService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      this.data = res.data;
    });
  }
}
