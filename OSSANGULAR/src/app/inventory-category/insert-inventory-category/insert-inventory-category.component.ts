import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { InventoryCategory } from '../../model/inventorycategory.model';
import { InventoryCategoryService} from '../inventory-category-service';


@Component({
  selector: 'app-insert-inventory-category',
  templateUrl: './insert-inventory-category.component.html',
  styleUrls: ['./insert-inventory-category.component.css']
})
export class InsertInventoryCategoryComponent implements OnInit {

  inventoryCategory: InventoryCategory = new InventoryCategory();

  constructor(private router: Router, private service: InventoryCategoryService) { }

  ngOnInit() {
 
  }

  insert(){
    this.service.insertCategory(this.inventoryCategory).subscribe(
    )
  }

}
