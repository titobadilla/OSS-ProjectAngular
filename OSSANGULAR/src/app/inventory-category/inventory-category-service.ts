import { Injectable } from '@angular/core';
import {Environment} from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InventoryCategory } from '../model/inventorycategory.model';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';

@Injectable({
  providedIn: 'root'
})
export class InventoryCategoryService {
  
  URLAPI=Environment.apiUrl;
  reqHeader:any;
  tokenCrypt:any;

  constructor(private http: HttpClient,private token:TokenStorage) { }

  private getTokenHeader(){
    this.tokenCrypt=this.token.getToken();
    if(this.tokenCrypt!=null){
      this.reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenCrypt
     });
    }
    else{
      this.reqHeader=null;      
    }
  }

  public insertCategory (inventoryCategory:InventoryCategory){
    console.log(inventoryCategory.name)
    this.getTokenHeader();
    return this.http.post(this.URLAPI+'inventoryCategory/insert',inventoryCategory, { headers: this.reqHeader });
  }

  public getAllCategories():Observable<InventoryCategory[]>{
    this.getTokenHeader();
    return this.http.get<InventoryCategory[]>(this.URLAPI+'inventoryCategory/', { headers: this.reqHeader });
  }

  public updateInventoryCategory(inventoryCategory:InventoryCategory):Observable<InventoryCategory>{
    this.getTokenHeader();
    return this.http.put<InventoryCategory>(this.URLAPI+'inventoryCategory/'+inventoryCategory.id, inventoryCategory, { headers: this.reqHeader });
  }

  public getByIdInventoryCategory(inventoryCategoryId:String){
    this.getTokenHeader();
    return this.http.get<InventoryCategory>(this.URLAPI+'inventoryCategory/find/'+inventoryCategoryId, { headers: this.reqHeader });
  }

  public inventoryCategoryDelete(id: number):Observable<InventoryCategory>{
    this.getTokenHeader();
    return this.http.delete<InventoryCategory>(this.URLAPI+'inventoryCategory/'+id, { headers: this.reqHeader });
  }

}
