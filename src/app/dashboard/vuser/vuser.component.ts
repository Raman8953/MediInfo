import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-vuser',
  templateUrl: './vuser.component.html',
  styleUrls: ['./vuser.component.css']
})
export class VuserComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private service: AuthService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      this.data = res.data;
    });
  }

}
