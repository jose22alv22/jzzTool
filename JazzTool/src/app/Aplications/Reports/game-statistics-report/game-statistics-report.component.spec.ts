import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatisticsReportComponent } from './game-statistics-report.component';

describe('GameStatisticsReportComponent', () => {
  let component: GameStatisticsReportComponent;
  let fixture: ComponentFixture<GameStatisticsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatisticsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatisticsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
