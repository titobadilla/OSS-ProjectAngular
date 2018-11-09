import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
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
    InsertDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
