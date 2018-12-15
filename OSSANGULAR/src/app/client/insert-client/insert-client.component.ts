import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { Router } from '@angular/router';
import { InsertClientService } from '../../client/insert-client/insert-client-service';
import { ClientService } from '../../client/client-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert-client',
  templateUrl: './insert-client.component.html',
  styleUrls: ['./insert-client.component.css']
})
export class InsertClientComponent implements OnInit {

  client: Client = new Client();
 // public isError = true;
  public sucess = false;
  constructor(private router: Router, private service: ClientService) { }

  ngOnInit() {
  }

  insert(form: NgForm): void {
    if (form.valid) {
      this.service.insertClient(this.client).subscribe(data => {
      });
      form.reset();
      this.sucess = true;
      setInterval(()=>{
        this.sucess = false;
      }, 4000);
    }

  }
}
