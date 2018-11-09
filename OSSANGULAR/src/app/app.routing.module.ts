
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InventoryCategoryComponent } from './inventory-category/inventory-category.component';
import { ClientComponent } from './client/client.component';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { DeviceComponent } from './device/device.component';
import { DeviceStateComponent } from './device-state/device-state.component';
import { MenuComponent } from './menu/menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InsertDeviceComponent } from './device/insert-device/insert-device.component';


const routes: Routes = [
    {path:'',redirectTo:'search-home',pathMatch:'full'},
    {path: "app-menu", component: MenuComponent, outlet:'menu' },
    {path: "app-device", component: DeviceComponent } ,  
    {path: "app-insert-device", component: InsertDeviceComponent },
    {path: "app-home-admin", component: HomeAdminComponent },
    {path: "app-client", component: ClientComponent}
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}