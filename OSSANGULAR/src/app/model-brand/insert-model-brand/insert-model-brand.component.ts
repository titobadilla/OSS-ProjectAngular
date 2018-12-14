import { Component, OnInit } from '@angular/core';
import { ModelBrand } from 'src/app/model/modelbrand.model';
import { Router } from '@angular/router';
import { ModelBrandService } from '../model-brand.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert-model-brand',
  templateUrl: './insert-model-brand.component.html',
  styleUrls: ['./insert-model-brand.component.css']
})
export class InsertModelBrandComponent implements OnInit {
  modelBrand: ModelBrand = new ModelBrand();
  public sucess=false;
  constructor(private router: Router, private service: ModelBrandService) { }

  ngOnInit() {
  }
  createModelBrand(form: NgForm): void {
    if (form.valid) {
      this.service.insertModelBrand(this.modelBrand).subscribe(data => {

      });
      form.reset();
      this.sucess = true;
      setInterval(() => {
        this.sucess = false;
      }, 4000);
    }
  }
}
