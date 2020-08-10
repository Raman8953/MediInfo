import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserComponent } from './vuser.component';

describe('VuserComponent', () => {
  let component: VuserComponent;
  let fixture: ComponentFixture<VuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
