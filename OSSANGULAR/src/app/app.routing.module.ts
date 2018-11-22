
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InsertInventoryCategoryComponent } from './inventory-category/insert-inventory-category/insert-inventory-category.component';
import { ClientComponent } from './client/client.component';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { DeviceComponent } from './device/device.component';
import { DeviceStateComponent } from './device-state/device-state.component';
import { MenuComponent } from './menu/menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InsertDeviceComponent } from './device/insert-device/insert-device.component';
import { InsertMeasurementUnitComponent } from './measurement-unit/insert-measurement-unit/insert-measurement-unit.component';
import { UpdateMeasurementUnitComponent } from './measurement-unit/update-measurement-unit/update-measurement-unit.component';
import { UpdateDeviceComponent } from './device/update-device/update-device.component';
import { InsertClientComponent} from './client/insert-client/insert-client.component';
import { InsertModelBrandComponent } from './model-brand/insert-model-brand/insert-model-brand.component';


const routes: Routes = [
    {path:'',redirectTo:'search-home',pathMatch:'full'},
    {path: "app-menu", component: MenuComponent, outlet:'menu' },
    {path: "app-device", component: DeviceComponent } ,  
    {path: "app-insert-device", component: InsertDeviceComponent },
    {path: "app-update-device", component: UpdateDeviceComponent },
    {path: "app-home-admin", component: HomeAdminComponent },
    {path: "app-client", component: ClientComponent},
    {path: "app-insert-measurement-unit", component: InsertMeasurementUnitComponent},
    {path: "app-insert-inventory-category", component: InsertInventoryCategoryComponent},
    {path: "app-update-measurement-unit", component: UpdateMeasurementUnitComponent},
    {path: "app-measurement-unit", component:MeasurementUnitComponent},
    {path: "app-insert-client", component: InsertClientComponent},
    {path: "app-model-brand", component: ModelBrandComponent},
    {path: "app-insert-model-brand", component: InsertModelBrandComponent}
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}