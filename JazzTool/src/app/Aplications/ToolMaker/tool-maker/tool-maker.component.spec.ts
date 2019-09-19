import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolMakerComponent } from './tool-maker.component';

describe('ToolMakerComponent', () => {
  let component: ToolMakerComponent;
  let fixture: ComponentFixture<ToolMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
