import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsTraductionComponent } from './props-traduction.component';

describe('PropsTraductionComponent', () => {
  let component: PropsTraductionComponent;
  let fixture: ComponentFixture<PropsTraductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsTraductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsTraductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
