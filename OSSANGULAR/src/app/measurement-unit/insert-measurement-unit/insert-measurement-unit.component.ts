import { Component, OnInit } from '@angular/core';
import { MeasurementUnit } from './measurementUnit';
import {Router} from '@angular/router';
import { MeasurementUnitService } from '../measurement-unit.service';


@Component({
  selector: 'app-insert-measurement-unit',
  templateUrl: './insert-measurement-unit.component.html',
  styleUrls: ['./insert-measurement-unit.component.css']
})
export class InsertMeasurementUnitComponent implements OnInit {

  measurementUnits: MeasurementUnit[] = new Array<MeasurementUnit>();
  measurementUnit: MeasurementUnit = new MeasurementUnit();
  constructor(private router: Router, private service: MeasurementUnitService) { }

  ngOnInit() {

    this.service.getAllMeasurementUnits().subscribe(
      (data: MeasurementUnit[] ) => {
         this.measurementUnits = data;
       }
     ); 
  }

  createMeasurementUnit(): void {
    this.service.insertMeasurementUnit(this.measurementUnit)
    .subscribe(data => {
      console.log(this.measurementUnit.id);
    });
    }

}
