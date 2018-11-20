import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Environment} from '../app.environment';
import { ModelBrand } from '../model/modelbrand.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModelBrandService {

  URLAPI=Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public insertModelBrand(modelBrand:ModelBrand):Observable<ModelBrand>{
    return this.http.post<ModelBrand>(this.URLAPI+'modelbrand/',ModelBrand );
  }

  public getAllModelBrand():Observable<ModelBrand[]>{
    return this.http.get<ModelBrand[]>(this.URLAPI+'modelbrand/');
  }

  public getByIdDevice(serialNumber:String):Observable<ModelBrand>{
    return this.http.get<ModelBrand>(this.URLAPI+'modelBrand/'+serialNumber);
  }

  public updateModelBrand(modelBrand:ModelBrand):Observable<ModelBrand>{
    return this.http.put<ModelBrand>(this.URLAPI+'modelBrand',modelBrand);
  }

  public deleteModelBrand(serialNumber:String):Observable<ModelBrand>{
    return this.http.delete<ModelBrand>(this.URLAPI+'modelBrand/'+serialNumber);
  }

}