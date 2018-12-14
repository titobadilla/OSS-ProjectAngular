import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';
import { TokenStorage } from '../authentication/helper/token-storage';

import { Observable } from 'rxjs';
import { MeasurementUnit } from '../model/measurementunit.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {
  private requestMapping = 'measurementunit';
  private url = Environment.apiUrl + this.requestMapping;
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

  public insertMeasurementUnit (measurementUnit: MeasurementUnit){
    this.getTokenHeader();
    return this.http.post(this.url+'/addMeasurementUnit/',measurementUnit, { headers: this.reqHeader } );
  }
  
  public getAllMeasurementUnits():Observable<MeasurementUnit[]>{
    this.getTokenHeader();
    return this.http.get<MeasurementUnit[]>(Environment.apiUrl+'measurementunit/', { headers: this.reqHeader } );
  }

  public updateMeasurementUnit(measurementUnit:MeasurementUnit):Observable<MeasurementUnit>{
    this.getTokenHeader();
    return this.http.put<MeasurementUnit>(this.url+'/'+measurementUnit.id+'/', measurementUnit, { headers: this.reqHeader } );
  }

  public getByIdMeasurementUnit(measurementUnitId:String){
    this.getTokenHeader();
    return this.http.get<MeasurementUnit>(this.url+'/find/'+measurementUnitId, { headers: this.reqHeader } );
  }

  public measurementUnitDelete(id: number):Observable<MeasurementUnit>{
    this.getTokenHeader();
    return this.http.delete<MeasurementUnit>(this.url+"/"+id, { headers: this.reqHeader } );
  }

}
