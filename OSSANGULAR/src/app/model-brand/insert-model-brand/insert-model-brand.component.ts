import { Component, OnInit } from '@angular/core';
import { ModelBrand } from 'src/app/model/modelbrand.model';
import { Router } from '@angular/router';
import { ModelBrandService } from '../model-brand.service';

@Component({
  selector: 'app-insert-model-brand',
  templateUrl: './insert-model-brand.component.html',
  styleUrls: ['./insert-model-brand.component.css']
})
export class InsertModelBrandComponent implements OnInit {
  modelBrand: ModelBrand = new ModelBrand();
  constructor(private router: Router, private service: ModelBrandService) { }

  ngOnInit() {
  }
  createModelBrand(): void {
    this.service.insertModelBrand(this.modelBrand).subscribe(data => {

    });
  }
}
