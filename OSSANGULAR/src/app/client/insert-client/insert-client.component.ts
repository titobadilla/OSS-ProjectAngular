import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { Router } from '@angular/router';
import { InsertClientService } from '../../client/insert-client/insert-client-service';

@Component({
  selector: 'app-insert-client',
  templateUrl: './insert-client.component.html',
  styleUrls: ['./insert-client.component.css']
})
export class InsertClientComponent implements OnInit {

  client: Client;

  constructor(private router: Router, private insertClientService: InsertClientService) { }

  ngOnInit() {
  }

  insert(){
    this.insertClientService.insertClient(this.client).subscribe(
      (data:Client) =>{
        this.client = data;
      }
    )
  }

}
