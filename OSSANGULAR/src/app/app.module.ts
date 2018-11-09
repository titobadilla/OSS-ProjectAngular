import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { SearchInventoryCategoryComponent } from './inventory-category/search-inventory-category/search-inventory-category.component';
import { UpdateInventoryCategoryComponent } from './inventory-category/update-inventory-category/update-inventory-category.component';


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
    SearchInventoryCategoryComponent,
    UpdateInventoryCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
