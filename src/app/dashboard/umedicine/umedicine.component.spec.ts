import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmedicineComponent } from './umedicine.component';

describe('UmedicineComponent', () => {
  let component: UmedicineComponent;
  let fixture: ComponentFixture<UmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
