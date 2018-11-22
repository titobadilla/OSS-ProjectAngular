
import { Component, ViewChild, TemplateRef, OnChanges, OnInit } from '@angular/core';
import { ConfigService } from './configurationtable.service';
import { DeviceService } from './device.service';
import { Device } from '../model/device.model';
import { UpdateDeviceComponent } from './update-device/update-device.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [ConfigService]
})
export class DeviceComponent implements OnInit{

  @ViewChild('updateDevice') childOne:UpdateDeviceComponent;
  editDevice:Device;
  serialNumber:String;

  primario:boolean=true;
  secundario:boolean=false;
  columns = [
    { key: 'serialNumber', title: 'Número de serie' },
    { key: 'name', title: 'Nombre' },
    { key: 'manufacturerModel', title: 'Modelo de manufacturador' },
    { key: 'description', title: 'Descripción' },
    { key: 'quantity', title: 'Cantidad' },
    { key: 'state', title: 'Estado' },
    { key: 'category', title: 'Categoría' },
    { key: 'model', title: 'Modelo' },
    { key: 'brand', title: 'Marca' },
    { key: 'unit', title: 'Unid.medida' },
    { key: 'edit', title: 'Editar' },
    { key: 'remove', title: 'Eliminar' }

  ];
  selected;
  devices:Device[]=new Array();
  modalDelete = false;
  deviceDelete:Device;


  configuration;
  constructor(private deviceService:DeviceService) {
    this.configuration = ConfigService.config;
    setInterval(() => { this.getAllDevices(); }, 10000);


  }

  ngOnInit(){
    this.getAllDevices();
  }
 

  public imprimir(){
    console.log(this.devices);
  }

  public getAllDevices(){
    this.deviceService.getAllDevices().subscribe(
      data=>{
        this.devices=data
      }
    );
  }
  
  showModal(device:Device) {
    this.deviceDelete=device;
    this.modalDelete = true;
  }

  hideModal() {
    this.deviceDelete=new Device();
    this.modalDelete = false;
  }

  aceptDelete(){
    this.deviceService.deleteDevice(this.deviceDelete.serialNumber).subscribe();
    this.getAllDevices();
    this.modalDelete = false;
    this.getAllDevices();
   
  }

  edit(device:Device){
      this.serialNumber=device.serialNumber;
      this.editDevice=device;
      this.primario=false;
      this.secundario=true;

  }

}
