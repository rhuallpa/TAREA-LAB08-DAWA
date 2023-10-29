import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLunaComponent } from './dashboard-luna.component';

describe('DashboardLunaComponent', () => {
  let component: DashboardLunaComponent;
  let fixture: ComponentFixture<DashboardLunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardLunaComponent]
    });
    fixture = TestBed.createComponent(DashboardLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
