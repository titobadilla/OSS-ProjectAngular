import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkOrderType } from '../model/workOrderType.model';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderTypeService {

  URLAPI=Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public insertWorkOrderType(workOrderType:WorkOrderType):Observable<WorkOrderType>{
    return this.http.post<WorkOrderType>(this.URLAPI+'workordertype/',workOrderType );
  }

  public getAllWorkOrdersType():Observable<WorkOrderType[]>{
    return this.http.get<WorkOrderType[]>(this.URLAPI+'workordertype/');
  }

  public getByIdWorkOrderType(id:number):Observable<WorkOrderType>{
    return this.http.get<WorkOrderType>(this.URLAPI+'workordertype/find/'+id);
  }

  public updateWorkOrderType(workOrderType:WorkOrderType):Observable<WorkOrderType>{
    return this.http.put<WorkOrderType>(this.URLAPI+'workordertype/update/'+workOrderType.id,workOrderType);
  }

  public deleteWorkOrderType(id:number):Observable<WorkOrderType>{
    return this.http.delete<WorkOrderType>(this.URLAPI+'workordertype/'+id);
  }

}
