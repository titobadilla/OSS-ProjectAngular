import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceState } from '../model/devicestate.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceStateService {
  URLAPI=Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public insertDeviceState(deviceState:DeviceState):Observable<DeviceState>{
    return this.http.post<DeviceState>(this.URLAPI+'device/',deviceState );
  }

  public getAllDeviceStates():Observable<DeviceState[]>{
    return this.http.get<DeviceState[]>(this.URLAPI+'deviceState');
  }

  public getByIdDeviceState(id:number):Observable<DeviceState>{
    return this.http.get<DeviceState>(this.URLAPI+'deviceState/'+id);
  }

  public updateDeviceState(deviceState:DeviceState):Observable<DeviceState>{
    return this.http.put<DeviceState>(this.URLAPI+'device',deviceState);
  }

  public deleteDeviceState(id:number):Observable<DeviceState>{
    return this.http.delete<DeviceState>(this.URLAPI+'device/'+id);
  }
}
