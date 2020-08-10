import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data: any;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.get_feed().subscribe((res) => {
      this.data = res.data;
    });
  }

}