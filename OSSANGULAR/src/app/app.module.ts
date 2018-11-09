import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';
import { InventoryComponentComponent } from './inventory-component/inventory-component.component';
import { InventoryCategoryComponent } from './inventory-category/inventory-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementUnitComponent
    InventoryComponentComponent,
    InventoryCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
