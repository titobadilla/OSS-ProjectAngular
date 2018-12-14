
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InsertInventoryCategoryComponent } from './inventory-category/insert-inventory-category/insert-inventory-category.component';
import { UpdateInventoryCategoryComponent } from './inventory-category/update-inventory-category/update-inventory-category.component';
import { InventoryCategoryComponent } from './inventory-category/inventory-category.component';
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
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { InsertWorkOrderComponent } from './work-order/insert-work-order/insert-work-order.component';
<<<<<<< HEAD
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './authentication/guards/auth.guard';
=======
import { ReportWorkOrderComponent } from './report-work-order/report-work-order.component';

>>>>>>> a9914cf5d9a7d7b857c98d4594977e1e868dce3b

const routes: Routes = [
    {path:'',redirectTo:'search-home',pathMatch:'full'},
    {path: "app-menu", component: MenuComponent, outlet:'menu' },
<<<<<<< HEAD
    {path: "app-device", component: DeviceComponent, canActivate: [AuthGuard] } ,  
    {path: "app-insert-device", component: InsertDeviceComponent, canActivate: [AuthGuard] },
    {path: "app-update-device", component: UpdateDeviceComponent, canActivate: [AuthGuard] },
    {path: "app-home-admin", component: HomeAdminComponent , canActivate: [AuthGuard]},
    {path: "app-client", component: ClientComponent, canActivate: [AuthGuard]},
    {path: "app-insert-measurement-unit", component: InsertMeasurementUnitComponent, canActivate: [AuthGuard]},
    {path: "app-insert-inventory-category", component: InsertInventoryCategoryComponent, canActivate: [AuthGuard]},
    {path: "app-inventory-category", component: InventoryCategoryComponent, canActivate: [AuthGuard]},
    {path: "app-update-inventory-category", component: UpdateInventoryCategoryComponent, canActivate: [AuthGuard]},
    {path: "app-update-measurement-unit", component: UpdateMeasurementUnitComponent, canActivate: [AuthGuard]},
    {path: "app-measurement-unit", component:MeasurementUnitComponent, canActivate: [AuthGuard]},
    {path: "app-insert-client", component: InsertClientComponent, canActivate: [AuthGuard]},
    {path: "app-model-brand", component: ModelBrandComponent, canActivate: [AuthGuard]},
    {path: "app-insert-model-brand", component: InsertModelBrandComponent, canActivate: [AuthGuard]},
    {path: "app-update-client", component: UpdateClientComponent, canActivate: [AuthGuard]},
    {path: "app-work-order", component: WorkOrderComponent, canActivate: [AuthGuard]},
    {path: "app-insert-work-order", component: InsertWorkOrderComponent, canActivate: [AuthGuard]},
    {path: "app-authentication",component:AuthenticationComponent}
=======
    {path: "app-device", component: DeviceComponent } ,  
    {path: "app-insert-device", component: InsertDeviceComponent },
    {path: "app-update-device", component: UpdateDeviceComponent },
    {path: "app-home-admin", component: HomeAdminComponent },
    {path: "app-client", component: ClientComponent},
    {path: "app-insert-measurement-unit", component: InsertMeasurementUnitComponent},
    {path: "app-insert-inventory-category", component: InsertInventoryCategoryComponent},
    {path: "app-inventory-category", component: InventoryCategoryComponent},
    {path: "app-update-inventory-category", component: UpdateInventoryCategoryComponent},
    {path: "app-update-measurement-unit", component: UpdateMeasurementUnitComponent},
    {path: "app-measurement-unit", component:MeasurementUnitComponent},
    {path: "app-insert-client", component: InsertClientComponent},
    {path: "app-model-brand", component: ModelBrandComponent},
    {path: "app-insert-model-brand", component: InsertModelBrandComponent},
    {path: "app-update-client", component: UpdateClientComponent},
    {path: "app-work-order", component: WorkOrderComponent},
    {path: "app-insert-work-order", component: InsertWorkOrderComponent},
    {path: "app-report-work-order",component: ReportWorkOrderComponent}
    
>>>>>>> a9914cf5d9a7d7b857c98d4594977e1e868dce3b
   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]

})
export class AppRoutingModule{}