import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsCreationComponent } from './props-creation.component';

describe('PropsCreationComponent', () => {
  let component: PropsCreationComponent;
  let fixture: ComponentFixture<PropsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
