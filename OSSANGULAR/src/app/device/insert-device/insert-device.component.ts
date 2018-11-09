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
  states = [
    {id: 1, name: 'Bueno'}
];
selectedState:number;

categories = [
  {id: 5, name: 'Camaras'}
];
selectedCategory:number;

brandsModels = [
  {id: 1, name: 'Cisco IP'}
];
selectedBrandModel:number;

units = [
  {id: 1, name: 'Unidades'}
];
selectedUnit:number;

hola:number;

  constructor(private deviceService:DeviceService) { }

  public createDevice(){
    
    this.deviceService.insertDevice(this.device).subscribe();
  }


}
