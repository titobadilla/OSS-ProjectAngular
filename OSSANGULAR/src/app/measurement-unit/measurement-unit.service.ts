import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';

import { Observable } from 'rxjs';
import { MeasurementUnit } from '../model/measurementunit.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {
  private requestMapping = 'measurementunit';
  private url = Environment.apiUrl + this.requestMapping;

  constructor(private http: HttpClient) { }

  public insertMeasurementUnit (measurementUnit: MeasurementUnit){
    return this.http.post(this.url+'/addMeasurementUnit/',measurementUnit);
  }
  
  public getAllMeasurementUnits():Observable<MeasurementUnit[]>{
    return this.http.get<MeasurementUnit[]>(Environment.apiUrl+'measurementunit/');
  }

  public updateMeasurementUnit(measurementUnit:MeasurementUnit):Observable<MeasurementUnit>{
    return this.http.put<MeasurementUnit>(this.url+'/'+measurementUnit.id+'/', measurementUnit);
  }

  public getByIdMeasurementUnit(measurementUnitId:String){
    return this.http.get<MeasurementUnit>(this.url+'/find/'+measurementUnitId);
  }

  public measurementUnitDelete(id: number):Observable<MeasurementUnit>{
    return this.http.delete<MeasurementUnit>(this.url+"/"+id);
  }

}
