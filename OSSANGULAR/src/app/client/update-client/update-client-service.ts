import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../../app.environment';
import { Client } from '../../model/client.model';

@Injectable({
  providedIn: 'root'
})

export class UpdateClientService{

    constructor(private http: HttpClient) { }
    
      private requestMaping = 'client/';
      private url = Environment.apiUrl + this.requestMaping;

      public updateClient(client:Client){
        return this.http.put(this.url+'updateClient', client);
      }
}