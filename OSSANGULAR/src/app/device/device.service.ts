import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from "../app.environment";
import { Device } from '../model/device.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  URLAPI=Environment.apiUrl;

  constructor(private http: HttpClient) { }

  public insertDevice(device:Device):Observable<Device>{
    return this.http.post<Device>(this.URLAPI+'device/',device );
  }

  public getAllDevices():Observable<Device[]>{
    return this.http.get<Device[]>(this.URLAPI+'device');
  }

  public getByIdDevice(serialNumber:String):Observable<Device>{
    return this.http.get<Device>(this.URLAPI+'device/'+serialNumber);
  }

  public updateDevice(device:Device):Observable<Device>{
    return this.http.put<Device>(this.URLAPI+'device/update',device);
  }

  public deleteDevice(serialNumber:String):Observable<Device>{
    return this.http.delete<Device>(this.URLAPI+'device/'+serialNumber);
  }

}
