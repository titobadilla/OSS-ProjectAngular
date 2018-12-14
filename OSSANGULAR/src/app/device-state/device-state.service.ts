import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceState } from '../model/devicestate.model';
import { TokenStorage } from '../authentication/helper/token-storage';

@Injectable({
  providedIn: 'root'
})
export class DeviceStateService {
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

  public insertDeviceState(deviceState:DeviceState):Observable<DeviceState>{
    this.getTokenHeader();
    return this.http.post<DeviceState>(this.URLAPI+'device/',deviceState ,{ headers: this.reqHeader } );
  }

  public getAllDeviceStates():Observable<DeviceState[]>{
    this.getTokenHeader();
    return this.http.get<DeviceState[]>(this.URLAPI+'deviceState', { headers: this.reqHeader } );
  }

  public getByIdDeviceState(id:number):Observable<DeviceState>{
    this.getTokenHeader();
    return this.http.get<DeviceState>(this.URLAPI+'deviceState/'+id, { headers: this.reqHeader } );
  }

  public updateDeviceState(deviceState:DeviceState):Observable<DeviceState>{
    this.getTokenHeader();
    return this.http.put<DeviceState>(this.URLAPI+'device',deviceState, { headers: this.reqHeader } );
  }

  public deleteDeviceState(id:number):Observable<DeviceState>{
    this.getTokenHeader();
    return this.http.delete<DeviceState>(this.URLAPI+'device/'+id, { headers: this.reqHeader } );
  }
}
