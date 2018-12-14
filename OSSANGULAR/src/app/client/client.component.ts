import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from './client-service';
import { Router } from '@angular/router';
import { UpdateClientComponent } from '../client/update-client/update-client.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @ViewChild('clientId') childOne: UpdateClientComponent;
  clients: Client[] = new Array<Client>();
  client: Client;
  clientEdit: Client;
  deleteClient: Client = new Client();
  clientId: String;

  primario: boolean = true;
  secundario: boolean = false;
  modalDelete = false;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      (data: Client[]) =>{
        this.clients = data;
      }
    );    
    setInterval(() => { this.getAll();}, 10000);
  }
  
/** ngOnInit() {
    this.service.getAllModelBrand().subscribe(
      (data: ModelBrand[]) => {
        this.modelBrands = data;
      }
    );
    setInterval(() => { this.getAllModelBrand(); }, 500);
  } */


  getAll(){
    this.clientService.getAllClients().subscribe(
      (data: Client[])=>{
        this.clients = data;
      }
    )
  }


  insert(): void {
    this.clientService.insertClient(this.client).subscribe(data =>{

    });
  }

/**createMeasurementUnit(): void {
    this.service.insertMeasurementUnit(this.measurementUnit)
    .subscribe(data => {
     
    });
    }
 */

  update(client: String){
    this.clientId = client;
    this.primario = false;
    this.secundario = true;
  }

  showModal(client: Client){
    this.deleteClient = client;
    this.modalDelete = true;
  }

  hideModal(){
    this.deleteClient = new Client;
    this.modalDelete = false;
  }

  aceptDelete(){
    this.clientService.deleteClient(this.deleteClient.id).subscribe();
    this.getAll();
    this.modalDelete = false;
  }
  
}
