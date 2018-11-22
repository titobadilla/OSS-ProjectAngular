import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModelBrand } from 'src/app/model/modelbrand.model';
import { ModelBrandService } from '../model-brand.service';

@Component({
  selector: 'app-update-model-brand',
  templateUrl: './update-model-brand.component.html',
  styleUrls: ['./update-model-brand.component.css']
})
export class UpdateModelBrandComponent implements OnInit {
  @Input() modelBrandId:String;
  modelBrand: ModelBrand = new ModelBrand();

  constructor(private router: Router, private service: ModelBrandService) { }

  ngOnInit() {
    this.service.getByIdModelBrand(this.modelBrandId).subscribe(
      data => {
        this.modelBrand = data;
      }
    );
  }
  updateModelBrand() {
    this.service.updateModelBrand(this.modelBrand).subscribe(
      (data: ModelBrand) => {
        this.modelBrand = data;
      }
    );
  }
}
