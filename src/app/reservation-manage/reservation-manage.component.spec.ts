import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationManageComponent } from './reservation-manage.component';

describe('ReservationManageComponent', () => {
  let component: ReservationManageComponent;
  let fixture: ComponentFixture<ReservationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
