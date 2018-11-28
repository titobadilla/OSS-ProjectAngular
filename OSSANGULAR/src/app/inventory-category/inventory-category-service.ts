import { Injectable } from '@angular/core';
import {Environment} from '../app.environment';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { InventoryCategory } from '../model/inventorycategory.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryCategoryService {
  
  URLAPI=Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public insertCategory (inventoryCategory:InventoryCategory){
    console.log(inventoryCategory.name)
    return this.http.post(this.URLAPI+'/inventoryCategory/insert',inventoryCategory);
  }

  public getAllCategories():Observable<InventoryCategory[]>{
    return this.http.get<InventoryCategory[]>(this.URLAPI+'inventoryCategory/');
  }

  public updateInventoryCategory(inventoryCategory:InventoryCategory):Observable<InventoryCategory>{
    return this.http.put<InventoryCategory>(this.URLAPI+'/inventoryCategory/'+inventoryCategory.id, inventoryCategory);
  }

  public getByIdInventoryCategory(inventoryCategoryId:String){
    return this.http.get<InventoryCategory>(this.URLAPI+'/inventoryCategory/'+inventoryCategoryId);
  }

  public inventoryCategoryDelete(id: number):Observable<InventoryCategory>{
    return this.http.delete<InventoryCategory>(this.URLAPI+'/inventoryCategory/'+id);
  }

}
