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
          return this.http.get<WorkOrder[]>(this.URLAPI+'workorder/');
      }

      public getByIdWorkOrder(id: number):Observable<WorkOrder>{
          return this.http.get<WorkOrder>(this.URLAPI+'workorder/'+id);
      }

      public insertWorkOrder(workOrder: WorkOrder):Observable<WorkOrder>{
          return this.http.post<WorkOrder>(this.URLAPI+'workorder/addWorkOrder', workOrder);
      }
   
      
      public updateWorkOrder(workOrder:WorkOrder):Observable<WorkOrder>{
        return this.http.put<WorkOrder>(this.URLAPI+'workorder/' + workOrder.id, workOrder);
      }

      public deleteWorkOrder(id:number):Observable<WorkOrder>{
        return this.http.delete<WorkOrder>(this.URLAPI+'workorder/'+ id);
      }
}