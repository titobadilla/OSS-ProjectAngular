import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MeasurementUnitService } from '../measurement-unit.service';
import { MeasurementUnit } from '../../model/measurementunit.model';


@Component({
  selector: 'app-insert-measurement-unit',
  templateUrl: './insert-measurement-unit.component.html',
  styleUrls: ['./insert-measurement-unit.component.css']
})
export class InsertMeasurementUnitComponent implements OnInit {

  measurementUnit: MeasurementUnit = new MeasurementUnit();
  constructor(private router: Router, private service: MeasurementUnitService) { }

  ngOnInit() {

  }

  createMeasurementUnit(): void {
    this.service.insertMeasurementUnit(this.measurementUnit)
    .subscribe(data => {
     
    });
    }



}
