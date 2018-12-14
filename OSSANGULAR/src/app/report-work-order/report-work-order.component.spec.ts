import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWorkOrderComponent } from './report-work-order.component';

describe('ReportWorkOrderComponent', () => {
  let component: ReportWorkOrderComponent;
  let fixture: ComponentFixture<ReportWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
