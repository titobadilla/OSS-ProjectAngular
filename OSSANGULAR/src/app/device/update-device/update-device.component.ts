import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Device } from '../../model/device.model';

import { DeviceState } from '../../model/devicestate.model';
import { InventoryCategory } from '../../model/inventorycategory.model';
import { ModelBrand } from '../../model/modelbrand.model';
import { DeviceService } from '../device.service';
import { MeasurementUnitService } from '../../measurement-unit/measurement-unit.service';
import { InventoryCategoryService } from '../../inventory-category/inventory-category-service';
import { ModelBrandService } from '../../model-brand/model-brand.service';
import { DeviceStateService } from '../../device-state/device-state.service';
import { MeasurementUnit } from '../../model/measurementunit.model';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit{
  


  @Input() serialNumberDevice:String;

  device: Device = new Device();
  idDevice:String;

  units: MeasurementUnit[];
  states: DeviceState[];
  categories: InventoryCategory[];
  brandsModels: ModelBrand[];

  constructor(private deviceService: DeviceService, private unitService: MeasurementUnitService,
    private brandService: ModelBrandService, private categoryService: InventoryCategoryService,
    private deviceStateService: DeviceStateService) {
    this.inicializarDatos();

       }

    ngOnInit(){
      //alert( this.serialNumberDevice);
      this.deviceService.getByIdDevice(this.serialNumberDevice).subscribe(
        data=>{
          this.device=data;
        }
      );
      this.idDevice=this.serialNumberDevice;
    }

    



  public inicializarDatos() {
      
    this.deviceStateService.getAllDeviceStates().subscribe(
      data => { this.states = data; }
    );

    this.unitService.getAllMeasurementUnits().subscribe(data => {
      this.units = data;
    });

    this.brandService.getAllModelBrand().subscribe(data => {
      this.brandsModels = data;
    });

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

  }

  public editDevice(){
    this.deviceService.updateDevice(this.device).subscribe();
  }

}
