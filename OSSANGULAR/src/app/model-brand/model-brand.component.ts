import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModelBrandService } from './model-brand.service';
import { ModelBrand } from '../model/modelbrand.model';

@Component({
  selector: 'app-model-brand',
  templateUrl: './model-brand.component.html',
  styleUrls: ['./model-brandy.component.css']
})
export class ModelBrandComponent implements OnInit {

  modelBrand: ModelBrand= new ModelBrand();
  modelBrands: ModelBrand[]= new Array<ModelBrand>();

  constructor(private router: Router, private service: ModelBrandService) { }

  ngOnInit() {
    this.service.getAllModelBrands().subscribe(
      (data: ModelBrand[])=>{
        this.modelBrands = data;
      }
    )
  }

  insert(){
    alert('Usted ha ingresado correctamente '+this.modelBrand.model);
    this.service.insertModelBrand(this.modelBrand).subscribe(
      (data:ModelBrand) =>{
        this.modelBrand = data;
      }
    )
  }
  update(){
    alert('Usted ha actualizado correctamente '+this.modelBrand.model);
    this.service.updateModelBrand(this.modelBrand).subscribe(
      (data:ModelBrand) =>{
        this.modelBrand = data;
      }
    )
  }
  delete(){
    alert('Usted ha eliminado correctamente '+this.modelBrand.model);
    this.service.deleteCategory(this.modelBrand.id).subscribe(
      (data:ModelBrand) =>{
        this.modelBrand = data;
    })
  }
}

