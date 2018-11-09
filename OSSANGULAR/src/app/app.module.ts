import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeasurementUnitComponent } from './measurement-unit/measurement-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
