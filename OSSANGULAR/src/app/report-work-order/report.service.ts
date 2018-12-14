import { Injectable } from '@angular/core';
import {Environment} from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportWoDate } from '../model/report-wo-date';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private requestMapping = 'reports';
  private url = Environment.apiUrl + this.requestMapping;
  report: ReportWoDate = new ReportWoDate();
  constructor(private http: HttpClient) { }

  public getAllWoClients():Observable<ReportWoDate[]>{
    return this.http.get<ReportWoDate[]>(this.url+'/');
  }

  public getReport(nameClient: String, date: String){
  this.report.nameClient= nameClient;
  this.report.date = date;

    return this.http.post(this.url+'/',this.report);
  }
}
