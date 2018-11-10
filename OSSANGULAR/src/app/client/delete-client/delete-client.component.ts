import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { Router } from '@angular/router';
import { DeleteClientService } from '../../client/delete-client/delete-client-service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  public clients: Client[] = new Array<Client>();
  public client: Client;

  constructor(private router: Router, private deleteClientService: DeleteClientService) { }

  ngOnInit() {
  }

  delete(){
    this.deleteClientService.deleteClient(this.client.id).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

}
