import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsAdministratorComponent } from './props-administrator.component';

describe('PropsAdministratorComponent', () => {
  let component: PropsAdministratorComponent;
  let fixture: ComponentFixture<PropsAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
