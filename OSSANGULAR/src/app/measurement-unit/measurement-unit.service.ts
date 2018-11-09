import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Environment} from '../app.environment';
import { MeasurementUnit } from './insert-measurement-unit/measurementUnit';

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

  
  public getAllMeasurementUnits(){
    return this.http.get(Environment.apiUrl+'measurementunit/');
  }

  public updateMeasurementUnit(measurementUnit:MeasurementUnit){
    return this.http.put(this.url+'/addMeasurementUnit/', measurementUnit);
  }
}
