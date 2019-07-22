import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBodyComponentComponent } from './admin-body-component.component';

describe('AdminBodyComponentComponent', () => {
  let component: AdminBodyComponentComponent;
  let fixture: ComponentFixture<AdminBodyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBodyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
