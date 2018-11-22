import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertModelBrandComponent } from './insert-model-brand.component';

describe('InsertModelBrandComponent', () => {
  let component: InsertModelBrandComponent;
  let fixture: ComponentFixture<InsertModelBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertModelBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertModelBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
