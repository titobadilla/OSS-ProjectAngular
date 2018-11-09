import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { UpdateClientService } from '../../client/update-client/update-client-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  public client: Client;
  
  constructor(private router: Router, private updateClientService: UpdateClientService) { }

  ngOnInit() {
  }

  update(){
    this.updateClientService.updateClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

}
