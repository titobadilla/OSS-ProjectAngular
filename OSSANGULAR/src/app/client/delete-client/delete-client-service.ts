import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../../app.environment';
import { Client } from '../../model/client.model';

@Injectable({
  providedIn: 'root'
})

export class DeleteClientService{
    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
      };
      
    constructor(private http: HttpClient) { }

    private requestMaping = 'client/';
    private url = Environment.apiUrl + this.requestMaping;

    public deleteClient(id:string){
        return this.http.delete(this.url+id);
      }
      
}