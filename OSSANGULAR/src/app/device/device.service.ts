import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from "../app.environment";
import { Device } from '../model/device.model';
import { Observable } from 'rxjs';
import { TokenStorage } from '../authentication/helper/token-storage';



@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  URLAPI=Environment.apiUrl;
  reqHeader:any;
  tokenCrypt:any;
  
  constructor(private http: HttpClient,private token:TokenStorage) { 
    
  }

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

  public insertDevice(device:Device):Observable<Device>{
    this.getTokenHeader();
    return this.http.post<Device>(this.URLAPI+'device/',device, { headers: this.reqHeader } );
  }

  public getAllDevices():Observable<Device[]>{
    this.getTokenHeader();
    return this.http.get<Device[]>(this.URLAPI+'device', { headers: this.reqHeader });
  }

  public getByIdDevice(serialNumber:String):Observable<Device>{
    this.getTokenHeader();
    return this.http.get<Device>(this.URLAPI+'device/'+serialNumber, { headers: this.reqHeader });
  }

  public updateDevice(device:Device):Observable<Device>{
    this.getTokenHeader();
    return this.http.put<Device>(this.URLAPI+'device/update',device, { headers: this.reqHeader });
  }

  public deleteDevice(serialNumber:String):Observable<Device>{
    this.getTokenHeader();
    return this.http.delete<Device>(this.URLAPI+'device/'+serialNumber, { headers: this.reqHeader });
  }

}
