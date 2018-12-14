import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../app.environment';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  reqHeader:any;
  tokenCrypt:any

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


  private requestMapping = 'client/';
  private url = Environment.apiUrl + this.requestMapping;

  public getAllClients(): Observable<Client[]> {
    this.getTokenHeader();
    return this.http.get<Client[]>(Environment.apiUrl + 'client/', { headers: this.reqHeader });
  }

  public insertClient(client: Client) {
    this.getTokenHeader();
    return this.http.post(this.url + 'insert/', client, { headers: this.reqHeader });
  }

  public updateClient(client: Client) {
    this.getTokenHeader();
    return this.http.put(this.url + 'updateClient/', client, { headers: this.reqHeader });
  }

  public deleteClient(id: string) {
    this.getTokenHeader();
    return this.http.delete(this.url + id, { headers: this.reqHeader });
  }

  public getByIdClient(clientId: String) {
    this.getTokenHeader();
    return this.http.get<Client>(this.url+ clientId, { headers: this.reqHeader });
  }


}
