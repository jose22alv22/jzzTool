import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsCreatorComponent } from './props-creator.component';

describe('PropsCreatorComponent', () => {
  let component: PropsCreatorComponent;
  let fixture: ComponentFixture<PropsCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
