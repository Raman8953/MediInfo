import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmedicineComponent } from './inmedicine.component';

describe('InmedicineComponent', () => {
  let component: InmedicineComponent;
  let fixture: ComponentFixture<InmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
