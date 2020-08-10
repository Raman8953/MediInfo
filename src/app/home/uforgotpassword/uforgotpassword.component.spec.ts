import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UforgotpasswordComponent } from './uforgotpassword.component';

describe('UforgotpasswordComponent', () => {
  let component: UforgotpasswordComponent;
  let fixture: ComponentFixture<UforgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UforgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
