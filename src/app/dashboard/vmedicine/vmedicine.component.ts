import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vmedicine',
  templateUrl: './vmedicine.component.html',
  styleUrls: ['./vmedicine.component.css']
})
export class VmedicineComponent implements OnInit {
  // param: any;
  data: any;
  // datab: any;
  myapp: any;
  mid: any;
  param: any;
  // tslint:disable-next-line: max-line-length
  constructor(private toast: ToastrService, private service: AuthService, private cookie: CookieService, private route: ActivatedRoute, private router: Router) { }

  delMedicine() {
    this.param = this.route.snapshot.paramMap.get('id');
    console.log(this.param)
    this.cookie.set('mid', this.param );
    this.mid = this.cookie.get('mid');
    console.log(this.mid);
    this.service.deletemedicine(this.mid).subscribe((res) => {
    if (res.status === 200) {
      this.toast.success(res.message);
      this.router.navigate([`${'/dashboard/vmedicine'}`]);
      this.cookie.delete('mid');
    } else {
      this.toast.warning(res.message);
    }
      });
}
  // showtoasterdf(res){
  //   if (res.success){
  //     this.toast.success(res.success, res.message);

  //   }else{
  //     this.toast.warning(res.success, res.message);
  //   }
  //   }
  ngOnInit(): void {
    this.service.getmedicines().subscribe((res) => {
      this.data = res.data;
    });
  //   this.param = this.route.snapshot.paramMap.get('id');
  //   if (this.param !== null) {
  //     this.service.get_medicine_by_id({
  //       _id: this.param
  //     }).subscribe((res) => {
  //       this.datab = res.data[0];
  //     });
  //   }
  // }
  }
}
