import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../app.environment';
import { ModelBrand } from '../model/modelbrand.model';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';
@Injectable({
  providedIn: 'root'
})
export class ModelBrandService {

  private requestMapping = "modelbrand";
  private url = Environment.apiUrl + this.requestMapping;
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

  public insertModelBrand(modelBrand: ModelBrand) {
    this.getTokenHeader();
    return this.http.post(this.url + '/insertModelBrand/', modelBrand, { headers: this.reqHeader });
  }

  public getAllModelBrand(): Observable<ModelBrand[]> {
    this.getTokenHeader();
    return this.http.get<ModelBrand[]>(Environment.apiUrl + "modelbrand/", { headers: this.reqHeader });
  }

  public getByIdModelBrand(modelBrandId:String){
    this.getTokenHeader();
    return this.http.get<ModelBrand>(this.url + '/' + modelBrandId, { headers: this.reqHeader });
  }

  public updateModelBrand(modelBrand:ModelBrand){
    this.getTokenHeader();
    return this.http.put(this.url+'/updateModelBrand',modelBrand, { headers: this.reqHeader });
  }

  public deleteModelBrand(id: number):Observable<ModelBrand>{
    this.getTokenHeader();
    return this.http.delete<ModelBrand>(this.url+ '/' + id, { headers: this.reqHeader });

  }

}