import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInventoryCategoryComponent } from './search-inventory-category.component';

describe('SearchInventoryCategoryComponent', () => {
  let component: SearchInventoryCategoryComponent;
  let fixture: ComponentFixture<SearchInventoryCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInventoryCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInventoryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
