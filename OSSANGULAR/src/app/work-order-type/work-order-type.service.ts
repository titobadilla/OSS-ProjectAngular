import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkOrderType } from '../model/workOrderType.model';
import { TokenStorage } from '../authentication/helper/token-storage';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderTypeService {

  URLAPI=Environment.apiUrl;
  reqHeader:any;
  tokenCrypt:any;

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

  public insertWorkOrderType(workOrderType:WorkOrderType):Observable<WorkOrderType>{
    this.getTokenHeader();
    return this.http.post<WorkOrderType>(this.URLAPI+'workordertype/',workOrderType, { headers: this.reqHeader } );
  }

  public getAllWorkOrdersType():Observable<WorkOrderType[]>{
    this.getTokenHeader();
    return this.http.get<WorkOrderType[]>(this.URLAPI+'workordertype/', { headers: this.reqHeader });
  }

  public getByIdWorkOrderType(id:number):Observable<WorkOrderType>{
    this.getTokenHeader();
    return this.http.get<WorkOrderType>(this.URLAPI+'workordertype/find/'+id, { headers: this.reqHeader });
  }

  public updateWorkOrderType(workOrderType:WorkOrderType):Observable<WorkOrderType>{
    this.getTokenHeader();
    return this.http.put<WorkOrderType>(this.URLAPI+'workordertype/update/'+workOrderType.id,workOrderType, { headers: this.reqHeader });
  }

  public deleteWorkOrderType(id:number):Observable<WorkOrderType>{
    this.getTokenHeader();
    return this.http.delete<WorkOrderType>(this.URLAPI+'workordertype/'+id, { headers: this.reqHeader });
  }

}
