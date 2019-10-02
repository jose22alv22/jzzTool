import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionByPlayerComponent } from './action-by-player.component';

describe('ActionByPlayerComponent', () => {
  let component: ActionByPlayerComponent;
  let fixture: ComponentFixture<ActionByPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionByPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionByPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
