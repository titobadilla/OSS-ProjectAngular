import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { InventoryCategoryService } from '../inventory-category-service'
import { InventoryCategory} from '../../model/inventorycategory.model'

@Component({
  selector: 'app-update-inventory-category',
  templateUrl: './update-inventory-category.component.html',
  styleUrls: ['./update-inventory-category.component.css']
})
export class UpdateInventoryCategoryComponent implements OnInit {

  @Input() inventoryCategoryId:String;

  inventoryCategory: InventoryCategory = new InventoryCategory();
  nameInventoryCategory: String;

  constructor(private router: Router, private service: InventoryCategoryService) { }

  ngOnInit() {

    this.service.getByIdInventoryCategory(this.inventoryCategoryId).subscribe(
      data=>{
        this. inventoryCategory=data;
        this.nameInventoryCategory=this.inventoryCategory.name;
      });
      
  }

  updateInventoryCategory(){
    this.service.updateInventoryCategory(this.inventoryCategory).subscribe(
      (data:InventoryCategory) =>{
        this.inventoryCategory = data;
      }
    )
  }

}
