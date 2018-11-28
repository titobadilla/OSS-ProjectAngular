import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateInventoryCategoryComponent } from './update-inventory-category/update-inventory-category.component';
import { Router } from '@angular/router';
import { InventoryCategoryService } from './inventory-category-service';
import { InventoryCategory } from '../model/inventorycategory.model';
import { ConfigService } from './configurationtable.service';


@Component({
  selector: 'app-inventory-category',
  templateUrl: './inventory-category.component.html',
  styleUrls: ['./inventory-category.component.css']
})
export class InventoryCategoryComponent implements OnInit {

  @ViewChild('inventoryCategoryId') childOne:UpdateInventoryCategoryComponent;

  inventoryCategoryEdit: InventoryCategory;
  inventoryCategoryId: String;
  inventoryCategories: InventoryCategory[] = new Array<InventoryCategory>();
  inventoryCategory: InventoryCategory = new InventoryCategory();
  inventoryCategoryDelete: InventoryCategory = new InventoryCategory();
  
  primario:boolean=true;
  secundario:boolean=false;
  modalDelete = false;

  columns = [
    { key: 'name', title: 'Nombre' },
    { key: 'edit', title: 'Editar' },
    { key: 'remove', title: 'Eliminar' }
  ];
  configuration;
  constructor(private router: Router, private service: InventoryCategoryService) {
    this.configuration = ConfigService.config;
   }

  ngOnInit() {
    this.service.getAllCategories().subscribe(
      (data: InventoryCategory[] ) => {
         this.inventoryCategories = data;
       }
     ); 
     setInterval(() => { this.getAllCategories(); }, 1000);
  }

  toggle(key: string, isChecked: boolean): void {
    console.log('key: ', key, isChecked);
    this.configuration[key] = isChecked;
    this.configuration = { ...this.configuration };
  }

  createInventoryCategory(): void {
    this.service.insertCategory(this.inventoryCategory)
    .subscribe(data => {
     
    });
    }

  getAllCategories(){
    this.service.getAllCategories().subscribe(
      (data: InventoryCategory[] ) => {
         this.inventoryCategories = data;
       }
     ); 
  }

  edit(inventoryCategory: String){
    
    this.inventoryCategoryId= inventoryCategory;
      this.primario=false;
      this.secundario=true;
  }

  showModal(inventoryCategory: InventoryCategory) {
    this.inventoryCategoryDelete=inventoryCategory;
    this.modalDelete = true;
  }

  hideModal() {
    this.inventoryCategoryDelete=new InventoryCategory();
    this.modalDelete = false;
  }

  aceptDelete(){
    this.service.inventoryCategoryDelete(this.inventoryCategoryDelete.id).subscribe();
    this.getAllCategories();
    this.modalDelete = false;
   
  }

}
