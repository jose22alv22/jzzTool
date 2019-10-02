import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBalanceReportComponent } from './weekly-balance-report.component';

describe('WeeklyBalanceReportComponent', () => {
  let component: WeeklyBalanceReportComponent;
  let fixture: ComponentFixture<WeeklyBalanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBalanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
