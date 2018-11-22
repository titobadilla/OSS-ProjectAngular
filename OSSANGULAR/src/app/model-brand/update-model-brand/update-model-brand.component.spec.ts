import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModelBrandComponent } from './update-model-brand.component';

describe('UpdateModelBrandComponent', () => {
  let component: UpdateModelBrandComponent;
  let fixture: ComponentFixture<UpdateModelBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateModelBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModelBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
