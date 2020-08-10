import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedicineComponent } from './vmedicine.component';

describe('VmedicineComponent', () => {
  let component: VmedicineComponent;
  let fixture: ComponentFixture<VmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
