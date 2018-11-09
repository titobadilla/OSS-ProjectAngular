import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../../model/device.model';

@Component({
  selector: 'app-insert-device',
  templateUrl: './insert-device.component.html',
  styleUrls: ['./insert-device.component.css']
})
export class InsertDeviceComponent {

  device:Device=new Device();
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;

  constructor(private deviceService:DeviceService) { }

  public createDevice(){
    this.deviceService.insertDevice(this.device).subscribe();
  }


}
