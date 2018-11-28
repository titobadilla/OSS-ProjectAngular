import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../app.environment';
import { ModelBrand } from '../model/modelbrand.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModelBrandService {

  private requestMapping = "modelbrand";
  private url = Environment.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) { }

  public insertModelBrand(modelBrand: ModelBrand) {
    return this.http.post(this.url + '/insertModelBrand/', modelBrand);
  }

  public getAllModelBrand(): Observable<ModelBrand[]> {
    return this.http.get<ModelBrand[]>(Environment.apiUrl + "modelbrand/");
  }

  public getByIdModelBrand(modelBrandId:String){
    return this.http.get<ModelBrand>(this.url + '/' + modelBrandId);
  }

  public updateModelBrand(modelBrand:ModelBrand){
    return this.http.put(this.url+'/updateModelBrand',modelBrand);
  }

  public deleteModelBrand(id: number):Observable<ModelBrand>{
    return this.http.delete<ModelBrand>(this.url+ '/' + id);

  }

}