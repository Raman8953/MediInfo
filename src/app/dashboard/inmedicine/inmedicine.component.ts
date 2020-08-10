import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inmedicine',
  templateUrl: './inmedicine.component.html',
  styleUrls: ['./inmedicine.component.css']
})
export class InmedicineComponent implements OnInit {
  [x: string]: any;
  param: any;
  data: any;
  dids: any;
  submitted = false;
  // tslint:disable-next-line: variable-name
  mid: any;

  medicineForm = this.fb.group({
    did: ['', Validators.required],
    p_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    deases : ['', Validators.required],
    age : ['', Validators.required],
    gender : ['', Validators.required],
    medicine : ['', Validators.required]
  });

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private toast: ToastrService, private cookie: CookieService, private router: Router, private service: AuthService, private route: ActivatedRoute) { }

  get did() {return this.medicineForm.get('did'); }

  get p_name() {return this.medicineForm.get('p_name'); }

  get email() {return this.medicineForm.get('email'); }

  get deases() {return this.medicineForm.get('deases'); }

  get age() {return this.medicineForm.get('age'); }

  get gender() {return this.medicineForm.get('gender'); }

  get medicine() {return this.medicineForm.get('medicine'); }

  onSubmit() {
    this.submitted = true;
    // tslint:disable-next-line: whitespace
    if(this.medicineForm.invalid)
    // tslint:disable-next-line: one-line
    {
      this.medicineForm.get('did').markAsTouched();
      this.medicineForm.get('p_name').markAsTouched();
      this.medicineForm.get('email').markAsTouched();
      this.medicineForm.get('deases').markAsTouched();
      this.medicineForm.get('medicine').markAsTouched();
    }
    else{
      this.service.postmedicine({
        did: this.medicineForm.value.did,
        p_name: this.medicineForm.value.p_name,
        email: this.medicineForm.value.email,
        deases: this.medicineForm.value.deases,
        age: this.medicineForm.value.age,
        gender: this.medicineForm.value.gender,
        medicine: this.medicineForm.value.medicine
      }).subscribe((res) => {
        this.showtoasterdf(res);
      });
    }
  }
    showtoasterdf(res) {
      // tslint:disable-next-line: whitespace
      if(res.sucess) {
        this.toast.success(res.sucess, res.message);
        this.router.navigate([`${'/dashboard/vmedicine'}`]);
      // tslint:disable-next-line: one-line
      }else{
        this.toast.warning(res.sucess, res.message);
      }
      }

      onSubmits() {
        if (this.medicineForm.get('did').invalid ||
        this.medicineForm.get('p_name').invalid ||
        this.medicineForm.get('email').invalid ||
        this.medicineForm.get('deases').invalid ||
        this.medicineForm.get('medicine').invalid) {
          this.medicineForm.get('did').markAsTouched();
          this.medicineForm.get('p_name').markAsTouched();
          this.medicineForm.get('email').markAsTouched();
          this.medicineForm.get('deases').markAsTouched();
          this.medicineForm.get('medicine').markAsTouched();
        } else {
        this.service.update_medicine(this.mid,{
        did: this.medicineForm.value.did,
        p_name: this.medicineForm.value.p_name,
        email: this.medicineForm.value.email,
        deases: this.medicineForm.value.deases,
        age: this.medicineForm.value.age,
        gender: this.medicineForm.value.gender,
        medicine: this.medicineForm.value.medicine
        }).subscribe((res) => {
            this.toast.success(res.message);
            this.router.navigate([`${'/dashboard/vmedicine'}`]);
            this.cookie.delete('mid');
        });
      }
      }


  ngOnInit(): void {
    this.service.getUser().subscribe((res) => {
    this.cookie.set('did', res.data.did);
    this.dids = this.cookie.get('did');
    console.log(this.dids);
    });
    this.param = this.route.snapshot.paramMap.get('id');
    this.cookie.set('mid', this.param );
    this.mid = this.cookie.get('mid');
    if (this.mid){
      this.service.get_medicine_by_id(this.mid).subscribe((res) => {
        this.data = res.data;
      });
    }
  }
}
