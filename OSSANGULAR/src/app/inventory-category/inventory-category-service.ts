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
    return this.http.post(this.URLAPI+'/inventoryCategory/insert',inventoryCategory);
  }

  public getAllCategories():Observable<InventoryCategory[]>{
    return this.http.get<InventoryCategory[]>(this.URLAPI+'inventoryCategory/');
  }

}
