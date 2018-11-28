import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../app.environment';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  URLAPI=Environment.apiUrl;

  //private requestMaping = 'client/';
  //private url = Environment.apiUrl + this.requestMaping;
  
  public  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.URLAPI+'client/');      
  }

  /**
   *   public insertModelBrand(modelBrand: ModelBrand) {
      return this.http.post(this.url + '/insertModelBrand/', modelBrand);
      }
   */
  public insertClient(client:Client){
    return this.http.post(this.URLAPI+'client/insert/', client);
  }
  
  public updateClient(client:Client){
    return this.http.put(this.URLAPI+'client/updateClient', client);
  }
  
  public deleteClient(id:string){
    return this.http.delete(this.URLAPI+'/client' + id);
  }

  public getByIdClient(clientId: String){
    return this.http.get<Client>(this.URLAPI+'/getById/'+ clientId);
  }
  /* public getByIdModelBrand(modelBrandtId:String){
    return this.http.get<ModelBrand>(this.url + '/' + modelBrandtId);
  } */
  
}
