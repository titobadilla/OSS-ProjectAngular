
import { Component, ViewChild, TemplateRef } from '@angular/core';
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
export class DeviceComponent {
  @ViewChild('detailsTemplate') detailsTemplateRef: TemplateRef<any>;
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
    { key: 'category', title: 'Modelo' },
    { key: 'quantity', title: 'Marca' },
    { key: 'brand', title: 'Unid.medida' },
    { key: 'edit', title: 'Editar' },
    { key: 'remove', title: 'Eliminar' }

  ];
  selected;
  devices:Device[]=new Array();
  modalDelete = false;
  deviceDelete:Device;


  checked = {
    'paginationEnabled': true,
    'headerEnabled': true,
    'searchEnabled': false,
    'collapseAllRows': false,
    'isLoading': false,
    'checkboxes': false,
    'draggable': false,
    'fixedColumnWidth': false,
    'logger': false,
  };
  configuration;
  constructor(private deviceService:DeviceService) {
    this.configuration = ConfigService.config;
    setInterval(() => { this.getAllDevices(); }, 1000);
    //this.getAllDevices();

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
  
  onEvent(event) {
    console.log(event);
    this.selected = JSON.stringify(event.value.row, null, 2);
  }

  toggle(key: string, isChecked: boolean): void {
    console.log('key: ', key, isChecked);
    this.checked[key] = isChecked;
    this.configuration[key] = isChecked;
    this.configuration = { ...this.configuration };
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
   
  }

  edit(device:Device){
    console.log(device);
      this.serialNumber=device.serialNumber;
      this.editDevice=device;
      this.primario=false;
      this.secundario=true;

  }

}
