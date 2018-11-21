import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateMeasurementUnitComponent } from './update-measurement-unit/update-measurement-unit.component';
import { Router } from '@angular/router';
import { MeasurementUnitService } from './measurement-unit.service';
import { MeasurementUnit } from '../model/measurementunit.model';
import { ConfigService } from './configurationtable.service';

@Component({
  selector: 'app-measurement-unit',
  templateUrl: './measurement-unit.component.html',
  styleUrls: ['./measurement-unit.component.css']
})
export class MeasurementUnitComponent implements OnInit {

  @ViewChild('measurementUnitId') childOne:UpdateMeasurementUnitComponent;

  measurementUnitEdit: MeasurementUnit;
  measurementUnitId: String;
  measurementUnits: MeasurementUnit[] = new Array<MeasurementUnit>();
  measurementUnit: MeasurementUnit = new MeasurementUnit();
  
  primario:boolean=true;
  secundario:boolean=false;

  columns = [
    { key: 'name', title: 'Nombre' },
    { key: 'edit', title: 'Editar' },
    { key: 'remove', title: 'Eliminar' }
  ];
  configuration;
  constructor(private router: Router, private service: MeasurementUnitService) {
    this.configuration = ConfigService.config;
   }

  ngOnInit() {
    this.service.getAllMeasurementUnits().subscribe(
      (data: MeasurementUnit[] ) => {
         this.measurementUnits = data;
       }
     ); 
  }

  toggle(key: string, isChecked: boolean): void {
    console.log('key: ', key, isChecked);
    this.configuration[key] = isChecked;
    this.configuration = { ...this.configuration };
  }

  createMeasurementUnit(): void {
    this.service.insertMeasurementUnit(this.measurementUnit)
    .subscribe(data => {
     
    });
    }

  edit(measurementUnit: String){
    console.log(measurementUnit+" hello");
    this.measurementUnitId= measurementUnit;
      this.primario=false;
      this.secundario=true;
  }
}
