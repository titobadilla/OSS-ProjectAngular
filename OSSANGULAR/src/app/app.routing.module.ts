
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InventoryCategoryComponent } from './inventory-category/inventory-category.component';
import { ClientComponent } from './client/client.component';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { DeviceComponent } from './device/device.component';
import { DeviceStateComponent } from './device-state/device-state.component';


const routes: Routes = [
    {path:'',redirectTo:'search-home',pathMatch:'full'},
   
    
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}