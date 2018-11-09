import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category/product-category.service';
import { User } from "../Models/user";
import {Router} from '@angular/router';
import { ProductCategory } from '../Models/product-category';

@Component({
  selector: 'app-model-brand',
  templateUrl: './model-brand.component.html',
  styleUrls: ['./model-brand.component.css']
})
export class ModelBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
