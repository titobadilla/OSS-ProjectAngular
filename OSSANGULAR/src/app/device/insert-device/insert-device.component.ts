import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../../model/device.model';
import { MeasurementUnitService } from '../../measurement-unit/measurement-unit.service';
import { ModelBrandService } from '../../model-brand/model-brand.service';
import { InventoryCategoryService } from '../../inventory-category/inventory-category-service';
import { DeviceStateService } from '../../device-state/device-state.service';
import { DeviceState } from '../../model/devicestate.model';
import { InventoryCategory } from '../../model/inventorycategory.model';
import { ModelBrand } from '../../model/modelbrand.model';
import { MeasurementUnit } from '../../model/measurementunit.model';

@Component({
  selector: 'app-insert-device',
  templateUrl: './insert-device.component.html',
  styleUrls: ['./insert-device.component.css']
})
export class InsertDeviceComponent {

  units: MeasurementUnit[];
  states:DeviceState[];
  categories:InventoryCategory[];
  brandsModels:ModelBrand[];

  device:Device=new Device();

  constructor(private deviceService:DeviceService,private unitService:MeasurementUnitService,
    private brandService:ModelBrandService,private categoryService:InventoryCategoryService,
    private deviceStateService:DeviceStateService) { 

      this.traerInicio();
    }

 public traerInicio(){
   this.deviceStateService.getAllDeviceStates().subscribe(
     data=>{this.states=data;}
   );

   this.unitService. getAllMeasurementUnits().subscribe(data=>{
     this.units=data;
   });

   /*this.brandService.getAllModelBrands().subscribe(data=>{
     this.brandsModels=data;
   });*/

   this.categoryService.getAllCategories().subscribe(data=>{
    this.categories=data;
   });

  }


  public createDevice(){
       this.deviceService.insertDevice(this.device).subscribe();
  }


}
