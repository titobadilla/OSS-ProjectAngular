import { Injectable } from '@angular/core';
import {Environment} from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportWoDate } from '../model/report-wo-date';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reqHeader:any;
  tokenCrypt:any
  private requestMapping = 'reports';
  private url = Environment.apiUrl + this.requestMapping;
  report: ReportWoDate = new ReportWoDate();

  constructor(private http: HttpClient,private token:TokenStorage) { }

  
  private getTokenHeader(){
    this.tokenCrypt=this.token.getToken();
    if(this.tokenCrypt!=null){
      this.reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenCrypt
     });
    }
    else{
      this.reqHeader=null;      
    }
  }


  public getAllWoClients():Observable<ReportWoDate[]>{
    this.getTokenHeader();
    return this.http.get<ReportWoDate[]>(this.url+'/',{ headers: this.reqHeader });
  }

  public getReport(nameClient: String, date: String){
    this.getTokenHeader();
  this.report.nameClient= nameClient;
  this.report.date = date;

    return this.http.post(this.url+'/',this.report, { headers: this.reqHeader });
  }
}
