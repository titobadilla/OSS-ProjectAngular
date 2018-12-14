import { Component, OnInit } from '@angular/core';
import { ReportWoDate } from '../model/report-wo-date';
import { Router } from '@angular/router';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report-work-order',
  templateUrl: './report-work-order.component.html',
  styleUrls: ['./report-work-order.component.css']
})
export class ReportWorkOrderComponent implements OnInit {

  reports: ReportWoDate[] = new Array<ReportWoDate>();
  nameClient: String;
  date: String;

  constructor(private router: Router, private service: ReportService) {

  }

  ngOnInit() {
    this.service.getAllWoClients().subscribe(
      (data: ReportWoDate[]) => {
        this.reports = data;
      }
    );
  }

  getReport() {
    this.service.getReport(this.nameClient,this.date).subscribe(
      (data: ReportWoDate[]) => {
        this.reports = data;
      }
    );
   
  }

  getAll(){
    this.service.getAllWoClients().subscribe(
      (data: ReportWoDate[]) => {
        this.reports = data;
      }
    );
  }
}
