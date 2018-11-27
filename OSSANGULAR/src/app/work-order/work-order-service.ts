import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../app.environment';
import { WorkOrder } from '../model/workOrder.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkOrderService{

    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
      };
    
      constructor(private http: HttpClient) { }
    
      URLAPI=Environment.apiUrl;

      public getAllWorkOrders(): Observable<WorkOrder[]>{
          return this.http.get<WorkOrder[]>(this.URLAPI+'');
      }
      
}