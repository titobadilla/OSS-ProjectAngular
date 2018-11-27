import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { Router } from '@angular/router';
import { InsertClientService } from '../../client/insert-client/insert-client-service';
import { ClientService } from '../../client/client-service';

@Component({
  selector: 'app-insert-client',
  templateUrl: './insert-client.component.html',
  styleUrls: ['./insert-client.component.css']
})
export class InsertClientComponent implements OnInit {

  client: Client;

  constructor(private router: Router, private service: ClientService) { }

  ngOnInit() {
  }

  insert(): void {
    this.service.insertClient(this.client).subscribe(data =>{
      
    })
  }

 /* insert(){
    this.insertClientService.insertClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }*/

}
