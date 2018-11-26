import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../model/client.model';
import { UpdateClientService } from '../../client/update-client/update-client-service';
import {Router} from '@angular/router';
import { ClientService } from '../client-service'; 


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  // @Input() serialNumberDevice:String;

  @Input() clientIdInput:String;

  public client: Client;
  public clientId: String;
  
  constructor(private router: Router, private service: ClientService) { }

  ngOnInit() {
    this.service.getByIdClient(this.clientId).subscribe(data => {
      this.client = data;
    });
  }

  
  update(){
    this.service.updateClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

}
