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

  private requestMaping = 'client/';
  private url = Environment.apiUrl + this.requestMaping;
  
  public getAllClients(){
    return this.http.get(this.url);        
  }

  public insertClient(client:Client){
    return this.http.post(this.url+'insert/', client);
  }
  
  public updateClient(client:Client){
    return this.http.put(this.url+'updateClient', client);
  }
  
  public deleteClient(id:string){
    return this.http.delete(this.url+id);
  }

  public getByIdClient(clientId: String){
    return this.http.get<Client>(this.url+'/getById'+ clientId);
  }
  /* public getByIdModelBrand(modelBrandtId:String){
    return this.http.get<ModelBrand>(this.url + '/' + modelBrandtId);
  } */
  
}
