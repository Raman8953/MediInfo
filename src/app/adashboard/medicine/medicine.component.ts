import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  data: any;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getmedicines().subscribe((res) => {
      this.data = res.data;
    });
  }

}
