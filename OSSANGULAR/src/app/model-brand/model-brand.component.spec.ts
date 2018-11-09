import { TestBed, inject } from '@angular/core/testing';

import { ModelBrandService } from './model-brand.service';

describe('ModelBrandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelBrandService]
    });
  });

  it('should be created', inject([ModelBrandService], (service: ModelBrandService) => {
    expect(service).toBeTruthy();
  }));
});
