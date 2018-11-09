import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-insert-device',
  templateUrl: './insert-device.component.html',
  styleUrls: ['./insert-device.component.css']
})
export class InsertDeviceComponent implements OnInit {

  constructor(private deviceService:DeviceService) { }

  ngOnInit() {
  }

}
