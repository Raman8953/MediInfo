import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AforgotpasswordComponent } from './aforgotpassword.component';

describe('AforgotpasswordComponent', () => {
  let component: AforgotpasswordComponent;
  let fixture: ComponentFixture<AforgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AforgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
