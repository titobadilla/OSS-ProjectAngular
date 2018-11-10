import { Injectable } from '@angular/core';
import {Environment} from '../app.environment';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { InventoryCategory } from '../model/inventorycategory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryCategoryService {

  constructor(private http: HttpClient) { }

  private requestMapping = 'inventorycategory/';

  private url = Environment.apiUrl + this.requestMapping;

  public insertCategory (inventoryCategory:InventoryCategory){
    console.log(inventoryCategory.id+ "  "+inventoryCategory.name);
    return this.http.post(this.url+'insert',inventoryCategory);
  }

}
