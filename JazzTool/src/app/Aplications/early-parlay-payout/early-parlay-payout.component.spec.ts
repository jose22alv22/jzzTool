import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyParlayPayoutComponent } from './early-parlay-payout.component';

describe('EarlyParlayPayoutComponent', () => {
  let component: EarlyParlayPayoutComponent;
  let fixture: ComponentFixture<EarlyParlayPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlyParlayPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyParlayPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
