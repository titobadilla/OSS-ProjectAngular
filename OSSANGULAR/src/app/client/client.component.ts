import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from './client-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clients: Client[] = new Array<Client>();
  public client: Client;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    
  }
  
  getAll(){
    this.clientService.getAllClients().subscribe(
      (data: Client[])=>{
        this.clients = data;
      }
    )
  }


  insert(){
    this.clientService.insertClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

  update(){
    this.clientService.updateClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

  delete(){
    this.clientService.deleteClient(this.client.id).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }
  
}
