import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../model/client.model';
import { Router } from '@angular/router';
import { ClientService } from '../client-service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {


  @Input() clientId: String;

  client: Client = new Client();

  constructor(private router: Router, private service: ClientService) { }

  ngOnInit() {
    this.service.getByIdClient(this.clientId).subscribe(
      data => {
        this.client = data;
      }
    );
  }


  updateClient() {
    this.service.updateClient(this.client).subscribe(
      (data: Client) => {
        this.client = data;
      }
    )
  }

}
