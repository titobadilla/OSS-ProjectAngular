import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';
import { ModelBrand } from '../model/modelbrand.model';
@Injectable()
export class ModelBrandService {

  constructor(private http: HttpClient) { }

  private requestMapping = 'modelbrand/';

  private url = Environment.apiUrl + this.requestMapping;

  public insertModelBrand (modelBrand:ModelBrand){
    console.log(modelBrand.model+ "  "+modelBrand.brand);
    return this.http.post(this.url+'insertModelBrand/',modelBrand);
  }

  public getAllModelBrands(){
    return this.http.get(Environment.apiUrl+'modelbrand/');
  }

  public updateModelBrand(modelBrand:ModelBrand){
    return this.http.put(this.url+'/updateModelBrand', modelBrand);
  }

  public deleteCategory(modelBrandId:Number){
    return this.http.delete(this.url+modelBrandId)
  }

}