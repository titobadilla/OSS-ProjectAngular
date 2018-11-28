import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../app.environment';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private requestMapping = 'client/';
  private url = Environment.apiUrl + this.requestMapping;

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(Environment.apiUrl + 'client/');
  }

  /**
   *   public insertModelBrand(modelBrand: ModelBrand) {
      return this.http.post(this.url + '/insertModelBrand/', modelBrand);
      }
   */
  public insertClient(client: Client) {
    return this.http.post(this.url + '/insert/', client);
  }

  public updateClient(client: Client) {
    return this.http.put(this.url + '/updateClient', client);
  }

  public deleteClient(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  public getByIdClient(clientId: String) {
    return this.http.get<Client>(this.url + '/' + clientId);
  }
  /* public getByIdModelBrand(modelBrandtId:String){
    return this.http.get<ModelBrand>(this.url + '/' + modelBrandtId);
  } */

}
