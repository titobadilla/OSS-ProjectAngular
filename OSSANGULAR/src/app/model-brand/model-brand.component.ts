import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelBrand } from '../model/modelbrand.model';
import { Router } from '@angular/router';
import { ModelBrandService } from './model-brand.service';
import { UpdateModelBrandComponent } from './update-model-brand/update-model-brand.component';

@Component({
  selector: 'app-model-brand',
  templateUrl: './model-brand.component.html',
  styleUrls: ['./model-brand.component.css']
})
export class ModelBrandComponent implements OnInit {
  @ViewChild('modelBrandId') childOne: UpdateModelBrandComponent;
  modelBrandEdit: ModelBrand;
  modelBrandId: String;
  modelBrands: ModelBrand[] = new Array<ModelBrand>();
  modelBrand: ModelBrand = new ModelBrand();
  deleteModelBrand: ModelBrand = new ModelBrand();

  primario: boolean = true;
  secundario: boolean = false;
  modalDelete = false;

  constructor(private route: Router, private service: ModelBrandService) { }

  ngOnInit() {
    this.service.getAllModelBrand().subscribe(
      (data: ModelBrand[]) => {
        this.modelBrands = data;
      }
    );
    setInterval(() => { this.getAllModelBrand(); }, 500);
  }
  createModelBrand(): void {
    this.service.insertModelBrand(this.modelBrand).subscribe(data => {

    });
  }
  updateModelBrand(modelBrand: String) {
    this.modelBrandId = modelBrand;
    this.primario = false;;
    this.secundario = true;
  }
  getAllModelBrand() {
    this.service.getAllModelBrand().subscribe(
      (data: ModelBrand[]) => {
        this.modelBrands = data;
      }
    );
  }
  showModal(modelBrand: ModelBrand) {
    this.deleteModelBrand = modelBrand;
    this.modalDelete = true;
  }

  hideModal() {
    this.deleteModelBrand = new ModelBrand;
    this.modalDelete = false;
  }

  aceptDelete() {
    this.service.deleteModelBrand(this.deleteModelBrand.id).subscribe();
    this.getAllModelBrand();
    this.modalDelete = false;

  }
}

