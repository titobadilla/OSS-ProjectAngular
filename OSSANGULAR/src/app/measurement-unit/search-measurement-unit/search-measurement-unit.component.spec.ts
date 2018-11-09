import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeasurementUnitComponent } from './search-measurement-unit.component';

describe('SearchMeasurementUnitComponent', () => {
  let component: SearchMeasurementUnitComponent;
  let fixture: ComponentFixture<SearchMeasurementUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMeasurementUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMeasurementUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
