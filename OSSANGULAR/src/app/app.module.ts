import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'ngx-easy-table';
import { TrendModule } from 'ngx-trend';


import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InventoryCategoryComponent } from './inventory-category/inventory-category.component';
import { ClientComponent } from './client/client.component';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { DeviceComponent } from './device/device.component';
import { DeviceStateComponent } from './device-state/device-state.component';
import { MenuComponent } from './menu/menu.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AppRoutingModule } from './app.routing.module';
import { InsertMeasurementUnitComponent } from './measurement-unit/insert-measurement-unit/insert-measurement-unit.component';
import { InsertDeviceComponent } from './device/insert-device/insert-device.component';
import { UpdateMeasurementUnitComponent } from './measurement-unit/update-measurement-unit/update-measurement-unit.component';
import { InsertInventoryCategoryComponent } from './inventory-category/insert-inventory-category/insert-inventory-category.component';
import { UpdateInventoryCategoryComponent } from './inventory-category/update-inventory-category/update-inventory-category.component';
import { InsertClientComponent } from './client/insert-client/insert-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import {  ClientService } from './client/client-service';
import { DeviceService } from './device/device.service';
import { DeviceStateService } from './device-state/device-state.service';
import { InventoryCategoryService } from './inventory-category/inventory-category-service';
import { MeasurementUnitService } from './measurement-unit/measurement-unit.service';
import { ModelBrandService } from './model-brand/model-brand.service';
import { UpdateDeviceComponent } from './device/update-device/update-device.component';
import { UpdateModelBrandComponent } from './model-brand/update-model-brand/update-model-brand.component';
import { InsertModelBrandComponent } from './model-brand/insert-model-brand/insert-model-brand.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { InsertWorkOrderComponent } from './work-order/insert-work-order/insert-work-order.component';
import { WorkOrderTypeComponent } from './work-order-type/work-order-type.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateWorkOrderComponent } from './work-order/update-work-order/update-work-order.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/guards/auth.guard';
import { JwtHelper } from './authentication/helper/jwt-helper';
import { TokenStorage } from './authentication/helper/token-storage';


@NgModule({
  declarations: [
    AppComponent,
    MeasurementUnitComponent,
    InventoryCategoryComponent,
    ClientComponent,
    ModelBrandComponent,
    DeviceComponent,
    DeviceStateComponent,
    MenuComponent,
    HomeAdminComponent,
    InsertMeasurementUnitComponent,
    InventoryCategoryComponent,
    InsertDeviceComponent,
    UpdateMeasurementUnitComponent,
    InsertInventoryCategoryComponent,
    UpdateInventoryCategoryComponent,
    InsertClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    UpdateDeviceComponent,
    UpdateModelBrandComponent,
    InsertModelBrandComponent,
    WorkOrderComponent,
    InsertWorkOrderComponent,
    WorkOrderTypeComponent,
    EmployeeComponent,
    UpdateWorkOrderComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    TableModule,
    TrendModule
  ],
  providers: [ClientService,DeviceService,DeviceStateService,
  InventoryCategoryService,MeasurementUnitService,ModelBrandService,AuthService,AuthGuard,JwtHelper,TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
