import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../app.environment';
import { WorkOrder } from '../model/workOrder.model';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';


@Injectable({
  providedIn: 'root'
})
export class WorkOrderService{

  reqHeader:any;
  tokenCrypt:any;

    httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
      };
    
      constructor(private http: HttpClient,private token:TokenStorage) { }
    
      URLAPI=Environment.apiUrl;

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

      public getAllWorkOrders(): Observable<WorkOrder[]>{
        this.getTokenHeader();
          return this.http.get<WorkOrder[]>(this.URLAPI+'workorder/', { headers: this.reqHeader } );
      }
      public getAllWorkOrderswithoutEmployee(): Observable<WorkOrder[]>{
        this.getTokenHeader();
        return this.http.get<WorkOrder[]>(this.URLAPI+'workorder/withoutEmployee/', { headers: this.reqHeader } );
    }

      public getByIdWorkOrder(id: number):Observable<WorkOrder>{
        this.getTokenHeader();
          return this.http.get<WorkOrder>(this.URLAPI+'workorder/find/'+id, { headers: this.reqHeader } );
      }

      public insertWorkOrder(workOrder: WorkOrder):Observable<WorkOrder>{
        this.getTokenHeader();
          return this.http.post<WorkOrder>(this.URLAPI+'workorder/addWorkOrder', workOrder, { headers: this.reqHeader } );
      }
   
      
      public updateWorkOrder(workOrder:WorkOrder):Observable<WorkOrder>{
        this.getTokenHeader();
        return this.http.put<WorkOrder>(this.URLAPI+'workorder/' + workOrder.id, workOrder, { headers: this.reqHeader } );
      }

      public deleteWorkOrder(id:number):Observable<WorkOrder>{
        this.getTokenHeader();
        return this.http.delete<WorkOrder>(this.URLAPI+'workorder/'+ id, { headers: this.reqHeader } );
      }
}